const backHistory = document.querySelector(".headerBarBack.buttonClick");
const profileLinkBtn = document.querySelector(".link");
const followingCount = document.querySelector(".ProfileContent .followings");
const followerCount = document.querySelector(".ProfileContent .followers");

const URLSearch = new URLSearchParams(location.search);
let accountName = URLSearch.get("accountname");
const myAccountName = localStorage.getItem("accountname");
accountName = accountName === null ? myAccountName : accountName;

// 뒤로 가기
backHistory.addEventListener("click", () => {
  window.location = document.referrer;
});

// 팔로우 링크로 이동
function clickedFollowLink(e) {
  const profileUser = document.querySelector(".profileInfo .userId");
  const userId = profileUser.innerText.replace(/@/g, "");
  location.href = `profileFollow.html\?accountname=${userId}\&title=${e.target.className}`;
}

// 프로필 정보 가져오기
async function getProfileInfo() {
  const url = "https://mandarin.api.weniv.co.kr";
  const token = localStorage.getItem("Token");

  const setting = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
  };

  try {
    const resProfile = await fetch(`${url}/profile/${accountName}`, setting);
    const resProfileJson = await resProfile.json();
    const userProfile = resProfileJson.profile;
    // 사용자에 따라 페이지 구현
    if (userProfile.accountname === myAccountName) {
      setMyProfile(userProfile);
    } else {
      setYourProfile(userProfile);
    }
  } catch (err) {
    console.error(err);
  }
}
getProfileInfo();

// 내 프로필 페이지 구현
function setMyProfile(userProfile) {
  const createEditLink = document.createElement("a");
  const createProductLink = document.createElement("a");

  createEditLink.setAttribute("class", "fixProfile");
  createEditLink.setAttribute("href", "editProfile.html");
  createEditLink.innerText = "프로필 수정";
  profileLinkBtn.append(createEditLink);

  createProductLink.setAttribute("class", "addPosting");
  createProductLink.setAttribute("href", "addProduct.html");
  createProductLink.innerText = "상품 등록";
  profileLinkBtn.append(createProductLink);

  document.querySelector(".ProfileContent .myImage").src = userProfile.image;
  document.querySelector(".profileInfo .userName").innerText =
    userProfile.username;
  document.querySelector(
    ".profileInfo .userId"
  ).innerText = `@${userProfile.accountname}`;
  document.querySelector(".profileInfo .introduction").innerText =
    userProfile.intro;

  followingCount.innerText = userProfile.following.length;
  followerCount.innerText = userProfile.follower.length;

  getProductList(userProfile);
}

// 다른 사람 프로필 페이지 구현
function setYourProfile(userProfile) {
  const createMessageImg = document.createElement("img");
  const createFollowButton = document.createElement("button");
  const createShareImg = document.createElement("img");

  createMessageImg.setAttribute("class", "messageBtn");
  createMessageImg.setAttribute(
    "src",
    "../asset/images/icons/icon__message.svg"
  );
  createMessageImg.setAttribute("alt", "메세지 버튼");
  createMessageImg.addEventListener("click", () => {
    location.href = "../pages/chatting1.html";
  });
  profileLinkBtn.append(createMessageImg);

  createFollowButton.setAttribute("class", "followBtn");
  createFollowButton.setAttribute("onclick", "clickFollowBtn()");
  createFollowButton.innerText = "팔로우";
  profileLinkBtn.append(createFollowButton);

  createShareImg.setAttribute("class", "shareBtn");
  createShareImg.setAttribute("src", "../asset/images/icons/icon__share.svg");
  createShareImg.setAttribute("alt", "공유 버튼");
  profileLinkBtn.append(createShareImg);

  document.querySelector(".ProfileContent .myImage").src = userProfile.image;
  document.querySelector(".profileInfo .userName").innerText =
    userProfile.username;
  document.querySelector(
    ".profileInfo .userId"
  ).innerText = `@ ${userProfile.accountname}`;
  document.querySelector(".profileInfo .introduction").innerText =
    userProfile.intro;

  followingCount.innerText = userProfile.following.length;
  followerCount.innerText = userProfile.follower.length;

  getProductList(userProfile);
}

