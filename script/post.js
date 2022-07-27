// 게시 버튼 활성화
const postChatForm = document.querySelector("#postChatContent");
const postButton = document.querySelector(".postBtn");
const commentUserProfile = document.querySelector('.commentUserProfile');


postButton.disabled = true;
function postInput() {
  console.log(postChatForm.value);
  if (postChatForm.value !== "") {
    postButton.style.color = "var(--mainColor)";
    postButton.disabled = false;
  } else {
    postButton.style.color = "var(--borderColor)";
    postButton.disabled = true;
  }
}

// 모달창 구현
const API_ROOT = 'https://mandarin.api.weniv.co.kr';
const POST_ID = new URLSearchParams(location.search).get('postid'); 

const token = localStorage.getItem('Token');
const accountname = localStorage.getItem('accountname');

async function renderPost() {
  // const token = localStorage.getItem('Token');
  try {
    const res = await fetch(`${API_ROOT}/post/${POST_ID}`, {
      method: 'GET',
      headers: {
        'Authorization' : `Bearer ${token}`,
	      'Content-type' : 'application/json',
  }
}) 

// 프로필, 게시글, 댓글 데이터 불러오기

const json = await res.json();
const profileImg = json.post.author.image;
const userName = json.post.author.username;
const accountName = json.post.author.accountname;
const content = json.post.content;
const jsonImg = Array.from(json.post.image.split(','));
const heartCount = json.post.heartCount;
const commentCount = json.post.commentCount;
const createdAt = json.post.createdAt.slice(0,11).replace('-','년 ').replace('-', '월 ').replace('T', '일');
// const comments = json.post.comments;


// 프로필
const div = document.querySelector('.userItem');
div.innerHTML =""
const section = document.querySelector('.postContent');

const userBox = document.createElement("a");
const userProfileImage = document.createElement("img");
const userInfo = document.createElement("div");
const userNickname = document.createElement("strong");
const userText = document.createElement("div");
const userMsgContent = document.createElement("p");

userBox.className = 'userBox';
userProfileImage.className = 'userProfileImage';
userInfo.className = 'userInfo';
userNickname.className = 'userNickname';
userText.className = 'userText';
userMsgContent.className = 'userMsgContent userStatusMsg';

userBox.setAttribute("href", `profile.html?accountname=${accountName}`);
userProfileImage.setAttribute("src", profileImg);
userNickname.innerText = userName;
userMsgContent.innerText =`@${accountName}`;


div.appendChild(userBox);
userBox.appendChild(userProfileImage);
userBox.appendChild(userInfo);
userInfo.appendChild(userNickname);
userInfo.appendChild(userText);
userText.appendChild(userMsgContent);

// 게시글
const jsonImgTags = jsonImg.map(src => {
  return `<img src=${src} alt="게시물 이미지" />`
});
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
  <div class="postDetaileImgContent">
  <ul>
    <li class="postDetaileImgContentFlex">
    ${jsonImgTags.join("")}
    </li>
  </ul>
  </div>
  <div class="postBtnContent">
    <button onclick="clickHeart(event)" class="${heartStatus}">
      <span class="ir">좋아요 버튼</span>
      <span class="likeCount">${heartCount}</span>
    </button>
    <a href="" class="commentBtn">
      <span class="commentCount">${commentCount}</span>
    </a>
  </div>
  <strong class="postDate">${createdAt}</strong>
`
console.log(json)

// 댓글
const commentSection = document.querySelector('.postCommentBox');
const { comments }  = await getCommentDetail();

const postComments = comments.map(comment => {
  return `
  <article id=${comment.id} key=${comment.author.accountname} class="post postCommentContent">
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
              <strong class="userNickname postUserNickName">${comment.author.username}</strong>
              <strong class ="postTime" >∙ ${timeForToday(comment.createdAt)}</strong>
            </div>
            <button class="moreBtn buttonClick" onclick=modalOpen(event)>
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
  </article>`
})
commentSection.innerHTML = postComments.join("")
}catch(err){
  // location.href="./error.html"; 
  console.error(err); 
}
}

// 상세 댓글 불러오기
const getCommentDetail = async() => {
  const token = localStorage.getItem('Token');
  try {
    const res = await fetch(`${API_ROOT}/post/${POST_ID}/comments`, {
      method: 'GET',
      headers: {
        'Authorization' : `Bearer ${token}`,
	      'Content-type' : 'application/json',
      }
    });
    return res.json();
  }catch(err){
    console.log(err)
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


// 로그인 유저 정보
async function getLoginUserInfo() {

  try {
    const res = await fetch(`${API_ROOT}/profile/${accountname}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      }
    })
    const userJson = await res.json();
    console.log(userJson);
    const commentUserProfileImg = userJson.profile.image
    // 댓글 유저 프로필 이미지
  commentUserProfile.setAttribute("src", commentUserProfileImg);
  } catch (err) {
    console.log(err)
  }
}

getLoginUserInfo()




// 댓글 입력
const commentInput = document.getElementById("postChatContent");
const submitButton = document.getElementById("commentSubmit");

const submitComment = async(e) => {
  e.preventDefault()
  const token = localStorage.getItem('Token');
  try {
    const res = await fetch(`${API_ROOT}/post/${POST_ID}/comments`, {
      method: 'POST',
      headers: {
        'Authorization' : `Bearer ${token}`,
	      'Content-type' : 'application/json',
      },
      body: JSON.stringify({
        'comment': {
          'content': commentInput.value 
        }
      })
    });
    commentInput.value = ""
    renderPost();
  }catch(err){
    console.log(err)
  }
}

