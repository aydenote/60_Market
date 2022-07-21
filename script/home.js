//로그인 구현시 삭제
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjNmOGUxNTM2MWFhZWE1NjlhYWUzOCIsImV4cCI6MTY2MTE0NTgyNywiaWF0IjoxNjU1OTYxODI3fQ.F7JLkiPLzbW3GcLUK_b_-h4_7zkZdLQgTZB-OddOhLY";

let state = "list";
const curUrl = location.href;

const albumBtn = document.querySelector(".postingType.album");
const listBtn = document.querySelector(".postingType.list");
const albumContent = document.querySelector(".postContent");
const listContent = document.querySelector(".post");

listBtn.addEventListener("click", changeListType);
albumBtn.addEventListener("click", changeAlbumType);

// 프로필페이지 게시물 리스트형으로 변경, 버튼 활성화
function changeListType() {
  state = "list";
  albumContent.classList.add("hidden");
  listContent.classList.remove("hidden");
  albumBtn.classList.add("unselected");
  listBtn.classList.remove("unselected");
}

// 프로필페이지 게시물 앨범형으로 변경, 버튼 활성화
function changeAlbumType() {
  state = "album";
  albumContent.classList.remove("hidden");
  listContent.classList.add("hidden");
  albumBtn.classList.remove("unselected");
  listBtn.classList.add("unselected");
}

// 나의 프로필 페이지 일 때 데이터 뿌려주기
async function myProfileFeed(state) {
  const url = `https://mandarin.api.weniv.co.kr/post/${postAccountName}/userpost/?limit=9&skip=3`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  const posts = data.posts;
  getFeed(posts, state);
}

// 타 유저 프로필 페이지 일 경우
async function yourProfileFeed(state) {
  const userAccountName = curUrl.split("/profile/")[1];
  const url = `https://mandarin.api.weniv.co.kr/post/${userAccountName}/userpost/?limit=9&skip=3`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  const posts = data.posts;
  getFeed(posts, state);
}

// 홈피드일 때 데이터 뿌려주기
async function homeFeed() {
  // 처음 게시물 10개까지만 보이고 5개씩 로딩
  const url = `https://mandarin.api.weniv.co.kr/post/feed/?limit=20&skip=5`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
  });

  const data = await res.json();
  const posts = data.posts;
  // console.log(posts);
  // 게시물 유/무 판별
  if (posts.length <= 0) {
    noFeed();
  } else {
    getFeed(posts, state);
  }
}

// 팔로우한 유저가 없을 경우 보여줄 피드
function noFeed() {
  feedListContent.innerHTML = `
    <h3 class="ir">피드 게시글</h3>
    <section class="noneFeed">
      <p>유저를 검색해 팔로우 해보세요!</p>
      <a href="/pages/search.html" class="userSearchBtn">검색하기</a>
    </section>`;
}

function getFeed(posts, state) {
  // console.log(posts);
  // 팔로우한 유저의 게시물이 없을 경우
  if (posts.length <= 0) {
    feedListContent.innerHTML = `
      <h3 class="ir">피드 게시글</h3>
      <section class="noneFeed">
        <p>등록된 게시물이 없습니다 :(</p>
      </section>
      `;
  }

  posts.forEach((element) => {
    const date = timeForToday(element.updatedAt);
    // console.log(element.updatedAt);
    // console.log(date);
    let postImage = "";
    let firstImage = "";
    // 이미지가 있는 게시글이라면
    if (element.image) {
      let images = element.image.split(",");
      // album형에서 사용될 첫번째 이미지 저장
      firstImage = `
      <li>
        <a href="profile.html\?accountname=${element.id}"> 
          <img src="${images[0]}" alt="게시물 이미지" />
        </a>
      </li>
      `;
      // list형에서 사용될 전체 이미지 저장
      for (image of images) {
        postImage += `
        <li>
          <img src="${image}" alt="게시물 이미지" />
        </li>
        `;
      }
    }
    // console.log(firstImage);
    if (state === "list") {
      const postItem = document.createElement("div");
      postItem.classList.add("postItem");
      postItem.id = element.id;
      postItem.innerHTML = `
        <section>
          <div class="userList">
            <div class="userItem">
              <a href="/profile/${element.author.accountname}" class="userBox">
                <img
                  src="${element.author.image}"
                  alt="${element.author.username}님의 프로필 이미지"
                  class="userProfileImage"
                />
                <div class="userInfo">
                  <strong class="userNickname">${
                    element.author.username
                  }</strong>
                  <div class="userText">
                    <p class="userMsgContent userStatusMsg">
                      @${element.author.accountname}
                    </p>
                  </div>
                </div>
                <button class="moreBtn buttonClick"><span class="ir">게시글 더보기 버튼</span></button>
              </a>
            </div>
          </div>
        </section>
        <section class="postContent">
          <h4 class="ir">게시글 내용</h4>
          <p>${element.content}</p>
          <ul>${postImage}</ul>
          <div class="postBtnContent">
            <button class="likeBtn ${element.hearted ? "on" : ""}">
              <span class="ir">좋아요 버튼</span>
                <span class="likeCount">${element.heartCount}</span>
            </button>
            <a href="/post/${element.id}" class="commentBtn">
              <span class="commentCount">${element.commentCount}</span>
            </a>
          </div>
          <strong class="postDate">${date}</strong>
        </section>
      `;
      // console.log(postItem);
      listContent.appendChild(postItem);

      // 좋아요 버튼 기능 구현
    }
  });
}
