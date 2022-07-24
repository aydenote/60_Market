const profileLinkBtn = document.querySelector(".link");
const followingCount = document.querySelector(".ProfileContent .followings");
const followerCount = document.querySelector(".ProfileContent .followers");
const url = "https://mandarin.api.weniv.co.kr";

const URLSearch = new URLSearchParams(location.search);
let accountName = URLSearch.get("accountname");
const myAccountName = localStorage.getItem("accountname");
accountName = accountName === null ? localStorage.getItem("accountname") : accountName;

function clickedFollowLink(e) {
  const profileUser = document.querySelector(".profileInfo .userId");
  const userId = profileUser.innerText.replace(/@/g, "");
  location.href = `profileFollow.html\?accountname=${userId}\&title=${e.target.className}`;
}

// 프로필 정보 가져오기
async function getProfileInfo() {
  const url = "https://mandarin.api.weniv.co.kr";
  const token = localStorage.getItem("Token");

  const setting = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
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
getProfileInfo();

// 내 프로필 페이지 구현
function setMyProfile(userProfile) {
  const createEditLink = document.createElement("a");
  const createProductLink = document.createElement("a");

  createEditLink.setAttribute("class", "fixProfile");
  createEditLink.setAttribute("href", "editProfile.html");
  createEditLink.innerText = "프로필 수정";
  profileLinkBtn.append(createEditLink);

  createProductLink.setAttribute("class", "addPosting");
  createProductLink.setAttribute("href", "posting.html");
  createProductLink.innerText = "상품 등록";
  profileLinkBtn.append(createProductLink);

  document.querySelector(".ProfileContent .myImage").src = userProfile.image;
  document.querySelector(".profileInfo .userName").innerText = userProfile.username;
  document.querySelector(".profileInfo .userId").innerText = `@${userProfile.accountname}`;
  document.querySelector(".profileInfo .introduction").innerText = userProfile.intro;

  followingCount.innerText = userProfile.following.length;
  followerCount.innerText = userProfile.follower.length;

  getProductList(userProfile);
}

// 다른 사람 프로필 페이지 구현
function setYourProfile(userProfile) {
  const createMessageImg = document.createElement("img");
  const createFollowButton = document.createElement("button");
  const createShareImg = document.createElement("img");

  createMessageImg.setAttribute("class", "messageBtn");
  createMessageImg.setAttribute("src", "/asset/images/icons/icon__message.svg");
  createMessageImg.setAttribute("alt", "메세지 버튼");
  profileLinkBtn.append(createMessageImg);

  createFollowButton.setAttribute("class", "followBtn");
  createFollowButton.setAttribute("onclick", "clickFollowBtn()");
  createFollowButton.innerText = "팔로우";
  profileLinkBtn.append(createFollowButton);

  createShareImg.setAttribute("class", "shareBtn");
  createShareImg.setAttribute("src", "/asset/images/icons/icon__share.svg");
  createShareImg.setAttribute("alt", "공유 버튼");
  profileLinkBtn.append(createShareImg);

  document.querySelector(".ProfileContent .myImage").src = userProfile.image;
  document.querySelector(".profileInfo .userName").innerText = userProfile.username;
  document.querySelector(".profileInfo .userId").innerText = `@ ${userProfile.accountname}`;
  document.querySelector(".profileInfo .introduction").innerText = userProfile.intro;

  followingCount.innerText = userProfile.following.length;
  followerCount.innerText = userProfile.follower.length;

  getProductList(userProfile);
}

// 사용자가 판매 중인 상품 정보 가져오기
async function getProductList(userProfile) {
  const url = "https://mandarin.api.weniv.co.kr";
  const token = localStorage.getItem("Token");

  const setting = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
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
    const saleItems = document.querySelector(".ProfileContent .saleItems");
    const createP = document.createElement("p");
    const createUl = document.createElement("ul");

    createP.setAttribute("class", "title");
    createUl.setAttribute("class", "productList");
    saleItems.append(createP);
    saleItems.append(createUl);
    const productList = document.querySelector(".saleItems .productList");
    document.querySelector(".saleItems .title").innerText = "판매 중인 상품";
    productList.addEventListener("click", (e) => {
      if (e.target.className === "productList") {
        return;
      } else {
        location.href = "error.html";
      }
    });

    for (const product of resProfileProductJson.product) {
      productList.innerHTML += `<li>
      <img src="${product.itemImage}" alt="상품 이미지" />
      <p class="ProductTitle">${product.itemName}</p>
      <p class="price">${product.price.toLocaleString()}원</p>
    </li>`;
    }
  } else {
    return;
  }
}

