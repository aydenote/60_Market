export default async function searchUser(e, url, token, userListContent) {
  try {
    if (e.target.value == "") {
      userListContent.innerHTML = "";
    } else {
      const res = await fetch(
        `${url}/user/searchuser/?keyword=${e.target.value}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const userData = await res.json();

      userListContent.innerHTML = "";
      userData.forEach((element) => {
        userListContent.innerHTML += `
          <li class="userItem">
              <a href="profile.html\?accountname=${element.accountname}"
              class="userBox">
                  <img
                      src="${element.image}"
                      alt="${element.username}님의 프로필 이미지"
                      class="userProfileImage"
                  />
                  <div class="userInfo">
                      <strong class="userNickname">${element.username}</strong>
                      <div class="userText">
                          <p class="userMsgContent userStatusMsg">
                              @${element.accountname}
                          </p>
                      </div>
                  </div>
              </a>
          </li>
          `;
      });
    }
  } catch (err) {
    console.log(err);
  }
}
