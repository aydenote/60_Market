import { imageUpload, productSave } from '../utils/apiModule.js';

// 상품 이미지 미리보기 / api서버에 전송하고 변경된 이미지 이름 가져오기
export async function onChangeProductImg(event) {
  const imgReader = new FileReader();
  const formData = new FormData();

  if (event.target.files && event.target.files[0]) {
    imgReader.onload = function () {
      document.querySelector('.addProductUplodeImgScreen').src = imgReader.result;
    };
    imgReader.readAsDataURL(event.target.files[0]);
  }

  formData.append('image', event.target.files[0]);
  imageUpload(formData);
  await productInput();
}

// 상품 가격 숫자만, 자동 원화단위
export function inputNumberFormat(productPriceForm) {
  productPriceForm.value = comma(uncomma(productPriceForm.value));
  productInput();
}

export function comma(addProductPriceString) {
  addProductPriceString = String(addProductPriceString);
  return addProductPriceString.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

export function uncomma(addProductPriceString) {
  addProductPriceString = String(addProductPriceString);
  return addProductPriceString.replace(/[^\d]+/g, '');
}

// productImg, productName, productPrice, productContents  모두 입력이 되면 헤더바에 저장 버튼 활성화
export function productInput() {
  const productImgForm = document.getElementById('addProductImg');
  const productNameForm = document.getElementById('addProductName');
  const productPriceForm = document.getElementById('addProductPrice');
  const productContentForm = document.getElementById('addProductContent');
  const productSaveButton = document.getElementById('addProductSaveBtn');
  if (
    productImgForm.value !== '' &&
    productNameForm.value !== '' &&
    productPriceForm.value !== '' &&
    productContentForm.value !== ''
  ) {
    productSaveButton.style.opacity = '1';
    productSaveButton.disabled = false;
  } else {
    productSaveButton.style.opacity = '0.3';
    productSaveButton.disabled = true;
  }
}

// 상품 등록 모든 데이터 보내기
export async function onProductSvaeBtn() {
  const productNameForm = document.getElementById('addProductName');
  const productPriceForm = document.getElementById('addProductPrice');
  const productContentForm = document.getElementById('addProductContent');

  productSave(productNameForm, productPriceForm, productContentForm);
}

export function onTimeToggle(timeSelctBtnEl) {
  timeSelctBtnEl.classList.toggle('on');
}

export function onTimeSelct(event, timeSelctBtnEl) {
  if (event.target.nodeName === 'BUTTON') {
    timeSelctBtnEl.textContent = event.target.textContent;
    timeSelctBtnEl.style.color = 'black';
    timeSelctBtnEl.classList.remove('on');
  }
}