// 팔로우, 언팔로우 스타일 변경 구현
function clickFollowBtn() {
  const followBtn = document.querySelector(".followBtn");
  followBtn.classList.toggle("follow");
  if (followBtn.className === "followBtn follow") {
    followBtn.innerText = "언팔로우";
    followBtn.style.opacity = "0.3";
  } else {
    followBtn.innerText = "팔로우";
    followBtn.style.opacity = "1";
  }
}

// 게시물 가지고 오기
async function getPostingList() {
  const url = "https://mandarin.api.weniv.co.kr";
  const token = localStorage.getItem("Token");

  const setting = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
  };
  try {
    const resProfileProduct = await fetch(`${url}/post/${accountName}/userpost/?limit=9`, setting);
    const resProfileProductJson = await resProfileProduct.json();
    setPostingList(resProfileProductJson.post);
  } catch (err) {
    console.error(err);
  }
}

getPostingList();

// 게시물 반영하기
function setPostingList(posts) {
  // 리스트형 게시물
  const postingSummary = document.querySelector(".postingSummary");
  const postingListContent = document.querySelector(".post");
  const postingAlbumContent = document.querySelector(".postingSummary .postingList");
  const albumType = document.querySelector(".postingType.album.buttonClick");
  const ListType = document.querySelector(".postingType.list.buttonClick");

  postingSummary.addEventListener("click", (event) => {
    if (event.target.classList[1] === "list") {
      setPostingList(posts);
      albumType.classList.add("unselected");
      ListType.classList.remove("unselected");
    } else if (event.target.classList[1] === "album") {
      setAlbumType(posts);
      ListType.classList.add("unselected");
      albumType.classList.remove("unselected");
    } else {
      return;
    }
  });

  if (posts.length === 0) {
    postingSummary.classList.add("hidden");
    postingListContent.classList.add("hidden");
  } else {
    postingSummary.classList.remove("hidden");
    postingListContent.classList.remove("hidden");
    postingListContent.innerHTML = "";
    postingAlbumContent.innerHTML = "";
    for (const post of posts) {
      let postContent = `
          <section>
            <div class="userList">
              <div class="userItem">
                <a href="profile.html?accountname=${post.author.accountname}" class="userBox">
                  <img src="${post.author.image}" alt="프로필 이미지" class="userProfileImage" />
                  <div class="userInfo">
                    <strong class="userNickname">${post.author.username}</strong>
                    <div class="userText">
                      <p class="userMsgContent userStatusMsg">@${post.author.accountname}</p>
                    </div>
                  </div>
                  <button class="moreBtn buttonClick">
                    <span class="ir">게시글 더보기 버튼</span>
                  </button>
                </a>
              </div>
            </div>
          </section>
          <section class="postContent">
            <h4 class="ir">게시글 내용</h4>
            <p>${post.content}</p>
            <ul>
              <li>
                <img src="${post.image}" alt="게시물 이미지" onerror="this.style.display='none'" />
              </li>
            </ul>
            <div class="postBtnContent">
              <button class="likeBtn">
                <span class="ir">좋아요 버튼</span>
                <span class="likeCount">2</span>
              </button>
              <a href="post.html" class="commentBtn">
                <span class="commentCount">2</span>
              </a>
            </div>
            <strong class="postDate">${timeForToday(post.updatedAt)}</strong>
          </section>`;
      postingListContent.insertAdjacentHTML("beforeend", postContent);
    }
  }
}

// 앨범형 게시물
function setAlbumType(posts) {
  const postingListContent = document.querySelector(".post");
  const postingSummary = document.querySelector(".postingSummary");
  postingListContent.innerHTML = "";
  if (posts.length === 0) {
    postingSummary.classList.add("hidden");
  } else {
    postingSummary.classList.remove("hidden");
    const postingContent = document.querySelector(".postingSummary .postingList");
    postingContent.innerHTML = "";
    for (const post of posts) {
      let postingImg = post.image;
      if (!postingImg) {
        postingImg = `${url}/1658636863237.png`;
      }
      postingContent.innerHTML += `<li>
        <img src="${postingImg}" alt="" />
      </li>`;
    }
  }
}

// 포스팅 시간 계산 함수
function timeForToday(postingDate) {
  const today = new Date();
  const timeValue = new Date(postingDate);

  const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
  if (betweenTime < 1) return "방금전";
  if (betweenTime < 60) {
    return `${betweenTime}분전`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour}시간전`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 365) {
    return `${betweenTimeDay}일전`;
  }

  return `${Math.floor(betweenTimeDay / 365)}년전` + console.log(today);
}