// 사용자가 판매 중인 상품 정보 가져오기
async function getProductList(userProfile) {
  const url = "https://mandarin.api.weniv.co.kr";
  const token = localStorage.getItem("Token");

  const setting = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
  };
  try {
    const resProfileProduct = await fetch(
      `${url}/product/${userProfile.accountname}`,
      setting
    );
    const resProfileProductJson = await resProfileProduct.json();
    setProductList(resProfileProductJson);
  } catch (err) {
    console.error(err);
  }
}

// 등록된 상품 수에 따라 프로필에 해당 상품 반영
function setProductList(resProfileProductJson) {
  if (resProfileProductJson.product.length !== 0) {
    const saleItems = document.querySelector(".saleItemContainer");
    const createP = document.createElement("p");
    const createUl = document.createElement("ul");

    createP.setAttribute("class", "title");
    createUl.setAttribute("class", "productList");
    saleItems.append(createP);
    saleItems.append(createUl);
    const productList = document.querySelector(".saleItems .productList");
    document.querySelector(".saleItems .title").innerText = "판매 중인 상품";
    productList.addEventListener("click", productModal);

    for (const product of resProfileProductJson.product) {
      productList.innerHTML += `<li id="${product.id}">
      <img src="${product.itemImage}" alt="상품 이미지" />
      <p class="ProductTitle">${product.itemName}</p>
      <p class="price">${product.price.toLocaleString()}원</p>
    </li>`;
    }
  } else {
    return;
  }
}

// 팔로우, 언팔로우 스타일 변경 구현
function clickFollowBtn() {
  const followBtn = document.querySelector(".followBtn");
  followBtn.classList.toggle("follow");
  if (followBtn.className === "followBtn follow") {
    followBtn.innerText = "언팔로우";
    followBtn.style.opacity = "0.3";
  } else {
    followBtn.innerText = "팔로우";
    followBtn.style.opacity = "1";
  }
}

// 게시물 가지고 오기
async function getPostingList() {
  const url = "https://mandarin.api.weniv.co.kr";
  const token = localStorage.getItem("Token");

  const setting = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
  };
  try {
    const resProfileProduct = await fetch(
      `${url}/post/${accountName}/userpost/?limit=9`,
      setting
    );
    const resProfileProductJson = await resProfileProduct.json();
    userPostInfo = resProfileProductJson.post;
    setPostingList(userPostInfo);
  } catch (err) {
    console.error(err);
  }
}
let userPostInfo;

getPostingList();

// 게시물 타입바 생성 및 최초 목록형으로 포스팅
function setPostingList(userPostInfo) {
  const postingSummary = document.querySelector(".postingSummary");
  if (userPostInfo.length === 0) {
    postingSummary.classList.add("hidden");
  } else {
    postingSummary.classList.remove("hidden");
    const createArticle = document.createElement("article");
    const createH3 = document.createElement("h3");
    createArticle.setAttribute("class", "post");
    createH3.setAttribute("class", "ir");
    createH3.innerText = "피드 게시글";
    createArticle.appendChild(createH3);

    postingSummary.append(createArticle);
    listTypePost();
  }
}

