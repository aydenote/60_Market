import { backHistory, timeForToday } from "./newScript/common.js";
import { clickHeart } from "./newScript/heartBtn.js";
import App from "./app.js";
import {
  logoutModal,
  clickUserModal,
  productModal,
} from "./newScript/modal.js";

const config = {
  rootEl: "#root",
};

class Profile {
  constructor() {
    const userPostInfo = [];
  }
  // 프로필 정보 가져오기
  getProfileInfo = async function (myAccountName) {
    const url = "https://mandarin.api.weniv.co.kr";
    const token = localStorage.getItem("Token");
    const URLSearch = new URLSearchParams(location.search);
    let accountName = URLSearch.get("accountname");

    accountName = accountName === null ? myAccountName : accountName;

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
        this.setMyProfile(userProfile);
      } else {
        this.setYourProfile(userProfile);
      }
    } catch (err) {
      console.error(err);
    }
  };

  setMyProfile = (userProfile) => {
    const createEditLink = document.createElement("div");
    const createProductLink = document.createElement("div");
    const profileLinkBtn = document.querySelector(".link");
    const followingCount = document.querySelector(".followings");
    const followerCount = document.querySelector(".followers");

    createEditLink.setAttribute("class", "fixProfile");
    createEditLink.addEventListener("click", () => {
      window.history.pushState({}, "", "/editProfile"); // 주소 업데이트
      new App(config).setup();
    });
    createEditLink.innerText = "프로필 수정";
    profileLinkBtn.append(createEditLink);

    createProductLink.setAttribute("class", "addPosting");
    createProductLink.addEventListener("click", () => {
      window.history.pushState({}, "", "/product"); // 주소 업데이트
      new App(config).setup();
    });
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

    this.getProductList(userProfile);
  };

  // 다른 사람 프로필 페이지 구현
  setYourProfile = (userProfile) => {
    const createMessageImg = document.createElement("img");
    const createFollowButton = document.createElement("button");
    const createShareImg = document.createElement("img");
    const profileLinkBtn = document.querySelector(".link");
    const followingCount = document.querySelector(".followings");
    const followerCount = document.querySelector(".followers");

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

    // 팔로우 / 언팔로우 스타일
    createFollowButton.addEventListener("click", (event) => {
      event.target.classList.toggle("follow");
      if (event.target.className === "followBtn follow") {
        event.target.innerText = "언팔로우";
        event.target.style.opacity = "0.5";
      } else {
        event.target.innerText = "팔로우";
        event.target.style.opacity = "1";
      }
    });

    this.getProductList(userProfile);
  };

  // 사용자가 판매 중인 상품 정보 가져오기
  getProductList = async function (userProfile) {
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
      this.setProductList(resProfileProductJson);
    } catch (err) {
      console.error(err);
    }
  };

  // 등록된 상품 수에 따라 프로필에 해당 상품 반영`
  setProductList = (resProfileProductJson) => {
    if (resProfileProductJson.product.length !== 0) {
      const saleItems = document.querySelector(".saleItemContainer");
      const createP = document.createElement("p");
      const createUl = document.createElement("ul");

      createP.setAttribute("class", "title");
      createUl.setAttribute("class", "productList");
      saleItems.append(createP);
      saleItems.append(createUl);

      document.querySelector(".saleItems .title").innerText = "판매 중인 상품";
      const productList = document.querySelector(".saleItems .productList");

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
    const product = document.querySelectorAll(".productList li");
    [].forEach.call(product, function (product) {
      product.addEventListener("click", (event) => {
        const productId = event.target.closest("li").id;
        productModal(productId);
      });
    });
  };

  // 게시물 가지고 오기
  getPostingList = async function (myAccountName) {
    const url = "https://mandarin.api.weniv.co.kr";
    const token = localStorage.getItem("Token");
    const URLSearch = new URLSearchParams(location.search);
    let accountName = URLSearch.get("accountname");
    accountName = accountName === null ? myAccountName : accountName;

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
      this.userPostInfo = resProfileProductJson.post;
      this.setPostingList(this.userPostInfo);
    } catch (err) {
      console.error(err);
    }
  };

  // 게시물 타입바 생성 및 최초 목록형으로 포스팅
  setPostingList = (userPostInfo) => {
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
      this.listTypePost();
    }
  };

  // 목록형으로 포스팅 표시
  listTypePost = () => {
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

    for (const post of this.userPostInfo) {
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
                <div href="profile.html?accountname=${
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
                  <button class="moreBtn buttonClick">
                    <span class="ir">게시글 더보기 버튼</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section id="${post.id}" class="postContent">
            <h4 class="ir">게시글 내용</h4>
            <p>${post.content}</p>
            ${checkImg}
            </div>
            <div class="postBtnContent">
              <button class="${heartStatus}">
                <span class="ir">좋아요 버튼</span>
                <span class="likeCount">${post.heartCount}</span>
              </button>
              <div href="post.html\?postid=${post.id}" class="commentBtn">
                <span class="commentCount">${post.comments.length}</span>
              </div>
            </div>
            <strong class="postDate">${timeForToday(post.createdAt)}</strong>
          </section>`;
      posting[0].insertAdjacentHTML("beforeend", postListContent);
      const moreBtn = document.querySelectorAll(".moreBtn.buttonClick");
      const heartBtn = document.querySelectorAll(".postBtnContent button");
      [].forEach.call(heartBtn, function (heartBtn) {
        heartBtn.addEventListener("click", clickHeart);
      });
      [].forEach.call(moreBtn, function (moreBtn) {
        moreBtn.addEventListener("click", clickUserModal);
      });
    }
  };

  // 앨범형 포스팅 구현
  albumTypePost = () => {
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

    for (const post of this.userPostInfo) {
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
  };

  // 사용자 로그아웃 모달
  modal = (headerModal) => {
    headerModal.addEventListener("click", logoutModal());
  };
}

export default Profile;
