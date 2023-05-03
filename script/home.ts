import { timeForToday } from '../utils/common';
import { clickHeart } from './heartBtn';
import { clickUserModal } from './modal';

interface PostType {
  author: AuthorType;
  commentCount: number;
  comments: string[];
  content: string;
  createdAt: string;
  heartCount: number;
  hearted: boolean;
  id: string;
  image: string;
  updatedAt: string;
}

interface AuthorType {
  accountname: string;
  follower: string[];
  followerCount: number;
  following: string[];
  followingCount: number;
  image: string;
  intro: string;
  isfollow: boolean;
  username: string;
  _id: string;
}

function noFeed() {
  const subTitleHeading3El = document.createElement('h3');
  const noneFeedSectionEl = document.createElement('noneFeed');
  const contentPEl = document.createElement('p');
  const searchLinkDivEl = document.createElement('div');
  const contentMainEl = document.createElement('main');

  subTitleHeading3El.classList.add('ir');
  subTitleHeading3El.innerText = '피드 게시글';
  noneFeedSectionEl.classList.add('noneFeed');
  contentPEl.innerText = '유저를 검색해 팔로우 해보세요!';
  searchLinkDivEl.classList.add('userSearchBtn');
  searchLinkDivEl.innerText = '검색하기';
  searchLinkDivEl.addEventListener('click', () => {
    window.location.hash = '#search'; // 주소 업데이트
  });

  noneFeedSectionEl.appendChild(contentPEl);
  noneFeedSectionEl.appendChild(searchLinkDivEl);
  contentMainEl.appendChild(subTitleHeading3El);
  contentMainEl.appendChild(noneFeedSectionEl);
}

export async function feedAPI() {
  const defaultUrl = 'https://api.mandarin.weniv.co.kr';
  const token = localStorage.getItem('Token');

  const setting = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json',
    },
  };
  try {
    const resFeed = await fetch(`${defaultUrl}/post/feed?limit=30`, setting);
    const jsonFeed = await resFeed.json();
    const posts = jsonFeed.posts;
    if (posts.length <= 0) {
      noFeed();
    } else {
      createFeed(posts);
    }
  } catch {
    console.error('The feed cannot be received.');
  }
}

function clickUserInfo(event: MouseEvent) {
  const eventTarget = event.target as HTMLElement;
  const userAccount = (event.currentTarget as HTMLElement).children[1].children[1].textContent?.replace('@', '');
  if (eventTarget.className === 'moreBtn buttonClick') {
    return;
  }
  window.location.hash = `#profile\?accountname=${userAccount}`; // 주소 업데이트
}

function clickComment(event: Event) {
  const postId = (event.currentTarget as HTMLElement).dataset.postid;
  window.location.hash = `#post\?postid=${postId}`; // 주소 업데이트
}

