import { productInput, onChangeProductImg, inputNumberFormat, onProductSvaeBtn, onTimeToggle, onTimeSelct, } from '../script/addProduct';
import { backHistory } from '../utils/common';
var ProductPage = /** @class */ (function () {
    function ProductPage() {
    }
    ProductPage.prototype.render = function (content) {
        document.querySelector('body').classList.remove('profileBackground');
        // header
        var headerEl = document.createElement('header');
        var headerBarArticleEl = document.createElement('article');
        var backImgEl = document.createElement('img');
        var saveBtnEl = document.createElement('button');
        headerBarArticleEl.classList.add('headerBar');
        headerBarArticleEl.classList.add('addProductHeaderBar');
        backImgEl.classList.add('headerBarBack');
        backImgEl.classList.add('buttonClick');
        backImgEl.setAttribute('src', '../asset/images/icons/icon__arrowLeft.svg');
        backImgEl.setAttribute('alt', '뒤로 가기');
        backImgEl.addEventListener('click', backHistory);
        saveBtnEl.classList.add('headerBarSettingBtn');
        saveBtnEl.classList.add('headerBarBtn');
        saveBtnEl.classList.add('buttonClick');
        saveBtnEl.id = 'addProductSaveBtn';
        saveBtnEl.setAttribute('type', 'button');
        saveBtnEl.innerText = '저장';
        headerBarArticleEl.appendChild(backImgEl);
        headerBarArticleEl.appendChild(saveBtnEl);
        headerEl.appendChild(headerBarArticleEl);
        //  main
        var mainEl = document.createElement('main');
        var addProductFormEl = document.createElement('form');
        mainEl.classList.add('addProduct');
        addProductFormEl.classList.add('addProductForm');
        // // 이미지 등록
        var addImgHeading3El = document.createElement('h3');
        var addImgLabelEl = document.createElement('label');
        var updateImgEl = document.createElement('img');
        var addImgEl = document.createElement('img');
        var addProductInput = document.createElement('input');
        addImgHeading3El.classList.add('addProductFormLabel');
        addImgHeading3El.innerText = '이미지 등록';
        addImgLabelEl.classList.add('addProductFormUplodeImg');
        addImgLabelEl.setAttribute('for', 'addProductImg');
        updateImgEl.classList.add('addProductUplodeImgScreen');
        addImgEl.classList.add('addProductUplodeImg');
        addImgEl.setAttribute('src', '../asset/images/icons/icon__imagesUplode.svg');
        addImgEl.setAttribute('alt', '이미지 등록');
        addProductInput.id = 'addProductImg';
        addProductInput.setAttribute('type', 'file');
        addProductInput.setAttribute('accept', 'image/*');
        addImgLabelEl.appendChild(updateImgEl);
        addImgLabelEl.appendChild(addImgEl);
        addProductFormEl.appendChild(addImgHeading3El);
        addProductFormEl.appendChild(addImgLabelEl);
        addProductFormEl.appendChild(addProductInput);
        // // 상품명 등록
        var addProductLabelEl = document.createElement('label');
        var productNameInputEl = document.createElement('input');
        addProductLabelEl.classList.add('addProductFormLabel');
        addProductLabelEl.setAttribute('for', 'addProductName');
        addProductLabelEl.innerText = '상품명';
        productNameInputEl.id = 'addProductName';
        productNameInputEl.setAttribute('type', 'text');
        productNameInputEl.required = true;
        productNameInputEl.placeholder = '2~15자 이내여야 합니다.';
        productNameInputEl.minLength = 2;
        productNameInputEl.maxLength = 15;
        addProductFormEl.appendChild(addProductLabelEl);
        addProductFormEl.appendChild(productNameInputEl);
        // // 가격 등록
        var addPriceLabelEl = document.createElement('label');
        var addPriceInputEl = document.createElement('input');
        addPriceLabelEl.classList.add('addProductFormLabel');
        addPriceLabelEl.setAttribute('form', 'addProductPrice');
        addPriceLabelEl.innerText = '가격';
        addPriceInputEl.id = 'addProductPrice';
        addPriceInputEl.setAttribute('type', 'text');
        addPriceInputEl.required = true;
        addPriceInputEl.placeholder = '숫자만 입력 가능합니다.';
        addPriceInputEl.maxLength = 12;
        addProductFormEl.appendChild(addPriceLabelEl);
        addProductFormEl.appendChild(addPriceInputEl);
        // // 시간 선택
        var timeSelectDivEl = document.createElement('div');
        var timeSelectHeading3El = document.createElement('h3');
        var timeSelectArticleEl = document.createElement('article');
        var irHeading2El = document.createElement('h2');
        var timeSelctBtnEl = document.createElement('button');
        var timeUlEl = document.createElement('ul');
        var timeLiEl10M = document.createElement('li');
        var timeLiEl30M = document.createElement('li');
        var timeLiEl1H = document.createElement('li');
        var timeLiEl2H = document.createElement('li');
        var timeLiEl3H = document.createElement('li');
        var timeLiElShare = document.createElement('li');
        var timeBtn10M = document.createElement('button');
        var timeBtn30M = document.createElement('button');
        var timeBtn1H = document.createElement('button');
        var timeBtn2H = document.createElement('button');
        var timeBtn3H = document.createElement('button');
        var timeBtnShare = document.createElement('button');
        timeSelectDivEl.classList.add('timeSelct');
        timeSelectHeading3El.classList.add('addProductFormLabel');
        timeSelectHeading3El.innerText = '시간 선택';
        timeSelectArticleEl.classList.add('addProductTimeSelect');
        irHeading2El.classList.add('ir');
        irHeading2El.innerText = '시간을 선택해주세요.';
        timeSelctBtnEl.classList.add('addProductSelectBtn');
        timeSelctBtnEl.setAttribute('type', 'button');
        timeUlEl.classList.add('addProductTimeList');
        timeBtn10M.innerText = '10분 이하';
        timeBtn30M.innerText = '30분';
        timeBtn1H.innerText = '1시간';
        timeBtn2H.innerText = '2시간';
        timeBtn3H.innerText = '3시간';
        timeBtnShare.innerText = '나눔';
        timeBtn10M.setAttribute('type', 'button');
        timeBtn10M.classList.add('textEllipsis');
        timeBtn30M.setAttribute('type', 'button');
        timeBtn30M.classList.add('textEllipsis');
        timeBtn1H.setAttribute('type', 'button');
        timeBtn1H.classList.add('textEllipsis');
        timeBtn2H.setAttribute('type', 'button');
        timeBtn2H.classList.add('textEllipsis');
        timeBtn3H.setAttribute('type', 'button');
        timeBtn3H.classList.add('textEllipsis');
        timeBtnShare.setAttribute('type', 'button');
        timeBtnShare.classList.add('textEllipsis');
        timeLiEl10M.appendChild(timeBtn10M);
        timeLiEl30M.appendChild(timeBtn30M);
        timeLiEl1H.appendChild(timeBtn1H);
        timeLiEl2H.appendChild(timeBtn2H);
        timeLiEl3H.appendChild(timeBtn3H);
        timeLiElShare.appendChild(timeBtnShare);
        timeUlEl.appendChild(timeLiEl10M);
        timeUlEl.appendChild(timeLiEl30M);
        timeUlEl.appendChild(timeLiEl1H);
        timeUlEl.appendChild(timeLiEl2H);
        timeUlEl.appendChild(timeLiEl3H);
        timeUlEl.appendChild(timeLiElShare);
        timeSelectArticleEl.appendChild(irHeading2El);
        timeSelectArticleEl.appendChild(timeSelctBtnEl);
        timeSelectArticleEl.appendChild(timeUlEl);
        timeSelectDivEl.appendChild(timeSelectHeading3El);
        timeSelectDivEl.appendChild(timeSelectArticleEl);
        addProductFormEl.appendChild(timeSelectDivEl);
        // // 내용 입력
        var contentLabelEl = document.createElement('label');
        var contentTextareaEl = document.createElement('textarea');
        contentLabelEl.classList.add('addProductFormLabel');
        contentLabelEl.innerText = '내용';
        contentTextareaEl.cols = 10;
        contentTextareaEl.rows = 10;
        contentTextareaEl.id = 'addProductContent';
        contentTextareaEl.required = true;
        contentTextareaEl.placeholder = '내용을 입력해 주세요.';
        addProductFormEl.appendChild(contentLabelEl);
        addProductFormEl.appendChild(contentTextareaEl);
        mainEl.appendChild(addProductFormEl);
        // 상품 등록 기능
        productNameInputEl.addEventListener('keyup', function () {
            productInput();
        });
        contentTextareaEl.addEventListener('keyup', function () {
            productInput();
        });
        addProductInput.addEventListener('change', function (event) {
            onChangeProductImg(event);
        });
        addPriceInputEl.addEventListener('keyup', function () {
            inputNumberFormat(addPriceInputEl);
        });
        saveBtnEl.addEventListener('click', function () {
            onProductSvaeBtn();
        });
        timeSelctBtnEl.addEventListener('click', function () {
            onTimeToggle(timeSelctBtnEl);
        });
        timeUlEl.addEventListener('click', function (event) {
            onTimeSelct(event, timeSelctBtnEl);
        });
        content.appendChild(headerEl);
        content.appendChild(mainEl);
    };
    return ProductPage;
}());
export default ProductPage;
