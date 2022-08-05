import { clickHeart } from "./newScript/common.js";

const token = localStorage.getItem("Token");
const defaultUrl = "https://mandarin.api.weniv.co.kr";
const headers = {
  Authorization: `Bearer ${token}`,
  "Content-type": "application/json",
};
const listContent = document.querySelector(".post");

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

// 팔로우한 유저가 없을 경우 보여줄 피드
function noFeed() {
  listContent.innerHTML = `
        <h3 class="ir">피드 게시글</h3>
        <section class="noneFeed">
          <p>유저를 검색해 팔로우 해보세요!</p>
          <a href="./search.html" class="userSearchBtn">검색하기</a>
        </section>`;
}

async function homeFeed() {
  try {
    const res = await fetch(`${defaultUrl}/post/feed?limit=30`, {
      method: "GET",
      headers: headers,
    });
    const json = await res.json();
    const posts = json.posts;

    // 팔로우가 없거나 게시물이 없을경우
    if (posts.length <= 0) {
      noFeed();
    }

    for (let i = 0; i < posts.length; i++) {
      const postItem = document.createElement("div");
      postItem.classList.add("postItem");

      // 이미지 url 저장
      let postImage = "";
      if (posts[i].image) {
        let images = posts[i].image.split(",");
        for (const image of images) {
          postImage += `
        <li>
          <img src="${image}" alt="게시물 이미지" />
        </li>
        `;
        }
      }

      let checkImg = !postImage
        ? ""
        : `<div class="postImgContent">
            <ul>${postImage}</ul>
          </div>`;

      postItem.innerHTML = `
      <h4 class="ir">게시물</h4>
      <section>
        <div class="userList">
          <div class="userItem">
            <a href="profile.html?accountname=${
              posts[i].author.accountname
            }" class="userBox">
              <img
                src="${posts[i].author.image}"
                alt="${posts[i].author.username}님의 프로필 이미지"
                class="userProfileImage"
              />
              <div class="userInfo">
                <strong class="userNickname">${
                  posts[i].author.username
                }</strong>
                <div class="userText">
                  <p class="userMsgContent userStatusMsg">
                    @${posts[i].author.accountname}
                  </p>
                </div>
              </div>
              <button class="moreBtn buttonClick"><span class="ir">게시글 더보기 버튼</span></button>
            </a>
          </div>
        </div>
      </section>
      <section id="${posts[i].id}" class="postContent">
        <h4 class="ir">게시글 내용</h4>
        <p>${posts[i].content}</p>
        ${checkImg}
        <div class="postBtnContent">
          <button class="likeBtn ${posts[i].hearted ? "on" : ""}">
            <span class="ir">좋아요 버튼</span>
              <span class="likeCount">${posts[i].heartCount}</span>
          </button>
          <a href="post.html\?postid=${posts[i].id}" class="commentBtn">
            <span class="commentCount">${posts[i].commentCount}</span>
          </a>
        </div>
        <strong class="postDate">${timeForToday(posts[i].createdAt)}</strong>
      </section>
      `;
      listContent.appendChild(postItem);
      const heartBtn = document.querySelectorAll(".postBtnContent button");
      const moreBtn = document.querySelectorAll(".moreBtn.buttonClick");
      [].forEach.call(heartBtn, function (heartBtn) {
        heartBtn.addEventListener("click", clickHeart);
      });
      [].forEach.call(moreBtn, function (moreBtn) {
        moreBtn.addEventListener("click", openModal);
      });
    }
  } catch (err) {
    console.log(err);
  }
}

// 더보기 버튼 클릭시 모달 열기
const reportModal = document.querySelector(".reportModal");
const reportAlert = document.querySelector(".reportAlert");
const modal = document.querySelector(".modal");
const reportModalClose = document.querySelector(".reportModal .modalClose");
const openAlert = document.querySelector(".reportModal .modalBtn1");
const cancelBtn = document.querySelector(".reportAlert .cancelBtn");
const reportBtn = document.querySelector(".reportAlert .reportBtn");

function openModal(e) {
  e.preventDefault();
  reportModal.classList.remove("hidden");
  modal.classList.remove("hidden");
  modal.classList.add("appear");
}

reportModalClose.addEventListener("click", () => {
  reportModal.classList.add("hidden");
  modal.classList.remove("appear");
});

openAlert.addEventListener("click", () => {
  reportAlert.classList.remove("hidden");
  modal.classList.add("hidden");
});

// 취소 버튼 클릭
cancelBtn.addEventListener("click", () => {
  reportModal.classList.add("hidden");
  reportAlert.classList.add("hidden");
});

// 신고하기 버튼 클릭
reportBtn.addEventListener("click", () => {
  reportModal.classList.add("hidden");
  reportAlert.classList.add("hidden");
});

homeFeed();
