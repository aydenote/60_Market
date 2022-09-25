import App from "./app.js";

let imgFiles = [];
let fileArr = [];

const config = {
  rootEl: "#root",
};

// 뒤로 가기
// backHistory.addEventListener("click", () => {
//   window.location = document.referrer;
// });

// 로그인 유저 정보
async function getLoginUserInfo(profileImgEl) {
  const token = localStorage.getItem("Token");
  const accountname = localStorage.getItem("accountname");
  const url = "https://mandarin.api.weniv.co.kr";

  try {
    const res = await fetch(`${url}/profile/${accountname}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });
    const userJson = await res.json();
    profileImgEl.setAttribute("src", userJson.profile.image);
  } catch (err) {
    console.log(err);
  }
}

// 사진 미리보기, 사진 삭제
export function readInputFile(e) {
  const files = e.target.files;
  const postImgContainer = document.querySelector(".postUploadImageScreen");
  fileArr.push(files[0]);
  imgFiles.push(files[0]);

  // fileArr.forEach((file) => imgFiles.push(file));
  fileArr.forEach(function (i) {
    if (files.length <= 3) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const imgItem = document.createElement("div");
        imgItem.style.backgroundImage = `url(${reader.result})`;
        imgItem.className = "postImgItem";
        console.log(imgItem);

        postImgContainer.appendChild(imgItem);
        e.target.value = "";

        const closeBtn = document.createElement("button");
        closeBtn.className = "postImgCloseBtn";
        imgItem.appendChild(closeBtn);
        closeBtn.addEventListener("click", deletImg);
      };
      reader.readAsDataURL(i);
      fileArr = [];
    }
  });
  return imgFiles;
}

// 이미지 업로드
// let arrImg = [];
async function uploadImg(imgFiles) {
  console.log(imgFiles);
  const formData = new FormData();
  const url = "https://mandarin.api.weniv.co.kr";
  let arrImg = [];
  imgFiles.forEach((file) => {
    formData.append("image", file);
  });
  try {
    const response = await fetch(url + "/image/uploadfiles", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    console.log(data);
    data.forEach((data) => {
      arrImg.push(`${url}/${data.filename}`);
    });
    imgFiles = [];
    return arrImg;
  } catch (err) {
    alert("이미지 파일은 최대 3장까지만 가능합니다.");
  }
}

// postUploadComentTxt나 postUploadImageScreen에 이미지가 업로드되면 업로드버튼 활성화
// postUploadBtn.disabled = true;
export function postInput() {
  const postUploadTxt = document.querySelector(".postUploadComentTxt");
  const postUploadBtn = document.querySelector(".headerBarBtn.buttonClick");

  if (postUploadTxt.value.length >= 1) {
    postUploadBtn.style.opacity = "1";
    postUploadBtn.disabled = false;
  } else {
    postUploadBtn.style.opacity = "0.3";
    postUploadBtn.disabled = true;
  }
}

// 게시글 작성 후 데이터 서버에 보내기
export async function createPost() {
  const postUploadTxt = document.querySelector(".postUploadComentTxt");
  const token = localStorage.getItem("Token");
  const url = "https://mandarin.api.weniv.co.kr";
  const contentText = postUploadTxt.value;
  const images = await uploadImg(imgFiles);

  const res = await fetch(`${url}/post`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      post: {
        content: contentText,
        image: images.join(","),
      },
    }),
  });
  const json = await res.json();
  if (json.post) {
    window.history.pushState({}, "", "/profile"); // 주소 업데이트
    new App(config).setup();
  } else {
    return;
  }
}

// 게시물 수정 , 생성에 따른 함수 실행
export function checkPost(
  postUserProfile,
  postImgContainer,
  postUploadTxt,
  postUploadBtn
) {
  const URLSearch = new URLSearchParams(location.search);
  const postid = URLSearch.get("postid");

  // 게시물 수정 PUT 요청
  if (postid) {
    const token = localStorage.getItem("Token");
    const defaultUrl = "https://mandarin.api.weniv.co.kr";

    getLoginUserInfo(postUserProfile);
    getPost(defaultUrl, postid, token, postUploadTxt, postImgContainer);
    postUploadBtn.addEventListener("click", () => {
      editPost(defaultUrl, postid, token, postUploadTxt);
    });
  } else {
    imgFiles = [];
    postUploadBtn.addEventListener("click", createPost);
    getLoginUserInfo(postUserProfile);
  }
}

// 이미지 미리보기, 삭제 버튼
function setImg(postImgContainer, postImgArr) {
  if (postImgArr.length >= 1 && postImgArr[0] !== "") {
    postImgArr.map((src) => {
      const imgItem = document.createElement("div");
      imgItem.className = "postImgItem";
      imgItem.setAttribute("style", `background-image: url(${src})`);
      postImgContainer.appendChild(imgItem);

      const closeBtn = document.createElement("button");
      closeBtn.className = "postImgCloseBtn";
      imgItem.appendChild(closeBtn);

      closeBtn.addEventListener("click", function () {
        postImgArr.splice([...postImgContainer.children].indexOf(imgItem), 1);
        postImgContainer.removeChild(imgItem);
      });
    });
    const postImgCloseBtn = document.querySelectorAll(".postImgCloseBtn");
    [].forEach.call(postImgCloseBtn, function (postImgCloseBtn) {
      postImgCloseBtn.addEventListener("click", deletImg);
    });
  }
}

function deletImg(event) {
  // MEMO:: imgFiles에서 삭제, 미리보기에 삭제
  const postImgContainer = document.querySelector(".postUploadImageScreen");
  const itemImg = document.querySelectorAll(".postImgItem");
  const imgItem = event.target.parentNode;
  console.log(imgFiles);
  for (const item of [...itemImg]) {
    imgFiles.push(item.style.backgroundImage.split('"')[1]);
  }

  // console.log([postImgContainer.children].indexOf(imgItem));
  // imgFiles.splice([postImgContainer.children].indexOf(imgItem), 1);
  imgFiles.splice([...postImgContainer.children].indexOf(imgItem), 1);
  console.log(imgFiles);
}

async function getPost(
  defaultUrl,
  postid,
  token,
  postUploadTxt,
  postImgContainer
) {
  try {
    const res = await fetch(`${defaultUrl}/post/${postid}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });
    const json = await res.json();
    const post = json.post;

    const postContent = post.content;
    const postImgArr = post.image.split(",");

    postUploadTxt.textContent = postContent;

    return setImg(postImgContainer, postImgArr);
  } catch (err) {
    console.log(err);
  }
}

async function editPost(defaultUrl, postid, token, postUploadTxt) {
  const resultImg = await uploadImg(imgFiles);

  console.log(resultImg);
  try {
    const res = await fetch(`${defaultUrl}/post/${postid}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        post: {
          content: postUploadTxt.value,
          image: resultImg.join(","),
        },
      }),
    });
    const json = await res.json();
    // location.href = "./profile.html";

    if (json.type == "entity.too.large") {
      console.error(json.message);
      alert("이미지 용량이 너무 큽니다.");
    }
  } catch (err) {
    // location.href = "./error.html";
    console.error(err);
  }
}
