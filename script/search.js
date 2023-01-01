export default async function searchUser(e, url, token, userListContent) {
  try {
    if (e.target.value == '') {
      userListContent.innerHTML = '';
    } else {
      const res = await fetch(`${url}/user/searchuser/?keyword=${e.target.value}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      const userData = await res.json();

      // 검색된 유저 정보 구현
      userListContent.innerHTML = '';
      userData.forEach(element => {
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
    console.log(err);
  }
}
