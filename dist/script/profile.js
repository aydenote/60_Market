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
import { clickUserModal, productModal } from './modal';
import { getProfile, getPosting } from '../utils/apiModule';
// 프로필 정보 가져오기
export function getProfileInfo() {
    return __awaiter(this, void 0, void 0, function () {
        var myAccountName, accountName, userProfile;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    myAccountName = localStorage.getItem('accountname');
                    accountName = window.location.hash.split('accountname=')[1];
                    accountName = accountName == null ? myAccountName : accountName;
                    return [4 /*yield*/, getProfile(accountName)];
                case 1:
                    userProfile = _a.sent();
                    if (userProfile.accountname === myAccountName) {
                        setMyProfile(userProfile);
                    }
                    else {
                        setYourProfile(userProfile);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function setMyProfile(userProfile) {
    var url = 'https://api.mandarin.weniv.co.k';
    var createEditLink = document.createElement('div');
    var createProductLink = document.createElement('div');
    var profileLinkBtn = document.querySelector('.link');
    createEditLink.setAttribute('class', 'fixProfile');
    createEditLink.addEventListener('click', function () {
        window.location.hash = "#editProfile"; // 주소 업데이트
    });
    createEditLink.innerText = '프로필 수정';
    profileLinkBtn.append(createEditLink);
    createProductLink.setAttribute('class', 'addPosting');
    createProductLink.addEventListener('click', function () {
        window.location.hash = '#product';
    });
    createProductLink.innerText = '상품 등록';
    profileLinkBtn.append(createProductLink);
    document.querySelector('.ProfileContent .myImage').src =
        userProfile.image.length <= 20 ? "".concat(url, "/").concat(userProfile.image) : "".concat(userProfile.image);
    document.querySelector('.profileInfo .userName').innerText = userProfile.username;
    document.querySelector('.profileInfo .userId').innerText = "@".concat(userProfile.accountname);
    document.querySelector('.profileInfo .introduction').innerText = userProfile.intro;
    getProductList(userProfile);
}
// 다른 사람 프로필 페이지 구현
function setYourProfile(userProfile) {
    var createMessageImg = document.createElement('img');
    var createFollowButton = document.createElement('button');
    var createShareImg = document.createElement('img');
    var profileLinkBtn = document.querySelector('.link');
    createMessageImg.setAttribute('class', 'messageBtn');
    createMessageImg.setAttribute('src', '../asset/images/icons/icon__message.svg');
    createMessageImg.setAttribute('alt', '메세지 버튼');
    createMessageImg.addEventListener('click', function () {
        window.location.hash = "#chatting1"; // 주소 업데이트
    });
    profileLinkBtn.append(createMessageImg);
    createFollowButton.setAttribute('class', 'followBtn');
    createFollowButton.innerText = '팔로우';
    profileLinkBtn.append(createFollowButton);
    createShareImg.setAttribute('class', 'shareBtn');
    createShareImg.setAttribute('src', '../asset/images/icons/icon__share.svg');
    createShareImg.setAttribute('alt', '공유 버튼');
    profileLinkBtn.append(createShareImg);
    document.querySelector('.ProfileContent .myImage').src = userProfile.image;
    document.querySelector('.profileInfo .userName').innerText = userProfile.username;
    document.querySelector('.profileInfo .userId').innerText = "@ ".concat(userProfile.accountname);
    document.querySelector('.profileInfo .introduction').innerText = userProfile.intro;
    // 팔로우 / 언팔로우 스타일
    createFollowButton.addEventListener('click', function (event) {
        event.target.classList.toggle('follow');
        if (event.target.className === 'followBtn follow') {
            event.target.innerText = '언팔로우';
            event.target.style.opacity = '0.5';
        }
        else {
            event.target.innerText = '팔로우';
            event.target.style.opacity = '1';
        }
    });
    getProductList(userProfile);
}
// 사용자가 판매 중인 상품 정보 가져오기
function getProductList(userProfile) {
    return __awaiter(this, void 0, void 0, function () {
        var url, token, setting, resProfileProduct, resProfileProductJson, err_1;
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
                    return [4 /*yield*/, fetch("".concat(url, "/product/").concat(userProfile.accountname), setting)];
                case 2:
                    resProfileProduct = _a.sent();
                    return [4 /*yield*/, resProfileProduct.json()];
                case 3:
                    resProfileProductJson = _a.sent();
                    setProductList(resProfileProductJson);
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
// 등록된 상품 수에 따라 프로필에 해당 상품 반영
function setProductList(resProfileProductJson) {
    if (resProfileProductJson.product.length !== 0) {
        var saleItems = document.querySelector('.saleItemContainer');
        var createP = document.createElement('p');
        var createUl = document.createElement('ul');
        var url = 'https://api.mandarin.weniv.co.kr';
        createP.setAttribute('class', 'title');
        createUl.setAttribute('class', 'productList');
        saleItems.append(createP);
        saleItems.append(createUl);
        document.querySelector('.saleItems .title').innerText = '판매 중인 상품';
        var productList = document.querySelector('.saleItems .productList');
        for (var _i = 0, _a = resProfileProductJson.product; _i < _a.length; _i++) {
            var product_1 = _a[_i];
            var imageUrl = product_1.itemImage.length >= 100 ? "".concat(product_1.itemImage) : "".concat(url, "/").concat(product_1.itemImage);
            productList.innerHTML += "<li id=\"".concat(product_1.id, "\">\n      <img src=\"").concat(imageUrl, "\" alt=\"\uC0C1\uD488 \uC774\uBBF8\uC9C0\" />\n      <p class=\"ProductTitle\">").concat(product_1.itemName, "</p>\n      <p class=\"price\">").concat(product_1.price.toLocaleString(), "\uC6D0</p>\n    </li>");
        }
    }
    else {
        return;
    }
    var product = document.querySelectorAll('.productList li');
    [].forEach.call(product, function (product) {
        product.addEventListener('click', function (event) {
            var productId = event.target.closest('li').id;
            productModal(productId);
        });
    });
}
// 게시물 가지고 오기
export function getPostingList() {
    var userPostInfo = getPosting();
    userPostInfo.then(function (res) {
        setPostingList(res);
    });
}
// 게시물 타입바 생성 및 최초 목록형으로 포스팅
function setPostingList(userPostInfo) {
    var postingSummary = document.querySelector('.postingSummary');
    if (userPostInfo.length === 0) {
        postingSummary.classList.add('hidden');
    }
    else {
        postingSummary.classList.remove('hidden');
        var createArticle = document.createElement('article');
        var createH3 = document.createElement('h3');
        createArticle.setAttribute('class', 'post');
        createH3.setAttribute('class', 'ir');
        createH3.innerText = '피드 게시글';
        createArticle.appendChild(createH3);
        postingSummary.append(createArticle);
        listTypePost(userPostInfo);
    }
}
// 목록형으로 포스팅 표시
export function listTypePost(userPostInfo) {
    var postingSummary = document.querySelector('.postingSummary');
    var postContent = document.querySelector('.postContent');
    var albumType = document.querySelector('.postingType.album.buttonClick');
    var ListType = document.querySelector('.postingType.list.buttonClick');
    var url = 'https://api.mandarin.weniv.co.kr';
    albumType.classList.add('unselected');
    ListType.classList.remove('unselected');
    if (postContent) {
        postContent.remove();
    }
    var createArticle = document.createElement('article');
    var createH3 = document.createElement('h3');
    createArticle.setAttribute('class', 'post');
    createH3.setAttribute('class', 'ir');
    createH3.innerText = '피드 게시글';
    createArticle.appendChild(createH3);
    postingSummary.append(createArticle);
    var posting = document.querySelectorAll('.post');
    posting[0].innerHTML = '<h3 class="ir">피드 게시글</h3>';
    if (posting.length >= 2) {
        posting[1].remove();
    }
    for (var _i = 0, userPostInfo_1 = userPostInfo; _i < userPostInfo_1.length; _i++) {
        var post = userPostInfo_1[_i];
        var postImage = '';
        var heartStatus = '';
        if (post.image && post.image.search('undefined') === -1) {
            var images = post.image.split(',');
            for (var _a = 0, images_1 = images; _a < images_1.length; _a++) {
                var image = images_1[_a];
                postImage += "\n        <li>\n          <img src=\"".concat(image, "\" alt=\"\uAC8C\uC2DC\uBB3C \uC774\uBBF8\uC9C0\" onerror=\"this.style.display='none'\"/>\n        </li>\n        ");
            }
        }
        var checkImg = !postImage ? '' : "<div class=\"postImgContent\"><ul>".concat(postImage, "</ul></div>");
        // 좋아요 이미지 on, off 스타일 구현
        if (post.hearted) {
            heartStatus = 'likeBtn on';
        }
        else {
            heartStatus = 'likeBtn';
        }
        var range = document.createRange();
        var ImgNode = range.createContextualFragment(checkImg);
        var postItemDivEl = document.createElement('div');
        var listContent = document.querySelector('.post');
        postItemDivEl.classList.add('postItem');
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
        userBoxDivEl.setAttribute('data-key', post.id);
        userProfileImgEl.classList.add('userProfileImage');
        if (post.author.image.length <= 20) {
            userProfileImgEl.setAttribute('src', "".concat(url, "/").concat(post.author.image));
        }
        else
            userProfileImgEl.setAttribute('src', "".concat(post.author.image));
        userProfileImgEl.setAttribute('alt', "".concat(post.author.username, "\uB2D8\uC758 \uD504\uB85C\uD544 \uC774\uBBF8\uC9C0"));
        userInfoDivEl.classList.add('userInfo');
        userNicknameStrongEl.classList.add('userNickname');
        userNicknameStrongEl.innerText = "".concat(post.author.username);
        userTextDivEl.classList.add('userText');
        userStatusMsgPEl.classList.add('userMsgContent');
        userStatusMsgPEl.classList.add('userStatusMsg');
        userStatusMsgPEl.innerText = "@".concat(post.author.accountname);
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
        postItemDivEl.appendChild(postHeading4El);
        postItemDivEl.appendChild(userInfoSectionEl);
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
        contentSectionEl.id = "".concat(post.id);
        contentTitleheading4El.classList.add('ir');
        contentTitleheading4El.innerText = '게시글 내용';
        contentPEl.innerText = "".concat(post.content);
        contentBtnDivEl.classList.add('postBtnContent');
        likeBtnEl.classList.add('likeBtn');
        if (post.hearted) {
            likeBtnEl.classList.add('on');
        }
        else {
            likeBtnEl.classList.remove('on');
        }
        likeTextSpanEl.classList.add('ir');
        likeTextSpanEl.innerText = '좋아요 버튼';
        likeCountSpanEl.classList.add('commentCount');
        likeCountSpanEl.innerText = "".concat(post.heartCount);
        commentBtnDivEl.classList.add('commentBtn');
        commentBtnDivEl.dataset.postid = "".concat(post.id);
        commentCountSpanEl.classList.add('commentCount');
        commentCountSpanEl.innerText = "".concat(post.commentCount);
        postDateStrongEl.classList.add('postDate');
        postDateStrongEl.innerText = "".concat(timeForToday(post.createdAt));
        likeBtnEl.appendChild(likeTextSpanEl);
        likeBtnEl.appendChild(likeCountSpanEl);
        commentBtnDivEl.appendChild(commentCountSpanEl);
        contentBtnDivEl.appendChild(likeBtnEl);
        contentBtnDivEl.appendChild(commentBtnDivEl);
        contentSectionEl.appendChild(contentTitleheading4El);
        contentSectionEl.appendChild(contentPEl);
        contentSectionEl.appendChild(ImgNode);
        contentSectionEl.appendChild(contentBtnDivEl);
        contentSectionEl.appendChild(postDateStrongEl);
        postItemDivEl.appendChild(contentSectionEl);
        listContent.appendChild(postItemDivEl);
        userBoxDivEl.addEventListener('click', clickUserInfo);
        likeBtnEl.addEventListener('click', clickHeart);
        moreBtnEl.addEventListener('click', clickUserModal);
        commentBtnDivEl.addEventListener('click', clickComment);
        var moreBtn = document.querySelectorAll('.moreBtn.buttonClick');
        var heartBtn = document.querySelectorAll('.postBtnContent button');
        [].forEach.call(heartBtn, function (heartBtn) {
            heartBtn.addEventListener('click', clickHeart);
        });
        [].forEach.call(moreBtn, function (moreBtn) {
            moreBtn.addEventListener('click', clickUserModal);
        });
    }
}
function clickComment(event) {
    var postId = event.currentTarget.dataset.postid;
    window.location.hash = "#post?postid=".concat(postId); // 주소 업데이트
}
function clickUserInfo(event) {
    var _a;
    var userAccount = (_a = event.currentTarget.children[1].children[1].textContent) === null || _a === void 0 ? void 0 : _a.replace('@', '');
    window.location.hash = "#profile?accountname=".concat(userAccount); // 주소 업데이트
}
// 앨범형 포스팅 구현
export function albumTypePost() {
    getPosting().then(function (res) { return setAlbum(res); });
}
function setAlbum(userPostInfo) {
    var postingSummary = document.querySelector('.postingSummary');
    var postContent = document.querySelectorAll('.postContent');
    var post = document.querySelector('.post');
    var albumType = document.querySelector('.postingType.album.buttonClick');
    var ListType = document.querySelector('.postingType.list.buttonClick');
    ListType.classList.add('unselected');
    albumType.classList.remove('unselected');
    if (post) {
        post.remove();
    }
    if (postContent.length >= 1) {
        postContent[0].remove();
    }
    var createArticle = document.createElement('article');
    var createH2 = document.createElement('h2');
    var createUl = document.createElement('ul');
    createArticle.setAttribute('class', 'postContent');
    createH2.setAttribute('class', 'ir');
    createH2.innerText = '등록된 게시물';
    createUl.setAttribute('class', 'postingList');
    createArticle.appendChild(createH2);
    createArticle.appendChild(createUl);
    postingSummary.appendChild(createArticle);
    for (var _i = 0, userPostInfo_2 = userPostInfo; _i < userPostInfo_2.length; _i++) {
        var post_1 = userPostInfo_2[_i];
        var postImg = post_1.image.split(',');
        // 게시물에 이미지가 없는 경우, img 태그 생성 불가.
        // 게시물에 이미지가 2개 이상인 경우, 이미지 레이어 아이콘 추가.
        if (postImg[0] === '') {
        }
        else if (postImg.length >= 2) {
            var imgLiEl = document.createElement('li');
            var postImgEl = document.createElement('img');
            var layerImgEl = document.createElement('img');
            postImgEl.setAttribute('src', "".concat(postImg[0]));
            postImgEl.setAttribute('alt', '');
            layerImgEl.classList.add('imageLayer');
            layerImgEl.setAttribute('src', '../asset/images/icons/icon__imageLayer.svg');
            layerImgEl.setAttribute('alt', '이미지 레이어 아이콘');
            imgLiEl.appendChild(postImgEl);
            imgLiEl.appendChild(layerImgEl);
            createUl.appendChild(imgLiEl);
        }
        else {
            var imgLiEl = document.createElement('li');
            var postImgEl = document.createElement('img');
            postImgEl.setAttribute('src', "".concat(postImg[0]));
            postImgEl.setAttribute('alt', '');
            imgLiEl.appendChild(postImgEl);
            createUl.appendChild(imgLiEl);
        }
    }
}
