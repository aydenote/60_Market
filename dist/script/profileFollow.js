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
// 쿼리스트링에 따라 팔로우, 팔로윙 페이지 보여주기
export function init(userListUlEl) {
    var title = window.location.hash.split('title=')[1];
    var myAccountName = localStorage.getItem('accountname');
    var reg = new RegExp('@(.*?)&');
    var accountName = window.location.hash.split(reg)[1];
    accountName = accountName == null ? myAccountName : accountName;
    if (title === 'followers') {
        getFollowerList(accountName, userListUlEl);
    }
    else if (title === 'followings') {
        getFollowingList(accountName, userListUlEl);
    }
}
// 팔로윙 정보 가져오기(내가 팔로우한 사용자 목록 가져오기)
function getFollowingList(accountName, userListUlEl) {
    return __awaiter(this, void 0, void 0, function () {
        var token, url, setting, followingData, followingDataJson, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    token = localStorage.getItem('Token');
                    url = 'https://api.mandarin.weniv.co.kr';
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
                    return [4 /*yield*/, fetch("".concat(url, "/profile/").concat(accountName, "/following"), setting)];
                case 2:
                    followingData = _a.sent();
                    return [4 /*yield*/, followingData.json()];
                case 3:
                    followingDataJson = _a.sent();
                    setFollowing(followingDataJson, userListUlEl);
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
// 팔로윙 정보(내가 팔로우한 사용자) 페이지에 반영
function setFollowing(followingDataJson, userListUlEl) {
    var title = document.querySelector('.followers .followTitle');
    var url = 'https://api.mandarin.weniv.co.kr';
    title.innerText = 'Followings';
    for (var _i = 0, followingDataJson_1 = followingDataJson; _i < followingDataJson_1.length; _i++) {
        var following = followingDataJson_1[_i];
        var userItemLiEl = document.createElement('li');
        var userInfoAnchorEl = document.createElement('a');
        var userProfileImgEl = document.createElement('img');
        var userInfoDivEl = document.createElement('div');
        var userNickNameStrongEl = document.createElement('strong');
        var userTextDivEl = document.createElement('div');
        var userAccountPEl = document.createElement('p');
        var followBtnEl = document.createElement('button');
        userItemLiEl.classList.add('userItem');
        userInfoAnchorEl.classList.add('userBox');
        userProfileImgEl.classList.add('userProfileImage');
        userProfileImgEl.classList.add('follow');
        userProfileImgEl.src = following.image.length <= 20 ? "".concat(url, "/").concat(following.image) : "".concat(following.image);
        userProfileImgEl.setAttribute('alt', '프로필 이미지');
        userInfoDivEl.classList.add('userInfo');
        userInfoDivEl.classList.add('follow');
        userNickNameStrongEl.classList.add('userNickname');
        userNickNameStrongEl.innerText = "".concat(following.username);
        userTextDivEl.classList.add('userText');
        userAccountPEl.classList.add('userMsgContent');
        userAccountPEl.classList.add('userStatusMsg');
        userAccountPEl.innerText = "".concat(following.accountname);
        followBtnEl.classList.add('profile');
        followBtnEl.classList.add('followBtn');
        followBtnEl.innerText = '팔로우';
        followBtnEl.addEventListener('click', handleFollow);
        userTextDivEl.appendChild(userAccountPEl);
        userInfoDivEl.appendChild(userNickNameStrongEl);
        userInfoDivEl.appendChild(userTextDivEl);
        userInfoAnchorEl.appendChild(userProfileImgEl);
        userInfoAnchorEl.appendChild(userInfoDivEl);
        userInfoAnchorEl.appendChild(followBtnEl);
        userItemLiEl.appendChild(userInfoAnchorEl);
        userListUlEl.appendChild(userItemLiEl);
    }
}
// 팔로우 버튼 클릭 시 버튼 스타일 변경
function handleFollow(event) {
    event.preventDefault();
    event.target.classList.toggle('follow');
    if (event.target.className === 'profile followBtn follow') {
        event.target.innerText = '취소';
        event.target.style.opacity = '0.6';
    }
    else {
        event.target.innerText = '팔로우';
        event.target.style.opacity = '1';
    }
}
// 팔로워 정보 가져오기(나를 팔로우한 사용자 목록 가져오기)
function getFollowerList(accountName, userListUlEl) {
    return __awaiter(this, void 0, void 0, function () {
        var token, url, setting, followerData, followerDataJson, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    token = localStorage.getItem('Token');
                    url = 'https://api.mandarin.weniv.co.kr';
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
                    return [4 /*yield*/, fetch("".concat(url, "/profile/").concat(accountName, "/follower"), setting)];
                case 2:
                    followerData = _a.sent();
                    return [4 /*yield*/, followerData.json()];
                case 3:
                    followerDataJson = _a.sent();
                    setFollower(followerDataJson, userListUlEl);
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
// 팔로워 정보 (나를 팔로우한 사용자 정보) 페이지에 반영
function setFollower(followerDataJson, userListUlEl) {
    var title = document.querySelector('.followers .followTitle');
    var url = 'https://api.mandarin.weniv.co.kr';
    title.innerText = 'Followers';
    for (var _i = 0, followerDataJson_1 = followerDataJson; _i < followerDataJson_1.length; _i++) {
        var follower = followerDataJson_1[_i];
        var userItemLiEl = document.createElement('li');
        var userInfoAnchorEl = document.createElement('a');
        var userProfileImgEl = document.createElement('img');
        var userInfoDivEl = document.createElement('div');
        var userNickNameStrongEl = document.createElement('strong');
        var userTextDivEl = document.createElement('div');
        var userAccountPEl = document.createElement('p');
        var followBtnEl = document.createElement('button');
        userItemLiEl.classList.add('userItem');
        userInfoAnchorEl.classList.add('userBox');
        userProfileImgEl.classList.add('userProfileImage');
        userProfileImgEl.classList.add('follow');
        userProfileImgEl.src = follower.image.length <= 20 ? "".concat(url, "/").concat(follower.image) : "".concat(follower.image);
        userProfileImgEl.setAttribute('alt', '프로필 이미지');
        userInfoDivEl.classList.add('userInfo');
        userInfoDivEl.classList.add('follow');
        userNickNameStrongEl.classList.add('userNickname');
        userNickNameStrongEl.innerText = "".concat(follower.username);
        userTextDivEl.classList.add('userText');
        userAccountPEl.classList.add('userMsgContent');
        userAccountPEl.classList.add('userStatusMsg');
        userAccountPEl.innerText = "".concat(follower.accountname);
        followBtnEl.classList.add('profile');
        followBtnEl.classList.add('followBtn');
        followBtnEl.innerText = '팔로우';
        followBtnEl.addEventListener('click', handleFollow);
        userTextDivEl.appendChild(userAccountPEl);
        userInfoDivEl.appendChild(userNickNameStrongEl);
        userInfoDivEl.appendChild(userTextDivEl);
        userInfoAnchorEl.appendChild(userProfileImgEl);
        userInfoAnchorEl.appendChild(userInfoDivEl);
        userInfoAnchorEl.appendChild(followBtnEl);
        userItemLiEl.appendChild(userInfoAnchorEl);
        userListUlEl.appendChild(userItemLiEl);
    }
}
