const searchInput = document.querySelector(".headerBarSearch");
const userListContent = document.querySelector(".userList");

//로그인 구현시 삭제
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYTMzZjFhNTM2MWFhZWE1NjlhOThkYSIsImV4cCI6MTY2MzEzODIyNiwiaWF0IjoxNjU3OTU0MjI2fQ.41rTNZp_CGxOZrMBbhDEPuhDoLt-yCEqSYbFUbAItRk";

// console.log(searchInput);
// console.log(userListContent);

searchInput.addEventListener("keyup", (e) => {
  //   console.log(e.target.value);
  if (e.target.value == "") {
    userListContent.innerHTML = "";
  } else {
    searchUserList(e.target.value);
  }
});

async function searchUserList(inputValue) {
  userListContent.innerHTML = "";

  const url = `https://mandarin.api.weniv.co.kr/user/searchuser/?keyword=${inputValue}`;

  const res = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
  });
  //   console.log(res);

  const data = await res.json();

  data.forEach((element) => {
    console.log(element);

    userListContent.innerHTML += `
    <li class="userItem" id="${element._id}">
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
        <button class="followBtn">팔로우</button>
        </a>
    </li>
    `;
  });
}
