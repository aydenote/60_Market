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

async function onChange(event) {
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
    console.log(imageUrl);
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