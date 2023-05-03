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
import { clickCommentModal } from './modal';
export function postInput(event) {
    var postChatForm = document.querySelector('#postChatContent');
    var postButton = document.querySelector('.postBtn');
    // enter 시에 comment 입력
    if (event.key === 'Enter') {
        submitComment(event);
    }
    else {
        if (postChatForm.value !== '') {
            postButton.style.color = '#6167ac';
            postButton.disabled = false;
        }
        else {
            postButton.style.color = '#dbdbdb';
            postButton.disabled = true;
        }
    }
}
// 프로필, 게시글, 댓글 데이터 불러오기
export function renderPost() {
    return __awaiter(this, void 0, void 0, function () {
        var url, postId, token, res, json, postInfo, profileImg, userName, accountName_1, content, jsonImg, heartCount, commentCount, createdAt, postButton, div, section, userBox, userProfileImage, userInfo, userNickname, userText, userMsgContent, jsonImgTags, heartStatus, postTitleHeading4El, contentPEl, range, jsonImgTagsNode, postBtnDivEl, heartBtnEl, likeTextSpanEl, likeCountSpanEl, commentBtnDivEl, commentCountSpanEl, postDateStrongEl, heartBtn, commentSection, comments, _i, comments_1, comment, commentArticleEl, commentTitleHeading3El, userSectionEl, userListDivEl, userItemDivEl, userBoxDivEl, profileImgEl, userCommentInfoDivEl, userNickNameStrongEl, commentTimeStrongEl, moreModalBtnEl, modalTextSpanEl, commentContentSectionEl, commentTitleHeading4El, commentContentPEl, modal, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = 'https://api.mandarin.weniv.co.kr';
                    postId = window.location.href.split('postid=')[1];
                    token = localStorage.getItem('Token');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, , 6]);
                    return [4 /*yield*/, fetch("".concat(url, "/post/").concat(postId), {
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
                    postInfo = json.post;
                    profileImg = postInfo.author.image;
                    userName = postInfo.author.username;
                    accountName_1 = postInfo.author.accountname;
                    content = postInfo.content;
                    jsonImg = Array.from(postInfo.image.split(','));
                    heartCount = postInfo.heartCount;
                    commentCount = postInfo.commentCount;
                    createdAt = timeForToday(postInfo.createdAt);
                    postButton = document.querySelector('.postBtn');
                    postButton.disabled = true;
                    postButton.style.color = '#dbdbdb';
                    div = document.querySelector('.userItem');
                    div.innerHTML = '';
                    section = document.querySelector('.postContent');
                    userBox = document.createElement('a');
                    userProfileImage = document.createElement('img');
                    userInfo = document.createElement('div');
                    userNickname = document.createElement('strong');
                    userText = document.createElement('div');
                    userMsgContent = document.createElement('p');
                    userBox.className = 'userBox';
                    userProfileImage.className = 'userProfileImage';
                    userInfo.className = 'userInfo';
                    userNickname.className = 'userNickname';
                    userText.className = 'userText';
                    userMsgContent.className = 'userMsgContent userStatusMsg';
                    userBox.addEventListener('click', function () {
                        window.location.hash = "#profile?accountname=".concat(accountName_1); // 주소 업데이트
                    });
                    userProfileImage.src = profileImg.length <= 20 ? "".concat(url, "/").concat(profileImg) : profileImg;
                    userNickname.innerText = userName;
                    userMsgContent.innerText = "@".concat(accountName_1);
                    div.appendChild(userBox);
                    userBox.appendChild(userProfileImage);
                    userBox.appendChild(userInfo);
                    userInfo.appendChild(userNickname);
                    userInfo.appendChild(userText);
                    userText.appendChild(userMsgContent);
                    jsonImgTags = jsonImg.length > 0
                        ? "\n       <div class=\"postDetaileImgContent\">\n         <ul>\n           <li class=\"postDetaileImgContentFlex\">\n           ".concat(jsonImg.map(function (item) {
                            return "<img src=".concat(item, " alt=\"\uAC8C\uC2DC\uBB3C \uC774\uBBF8\uC9C0\" />");
                        }), "\n           </li>\n         </ul>\n         </div>")
                        : '';
                    heartStatus = void 0;
                    if (json.post.hearted) {
                        heartStatus = 'likeBtn on';
                    }
                    else {
                        heartStatus = 'likeBtn';
                    }
                    postTitleHeading4El = document.createElement('h4');
                    contentPEl = document.createElement('p');
                    postTitleHeading4El.classList.add('ir');
                    postTitleHeading4El.innerText = '게시글 내용';
                    contentPEl.innerText = "".concat(content);
                    section.appendChild(postTitleHeading4El);
                    section.appendChild(contentPEl);
                    range = document.createRange();
                    jsonImgTagsNode = range.createContextualFragment(jsonImgTags);
                    section.appendChild(jsonImgTagsNode);
                    postBtnDivEl = document.createElement('div');
                    heartBtnEl = document.createElement('button');
                    likeTextSpanEl = document.createElement('span');
                    likeCountSpanEl = document.createElement('span');
                    commentBtnDivEl = document.createElement('div');
                    commentCountSpanEl = document.createElement('span');
                    postDateStrongEl = document.createElement('strong');
                    postBtnDivEl.classList.add('postBtnContent');
                    heartBtnEl.classList.add("".concat(heartStatus));
                    likeTextSpanEl.classList.add('ir');
                    likeTextSpanEl.innerText = '좋아요 버튼';
                    likeCountSpanEl.classList.add('likeCount');
                    likeCountSpanEl.innerText = "".concat(heartCount);
                    commentBtnDivEl.classList.add('commentBtn');
                    commentCountSpanEl.classList.add('commentCount');
                    commentCountSpanEl.innerText = "".concat(commentCount);
                    postDateStrongEl.classList.add('postDate');
                    postDateStrongEl.innerText = "".concat(createdAt);
                    commentBtnDivEl.appendChild(commentCountSpanEl);
                    heartBtnEl.appendChild(likeTextSpanEl);
                    heartBtnEl.appendChild(likeCountSpanEl);
                    postBtnDivEl.appendChild(heartBtnEl);
                    postBtnDivEl.appendChild(commentBtnDivEl);
                    section.appendChild(postBtnDivEl);
                    section.appendChild(postDateStrongEl);
                    heartBtn = document.querySelector('.postBtnContent button');
                    heartBtn.addEventListener('click', clickHeart);
                    commentSection = document.querySelector('.postCommentBox');
                    return [4 /*yield*/, getCommentDetail()];
                case 4:
                    comments = (_a.sent()).comments;
                    for (_i = 0, comments_1 = comments; _i < comments_1.length; _i++) {
                        comment = comments_1[_i];
                        commentArticleEl = document.createElement('article');
                        commentTitleHeading3El = document.createElement('h3');
                        userSectionEl = document.createElement('section');
                        userListDivEl = document.createElement('div');
                        userItemDivEl = document.createElement('div');
                        userBoxDivEl = document.createElement('div');
                        profileImgEl = document.createElement('img');
                        userCommentInfoDivEl = document.createElement('div');
                        userNickNameStrongEl = document.createElement('strong');
                        commentTimeStrongEl = document.createElement('strong');
                        moreModalBtnEl = document.createElement('button');
                        modalTextSpanEl = document.createElement('span');
                        commentContentSectionEl = document.createElement('section');
                        commentTitleHeading4El = document.createElement('h4');
                        commentContentPEl = document.createElement('p');
                        commentArticleEl.classList.add('post');
                        commentArticleEl.classList.add('postCommentContent');
                        commentArticleEl.id = "".concat(comment.id);
                        commentArticleEl.setAttribute('key', "".concat(comment.author.accountname));
                        commentTitleHeading3El.classList.add('ir');
                        commentTitleHeading3El.innerText = '게시글 댓글';
                        userListDivEl.classList.add('userList');
                        userItemDivEl.classList.add('userItem');
                        userBoxDivEl.classList.add('userBox');
                        profileImgEl.classList.add('userProfileImage');
                        profileImgEl.classList.add('postUserProfile');
                        profileImgEl.src =
                            comment.author.image.length <= 20 ? "".concat(url, "/").concat(comment.author.image) : "".concat(comment.author.image);
                        profileImgEl.setAttribute('alt', '프로필 이미지');
                        userCommentInfoDivEl.classList.add('userCommentInfo');
                        userNickNameStrongEl.classList.add('userNickname');
                        userNickNameStrongEl.classList.add('postUserNickName');
                        userNickNameStrongEl.innerText = "".concat(comment.author.username);
                        commentTimeStrongEl.classList.add('postTime');
                        commentTimeStrongEl.innerText = "\u2219 ".concat(timeForToday(comment.createdAt));
                        moreModalBtnEl.classList.add('moreBtn');
                        moreModalBtnEl.classList.add('buttonClick');
                        modalTextSpanEl.classList.add('ir');
                        modalTextSpanEl.innerText = '댓글 모달 버튼';
                        commentContentSectionEl.classList.add('postContent');
                        commentContentSectionEl.classList.add('postComment');
                        commentTitleHeading4El.classList.add('ir');
                        commentTitleHeading4El.innerText = '댓글 내용';
                        commentContentPEl.innerText = "".concat(comment.content);
                        userCommentInfoDivEl.appendChild(userNickNameStrongEl);
                        userCommentInfoDivEl.appendChild(commentTimeStrongEl);
                        userBoxDivEl.appendChild(profileImgEl);
                        userBoxDivEl.appendChild(userCommentInfoDivEl);
                        userBoxDivEl.appendChild(moreModalBtnEl);
                        moreModalBtnEl.appendChild(modalTextSpanEl);
                        userItemDivEl.appendChild(userBoxDivEl);
                        userListDivEl.appendChild(userItemDivEl);
                        userSectionEl.appendChild(userListDivEl);
                        commentContentSectionEl.appendChild(commentTitleHeading4El);
                        commentContentSectionEl.appendChild(commentContentPEl);
                        commentArticleEl.appendChild(commentTitleHeading3El);
                        commentArticleEl.appendChild(userSectionEl);
                        commentArticleEl.appendChild(commentContentSectionEl);
                        commentSection.appendChild(commentArticleEl);
                    }
                    modal = document.querySelectorAll('.moreBtn.buttonClick');
                    [].forEach.call(modal, function (modal) {
                        modal.addEventListener('click', clickCommentModal);
                    });
                    return [3 /*break*/, 6];
                case 5:
                    err_1 = _a.sent();
                    console.error(err_1);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
// 상세 댓글 불러오기
function getCommentDetail() {
    return __awaiter(this, void 0, void 0, function () {
        var token, url, postId, res, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    token = localStorage.getItem('Token');
                    url = 'https://api.mandarin.weniv.co.kr';
                    postId = window.location.href.split('postid=')[1];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fetch("".concat(url, "/post/").concat(postId, "/comments"), {
                            method: 'GET',
                            headers: {
                                Authorization: "Bearer ".concat(token),
                                'Content-type': 'application/json',
                            },
                        })];
                case 2:
                    res = _a.sent();
                    return [2 /*return*/, res.json()];
                case 3:
                    err_2 = _a.sent();
                    console.log(err_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// 로그인 유저 정보
export function getLoginUserInfo(commentUserProfile) {
    return __awaiter(this, void 0, void 0, function () {
        var url, token, accountname, res, userJson, commentUserProfileImg, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = 'https://api.mandarin.weniv.co.kr';
                    token = localStorage.getItem('Token');
                    accountname = localStorage.getItem('accountname');
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
                    commentUserProfileImg = userJson.profile.image;
                    // 댓글 유저 프로필 이미지
                    commentUserProfile.src =
                        commentUserProfileImg.length <= 20 ? "".concat(url, "/").concat(commentUserProfileImg) : "".concat(commentUserProfileImg);
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
// 댓글 입력
export function submitComment(event) {
    return __awaiter(this, void 0, void 0, function () {
        var url, postId, commentInput, token, res, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    url = 'https://api.mandarin.weniv.co.kr';
                    postId = window.location.href.split('postid=')[1];
                    commentInput = document.getElementById('postChatContent');
                    token = localStorage.getItem('Token');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fetch("".concat(url, "/post/").concat(postId, "/comments"), {
                            method: 'POST',
                            headers: {
                                Authorization: "Bearer ".concat(token),
                                'Content-type': 'application/json',
                            },
                            body: JSON.stringify({
                                comment: {
                                    content: commentInput.value,
                                },
                            }),
                        })];
                case 2:
                    res = _a.sent();
                    commentInput.value = '';
                    if (res) {
                        location.reload();
                    }
                    return [3 /*break*/, 4];
                case 3:
                    err_4 = _a.sent();
                    console.log(err_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
