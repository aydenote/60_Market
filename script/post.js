import { backHistory, timeForToday } from "./newScript/common.js";
import { clickHeart } from "./newScript/heartBtn.js";
import { clickCommentModal } from "../script/newScript/modal.js";

// 뒤로 가기
// const backBtn = document.querySelector(".headerBarBack.buttonClick");
// backBtn.addEventListener("click", backHistory);

// 게시 버튼 활성화
// const postChatForm = document.querySelector("#postChatContent");
// const postButton = document.querySelector(".postBtn");
// const commentUserProfile = document.querySelector(".commentUserProfile");
// postChatForm.addEventListener("keyup", postInput);
// postButton.disabled = true;

export function postInput(event) {
  const postChatForm = document.querySelector("#postChatContent");
  const postButton = document.querySelector(".postBtn");

  // enter 시에 comment 입력
  if (event.keyCode == 13) {
    submitComment(event);
  } else {
    if (postChatForm.value !== "") {
      postButton.style.color = "#6167ac";
      postButton.disabled = false;
    } else {
      postButton.style.color = "#dbdbdb";
      postButton.disabled = true;
    }
  }
}

// 프로필, 게시글, 댓글 데이터 불러오기
export async function renderPost() {
  const url = "https://mandarin.api.weniv.co.kr";
  const postId = new URLSearchParams(location.search).get("postid");
  const token = localStorage.getItem("Token");

  try {
    const res = await fetch(`${url}/post/${postId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });

    const json = await res.json();
    const postInfo = json.post;
    const profileImg = postInfo.author.image;
    const userName = postInfo.author.username;
    const accountName = postInfo.author.accountname;
    const content = postInfo.content;
    const jsonImg = Array.from(postInfo.image.split(","));
    const heartCount = postInfo.heartCount;
    const commentCount = postInfo.commentCount;
    const createdAt = timeForToday(postInfo.createdAt);
    const postButton = document.querySelector(".postBtn");
    postButton.disabled = true;
    postButton.style.color = "#dbdbdb";

    // 프로필
    const div = document.querySelector(".userItem");
    div.innerHTML = "";
    const section = document.querySelector(".postContent");

    const userBox = document.createElement("a");
    const userProfileImage = document.createElement("img");
    const userInfo = document.createElement("div");
    const userNickname = document.createElement("strong");
    const userText = document.createElement("div");
    const userMsgContent = document.createElement("p");

    userBox.className = "userBox";
    userProfileImage.className = "userProfileImage";
    userInfo.className = "userInfo";
    userNickname.className = "userNickname";
    userText.className = "userText";
    userMsgContent.className = "userMsgContent userStatusMsg";

    userBox.setAttribute("href", `profile.html?accountname=${accountName}`);
    userProfileImage.setAttribute("src", profileImg);
    userNickname.innerText = userName;
    userMsgContent.innerText = `@${accountName}`;

    div.appendChild(userBox);
    userBox.appendChild(userProfileImage);
    userBox.appendChild(userInfo);
    userInfo.appendChild(userNickname);
    userInfo.appendChild(userText);
    userText.appendChild(userMsgContent);

    // 게시글
    const jsonImgTags = jsonImg.map((src) => {
      return src && `<img src=${src} alt="게시물 이미지" />`;
    });
    let heartStatus;
    if (json.post.hearted) {
      heartStatus = "likeBtn on";
    } else {
      heartStatus = "likeBtn";
    }
    section.innerHTML = `
<h4 class="ir">게시글 내용</h4>
  <p>
    ${content}
  </p>
  ${
    jsonImgTags == ""
      ? ""
      : `<div class="postDetaileImgContent">
  <ul>
    <li class="postDetaileImgContentFlex">
    ${jsonImgTags.join("")}
    </li>
  </ul>
  </div>`
  }
  <div class="postBtnContent">
    <button class="${heartStatus}">
      <span class="ir">좋아요 버튼</span>
      <span class="likeCount">${heartCount}</span>
    </button>
    <a href="" class="commentBtn">
      <span class="commentCount">${commentCount}</span>
    </a>
  </div>
  <strong class="postDate">${createdAt}</strong>
`;
    const heartBtn = document.querySelector(".postBtnContent button");
    heartBtn.addEventListener("click", clickHeart);

    // 댓글
    const commentSection = document.querySelector(".postCommentBox");
    const { comments } = await getCommentDetail();

    const postComments = comments.reverse().map((comment) => {
      return `
  <article id=${comment.id} key=${
        comment.author.accountname
      } class="post postCommentContent">
    <h3 class="ir">게시글 댓글</h3>
    <section>
      <div class="userList">
        <div class="userItem">
          <div href="#" class="userBox">
            <img
              src=${comment.author.image}
              alt="프로필 이미지"
              class="userProfileImage postUserProfile"
            />
            <div class="userCommentInfo">
              <strong class="userNickname postUserNickName">${
                comment.author.username
              }</strong>
              <strong class ="postTime" >∙ ${timeForToday(
                comment.createdAt
              )}</strong>
            </div>
            <button class="moreBtn buttonClick">
              <span class="ir">댓글 모달 버튼</span>
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="postContent postComment">
      <h4 class="ir">댓글 내용</h4>
      <p>${comment.content}</p>
    </section>
  </article>`;
    });
    commentSection.innerHTML = postComments.join("");
    const modal = document.querySelectorAll(".moreBtn.buttonClick");
    [].forEach.call(modal, function (modal) {
      modal.addEventListener("click", clickCommentModal);
    });
  } catch (err) {
    console.error(err);
  }
}

// 상세 댓글 불러오기
const getCommentDetail = async () => {
  const token = localStorage.getItem("Token");
  const url = "https://mandarin.api.weniv.co.kr";
  const postId = new URLSearchParams(location.search).get("postid");

  try {
    const res = await fetch(`${url}/post/${postId}/comments`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

// 로그인 유저 정보
export async function getLoginUserInfo(commentUserProfile) {
  const url = "https://mandarin.api.weniv.co.kr";
  const token = localStorage.getItem("Token");
  const accountname = localStorage.getItem("accountname");

  try {
    const res = await fetch(`${url}/profile/${accountname}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });
    const userJson = await res.json();
    const commentUserProfileImg = userJson.profile.image;
    // 댓글 유저 프로필 이미지
    commentUserProfile.setAttribute("src", commentUserProfileImg);
  } catch (err) {
    console.log(err);
  }
}

// 댓글 입력
export const submitComment = async (e) => {
  const url = "https://mandarin.api.weniv.co.kr";
  const postId = new URLSearchParams(location.search).get("postid");
  const commentInput = document.getElementById("postChatContent");
  e.preventDefault();
  const token = localStorage.getItem("Token");
  try {
    const res = await fetch(`${url}/post/${postId}/comments`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        comment: {
          content: commentInput.value,
        },
      }),
    });
    commentInput.value = "";
    renderPost();
  } catch (err) {
    console.log(err);
  }
};
