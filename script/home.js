import { timeForToday } from "./newScript/common.js";
import { clickHeart } from "./newScript/heartBtn.js";
import { clickUserModal } from "./newScript/modal.js";

// const token = localStorage.getItem("Token");
// const defaultUrl = "https://mandarin.api.weniv.co.kr";
// const listContent = document.querySelector(".post");

// 팔로우한 유저가 없을 경우 보여줄 피드
// function noFeed() {
//   listContent.innerHTML = `
//         <h3 class="ir">피드 게시글</h3>
//         <section class="noneFeed">
//           <p>유저를 검색해 팔로우 해보세요!</p>
//           <a href="./search.html" class="userSearchBtn">검색하기</a>
//         </section>`;
// }

// async function homeFeed() {
//   try {
//     const res = await fetch(`${defaultUrl}/post/feed?limit=30`, {
//       method: "GET",
//       headers: headers,
//     });
//     const json = await res.json();
//     const posts = json.posts;

//     // 팔로우가 없거나 게시물이 없을경우
//     if (posts.length <= 0) {
//       noFeed();
//     }

//     for (let i = 0; i < posts.length; i++) {
//       const postItem = document.createElement("div");
//       postItem.classList.add("postItem");

//       // 이미지 url 저장
//       let postImage = "";
//       if (posts[i].image) {
//         let images = posts[i].image.split(",");
//         for (const image of images) {
//           postImage += `
//         <li>
//           <img src="${image}" alt="게시물 이미지" />
//         </li>
//         `;
//         }
//       }

//       let checkImg = !postImage
//         ? ""
//         : `<div class="postImgContent">
//             <ul>${postImage}</ul>
//           </div>`;

//       postItem.innerHTML = `
//       <h4 class="ir">게시물</h4>
//       <section>
//         <div class="userList">
//           <div class="userItem">
//             <a href="profile.html?accountname=${
//               posts[i].author.accountname
//             }" class="userBox">
//               <img
//                 src="${posts[i].author.image}"
//                 alt="${posts[i].author.username}님의 프로필 이미지"
//                 class="userProfileImage"
//               />
//               <div class="userInfo">
//                 <strong class="userNickname">${
//                   posts[i].author.username
//                 }</strong>
//                 <div class="userText">
//                   <p class="userMsgContent userStatusMsg">
//                     @${posts[i].author.accountname}
//                   </p>
//                 </div>
//               </div>
//               <button class="moreBtn buttonClick"><span class="ir">게시글 더보기 버튼</span></button>
//             </a>
//           </div>
//         </div>
//       </section>
//       <section id="${posts[i].id}" class="postContent">
//         <h4 class="ir">게시글 내용</h4>
//         <p>${posts[i].content}</p>
//         ${checkImg}
//         <div class="postBtnContent">
//           <button class="likeBtn ${posts[i].hearted ? "on" : ""}">
//             <span class="ir">좋아요 버튼</span>
//               <span class="likeCount">${posts[i].heartCount}</span>
//           </button>
//           <a href="post.html\?postid=${posts[i].id}" class="commentBtn">
//             <span class="commentCount">${posts[i].commentCount}</span>
//           </a>
//         </div>
//         <strong class="postDate">${timeForToday(posts[i].createdAt)}</strong>
//       </section>
//       `;
//       listContent.appendChild(postItem);
//       const heartBtn = document.querySelectorAll(".postBtnContent button");
//       const moreBtn = document.querySelectorAll(".moreBtn.buttonClick");
//       [].forEach.call(heartBtn, function (heartBtn) {
//         heartBtn.addEventListener("click", clickHeart);
//       });
//       [].forEach.call(moreBtn, function (moreBtn) {
//         moreBtn.addEventListener("click", clickUserModal);
//       });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }

class homeFeed {
  constructor(token, defaultUrl, listContent) {
    this.token = token;
    this.defaultUrl = defaultUrl;
    this.listContent = listContent;
  }

  noFeed = () => {
    listContent.innerHTML = `
          <h3 class="ir">피드 게시글</h3>
          <section class="noneFeed">
            <p>유저를 검색해 팔로우 해보세요!</p>
            <a href="./search.html" class="userSearchBtn">검색하기</a>
          </section>`;
  };

  feedAPI = async (token, defaultUrl) => {
    const setting = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    };
    try {
      const resFeed = await fetch(`${defaultUrl}/post/feed?limit=30`, setting);
      const jsonFeed = await resFeed.json();
      const posts = jsonFeed.posts;
      if (posts.length <= 0) {
        this.noFeed();
      } else {
        this.createFeed(posts);
      }
    } catch {
      console.error("The feed cannot be received.");
    }
  };

  createFeed = (posts) => {
    console.log(posts);
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
        moreBtn.addEventListener("click", clickUserModal);
      });
    }
  };
}

// homeFeed();
export default homeFeed;