function createFeed(posts: PostType[]) {
  const listContent = document.querySelector('.post') as HTMLElement;
  for (let i = 0; i < posts.length; i++) {
    const postItem = document.createElement('div');
    postItem.classList.add('postItem');
    // 이미지 url 저장
    let postImage = '';
    if (posts[i].image) {
      let images = posts[i].image.split(',');
      for (let image of images) {
        if (image.split('.')[1] === 'api') {
          image = image.replace('https://mandarin.api.weniv.co.kr/', 'https://api.mandarin.weniv.co.kr/');
        }
        postImage += `
        <li>
          <img src="${image}" alt="게시물 이미지" />
        </li>
        `;
      }
    }

    let checkImg = !postImage
      ? ''
      : `<div class="postImgContent">
            <ul>${postImage}</ul>
          </div>`;

    const range = document.createRange();
    const checkImgNode = range.createContextualFragment(checkImg);

    // 사용자 정보 마크업
    const postHeading4El = document.createElement('h4');
    const userInfoSectionEl = document.createElement('section');
    const userListDivEl = document.createElement('div');
    const userItemDivEl = document.createElement('div');
    const userBoxDivEl = document.createElement('div');
    const userProfileImgEl = document.createElement('img');
    const userInfoDivEl = document.createElement('div');
    const userNicknameStrongEl = document.createElement('strong');
    const userTextDivEl = document.createElement('div');
    const userStatusMsgPEl = document.createElement('p');
    const moreBtnEl = document.createElement('button');
    const moreTextSpanEl = document.createElement('span');
    postHeading4El.classList.add('ir');
    postHeading4El.innerText = '게시물';
    userListDivEl.classList.add('userList');
    userItemDivEl.classList.add('userItem');
    userBoxDivEl.classList.add('userBox');
    userBoxDivEl.setAttribute('data-key', posts[i].id);
    userProfileImgEl.classList.add('userProfileImage');
    userProfileImgEl.setAttribute('src', `${posts[i].author.image}`);
    userProfileImgEl.setAttribute('alt', `${posts[i].author.username}님의 프로필 이미지`);
    userInfoDivEl.classList.add('userInfo');
    userNicknameStrongEl.classList.add('userNickname');
    userNicknameStrongEl.innerText = `${posts[i].author.username}`;
    userTextDivEl.classList.add('userText');
    userStatusMsgPEl.classList.add('userMsgContent');
    userStatusMsgPEl.classList.add('userStatusMsg');
    userStatusMsgPEl.innerText = `@${posts[i].author.accountname}`;
    moreBtnEl.classList.add('moreBtn');
    moreBtnEl.classList.add('buttonClick');
    moreTextSpanEl.classList.add('ir');
    moreTextSpanEl.innerText = '게시글 더보기 버튼';

    moreBtnEl.appendChild(moreTextSpanEl);
    userTextDivEl.appendChild(userStatusMsgPEl);
    userInfoDivEl.appendChild(userNicknameStrongEl);
    userInfoDivEl.appendChild(userTextDivEl);
    userBoxDivEl.appendChild(userProfileImgEl);
    userBoxDivEl.appendChild(userInfoDivEl);
    userBoxDivEl.appendChild(moreBtnEl);
    userItemDivEl.appendChild(userBoxDivEl);
    userListDivEl.appendChild(userItemDivEl);
    userInfoSectionEl.appendChild(userListDivEl);
    postItem.appendChild(postHeading4El);
    postItem.appendChild(userInfoSectionEl);

    // 게시물 마크업
    const contentSectionEl = document.createElement('section');
    const contentTitleheading4El = document.createElement('h4');
    const contentPEl = document.createElement('p');
    const contentBtnDivEl = document.createElement('div');
    const likeBtnEl = document.createElement('button');
    const likeTextSpanEl = document.createElement('span');
    const likeCountSpanEl = document.createElement('span');
    const commentBtnDivEl = document.createElement('div');
    const commentCountSpanEl = document.createElement('span');
    const postDateStrongEl = document.createElement('strong');

    contentSectionEl.classList.add('postContent');
    contentSectionEl.id = `${posts[i].id}`;
    contentTitleheading4El.classList.add('ir');
    contentTitleheading4El.innerText = '게시글 내용';
    contentPEl.innerText = `${posts[i].content}`;
    contentBtnDivEl.classList.add('postBtnContent');
    likeBtnEl.classList.add('likeBtn');
    if (posts[i].hearted) {
      likeBtnEl.classList.add('on');
    } else {
      likeBtnEl.classList.remove('on');
    }
    likeTextSpanEl.classList.add('ir');
    likeTextSpanEl.innerText = '좋아요 버튼';
    likeCountSpanEl.classList.add('commentCount');
    likeCountSpanEl.innerText = `${posts[i].heartCount}`;
    commentBtnDivEl.classList.add('commentBtn');
    commentBtnDivEl.dataset.postid = `${posts[i].id}`;
    commentCountSpanEl.classList.add('commentCount');
    commentCountSpanEl.innerText = `${posts[i].commentCount}`;
    postDateStrongEl.classList.add('postDate');
    postDateStrongEl.innerText = `${timeForToday(posts[i].createdAt)}`;

    likeBtnEl.appendChild(likeTextSpanEl);
    likeBtnEl.appendChild(likeCountSpanEl);
    commentBtnDivEl.appendChild(commentCountSpanEl);
    contentBtnDivEl.appendChild(likeBtnEl);
    contentBtnDivEl.appendChild(commentBtnDivEl);
    contentSectionEl.appendChild(contentTitleheading4El);
    contentSectionEl.appendChild(contentPEl);
    contentSectionEl.appendChild(checkImgNode);
    contentSectionEl.appendChild(contentBtnDivEl);
    contentSectionEl.appendChild(postDateStrongEl);
    postItem.appendChild(contentSectionEl);
    listContent.appendChild(postItem);

    userBoxDivEl.addEventListener('click', clickUserInfo);
    likeBtnEl.addEventListener('click', clickHeart);
    moreBtnEl.addEventListener('click', clickUserModal);
    commentBtnDivEl.addEventListener('click', clickComment);
  }
}
