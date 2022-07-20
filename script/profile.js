const profileLinkBtn = document.querySelector(".link");
// const accountName = location.search;

// 프로필 정보 가져오기
async function getProfileInfo() {
  const url = "https://mandarin.api.weniv.co.kr";
  const myAccountName = localStorage.getItem("accountname");

  const token = localStorage.getItem("Token");

  const setting = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
  };

  try {
    const resProfile = await fetch(`${url}/profile/${myAccountName}`, setting);
    // const resProfile = await fetch(`${url}/profile/lion`, setting);
    const resProfileJson = await resProfile.json();
    const userProfile = resProfileJson.profile;
    // 사용자 본인 또는 본인이 아닌 경우
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
  document.querySelector(".profileInfo .userId").innerText = `@ ${userProfile.accountname}`;
  document.querySelector(".profileInfo .introduction").innerText = userProfile.intro;
}

function setYourProfile(userProfile) {
  const createMessageImg = document.createElement("img");
  const createFollowButton = document.createElement("button");
  const createShareImg = document.createElement("img");

  createMessageImg.setAttribute("class", "messageBtn");
  createMessageImg.setAttribute("src", "/asset/images/icons/icon__message.svg");
  createMessageImg.setAttribute("alt", "메세지 버튼");
  profileLinkBtn.append(createMessageImg);

  createFollowButton.setAttribute("class", "followBtn");
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
}

// 사용자가 판매 중인 상품 정보 가져오기
async function getProductList() {
  const url = "https://mandarin.api.weniv.co.kr";
  const accountName = localStorage.getItem("accountname");
  const token = localStorage.getItem("Token");

  const setting = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
  };
  try {
    const resProfileProduct = await fetch(`${url}/product/${accountName}`, setting);
    const resProfileProductJson = await resProfileProduct.json();
    setProductList(resProfileProductJson);
  } catch (err) {
    console.error(err);
  }
}
getProductList();

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
