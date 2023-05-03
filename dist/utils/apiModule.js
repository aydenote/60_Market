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
import { backHistory } from './common';
// 좋아요 모듈
export function likeHeart(postingID) {
    return __awaiter(this, void 0, void 0, function () {
        var url, token, res, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://api.mandarin.weniv.co.kr/post/".concat(postingID, "/heart");
                    token = localStorage.getItem('Token');
                    return [4 /*yield*/, fetch(url, {
                            method: 'POST',
                            headers: {
                                Authorization: "Bearer ".concat(token),
                                'Content-type': 'application/json',
                            },
                        })];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
// 좋아요 취소 모듈
export function likeUnHeart(postingID) {
    return __awaiter(this, void 0, void 0, function () {
        var url, token, res, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://api.mandarin.weniv.co.kr/post/".concat(postingID, "/unheart");
                    token = localStorage.getItem('Token');
                    return [4 /*yield*/, fetch(url, {
                            method: 'DELETE',
                            headers: {
                                Authorization: "Bearer ".concat(token),
                                'Content-type': 'application/json',
                            },
                        })];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
// 게시물 신고
export function reportPost(postingId) {
    return __awaiter(this, void 0, void 0, function () {
        var url, token, setting, resReport, resReportJson, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = 'https://api.mandarin.weniv.co.kr';
                    token = localStorage.getItem('Token');
                    setting = {
                        method: 'POST',
                        headers: {
                            Authorization: "Bearer ".concat(token),
                            'Content-type': 'application/json',
                        },
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("".concat(url, "/post/").concat(postingId, "/report"), setting)];
                case 2:
                    resReport = _a.sent();
                    return [4 /*yield*/, resReport.json()];
                case 3:
                    resReportJson = _a.sent();
                    if (resReportJson.status !== 404) {
                        location.reload();
                    }
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
// 게시물 삭제
export function deletePost(postingId) {
    return __awaiter(this, void 0, void 0, function () {
        var url, token, setting, resDeleteProduct, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = 'https://api.mandarin.weniv.co.kr';
                    token = localStorage.getItem('Token');
                    setting = {
                        method: 'DELETE',
                        headers: {
                            Authorization: "Bearer ".concat(token),
                            'Content-type': 'application/json',
                        },
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fetch("".concat(url, "/post/").concat(postingId), setting)];
                case 2:
                    resDeleteProduct = _a.sent();
                    if (resDeleteProduct) {
                        location.reload();
                    }
                    return [3 /*break*/, 4];
                case 3:
                    err_2 = _a.sent();
                    console.error(err_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// 댓글 신고
export function reportComment(commentId) {
    return __awaiter(this, void 0, void 0, function () {
        var url, token, postId, res, json, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = 'https://api.mandarin.weniv.co.kr';
                    token = localStorage.getItem('Token');
                    postId = window.location.hash.split('postid=')[1];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("".concat(url, "/post/").concat(postId, "/comments/").concat(commentId, "/report"), {
                            method: 'DELETE',
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
                    if (json) {
                        location.reload();
                    }
                    return [3 /*break*/, 5];
                case 4:
                    err_3 = _a.sent();
                    console.log(err_3);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
// 댓글 삭제
export function deleteComment(commentId) {
    return __awaiter(this, void 0, void 0, function () {
        var url, token, postId, res, json, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = 'https://api.mandarin.weniv.co.kr';
                    token = localStorage.getItem('Token');
                    postId = window.location.hash.split('postid=')[1];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("".concat(url, "/post/").concat(postId, "/comments/").concat(commentId), {
                            method: 'DELETE',
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
                    if (json.status === '200') {
                        location.reload();
                    }
                    return [3 /*break*/, 5];
                case 4:
                    err_4 = _a.sent();
                    console.log(err_4);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
// 이미지 업로드
export function imageUpload(formData) {
    return __awaiter(this, void 0, void 0, function () {
        var url, response, data, imageUrl, err_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = 'https://api.mandarin.weniv.co.kr';
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, , 6]);
                    return [4 /*yield*/, fetch(url + '/image/uploadfiles', {
                            method: 'POST',
                            body: formData,
                        })];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    return [4 /*yield*/, data[0].filename];
                case 4:
                    imageUrl = _a.sent();
                    localStorage.setItem('imageUrl', imageUrl);
                    return [3 /*break*/, 6];
                case 5:
                    err_5 = _a.sent();
                    console.log(err_5);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
// 상품 이미지 등록
export function productImageUpload(formData) {
    return __awaiter(this, void 0, void 0, function () {
        var url, response, data, imageUrl, err_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = 'https://api.mandarin.weniv.co.kr';
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, , 6]);
                    return [4 /*yield*/, fetch(url + '/image/uploadfiles', {
                            method: 'POST',
                            body: formData,
                        })];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    return [4 /*yield*/, data[0].filename];
                case 4:
                    imageUrl = _a.sent();
                    return [2 /*return*/, imageUrl];
                case 5:
                    err_6 = _a.sent();
                    console.log(err_6);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
export function productSave(productNameForm, productPriceForm, productContentForm) {
    return __awaiter(this, void 0, void 0, function () {
        var token, url, imageUrl, productInfo, setting, reqPosting, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    token = localStorage.getItem('Token');
                    url = 'https://api.mandarin.weniv.co.kr';
                    imageUrl = localStorage.getItem('ProductImg');
                    productInfo = {
                        product: {
                            itemName: productNameForm.value,
                            price: parseInt(productPriceForm.value.replace(/,/g, '')),
                            link: productContentForm.value,
                            itemImage: imageUrl,
                        },
                    };
                    setting = {
                        method: 'POST',
                        headers: {
                            Authorization: "Bearer ".concat(token),
                            'Content-type': 'application/json',
                        },
                        body: JSON.stringify(productInfo),
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fetch("".concat(url, "/product"), setting)];
                case 2:
                    reqPosting = _a.sent();
                    if (reqPosting.status === 200) {
                        backHistory();
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// 프로필 수정
export function updateProfile() {
    return __awaiter(this, void 0, void 0, function () {
        var token, url, inputName, inputId, inputIntroduce, imageUrl, alertMessage, userProfileInfo, setting, resEditProfile, resEditProfileJson, err_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    token = localStorage.getItem('Token');
                    url = 'https://api.mandarin.weniv.co.kr';
                    inputName = document.getElementById('name');
                    inputId = document.getElementById('id');
                    inputIntroduce = document.getElementById('introduce');
                    imageUrl = localStorage.getItem('imageUrl');
                    alertMessage = document.querySelector('.alertMessage');
                    userProfileInfo = {
                        user: {
                            username: inputName.value,
                            accountname: inputId.value,
                            intro: inputIntroduce.value,
                            image: "".concat(imageUrl),
                        },
                    };
                    setting = {
                        method: 'PUT',
                        headers: {
                            Authorization: "Bearer ".concat(token),
                            'Content-type': 'application/json',
                        },
                        body: JSON.stringify(userProfileInfo),
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("".concat(url, "/user"), setting)];
                case 2:
                    resEditProfile = _a.sent();
                    return [4 /*yield*/, resEditProfile.json()];
                case 3:
                    resEditProfileJson = _a.sent();
                    // 응답 성공시
                    if (resEditProfile.status === 200) {
                        localStorage.setItem('accountname', inputId.value);
                        backHistory();
                    }
                    else {
                        alertMessage.classList.remove('ir');
                        alertMessage.innerText = "*".concat(resEditProfileJson.message);
                    }
                    return [3 /*break*/, 5];
                case 4:
                    err_7 = _a.sent();
                    console.error(err_7);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
// 프로필 정보
export function getProfile(accountName) {
    return __awaiter(this, void 0, void 0, function () {
        var url, token, setting, resProfile, resProfileJson, userProfile, err_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = 'https://api.mandarin.weniv.co.kr';
                    token = localStorage.getItem('Token');
                    setting = {
                        method: 'GET',
                        headers: {
                            Authorization: "Bearer ".concat(token),
                            'Content-type': 'application/json',
                        },
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("".concat(url, "/profile/").concat(accountName), setting)];
                case 2:
                    resProfile = _a.sent();
                    return [4 /*yield*/, resProfile.json()];
                case 3:
                    resProfileJson = _a.sent();
                    userProfile = resProfileJson.profile;
                    return [2 /*return*/, userProfile];
                case 4:
                    err_8 = _a.sent();
                    console.error(err_8);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
// 게시물 확인
export function getPosting() {
    return __awaiter(this, void 0, void 0, function () {
        var url, token, myAccountName, accountName, setting, resProfileProduct, resProfileProductJson, userPostInfo, err_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = 'https://api.mandarin.weniv.co.kr';
                    token = localStorage.getItem('Token');
                    myAccountName = localStorage.getItem('accountname');
                    accountName = window.location.hash.split('accountname=')[1];
                    accountName = accountName == null ? myAccountName : accountName;
                    setting = {
                        method: 'GET',
                        headers: {
                            Authorization: "Bearer ".concat(token),
                            'Content-type': 'application/json',
                        },
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("".concat(url, "/post/").concat(accountName, "/userpost/?limit=9"), setting)];
                case 2:
                    resProfileProduct = _a.sent();
                    return [4 /*yield*/, resProfileProduct.json()];
                case 3:
                    resProfileProductJson = _a.sent();
                    userPostInfo = resProfileProductJson.post;
                    return [2 /*return*/, userPostInfo];
                case 4:
                    err_9 = _a.sent();
                    console.error(err_9);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
