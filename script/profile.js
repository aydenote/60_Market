import { backHistory, timeForToday } from '../utils/common.js';
import { clickHeart } from './heartBtn.js';
import { logoutModal, clickUserModal, productModal } from './modal.js';
import { getPosting } from '../utils/apiModule.js';

// 프로필 정보 가져오기
export async function getProfileInfo() {
  const url = 'https://mandarin.api.weniv.co.kr';
  const token = localStorage.getItem('Token');
  const myAccountName = localStorage.getItem('accountname');
  let accountName = window.location.hash.split('accountname=')[1];
  accountName = accountName == null ? myAccountName : accountName;

  const setting = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json',
    },
  };

  try {
    const resProfile = await fetch(`${url}/profile/${accountName}`, setting);
    const resProfileJson = await resProfile.json();
    const userProfile = resProfileJson.profile;
    // 사용자에 따라 페이지 구현
    if (userProfile.accountname === myAccountName) {
      setMyProfile(userProfile);
    } else {
      setYourProfile(userProfile);
    }
  } catch (err) {
    console.error(err);
  }
}

function setMyProfile(userProfile) {
  const url = 'https://mandarin.api.weniv.co.kr';
  const createEditLink = document.createElement('div');
  const createProductLink = document.createElement('div');
  const profileLinkBtn = document.querySelector('.link');
  const followingCount = document.querySelector('.followings');
  const followerCount = document.querySelector('.followers');

  createEditLink.setAttribute('class', 'fixProfile');
  createEditLink.addEventListener('click', () => {
    window.location.hash = `#editProfile`; // 주소 업데이트
  });
  createEditLink.innerText = '프로필 수정';
  profileLinkBtn.append(createEditLink);

  createProductLink.setAttribute('class', 'addPosting');
  createProductLink.addEventListener('click', () => {
    window.location.hash = '#product';
  });
  createProductLink.innerText = '상품 등록';
  profileLinkBtn.append(createProductLink);

  document.querySelector('.ProfileContent .myImage').src = `${url}/${userProfile.image}`;
  document.querySelector('.profileInfo .userName').innerText = userProfile.username;
  document.querySelector('.profileInfo .userId').innerText = `@${userProfile.accountname}`;
  document.querySelector('.profileInfo .introduction').innerText = userProfile.intro;

  followingCount.innerText = userProfile.following.length;
  followerCount.innerText = userProfile.follower.length;

  getProductList(userProfile);
}

// 다른 사람 프로필 페이지 구현
function setYourProfile(userProfile) {
  const createMessageImg = document.createElement('img');
  const createFollowButton = document.createElement('button');
  const createShareImg = document.createElement('img');
  const profileLinkBtn = document.querySelector('.link');
  const followingCount = document.querySelector('.followings');
  const followerCount = document.querySelector('.followers');

  createMessageImg.setAttribute('class', 'messageBtn');
  createMessageImg.setAttribute('src', '../asset/images/icons/icon__message.svg');
  createMessageImg.setAttribute('alt', '메세지 버튼');
  createMessageImg.addEventListener('click', () => {
    window.location.hash = `#chatting1`; // 주소 업데이트
  });
  profileLinkBtn.append(createMessageImg);

  createFollowButton.setAttribute('class', 'followBtn');
  createFollowButton.innerText = '팔로우';
  profileLinkBtn.append(createFollowButton);

  createShareImg.setAttribute('class', 'shareBtn');
  createShareImg.setAttribute('src', '../asset/images/icons/icon__share.svg');
  createShareImg.setAttribute('alt', '공유 버튼');
  profileLinkBtn.append(createShareImg);

  document.querySelector('.ProfileContent .myImage').src = userProfile.image;
  document.querySelector('.profileInfo .userName').innerText = userProfile.username;
  document.querySelector('.profileInfo .userId').innerText = `@ ${userProfile.accountname}`;
  document.querySelector('.profileInfo .introduction').innerText = userProfile.intro;

  followingCount.innerText = userProfile.following.length;
  followerCount.innerText = userProfile.follower.length;

  // 팔로우 / 언팔로우 스타일
  createFollowButton.addEventListener('click', event => {
    event.target.classList.toggle('follow');
    if (event.target.className === 'followBtn follow') {
      event.target.innerText = '언팔로우';
      event.target.style.opacity = '0.5';
    } else {
      event.target.innerText = '팔로우';
      event.target.style.opacity = '1';
    }
  });

  getProductList(userProfile);
}

// 사용자가 판매 중인 상품 정보 가져오기
async function getProductList(userProfile) {
  const url = 'https://mandarin.api.weniv.co.kr';
  const token = localStorage.getItem('Token');

  const setting = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json',
    },
  };
  try {
    const resProfileProduct = await fetch(`${url}/product/${userProfile.accountname}`, setting);
    const resProfileProductJson = await resProfileProduct.json();
    setProductList(resProfileProductJson);
  } catch (err) {
    console.error(err);
  }
}

