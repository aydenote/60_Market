import { productImageUpload, productSave } from '../utils/apiModule';

// 상품 이미지 미리보기 / api서버에 전송하고 변경된 이미지 이름 가져오기
export async function onChangeProductImg(event: Event) {
  const imgReader = new FileReader();
  const formData = new FormData();
  const file = (<HTMLInputElement>event.target).files;

  if (file && file[0]) {
    imgReader.onload = function () {
      (document.querySelector('.addProductUplodeImgScreen') as HTMLImageElement).src = `${imgReader.result}`;
    };
    imgReader.readAsDataURL(file[0]);
  }
  formData.append('image', file![0]);
  const imgUrl = await productImageUpload(formData);
  localStorage.setItem('ProductImg', imgUrl);
  await productInput();
}

// 상품 가격 숫자만, 자동 원화단위
export function inputNumberFormat(productPriceForm: HTMLInputElement) {
  productPriceForm.value = comma(uncomma(productPriceForm.value));
  productInput();
}

export function comma(addProductPriceString: string) {
  addProductPriceString = String(addProductPriceString);
  return addProductPriceString.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

export function uncomma(addProductPriceString: string) {
  addProductPriceString = String(addProductPriceString);
  return addProductPriceString.replace(/[^\d]+/g, '');
}

// productImg, productName, productPrice, productContents  모두 입력이 되면 헤더바에 저장 버튼 활성화
export function productInput() {
  const productImgForm = document.getElementById('addProductImg') as HTMLInputElement;
  const productNameForm = document.getElementById('addProductName') as HTMLInputElement;
  const productPriceForm = document.getElementById('addProductPrice') as HTMLInputElement;
  const productContentForm = document.getElementById('addProductContent') as HTMLInputElement;
  const productSaveButton = document.getElementById('addProductSaveBtn') as HTMLInputElement;
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
  const productNameForm = document.getElementById('addProductName') as HTMLInputElement;
  const productPriceForm = document.getElementById('addProductPrice') as HTMLInputElement;
  const productContentForm = document.getElementById('addProductContent') as HTMLInputElement;

  productSave(productNameForm, productPriceForm, productContentForm);
}

export function onTimeToggle(timeSelctBtnEl: HTMLElement) {
  timeSelctBtnEl.classList.toggle('on');
}

export function onTimeSelct(event: Event, timeSelctBtnEl: HTMLElement) {
  if ((event.target as HTMLElement).nodeName === 'BUTTON') {
    timeSelctBtnEl.textContent = (event.target as HTMLElement).textContent;
    timeSelctBtnEl.style.color = 'black';
    timeSelctBtnEl.classList.remove('on');
  }
}
