import { backHistory, timeForToday } from '../utils/common.js';
import { clickHeart } from './heartBtn.js';
import { clickCommentModal } from './modal.js';

export function postInput(event) {
  const postChatForm = document.querySelector('#postChatContent');
  const postButton = document.querySelector('.postBtn');

  // enter 시에 comment 입력
  if (event.keyCode == 13) {
    submitComment(event);
  } else {
    if (postChatForm.value !== '') {
      postButton.style.color = '#6167ac';
      postButton.disabled = false;
    } else {
      postButton.style.color = '#dbdbdb';
      postButton.disabled = true;
    }
  }
}

// 프로필, 게시글, 댓글 데이터 불러오기
export async function renderPost() {
  const url = 'https://mandarin.api.weniv.co.kr';
  const postId = window.location.href.split('postid=')[1];
  const token = localStorage.getItem('Token');

  try {
    const res = await fetch(`${url}/post/${postId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });

    const json = await res.json();
    const postInfo = json.post;
    const profileImg = postInfo.author.image;
    const userName = postInfo.author.username;
    const accountName = postInfo.author.accountname;
    const content = postInfo.content;
    const jsonImg = Array.from(postInfo.image.split(','));
    const heartCount = postInfo.heartCount;
    const commentCount = postInfo.commentCount;
    const createdAt = timeForToday(postInfo.createdAt);
    const postButton = document.querySelector('.postBtn');
    postButton.disabled = true;
    postButton.style.color = '#dbdbdb';

    // 프로필
    const div = document.querySelector('.userItem');
    div.innerHTML = '';
    const section = document.querySelector('.postContent');

    const userBox = document.createElement('a');
    const userProfileImage = document.createElement('img');
    const userInfo = document.createElement('div');
    const userNickname = document.createElement('strong');
    const userText = document.createElement('div');
    const userMsgContent = document.createElement('p');

    userBox.className = 'userBox';
    userProfileImage.className = 'userProfileImage';
    userInfo.className = 'userInfo';
    userNickname.className = 'userNickname';
    userText.className = 'userText';
    userMsgContent.className = 'userMsgContent userStatusMsg';

    userBox.addEventListener('click', () => {
      window.location.hash = `#profile\?accountname=${accountName}`; // 주소 업데이트
    });
    userProfileImage.setAttribute('src', profileImg);
    userNickname.innerText = userName;
    userMsgContent.innerText = `@${accountName}`;

    div.appendChild(userBox);
    userBox.appendChild(userProfileImage);
    userBox.appendChild(userInfo);
    userInfo.appendChild(userNickname);
    userInfo.appendChild(userText);
    userText.appendChild(userMsgContent);

    // 게시글

    let jsonImgTags = jsonImg.map(src => {
      return src && `<img src=${src} alt="게시물 이미지" />`;
    });
    let heartStatus;

    if (json.post.hearted) {
      heartStatus = 'likeBtn on';
    } else {
      heartStatus = 'likeBtn';
    }

    const postTitleHeading4El = document.createElement('h4');
    const contentPEl = document.createElement('p');

    postTitleHeading4El.classList.add('ir');
    postTitleHeading4El.innerText = '게시글 내용';
    contentPEl.innerText = `${content}`;

    section.appendChild(postTitleHeading4El);
    section.appendChild(contentPEl);

    if (jsonImgTags.length === 0) {
      jsonImgTags = '';
    } else {
      jsonImgTags = `
      <div class="postDetaileImgContent">
        <ul>
          <li class="postDetaileImgContentFlex">
          ${jsonImgTags.join('')}
          </li>
        </ul>
        </div>`;
    }
    const range = document.createRange();
    const jsonImgTagsNode = range.createContextualFragment(jsonImgTags);

    section.appendChild(jsonImgTagsNode);

    const postBtnDivEl = document.createElement('div');
    const heartBtnEl = document.createElement('button');
    const likeTextSpanEl = document.createElement('span');
    const likeCountSpanEl = document.createElement('span');
    const commentBtnDivEl = document.createElement('div');
    const commentCountSpanEl = document.createElement('span');
    const postDateStrongEl = document.createElement('strong');

    postBtnDivEl.classList.add('postBtnContent');
    heartBtnEl.classList.add(`${heartStatus}`);
    likeTextSpanEl.classList.add('ir');
    likeTextSpanEl.innerText = '좋아요 버튼';
    likeCountSpanEl.classList.add('likeCount');
    likeCountSpanEl.innerText = `${heartCount}`;
    commentBtnDivEl.classList.add('commentBtn');
    commentCountSpanEl.classList.add('commentCount');
    commentCountSpanEl.innerText = `${commentCount}`;
    postDateStrongEl.classList.add('postDate');
    postDateStrongEl.innerText = `${createdAt}`;

    commentBtnDivEl.appendChild(commentCountSpanEl);
    heartBtnEl.appendChild(likeTextSpanEl);
    heartBtnEl.appendChild(likeCountSpanEl);
    postBtnDivEl.appendChild(heartBtnEl);
    postBtnDivEl.appendChild(commentBtnDivEl);

    section.appendChild(postBtnDivEl);
    section.appendChild(postDateStrongEl);

    const heartBtn = document.querySelector('.postBtnContent button');
    heartBtn.addEventListener('click', clickHeart);

    // 댓글
    const commentSection = document.querySelector('.postCommentBox');
    const { comments } = await getCommentDetail();

    for (const comment of comments) {
      const commentArticleEl = document.createElement('article');
      const commentTitleHeading3El = document.createElement('h3');
      const userSectionEl = document.createElement('section');
      const userListDivEl = document.createElement('div');
      const userItemDivEl = document.createElement('div');
      const userBoxDivEl = document.createElement('div');
      const profileImgEl = document.createElement('img');
      const userCommentInfoDivEl = document.createElement('div');
      const userNickNameStrongEl = document.createElement('strong');
      const commentTimeStrongEl = document.createElement('strong');
      const moreModalBtnEl = document.createElement('button');
      const modalTextSpanEl = document.createElement('span');
      const commentContentSectionEl = document.createElement('section');
      const commentTitleHeading4El = document.createElement('h4');
      const commentContentPEl = document.createElement('p');

      commentArticleEl.classList.add('post');
      commentArticleEl.classList.add('postCommentContent');
      commentArticleEl.id = `${comment.id}`;
      commentArticleEl.setAttribute('key', `${comment.author.accountname}`);
      commentTitleHeading3El.classList.add('ir');
      commentTitleHeading3El.innerText = '게시글 댓글';
      userListDivEl.classList.add('userList');
      userItemDivEl.classList.add('userItem');
      userBoxDivEl.classList.add('userBox');
      profileImgEl.classList.add('userProfileImage');
      profileImgEl.classList.add('postUserProfile');
      profileImgEl.setAttribute('src', `${comment.author.image}`);
      profileImgEl.setAttribute('alt', '프로필 이미지');
      userCommentInfoDivEl.classList.add('userCommentInfo');
      userNickNameStrongEl.classList.add('userNickname');
      userNickNameStrongEl.classList.add('postUserNickName');
      userNickNameStrongEl.innerText = `${comment.author.username}`;
      commentTimeStrongEl.classList.add('postTime');
      commentTimeStrongEl.innerText = `∙ ${timeForToday(comment.createdAt)}`;
      moreModalBtnEl.classList.add('moreBtn');
      moreModalBtnEl.classList.add('buttonClick');
      modalTextSpanEl.classList.add('ir');
      modalTextSpanEl.innerText = '댓글 모달 버튼';
      commentContentSectionEl.classList.add('postContent');
      commentContentSectionEl.classList.add('postComment');
      commentTitleHeading4El.classList.add('ir');
      commentTitleHeading4El.innerText = '댓글 내용';
      commentContentPEl.innerText = `${comment.content}`;

      userCommentInfoDivEl.appendChild(userNickNameStrongEl);
      userCommentInfoDivEl.appendChild(commentTimeStrongEl);
      userBoxDivEl.appendChild(profileImgEl);
      userBoxDivEl.appendChild(userCommentInfoDivEl);
      userBoxDivEl.appendChild(moreModalBtnEl);
      moreModalBtnEl.appendChild(modalTextSpanEl);
      userItemDivEl.appendChild(userBoxDivEl);
      userListDivEl.appendChild(userItemDivEl);
      userSectionEl.appendChild(userListDivEl);
      commentContentSectionEl.appendChild(commentTitleHeading4El);
      commentContentSectionEl.appendChild(commentContentPEl);

      commentArticleEl.appendChild(commentTitleHeading3El);
      commentArticleEl.appendChild(userSectionEl);
      commentArticleEl.appendChild(commentContentSectionEl);
      commentSection.appendChild(commentArticleEl);
    }

    const modal = document.querySelectorAll('.moreBtn.buttonClick');
    [].forEach.call(modal, function (modal) {
      modal.addEventListener('click', clickCommentModal);
    });
  } catch (err) {
    console.error(err);
  }
}

