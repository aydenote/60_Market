interface SearchUserType {
  accountname: string;
  follower: string[];
  followerCount: number;
  following: string[];
  followingCount: number;
  image: string;
  isfollow: boolean;
  username: string;
  _id: string;
}

export default async function searchUser(event: KeyboardEvent) {
  const url = 'https://mandarin.api.weniv.co.kr';
  const token = localStorage.getItem('Token');
  const userListContent = document.querySelector('.userList') as HTMLUListElement;

  try {
    if ((event.target as HTMLInputElement).value == '') {
      userListContent.innerHTML = '';
    } else {
      const res = await fetch(`${url}/user/searchuser/?keyword=${(event.target as HTMLInputElement).value}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      const userData = await res.json();
      // 검색된 유저 정보 구현
      userListContent.innerHTML = '';
      userData.forEach((element: SearchUserType) => {
        const userItemEl = document.createElement('li');
        const userAnchorEl = document.createElement('a');
        const userImgEl = document.createElement('img');
        const userInfoEl = document.createElement('div');
        const nickNameEl = document.createElement('strong');
        const userText = document.createElement('div');
        const accountNameEl = document.createElement('p');
        userItemEl.classList.add('userItem');
        userAnchorEl.classList.add('userBox');
        userAnchorEl.addEventListener('click', () => {
          window.location.hash = `#profile\?accountname=${element.accountname}`; // 주소 업데이트
        });
        userImgEl.classList.add('userProfileImage');
        userImgEl.setAttribute('src', `${element.image}`);
        userImgEl.setAttribute('onError', "this.src= '../asset/images/timi.svg'");
        userImgEl.setAttribute('alt', `${element.username}님의 프로필 이미지`);
        userInfoEl.classList.add('userInfo');
        nickNameEl.classList.add('userNickname');
        nickNameEl.innerText = `${element.username}`;
        userText.classList.add('userText');
        accountNameEl.classList.add('userMsgContent');
        accountNameEl.classList.add('userStatusMsg');
        accountNameEl.innerText = `@${element.accountname}`;
        userText.appendChild(accountNameEl);
        userInfoEl.appendChild(nickNameEl);
        userInfoEl.appendChild(userText);
        userAnchorEl.appendChild(userImgEl);
        userAnchorEl.appendChild(userInfoEl);
        userItemEl.appendChild(userAnchorEl);
        userListContent.appendChild(userItemEl);
      });
    }
  } catch (err) {
    console.error(err);
  }
}
