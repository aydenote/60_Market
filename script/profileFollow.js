const userList = document.querySelector(".userList");
const url = "https://mandarin.api.weniv.co.kr";
const myAccountName = localStorage.getItem("accountname");
const URLSearch = new URLSearchParams(location.search);
let accountName = URLSearch.get("accountname");
accountName = accountName.replace(" ", "");
const title = URLSearch.get("title");

if (title === "followers") {
  getFollowerList();
} else if (title === "followings") {
  getFollowingList();
}

// 팔로윙 정보 가져오기(내가 팔로우한 사용자 목록 가져오기)
async function getFollowingList() {
  const token = localStorage.getItem("Token");
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
    setFollowing(followingDataJson);
  } catch (err) {
    console.log(err);
  }
}

// 팔로윙 정보(내가 팔로우한 사용자) 페이지에 반영

function setFollowing(followingDataJson) {
  for (const following of followingDataJson) {
    userList.innerHTML += `<li class="userItem">
<a href="profile.html\?accountname=${following.accountname}" class="userBox">
  <img src="${following.image}" alt="프로필 이미지" class="userProfileImage follow" />
  <div class="userInfo follow">
    <strong class="userNickname">${following.username}</strong>
    <div class="userText">
      <p class="userMsgContent userStatusMsg">${following.accountname}</p>
    </div>
  </div>
  <button onclick="handleFollow(event)" class="profile followBtn">팔로우</button>
  </a>
</li>`;
  }
}

// 팔로우 버튼 클릭 시 버튼 스타일 변경
function handleFollow(e) {
  e.preventDefault();
  e.target.classList.toggle("follow");
  if (e.target.className === "profile followBtn follow") {
    e.target.innerText = "취소";
    e.target.style.opacity = "0.6";
  } else {
    e.target.innerText = "팔로우";
    e.target.style.opacity = "1";
  }
}

// 팔로워 정보 가져오기(나를 팔로우한 사용자 목록 가져오기)
async function getFollowerList() {
  const token = localStorage.getItem("Token");
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
    setFollower(followerDataJson);
  } catch (err) {
    console.log(err);
  }
}

// 팔로워 정보 (나를 팔로우한 사용자 정보) 페이지에 반영
function setFollower(followerDataJson) {
  for (const follower of followerDataJson) {
    userList.innerHTML += `<li class="userItem">
<a href="profile.html\?accountname=${follower.accountname}" class="userBox">
  <img src="${follower.image}" alt="프로필 이미지" class="userProfileImage follow" />
  <div class="userInfo follow">
    <strong class="userNickname">${follower.username}</strong>
    <div class="userText">
      <p class="userMsgContent userStatusMsg">${follower.accountname}</p>
    </div>
  </div>
  <button onclick="handleFollow(event)" class="profile followBtn" href="">팔로우</button>
  </a>
</li>`;
  }
}
