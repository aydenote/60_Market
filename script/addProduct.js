import App from "./app.js";
const config = {
  rootEl: "#root",
};

// 상품 이미지 미리보기 / api서버에 전송하고 변경된 이미지 이름 가져오기
class AddProduct {
  constructor(
    productImgForm,
    productNameForm,
    productPriceForm,
    productContentForm,
    productSaveButton,
    timeSelctBtnEl
  ) {
    this.productImgForm = productImgForm;
    this.productNameForm = productNameForm;
    this.productPriceForm = productPriceForm;
    this.productContentForm = productContentForm;
    this.productSaveButton = productSaveButton;
    this.timeSelctBtnEl = timeSelctBtnEl;
    this.imageUrl;
  }

  onChangeProductImg = async function (event) {
    const imgReader = new FileReader();
    const formData = new FormData();
    const url = "https://mandarin.api.weniv.co.kr";

    if (event.target.files && event.target.files[0]) {
      imgReader.onload = function () {
        document.querySelector(".addProductUplodeImgScreen").src =
          imgReader.result;
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
      this.imageUrl = await data[0].filename;
      await this.productInput();
    } catch (err) {
      console.log(err);
    }
  };

  // 상품 가격 숫자만, 자동 원화단위
  inputNumberFormat = () => {
    this.productPriceForm.value = this.comma(
      this.uncomma(this.productPriceForm.value)
    );
  };

  comma = (addProductPriceString) => {
    addProductPriceString = String(addProductPriceString);
    this.productInput();
    return addProductPriceString.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
  };

  uncomma = (addProductPriceString) => {
    addProductPriceString = String(addProductPriceString);
    return addProductPriceString.replace(/[^\d]+/g, "");
  };

  // productImg, productName, productPrice, productContents  모두 입력이 되면 헤더바에 저장 버튼 활성화
  productInput = () => {
    if (
      this.productImgForm.value !== "" &&
      this.productNameForm.value !== "" &&
      this.productPriceForm.value !== "" &&
      this.productContentForm.value !== ""
    ) {
      this.productSaveButton.style.opacity = "1";
      this.productSaveButton.disabled = false;
    } else {
      this.productSaveButton.style.opacity = "0.3";
      this.productSaveButton.disabled = true;
    }
  };

  // 상품 등록 모든 데이터 보내기
  onProductSvaeBtn = async function () {
    const token = localStorage.getItem("Token");
    const url = "https://mandarin.api.weniv.co.kr";
    const productInfo = {
      product: {
        itemName: this.productNameForm.value,
        price: parseInt(this.productPriceForm.value.replace(/,/g, "")),
        link: this.productContentForm.value,
        itemImage: `${url}/${this.imageUrl}`,
      },
    };
    const setting = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(productInfo),
    };
    try {
      const reqPosting = await fetch(`${url}/product`, setting);
      if (reqPosting.status === 200) {
        window.history.pushState({}, "", "/profile"); // 주소 업데이트
        new App(config).setup();
      }
    } catch (error) {
      console.log(error);
    }
  };

  onTimeToggle = () => {
    this.timeSelctBtnEl.classList.toggle("on");
  };
  onTimeSelct = (event) => {
    if (event.target.nodeName === "BUTTON") {
      this.timeSelctBtnEl.textContent = event.target.textContent;
      this.timeSelctBtnEl.style.color = "black";
      this.timeSelctBtnEl.classList.remove("on");
    }
  };
}

export default AddProduct;
