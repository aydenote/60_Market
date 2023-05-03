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
import { imageUpload, updateProfile } from '../utils/apiModule';
export function getProfileInfo(profileImg, inputName, inputId, inputIntroduce) {
    return __awaiter(this, void 0, void 0, function () {
        var url, token, myAccountName, setting, resProfile, resProfileJson, userProfile, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = 'https://api.mandarin.weniv.co.kr';
                    token = localStorage.getItem('Token');
                    myAccountName = localStorage.getItem('accountname');
                    setting = {
                        method: 'GET',
                        headers: {
                            Authorization: "Bearer ".concat(token),
                            'Content-type': 'application/json',
                        },
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, , 6]);
                    return [4 /*yield*/, fetch("".concat(url, "/profile/").concat(myAccountName), setting)];
                case 2:
                    resProfile = _a.sent();
                    return [4 /*yield*/, resProfile.json()];
                case 3:
                    resProfileJson = _a.sent();
                    return [4 /*yield*/, resProfileJson.profile];
                case 4:
                    userProfile = _a.sent();
                    profileImg.src = userProfile.image.length <= 20 ? "".concat(url, "/").concat(userProfile.image) : "".concat(userProfile.image);
                    inputName.value = "".concat(userProfile.username);
                    inputId.value = "".concat(userProfile.accountname);
                    inputIntroduce.value = "".concat(userProfile.intro);
                    return [2 /*return*/, userProfile.image];
                case 5:
                    err_1 = _a.sent();
                    console.error(err_1);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
export function profileChangeInput(profileSaveButton) {
    var inputNameLength = document.getElementById('name').value.length;
    var inputId = document.getElementById('id');
    var inputIdLength = inputId.value.length;
    var inputIntroduceLength = document.getElementById('introduce').value.length;
    var check = /^[a-zA-Z0-9_.]{1,10}$/;
    var alertMessage = document.querySelector('.alertMessage');
    alertMessage.innerText = '*영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.';
    // 만약 예외 문자가 없으면 ir 클래스 추가
    if (check.test(inputId.value)) {
        alertMessage.classList.add('ir');
        if (inputNameLength >= 2 && inputIntroduceLength >= 2 && inputIdLength >= 2) {
            profileSaveButton.style.opacity = '1';
            profileSaveButton.disabled = false;
        }
        else {
            profileSaveButton.style.opacity = '0.3';
            profileSaveButton.disabled = true;
        }
    }
    // 만약 예외 문자가 있으면 ir 클래스 제거
    if (!check.test(inputId.value)) {
        alertMessage.classList.remove('ir');
        profileSaveButton.style.opacity = '0.3';
        profileSaveButton.disabled = true;
    }
    if (inputId.value === '') {
        alertMessage.classList.add('ir');
    }
}
// 프로필 이미지 교체 및 API서버에 이미지 전송하여 변경된 이미지 이름 가져오기
export function imageChange(event) {
    var imgReader = new FileReader();
    var formData = new FormData();
    var file = event.target.files;
    if (file[0].size > 10000000) {
        alert('이미지 사이즈는 10MB 이내로 등록 가능합니다.');
        return;
    }
    if (file && file[0]) {
        imgReader.onload = function () {
            document.querySelector('.updateUserImg').src = "".concat(imgReader.result);
        };
        imgReader.readAsDataURL(file[0]);
    }
    formData.append('image', file[0]);
    imageUpload(formData);
}
// 저장 버튼 클릭 시 서버에 프로필 이미지, 이름, 소개, 계정 ID 전송
export function clickSaveButton(profileImg) {
    var imageUrl = localStorage.getItem('imageUrl');
    if (imageUrl === null) {
        imageUrl = profileImg.src;
        localStorage.setItem('imageUrl', imageUrl);
    }
    updateProfile();
}
