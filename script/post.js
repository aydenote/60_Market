import { backHistory, timeForToday } from "./newScript/common.js";
import { clickHeart } from "./newScript/heartBtn.js";

const backBtn = document.querySelector(".headerBarBack.buttonClick");

// 뒤로 가기
backBtn.addEventListener("click", backHistory);

// 게시 버튼 활성화
const postChatForm = document.querySelector("#postChatContent");
const postButton = document.querySelector(".postBtn");
const commentUserProfile = document.querySelector(".commentUserProfile");
postChatForm.addEventListener("keyup", postInput);
postButton.disabled = true;

function postInput(event) {
  // enter 시에 comment 입력
  if (event.keyCode == 13) {
    submitComment(event);
  } else {
    if (postChatForm.value !== "") {
      postButton.style.color = "var(—mainColor)";
      postButton.disabled = false;
    } else {
      postButton.style.color = "var(—borderColor)";
      postButton.disabled = true;
    }
  }
}

// 모달창 구현
const url = "https://mandarin.api.weniv.co.kr";
const postId = new URLSearchParams(location.search).get("postid");

const token = localStorage.getItem("Token");
const accountname = localStorage.getItem("accountname");

async function renderPost() {
  try {
    const res = await fetch(`${url}/post/${postId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });

    // 프로필, 게시글, 댓글 데이터 불러오기

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
      modal.addEventListener("click", modalOpen);
    });
  } catch (err) {
    console.error(err);
  }
}

// 상세 댓글 불러오기
const getCommentDetail = async () => {
  const token = localStorage.getItem("Token");
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
async function getLoginUserInfo() {
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

getLoginUserInfo();

// 댓글 입력
const commentInput = document.getElementById("postChatContent");
const submitButton = document.getElementById("commentSubmit");

const submitComment = async (e) => {
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

submitButton.addEventListener("click", submitComment);

//모달

const modal = document.createElement("div");

const modalMore = () => {
  return `<section class="modalBg postModal">
  <article class="modal appear">
    <button class="modalClose">
      <span class="ir">댓글 신고 버튼</span>
    </button>
    <button class="modalBtn modalBtn1">삭제</button>
  </article>
</section>`;
};

const modalCommentDelete = () => {
  return `<section class="modalAlert productDelAlert">
  <h4 class="ir">댓글 삭제 창</h4>
  <strong class="alertMsg">삭제하시겠습니까?</strong>
  <div class="alertBtnContent">
    <button class="cancelBtn">취소</button>
    <button class="delBtn">삭제</button>
  </div>
  </section>`;
};

const modalReport = () => {
  return `<section class="modalBg commentReportModal">
  <article class="modal appear">
    <button id="btnReportClose" class="modalClose">
      <span class="ir">댓글 신고 버튼</span>
    </button>
    <button class="modalBtn modalBtn1">신고</button>
  </article>
</section>`;
};

const reportAlert = `<section class="modalAlert postDelAlert">
<h4 class="ir">신고 완료</h4>
<strong class="alertMsg">신고 완료</strong>
<div class="alertBtnContent">
  <button class="cancelBtn">확인</button>
</div>
</section>`;

const deleteAlert = `<section class="modalAlert postDelAlert">
<h4 class="ir">삭제 완료</h4>
<strong class="alertMsg">삭제 완료</strong>
<div class="alertBtnContent">
  <button class="cancelBtn">확인</button>
</div>
</section>`;

const body = document.body;
const modalOpen = (e) => {
  e.preventDefault();
  const commentAccountName = e.target.parentElement
    .closest("article")
    .getAttribute("key");
  const commentId = e.target.parentElement
    .closest("article")
    .getAttribute("id");

  // 본인 댓글인 경우 삭제 모달 활성화
  if (commentAccountName === localStorage.getItem("accountname")) {
    modal.innerHTML = modalMore(commentId);
    body.appendChild(modal);
    const commentModalClose = document.querySelector(".postModal .modalClose");
    const commentModalDelete = document.querySelector(".postModal .modalBtn1");
    commentModalClose.addEventListener("click", modalClose);
    commentModalDelete.addEventListener("click", () => {
      modalOpenCommentDelete(commentId);
    });
  } else {
    // 다른 사람의 댓글인 경우 신고 모달 활성화
    modal.innerHTML = modalReport(commentId);
    body.appendChild(modal);
    const reportModalClose = document.querySelector("#btnReportClose");
    const reportBtn = document.querySelector(".commentReportModal .modalBtn1");
    reportModalClose.addEventListener("click", modalClose);
    reportBtn.addEventListener("click", () => {
      commentReport(commentId);
    });
  }
};

// 모달 닫기
const modalClose = () => {
  body.removeChild(modal);
};

// 댓글 삭제 모달창 활성화
const modalOpenCommentDelete = (commentId) => {
  modal.innerHTML = modalCommentDelete(commentId);
  const deleteCommentModal = document.querySelector(".productDelAlert .delBtn");
  const cancelCommentModal = document.querySelector(
    ".productDelAlert .cancelBtn"
  );

  deleteCommentModal.addEventListener("click", () => {
    deleteComment(commentId);
  });
  cancelCommentModal.addEventListener("click", modalClose);
};

//댓글 삭제
const deleteComment = async (commentId) => {
  const token = localStorage.getItem("Token");
  try {
    const res = await fetch(`${url}/post/${postId}/comments/${commentId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });
    const json = await res.json();
    modalClose();
    renderPost();
    modal.innerHTML = deleteAlert;
    body.appendChild(modal);
    // 모달창 닫기
    const alertClose = document.querySelector(".postDelAlert .cancelBtn");
    alertClose.addEventListener("click", modalClose);
  } catch (err) {
    console.log(err);
  }
};

// 댓글 신고
const commentReport = async (commentId) => {
  const token = localStorage.getItem("Token");
  try {
    const res = await fetch(
      `${url}/post/${postId}/comments/${commentId}/report`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      }
    );
    const json = await res.json();
    modalClose();
    modal.innerHTML = reportAlert;
    body.appendChild(modal);
    // 모달창 닫기
    const alertClose = document.querySelector(".postDelAlert .cancelBtn");
    alertClose.addEventListener("click", modalClose);
  } catch (err) {
    console.log(err);
  }
};

renderPost();