// 등록된 상품 수에 따라 프로필에 해당 상품 반영
function setProductList(resProfileProductJson) {
  if (resProfileProductJson.product.length !== 0) {
    const saleItems = document.querySelector('.saleItemContainer');
    const createP = document.createElement('p');
    const createUl = document.createElement('ul');

    createP.setAttribute('class', 'title');
    createUl.setAttribute('class', 'productList');
    saleItems.append(createP);
    saleItems.append(createUl);

    document.querySelector('.saleItems .title').innerText = '판매 중인 상품';
    const productList = document.querySelector('.saleItems .productList');

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
  const product = document.querySelectorAll('.productList li');
  [].forEach.call(product, function (product) {
    product.addEventListener('click', event => {
      const productId = event.target.closest('li').id;
      productModal(productId);
    });
  });
}

// 게시물 가지고 오기
export function getPostingList() {
  const userPostInfo = getPosting();
  userPostInfo.then(res => {
    setPostingList(res);
  });
}

// 게시물 타입바 생성 및 최초 목록형으로 포스팅
function setPostingList(userPostInfo) {
  const postingSummary = document.querySelector('.postingSummary');
  if (userPostInfo.length === 0) {
    postingSummary.classList.add('hidden');
  } else {
    postingSummary.classList.remove('hidden');
    const createArticle = document.createElement('article');
    const createH3 = document.createElement('h3');
    createArticle.setAttribute('class', 'post');
    createH3.setAttribute('class', 'ir');
    createH3.innerText = '피드 게시글';
    createArticle.appendChild(createH3);

    postingSummary.append(createArticle);
    listTypePost(userPostInfo);
  }
}

// 목록형으로 포스팅 표시
export function listTypePost(userPostInfo) {
  const postingSummary = document.querySelector('.postingSummary');
  const postContent = document.querySelector('.postContent');
  const albumType = document.querySelector('.postingType.album.buttonClick');
  const ListType = document.querySelector('.postingType.list.buttonClick');
  const url = 'https://mandarin.api.weniv.co.kr';

  albumType.classList.add('unselected');
  ListType.classList.remove('unselected');
  if (postContent) {
    postContent.remove();
  }
  const createArticle = document.createElement('article');
  const createH3 = document.createElement('h3');
  createArticle.setAttribute('class', 'post');
  createH3.setAttribute('class', 'ir');
  createH3.innerText = '피드 게시글';
  createArticle.appendChild(createH3);

  postingSummary.append(createArticle);
  const posting = document.querySelectorAll('.post');
  posting[0].innerHTML = '<h3 class="ir">피드 게시글</h3>';

  if (posting.length >= 2) {
    posting[1].remove();
  }

  for (const post of userPostInfo) {
    let postImage = '';
    let heartStatus = '';
    if (post.image && post.image.search('undefined') === -1) {
      let images = post.image.split(',');
      for (const image of images) {
        postImage += `
        <li>
          <img src="${image}" alt="게시물 이미지" onerror="this.style.display='none'"/>
        </li>
        `;
      }
    }

    let checkImg = !postImage ? '' : `<div class="postImgContent"><ul>${postImage}</ul></div>`;

    // 좋아요 이미지 on, off 스타일 구현
    if (post.hearted) {
      heartStatus = 'likeBtn on';
    } else {
      heartStatus = 'likeBtn';
    }

    const range = document.createRange();
    const ImgNode = range.createContextualFragment(checkImg);
    const postItemDivEl = document.createElement('div');
    const listContent = document.querySelector('.post');

    postItemDivEl.classList.add('postItem');
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
    userBoxDivEl.setAttribute('data-key', post.id);
    userProfileImgEl.classList.add('userProfileImage');
    userProfileImgEl.setAttribute('src', `${post.author.image}`);
    userProfileImgEl.setAttribute('alt', `${post.author.username}님의 프로필 이미지`);
    userInfoDivEl.classList.add('userInfo');
    userNicknameStrongEl.classList.add('userNickname');
    userNicknameStrongEl.innerText = `${post.author.username}`;
    userTextDivEl.classList.add('userText');
    userStatusMsgPEl.classList.add('userMsgContent');
    userStatusMsgPEl.classList.add('userStatusMsg');
    userStatusMsgPEl.innerText = `@${post.author.accountname}`;
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
    postItemDivEl.appendChild(postHeading4El);
    postItemDivEl.appendChild(userInfoSectionEl);

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
    contentSectionEl.id = `${post.id}`;
    contentTitleheading4El.classList.add('ir');
    contentTitleheading4El.innerText = '게시글 내용';
    contentPEl.innerText = `${post.content}`;
    contentBtnDivEl.classList.add('postBtnContent');
    likeBtnEl.classList.add('likeBtn');
    if (post.hearted) {
      likeBtnEl.classList.add('on');
    } else {
      likeBtnEl.classList.remove('on');
    }
    likeTextSpanEl.classList.add('ir');
    likeTextSpanEl.innerText = '좋아요 버튼';
    likeCountSpanEl.classList.add('commentCount');
    likeCountSpanEl.innerText = `${post.heartCount}`;
    commentBtnDivEl.classList.add('commentBtn');
    commentBtnDivEl.dataset.postid = `${post.id}`;
    commentCountSpanEl.classList.add('commentCount');
    commentCountSpanEl.innerText = `${post.commentCount}`;
    postDateStrongEl.classList.add('postDate');
    postDateStrongEl.innerText = `${timeForToday(post.createdAt)}`;

    likeBtnEl.appendChild(likeTextSpanEl);
    likeBtnEl.appendChild(likeCountSpanEl);
    commentBtnDivEl.appendChild(commentCountSpanEl);
    contentBtnDivEl.appendChild(likeBtnEl);
    contentBtnDivEl.appendChild(commentBtnDivEl);
    contentSectionEl.appendChild(contentTitleheading4El);
    contentSectionEl.appendChild(contentPEl);
    contentSectionEl.appendChild(ImgNode);
    contentSectionEl.appendChild(contentBtnDivEl);
    contentSectionEl.appendChild(postDateStrongEl);
    postItemDivEl.appendChild(contentSectionEl);
    listContent.appendChild(postItemDivEl);

    userBoxDivEl.addEventListener('click', clickUserInfo);
    likeBtnEl.addEventListener('click', clickHeart);
    moreBtnEl.addEventListener('click', clickUserModal);
    commentBtnDivEl.addEventListener('click', clickComment);

    const moreBtn = document.querySelectorAll('.moreBtn.buttonClick');
    const heartBtn = document.querySelectorAll('.postBtnContent button');
    [].forEach.call(heartBtn, function (heartBtn) {
      heartBtn.addEventListener('click', clickHeart);
    });
    [].forEach.call(moreBtn, function (moreBtn) {
      moreBtn.addEventListener('click', clickUserModal);
    });
  }
}

function clickComment(event) {
  const postId = event.target.closest('.commentBtn').dataset.postid;
  window.location.hash = `#post\?postid=${postId}`; // 주소 업데이트
}

function clickUserInfo(event) {
  const userAccount = event.target
    .closest('.userList')
    .children[0].children[0].childNodes[1].children[1].innerText.replace('@', '');
  if (event.target.className === 'moreBtn buttonClick') {
    return;
  }
  window.location.hash = `#profile\?accountname=${userAccount}`; // 주소 업데이트
}

// 앨범형 포스팅 구현
export function albumTypePost() {
  getPosting().then(res => setAlbum(res));
}

function setAlbum(userPostInfo) {
  const postingSummary = document.querySelector('.postingSummary');
  const postContent = document.querySelectorAll('.postContent');
  const post = document.querySelector('.post');
  const albumType = document.querySelector('.postingType.album.buttonClick');
  const ListType = document.querySelector('.postingType.list.buttonClick');
  ListType.classList.add('unselected');
  albumType.classList.remove('unselected');

  if (post) {
    post.remove();
  }
  if (postContent.length >= 1) {
    postContent[0].remove();
  }

  const createArticle = document.createElement('article');
  const createH2 = document.createElement('h2');
  const createUl = document.createElement('ul');
  createArticle.setAttribute('class', 'postContent');
  createH2.setAttribute('class', 'ir');
  createH2.innerText = '등록된 게시물';
  createUl.setAttribute('class', 'postingList');
  createArticle.appendChild(createH2);
  createArticle.appendChild(createUl);
  postingSummary.appendChild(createArticle);

  for (const post of userPostInfo) {
    const postImg = post.image.split(',');
    // 게시물에 이미지가 없는 경우, img 태그 생성 불가.
    // 게시물에 이미지가 2개 이상인 경우, 이미지 레이어 아이콘 추가.
    if (postImg[0] === '') {
    } else if (postImg.length >= 2) {
      const imgLiEl = document.createElement('li');
      const postImgEl = document.createElement('img');
      const layerImgEl = document.createElement('img');

      postImgEl.setAttribute('src', `${postImg[0]}`);
      postImgEl.setAttribute('alt', '');
      postImgEl.onerror = "this.style.display='none'";
      layerImgEl.classList.add('imageLayer');
      layerImgEl.setAttribute('src', '../asset/images/icons/icon__imageLayer.svg');
      layerImgEl.setAttribute('alt', '이미지 레이어 아이콘');
      layerImgEl.onerror = "this.style.display='none'";

      imgLiEl.appendChild(postImgEl);
      imgLiEl.appendChild(layerImgEl);
      createUl.appendChild(imgLiEl);
    } else {
      const imgLiEl = document.createElement('li');
      const postImgEl = document.createElement('img');

      postImgEl.setAttribute('src', `${postImg[0]}`);
      postImgEl.setAttribute('alt', '');
      postImgEl.onerror = "this.style.display='none'";

      imgLiEl.appendChild(postImgEl);
      createUl.appendChild(imgLiEl);
    }
  }
}

// 사용자 로그아웃 모달
export function modal(headerModal) {
  headerModal.addEventListener('click', logoutModal());
}
