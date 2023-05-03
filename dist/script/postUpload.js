// fileArr  : Blob  객체형 파일 데이터 저장
// arrImgName : 파일명 저장
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
var fileArr = [];
var arrImgName = [];
// 게시물 수정 , 생성에 따른 함수 실행
export function checkPost(postUserProfile, postImgContainer, postUploadTxt, postUploadBtn) {
    var postid = window.location.hash.split('?postid=')[1];
    fileArr = [];
    // 게시물 수정 PUT 요청
    if (postid) {
        getLoginUserInfo(postUserProfile);
        getPost(postid, postUploadTxt, postImgContainer);
        postUploadBtn.addEventListener('click', function () {
            editPost(postid, postUploadTxt);
        });
    }
    else {
        postUploadBtn.addEventListener('click', function () { return createPost(); });
        getLoginUserInfo(postUserProfile);
    }
}
// 로그인 유저 정보
function getLoginUserInfo(profileImgEl) {
    return __awaiter(this, void 0, void 0, function () {
        var token, accountname, url, res, userJson, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    token = localStorage.getItem('Token');
                    accountname = localStorage.getItem('accountname');
                    url = 'https://api.mandarin.weniv.co.kr';
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("".concat(url, "/profile/").concat(accountname), {
                            method: 'GET',
                            headers: {
                                Authorization: "Bearer ".concat(token),
                                'Content-type': 'application/json',
                            },
                        })];
                case 2:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 3:
                    userJson = _a.sent();
                    profileImgEl.src =
                        userJson.profile.image.length <= 20 ? "".concat(url, "/").concat(userJson.profile.image) : "".concat(userJson.profile.image);
                    return [3 /*break*/, 5];
                case 4:
                    err_1 = _a.sent();
                    console.log(err_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
// 업로드 사진 미리보기, 이미지 삭제 이벤트 등록
export function readInputFile(event) {
    var reader = new FileReader();
    var files = event.target.files;
    var postImgContainer = document.querySelector('.postUploadImageScreen');
    var postImgItem = document.querySelectorAll('.postImgItem');
    var imgFileName = files[0].name;
    reader.readAsDataURL(files[0]);
    fileArr.push(files[0]);
    if (postImgItem.length === 3) {
        fileArr.splice(fileArr.length - 1);
        alert('이미지는 최대 3장 업로드 가능합니다.');
    }
    else {
        reader.onload = function () {
            var imgItem = document.createElement('div');
            imgItem.style.backgroundImage = "url(".concat(reader.result, ")");
            imgItem.className = 'postImgItem';
            imgItem.dataset.key = "".concat(imgFileName);
            postImgContainer.appendChild(imgItem);
            event.target.value = '';
            var closeBtn = document.createElement('button');
            closeBtn.className = 'postImgCloseBtn';
            imgItem.appendChild(closeBtn);
            closeBtn.addEventListener('click', deletImg);
        };
    }
}
// 해당 이미지 fileArr에서 삭제, 업로드 사진 미리보기에서 삭제
function deletImg(event) {
    var postImgContainer = document.querySelector('.postUploadImageScreen');
    var imgItem = event.target.parentElement;
    var targetImgName = imgItem.dataset.key;
    var defaultUrl = 'https://api.mandarin.weniv.co.kr';
    var fileLength = fileArr.length;
    // 업로드 사진 미리보기에서 삭제
    postImgContainer.removeChild(imgItem);
    // 클릭한 타겟을 fileArr 배열에서 삭제
    for (var i = 0; i < fileLength; i++) {
        if (fileArr[i].name === targetImgName) {
            fileArr.splice(i, 1);
        }
    }
    for (var i = 0; i < fileLength; i++) {
        var alreadyImg = imgItem.style.backgroundImage.split('"')[1].replace("".concat(defaultUrl, "/"), '');
        if (fileArr[i].name === alreadyImg) {
            fileArr.splice(i, 1);
            break;
        }
    }
}
// 이미지 업로드
function uploadImg(fileArr) {
    return __awaiter(this, void 0, void 0, function () {
        var formData, url, response, res, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    formData = new FormData();
                    url = 'https://api.mandarin.weniv.co.kr';
                    arrImgName = [];
                    fileArr.forEach(function (file) {
                        formData.append('image', file);
                    });
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch(url + '/image/uploadfiles', {
                            method: 'POST',
                            body: formData,
                        })];
                case 2:
                    response = _b.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    res = _b.sent();
                    res.forEach(function (imageData) {
                        arrImgName.push("".concat(url, "/").concat(imageData.filename));
                    });
                    fileArr = [];
                    return [2 /*return*/, arrImgName];
                case 4:
                    _a = _b.sent();
                    fileArr.pop();
                    alert('이미지 파일은 최대 3장까지만 가능합니다.');
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
// 업로드버튼 활성화
export function postInput() {
    var postUploadTxt = document.querySelector('.postUploadComentTxt');
    var postUploadBtn = document.querySelector('.headerBarBtn.buttonClick');
    if (postUploadTxt.value.length >= 1) {
        postUploadBtn.style.opacity = '1';
        postUploadBtn.disabled = false;
    }
    else {
        postUploadBtn.style.opacity = '0.3';
        postUploadBtn.disabled = true;
    }
}
// 게시글 작성 후 데이터 서버에 보내기
export function createPost() {
    return __awaiter(this, void 0, void 0, function () {
        var postUploadTxt, token, url, contentText, images, res, json;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    postUploadTxt = document.querySelector('.postUploadComentTxt');
                    token = localStorage.getItem('Token');
                    url = 'https://api.mandarin.weniv.co.kr';
                    contentText = postUploadTxt.value;
                    return [4 /*yield*/, uploadImg(fileArr)];
                case 1:
                    images = _a.sent();
                    return [4 /*yield*/, fetch("".concat(url, "/post"), {
                            method: 'POST',
                            headers: {
                                Authorization: "Bearer ".concat(token),
                                'Content-type': 'application/json',
                            },
                            body: JSON.stringify({
                                post: {
                                    content: contentText,
                                    image: images.join(','),
                                },
                            }),
                        })];
                case 2:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 3:
                    json = _a.sent();
                    if (json.post) {
                        fileArr = [];
                        window.location.hash = '#profile';
                    }
                    else {
                        return [2 /*return*/];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
// 게시물 수정 페이지에서 url를 파일로 변환
function convertURLtoFile(postImgArr, fileArr) {
    return __awaiter(this, void 0, void 0, function () {
        var _i, postImgArr_1, imgUrl, response, data, ext, filename, metadata;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _i = 0, postImgArr_1 = postImgArr;
                    _a.label = 1;
                case 1:
                    if (!(_i < postImgArr_1.length)) return [3 /*break*/, 5];
                    imgUrl = postImgArr_1[_i];
                    return [4 /*yield*/, fetch(imgUrl)];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.blob()];
                case 3:
                    data = _a.sent();
                    ext = imgUrl.split('.').pop();
                    filename = imgUrl.split('/').pop();
                    metadata = { type: "image/".concat(ext) };
                    fileArr.push(new File([data], filename, metadata));
                    _a.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 1];
                case 5: return [2 /*return*/];
            }
        });
    });
}
// 게시물 수정 페이지에서 이미지 미리보기 및 삭제 버튼 추가
function setImg(postImgContainer, postImgArr, fileArr) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, convertURLtoFile(postImgArr, fileArr)];
                case 1:
                    _a.sent();
                    if (postImgArr.length >= 1 && postImgArr[0] !== '') {
                        postImgArr.map(function (imageSrc) {
                            var imgItem = document.createElement('div');
                            imgItem.className = 'postImgItem';
                            imgItem.setAttribute('style', "background-image: url(".concat(imageSrc, ")"));
                            postImgContainer.appendChild(imgItem);
                            var closeBtn = document.createElement('button');
                            closeBtn.className = 'postImgCloseBtn';
                            imgItem.appendChild(closeBtn);
                            closeBtn.addEventListener('click', deletImg);
                        });
                    }
                    return [2 /*return*/];
            }
        });
    });
}
// 서버에 저장된 게시글, 이미지 가져오기
function getPost(postid, postUploadTxt, postImgContainer) {
    return __awaiter(this, void 0, void 0, function () {
        var token, defaultUrl, res, json, post, postContent, postImgArr, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    token = localStorage.getItem('Token');
                    defaultUrl = 'https://api.mandarin.weniv.co.kr';
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("".concat(defaultUrl, "/post/").concat(postid), {
                            method: 'GET',
                            headers: {
                                Authorization: "Bearer ".concat(token),
                                'Content-type': 'application/json',
                            },
                        })];
                case 2:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 3:
                    json = _a.sent();
                    post = json.post;
                    postContent = post.content;
                    postImgArr = post.image.split(',');
                    postUploadTxt.textContent = postContent;
                    setImg(postImgContainer, postImgArr, fileArr);
                    return [3 /*break*/, 5];
                case 4:
                    err_2 = _a.sent();
                    console.log(err_2);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
// 게시물 수정
function editPost(postid, postUploadTxt) {
    return __awaiter(this, void 0, void 0, function () {
        var token, defaultUrl, resultImg, res, json, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    token = localStorage.getItem('Token');
                    defaultUrl = 'https://api.mandarin.weniv.co.kr';
                    return [4 /*yield*/, uploadImg(fileArr)];
                case 1:
                    resultImg = _a.sent();
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 5, , 6]);
                    return [4 /*yield*/, fetch("".concat(defaultUrl, "/post/").concat(postid), {
                            method: 'PUT',
                            headers: {
                                Authorization: "Bearer ".concat(token),
                                'Content-type': 'application/json',
                            },
                            body: JSON.stringify({
                                post: {
                                    content: postUploadTxt.value,
                                    image: resultImg.join(','),
                                },
                            }),
                        })];
                case 3:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 4:
                    json = _a.sent();
                    fileArr = [];
                    window.location.hash = '#profile'; // 주소 업데이트
                    if (json.type == 'entity.too.large') {
                        console.error(json.message);
                        alert('이미지 용량이 너무 큽니다.');
                    }
                    return [3 /*break*/, 6];
                case 5:
                    err_3 = _a.sent();
                    console.error(err_3);
                    window.location.hash = '#error';
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
