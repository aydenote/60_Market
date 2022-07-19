// 프로필 정보 가져오기
async function getProfileInfo() {
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
    const resEditProfile = await fetch(`${url}/profile/${accountName}`, setting);
    const resEditProfileJson = await resEditProfile.json();
    const editUserProfile = resEditProfileJson.profile;
    setProfileInfo(editUserProfile);
  } catch (err) {
    console.error(err);
  }
}
getProfileInfo();

// 프로필 정보 입력하기
function setProfileInfo(editUserProfile) {
  document.querySelector(".ProfileContent .myImage").src = editUserProfile.image;
  document.querySelector(".profileInfo .userName").innerText = editUserProfile.username;
  document.querySelector(".profileInfo .userId").innerText = `@ ${editUserProfile.accountname}`;
  document.querySelector(".profileInfo .introduction").innerText = editUserProfile.intro;
}

// 내가 판매 중인 상품 정보 가져오기
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
    const resEditProfile = await fetch(`${url}/product/${accountName}`, setting);
    const resEditProfileJson = await resEditProfile.json();
    setProductList(resEditProfileJson);
  } catch (err) {
    console.error(err);
  }
}
getProductList();

// 등록된 상품 수에 따라 내 프로필에 해당 상품 반영
function setProductList(resEditProfileJson) {
  if (resEditProfileJson.product.length !== 0) {
    const saleItems = document.querySelector(".ProfileContent .saleItems");
    const createP = document.createElement("p");
    const createUl = document.createElement("ul");

    createP.setAttribute("class", "title");
    createUl.setAttribute("class", "productList");
    saleItems.append(createP);
    saleItems.append(createUl);
    const productList = document.querySelector(".saleItems .productList");
    document.querySelector(".saleItems .title").innerText = "판매 중인 상품";

    for (const product of resEditProfileJson.product) {
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