// 상세 댓글 불러오기
const getCommentDetail = async () => {
  const token = localStorage.getItem('Token');
  const url = 'https://mandarin.api.weniv.co.kr';
  const postId = window.location.href.split('postid=')[1];

  try {
    const res = await fetch(`${url}/post/${postId}/comments`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

// 로그인 유저 정보
export async function getLoginUserInfo(commentUserProfile) {
  const url = 'https://mandarin.api.weniv.co.kr';
  const token = localStorage.getItem('Token');
  const accountname = localStorage.getItem('accountname');

  try {
    const res = await fetch(`${url}/profile/${accountname}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    const userJson = await res.json();
    const commentUserProfileImg = userJson.profile.image;
    // 댓글 유저 프로필 이미지
    commentUserProfile.setAttribute('src', `${url}/${commentUserProfileImg}`);
  } catch (err) {
    console.log(err);
  }
}

// 댓글 입력
export const submitComment = async e => {
  e.preventDefault();
  const url = 'https://mandarin.api.weniv.co.kr';
  const postId = window.location.href.split('postid=')[1];
  const commentInput = document.getElementById('postChatContent');
  const token = localStorage.getItem('Token');
  try {
    const res = await fetch(`${url}/post/${postId}/comments`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        comment: {
          content: commentInput.value,
        },
      }),
    });
    commentInput.value = '';
    if (res) {
      location.reload();
    }
  } catch (err) {
    console.log(err);
  }
};
