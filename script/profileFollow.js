// 쿼리스트링에 따라 팔로우, 팔로윙 페이지 보여주기
class ProfileFollow {
  init = (userListUlEl) => {
    const URLSearch = new URLSearchParams(location.search);
    const title = URLSearch.get("title");
    const myAccountName = localStorage.getItem("accountname");
    let accountName = URLSearch.get("accountname");
    accountName = accountName.replace(" ", "");
    accountName = accountName.replace("@", "");
    accountName = accountName === null ? myAccountName : accountName;

    if (title === "followers") {
      this.getFollowerList(accountName, userListUlEl);
    } else if (title === "followings") {
      this.getFollowingList(accountName, userListUlEl);
    }
  };

  // 팔로윙 정보 가져오기(내가 팔로우한 사용자 목록 가져오기)
  getFollowingList = async function (accountName, userListUlEl) {
    const token = localStorage.getItem("Token");
    const url = "https://mandarin.api.weniv.co.kr";

    const setting = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    };
    try {
      const followingData = await fetch(
        `${url}/profile/${accountName}/following`,
        setting
      );
      const followingDataJson = await followingData.json();
      this.setFollowing(followingDataJson, userListUlEl);
    } catch (err) {
      console.log(err);
    }
  };

  // 팔로윙 정보(내가 팔로우한 사용자) 페이지에 반영
  setFollowing = (followingDataJson, userListUlEl) => {
    const title = document.querySelector(".followers .followTitle");
    title.innerText = "Followings";
    for (const following of followingDataJson) {
      const userItemLiEl = document.createElement("li");
      const userInfoAnchorEl = document.createElement("a");
      const userProfileImgEl = document.createElement("img");
      const userInfoDivEl = document.createElement("div");
      const userNickNameStrongEl = document.createElement("strong");
      const userTextDivEl = document.createElement("div");
      const userAccountPEl = document.createElement("p");
      const followBtnEl = document.createElement("button");

      userItemLiEl.classList.add("userItem");
      userInfoAnchorEl.classList.add("userBox");
      userProfileImgEl.classList.add("userProfileImage");
      userProfileImgEl.classList.add("follow");
      userProfileImgEl.setAttribute("src", `${following.image}`);
      userProfileImgEl.setAttribute("alt", "프로필 이미지");
      userInfoDivEl.classList.add("userInfo");
      userInfoDivEl.classList.add("follow");
      userNickNameStrongEl.classList.add("userNickname");
      userNickNameStrongEl.innerText = `${following.username}`;
      userTextDivEl.classList.add("userText");
      userAccountPEl.classList.add("userMsgContent");
      userAccountPEl.classList.add("userStatusMsg");
      userAccountPEl.innerText = `${following.accountname}`;
      followBtnEl.classList.add("profile");
      followBtnEl.classList.add("followBtn");
      followBtnEl.innerText = "팔로우";
      followBtnEl.addEventListener("click", this.handleFollow);

      userTextDivEl.appendChild(userAccountPEl);
      userInfoDivEl.appendChild(userNickNameStrongEl);
      userInfoDivEl.appendChild(userTextDivEl);
      userInfoAnchorEl.appendChild(userProfileImgEl);
      userInfoAnchorEl.appendChild(userInfoDivEl);
      userInfoAnchorEl.appendChild(followBtnEl);
      userItemLiEl.appendChild(userInfoAnchorEl);
      userListUlEl.appendChild(userItemLiEl);
    }
  };

  // 팔로우 버튼 클릭 시 버튼 스타일 변경
  handleFollow = (e) => {
    e.preventDefault();
    e.target.classList.toggle("follow");
    if (e.target.className === "profile followBtn follow") {
      e.target.innerText = "취소";
      e.target.style.opacity = "0.6";
    } else {
      e.target.innerText = "팔로우";
      e.target.style.opacity = "1";
    }
  };

  // 팔로워 정보 가져오기(나를 팔로우한 사용자 목록 가져오기)
  getFollowerList = async function (accountName, userListUlEl) {
    const token = localStorage.getItem("Token");
    const url = "https://mandarin.api.weniv.co.kr";

    const setting = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    };
    try {
      const followerData = await fetch(
        `${url}/profile/${accountName}/follower`,
        setting
      );
      const followerDataJson = await followerData.json();
      this.setFollower(followerDataJson, userListUlEl);
    } catch (err) {
      console.log(err);
    }
  };

  // 팔로워 정보 (나를 팔로우한 사용자 정보) 페이지에 반영
  setFollower = (followerDataJson, userListUlEl) => {
    const title = document.querySelector(".followers .followTitle");
    title.innerText = "Followers";
    for (const follower of followerDataJson) {
      const userItemLiEl = document.createElement("li");
      const userInfoAnchorEl = document.createElement("a");
      const userProfileImgEl = document.createElement("img");
      const userInfoDivEl = document.createElement("div");
      const userNickNameStrongEl = document.createElement("strong");
      const userTextDivEl = document.createElement("div");
      const userAccountPEl = document.createElement("p");
      const followBtnEl = document.createElement("button");

      userItemLiEl.classList.add("userItem");
      userInfoAnchorEl.classList.add("userBox");
      userProfileImgEl.classList.add("userProfileImage");
      userProfileImgEl.classList.add("follow");
      userProfileImgEl.setAttribute("src", `${follower.image}`);
      userProfileImgEl.setAttribute("alt", "프로필 이미지");
      userInfoDivEl.classList.add("userInfo");
      userInfoDivEl.classList.add("follow");
      userNickNameStrongEl.classList.add("userNickname");
      userNickNameStrongEl.innerText = `${follower.username}`;
      userTextDivEl.classList.add("userText");
      userAccountPEl.classList.add("userMsgContent");
      userAccountPEl.classList.add("userStatusMsg");
      userAccountPEl.innerText = `${follower.accountname}`;
      followBtnEl.classList.add("profile");
      followBtnEl.classList.add("followBtn");
      followBtnEl.innerText = "팔로우";
      followBtnEl.addEventListener("click", this.handleFollow);

      userTextDivEl.appendChild(userAccountPEl);
      userInfoDivEl.appendChild(userNickNameStrongEl);
      userInfoDivEl.appendChild(userTextDivEl);
      userInfoAnchorEl.appendChild(userProfileImgEl);
      userInfoAnchorEl.appendChild(userInfoDivEl);
      userInfoAnchorEl.appendChild(followBtnEl);
      userItemLiEl.appendChild(userInfoAnchorEl);
      userListUlEl.appendChild(userItemLiEl);
    }
  };
}

export default ProfileFollow;
