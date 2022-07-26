// 게시 버튼 활성화
const postChatForm = document.querySelector("#postChatContent");
const postButton = document.querySelector(".postBtn");

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

async function renderPost() {
  const token = localStorage.getItem('Token');
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
})
section.innerHTML = `
<h4 class="ir">게시글 내용</h4>
  <p>
    ${content}
  </p>
  <ul>
    <li>
    ${jsonImgTags.join("")}
    </li>
  </ul>
  <div class="postBtnContent">
    <button class="likeBtn">
      <span class="ir">좋아요 버튼</span>
      <span class="likeCount">${heartCount}</span>
    </button>
    <a href="post.html" class="commentBtn">
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
          <a href="#" class="userBox">
            <img
              src=${comment.author.image}
              alt="프로필 이미지"
              class="userProfileImage postUserProfile"
            />
            <div class="userInfo">
              <strong class="userNickname postUserNickName">${comment.author.username}</strong>
            </div>
            <button class="moreBtn buttonClick" onclick=modalOpen(event)>
              <span class="ir">댓글 모달 버튼</span>
            </button>
          </a>
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

// 댓글 상세
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