submitButton.addEventListener('click', submitComment);

//모달

const modal = document.createElement('div')

const modalMore = (commentId) => {
  return `<section class="modalBg postModal">
  <article class="modal">
    <button onclick="modalClose()" class="modalClose">
      <span class="ir">댓글 신고 버튼</span>
    </button>
    <button onclick="modalOpenCommentDelete('${commentId}')" class="modalBtn modalBtn1">삭제</button>
    <button class="modalBtn modalBtn2">수정</button>
  </article>
</section>`
} 

const modalCommentDelete = (commentId) => {
  return `<section class="modalAlert productDelAlert">
  <h4 class="ir">댓글 삭제 창</h4>
  <strong class="alertMsg">삭제하시겠어?</strong>
  <div class="alertBtnContent">
    <button onclick="modalClose()" class="cancelBtn">취소</button>
    <button onclick="deleteComment('${commentId}')" class="delBtn">삭제</button>
  </div>
  </section>`
}

const modalReport = (commentId) => {
  return `<section class="modalBg commentReportModal">
  <article class="modal">
    <button onclick="modalClose()" id="btnReportClose" class="modalClose">
      <span class="ir">댓글 신고 버튼</span>
    </button>
    <button onclick="commentReport('${commentId}')" class="modalBtn modalBtn1">신고</button>
  </article>
</section>`
}

const reportAlert = `<section class="modalAlert postDelAlert">
<h4 class="ir">신고 완료</h4>
<strong class="alertMsg">신고 완료</strong>
<div class="alertBtnContent">
  <button onclick="modalClose()" class="cancelBtn">확인</button>
</div>
</section>`

const deleteConfirmAlert = `<section class="modalAlert productDelAlert hidden">
<h4 class="ir">댓글 삭제 창</h4>
<strong class="alertMsg">삭제하시겠어?</strong>
<div class="modalBtnContent">
  <button class="cancelBtn">취소</button>
  <button class="delBtn">삭제</button>
</div>
</section>`

const deleteAlert = `<section class="modalAlert postDelAlert">
<h4 class="ir">삭제 완료</h4>
<strong class="alertMsg">삭제 완료</strong>
<div class="alertBtnContent">
  <button onclick="modalClose()" class="cancelBtn">확인</button>
</div>
</section>`


const btnPostModal = document.querySelector('.postModal');
const btnReport = document.querySelector('.commentReportModal');
const body = document.body;
const modalOpen = (e) => {
  e.preventDefault();
  const commentAccountName = e.target.parentElement.closest('article').getAttribute('key')
  const commentId = e.target.parentElement.closest('article').getAttribute('id')
  if (commentAccountName == localStorage.getItem("accountname")){
    modal.innerHTML = modalMore(commentId);
    body.appendChild(modal)
  }else{
    modal.innerHTML = modalReport(commentId);
    body.appendChild(modal)
  }
  // btnReport.classList.remove("hidden")
  // PostModal.classList.remove("hidden")
}

const modalClose = () => {
  body.removeChild(modal)
}

const modalOpenCommentDelete = (commentId) => {
  modal.innerHTML = modalCommentDelete(commentId)
}

//댓글 삭제
const deleteComment = async(commentId) => {
  const token = localStorage.getItem('Token');
  try {
    const res = await fetch(`${API_ROOT}/post/${POST_ID}/comments/${commentId}`, {
      method: 'DELETE',
      headers: {
        'Authorization' : `Bearer ${token}`,
	      'Content-type' : 'application/json',
      }
    });
    const json = await res.json();
    modalClose();
    renderPost();
    modal.innerHTML = deleteAlert
    body.appendChild(modal)
  }catch(err){
    console.log(err);
  }
}

// 댓글 신고


const commentReport = async(commentId) => {
  const token = localStorage.getItem('Token');
  try {
    const res = await fetch(`${API_ROOT}/post/${POST_ID}/comments/${commentId}/report`, {
      method: 'DELETE',
      headers: {
        'Authorization' : `Bearer ${token}`,
	      'Content-type' : 'application/json',
      }
    });
    const json = await res.json();
    modalClose();
    modal.innerHTML = reportAlert
    body.appendChild(modal)
  }catch(err){
    console.log(err);
  }
  
}


renderPost();

// 사용자에 따라 헤더 모달 구현
const headerModal = document.querySelector(".headerBarBtn.buttonClick");
const userLogout = document.querySelector(".setUsertModal .modalBtn2");
userLogout.addEventListener("click", clickLogoutModal);
headerModal.addEventListener("click", clickHeaderModal);

function clickHeaderModal() {
  const headerBarModal = document.querySelector(".modalBg.setUsertModal");
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
    location.href = "/pages/logIn.html";
  });
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
  let data = {};

  if (likeBtn.classList.contains("on")) {
    likeBtn.classList.remove("on");
    data = await likeUnHeart(POST_ID);
    likeCount.innerHTML = data.post.heartCount;
  } else {
    likeBtn.classList.add("on");
    data = await likeHeart(POST_ID);
    likeCount.innerHTML = data.post.heartCount;
  }
}