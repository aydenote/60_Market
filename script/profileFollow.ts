interface FollowDataType {
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

// 쿼리스트링에 따라 팔로우, 팔로윙 페이지 보여주기
export function init(userListUlEl: HTMLUListElement) {
  const title = window.location.hash.split('title=')[1];
  const myAccountName = localStorage.getItem('accountname');
  const reg = new RegExp('@(.*?)&');
  let accountName: string | null = window.location.hash.split(reg)[1];
  accountName = accountName == null ? myAccountName : accountName;

  if (title === 'followers') {
    getFollowerList(accountName!, userListUlEl);
  } else if (title === 'followings') {
    getFollowingList(accountName!, userListUlEl);
  }
}

// 팔로윙 정보 가져오기(내가 팔로우한 사용자 목록 가져오기)
async function getFollowingList(accountName: string, userListUlEl: HTMLUListElement) {
  const token = localStorage.getItem('Token');
  const url = 'https://mandarin.api.weniv.co.kr';

  const setting = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json',
    },
  };
  try {
    const followingData = await fetch(`${url}/profile/${accountName}/following`, setting);
    const followingDataJson = await followingData.json();
    setFollowing(followingDataJson, userListUlEl);
  } catch (err) {
    console.log(err);
  }
}

// 팔로윙 정보(내가 팔로우한 사용자) 페이지에 반영
function setFollowing(followingDataJson: FollowDataType[], userListUlEl: HTMLUListElement) {
  const title = document.querySelector('.followers .followTitle') as HTMLElement;
  const url = 'https://mandarin.api.weniv.co.kr';

  title.innerText = 'Followings';
  for (const following of followingDataJson) {
    const userItemLiEl = document.createElement('li');
    const userInfoAnchorEl = document.createElement('a');
    const userProfileImgEl = document.createElement('img');
    const userInfoDivEl = document.createElement('div');
    const userNickNameStrongEl = document.createElement('strong');
    const userTextDivEl = document.createElement('div');
    const userAccountPEl = document.createElement('p');
    const followBtnEl = document.createElement('button');

    userItemLiEl.classList.add('userItem');
    userInfoAnchorEl.classList.add('userBox');
    userProfileImgEl.classList.add('userProfileImage');
    userProfileImgEl.classList.add('follow');
    userProfileImgEl.src = following.image.length <= 20 ? `${url}/${following.image}` : `${following.image}`;
    userProfileImgEl.setAttribute('alt', '프로필 이미지');
    userInfoDivEl.classList.add('userInfo');
    userInfoDivEl.classList.add('follow');
    userNickNameStrongEl.classList.add('userNickname');
    userNickNameStrongEl.innerText = `${following.username}`;
    userTextDivEl.classList.add('userText');
    userAccountPEl.classList.add('userMsgContent');
    userAccountPEl.classList.add('userStatusMsg');
    userAccountPEl.innerText = `${following.accountname}`;
    followBtnEl.classList.add('profile');
    followBtnEl.classList.add('followBtn');
    followBtnEl.innerText = '팔로우';
    followBtnEl.addEventListener('click', handleFollow);

    userTextDivEl.appendChild(userAccountPEl);
    userInfoDivEl.appendChild(userNickNameStrongEl);
    userInfoDivEl.appendChild(userTextDivEl);
    userInfoAnchorEl.appendChild(userProfileImgEl);
    userInfoAnchorEl.appendChild(userInfoDivEl);
    userInfoAnchorEl.appendChild(followBtnEl);
    userItemLiEl.appendChild(userInfoAnchorEl);
    userListUlEl.appendChild(userItemLiEl);
  }
}

// 팔로우 버튼 클릭 시 버튼 스타일 변경
function handleFollow(event: MouseEvent) {
  event.preventDefault();
  (event.target as HTMLElement).classList.toggle('follow');
  if ((event.target as HTMLElement).className === 'profile followBtn follow') {
    (event.target as HTMLElement).innerText = '취소';
    (event.target as HTMLElement).style.opacity = '0.6';
  } else {
    (event.target as HTMLElement).innerText = '팔로우';
    (event.target as HTMLElement).style.opacity = '1';
  }
}

// 팔로워 정보 가져오기(나를 팔로우한 사용자 목록 가져오기)
async function getFollowerList(accountName: string, userListUlEl: HTMLUListElement) {
  const token = localStorage.getItem('Token');
  const url = 'https://mandarin.api.weniv.co.kr';

  const setting = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json',
    },
  };
  try {
    const followerData = await fetch(`${url}/profile/${accountName}/follower`, setting);
    const followerDataJson = await followerData.json();
    setFollower(followerDataJson, userListUlEl);
  } catch (err) {
    console.log(err);
  }
}

// 팔로워 정보 (나를 팔로우한 사용자 정보) 페이지에 반영
function setFollower(followerDataJson: FollowDataType[], userListUlEl: HTMLUListElement) {
  const title = document.querySelector('.followers .followTitle') as HTMLElement;
  const url = 'https://mandarin.api.weniv.co.kr';

  title.innerText = 'Followers';
  for (const follower of followerDataJson) {
    const userItemLiEl = document.createElement('li');
    const userInfoAnchorEl = document.createElement('a');
    const userProfileImgEl = document.createElement('img');
    const userInfoDivEl = document.createElement('div');
    const userNickNameStrongEl = document.createElement('strong');
    const userTextDivEl = document.createElement('div');
    const userAccountPEl = document.createElement('p');
    const followBtnEl = document.createElement('button');

    userItemLiEl.classList.add('userItem');
    userInfoAnchorEl.classList.add('userBox');
    userProfileImgEl.classList.add('userProfileImage');
    userProfileImgEl.classList.add('follow');
    userProfileImgEl.src = follower.image.length <= 20 ? `${url}/${follower.image}` : `${follower.image}`;
    userProfileImgEl.setAttribute('alt', '프로필 이미지');
    userInfoDivEl.classList.add('userInfo');
    userInfoDivEl.classList.add('follow');
    userNickNameStrongEl.classList.add('userNickname');
    userNickNameStrongEl.innerText = `${follower.username}`;
    userTextDivEl.classList.add('userText');
    userAccountPEl.classList.add('userMsgContent');
    userAccountPEl.classList.add('userStatusMsg');
    userAccountPEl.innerText = `${follower.accountname}`;
    followBtnEl.classList.add('profile');
    followBtnEl.classList.add('followBtn');
    followBtnEl.innerText = '팔로우';
    followBtnEl.addEventListener('click', handleFollow);

    userTextDivEl.appendChild(userAccountPEl);
    userInfoDivEl.appendChild(userNickNameStrongEl);
    userInfoDivEl.appendChild(userTextDivEl);
    userInfoAnchorEl.appendChild(userProfileImgEl);
    userInfoAnchorEl.appendChild(userInfoDivEl);
    userInfoAnchorEl.appendChild(followBtnEl);
    userItemLiEl.appendChild(userInfoAnchorEl);
    userListUlEl.appendChild(userItemLiEl);
  }
}
