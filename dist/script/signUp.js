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
// 버튼 활성화
function isActiveBtn() {
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var registerFormBtn = document.querySelector('.registerFormBtn');
    if (email.value !== '' && password.value.length >= 6) {
        registerFormBtn.style.opacity = '1';
        registerFormBtn.disabled = false;
    }
    if (email.value === '' || password.value.length < 6) {
        registerFormBtn.style.opacity = '0.3';
        registerFormBtn.disabled = true;
    }
}
// 입력 체크
export function checkInput(password, errorPassword) {
    if (password.value.length < 6) {
        errorPassword.classList.remove('ir');
    }
    if (password.value.length >= 6) {
        errorPassword.classList.add('ir');
        isActiveBtn();
    }
}
// 프로필 설정으로 이동
function locationRegisterProfile(status) {
    if (status === 200) {
        window.location.hash = '#profileRegister';
    }
}
// 이메일, 비밀번호 로컬 스토리지에 저장
function saveData(signUpReturnData) {
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    localStorage.clear();
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);
    locationRegisterProfile(signUpReturnData.status);
}
// 사용 가능한 이메일 체크
function checkEmail(signUpReturnData) {
    var email = document.getElementById('email');
    var errorEmail = document.querySelector('.errorPassword');
    if (signUpReturnData.message === '이미 가입된 이메일 주소 입니다.') {
        errorEmail.innerText = "* \uC774\uBBF8 \uAC00\uC785\uB41C \uC774\uBA54\uC77C \uC8FC\uC18C \uC785\uB2C8\uB2E4.";
        errorEmail.classList.remove('ir');
        email.oninput = function () {
            errorEmail.classList.add('ir');
        };
    }
    else {
        saveData(signUpReturnData);
    }
}
// 이메일 유효성 검사
export function isValidEmail() {
    return __awaiter(this, void 0, void 0, function () {
        var emailInput, url, setting, emailValidRes, emailValidJson, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    emailInput = document.getElementById('email');
                    url = 'https://api.mandarin.weniv.co.kr';
                    setting = {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json',
                        },
                        body: JSON.stringify({
                            user: {
                                email: emailInput.value,
                            },
                        }),
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("".concat(url, "/user/emailvalid"), setting)];
                case 2:
                    emailValidRes = _a.sent();
                    return [4 /*yield*/, emailValidRes.json()];
                case 3:
                    emailValidJson = _a.sent();
                    checkEmail(emailValidJson);
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