// 목록형으로 포스팅 표시
function listTypePost() {
  const postingSummary = document.querySelector(".postingSummary");
  const postContent = document.querySelector(".postContent");
  const albumType = document.querySelector(".postingType.album.buttonClick");
  const ListType = document.querySelector(".postingType.list.buttonClick");

  albumType.classList.add("unselected");
  ListType.classList.remove("unselected");
  if (postContent) {
    postContent.remove();
  }
  const createArticle = document.createElement("article");
  const createH3 = document.createElement("h3");
  createArticle.setAttribute("class", "post");
  createH3.setAttribute("class", "ir");
  createH3.innerText = "피드 게시글";
  createArticle.appendChild(createH3);

  postingSummary.append(createArticle);
  const posting = document.querySelectorAll(".post");
  posting[0].innerHTML = '<h3 class="ir">피드 게시글</h3>';

  if (posting.length >= 2) {
    posting[1].remove();
  }

  for (const post of userPostInfo) {
    let postListContent;
    let heartStatus;

    let postImage = "";
    if (post.image && post.image.search("undefined") === -1) {
      let images = post.image.split(",");
      for (const image of images) {
        postImage += `
        <li>
          <img src="${image}" alt="게시물 이미지" onerror="this.style.display='none'"/>
        </li>
        `;
      }
    }

    let checkImg = !postImage
      ? ""
      : `<div class="postImgContent"><ul>${postImage}</ul></div>`;

    // 좋아요 이미지 on, off 스타일 구현
    if (post.hearted) {
      heartStatus = "likeBtn on";
    } else {
      heartStatus = "likeBtn";
    }
    postListContent = `
          <section>
            <div class="userList">
              <div class="userItem">
                <a href="profile.html?accountname=${
                  post.author.accountname
                }" class="userBox">
                  <img src="${
                    post.author.image
                  }" alt="프로필 이미지" class="userProfileImage" />
                  <div class="userInfo">
                    <strong class="userNickname">${
                      post.author.username
                    }</strong>
                    <div class="userText">
                      <p class="userMsgContent userStatusMsg">@${
                        post.author.accountname
                      }</p>
                    </div>
                  </div>
                  <button onclick="clickUserModal(event)" class="moreBtn buttonClick">
                    <span class="ir">게시글 더보기 버튼</span>
                  </button>
                </a>
              </div>
            </div>
          </section>
          <section id="${post.id}" class="postContent">
            <h4 class="ir">게시글 내용</h4>
            <p>${post.content}</p>
            ${checkImg}
            </div>
            <div class="postBtnContent">
              <button class="${heartStatus}" onclick="clickHeart(event)">
                <span class="ir">좋아요 버튼</span>
                <span class="likeCount">${post.heartCount}</span>
              </button>
              <a href="post.html\?postid=${post.id}" class="commentBtn">
                <span class="commentCount">${post.comments.length}</span>
              </a>
            </div>
            <strong class="postDate">${timeForToday(post.createdAt)}</strong>
          </section>`;
    posting[0].insertAdjacentHTML("beforeend", postListContent);
  }
}

// 앨범형 포스팅 구현
function albumTypePost() {
  const postingSummary = document.querySelector(".postingSummary");
  const postContent = document.querySelectorAll(".postContent");
  const post = document.querySelector(".post");
  const albumType = document.querySelector(".postingType.album.buttonClick");
  const ListType = document.querySelector(".postingType.list.buttonClick");

  ListType.classList.add("unselected");
  albumType.classList.remove("unselected");

  if (post) {
    post.remove();
  }
  if (postContent.length >= 1) {
    postContent[0].remove();
  }

  const createArticle = document.createElement("article");
  const createH2 = document.createElement("h2");
  const createUl = document.createElement("ul");
  createArticle.setAttribute("class", "postContent");
  createH2.setAttribute("class", "ir");
  createH2.innerText = "등록된 게시물";
  createUl.setAttribute("class", "postingList");
  createArticle.appendChild(createH2);
  createArticle.appendChild(createUl);
  postingSummary.appendChild(createArticle);

  for (const post of userPostInfo) {
    const postImg = post.image.split(",");
    // 게시물에 이미지가 없는 경우, img 태그 생성 불가.
    // 게시물에 이미지가 2개 이상인 경우, 이미지 레이어 아이콘 추가.
    if (postImg[0] === "") {
    } else if (postImg.length >= 2) {
      createUl.innerHTML += `<li>
          <img src="${postImg[0]}" alt="" onerror="this.style.display='none'"/>
          <img class="imageLayer" src="../asset/images/icons/icon__imageLayer.svg" alt="이미지 레이어 아이콘" onerror="this.style.display='none'"/>
        </li>`;
    } else {
      createUl.innerHTML += `<li>
          <img src="${postImg[0]}" alt="" onerror="this.style.display='none'"/>
        </li>`;
    }
  }
}

