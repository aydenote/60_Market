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
import { timeForToday } from '../utils/common';
import { clickHeart } from './heartBtn';
import { clickUserModal } from './modal';
function noFeed() {
    var subTitleHeading3El = document.createElement('h3');
    var noneFeedSectionEl = document.createElement('noneFeed');
    var contentPEl = document.createElement('p');
    var searchLinkDivEl = document.createElement('div');
    var contentMainEl = document.createElement('main');
    subTitleHeading3El.classList.add('ir');
    subTitleHeading3El.innerText = '피드 게시글';
    noneFeedSectionEl.classList.add('noneFeed');
    contentPEl.innerText = '유저를 검색해 팔로우 해보세요!';
    searchLinkDivEl.classList.add('userSearchBtn');
    searchLinkDivEl.innerText = '검색하기';
    searchLinkDivEl.addEventListener('click', function () {
        window.location.hash = '#search'; // 주소 업데이트
    });
    noneFeedSectionEl.appendChild(contentPEl);
    noneFeedSectionEl.appendChild(searchLinkDivEl);
    contentMainEl.appendChild(subTitleHeading3El);
    contentMainEl.appendChild(noneFeedSectionEl);
}
export function feedAPI() {
    return __awaiter(this, void 0, void 0, function () {
        var defaultUrl, token, setting, resFeed, jsonFeed, posts, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    defaultUrl = 'https://api.mandarin.weniv.co.kr';
                    token = localStorage.getItem('Token');
                    setting = {
                        method: 'GET',
                        headers: {
                            Authorization: "Bearer ".concat(token),
                            'Content-type': 'application/json',
                        },
                    };
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("".concat(defaultUrl, "/post/feed?limit=30"), setting)];
                case 2:
                    resFeed = _b.sent();
                    return [4 /*yield*/, resFeed.json()];
                case 3:
                    jsonFeed = _b.sent();
                    posts = jsonFeed.posts;
                    if (posts.length <= 0) {
                        noFeed();
                    }
                    else {
                        createFeed(posts);
                    }
                    return [3 /*break*/, 5];
                case 4:
                    _a = _b.sent();
                    console.error('The feed cannot be received.');
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function clickUserInfo(event) {
    var _a;
    var eventTarget = event.target;
    var userAccount = (_a = event.currentTarget.children[1].children[1].textContent) === null || _a === void 0 ? void 0 : _a.replace('@', '');
    if (eventTarget.className === 'moreBtn buttonClick') {
        return;
    }
    window.location.hash = "#profile?accountname=".concat(userAccount); // 주소 업데이트
}
function clickComment(event) {
    var postId = event.currentTarget.dataset.postid;
    window.location.hash = "#post?postid=".concat(postId); // 주소 업데이트
}
function createFeed(posts) {
    var listContent = document.querySelector('.post');
    for (var i = 0; i < posts.length; i++) {
        var postItem = document.createElement('div');
        postItem.classList.add('postItem');
        // 이미지 url 저장
        var postImage = '';
        if (posts[i].image) {
            var images = posts[i].image.split(',');
            for (var _i = 0, images_1 = images; _i < images_1.length; _i++) {
                var image = images_1[_i];
                postImage += "\n        <li>\n          <img src=\"".concat(image, "\" alt=\"\uAC8C\uC2DC\uBB3C \uC774\uBBF8\uC9C0\" />\n        </li>\n        ");
            }
        }
        var checkImg = !postImage
            ? ''
            : "<div class=\"postImgContent\">\n            <ul>".concat(postImage, "</ul>\n          </div>");
        var range = document.createRange();
        var checkImgNode = range.createContextualFragment(checkImg);
        // 사용자 정보 마크업
        var postHeading4El = document.createElement('h4');
        var userInfoSectionEl = document.createElement('section');
        var userListDivEl = document.createElement('div');
        var userItemDivEl = document.createElement('div');
        var userBoxDivEl = document.createElement('div');
        var userProfileImgEl = document.createElement('img');
        var userInfoDivEl = document.createElement('div');
        var userNicknameStrongEl = document.createElement('strong');
        var userTextDivEl = document.createElement('div');
        var userStatusMsgPEl = document.createElement('p');
        var moreBtnEl = document.createElement('button');
        var moreTextSpanEl = document.createElement('span');
        postHeading4El.classList.add('ir');
        postHeading4El.innerText = '게시물';
        userListDivEl.classList.add('userList');
        userItemDivEl.classList.add('userItem');
        userBoxDivEl.classList.add('userBox');
        userBoxDivEl.setAttribute('data-key', posts[i].id);
        userProfileImgEl.classList.add('userProfileImage');
        userProfileImgEl.setAttribute('src', "".concat(posts[i].author.image));
        userProfileImgEl.setAttribute('alt', "".concat(posts[i].author.username, "\uB2D8\uC758 \uD504\uB85C\uD544 \uC774\uBBF8\uC9C0"));
        userInfoDivEl.classList.add('userInfo');
        userNicknameStrongEl.classList.add('userNickname');
        userNicknameStrongEl.innerText = "".concat(posts[i].author.username);
        userTextDivEl.classList.add('userText');
        userStatusMsgPEl.classList.add('userMsgContent');
        userStatusMsgPEl.classList.add('userStatusMsg');
        userStatusMsgPEl.innerText = "@".concat(posts[i].author.accountname);
        moreBtnEl.classList.add('moreBtn');
        moreBtnEl.classList.add('buttonClick');
        moreTextSpanEl.classList.add('ir');
        moreTextSpanEl.innerText = '게시글 더보기 버튼';
        moreBtnEl.appendChild(moreTextSpanEl);
        userTextDivEl.appendChild(userStatusMsgPEl);
        userInfoDivEl.appendChild(userNicknameStrongEl);
        userInfoDivEl.appendChild(userTextDivEl);
        userBoxDivEl.appendChild(userProfileImgEl);
        userBoxDivEl.appendChild(userInfoDivEl);
        userBoxDivEl.appendChild(moreBtnEl);
        userItemDivEl.appendChild(userBoxDivEl);
        userListDivEl.appendChild(userItemDivEl);
        userInfoSectionEl.appendChild(userListDivEl);
        postItem.appendChild(postHeading4El);
        postItem.appendChild(userInfoSectionEl);
        // 게시물 마크업
        var contentSectionEl = document.createElement('section');
        var contentTitleheading4El = document.createElement('h4');
        var contentPEl = document.createElement('p');
        var contentBtnDivEl = document.createElement('div');
        var likeBtnEl = document.createElement('button');
        var likeTextSpanEl = document.createElement('span');
        var likeCountSpanEl = document.createElement('span');
        var commentBtnDivEl = document.createElement('div');
        var commentCountSpanEl = document.createElement('span');
        var postDateStrongEl = document.createElement('strong');
        contentSectionEl.classList.add('postContent');
        contentSectionEl.id = "".concat(posts[i].id);
        contentTitleheading4El.classList.add('ir');
        contentTitleheading4El.innerText = '게시글 내용';
        contentPEl.innerText = "".concat(posts[i].content);
        contentBtnDivEl.classList.add('postBtnContent');
        likeBtnEl.classList.add('likeBtn');
        if (posts[i].hearted) {
            likeBtnEl.classList.add('on');
        }
        else {
            likeBtnEl.classList.remove('on');
        }
        likeTextSpanEl.classList.add('ir');
        likeTextSpanEl.innerText = '좋아요 버튼';
        likeCountSpanEl.classList.add('commentCount');
        likeCountSpanEl.innerText = "".concat(posts[i].heartCount);
        commentBtnDivEl.classList.add('commentBtn');
        commentBtnDivEl.dataset.postid = "".concat(posts[i].id);
        commentCountSpanEl.classList.add('commentCount');
        commentCountSpanEl.innerText = "".concat(posts[i].commentCount);
        postDateStrongEl.classList.add('postDate');
        postDateStrongEl.innerText = "".concat(timeForToday(posts[i].createdAt));
        likeBtnEl.appendChild(likeTextSpanEl);
        likeBtnEl.appendChild(likeCountSpanEl);
        commentBtnDivEl.appendChild(commentCountSpanEl);
        contentBtnDivEl.appendChild(likeBtnEl);
        contentBtnDivEl.appendChild(commentBtnDivEl);
        contentSectionEl.appendChild(contentTitleheading4El);
        contentSectionEl.appendChild(contentPEl);
        contentSectionEl.appendChild(checkImgNode);
        contentSectionEl.appendChild(contentBtnDivEl);
        contentSectionEl.appendChild(postDateStrongEl);
        postItem.appendChild(contentSectionEl);
        listContent.appendChild(postItem);
        userBoxDivEl.addEventListener('click', clickUserInfo);
        likeBtnEl.addEventListener('click', clickHeart);
        moreBtnEl.addEventListener('click', clickUserModal);
        commentBtnDivEl.addEventListener('click', clickComment);
    }
}
