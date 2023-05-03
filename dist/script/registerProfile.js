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
var url = 'https://api.mandarin.weniv.co.kr';
var profileImg;
// 서버에 프로필 이미지 보내기
function sendProfileImg(file) {
    return __awaiter(this, void 0, void 0, function () {
        var formData, setting, imageUploadRes, imageUploadJson, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    formData = new FormData();
                    formData.append('image', file[0]);
                    setting = {
                        method: 'POST',
                        body: formData,
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("".concat(url, "/image/uploadfiles"), setting)];
                case 2:
                    imageUploadRes = _a.sent();
                    return [4 /*yield*/, imageUploadRes.json()];
                case 3:
                    imageUploadJson = _a.sent();
                    profileImg = imageUploadJson[0].filename;
                    return [3 /*break*/, 5];
                case 4:
                    err_1 = _a.sent();
                    console.error(err_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
// 프로필 이미지 미리보기
export function previewImg(event, basicImg) {
    var file = event.target.files;
    if (file[0].size > 10000000) {
        alert('이미지 사이즈는 10MB 이내로 등록 가능합니다.');
        return false;
    }
    basicImg.src = URL.createObjectURL(file[0]);
    sendProfileImg(file);
}
// 버튼 활성화
function isActiveBtn() {
    var profileFormBtn = document.querySelector('.profileFormBtn');
    var username = document.getElementById('username');
    var id = document.getElementById('id');
    var intro = document.getElementById('intro');
    if (username.value !== '' && id.value !== '' && intro.value !== '') {
        profileFormBtn.style.opacity = '1';
        profileFormBtn.disabled = false;
    }
}
// 예외 문자 처리
function checkRegExp() {
    var errorMessage = document.querySelector('.registerFormAlert');
    var profileFormBtn = document.querySelector('.profileFormBtn');
    var id = document.getElementById('id');
    var regExp = /^[a-zA-Z0-9_.]{2,10}$/;
    if (regExp.test(id.value)) {
        errorMessage.classList.add('ir');
        isActiveBtn();
    }
    if (!regExp.test(id.value)) {
        errorMessage.classList.remove('ir');
        profileFormBtn.style.opacity = '0.3';
        id.oninput = function () {
            errorMessage.classList.add('ir');
        };
    }
    if (id.value.length === 0) {
        errorMessage.classList.remove('ir');
        profileFormBtn.style.opacity = '0.3';
    }
}
// 입력 체크
export function checkInput(id) {
    if (id.value.length > 0) {
        checkRegExp();
    }
}
// 회원가입 정보 전송
function sendRegister() {
    return __awaiter(this, void 0, void 0, function () {
        var userName, id, intro, setting, signUpRes, signUpJson, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userName = document.getElementById('username');
                    id = document.getElementById('id');
                    intro = document.getElementById('intro');
                    if (profileImg === undefined) {
                        profileImg = '1658636863237.png';
                    }
                    setting = {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json',
                        },
                        body: JSON.stringify({
                            user: {
                                username: userName.value,
                                email: localStorage.getItem('email'),
                                password: localStorage.getItem('password'),
                                accountname: id.value,
                                intro: intro.value,
                                image: "".concat(url, "/").concat(profileImg),
                            },
                        }),
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("".concat(url, "/user"), setting)];
                case 2:
                    signUpRes = _a.sent();
                    return [4 /*yield*/, signUpRes.json()];
                case 3:
                    signUpJson = _a.sent();
                    if (signUpJson.status === 200)
                        window.location.hash = '#login';
                    else
                        console.error(signUpJson.statusText);
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
// ID 중복 메시지
function checkId(resMessage) {
    var errorMessage = document.querySelector('.registerFormAlert');
    if (resMessage === '이미 가입된 계정ID 입니다.') {
        errorMessage.innerText = "*".concat(resMessage);
        errorMessage.classList.remove('ir');
    }
    if (resMessage === '사용 가능한 계정ID 입니다.') {
        sendRegister();
    }
}
// 유효 ID 검사
export function isValidId(id) {
    return __awaiter(this, void 0, void 0, function () {
        var setting, validIdRes, validIdJson, resMessage, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setting = {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json',
                        },
                        body: JSON.stringify({
                            user: {
                                accountname: id.value,
                            },
                        }),
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("".concat(url, "/user/accountnamevalid"), setting)];
                case 2:
                    validIdRes = _a.sent();
                    return [4 /*yield*/, validIdRes.json()];
                case 3:
                    validIdJson = _a.sent();
                    resMessage = validIdJson.message;
                    checkId(resMessage);
                    return [3 /*break*/, 5];
                case 4:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