// 게시물 등록 시간 계산 함수
function timeForToday(time) {
  const postingDate = time.substring(0, time.length - 1);
  const ms = Date.parse(postingDate);
  const now = Date.now();
  const gap = (now - ms) / 1000;
  if (gap < 60) return "방금전";
  else if (gap < 3600) return `${parseInt(gap / 60)}분 전`;
  else if (gap < 86400) return `${parseInt(gap / 3600)}시간 전`;
  else if (gap < 2592000) return `${parseInt(gap / 86400)}일 전`;
  else return `${parseInt(gap / 2592000)}달 전`;
}

// 좋아요
async function likeHeart(postingID) {
  const url = `https://mandarin.api.weniv.co.kr/post/${postingID}/heart`;
  const token = localStorage.getItem("Token");

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return data;
}

// 좋아요 취소
async function likeUnHeart(postingID) {
  const url = `https://mandarin.api.weniv.co.kr/post/${postingID}/unheart`;
  const token = localStorage.getItem("Token");
  const res = await fetch(url, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return data;
}

// 좋아요 버튼 클릭
async function clickHeart(e) {
  const likeBtn = e.target;
  const likeCount = e.target.children[1];
  const postId = e.target.closest("section").id;
  let data = {};

  if (likeBtn.classList.contains("on")) {
    likeBtn.classList.remove("on");
    data = await likeUnHeart(postId);
    likeCount.innerHTML = data.post.heartCount;
  } else {
    likeBtn.classList.add("on");
    data = await likeHeart(postId);
    likeCount.innerHTML = data.post.heartCount;
  }
}

// 사용자에 따라 헤더 모달 구현
const headerModal = document.querySelector(".headerBarBtn.buttonClick");
const userLogout = document.querySelector(".setUsertModal .modalBtn2");
const headerBarModal = document.querySelector(".modalBg.setUsertModal");

userLogout.addEventListener("click", clickLogoutModal);
headerModal.addEventListener("click", clickHeaderModal);

function clickHeaderModal() {
  const modalClose = document.querySelector(".setUsertModal .modalClose");

  modalClose.addEventListener("click", () => {
    headerBarModal.classList.add("hidden");
  });
  headerBarModal.classList.toggle("hidden");
}

// 사용자 로그아웃 기능
function clickLogoutModal() {
  const logoutCheckModal = document.querySelector(".modalAlert.logoutAlert");
  const cancelBtn = document.querySelector(".logoutAlert .cancelBtn");
  const logoutBtn = document.querySelector(".logoutAlert .logoutBtn");

  logoutCheckModal.classList.remove("hidden");

  cancelBtn.addEventListener("click", () => {
    logoutCheckModal.classList.add("hidden");
  });

  logoutBtn.addEventListener("click", () => {
    localStorage.clear();
    location.href = "../pages/logIn.html";
  });
}

// 사용자에 따라 포스트 모달 구현
function clickUserModal(event) {
  event.preventDefault();
  const postingId = event.path[4].nextElementSibling.id;

  // 포스팅 삭제
  if (accountName === myAccountName || accountName === null) {
    const postDelete = document.querySelector(".posttModal .modalBtn1");
    const cancelBtn = document.querySelector(".postDelAlert .cancelBtn");
    const postDelAlert = document.querySelector(".postDelAlert");
    const posttModal = document.querySelector(".posttModal");
    const modalClose = document.querySelector(".posttModal .modalClose");

    const delBtn = document.querySelector(".postDelAlert .delBtn");
    posttModal.classList.remove("hidden");

    modalClose.addEventListener("click", () => {
      posttModal.classList.add("hidden");
    });

    postDelete.addEventListener("click", () => {
      postDelAlert.classList.remove("hidden");
    });

    cancelBtn.addEventListener("click", () => {
      postDelAlert.classList.add("hidden");
    });

    delBtn.addEventListener("click", async function () {
      const url = "https://mandarin.api.weniv.co.kr";
      const token = localStorage.getItem("Token");

      const setting = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      };

      try {
        const resDeleteProduct = await fetch(
          `${url}/post/${postingId}`,
          setting
        );
        console.log(resDeleteProduct);
        if (resDeleteProduct) {
          location.href = "../pages/profile.html";
        }
      } catch (err) {
        console.error(err);
      }
    });
    // 포스팅 수정페이지로 이동
    const postEditBtn = document.querySelector(".posttModal .modalBtn2");

    postEditBtn.addEventListener("click", () => {
      window.location = `postUpload.html\?postid=${postingId}`;
    });
  } else {
    // 게시물 신고
    const reportAlert = document.querySelector(".reportAlert");
    const reportModal = document.querySelector(".reportModal");
    const cancelBtn = document.querySelector(".reportAlert .cancelBtn");
    const reportModalBtn = document.querySelector(".reportModal .modalBtn1");
    const reportBtn = document.querySelector(".reportAlert .reportBtn");
    const modalClose = document.querySelector(".reportModal .modalClose");
    reportModal.classList.remove("hidden");

    cancelBtn.addEventListener("click", () => {
      reportAlert.classList.add("hidden");
    });

    modalClose.addEventListener("click", () => {
      reportModal.classList.add("hidden");
    });

    reportModalBtn.addEventListener("click", () => {
      reportAlert.classList.remove("hidden");
    });

    reportBtn.addEventListener("click", async function () {
      reportModal.classList.add("hidden");
      const url = "https://mandarin.api.weniv.co.kr";
      const token = localStorage.getItem("Token");

      const setting = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      };

      try {
        const resReport = await fetch(
          `${url}/post/${postingId}/report`,
          setting
        );
        const resReportJson = await resReport.json();
        if (resReportJson.status !== 404) {
          reportAlert.classList.add("hidden");
        }
      } catch (err) {
        console.error(err);
      }
    });
  }
}

