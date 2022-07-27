const productForm = document.querySelector('.addProductForm');
const productImgForm = document.querySelector('#addProductImg');
const productNameForm = document.querySelector('#addProductName');
const productPriceForm = document.querySelector('#addProductPrice');
const productContentForm = document.querySelector('#addProductContent');
const productSaveButton = document.querySelector('#addProductSaveBtn');
const timeSelectlist = document.querySelector('.addProductTimeList');
const timeSelelectBtn = document.querySelector(".addProductSelectBtn");
const timeSelectList = document.querySelector(".addProductTimeList");
const url = "https://mandarin.api.weniv.co.kr";
let imageUrl;

// 상품 이미지 미리보기 / api서버에 전송하고 변경된 이미지 이름 가져오기 

async function onChangeProductImg(event) {
  const imgReader = new FileReader();
  const formData = new FormData();

  if (event.target.files && event .target.files[0]) {
    imgReader.onload = function () {
      document.querySelector(".addProductUplodeImgScreen").src = imgReader.result;
    };
    imgReader.readAsDataURL(event.target.files[0]);
  }

  formData.append("image", event.target.files[0]);
  try {
    const response = await fetch(url + "/image/uploadfiles", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    imageUrl = await data[0].filename;
    // console.log(imageUrl);
  } catch (err) {
    console.log(err);
  }
}
// 상품 가격 숫자만, 자동 원화단위

function inputNumberFormat(addProductPrice) {
    addProductPrice.value = comma(uncomma(addProductPrice.value));
}

function comma(addProductPriceString) {
    addProductPriceString = String(addProductPriceString);
    productInput();
    return addProductPriceString.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

function uncomma(addProductPriceString) {
    addProductPriceString = String(addProductPriceString);
    return addProductPriceString.replace(/[^\d]+/g, '');
}

// 시간 선택

timeSelelectBtn.addEventListener('click', () => {
    timeSelelectBtn.classList.toggle('on');
});

timeSelectlist.addEventListener('click', (event) => {
    if (event.target.nodeName === "BUTTON") {
        timeSelelectBtn.textContent = event.target.textContent;
        timeSelelectBtn.style.color = "black";
        timeSelelectBtn.classList.remove('on');
    }
});

// productImg, productName, productPrice, productContents  모두 입력이 되면 헤더바에 저장 버튼 활성화

productSaveButton.disabled = true;
function productInput() {
  
  if (productImgForm.value !== "" && productNameForm.value !== "" && productPriceForm.value !=="" && productContentForm.value !=="") {
    productSaveButton.style.opacity = "1";
    productSaveButton.disabled = false;
  } else {
    productSaveButton.style.opacity = "0.3";
    productSaveButton.disabled = true;
  }
}

// 상품 등록 모든 데이터 보내기

async function onProductSvaeBtn(e) {
  const token = localStorage.getItem("Token");
    const productInfo = {
      product: {
        itemName: productNameForm.value,
        price: parseInt(productPriceForm.value.replace(/,/g,"")),
        link: productContentForm.value,
        itemImage: `${url}/${imageUrl}`
      },
    };
    const setting = {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(productInfo),
    };
    try {
      const reqPosting = await fetch(`${url}/product`, setting);
      const resData = await reqPosting.json();
      console.log(resData);
      location.href="../pages/profile.html";
    } catch (error) {
      console.log(error);
    }
  }
  productSaveButton.addEventListener('click', onProductSvaeBtn);