var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { productImageUpload, productSave } from '../utils/apiModule';
// 상품 이미지 미리보기 / api서버에 전송하고 변경된 이미지 이름 가져오기
export function onChangeProductImg(event) {
    return __awaiter(this, void 0, void 0, function () {
        var imgReader, formData, file, imgUrl;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    imgReader = new FileReader();
                    formData = new FormData();
                    file = event.target.files;
                    if (file && file[0]) {
                        imgReader.onload = function () {
                            document.querySelector('.addProductUplodeImgScreen').src = "".concat(imgReader.result);
                        };
                        imgReader.readAsDataURL(file[0]);
                    }
                    formData.append('image', file[0]);
                    return [4 /*yield*/, productImageUpload(formData)];
                case 1:
                    imgUrl = _a.sent();
                    localStorage.setItem('ProductImg', imgUrl);
                    return [4 /*yield*/, productInput()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
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
    var productImgForm = document.getElementById('addProductImg');
    var productNameForm = document.getElementById('addProductName');
    var productPriceForm = document.getElementById('addProductPrice');
    var productContentForm = document.getElementById('addProductContent');
    var productSaveButton = document.getElementById('addProductSaveBtn');
    if (productImgForm.value !== '' &&
        productNameForm.value !== '' &&
        productPriceForm.value !== '' &&
        productContentForm.value !== '') {
        productSaveButton.style.opacity = '1';
        productSaveButton.disabled = false;
    }
    else {
        productSaveButton.style.opacity = '0.3';
        productSaveButton.disabled = true;
    }
}
// 상품 등록 모든 데이터 보내기
export function onProductSvaeBtn() {
    return __awaiter(this, void 0, void 0, function () {
        var productNameForm, productPriceForm, productContentForm;
        return __generator(this, function (_a) {
            productNameForm = document.getElementById('addProductName');
            productPriceForm = document.getElementById('addProductPrice');
            productContentForm = document.getElementById('addProductContent');
            productSave(productNameForm, productPriceForm, productContentForm);
            return [2 /*return*/];
        });
    });
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
