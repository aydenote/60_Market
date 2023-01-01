// fileArr  : Blob  객체형 파일 데이터 저장
// arrImgName : 파일명 저장
let fileArr = [];
let arrImgName = [];

// 게시물 수정 , 생성에 따른 함수 실행
export function checkPost(postUserProfile, postImgContainer, postUploadTxt, postUploadBtn) {
  const URLSearch = new URLSearchParams(location.search);
  const postid = URLSearch.get('postid');
  fileArr = [];

  // 게시물 수정 PUT 요청
  if (postid) {
    const token = localStorage.getItem('Token');
    const defaultUrl = 'https://mandarin.api.weniv.co.kr';

    getLoginUserInfo(postUserProfile);
    getPost(defaultUrl, postid, token, postUploadTxt, postImgContainer);
    postUploadBtn.addEventListener('click', () => {
      editPost(defaultUrl, postid, token, postUploadTxt);
    });
  } else {
    postUploadBtn.addEventListener('click', createPost);
    getLoginUserInfo(postUserProfile);
  }
}

// 로그인 유저 정보
async function getLoginUserInfo(profileImgEl) {
  const token = localStorage.getItem('Token');
  const accountname = localStorage.getItem('accountname');
  const url = 'https://mandarin.api.weniv.co.kr';

  try {
    const res = await fetch(`${url}/profile/${accountname}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    const userJson = await res.json();
    profileImgEl.setAttribute('src', userJson.profile.image);
  } catch (err) {
    console.log(err);
  }
}

// 업로드 사진 미리보기, 이미지 삭제 이벤트 등록
export function readInputFile(event) {
  const reader = new FileReader();
  const files = event.target.files;
  const postImgContainer = document.querySelector('.postUploadImageScreen');
  const postImgItem = document.querySelectorAll('.postImgItem');

  reader.readAsDataURL(files[0]);
  fileArr.push(files[0]);
  const imgFileName = files[0].name;
  if (postImgItem.length <= 2) {
    reader.onload = function () {
      const imgItem = document.createElement('div');
      imgItem.style.backgroundImage = `url(${reader.result})`;
      imgItem.className = 'postImgItem';
      imgItem.dataset.key = `${imgFileName}`;
      postImgContainer.appendChild(imgItem);
      event.target.value = '';

      const closeBtn = document.createElement('button');
      closeBtn.className = 'postImgCloseBtn';
      imgItem.appendChild(closeBtn);
      closeBtn.addEventListener('click', deletImg);
    };
  } else {
    fileArr.pop();
    alert('이미지는 최대 3장 업로드 가능합니다.');
  }
}

// 해당 이미지 fileArr에서 삭제, 업로드 사진 미리보기에서 삭제
function deletImg(event) {
  const postImgContainer = document.querySelector('.postUploadImageScreen');
  const imgItem = event.target.parentNode;
  const targetImgName = imgItem.dataset.key;
  const defaultUrl = 'https://mandarin.api.weniv.co.kr';
  const fileLength = fileArr.length;

  // 업로드 사진 미리보기에서 삭제
  postImgContainer.removeChild(imgItem);

  // 클릭한 타겟을 fileArr 배열에서 삭제
  for (let i = 0; i < fileLength; i++) {
    if (fileArr[i].name === targetImgName) {
      fileArr.splice(i, 1);
    }
  }

  for (let i = 0; i < fileLength; i++) {
    let alreadyImg = imgItem.style.backgroundImage.split('"')[1].replace(`${defaultUrl}/`, '');
    if (fileArr[i].name === alreadyImg) {
      fileArr.splice(i, 1);
      break;
    }
  }
}

// 이미지 업로드
async function uploadImg(fileArr) {
  const formData = new FormData();
  const url = 'https://mandarin.api.weniv.co.kr';
  arrImgName = [];

  fileArr.forEach(file => {
    formData.append('image', file);
  });
  try {
    const response = await fetch(url + '/image/uploadfiles', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    data.forEach(data => {
      arrImgName.push(`${url}/${data.filename}`);
    });
    fileArr = [];
    return arrImgName;
  } catch (err) {
    alert('이미지 파일은 최대 3장까지만 가능합니다.');
  }
}

// postUploadComentTxt나 postUploadImageScreen에 이미지가 업로드되면 업로드버튼 활성화
export function postInput() {
  const postUploadTxt = document.querySelector('.postUploadComentTxt');
  const postUploadBtn = document.querySelector('.headerBarBtn.buttonClick');

  if (postUploadTxt.value.length >= 1) {
    postUploadBtn.style.opacity = '1';
    postUploadBtn.disabled = false;
  } else {
    postUploadBtn.style.opacity = '0.3';
    postUploadBtn.disabled = true;
  }
}

// 게시글 작성 후 데이터 서버에 보내기
export async function createPost() {
  const postUploadTxt = document.querySelector('.postUploadComentTxt');
  const token = localStorage.getItem('Token');
  const url = 'https://mandarin.api.weniv.co.kr';
  const contentText = postUploadTxt.value;
  const images = await uploadImg(fileArr);

  const res = await fetch(`${url}/post`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      post: {
        content: contentText,
        image: images.join(','),
      },
    }),
  });
  const json = await res.json();
  if (json.post) {
    fileArr = [];
    window.location.hash = '#profile';
  } else {
    return;
  }
}

// 게시물 수정 페이지에서 url를 파일로 변환
const convertURLtoFile = async (postImgArr, fileArr) => {
  for (const imgUrl of postImgArr) {
    const response = await fetch(imgUrl);
    const data = await response.blob();
    const ext = imgUrl.split('.').pop(); // url 구조에 맞게 수정할 것
    const filename = imgUrl.split('/').pop(); // url 구조에 맞게 수정할 것
    const metadata = { type: `image/${ext}` };
    fileArr.push(new File([data], filename, metadata));
  }
};

// 게시물 수정 페이지에서 이미지 미리보기 및 삭제 버튼 추가
async function setImg(postImgContainer, postImgArr, fileArr) {
  await convertURLtoFile(postImgArr, fileArr);
  if (postImgArr.length >= 1 && postImgArr[0] !== '') {
    postImgArr.map(src => {
      const imgItem = document.createElement('div');
      imgItem.className = 'postImgItem';
      imgItem.setAttribute('style', `background-image: url(${src})`);
      postImgContainer.appendChild(imgItem);

      const closeBtn = document.createElement('button');
      closeBtn.className = 'postImgCloseBtn';
      imgItem.appendChild(closeBtn);
      closeBtn.addEventListener('click', deletImg);
    });
  }
}

// 서버에 저장된 게시글, 이미지 가져오기
async function getPost(defaultUrl, postid, token, postUploadTxt, postImgContainer) {
  try {
    const res = await fetch(`${defaultUrl}/post/${postid}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    const json = await res.json();
    const post = json.post;
    const postContent = post.content;
    const postImgArr = post.image.split(',');

    postUploadTxt.textContent = postContent;
    setImg(postImgContainer, postImgArr, fileArr);
  } catch (err) {
    console.log(err);
  }
}

// 게시물 수정
async function editPost(defaultUrl, postid, token, postUploadTxt) {
  const resultImg = await uploadImg(fileArr);

  try {
    const res = await fetch(`${defaultUrl}/post/${postid}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        post: {
          content: postUploadTxt.value,
          image: resultImg.join(','),
        },
      }),
    });
    const json = await res.json();
    fileArr = [];
    window.history.pushState({}, '', '/profile'); // 주소 업데이트
    new App(config).setup();

    if (json.type == 'entity.too.large') {
      console.error(json.message);
      alert('이미지 용량이 너무 큽니다.');
    }
  } catch (err) {
    console.error(err);
    window.location.hash = '#error';
  }
}