// 상품 삭제
function productModal(e) {
  const productModal = document.querySelector(".productModal");
  const productModalClose = document.querySelector(".productModal .modalClose");
  const productDeleteModal = document.querySelector(".productModal .modalBtn1");
  const productDelAlert = document.querySelector(".productDelAlert");
  const productLink = document.querySelector(".productModal .modalBtn3");
  const alertCancel = document.querySelector(".productDelAlert .cancelBtn");
  const productDelete = document.querySelector(".alertBtnContent .delBtn");

  productModal.classList.remove("hidden");

  // 모달 창 닫기
  productModalClose.addEventListener("click", () => {
    productModal.classList.add("hidden");
  });

  // 상품 삭제 확인 모달
  productDeleteModal.addEventListener("click", () => {
    productDelAlert.classList.remove("hidden");
  });

  // 삭제 확인 모달에서 취소
  alertCancel.addEventListener("click", () => {
    productDelAlert.classList.add("hidden");
  });

  // 판매 상품 연결
  productLink.addEventListener("click", () => {
    location.href = "../pages/error.html";
  });

  // 판매 상품 삭제
  productDelete.addEventListener("click", async function () {
    const productId = e.target.closest("li").id;
    const url = "https://mandarin.api.weniv.co.kr";
    const token = localStorage.getItem("Token");

    const setting = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    };

    try {
      const resProfileProduct = await fetch(
        `${url}/product/${productId}`,
        setting
      );
      if (resProfileProduct.status === 200) {
        location.href = "../pages/profile.html";
      }
    } catch (err) {
      console.error(err);
    }
  });
}
