/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./pages/chatPage.ts":
/*!***************************!*\
  !*** ./pages/chatPage.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ "./pages/footer.ts");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/common */ "./utils/common.ts");


class ChatPage {
    render(content) {
        const footer = new _footer__WEBPACK_IMPORTED_MODULE_0__["default"]();
        const footerEl = footer.render();
        const chatWrapDivEl = document.createElement('div');
        chatWrapDivEl.classList.add('chatWrap');
        document.querySelector('body').classList.remove('profileBackground');
        // header
        const headerEl = document.createElement('header');
        const heading1El = document.createElement('h1');
        const articleHeaderEl = document.createElement('article');
        const backImgEl = document.createElement('img');
        headerEl.classList.add('chatHeader');
        heading1El.classList.add('ir');
        heading1El.innerText = '채팅방 목록';
        articleHeaderEl.classList.add('headerBar');
        backImgEl.classList.add('headerBarBack');
        backImgEl.classList.add('buttonClick');
        backImgEl.setAttribute('src', '../asset/images/icons/icon__arrowLeft.svg');
        backImgEl.setAttribute('alt', '뒤로 가기');
        backImgEl.addEventListener('click', _utils_common__WEBPACK_IMPORTED_MODULE_1__.backHistory);
        articleHeaderEl.appendChild(backImgEl);
        headerEl.appendChild(heading1El);
        headerEl.appendChild(articleHeaderEl);
        chatWrapDivEl.appendChild(headerEl);
        // main
        const mainEl = document.createElement('main');
        const userListUlEl = document.createElement('ul');
        const pochaccoLiEl = document.createElement('li');
        const pochaccoDivEl = document.createElement('div');
        const pochaccoImgEl = document.createElement('img');
        const pochaccoInfoDivEl = document.createElement('div');
        const pochaccoNameStrongEl = document.createElement('strong');
        const pochaccoTextDivEl = document.createElement('div');
        const pochaccoMessagePEl = document.createElement('p');
        const pochaccoDatePEl = document.createElement('p');
        userListUlEl.classList.add('userList');
        pochaccoLiEl.classList.add('userItem');
        pochaccoDivEl.classList.add('userBox');
        pochaccoDivEl.addEventListener('click', () => {
            window.location.hash = '#chatting1';
        });
        pochaccoImgEl.classList.add('userProfileImage');
        pochaccoImgEl.setAttribute('src', '../asset/images/user/pochacco.png');
        pochaccoImgEl.setAttribute('alt', '프로필 이미지');
        pochaccoInfoDivEl.classList.add('userInfo');
        pochaccoNameStrongEl.classList.add('userNickname');
        pochaccoNameStrongEl.innerText = '포챠코';
        pochaccoTextDivEl.classList.add('userText');
        pochaccoMessagePEl.classList.add('userMsgContent');
        pochaccoMessagePEl.classList.add('userStatusMsg');
        pochaccoMessagePEl.innerText = '사실 없습니다. 😅';
        pochaccoDatePEl.classList.add('userMsgContent');
        pochaccoDatePEl.classList.add('userMsgDate');
        pochaccoDatePEl.innerText = '08. 07';
        pochaccoTextDivEl.appendChild(pochaccoMessagePEl);
        pochaccoTextDivEl.appendChild(pochaccoDatePEl);
        pochaccoInfoDivEl.appendChild(pochaccoNameStrongEl);
        pochaccoInfoDivEl.appendChild(pochaccoTextDivEl);
        pochaccoDivEl.appendChild(pochaccoImgEl);
        pochaccoDivEl.appendChild(pochaccoInfoDivEl);
        pochaccoLiEl.appendChild(pochaccoDivEl);
        const keropiLiEl = document.createElement('li');
        const keropiDivEl = document.createElement('div');
        const keropiImgEl = document.createElement('img');
        const keropiInfoDivEl = document.createElement('div');
        const keropiNameStrongEl = document.createElement('strong');
        const keropiTextDivEl = document.createElement('div');
        const keropiMessagePEl = document.createElement('p');
        const keropiDatePEl = document.createElement('p');
        keropiLiEl.classList.add('userItem');
        keropiDivEl.classList.add('userBox');
        keropiDivEl.addEventListener('click', () => {
            window.location.hash = '#chatting2';
        });
        keropiImgEl.classList.add('userProfileImage');
        keropiImgEl.setAttribute('src', '../asset/images/user/keropi.jpeg');
        keropiImgEl.setAttribute('alt', '프로필 이미지');
        keropiInfoDivEl.classList.add('userInfo');
        keropiNameStrongEl.classList.add('userNickname');
        keropiNameStrongEl.innerText = '케로피';
        keropiTextDivEl.classList.add('userText');
        keropiMessagePEl.classList.add('userMsgContent');
        keropiMessagePEl.classList.add('userStatusMsg');
        keropiMessagePEl.innerText = '당연하죠! 이따 거기서 뵙겠습니다.';
        keropiDatePEl.classList.add('userMsgContent');
        keropiDatePEl.classList.add('userMsgDate');
        keropiDatePEl.innerText = '08. 03';
        keropiTextDivEl.appendChild(keropiMessagePEl);
        keropiTextDivEl.appendChild(keropiDatePEl);
        keropiInfoDivEl.appendChild(keropiNameStrongEl);
        keropiInfoDivEl.appendChild(keropiTextDivEl);
        keropiDivEl.appendChild(keropiImgEl);
        keropiDivEl.appendChild(keropiInfoDivEl);
        keropiLiEl.appendChild(keropiDivEl);
        const boongboongLiEl = document.createElement('li');
        const boongboongDivEl = document.createElement('div');
        const boongboongImgEl = document.createElement('img');
        const boongboongInfoDivEl = document.createElement('div');
        const boongboongNameStrongEl = document.createElement('strong');
        const boongboongTextDivEl = document.createElement('div');
        const boongboongMessagePEl = document.createElement('p');
        const boongboongDatePEl = document.createElement('p');
        boongboongLiEl.classList.add('userItem');
        boongboongDivEl.classList.add('userBox');
        boongboongDivEl.addEventListener('click', () => {
            window.location.hash = '#chatting3';
        });
        boongboongImgEl.classList.add('userProfileImage');
        boongboongImgEl.setAttribute('src', '../asset/images/basic-profile.svg');
        boongboongImgEl.setAttribute('alt', '프로필 이미지');
        boongboongInfoDivEl.classList.add('userInfo');
        boongboongNameStrongEl.classList.add('userNickname');
        boongboongNameStrongEl.innerText = '붕붕';
        boongboongTextDivEl.classList.add('userText');
        boongboongMessagePEl.classList.add('userMsgContent');
        boongboongMessagePEl.classList.add('userStatusMsg');
        boongboongMessagePEl.innerText = '내 차는 내가 평가한다. 오픈 이벤트에 참여하시고 경품 받아가세요!';
        boongboongDatePEl.classList.add('userMsgContent');
        boongboongDatePEl.classList.add('userMsgDate');
        boongboongDatePEl.innerText = '08. 01';
        boongboongTextDivEl.appendChild(boongboongMessagePEl);
        boongboongTextDivEl.appendChild(boongboongDatePEl);
        boongboongInfoDivEl.appendChild(boongboongNameStrongEl);
        boongboongInfoDivEl.appendChild(boongboongTextDivEl);
        boongboongDivEl.appendChild(boongboongImgEl);
        boongboongDivEl.appendChild(boongboongInfoDivEl);
        boongboongLiEl.appendChild(boongboongDivEl);
        const pompomLiEl = document.createElement('li');
        const pompomDivEl = document.createElement('div');
        const pompomImgEl = document.createElement('img');
        const pompomInfoDivEl = document.createElement('div');
        const pompomNameStrongEl = document.createElement('strong');
        const pompomTextDivEl = document.createElement('div');
        const pompomMessagePEl = document.createElement('p');
        const pompomDatePEl = document.createElement('p');
        pompomLiEl.classList.add('userItem');
        pompomDivEl.classList.add('userBox');
        pompomDivEl.addEventListener('click', () => {
            window.location.hash = '#chatting4';
        });
        pompomImgEl.classList.add('userProfileImage');
        pompomImgEl.setAttribute('src', '../asset/images/user/pompom.jpeg');
        pompomImgEl.setAttribute('alt', '프로필 이미지');
        pompomInfoDivEl.classList.add('userInfo');
        pompomNameStrongEl.classList.add('userNickname');
        pompomNameStrongEl.innerText = '폼폼';
        pompomTextDivEl.classList.add('userText');
        pompomMessagePEl.classList.add('userMsgContent');
        pompomMessagePEl.classList.add('userStatusMsg');
        pompomMessagePEl.innerText = '에..';
        pompomDatePEl.classList.add('userMsgContent');
        pompomDatePEl.classList.add('userMsgDate');
        pompomDatePEl.innerText = '08. 01';
        pompomTextDivEl.appendChild(pompomMessagePEl);
        pompomTextDivEl.appendChild(pompomDatePEl);
        pompomInfoDivEl.appendChild(pompomNameStrongEl);
        pompomInfoDivEl.appendChild(pompomTextDivEl);
        pompomDivEl.appendChild(pompomImgEl);
        pompomDivEl.appendChild(pompomInfoDivEl);
        pompomLiEl.appendChild(pompomDivEl);
        userListUlEl.appendChild(pochaccoLiEl);
        userListUlEl.appendChild(keropiLiEl);
        userListUlEl.appendChild(boongboongLiEl);
        userListUlEl.appendChild(pompomLiEl);
        mainEl.appendChild(userListUlEl);
        chatWrapDivEl.appendChild(mainEl);
        // footer
        chatWrapDivEl.appendChild(footerEl);
        content.appendChild(chatWrapDivEl);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatPage);


/***/ }),

/***/ "./pages/chattingPage1.ts":
/*!********************************!*\
  !*** ./pages/chattingPage1.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _script_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script/modal */ "./script/modal.ts");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/common */ "./utils/common.ts");


class ChattingPage1 {
    render(content) {
        // header
        const headerEl = document.createElement('header');
        const heading1El = document.createElement('h1');
        const articleHeaderEl = document.createElement('article');
        const backImgEl = document.createElement('img');
        const chatUserPEl = document.createElement('p');
        const menuImgEl = document.createElement('img');
        headerEl.classList.add('chatHeader');
        heading1El.classList.add('ir');
        heading1El.innerText = '포챠코님 채팅방';
        articleHeaderEl.classList.add('headerBar');
        backImgEl.classList.add('headerBarBack');
        backImgEl.classList.add('buttonClick');
        backImgEl.setAttribute('src', '../asset/images/icons/icon__arrowLeft.svg');
        backImgEl.setAttribute('alt', '뒤로 가기');
        backImgEl.addEventListener('click', _utils_common__WEBPACK_IMPORTED_MODULE_1__.backHistory);
        chatUserPEl.classList.add('headerBarText');
        chatUserPEl.classList.add('headerBarInput');
        chatUserPEl.innerText = '포챠코';
        menuImgEl.classList.add('headerBarModal');
        menuImgEl.classList.add('headerBarBtn');
        menuImgEl.classList.add('buttonClick');
        menuImgEl.setAttribute('src', '../asset/images/icons/icon__menu.svg');
        menuImgEl.setAttribute('alt', '메뉴');
        menuImgEl.addEventListener('click', () => {
            (0,_script_modal__WEBPACK_IMPORTED_MODULE_0__.clickChatModal)();
        });
        articleHeaderEl.appendChild(backImgEl);
        articleHeaderEl.appendChild(chatUserPEl);
        articleHeaderEl.appendChild(menuImgEl);
        headerEl.appendChild(heading1El);
        headerEl.appendChild(articleHeaderEl);
        // main
        const mainEl = document.createElement('main');
        const chatIn1ArticleEl = document.createElement('article');
        const chatIn1ProfileImgEl = document.createElement('img');
        const chatIn1SectionEl = document.createElement('section');
        const chatIn1TextPEl = document.createElement('p');
        const chatIn1DatePEl = document.createElement('p');
        mainEl.classList.add('chatScreen');
        chatIn1ArticleEl.classList.add('chatMsg');
        chatIn1ArticleEl.classList.add('chatIncommingMsg');
        chatIn1ProfileImgEl.setAttribute('src', '../asset/images/user/pochacco.png');
        chatIn1ProfileImgEl.setAttribute('alt', '프로필 이미지');
        chatIn1ProfileImgEl.classList.add('userProfileImage');
        chatIn1SectionEl.classList.add('chatMsgContent');
        chatIn1TextPEl.classList.add('chatMsgText');
        chatIn1TextPEl.innerText = '안녕하세요!';
        chatIn1DatePEl.classList.add('chatMsgDate');
        chatIn1DatePEl.innerText = '12:39';
        chatIn1SectionEl.appendChild(chatIn1TextPEl);
        chatIn1SectionEl.appendChild(chatIn1DatePEl);
        chatIn1ArticleEl.appendChild(chatIn1ProfileImgEl);
        chatIn1ArticleEl.appendChild(chatIn1SectionEl);
        const chatIn2ArticleEl = document.createElement('article');
        const chatIn2ProfileImgEl = document.createElement('img');
        const chatIn2SectionEl = document.createElement('section');
        const chatIn2TextPEl = document.createElement('p');
        const chatIn2DatePEl = document.createElement('p');
        chatIn2ArticleEl.classList.add('chatMsg');
        chatIn2ArticleEl.classList.add('chatIncommingMsg');
        chatIn2ProfileImgEl.setAttribute('src', '../asset/images/user/pochacco.png');
        chatIn2ProfileImgEl.setAttribute('alt', '프로필 이미지');
        chatIn2ProfileImgEl.classList.add('userProfileImage');
        chatIn2SectionEl.classList.add('chatMsgContent');
        chatIn2TextPEl.classList.add('chatMsgText');
        chatIn2TextPEl.innerText = '당근 뽑기 알바 지원 하셨죠?';
        chatIn2DatePEl.classList.add('chatMsgDate');
        chatIn2DatePEl.innerText = '12:41';
        chatIn2SectionEl.appendChild(chatIn2TextPEl);
        chatIn2SectionEl.appendChild(chatIn2DatePEl);
        chatIn2ArticleEl.appendChild(chatIn2ProfileImgEl);
        chatIn2ArticleEl.appendChild(chatIn2SectionEl);
        const chatOut1ArticleEl = document.createElement('article');
        const chatOut1SectionEl = document.createElement('section');
        const chatOut1TextPEl = document.createElement('p');
        const chatOut1DatePEl = document.createElement('p');
        chatOut1ArticleEl.classList.add('chatMsg');
        chatOut1ArticleEl.classList.add('chatOutgoingMsg');
        chatOut1SectionEl.classList.add('chatMsgContent');
        chatOut1TextPEl.classList.add('chatMsgText');
        chatOut1TextPEl.innerText = '네! 제가 준비된 농부 입니다. 🧑🏻‍🌾';
        chatOut1DatePEl.classList.add('chatMsgDate');
        chatOut1DatePEl.innerText = '12:49';
        chatOut1SectionEl.appendChild(chatOut1TextPEl);
        chatOut1SectionEl.appendChild(chatOut1DatePEl);
        chatOut1ArticleEl.appendChild(chatOut1SectionEl);
        const chatIn3ArticleEl = document.createElement('article');
        const chatIn3ProfileImgEl = document.createElement('img');
        const chatIn3SectionEl = document.createElement('section');
        const chatIn3TextPEl = document.createElement('p');
        const chatIn3DatePEl = document.createElement('p');
        chatIn3ArticleEl.classList.add('chatMsg');
        chatIn3ArticleEl.classList.add('chatIncommingMsg');
        chatIn3ProfileImgEl.setAttribute('src', '../asset/images/user/pochacco.png');
        chatIn3ProfileImgEl.setAttribute('alt', '프로필 이미지');
        chatIn3ProfileImgEl.classList.add('userProfileImage');
        chatIn3SectionEl.classList.add('chatMsgContent');
        chatIn3TextPEl.classList.add('chatMsgText');
        chatIn3TextPEl.innerText = '당근 뽑기 해보신 적 있나요? 😆';
        chatIn3DatePEl.classList.add('chatMsgDate');
        chatIn3DatePEl.innerText = '12:51';
        chatIn3SectionEl.appendChild(chatIn3TextPEl);
        chatIn3SectionEl.appendChild(chatIn3DatePEl);
        chatIn3ArticleEl.appendChild(chatIn3ProfileImgEl);
        chatIn3ArticleEl.appendChild(chatIn3SectionEl);
        const chatOut2ArticleEl = document.createElement('article');
        const chatOut2SectionEl = document.createElement('section');
        const chatOut2TextPEl = document.createElement('p');
        const chatOut2DatePEl = document.createElement('p');
        chatOut2ArticleEl.classList.add('chatMsg');
        chatOut2ArticleEl.classList.add('chatOutgoingMsg');
        chatOut2SectionEl.classList.add('chatMsgContent');
        chatOut2TextPEl.classList.add('chatMsgText');
        chatOut2TextPEl.innerText = '사실 없습니다 😅';
        chatOut2DatePEl.classList.add('chatMsgDate');
        chatOut2DatePEl.innerText = '12:55';
        chatOut2SectionEl.appendChild(chatOut2TextPEl);
        chatOut2SectionEl.appendChild(chatOut2DatePEl);
        chatOut2ArticleEl.appendChild(chatOut2SectionEl);
        mainEl.appendChild(chatIn1ArticleEl);
        mainEl.appendChild(chatIn2ArticleEl);
        mainEl.appendChild(chatOut1ArticleEl);
        mainEl.appendChild(chatIn3ArticleEl);
        mainEl.appendChild(chatOut2ArticleEl);
        // footer
        const footerEl = document.createElement('footer');
        const chatImgFormEl = document.createElement('form');
        const chatLabelEl = document.createElement('label');
        const uploadImgEl = document.createElement('img');
        const selectImgInputEl = document.createElement('input');
        const chatTextFormEl = document.createElement('form');
        const chatTextInputEl = document.createElement('input');
        const chatBtnEl = document.createElement('button');
        footerEl.classList.add('chatEnter');
        chatImgFormEl.classList.add('chatEnterImage');
        chatLabelEl.classList.add('chatSelectImage');
        uploadImgEl.setAttribute('src', '../asset/images/icons/icon__imagesUplode.svg');
        uploadImgEl.setAttribute('alt', '');
        selectImgInputEl.id = 'chatSelectImage';
        selectImgInputEl.setAttribute('type', 'file');
        selectImgInputEl.accept = 'image/*';
        chatTextFormEl.classList.add('chatEnterContent');
        chatTextInputEl.placeholder = '메시지 입력하기...';
        chatTextInputEl.type = 'text';
        chatTextInputEl.maxLength = 100;
        chatBtnEl.type = 'button';
        chatBtnEl.innerText = '전송';
        chatTextFormEl.appendChild(chatTextInputEl);
        chatTextFormEl.appendChild(chatBtnEl);
        chatLabelEl.appendChild(uploadImgEl);
        chatImgFormEl.appendChild(chatLabelEl);
        chatImgFormEl.appendChild(selectImgInputEl);
        footerEl.appendChild(chatImgFormEl);
        footerEl.appendChild(chatTextFormEl);
        content.appendChild(headerEl);
        content.appendChild(mainEl);
        content.appendChild(footerEl);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChattingPage1);


/***/ }),

/***/ "./pages/chattingPage2.ts":
/*!********************************!*\
  !*** ./pages/chattingPage2.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _script_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script/modal */ "./script/modal.ts");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/common */ "./utils/common.ts");


class ChattingPage2 {
    render(content) {
        // header
        const headerEl = document.createElement('header');
        const heading1El = document.createElement('h1');
        const articleHeaderEl = document.createElement('article');
        const backImgEl = document.createElement('img');
        const chatUserPEl = document.createElement('p');
        const menuImgEl = document.createElement('img');
        headerEl.classList.add('chatHeader');
        heading1El.classList.add('ir');
        heading1El.innerText = '케로피님 채팅방';
        articleHeaderEl.classList.add('headerBar');
        backImgEl.classList.add('headerBarBack');
        backImgEl.classList.add('buttonClick');
        backImgEl.setAttribute('src', '../asset/images/icons/icon__arrowLeft.svg');
        backImgEl.setAttribute('alt', '뒤로 가기');
        backImgEl.addEventListener('click', _utils_common__WEBPACK_IMPORTED_MODULE_1__.backHistory);
        chatUserPEl.classList.add('headerBarText');
        chatUserPEl.classList.add('headerBarInput');
        chatUserPEl.innerText = '케로피';
        menuImgEl.classList.add('headerBarModal');
        menuImgEl.classList.add('headerBarBtn');
        menuImgEl.classList.add('buttonClick');
        menuImgEl.setAttribute('src', '../asset/images/icons/icon__menu.svg');
        menuImgEl.setAttribute('alt', '메뉴');
        menuImgEl.addEventListener('click', () => {
            (0,_script_modal__WEBPACK_IMPORTED_MODULE_0__.clickChatModal)();
        });
        articleHeaderEl.appendChild(backImgEl);
        articleHeaderEl.appendChild(chatUserPEl);
        articleHeaderEl.appendChild(menuImgEl);
        headerEl.appendChild(heading1El);
        headerEl.appendChild(articleHeaderEl);
        // main
        const mainEl = document.createElement('main');
        const chatIn1ArticleEl = document.createElement('article');
        const chatIn1ProfileImgEl = document.createElement('img');
        const chatIn1SectionEl = document.createElement('section');
        const chatIn1TextPEl = document.createElement('p');
        const chatIn1DatePEl = document.createElement('p');
        mainEl.classList.add('chatScreen');
        chatIn1ArticleEl.classList.add('chatMsg');
        chatIn1ArticleEl.classList.add('chatIncommingMsg');
        chatIn1ProfileImgEl.setAttribute('src', '../asset/images/user/keropi.jpeg');
        chatIn1ProfileImgEl.setAttribute('alt', '프로필 이미지');
        chatIn1ProfileImgEl.classList.add('userProfileImage');
        chatIn1SectionEl.classList.add('chatMsgContent');
        chatIn1TextPEl.classList.add('chatMsgText');
        chatIn1TextPEl.innerText =
            '안녕하세요! 코인 세탁방 같이 가주실래요? 제가 이 동네에 이사 온 지 얼마 안 돼서 지리를 잘 모르거든요 😅 이불 빨래도 도와주시면 감사하겠습니다!';
        chatIn1DatePEl.classList.add('chatMsgDate');
        chatIn1DatePEl.innerText = '12:39';
        chatIn1SectionEl.appendChild(chatIn1TextPEl);
        chatIn1SectionEl.appendChild(chatIn1DatePEl);
        chatIn1ArticleEl.appendChild(chatIn1ProfileImgEl);
        chatIn1ArticleEl.appendChild(chatIn1SectionEl);
        const chatOut1ArticleEl = document.createElement('article');
        const chatOut1SectionEl = document.createElement('section');
        const chatOut1TextPEl = document.createElement('p');
        const chatOut1DatePEl = document.createElement('p');
        chatOut1ArticleEl.classList.add('chatMsg');
        chatOut1ArticleEl.classList.add('chatOutgoingMsg');
        chatOut1SectionEl.classList.add('chatMsgContent');
        chatOut1TextPEl.classList.add('chatMsgText');
        chatOut1TextPEl.innerText =
            '제가 자주 가는 코인 세탁방으로 가도 될까요? 역 앞 사거리에 있는 코코 코인 세탁방이에요!';
        chatOut1DatePEl.classList.add('chatMsgDate');
        chatOut1DatePEl.innerText = '12:55';
        chatOut1SectionEl.appendChild(chatOut1TextPEl);
        chatOut1SectionEl.appendChild(chatOut1DatePEl);
        chatOut1ArticleEl.appendChild(chatOut1SectionEl);
        const chatIn2ArticleEl = document.createElement('article');
        const chatIn2ProfileImgEl = document.createElement('img');
        const chatIn2SectionEl = document.createElement('section');
        const chatIn2TextPEl = document.createElement('p');
        const chatIn2DatePEl = document.createElement('p');
        chatIn2ArticleEl.classList.add('chatMsg');
        chatIn2ArticleEl.classList.add('chatIncommingMsg');
        chatIn2ProfileImgEl.setAttribute('src', '../asset/images/user/keropi.jpeg');
        chatIn2ProfileImgEl.setAttribute('alt', '프로필 이미지');
        chatIn2ProfileImgEl.classList.add('userProfileImage');
        chatIn2SectionEl.classList.add('chatMsgContent');
        chatIn2TextPEl.classList.add('chatMsgText');
        chatIn2TextPEl.innerText = '당연하죠! 이따 거기서 뵙겠습니다.';
        chatIn2DatePEl.classList.add('chatMsgDate');
        chatIn2DatePEl.innerText = '12:58';
        chatIn2SectionEl.appendChild(chatIn2TextPEl);
        chatIn2SectionEl.appendChild(chatIn2DatePEl);
        chatIn2ArticleEl.appendChild(chatIn2ProfileImgEl);
        chatIn2ArticleEl.appendChild(chatIn2SectionEl);
        mainEl.appendChild(chatIn1ArticleEl);
        mainEl.appendChild(chatOut1ArticleEl);
        mainEl.appendChild(chatIn2ArticleEl);
        // footer
        const footerEl = document.createElement('footer');
        const chatImgFormEl = document.createElement('form');
        const chatLabelEl = document.createElement('label');
        const uploadImgEl = document.createElement('img');
        const selectImgInputEl = document.createElement('input');
        const chatTextFormEl = document.createElement('form');
        const chatTextInputEl = document.createElement('input');
        const chatBtnEl = document.createElement('button');
        footerEl.classList.add('chatEnter');
        chatImgFormEl.classList.add('chatEnterImage');
        chatLabelEl.classList.add('chatSelectImage');
        uploadImgEl.setAttribute('src', '../asset/images/icons/icon__imagesUplode.svg');
        uploadImgEl.setAttribute('alt', '');
        selectImgInputEl.id = 'chatSelectImage';
        selectImgInputEl.setAttribute('type', 'file');
        selectImgInputEl.accept = 'image/*';
        chatTextFormEl.classList.add('chatEnterContent');
        chatTextInputEl.placeholder = '메시지 입력하기...';
        chatTextInputEl.type = 'text';
        chatTextInputEl.maxLength = 100;
        chatBtnEl.type = 'button';
        chatBtnEl.innerText = '전송';
        chatTextFormEl.appendChild(chatTextInputEl);
        chatTextFormEl.appendChild(chatBtnEl);
        chatLabelEl.appendChild(uploadImgEl);
        chatImgFormEl.appendChild(chatLabelEl);
        chatImgFormEl.appendChild(selectImgInputEl);
        footerEl.appendChild(chatImgFormEl);
        footerEl.appendChild(chatTextFormEl);
        content.appendChild(headerEl);
        content.appendChild(mainEl);
        content.appendChild(footerEl);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChattingPage2);


/***/ }),

/***/ "./pages/chattingPage3.ts":
/*!********************************!*\
  !*** ./pages/chattingPage3.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _script_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script/modal */ "./script/modal.ts");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/common */ "./utils/common.ts");


class ChattingPage3 {
    render(content) {
        // header
        const headerEl = document.createElement('header');
        const heading1El = document.createElement('h1');
        const articleHeaderEl = document.createElement('article');
        const backImgEl = document.createElement('img');
        const chatUserPEl = document.createElement('p');
        const menuImgEl = document.createElement('img');
        headerEl.classList.add('chatHeader');
        heading1El.classList.add('ir');
        heading1El.innerText = '붕붕님 채팅방';
        articleHeaderEl.classList.add('headerBar');
        backImgEl.classList.add('headerBarBack');
        backImgEl.classList.add('buttonClick');
        backImgEl.setAttribute('src', '../asset/images/icons/icon__arrowLeft.svg');
        backImgEl.setAttribute('alt', '뒤로 가기');
        backImgEl.addEventListener('click', _utils_common__WEBPACK_IMPORTED_MODULE_1__.backHistory);
        chatUserPEl.classList.add('headerBarText');
        chatUserPEl.classList.add('headerBarInput');
        chatUserPEl.innerText = '붕붕';
        menuImgEl.classList.add('headerBarModal');
        menuImgEl.classList.add('headerBarBtn');
        menuImgEl.classList.add('buttonClick');
        menuImgEl.setAttribute('src', '../asset/images/icons/icon__menu.svg');
        menuImgEl.setAttribute('alt', '메뉴');
        menuImgEl.addEventListener('click', () => {
            (0,_script_modal__WEBPACK_IMPORTED_MODULE_0__.clickChatModal)();
        });
        articleHeaderEl.appendChild(backImgEl);
        articleHeaderEl.appendChild(chatUserPEl);
        articleHeaderEl.appendChild(menuImgEl);
        headerEl.appendChild(heading1El);
        headerEl.appendChild(articleHeaderEl);
        // main
        const mainEl = document.createElement('main');
        const chatIn1ArticleEl = document.createElement('article');
        const chatIn1ProfileImgEl = document.createElement('img');
        const chatIn1SectionEl = document.createElement('section');
        const chatIn1TextPEl = document.createElement('p');
        const chatIn1DatePEl = document.createElement('p');
        mainEl.classList.add('chatScreen');
        chatIn1ArticleEl.classList.add('chatMsg');
        chatIn1ArticleEl.classList.add('chatIncommingMsg');
        chatIn1ProfileImgEl.setAttribute('src', '../asset/images/basic-profile.svg');
        chatIn1ProfileImgEl.setAttribute('alt', '프로필 이미지');
        chatIn1ProfileImgEl.classList.add('userProfileImage');
        chatIn1SectionEl.classList.add('chatMsgContent');
        chatIn1TextPEl.classList.add('chatMsgText');
        chatIn1TextPEl.innerText =
            '내 차는 내가 평가한다. 오픈 이벤트 참여하고 경품 받아가세요! ⬇️ 무료 상담 ✨ www.zzzgozldekdgka.com';
        chatIn1DatePEl.classList.add('chatMsgDate');
        chatIn1DatePEl.innerText = '12:39';
        chatIn1SectionEl.appendChild(chatIn1TextPEl);
        chatIn1SectionEl.appendChild(chatIn1DatePEl);
        chatIn1ArticleEl.appendChild(chatIn1ProfileImgEl);
        chatIn1ArticleEl.appendChild(chatIn1SectionEl);
        mainEl.appendChild(chatIn1ArticleEl);
        // footer
        const footerEl = document.createElement('footer');
        const chatImgFormEl = document.createElement('form');
        const chatLabelEl = document.createElement('label');
        const uploadImgEl = document.createElement('img');
        const selectImgInputEl = document.createElement('input');
        const chatTextFormEl = document.createElement('form');
        const chatTextInputEl = document.createElement('input');
        const chatBtnEl = document.createElement('button');
        footerEl.classList.add('chatEnter');
        chatImgFormEl.classList.add('chatEnterImage');
        chatLabelEl.classList.add('chatSelectImage');
        uploadImgEl.setAttribute('src', '../asset/images/icons/icon__imagesUplode.svg');
        uploadImgEl.setAttribute('alt', '');
        selectImgInputEl.id = 'chatSelectImage';
        selectImgInputEl.setAttribute('type', 'file');
        selectImgInputEl.accept = 'image/*';
        chatTextFormEl.classList.add('chatEnterContent');
        chatTextInputEl.placeholder = '메시지 입력하기...';
        chatTextInputEl.type = 'text';
        chatTextInputEl.maxLength = 100;
        chatBtnEl.type = 'button';
        chatBtnEl.innerText = '전송';
        chatTextFormEl.appendChild(chatTextInputEl);
        chatTextFormEl.appendChild(chatBtnEl);
        chatLabelEl.appendChild(uploadImgEl);
        chatImgFormEl.appendChild(chatLabelEl);
        chatImgFormEl.appendChild(selectImgInputEl);
        footerEl.appendChild(chatImgFormEl);
        footerEl.appendChild(chatTextFormEl);
        content.appendChild(headerEl);
        content.appendChild(mainEl);
        content.appendChild(footerEl);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChattingPage3);


/***/ }),

/***/ "./pages/chattingPage4.ts":
/*!********************************!*\
  !*** ./pages/chattingPage4.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _script_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script/modal */ "./script/modal.ts");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/common */ "./utils/common.ts");


class ChattingPage4 {
    render(content) {
        // header
        const headerEl = document.createElement('header');
        const heading1El = document.createElement('h1');
        const articleHeaderEl = document.createElement('article');
        const backImgEl = document.createElement('img');
        const chatUserPEl = document.createElement('p');
        const menuImgEl = document.createElement('img');
        headerEl.classList.add('chatHeader');
        heading1El.classList.add('ir');
        heading1El.innerText = '폼폼님 채팅방';
        articleHeaderEl.classList.add('headerBar');
        backImgEl.classList.add('headerBarBack');
        backImgEl.classList.add('buttonClick');
        backImgEl.setAttribute('src', '../asset/images/icons/icon__arrowLeft.svg');
        backImgEl.setAttribute('alt', '뒤로 가기');
        backImgEl.addEventListener('click', _utils_common__WEBPACK_IMPORTED_MODULE_1__.backHistory);
        chatUserPEl.classList.add('headerBarText');
        chatUserPEl.classList.add('headerBarInput');
        chatUserPEl.innerText = '폼폼';
        menuImgEl.classList.add('headerBarModal');
        menuImgEl.classList.add('headerBarBtn');
        menuImgEl.classList.add('buttonClick');
        menuImgEl.setAttribute('src', '../asset/images/icons/icon__menu.svg');
        menuImgEl.setAttribute('alt', '메뉴');
        menuImgEl.addEventListener('click', () => {
            (0,_script_modal__WEBPACK_IMPORTED_MODULE_0__.clickChatModal)();
        });
        articleHeaderEl.appendChild(backImgEl);
        articleHeaderEl.appendChild(chatUserPEl);
        articleHeaderEl.appendChild(menuImgEl);
        headerEl.appendChild(heading1El);
        headerEl.appendChild(articleHeaderEl);
        // main
        const mainEl = document.createElement('main');
        const chatIn1ArticleEl = document.createElement('article');
        const chatIn1ProfileImgEl = document.createElement('img');
        const chatIn1SectionEl = document.createElement('section');
        const chatIn1TextPEl = document.createElement('p');
        const chatIn1DatePEl = document.createElement('p');
        mainEl.classList.add('chatScreen');
        chatIn1ArticleEl.classList.add('chatMsg');
        chatIn1ArticleEl.classList.add('chatIncommingMsg');
        chatIn1ProfileImgEl.setAttribute('src', '../asset/images/user/pompom.jpeg');
        chatIn1ProfileImgEl.setAttribute('alt', '프로필 이미지');
        chatIn1ProfileImgEl.classList.add('userProfileImage');
        chatIn1SectionEl.classList.add('chatMsgContent');
        chatIn1TextPEl.classList.add('chatMsgText');
        chatIn1TextPEl.innerText = '반려견 산책 지원하셨조?';
        chatIn1DatePEl.classList.add('chatMsgDate');
        chatIn1DatePEl.innerText = '15:39';
        chatIn1SectionEl.appendChild(chatIn1TextPEl);
        chatIn1SectionEl.appendChild(chatIn1DatePEl);
        chatIn1ArticleEl.appendChild(chatIn1ProfileImgEl);
        chatIn1ArticleEl.appendChild(chatIn1SectionEl);
        const chatOut1ArticleEl = document.createElement('article');
        const chatOut1SectionEl = document.createElement('section');
        const chatOut1TextPEl = document.createElement('p');
        const chatOut1DatePEl = document.createElement('p');
        chatOut1ArticleEl.classList.add('chatMsg');
        chatOut1ArticleEl.classList.add('chatOutgoingMsg');
        chatOut1SectionEl.classList.add('chatMsgContent');
        chatOut1TextPEl.classList.add('chatMsgText');
        chatOut1TextPEl.innerText = '네! 제가 바로 강형욱 훈련사님 입니다.';
        chatOut1DatePEl.classList.add('chatMsgDate');
        chatOut1DatePEl.innerText = '16:05';
        chatOut1SectionEl.appendChild(chatOut1TextPEl);
        chatOut1SectionEl.appendChild(chatOut1DatePEl);
        chatOut1ArticleEl.appendChild(chatOut1SectionEl);
        const chatIn2ArticleEl = document.createElement('article');
        const chatIn2ProfileImgEl = document.createElement('img');
        const chatIn2SectionEl = document.createElement('section');
        const chatIn2TextPEl = document.createElement('p');
        const chatIn2DatePEl = document.createElement('p');
        chatIn2ArticleEl.classList.add('chatMsg');
        chatIn2ArticleEl.classList.add('chatIncommingMsg');
        chatIn2ProfileImgEl.setAttribute('src', '../asset/images/user/pompom.jpeg');
        chatIn2ProfileImgEl.setAttribute('alt', '프로필 이미지');
        chatIn2ProfileImgEl.classList.add('userProfileImage');
        chatIn2SectionEl.classList.add('chatMsgContent');
        chatIn2TextPEl.classList.add('chatMsgText');
        chatIn2TextPEl.innerText = '네?';
        chatIn2DatePEl.classList.add('chatMsgDate');
        chatIn2DatePEl.innerText = '16:18';
        chatIn2SectionEl.appendChild(chatIn2TextPEl);
        chatIn2SectionEl.appendChild(chatIn2DatePEl);
        chatIn2ArticleEl.appendChild(chatIn2ProfileImgEl);
        chatIn2ArticleEl.appendChild(chatIn2SectionEl);
        mainEl.appendChild(chatIn1ArticleEl);
        mainEl.appendChild(chatOut1ArticleEl);
        mainEl.appendChild(chatIn2ArticleEl);
        // footer
        const footerEl = document.createElement('footer');
        const chatImgFormEl = document.createElement('form');
        const chatLabelEl = document.createElement('label');
        const uploadImgEl = document.createElement('img');
        const selectImgInputEl = document.createElement('input');
        const chatTextFormEl = document.createElement('form');
        const chatTextInputEl = document.createElement('input');
        const chatBtnEl = document.createElement('button');
        footerEl.classList.add('chatEnter');
        chatImgFormEl.classList.add('chatEnterImage');
        chatLabelEl.classList.add('chatSelectImage');
        uploadImgEl.setAttribute('src', '../asset/images/icons/icon__imagesUplode.svg');
        uploadImgEl.setAttribute('alt', '');
        selectImgInputEl.id = 'chatSelectImage';
        selectImgInputEl.setAttribute('type', 'file');
        selectImgInputEl.accept = 'image/*';
        chatTextFormEl.classList.add('chatEnterContent');
        chatTextInputEl.placeholder = '메시지 입력하기...';
        chatTextInputEl.type = 'text';
        chatTextInputEl.maxLength = 100;
        chatBtnEl.type = 'button';
        chatBtnEl.innerText = '전송';
        chatTextFormEl.appendChild(chatTextInputEl);
        chatTextFormEl.appendChild(chatBtnEl);
        chatLabelEl.appendChild(uploadImgEl);
        chatImgFormEl.appendChild(chatLabelEl);
        chatImgFormEl.appendChild(selectImgInputEl);
        footerEl.appendChild(chatImgFormEl);
        footerEl.appendChild(chatTextFormEl);
        content.appendChild(headerEl);
        content.appendChild(mainEl);
        content.appendChild(footerEl);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChattingPage4);


/***/ }),

/***/ "./pages/editProfilePage.ts":
/*!**********************************!*\
  !*** ./pages/editProfilePage.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _script_editProfile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script/editProfile */ "./script/editProfile.ts");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/common */ "./utils/common.ts");


class EditProfilePage {
    render(content) {
        document.querySelector('body').classList.remove('profileBackground');
        // header
        const headerEl = document.createElement('header');
        const headerBarArticleEl = document.createElement('article');
        const backImgEl = document.createElement('img');
        const saveBtnEl = document.createElement('button');
        headerBarArticleEl.classList.add('headerBar');
        backImgEl.classList.add('headerBarBack');
        backImgEl.classList.add('buttonClick');
        backImgEl.setAttribute('src', '../asset/images/icons/icon__arrowLeft.svg');
        backImgEl.setAttribute('alt', '뒤로 가기');
        backImgEl.addEventListener('click', _utils_common__WEBPACK_IMPORTED_MODULE_1__.backHistory);
        saveBtnEl.setAttribute('type', 'button');
        saveBtnEl.classList.add('headerBarSettingBtn');
        saveBtnEl.classList.add('headerBarBtn');
        saveBtnEl.classList.add('buttonClick');
        saveBtnEl.innerText = '저장';
        headerBarArticleEl.appendChild(backImgEl);
        headerBarArticleEl.appendChild(saveBtnEl);
        headerEl.appendChild(headerBarArticleEl);
        // main
        const mainEl = document.createElement('main');
        const imgFormEl = document.createElement('form');
        const imgLabelEl = document.createElement('label');
        const updateImgEl = document.createElement('img');
        const uploadImgEl = document.createElement('img');
        const imgUpdateInputEl = document.createElement('input');
        imgFormEl.classList.add('updateProfileImg');
        imgLabelEl.classList.add('profileImgBtn');
        imgLabelEl.setAttribute('for', 'updateUserProfileImg');
        updateImgEl.classList.add('updateUserImg');
        updateImgEl.setAttribute('src', '../asset/images/basic-profile.svg');
        updateImgEl.setAttribute('alt', '사용자 이미지 수정');
        uploadImgEl.classList.add('imgUploadBtn');
        uploadImgEl.setAttribute('src', '../asset/images/icons/icon__imagesUplodeFill.svg');
        uploadImgEl.setAttribute('alt', '이미지 수정');
        imgUpdateInputEl.setAttribute('type', 'file');
        imgUpdateInputEl.setAttribute('accept', 'image/*');
        imgUpdateInputEl.id = 'updateUserProfileImg';
        imgLabelEl.appendChild(updateImgEl);
        imgLabelEl.appendChild(uploadImgEl);
        imgFormEl.appendChild(imgLabelEl);
        imgFormEl.appendChild(imgUpdateInputEl);
        mainEl.appendChild(imgFormEl);
        const editFromEl = document.createElement('form');
        const nameLabelEl = document.createElement('label');
        const nameInputEl = document.createElement('input');
        const idLabelEl = document.createElement('label');
        const idInputEl = document.createElement('input');
        const alertPEl = document.createElement('p');
        const introLabelEl = document.createElement('label');
        const introInputEl = document.createElement('input');
        editFromEl.classList.add('logInForm');
        editFromEl.classList.add('registerForm');
        editFromEl.classList.add('profileModificationForm');
        editFromEl.setAttribute('method', 'get');
        editFromEl.id = 'profileSaveForm';
        nameLabelEl.classList.add('registerFormLabel');
        nameLabelEl.classList.add('profileModificationFormlabel');
        nameLabelEl.setAttribute('for', 'name');
        nameLabelEl.innerText = '사용자 이름';
        nameInputEl.id = 'name';
        nameInputEl.setAttribute('type', 'text');
        nameInputEl.required = true;
        nameInputEl.placeholder = '2~10자 이내여야 합니다.';
        nameInputEl.maxLength = 10;
        nameInputEl.minLength = 2;
        idLabelEl.classList.add('registerFormLabel');
        idLabelEl.classList.add('profileModificationFormlabel');
        idLabelEl.setAttribute('for', 'email');
        idLabelEl.innerText = '계정 ID';
        idInputEl.id = 'id';
        idInputEl.setAttribute('type', 'text');
        idInputEl.minLength = 2;
        idInputEl.maxLength = 10;
        idInputEl.required = true;
        idInputEl.placeholder = '영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.';
        alertPEl.classList.add('alertMessage');
        alertPEl.innerText = '*영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.';
        introLabelEl.classList.add('registerFormLabel');
        introLabelEl.classList.add('profileModificationFormlabel');
        introLabelEl.setAttribute('for', 'introduce');
        introLabelEl.innerText = '소개';
        introInputEl.id = 'introduce';
        introInputEl.setAttribute('type', 'text');
        introInputEl.required = true;
        introInputEl.placeholder = '자신과 판매할 상품에 대한 소개해 주세요!';
        introInputEl.maxLength = 50;
        introInputEl.minLength = 2;
        editFromEl.appendChild(nameLabelEl);
        editFromEl.appendChild(nameInputEl);
        editFromEl.appendChild(idLabelEl);
        editFromEl.appendChild(idInputEl);
        editFromEl.appendChild(alertPEl);
        editFromEl.appendChild(introLabelEl);
        editFromEl.appendChild(introInputEl);
        mainEl.appendChild(editFromEl);
        // 프로필 수정 기능 구현
        (0,_script_editProfile__WEBPACK_IMPORTED_MODULE_0__.getProfileInfo)(updateImgEl, nameInputEl, idInputEl, introInputEl);
        imgUpdateInputEl.addEventListener('change', _script_editProfile__WEBPACK_IMPORTED_MODULE_0__.imageChange);
        nameInputEl.addEventListener('keyup', () => (0,_script_editProfile__WEBPACK_IMPORTED_MODULE_0__.profileChangeInput)(saveBtnEl));
        idInputEl.addEventListener('keyup', () => (0,_script_editProfile__WEBPACK_IMPORTED_MODULE_0__.profileChangeInput)(saveBtnEl));
        introInputEl.addEventListener('keyup', () => (0,_script_editProfile__WEBPACK_IMPORTED_MODULE_0__.profileChangeInput)(saveBtnEl));
        saveBtnEl.addEventListener('click', () => {
            (0,_script_editProfile__WEBPACK_IMPORTED_MODULE_0__.clickSaveButton)(updateImgEl);
        });
        content.appendChild(headerEl);
        content.appendChild(mainEl);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditProfilePage);


/***/ }),

/***/ "./pages/errorPage.ts":
/*!****************************!*\
  !*** ./pages/errorPage.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common */ "./utils/common.ts");

class ErrorPage {
    render(content) {
        document.querySelector('body').classList.remove('profileBackground');
        const wrapEl = document.createElement('div');
        wrapEl.classList.add('wrap');
        // header
        const headerEl = document.createElement('header');
        const heading1El = document.createElement('h1');
        const errorImgEl = document.createElement('img');
        const engTitleEl = document.createElement('h2');
        const korTitleEl = document.createElement('h2');
        heading1El.classList.add('ir');
        heading1El.innerText = '페이지를 찾을 수 없습니다';
        errorImgEl.id = 'timi';
        errorImgEl.setAttribute('src', '../asset/images/Not-Found.svg');
        errorImgEl.setAttribute('alt', '티미');
        engTitleEl.classList.add('specialSituationTitle');
        engTitleEl.classList.add('title');
        engTitleEl.innerText = 'Not Found 404';
        korTitleEl.classList.add('specialSituationTitle');
        korTitleEl.classList.add('title');
        korTitleEl.classList.add('subtitle');
        korTitleEl.innerText = '페이지를 찾을 수 없습니다 :(';
        headerEl.appendChild(heading1El);
        headerEl.appendChild(errorImgEl);
        headerEl.appendChild(engTitleEl);
        headerEl.appendChild(korTitleEl);
        // main
        const mainEl = document.createElement('main');
        const backBtnEl = document.createElement('button');
        backBtnEl.classList.add('backBtn');
        backBtnEl.classList.add('buttonClick');
        backBtnEl.setAttribute('type', 'submit');
        backBtnEl.innerText = '<- 이전 페이지로 돌아가기';
        backBtnEl.addEventListener('click', _utils_common__WEBPACK_IMPORTED_MODULE_0__.backHistory);
        mainEl.appendChild(backBtnEl);
        wrapEl.appendChild(headerEl);
        wrapEl.appendChild(mainEl);
        content.appendChild(wrapEl);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorPage);


/***/ }),

/***/ "./pages/footer.ts":
/*!*************************!*\
  !*** ./pages/footer.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Footer {
    render() {
        //footer
        const footerEl = document.createElement('footer');
        const navBarEl = document.createElement('nav');
        const ulEl = document.createElement('ul');
        navBarEl.classList.add('navBar');
        ulEl.classList.add('navList');
        // 홈
        const homeliEl = document.createElement('li');
        const homeDivEl = document.createElement('div');
        const homeArticleEl = document.createElement('article');
        const homePEl = document.createElement('p');
        homeDivEl.classList.add('nav');
        homeDivEl.addEventListener('click', clickHome);
        homeArticleEl.classList.add('navIcon');
        homeArticleEl.classList.add('navHome');
        homePEl.classList.add('navText');
        homePEl.innerText = '홈';
        homeDivEl.appendChild(homeArticleEl);
        homeDivEl.appendChild(homePEl);
        homeliEl.appendChild(homeDivEl);
        ulEl.appendChild(homeliEl);
        // 채팅
        const chatliEl = document.createElement('li');
        const chatDivEl = document.createElement('div');
        const chatArticleEl = document.createElement('article');
        const chatPEl = document.createElement('p');
        chatDivEl.classList.add('nav');
        chatDivEl.addEventListener('click', clickChat);
        chatArticleEl.classList.add('navIcon');
        chatArticleEl.classList.add('navChat');
        chatPEl.classList.add('navText');
        chatPEl.innerText = '채팅';
        chatDivEl.appendChild(chatArticleEl);
        chatDivEl.appendChild(chatPEl);
        chatliEl.appendChild(chatDivEl);
        ulEl.appendChild(chatliEl);
        // 포스트
        const postliEl = document.createElement('li');
        const postDivEl = document.createElement('div');
        const postArticleEl = document.createElement('article');
        const postPEl = document.createElement('p');
        postDivEl.classList.add('nav');
        postDivEl.addEventListener('click', clickPost);
        postArticleEl.classList.add('navIcon');
        postArticleEl.classList.add('navPosting');
        postPEl.classList.add('navText');
        postPEl.innerText = '게시물 작성';
        postDivEl.appendChild(postArticleEl);
        postDivEl.appendChild(postPEl);
        postliEl.appendChild(postDivEl);
        ulEl.appendChild(postliEl);
        // 프로필
        const profileliEl = document.createElement('li');
        const profileDivEl = document.createElement('div');
        const profileArticleEl = document.createElement('article');
        const profilePEl = document.createElement('p');
        profileDivEl.classList.add('nav');
        profileDivEl.addEventListener('click', clickProfile);
        profileArticleEl.classList.add('navIcon');
        profileArticleEl.classList.add('navProfile');
        profilePEl.classList.add('navText');
        profilePEl.innerText = '프로필';
        profileDivEl.appendChild(profileArticleEl);
        profileDivEl.appendChild(profilePEl);
        profileliEl.appendChild(profileDivEl);
        ulEl.appendChild(profileliEl);
        navBarEl.appendChild(ulEl);
        footerEl.appendChild(navBarEl);
        // NavBar icon 클래스 변경하여 색 변화
        const footerIconName = window.location.hash.split('#')[1];
        function changeNavIcon(iconName) {
            if (iconName === 'home') {
                homeArticleEl.classList.replace('navHome', 'navHomeSelected');
                chatArticleEl.classList.replace('navChatSelected', 'navChat');
                postArticleEl.classList.replace('navPostingSelected', 'navPosting');
                profileArticleEl.classList.replace('navProfileSelected', 'navProfile');
            }
            else if (iconName === 'chat') {
                homeArticleEl.classList.replace('navHomeSelected', 'navHome');
                chatArticleEl.classList.replace('navChat', 'navChatSelected');
                postArticleEl.classList.replace('navPostingSelected', 'navPosting');
                profileArticleEl.classList.replace('navProfileSelected', 'navProfile');
            }
            else if (iconName === 'profile') {
                homeArticleEl.classList.replace('navHomeSelected', 'navHome');
                chatArticleEl.classList.replace('navChatSelected', 'navChat');
                postArticleEl.classList.replace('navPostingSelected', 'navPosting');
                profileArticleEl.classList.replace('navProfile', 'navProfileSelected');
            }
        }
        changeNavIcon(footerIconName);
        // NavBar icon 클릭 시 해당 페이지로 이동
        function clickHome() {
            window.location.hash = '#home';
        }
        function clickChat() {
            window.location.hash = '#chat';
        }
        function clickProfile() {
            window.location.hash = '#profile';
        }
        function clickPost() {
            window.location.hash = '#postUpload';
        }
        return footerEl;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ "./pages/homePage.ts":
/*!***************************!*\
  !*** ./pages/homePage.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _script_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script/home */ "./script/home.ts");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ "./pages/footer.ts");


class HomePage {
    render() {
        const footer = new _footer__WEBPACK_IMPORTED_MODULE_1__["default"]();
        const footerEl = footer.render();
        const body = document.querySelector('body');
        body.classList.remove('profileBackground');
        // header
        const rootEl = document.createElement('div');
        const headerEl = document.createElement('header');
        const articleHeaderEl = document.createElement('article');
        const heading1El = document.createElement('h1');
        rootEl.setAttribute('id', 'root');
        articleHeaderEl.classList.add('headerBar');
        heading1El.classList.add('mainHeading');
        heading1El.classList.add('mainLogo');
        heading1El.innerText = "60'' 마켓";
        const headerDivEl = document.createElement('div');
        const spanEl = document.createElement('span');
        headerDivEl.addEventListener('click', () => {
            window.location.hash = '#search'; // 주소 업데이트
        });
        headerDivEl.classList.add('headerBarModal');
        headerDivEl.classList.add('headerBarBtn');
        headerDivEl.classList.add('searchBtn');
        spanEl.classList.add('ir');
        spanEl.innerText = '사용자 검색 버튼';
        articleHeaderEl.appendChild(heading1El);
        articleHeaderEl.appendChild(headerDivEl);
        headerDivEl.appendChild(spanEl);
        headerEl.appendChild(articleHeaderEl);
        // main
        const mainEl = document.createElement('main');
        const heading2El = document.createElement('h2');
        const mainArticleEl = document.createElement('article');
        const mainHeading3El = document.createElement('h3');
        mainEl.classList.add('home');
        heading2El.classList.add('ir');
        heading2El.innerText = "60'' 마켓 피드";
        mainArticleEl.classList.add('post');
        mainHeading3El.classList.add('ir');
        mainHeading3El.innerText = '피드 게시글';
        mainArticleEl.appendChild(mainHeading3El);
        mainEl.appendChild(heading2El);
        mainEl.appendChild(mainArticleEl);
        // home 피드 구현
        (0,_script_home__WEBPACK_IMPORTED_MODULE_0__.feedAPI)();
        document.querySelector('#root').appendChild(headerEl);
        document.querySelector('#root').appendChild(mainEl);
        document.querySelector('#root').appendChild(footerEl);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);


/***/ }),

/***/ "./pages/introPage.ts":
/*!****************************!*\
  !*** ./pages/introPage.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _script_intro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script/intro */ "./script/intro.ts");

class IntroPage {
    render(content) {
        // header
        const wrapEl = document.createElement('div');
        const headerEl = document.createElement('header');
        const imgEl = document.createElement('img');
        const heading1El = document.createElement('h1');
        wrapEl.classList.add('wrap');
        heading1El.classList.add('title');
        heading1El.classList.add('marketName');
        imgEl.setAttribute('id', 'timi');
        imgEl.setAttribute('src', '../asset/images/timi.svg');
        imgEl.setAttribute('alt', '티미 이미지');
        headerEl.appendChild(imgEl);
        headerEl.appendChild(heading1El);
        wrapEl.appendChild(headerEl);
        // main
        const mainEl = document.createElement('main');
        const formEl = document.createElement('form');
        const loginButtonEl = document.createElement('button');
        const signUpButtonEl = document.createElement('button');
        formEl.classList.add('logInForm');
        loginButtonEl.classList.add('btn');
        loginButtonEl.classList.add('logInBtn');
        loginButtonEl.setAttribute('type', 'button');
        loginButtonEl.addEventListener('click', () => {
            window.location.hash = '#login';
        });
        loginButtonEl.innerText = '이메일로 로그인';
        signUpButtonEl.classList.add('btn');
        signUpButtonEl.classList.add('logInBtn');
        signUpButtonEl.setAttribute('type', 'button');
        signUpButtonEl.addEventListener('click', () => {
            window.location.hash = '#signup';
        });
        signUpButtonEl.innerText = '회원가입';
        formEl.appendChild(loginButtonEl);
        formEl.appendChild(signUpButtonEl);
        mainEl.appendChild(formEl);
        wrapEl.appendChild(mainEl);
        // 토큰 검증
        (0,_script_intro__WEBPACK_IMPORTED_MODULE_0__.isValidToken)();
        content.appendChild(wrapEl);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IntroPage);


/***/ }),

/***/ "./pages/loginPage.ts":
/*!****************************!*\
  !*** ./pages/loginPage.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _script_logIn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script/logIn */ "./script/logIn.ts");

class LoginPage {
    render(content) {
        // header
        const wrapEl = document.createElement('div');
        const headerEl = document.createElement('header');
        const heading1El = document.createElement('h1');
        wrapEl.classList.add('wrap');
        wrapEl.classList.add('registerWrap');
        heading1El.classList.add('registerHeader');
        heading1El.innerText = '로그인';
        headerEl.appendChild(heading1El);
        wrapEl.appendChild(headerEl);
        // main
        const mainEl = document.createElement('main');
        const formEl = document.createElement('form');
        const emailLabelEl = document.createElement('label');
        const emailInputEl = document.createElement('input');
        const passwordLabelEl = document.createElement('label');
        const passwordInputEl = document.createElement('input');
        const alertPEl = document.createElement('p');
        const loginButtonEl = document.createElement('button');
        formEl.classList.add('logInForm');
        formEl.classList.add('registerForm');
        formEl.setAttribute('action', '');
        formEl.setAttribute('method', 'get');
        emailLabelEl.classList.add('registerFormLabel');
        emailLabelEl.setAttribute('for', 'email');
        emailLabelEl.innerText = '이메일';
        emailInputEl.id = 'email';
        emailInputEl.setAttribute('name', 'email');
        emailInputEl.setAttribute('type', 'email');
        emailInputEl.required = true;
        formEl.appendChild(emailLabelEl);
        formEl.appendChild(emailInputEl);
        passwordLabelEl.classList.add('registerFormLabel');
        passwordLabelEl.setAttribute('for', 'password');
        passwordLabelEl.innerText = '비밀번호';
        passwordInputEl.id = 'password';
        passwordInputEl.setAttribute('name', 'password');
        passwordInputEl.setAttribute('type', 'password');
        passwordInputEl.minLength = 6;
        passwordInputEl.required = true;
        formEl.appendChild(passwordLabelEl);
        formEl.appendChild(passwordInputEl);
        alertPEl.classList.add('registerFormAlert');
        alertPEl.classList.add('ir');
        alertPEl.innerText = '*이메일 또는 비밀번호가 일치하지 않습니다.';
        formEl.appendChild(alertPEl);
        loginButtonEl.classList.add('btn');
        loginButtonEl.classList.add('logInBtn');
        loginButtonEl.classList.add('registerFormBtn');
        loginButtonEl.setAttribute('type', 'button');
        loginButtonEl.disabled = true;
        loginButtonEl.innerText = '로그인';
        formEl.appendChild(loginButtonEl);
        // article
        const articleEl = document.createElement('article');
        const anchorEl = document.createElement('a');
        anchorEl.classList.add('registerByEmail');
        anchorEl.addEventListener('click', () => {
            window.location.hash = '#signup';
        });
        anchorEl.innerText = '이메일로 회원가입';
        articleEl.appendChild(anchorEl);
        mainEl.appendChild(formEl);
        wrapEl.appendChild(mainEl);
        wrapEl.appendChild(articleEl);
        // 폼 입력
        formEl.addEventListener('input', () => (0,_script_logIn__WEBPACK_IMPORTED_MODULE_0__.checkInput)(emailInputEl, passwordInputEl, loginButtonEl));
        // 로그인 유효성 검사
        loginButtonEl.addEventListener('click', () => (0,_script_logIn__WEBPACK_IMPORTED_MODULE_0__.getLogInData)(emailInputEl, passwordInputEl, alertPEl, formEl));
        content.appendChild(wrapEl);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginPage);


/***/ }),

/***/ "./pages/mainPage.ts":
/*!***************************!*\
  !*** ./pages/mainPage.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class MainPage {
    render(content) {
        const wrapEl = document.createElement('div');
        const articleEl = document.createElement('article');
        const containerEl = document.createElement('div');
        const clockEl = document.createElement('div');
        wrapEl.classList.add('wrap');
        articleEl.classList.add('loadding');
        containerEl.classList.add('box');
        clockEl.classList.add('clock');
        containerEl.appendChild(clockEl);
        articleEl.appendChild(containerEl);
        wrapEl.appendChild(articleEl);
        window.setTimeout(() => {
            window.location.hash = '#intro';
        }, 1000);
        content.appendChild(wrapEl);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainPage);


/***/ }),

/***/ "./pages/postPage.ts":
/*!***************************!*\
  !*** ./pages/postPage.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _script_post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script/post */ "./script/post.ts");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/common */ "./utils/common.ts");


class PostPage {
    render(content) {
        document.querySelector('body').classList.remove('profileBackground');
        //header
        const headerEl = document.createElement('header');
        const headerBarArticleEl = document.createElement('article');
        const backImgEl = document.createElement('img');
        headerBarArticleEl.classList.add('headerBar');
        backImgEl.classList.add('headerBarBack');
        backImgEl.classList.add('buttonClick');
        backImgEl.setAttribute('src', '../asset/images/icons/icon__arrowLeft.svg');
        backImgEl.setAttribute('alt', '뒤로 가기');
        backImgEl.addEventListener('click', _utils_common__WEBPACK_IMPORTED_MODULE_1__.backHistory);
        headerBarArticleEl.appendChild(backImgEl);
        headerEl.appendChild(headerBarArticleEl);
        //main
        const mainEl = document.createElement('main');
        const titleHeading2El = document.createElement('h2');
        const postContainerArticleEl = document.createElement('article');
        const subTitleHeading3El = document.createElement('h3');
        const sectionEl = document.createElement('section');
        const userListDivEl = document.createElement('div');
        const userItemDivEl = document.createElement('div');
        const postContentSectionEl = document.createElement('section');
        const commentSectionEl = document.createElement('section');
        mainEl.classList.add('postWrap');
        titleHeading2El.classList.add('ir');
        postContainerArticleEl.classList.add('post');
        postContainerArticleEl.classList.add('postContainer');
        subTitleHeading3El.classList.add('ir');
        userListDivEl.classList.add('userList');
        userItemDivEl.classList.add('userItem');
        postContentSectionEl.classList.add('postContent');
        commentSectionEl.classList.add('postCommentBox');
        userListDivEl.appendChild(userItemDivEl);
        sectionEl.appendChild(userListDivEl);
        postContainerArticleEl.appendChild(subTitleHeading3El);
        postContainerArticleEl.appendChild(sectionEl);
        postContainerArticleEl.appendChild(postContentSectionEl);
        mainEl.appendChild(titleHeading2El);
        mainEl.appendChild(postContainerArticleEl);
        mainEl.appendChild(commentSectionEl);
        //footer
        const footerEl = document.createElement('footer');
        const chatFormEl = document.createElement('form');
        const enterImgDivEl = document.createElement('div');
        const userProfileImgEl = document.createElement('img');
        const chatContentLabelEl = document.createElement('label');
        const chatInputEl = document.createElement('input');
        const postBtnEl = document.createElement('button');
        footerEl.classList.add('chatEnter');
        footerEl.classList.add('postChatEnter');
        chatFormEl.classList.add('chatEnterContent');
        chatFormEl.onsubmit = () => {
            return false;
        };
        enterImgDivEl.classList.add('chatEnterImage');
        userProfileImgEl.classList.add('commentUserProfile');
        userProfileImgEl.setAttribute('src', '');
        userProfileImgEl.setAttribute('alt', '');
        chatContentLabelEl.classList.add('postChatContent');
        chatInputEl.id = 'postChatContent';
        chatInputEl.setAttribute('type', 'text');
        chatInputEl.placeholder = '메시지 입력하기...';
        chatInputEl.addEventListener('keyup', _script_post__WEBPACK_IMPORTED_MODULE_0__.postInput);
        postBtnEl.id = 'commentSubmit';
        postBtnEl.classList.add('postBtn');
        postBtnEl.setAttribute('type', 'button');
        postBtnEl.innerText = '게시';
        postBtnEl.addEventListener('click', _script_post__WEBPACK_IMPORTED_MODULE_0__.submitComment);
        enterImgDivEl.appendChild(userProfileImgEl);
        chatFormEl.appendChild(enterImgDivEl);
        chatFormEl.appendChild(chatContentLabelEl);
        chatFormEl.appendChild(chatInputEl);
        chatFormEl.appendChild(postBtnEl);
        footerEl.appendChild(chatFormEl);
        // 게시물 상세 페이지 정보 가져오기 및 댓글 기능 구현
        (0,_script_post__WEBPACK_IMPORTED_MODULE_0__.renderPost)();
        (0,_script_post__WEBPACK_IMPORTED_MODULE_0__.getLoginUserInfo)(userProfileImgEl);
        content.appendChild(headerEl);
        content.appendChild(mainEl);
        content.appendChild(footerEl);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostPage);


/***/ }),

/***/ "./pages/postUploadPage.ts":
/*!*********************************!*\
  !*** ./pages/postUploadPage.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _script_postUpload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script/postUpload */ "./script/postUpload.ts");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/common */ "./utils/common.ts");


class PostUploadPage {
    render(content) {
        document.querySelector('body').classList.remove('profileBackground');
        // header
        const headerEl = document.createElement('header');
        const headerBarArticleEl = document.createElement('article');
        const backImgEl = document.createElement('img');
        const uploadBtnEl = document.createElement('button');
        headerBarArticleEl.classList.add('headerBar');
        headerBarArticleEl.classList.add('postingHeaderBar');
        backImgEl.classList.add('headerBarBack');
        backImgEl.classList.add('buttonClick');
        backImgEl.setAttribute('src', '../asset/images/icons/icon__arrowLeft.svg');
        backImgEl.setAttribute('alt', '뒤로 가기');
        backImgEl.addEventListener('click', _utils_common__WEBPACK_IMPORTED_MODULE_1__.backHistory);
        uploadBtnEl.classList.add('headerBarSettingBtn');
        uploadBtnEl.classList.add('headerBarBtn');
        uploadBtnEl.classList.add('buttonClick');
        uploadBtnEl.id = 'postingUploadBtn';
        uploadBtnEl.setAttribute('type', 'button');
        uploadBtnEl.disabled = true;
        uploadBtnEl.innerText = '업로드';
        headerBarArticleEl.appendChild(backImgEl);
        headerBarArticleEl.appendChild(uploadBtnEl);
        headerEl.appendChild(headerBarArticleEl);
        // main
        const mainEl = document.createElement('main');
        const postUploadFormEl = document.createElement('form');
        const profileImgEl = document.createElement('img');
        const postTextLabelEl = document.createElement('label');
        const postTextareaEl = document.createElement('textarea');
        const selectImgLabelEl = document.createElement('label');
        const uploadImgEl = document.createElement('img');
        const uploadInputEl = document.createElement('input');
        const postImgDivEl = document.createElement('div');
        mainEl.classList.add('postContainer');
        postUploadFormEl.classList.add('postUploadForm');
        profileImgEl.classList.add('userProfileImage');
        profileImgEl.classList.add('postUploadCommentImg');
        profileImgEl.setAttribute('alt', '프로필 이미지');
        postTextLabelEl.classList.add('ir');
        postTextLabelEl.setAttribute('for', 'postUploadComent');
        postTextLabelEl.innerText = '게시글 입력창입니다.';
        postTextareaEl.setAttribute('type', 'text');
        postTextareaEl.id = 'postUploadComent';
        postTextareaEl.rows = 10;
        postTextareaEl.maxLength = 140;
        postTextareaEl.placeholder = '게시글 입력하기...';
        postTextareaEl.classList.add('postUploadComentTxt');
        postTextareaEl.addEventListener('keyup', () => {
            (0,_script_postUpload__WEBPACK_IMPORTED_MODULE_0__.postInput)();
        });
        selectImgLabelEl.classList.add('postUploadInputImg');
        selectImgLabelEl.setAttribute('for', 'chatSelectImage');
        uploadImgEl.setAttribute('src', '../asset/images/icons/icon__imagesUplode.svg');
        uploadImgEl.setAttribute('alt', '');
        uploadInputEl.setAttribute('type', 'file');
        uploadInputEl.id = 'chatSelectImage';
        uploadInputEl.accept = 'image/*';
        uploadInputEl.classList.add('postUploadInput');
        uploadInputEl.classList.add('ir');
        uploadInputEl.multiple = true;
        uploadInputEl.addEventListener('change', event => {
            (0,_script_postUpload__WEBPACK_IMPORTED_MODULE_0__.readInputFile)(event);
        });
        postImgDivEl.classList.add('postUploadImageScreen');
        selectImgLabelEl.appendChild(uploadImgEl);
        postUploadFormEl.appendChild(profileImgEl);
        postUploadFormEl.appendChild(postTextLabelEl);
        postUploadFormEl.appendChild(postTextareaEl);
        postUploadFormEl.appendChild(selectImgLabelEl);
        postUploadFormEl.appendChild(uploadInputEl);
        mainEl.appendChild(postUploadFormEl);
        mainEl.appendChild(postImgDivEl);
        // 프로필 이미지 반영, 게시물 업로드 기능 구현
        (0,_script_postUpload__WEBPACK_IMPORTED_MODULE_0__.checkPost)(profileImgEl, postImgDivEl, postTextareaEl, uploadBtnEl);
        content.appendChild(headerEl);
        content.appendChild(mainEl);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostUploadPage);


/***/ }),

/***/ "./pages/productPage.ts":
/*!******************************!*\
  !*** ./pages/productPage.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _script_addProduct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script/addProduct */ "./script/addProduct.ts");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/common */ "./utils/common.ts");


class ProductPage {
    render(content) {
        document.querySelector('body').classList.remove('profileBackground');
        // header
        const headerEl = document.createElement('header');
        const headerBarArticleEl = document.createElement('article');
        const backImgEl = document.createElement('img');
        const saveBtnEl = document.createElement('button');
        headerBarArticleEl.classList.add('headerBar');
        headerBarArticleEl.classList.add('addProductHeaderBar');
        backImgEl.classList.add('headerBarBack');
        backImgEl.classList.add('buttonClick');
        backImgEl.setAttribute('src', '../asset/images/icons/icon__arrowLeft.svg');
        backImgEl.setAttribute('alt', '뒤로 가기');
        backImgEl.addEventListener('click', _utils_common__WEBPACK_IMPORTED_MODULE_1__.backHistory);
        saveBtnEl.classList.add('headerBarSettingBtn');
        saveBtnEl.classList.add('headerBarBtn');
        saveBtnEl.classList.add('buttonClick');
        saveBtnEl.id = 'addProductSaveBtn';
        saveBtnEl.setAttribute('type', 'button');
        saveBtnEl.innerText = '저장';
        headerBarArticleEl.appendChild(backImgEl);
        headerBarArticleEl.appendChild(saveBtnEl);
        headerEl.appendChild(headerBarArticleEl);
        //  main
        const mainEl = document.createElement('main');
        const addProductFormEl = document.createElement('form');
        mainEl.classList.add('addProduct');
        addProductFormEl.classList.add('addProductForm');
        // // 이미지 등록
        const addImgHeading3El = document.createElement('h3');
        const addImgLabelEl = document.createElement('label');
        const updateImgEl = document.createElement('img');
        const addImgEl = document.createElement('img');
        const addProductInput = document.createElement('input');
        addImgHeading3El.classList.add('addProductFormLabel');
        addImgHeading3El.innerText = '이미지 등록';
        addImgLabelEl.classList.add('addProductFormUplodeImg');
        addImgLabelEl.setAttribute('for', 'addProductImg');
        updateImgEl.classList.add('addProductUplodeImgScreen');
        addImgEl.classList.add('addProductUplodeImg');
        addImgEl.setAttribute('src', '../asset/images/icons/icon__imagesUplode.svg');
        addImgEl.setAttribute('alt', '이미지 등록');
        addProductInput.id = 'addProductImg';
        addProductInput.setAttribute('type', 'file');
        addProductInput.setAttribute('accept', 'image/*');
        addImgLabelEl.appendChild(updateImgEl);
        addImgLabelEl.appendChild(addImgEl);
        addProductFormEl.appendChild(addImgHeading3El);
        addProductFormEl.appendChild(addImgLabelEl);
        addProductFormEl.appendChild(addProductInput);
        // // 상품명 등록
        const addProductLabelEl = document.createElement('label');
        const productNameInputEl = document.createElement('input');
        addProductLabelEl.classList.add('addProductFormLabel');
        addProductLabelEl.setAttribute('for', 'addProductName');
        addProductLabelEl.innerText = '상품명';
        productNameInputEl.id = 'addProductName';
        productNameInputEl.setAttribute('type', 'text');
        productNameInputEl.required = true;
        productNameInputEl.placeholder = '2~15자 이내여야 합니다.';
        productNameInputEl.minLength = 2;
        productNameInputEl.maxLength = 15;
        addProductFormEl.appendChild(addProductLabelEl);
        addProductFormEl.appendChild(productNameInputEl);
        // // 가격 등록
        const addPriceLabelEl = document.createElement('label');
        const addPriceInputEl = document.createElement('input');
        addPriceLabelEl.classList.add('addProductFormLabel');
        addPriceLabelEl.setAttribute('form', 'addProductPrice');
        addPriceLabelEl.innerText = '가격';
        addPriceInputEl.id = 'addProductPrice';
        addPriceInputEl.setAttribute('type', 'text');
        addPriceInputEl.required = true;
        addPriceInputEl.placeholder = '숫자만 입력 가능합니다.';
        addPriceInputEl.maxLength = 12;
        addProductFormEl.appendChild(addPriceLabelEl);
        addProductFormEl.appendChild(addPriceInputEl);
        // // 시간 선택
        const timeSelectDivEl = document.createElement('div');
        const timeSelectHeading3El = document.createElement('h3');
        const timeSelectArticleEl = document.createElement('article');
        const irHeading2El = document.createElement('h2');
        const timeSelctBtnEl = document.createElement('button');
        const timeUlEl = document.createElement('ul');
        const timeLiEl10M = document.createElement('li');
        const timeLiEl30M = document.createElement('li');
        const timeLiEl1H = document.createElement('li');
        const timeLiEl2H = document.createElement('li');
        const timeLiEl3H = document.createElement('li');
        const timeLiElShare = document.createElement('li');
        const timeBtn10M = document.createElement('button');
        const timeBtn30M = document.createElement('button');
        const timeBtn1H = document.createElement('button');
        const timeBtn2H = document.createElement('button');
        const timeBtn3H = document.createElement('button');
        const timeBtnShare = document.createElement('button');
        timeSelectDivEl.classList.add('timeSelct');
        timeSelectHeading3El.classList.add('addProductFormLabel');
        timeSelectHeading3El.innerText = '시간 선택';
        timeSelectArticleEl.classList.add('addProductTimeSelect');
        irHeading2El.classList.add('ir');
        irHeading2El.innerText = '시간을 선택해주세요.';
        timeSelctBtnEl.classList.add('addProductSelectBtn');
        timeSelctBtnEl.setAttribute('type', 'button');
        timeUlEl.classList.add('addProductTimeList');
        timeBtn10M.innerText = '10분 이하';
        timeBtn30M.innerText = '30분';
        timeBtn1H.innerText = '1시간';
        timeBtn2H.innerText = '2시간';
        timeBtn3H.innerText = '3시간';
        timeBtnShare.innerText = '나눔';
        timeBtn10M.setAttribute('type', 'button');
        timeBtn10M.classList.add('textEllipsis');
        timeBtn30M.setAttribute('type', 'button');
        timeBtn30M.classList.add('textEllipsis');
        timeBtn1H.setAttribute('type', 'button');
        timeBtn1H.classList.add('textEllipsis');
        timeBtn2H.setAttribute('type', 'button');
        timeBtn2H.classList.add('textEllipsis');
        timeBtn3H.setAttribute('type', 'button');
        timeBtn3H.classList.add('textEllipsis');
        timeBtnShare.setAttribute('type', 'button');
        timeBtnShare.classList.add('textEllipsis');
        timeLiEl10M.appendChild(timeBtn10M);
        timeLiEl30M.appendChild(timeBtn30M);
        timeLiEl1H.appendChild(timeBtn1H);
        timeLiEl2H.appendChild(timeBtn2H);
        timeLiEl3H.appendChild(timeBtn3H);
        timeLiElShare.appendChild(timeBtnShare);
        timeUlEl.appendChild(timeLiEl10M);
        timeUlEl.appendChild(timeLiEl30M);
        timeUlEl.appendChild(timeLiEl1H);
        timeUlEl.appendChild(timeLiEl2H);
        timeUlEl.appendChild(timeLiEl3H);
        timeUlEl.appendChild(timeLiElShare);
        timeSelectArticleEl.appendChild(irHeading2El);
        timeSelectArticleEl.appendChild(timeSelctBtnEl);
        timeSelectArticleEl.appendChild(timeUlEl);
        timeSelectDivEl.appendChild(timeSelectHeading3El);
        timeSelectDivEl.appendChild(timeSelectArticleEl);
        addProductFormEl.appendChild(timeSelectDivEl);
        // // 내용 입력
        const contentLabelEl = document.createElement('label');
        const contentTextareaEl = document.createElement('textarea');
        contentLabelEl.classList.add('addProductFormLabel');
        contentLabelEl.innerText = '내용';
        contentTextareaEl.cols = 10;
        contentTextareaEl.rows = 10;
        contentTextareaEl.id = 'addProductContent';
        contentTextareaEl.required = true;
        contentTextareaEl.placeholder = '내용을 입력해 주세요.';
        addProductFormEl.appendChild(contentLabelEl);
        addProductFormEl.appendChild(contentTextareaEl);
        mainEl.appendChild(addProductFormEl);
        // 상품 등록 기능
        productNameInputEl.addEventListener('keyup', () => {
            (0,_script_addProduct__WEBPACK_IMPORTED_MODULE_0__.productInput)();
        });
        contentTextareaEl.addEventListener('keyup', () => {
            (0,_script_addProduct__WEBPACK_IMPORTED_MODULE_0__.productInput)();
        });
        addProductInput.addEventListener('change', event => {
            (0,_script_addProduct__WEBPACK_IMPORTED_MODULE_0__.onChangeProductImg)(event);
        });
        addPriceInputEl.addEventListener('keyup', () => {
            (0,_script_addProduct__WEBPACK_IMPORTED_MODULE_0__.inputNumberFormat)(addPriceInputEl);
        });
        saveBtnEl.addEventListener('click', () => {
            (0,_script_addProduct__WEBPACK_IMPORTED_MODULE_0__.onProductSvaeBtn)();
        });
        timeSelctBtnEl.addEventListener('click', () => {
            (0,_script_addProduct__WEBPACK_IMPORTED_MODULE_0__.onTimeToggle)(timeSelctBtnEl);
        });
        timeUlEl.addEventListener('click', event => {
            (0,_script_addProduct__WEBPACK_IMPORTED_MODULE_0__.onTimeSelct)(event, timeSelctBtnEl);
        });
        content.appendChild(headerEl);
        content.appendChild(mainEl);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductPage);


/***/ }),

/***/ "./pages/profileFollowPage.ts":
/*!************************************!*\
  !*** ./pages/profileFollowPage.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _script_profileFollow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script/profileFollow */ "./script/profileFollow.ts");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ "./pages/footer.ts");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/common */ "./utils/common.ts");



const footer = new _footer__WEBPACK_IMPORTED_MODULE_1__["default"]();
class ProfileFollowPage {
    render(content) {
        const footerEl = footer.render();
        // header
        const headerEl = document.createElement('header');
        const headerBarArticleEl = document.createElement('article');
        const backImgEl = document.createElement('img');
        const titlePEl = document.createElement('p');
        headerBarArticleEl.classList.add('headerBar');
        headerBarArticleEl.classList.add('followers');
        backImgEl.classList.add('headerBarBack');
        backImgEl.classList.add('buttonClick');
        backImgEl.setAttribute('src', '../asset/images/icons/icon__arrowLeft.svg');
        backImgEl.setAttribute('alt', '뒤로 가기');
        backImgEl.addEventListener('click', _utils_common__WEBPACK_IMPORTED_MODULE_2__.backHistory);
        titlePEl.classList.add('followTitle');
        headerBarArticleEl.appendChild(backImgEl);
        headerBarArticleEl.appendChild(titlePEl);
        headerEl.appendChild(headerBarArticleEl);
        // main
        const mainEl = document.createElement('main');
        const userSectionEl = document.createElement('section');
        const userListUlEl = document.createElement('ul');
        userListUlEl.classList.add('userList');
        userSectionEl.appendChild(userListUlEl);
        mainEl.appendChild(userSectionEl);
        // follow 리스트 구현
        (0,_script_profileFollow__WEBPACK_IMPORTED_MODULE_0__.init)(userListUlEl);
        content.appendChild(headerEl);
        content.appendChild(mainEl);
        content.appendChild(footerEl);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileFollowPage);


/***/ }),

/***/ "./pages/profilePage.ts":
/*!******************************!*\
  !*** ./pages/profilePage.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ "./pages/footer.ts");
/* harmony import */ var _script_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../script/profile */ "./script/profile.ts");
/* harmony import */ var _script_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../script/modal */ "./script/modal.ts");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/common */ "./utils/common.ts");




class ProfilePage {
    render(content) {
        const footer = new _footer__WEBPACK_IMPORTED_MODULE_0__["default"]();
        const footerEl = footer.render();
        // body
        document.querySelector('body').classList.add('profileBackground');
        // header
        const headerEl = document.createElement('header');
        const heading1El = document.createElement('h1');
        const headerArticleEl = document.createElement('article');
        const backImgEl = document.createElement('img');
        const menuImgEl = document.createElement('img');
        heading1El.classList.add('ir');
        heading1El.innerText = '프로필';
        headerArticleEl.classList.add('headerBar');
        headerArticleEl.classList.add('profile');
        backImgEl.classList.add('headerBarBack');
        backImgEl.classList.add('buttonClick');
        backImgEl.setAttribute('src', '../asset/images/icons/icon__arrowLeft.svg');
        backImgEl.setAttribute('alt', '뒤로 가기');
        menuImgEl.classList.add('headerBarBtn');
        menuImgEl.classList.add('buttonClick');
        menuImgEl.setAttribute('src', '../asset/images/icons/icon__menu.svg');
        menuImgEl.setAttribute('alt', '메뉴');
        headerArticleEl.appendChild(backImgEl);
        headerArticleEl.appendChild(menuImgEl);
        headerEl.appendChild(heading1El);
        headerEl.appendChild(headerArticleEl);
        // main
        const mainEl = document.createElement('main');
        const introSectionEl = document.createElement('section');
        const heading2El = document.createElement('h2');
        const followSectionEl = document.createElement('section');
        const followerDivEl = document.createElement('div');
        const myProfileImgEl = document.createElement('img');
        const followingDivEl = document.createElement('div');
        const profileInfoSectionEl = document.createElement('section');
        const userNameStrongEl = document.createElement('strong');
        const userIdPEl = document.createElement('p');
        const introductionPEl = document.createElement('p');
        const linkSectionEl = document.createElement('section');
        const saleItemsSectionEl = document.createElement('section');
        const saleItemDivEl = document.createElement('div');
        const postingSectionEl = document.createElement('section');
        const albumBarArticleEl = document.createElement('article');
        const listTypeImgEl = document.createElement('img');
        const albumTypeImgEl = document.createElement('img');
        mainEl.classList.add('ProfileContent');
        introSectionEl.classList.add('introduce');
        heading2El.classList.add('ir');
        heading2El.innerText = '프로필 소개';
        followSectionEl.classList.add('myFollow');
        followSectionEl.classList.add('myProfileImg');
        followerDivEl.classList.add('followers');
        myProfileImgEl.classList.add('myImage');
        myProfileImgEl.setAttribute('src', '../asset/images/basic-profile.svg');
        myProfileImgEl.setAttribute('alt', '내 프로필 이미지');
        followingDivEl.classList.add('followings');
        profileInfoSectionEl.classList.add('profileInfo');
        userNameStrongEl.classList.add('userName');
        userIdPEl.classList.add('userId');
        introductionPEl.classList.add('introduction');
        linkSectionEl.classList.add('link');
        saleItemsSectionEl.classList.add('saleItems');
        saleItemDivEl.classList.add('saleItemContainer');
        postingSectionEl.classList.add('postingSummary');
        albumBarArticleEl.classList.add('albumBar');
        listTypeImgEl.classList.add('postingType');
        listTypeImgEl.classList.add('list');
        listTypeImgEl.classList.add('buttonClick');
        listTypeImgEl.setAttribute('src', '../asset/images/icons/icon__postList.svg');
        listTypeImgEl.setAttribute('alt', '리스트형으로 보기');
        albumTypeImgEl.classList.add('postingType');
        albumTypeImgEl.classList.add('album');
        albumTypeImgEl.classList.add('buttonClick');
        albumTypeImgEl.classList.add('unselected');
        albumTypeImgEl.setAttribute('src', '../asset/images/icons/icon__postAlbum.svg');
        albumTypeImgEl.setAttribute('alt', '앨범형으로 보기');
        // 뒤로 가기
        backImgEl.addEventListener('click', _utils_common__WEBPACK_IMPORTED_MODULE_3__.backHistory);
        saleItemsSectionEl.appendChild(saleItemDivEl);
        profileInfoSectionEl.appendChild(userNameStrongEl);
        profileInfoSectionEl.appendChild(userIdPEl);
        profileInfoSectionEl.appendChild(introductionPEl);
        followSectionEl.appendChild(followerDivEl);
        followSectionEl.appendChild(myProfileImgEl);
        followSectionEl.appendChild(followingDivEl);
        introSectionEl.appendChild(heading2El);
        introSectionEl.appendChild(followSectionEl);
        introSectionEl.appendChild(profileInfoSectionEl);
        introSectionEl.appendChild(linkSectionEl);
        albumBarArticleEl.appendChild(listTypeImgEl);
        albumBarArticleEl.appendChild(albumTypeImgEl);
        postingSectionEl.appendChild(albumBarArticleEl);
        mainEl.appendChild(introSectionEl);
        mainEl.appendChild(saleItemsSectionEl);
        mainEl.appendChild(postingSectionEl);
        // 팔로워, 팔로잉 페이지 이동
        followerDivEl.addEventListener('click', clickedFollowLink);
        followingDivEl.addEventListener('click', clickedFollowLink);
        function clickedFollowLink(event) {
            const profileUser = document.querySelector('.profileInfo .userId');
            const userId = profileUser.innerText.replace(/ /g, '');
            window.location.hash = `#profileFollow?accountname=${userId}&title=${event.target.className}`;
        }
        // 프로필 정보 가져오기
        (0,_script_profile__WEBPACK_IMPORTED_MODULE_1__.getProfileInfo)();
        (0,_script_profile__WEBPACK_IMPORTED_MODULE_1__.getPostingList)();
        // 목록형, 앨범형으로 포스팅 구현
        albumBarArticleEl.addEventListener('click', event => {
            const selectType = event.target.className.split(' ')[1];
            if (selectType === 'list') {
                (0,_script_profile__WEBPACK_IMPORTED_MODULE_1__.getPostingList)();
            }
            else if (selectType === 'album') {
                (0,_script_profile__WEBPACK_IMPORTED_MODULE_1__.albumTypePost)();
            }
            else {
                return;
            }
        });
        // 사용자 로그아웃 모달
        menuImgEl.addEventListener('click', () => {
            (0,_script_modal__WEBPACK_IMPORTED_MODULE_2__.logoutModal)();
        });
        content.appendChild(headerEl);
        content.appendChild(mainEl);
        content.appendChild(footerEl);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfilePage);


/***/ }),

/***/ "./pages/profileRegisterPage.ts":
/*!**************************************!*\
  !*** ./pages/profileRegisterPage.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _script_registerProfile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script/registerProfile */ "./script/registerProfile.ts");

class ProfileRegister {
    render(content) {
        const wrapEl = document.createElement('div');
        //header
        const headerEl = document.createElement('header');
        const heading1El = document.createElement('h1');
        const infoPEl = document.createElement('p');
        wrapEl.classList.add('wrap');
        wrapEl.classList.add('registerWrap');
        heading1El.classList.add('registerHeader');
        infoPEl.classList.add('registerInfo');
        headerEl.appendChild(heading1El);
        headerEl.appendChild(infoPEl);
        wrapEl.appendChild(headerEl);
        //main
        const mainEl = document.createElement('main');
        const profileFormEl = document.createElement('form');
        const profileImgLabelEl = document.createElement('label');
        const profileImgEl = document.createElement('img');
        const uploadImgEl = document.createElement('img');
        const imgInputEl = document.createElement('input');
        const userNameLabelEl = document.createElement('label');
        const userNameInputEl = document.createElement('input');
        const userIdLabelEl = document.createElement('label');
        const userIdInputEl = document.createElement('input');
        const userIntroLabelEl = document.createElement('label');
        const userIntroInputEl = document.createElement('input');
        const registerAlertPEl = document.createElement('p');
        const profileFormBtn = document.createElement('button');
        profileFormEl.classList.add('logInForm');
        profileFormEl.classList.add('registerForm');
        profileFormEl.classList.add('profileForm');
        profileImgLabelEl.classList.add('profileImgBtn');
        profileImgLabelEl.setAttribute('for', 'profileImg');
        profileImgEl.classList.add('uploadProfileImg');
        profileImgEl.setAttribute('src', '../asset/images/basic-profile.svg');
        profileImgEl.setAttribute('alt', '사용자 프로필 이미지');
        uploadImgEl.classList.add('uploadProfileImgIcon');
        uploadImgEl.setAttribute('src', '../asset/images/icons/icon__imagesUplodeFill.svg');
        uploadImgEl.setAttribute('alt', '이미지 업로드');
        imgInputEl.id = 'profileImg';
        imgInputEl.classList.add('ir');
        imgInputEl.name = 'profileImg';
        imgInputEl.setAttribute('type', 'file');
        imgInputEl.setAttribute('accept', 'image/*');
        userNameLabelEl.classList.add('registerFormLabel');
        userNameLabelEl.setAttribute('for', 'username');
        userNameLabelEl.innerText = '사용자 이름';
        userNameInputEl.id = 'username';
        userNameInputEl.name = 'username';
        userNameInputEl.setAttribute('type', 'text');
        userNameInputEl.setAttribute('minlength', '2');
        userNameInputEl.setAttribute('maxLength', '10');
        userNameInputEl.required = true;
        userNameInputEl.setAttribute('placeholder', '2~10자 이내여야 합니다.');
        userIdLabelEl.classList.add('registerFormLabel');
        userIdLabelEl.setAttribute('for', 'id');
        userIdLabelEl.innerText = '계정 ID';
        userIdInputEl.id = 'id';
        userIdInputEl.name = 'id';
        userIdInputEl.setAttribute('type', 'text');
        userIdInputEl.setAttribute('minlength', '2');
        userIdInputEl.setAttribute('maxLength', '10');
        userIdInputEl.required = true;
        userIdInputEl.setAttribute('placeholder', '영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.');
        registerAlertPEl.classList.add('registerFormAlert');
        registerAlertPEl.classList.add('ir');
        registerAlertPEl.innerText = '영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.';
        userIntroLabelEl.classList.add('registerFormLabel');
        userIntroLabelEl.setAttribute('for', 'intro');
        userIntroLabelEl.innerText = '소개';
        userIntroInputEl.id = 'intro';
        userIntroInputEl.name = 'intro';
        userIntroInputEl.setAttribute('type', 'text');
        userIntroInputEl.setAttribute('minlength', '2');
        userIntroInputEl.setAttribute('maxLength', '50');
        userIntroInputEl.required = true;
        userIntroInputEl.setAttribute('placeholder', '자신과 판매할 상품에 대한 소개해 주세요!');
        profileFormBtn.classList.add('btn');
        profileFormBtn.classList.add('registerFormBtn');
        profileFormBtn.classList.add('profileFormBtn');
        profileFormBtn.setAttribute('type', 'button');
        profileFormBtn.disabled = true;
        profileFormBtn.innerText = "60'' 마켓 시작하기";
        profileImgLabelEl.appendChild(profileImgEl);
        profileImgLabelEl.appendChild(uploadImgEl);
        profileFormEl.appendChild(profileImgLabelEl);
        profileFormEl.appendChild(imgInputEl);
        profileFormEl.appendChild(userNameLabelEl);
        profileFormEl.appendChild(userNameInputEl);
        profileFormEl.appendChild(userIdLabelEl);
        profileFormEl.appendChild(userIdInputEl);
        profileFormEl.appendChild(registerAlertPEl);
        profileFormEl.appendChild(userIntroLabelEl);
        profileFormEl.appendChild(userIntroInputEl);
        profileFormEl.appendChild(profileFormBtn);
        mainEl.appendChild(profileFormEl);
        wrapEl.appendChild(mainEl);
        content.appendChild(wrapEl);
        // 프로필 이미지 업로드
        imgInputEl.addEventListener('change', event => (0,_script_registerProfile__WEBPACK_IMPORTED_MODULE_0__.previewImg)(event, profileImgEl));
        // 폼 입력
        profileFormEl.addEventListener('input', () => (0,_script_registerProfile__WEBPACK_IMPORTED_MODULE_0__.checkInput)(userIdInputEl));
        // 60'' 마켓 시작하기 버튼 클릭
        profileFormBtn.addEventListener('click', () => (0,_script_registerProfile__WEBPACK_IMPORTED_MODULE_0__.isValidId)(userIdInputEl));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileRegister);


/***/ }),

/***/ "./pages/searchPage.ts":
/*!*****************************!*\
  !*** ./pages/searchPage.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ "./pages/footer.ts");
/* harmony import */ var _script_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../script/search */ "./script/search.ts");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/common */ "./utils/common.ts");



class SearchPage {
    render(content) {
        const footer = new _footer__WEBPACK_IMPORTED_MODULE_0__["default"]();
        const footerEl = footer.render();
        // header
        const headerEl = document.createElement('header');
        const articleHeaderEl = document.createElement('article');
        const backImageEl = document.createElement('img');
        const inputSearchEl = document.createElement('input');
        articleHeaderEl.classList.add('headerBar');
        articleHeaderEl.classList.add('buttonClick');
        backImageEl.classList.add('headerBarBack');
        backImageEl.setAttribute('src', '../asset/images/icons/icon__arrowLeft.svg');
        backImageEl.setAttribute('alt', '뒤로 가기');
        backImageEl.addEventListener('click', _utils_common__WEBPACK_IMPORTED_MODULE_2__.backHistory);
        inputSearchEl.classList.add('headerBarSearch');
        inputSearchEl.classList.add('headerBarInput');
        inputSearchEl.classList.add('buttonClick');
        inputSearchEl.setAttribute('type', 'text');
        inputSearchEl.setAttribute('placeholder', '계정 검색');
        inputSearchEl.maxLength = 9;
        inputSearchEl.autofocus = true;
        articleHeaderEl.appendChild(backImageEl);
        articleHeaderEl.appendChild(inputSearchEl);
        headerEl.appendChild(articleHeaderEl);
        // main
        const mainEl = document.createElement('main');
        const heading2El = document.createElement('h2');
        const sectionEl = document.createElement('section');
        const ulMainEl = document.createElement('ul');
        heading2El.classList.add('ir');
        heading2El.innerText = '유저 검색 페이지';
        ulMainEl.classList.add('userList');
        sectionEl.appendChild(ulMainEl);
        mainEl.appendChild(heading2El);
        mainEl.appendChild(sectionEl);
        // user 검색 기능
        inputSearchEl.addEventListener('keyup', (0,_utils_common__WEBPACK_IMPORTED_MODULE_2__.debounce)(_script_search__WEBPACK_IMPORTED_MODULE_1__["default"]));
        content.appendChild(headerEl);
        content.appendChild(mainEl);
        content.appendChild(footerEl);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchPage);


/***/ }),

/***/ "./pages/signUpPage.ts":
/*!*****************************!*\
  !*** ./pages/signUpPage.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _script_signUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script/signUp */ "./script/signUp.ts");

class SignUpPage {
    render(content) {
        // header
        const wrapEl = document.createElement('div');
        const headerEl = document.createElement('header');
        const heading1El = document.createElement('h1');
        wrapEl.classList.add('wrap');
        wrapEl.classList.add('registerWrap');
        heading1El.classList.add('registerHeader');
        heading1El.innerText = '이메일로 회원가입';
        headerEl.appendChild(heading1El);
        wrapEl.appendChild(headerEl);
        // main
        const mainEl = document.createElement('main');
        const formEl = document.createElement('form');
        const emailLabelEl = document.createElement('label');
        const emailInputEl = document.createElement('input');
        const passwordLabelEl = document.createElement('label');
        const passwordInputEl = document.createElement('input');
        const emailAlertPEl = document.createElement('p');
        const passwordAlertPEl = document.createElement('p');
        const loginButtonEl = document.createElement('button');
        formEl.classList.add('logInForm');
        formEl.classList.add('registerForm');
        formEl.setAttribute('action', '');
        formEl.setAttribute('method', 'get');
        emailLabelEl.classList.add('registerFormLabel');
        emailLabelEl.setAttribute('for', 'email');
        emailLabelEl.innerText = '이메일';
        emailInputEl.id = 'email';
        emailInputEl.setAttribute('name', 'email');
        emailInputEl.setAttribute('type', 'email');
        emailInputEl.required = true;
        formEl.appendChild(emailLabelEl);
        formEl.appendChild(emailInputEl);
        emailAlertPEl.classList.add('registerFormAlert');
        emailAlertPEl.classList.add('errorEmail');
        emailAlertPEl.classList.add('ir');
        emailAlertPEl.innerText = '*이미 가입된 이메일 주소입니다.';
        formEl.appendChild(emailAlertPEl);
        passwordLabelEl.classList.add('registerFormLabel');
        passwordLabelEl.setAttribute('for', 'password');
        passwordLabelEl.innerText = '비밀번호';
        passwordInputEl.id = 'password';
        passwordInputEl.setAttribute('name', 'password');
        passwordInputEl.setAttribute('type', 'password');
        passwordInputEl.maxLength = 10;
        passwordInputEl.required = true;
        formEl.appendChild(passwordLabelEl);
        formEl.appendChild(passwordInputEl);
        passwordAlertPEl.classList.add('registerFormAlert');
        passwordAlertPEl.classList.add('errorPassword');
        passwordAlertPEl.classList.add('ir');
        passwordAlertPEl.innerText = '*비밀번호는 6자 이상이어야 합니다.';
        formEl.appendChild(passwordAlertPEl);
        loginButtonEl.classList.add('btn');
        loginButtonEl.classList.add('logInBtn');
        loginButtonEl.classList.add('registerFormBtn');
        loginButtonEl.setAttribute('type', 'button');
        loginButtonEl.disabled = true;
        loginButtonEl.innerText = '다음';
        formEl.appendChild(loginButtonEl);
        // 폼 입력
        formEl.addEventListener('input', () => (0,_script_signUp__WEBPACK_IMPORTED_MODULE_0__.checkInput)(passwordInputEl, passwordAlertPEl));
        // 이메일 유효성 검사 버튼
        loginButtonEl.addEventListener('click', () => (0,_script_signUp__WEBPACK_IMPORTED_MODULE_0__.isValidEmail)());
        const articleEl = document.createElement('article');
        const anchorEl = document.createElement('a');
        anchorEl.classList.add('registerByEmail');
        anchorEl.addEventListener('click', () => {
            window.location.hash = '#login';
        });
        anchorEl.innerText = '로그인 하러 가기';
        articleEl.appendChild(anchorEl);
        mainEl.appendChild(formEl);
        wrapEl.appendChild(mainEl);
        wrapEl.appendChild(articleEl);
        content.appendChild(wrapEl);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUpPage);


/***/ }),

/***/ "./script/addProduct.ts":
/*!******************************!*\
  !*** ./script/addProduct.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "comma": () => (/* binding */ comma),
/* harmony export */   "inputNumberFormat": () => (/* binding */ inputNumberFormat),
/* harmony export */   "onChangeProductImg": () => (/* binding */ onChangeProductImg),
/* harmony export */   "onProductSvaeBtn": () => (/* binding */ onProductSvaeBtn),
/* harmony export */   "onTimeSelct": () => (/* binding */ onTimeSelct),
/* harmony export */   "onTimeToggle": () => (/* binding */ onTimeToggle),
/* harmony export */   "productInput": () => (/* binding */ productInput),
/* harmony export */   "uncomma": () => (/* binding */ uncomma)
/* harmony export */ });
/* harmony import */ var _utils_apiModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/apiModule */ "./utils/apiModule.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

// 상품 이미지 미리보기 / api서버에 전송하고 변경된 이미지 이름 가져오기
function onChangeProductImg(event) {
    return __awaiter(this, void 0, void 0, function* () {
        const imgReader = new FileReader();
        const formData = new FormData();
        const file = event.target.files;
        if (file && file[0]) {
            imgReader.onload = function () {
                document.querySelector('.addProductUplodeImgScreen').src = `${imgReader.result}`;
            };
            imgReader.readAsDataURL(file[0]);
        }
        formData.append('image', file[0]);
        const imgUrl = yield (0,_utils_apiModule__WEBPACK_IMPORTED_MODULE_0__.productImageUpload)(formData);
        localStorage.setItem('ProductImg', imgUrl);
        yield productInput();
    });
}
// 상품 가격 숫자만, 자동 원화단위
function inputNumberFormat(productPriceForm) {
    productPriceForm.value = comma(uncomma(productPriceForm.value));
    productInput();
}
function comma(addProductPriceString) {
    addProductPriceString = String(addProductPriceString);
    return addProductPriceString.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}
function uncomma(addProductPriceString) {
    addProductPriceString = String(addProductPriceString);
    return addProductPriceString.replace(/[^\d]+/g, '');
}
// productImg, productName, productPrice, productContents  모두 입력이 되면 헤더바에 저장 버튼 활성화
function productInput() {
    const productImgForm = document.getElementById('addProductImg');
    const productNameForm = document.getElementById('addProductName');
    const productPriceForm = document.getElementById('addProductPrice');
    const productContentForm = document.getElementById('addProductContent');
    const productSaveButton = document.getElementById('addProductSaveBtn');
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
function onProductSvaeBtn() {
    return __awaiter(this, void 0, void 0, function* () {
        const productNameForm = document.getElementById('addProductName');
        const productPriceForm = document.getElementById('addProductPrice');
        const productContentForm = document.getElementById('addProductContent');
        (0,_utils_apiModule__WEBPACK_IMPORTED_MODULE_0__.productSave)(productNameForm, productPriceForm, productContentForm);
    });
}
function onTimeToggle(timeSelctBtnEl) {
    timeSelctBtnEl.classList.toggle('on');
}
function onTimeSelct(event, timeSelctBtnEl) {
    if (event.target.nodeName === 'BUTTON') {
        timeSelctBtnEl.textContent = event.target.textContent;
        timeSelctBtnEl.style.color = 'black';
        timeSelctBtnEl.classList.remove('on');
    }
}


/***/ }),

/***/ "./script/editProfile.ts":
/*!*******************************!*\
  !*** ./script/editProfile.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clickSaveButton": () => (/* binding */ clickSaveButton),
/* harmony export */   "getProfileInfo": () => (/* binding */ getProfileInfo),
/* harmony export */   "imageChange": () => (/* binding */ imageChange),
/* harmony export */   "profileChangeInput": () => (/* binding */ profileChangeInput)
/* harmony export */ });
/* harmony import */ var _utils_apiModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/apiModule */ "./utils/apiModule.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function getProfileInfo(profileImg, inputName, inputId, inputIntroduce) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'https://api.mandarin.weniv.co.kr';
        const token = localStorage.getItem('Token');
        const myAccountName = localStorage.getItem('accountname');
        const setting = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-type': 'application/json',
            },
        };
        try {
            const resProfile = yield fetch(`${url}/profile/${myAccountName}`, setting);
            const resProfileJson = yield resProfile.json();
            const userProfile = yield resProfileJson.profile;
            profileImg.src = userProfile.image.length <= 20 ? `${url}/${userProfile.image}` : `${userProfile.image}`;
            inputName.value = `${userProfile.username}`;
            inputId.value = `${userProfile.accountname}`;
            inputIntroduce.value = `${userProfile.intro}`;
            return userProfile.image;
        }
        catch (err) {
            console.error(err);
        }
    });
}
function profileChangeInput(profileSaveButton) {
    const inputNameLength = document.getElementById('name').value.length;
    const inputId = document.getElementById('id');
    const inputIdLength = inputId.value.length;
    const inputIntroduceLength = document.getElementById('introduce').value.length;
    const check = /^[a-zA-Z0-9_.]{1,10}$/;
    const alertMessage = document.querySelector('.alertMessage');
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
function imageChange(event) {
    const imgReader = new FileReader();
    const formData = new FormData();
    const file = event.target.files;
    if (file[0].size > 10000000) {
        alert('이미지 사이즈는 10MB 이내로 등록 가능합니다.');
        return;
    }
    if (file && file[0]) {
        imgReader.onload = function () {
            document.querySelector('.updateUserImg').src = `${imgReader.result}`;
        };
        imgReader.readAsDataURL(file[0]);
    }
    formData.append('image', file[0]);
    (0,_utils_apiModule__WEBPACK_IMPORTED_MODULE_0__.imageUpload)(formData);
}
// 저장 버튼 클릭 시 서버에 프로필 이미지, 이름, 소개, 계정 ID 전송
function clickSaveButton(profileImg) {
    let imageUrl = localStorage.getItem('imageUrl');
    if (imageUrl === null) {
        imageUrl = profileImg.src;
        localStorage.setItem('imageUrl', imageUrl);
    }
    (0,_utils_apiModule__WEBPACK_IMPORTED_MODULE_0__.updateProfile)();
}


/***/ }),

/***/ "./script/heartBtn.ts":
/*!****************************!*\
  !*** ./script/heartBtn.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clickHeart": () => (/* binding */ clickHeart)
/* harmony export */ });
/* harmony import */ var _utils_apiModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/apiModule */ "./utils/apiModule.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

// 좋아요 버튼 클릭
function clickHeart(event) {
    return __awaiter(this, void 0, void 0, function* () {
        const likeBtn = event.target;
        const likeCount = likeBtn.children[1];
        let postId = likeBtn.closest('section').id;
        postId ? postId : (postId = new URLSearchParams(location.search).get('postid'));
        if (likeBtn.classList.contains('on')) {
            likeBtn.classList.remove('on');
            const data = yield (0,_utils_apiModule__WEBPACK_IMPORTED_MODULE_0__.likeUnHeart)(postId);
            likeCount.innerHTML = yield data.post.heartCount;
        }
        else {
            likeBtn.classList.add('on');
            const data = yield (0,_utils_apiModule__WEBPACK_IMPORTED_MODULE_0__.likeHeart)(postId);
            likeCount.innerHTML = data.post.heartCount;
        }
    });
}


/***/ }),

/***/ "./script/home.ts":
/*!************************!*\
  !*** ./script/home.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "feedAPI": () => (/* binding */ feedAPI)
/* harmony export */ });
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common */ "./utils/common.ts");
/* harmony import */ var _heartBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heartBtn */ "./script/heartBtn.ts");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ "./script/modal.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function noFeed() {
    const subTitleHeading3El = document.createElement('h3');
    const noneFeedSectionEl = document.createElement('noneFeed');
    const contentPEl = document.createElement('p');
    const searchLinkDivEl = document.createElement('div');
    const contentMainEl = document.createElement('main');
    subTitleHeading3El.classList.add('ir');
    subTitleHeading3El.innerText = '피드 게시글';
    noneFeedSectionEl.classList.add('noneFeed');
    contentPEl.innerText = '유저를 검색해 팔로우 해보세요!';
    searchLinkDivEl.classList.add('userSearchBtn');
    searchLinkDivEl.innerText = '검색하기';
    searchLinkDivEl.addEventListener('click', () => {
        window.location.hash = '#search'; // 주소 업데이트
    });
    noneFeedSectionEl.appendChild(contentPEl);
    noneFeedSectionEl.appendChild(searchLinkDivEl);
    contentMainEl.appendChild(subTitleHeading3El);
    contentMainEl.appendChild(noneFeedSectionEl);
}
function feedAPI() {
    return __awaiter(this, void 0, void 0, function* () {
        const defaultUrl = 'https://api.mandarin.weniv.co.kr';
        const token = localStorage.getItem('Token');
        const setting = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-type': 'application/json',
            },
        };
        try {
            const resFeed = yield fetch(`${defaultUrl}/post/feed?limit=30`, setting);
            const jsonFeed = yield resFeed.json();
            const posts = jsonFeed.posts;
            if (posts.length <= 0) {
                noFeed();
            }
            else {
                createFeed(posts);
            }
        }
        catch (_a) {
            console.error('The feed cannot be received.');
        }
    });
}
function clickUserInfo(event) {
    var _a;
    const eventTarget = event.target;
    const userAccount = (_a = event.currentTarget.children[1].children[1].textContent) === null || _a === void 0 ? void 0 : _a.replace('@', '');
    if (eventTarget.className === 'moreBtn buttonClick') {
        return;
    }
    window.location.hash = `#profile\?accountname=${userAccount}`; // 주소 업데이트
}
function clickComment(event) {
    const postId = event.currentTarget.dataset.postid;
    window.location.hash = `#post\?postid=${postId}`; // 주소 업데이트
}
function createFeed(posts) {
    const listContent = document.querySelector('.post');
    for (let i = 0; i < posts.length; i++) {
        const postItem = document.createElement('div');
        postItem.classList.add('postItem');
        // 이미지 url 저장
        let postImage = '';
        if (posts[i].image) {
            let images = posts[i].image.split(',');
            for (let image of images) {
                if (image.split('.')[1] === 'api') {
                    image = image.replace('https://mandarin.api.weniv.co.kr/', 'https://api.mandarin.weniv.co.kr/');
                }
                postImage += `
        <li>
          <img src="${image}" alt="게시물 이미지" />
        </li>
        `;
            }
        }
        let checkImg = !postImage
            ? ''
            : `<div class="postImgContent">
            <ul>${postImage}</ul>
          </div>`;
        const range = document.createRange();
        const checkImgNode = range.createContextualFragment(checkImg);
        // 사용자 정보 마크업
        const postHeading4El = document.createElement('h4');
        const userInfoSectionEl = document.createElement('section');
        const userListDivEl = document.createElement('div');
        const userItemDivEl = document.createElement('div');
        const userBoxDivEl = document.createElement('div');
        const userProfileImgEl = document.createElement('img');
        const userInfoDivEl = document.createElement('div');
        const userNicknameStrongEl = document.createElement('strong');
        const userTextDivEl = document.createElement('div');
        const userStatusMsgPEl = document.createElement('p');
        const moreBtnEl = document.createElement('button');
        const moreTextSpanEl = document.createElement('span');
        postHeading4El.classList.add('ir');
        postHeading4El.innerText = '게시물';
        userListDivEl.classList.add('userList');
        userItemDivEl.classList.add('userItem');
        userBoxDivEl.classList.add('userBox');
        userBoxDivEl.setAttribute('data-key', posts[i].id);
        userProfileImgEl.classList.add('userProfileImage');
        userProfileImgEl.setAttribute('src', `${posts[i].author.image}`);
        userProfileImgEl.setAttribute('alt', `${posts[i].author.username}님의 프로필 이미지`);
        userInfoDivEl.classList.add('userInfo');
        userNicknameStrongEl.classList.add('userNickname');
        userNicknameStrongEl.innerText = `${posts[i].author.username}`;
        userTextDivEl.classList.add('userText');
        userStatusMsgPEl.classList.add('userMsgContent');
        userStatusMsgPEl.classList.add('userStatusMsg');
        userStatusMsgPEl.innerText = `@${posts[i].author.accountname}`;
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
        const contentSectionEl = document.createElement('section');
        const contentTitleheading4El = document.createElement('h4');
        const contentPEl = document.createElement('p');
        const contentBtnDivEl = document.createElement('div');
        const likeBtnEl = document.createElement('button');
        const likeTextSpanEl = document.createElement('span');
        const likeCountSpanEl = document.createElement('span');
        const commentBtnDivEl = document.createElement('div');
        const commentCountSpanEl = document.createElement('span');
        const postDateStrongEl = document.createElement('strong');
        contentSectionEl.classList.add('postContent');
        contentSectionEl.id = `${posts[i].id}`;
        contentTitleheading4El.classList.add('ir');
        contentTitleheading4El.innerText = '게시글 내용';
        contentPEl.innerText = `${posts[i].content}`;
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
        likeCountSpanEl.innerText = `${posts[i].heartCount}`;
        commentBtnDivEl.classList.add('commentBtn');
        commentBtnDivEl.dataset.postid = `${posts[i].id}`;
        commentCountSpanEl.classList.add('commentCount');
        commentCountSpanEl.innerText = `${posts[i].commentCount}`;
        postDateStrongEl.classList.add('postDate');
        postDateStrongEl.innerText = `${(0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.timeForToday)(posts[i].createdAt)}`;
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
        likeBtnEl.addEventListener('click', _heartBtn__WEBPACK_IMPORTED_MODULE_1__.clickHeart);
        moreBtnEl.addEventListener('click', _modal__WEBPACK_IMPORTED_MODULE_2__.clickUserModal);
        commentBtnDivEl.addEventListener('click', clickComment);
    }
}


/***/ }),

/***/ "./script/intro.ts":
/*!*************************!*\
  !*** ./script/intro.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isValidToken": () => (/* binding */ isValidToken)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// 토큰 여부 확인 후 홈으로 이동
function logIn(resMessage) {
    if (resMessage === 200) {
        window.location.hash = '#home';
    }
}
// 토큰 검증
function isValidToken() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'https://api.mandarin.weniv.co.kr';
        const token = localStorage.getItem('Token');
        if (token === null) {
            return;
        }
        let setting = {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-type': 'application/json',
            },
        };
        try {
            const resValidToken = yield fetch(`${url}/user/checktoken`, setting);
            logIn(resValidToken.status);
        }
        catch (err) {
            window.location.hash = '#signup';
        }
    });
}


/***/ }),

/***/ "./script/logIn.ts":
/*!*************************!*\
  !*** ./script/logIn.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkInput": () => (/* binding */ checkInput),
/* harmony export */   "getLogInData": () => (/* binding */ getLogInData)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// 버튼 활성화
function isActiveBtn(email, password, loginButtonEl) {
    if (email.value !== '' && password.value !== '') {
        loginButtonEl.style.opacity = '1';
        loginButtonEl.disabled = false;
    }
    else if (email.value === '' || password.value === '') {
        loginButtonEl.style.opacity = '0.3';
        loginButtonEl.disabled = true;
    }
}
// 비밀번호 길이 체크
function checkInput(email, password, loginButtonEl) {
    if (password.value.length >= 6) {
        isActiveBtn(email, password, loginButtonEl);
    }
    else {
        loginButtonEl.style.opacity = '0.3';
        loginButtonEl.disabled = true;
    }
}
// 홈으로 이동
function locationHome(status) {
    if (status !== 422) {
        window.location.hash = '#home';
    }
}
// 로컬 스토리지에 토큰 저장
function saveToken(userData, status) {
    localStorage.setItem('Token', userData.token);
    localStorage.setItem('accountname', userData.accountname);
    locationHome(status);
}
// 로그인 체크
function checklogIn(userData, status, alertPEl, formEl) {
    if (status !== 422) {
        saveToken(userData, status);
    }
    if (status === 422) {
        alertPEl.classList.remove('ir');
    }
    formEl.oninput = () => {
        alertPEl.classList.add('ir');
    };
}
// 로그인 데이터 요청
function getLogInData(email, password, alertPEl, formEl) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'https://api.mandarin.weniv.co.kr';
        const userIdPw = {
            user: {
                email: email.value,
                password: password.value,
            },
        };
        const setting = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(userIdPw),
        };
        try {
            const resLogin = yield fetch(`${url}/user/login`, setting);
            const resresLoginJson = yield resLogin.json();
            checklogIn(resresLoginJson.user, resLogin.status, alertPEl, formEl);
        }
        catch (err) {
            console.error(err);
        }
    });
}


/***/ }),

/***/ "./script/modal.ts":
/*!*************************!*\
  !*** ./script/modal.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clickChatModal": () => (/* binding */ clickChatModal),
/* harmony export */   "clickCommentModal": () => (/* binding */ clickCommentModal),
/* harmony export */   "clickUserModal": () => (/* binding */ clickUserModal),
/* harmony export */   "logoutModal": () => (/* binding */ logoutModal),
/* harmony export */   "productModal": () => (/* binding */ productModal)
/* harmony export */ });
/* harmony import */ var _utils_apiModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/apiModule */ "./utils/apiModule.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const body = document.body;
const modal = document.createElement('div');
const modalHeader = `<section class="modalBg setUsertModal">
  <article class="modal appear">
    <button class="modalClose">
      <span class="ir">더보기 닫기 버튼</span>
    </button>
    <button class="modalBtn modalBtn2">로그아웃</button>
  </article>
</section>`;
const logoutAlert = `<section class="modalAlert logoutAlert">
  <h4 class="ir">로그아웃 창</h4>
  <strong class="alertMsg">로그아웃하시겠어요?</strong>
  <div class="alertBtnContent">
    <button class="cancelBtn">취소</button>
    <button class="logoutBtn">로그아웃</button>
  </div>
</section>`;
const modalProduct = `<section class="modalBg productModal">
  <article class="modal appear">
    <button class="modalClose">
      <span class="ir">더보기 닫기 버튼</span>
    </button>
    <button class="modalBtn modalBtn1">삭제</button>
    <button class="modalBtn modalBtn3">웹사이트에서 상품 보기</button>
  </article>
</section>`;
const modalDeleteAlert = `<section class="modalAlert delAlert">
  <h4 class="ir">삭제 창</h4>
  <strong class="alertMsg">삭제하시겠어요?</strong>
  <div class="alertBtnContent">
    <button class="cancelBtn">취소</button>
    <button class="delBtn">삭제</button>
  </div>
</section>`;
const modalPost = `<section class="modalBg postModal">
  <article class="modal appear">
    <button class="modalClose">
      <span class="ir">더보기 닫기 버튼</span>
    </button>
    <button class="modalBtn modalBtn1">삭제</button>
    <button class="modalBtn modalBtn2">수정</button>
  </article>
</section>`;
const modalComment = `<section class="modalBg postModal">
  <article class="modal appear">
    <button class="modalClose">
      <span class="ir">더보기 닫기 버튼</span>
    </button>
    <button class="modalBtn modalBtn1">삭제</button>
  </article>
</section>`;
const modalReport = `<section class="modalBg reportModal">
<article class="modal appear">
  <button class="modalClose">
    <span class="ir">더보기 닫기 버튼</span>
  </button>
  <button class="modalBtn modalBtn1">신고하기</button>
</article>
</section>`;
const reportAlert = `<section class="modalAlert reportAlert">
<h4 class="ir">신고 창</h4>
<strong class="alertMsg">신고하시겠어요?</strong>
<div class="alertBtnContent">
  <button class="cancelBtn">취소</button>
  <button class="reportBtn">신고</button>
</div>
</section>`;
const modalChat = `<section class="modalBg chatModal">
<article class="modal appear">
  <button class="modalClose">
    <span class="ir">채팅방 나가기 버튼</span>
  </button>
  <button class="modalBtn modalBtn1">채팅방 나가기</button>
</article>
</section>`;
// 사용자 모달창
function logoutModal() {
    body.appendChild(modal);
    modal.innerHTML = modalHeader;
    const modalLogoutBtn = document.querySelector('.setUsertModal .modalBtn2');
    const closeBtn = document.querySelector('.setUsertModal .modalClose');
    // 사용자 모달창 비활성화
    closeBtn.addEventListener('click', () => {
        body.removeChild(modal);
    });
    // 사용자 로그아웃 모달창 활성화
    modalLogoutBtn.addEventListener('click', () => {
        modal.innerHTML = logoutAlert;
        body.appendChild(modal);
        const cancelBtn = document.querySelector('.logoutAlert .cancelBtn');
        const logoutBtn = document.querySelector('.logoutAlert .logoutBtn');
        // 사용자 로그아웃 모달창 비활성화
        cancelBtn.addEventListener('click', () => {
            body.removeChild(modal);
        });
        // 사용자 로그아웃
        logoutBtn.addEventListener('click', () => {
            localStorage.clear();
            body.removeChild(modal);
            window.location.hash = '#login'; // 주소 업데이트
        });
    });
}
// 상품 모달
function productModal(productId) {
    const myAccountName = localStorage.getItem('accountname');
    let accountName = window.location.hash.split('accountname=')[1];
    accountName = accountName == null ? myAccountName : accountName;
    // 사용자 본인일 경우 상품 삭제
    if (myAccountName === accountName) {
        modal.innerHTML = modalProduct;
        body.appendChild(modal);
        const productModalClose = document.querySelector('.productModal .modalClose');
        const productDeleteModal = document.querySelector('.productModal .modalBtn1');
        const productLink = document.querySelector('.productModal .modalBtn3');
        // 상품 모달 창 닫기
        productModalClose.addEventListener('click', () => {
            body.removeChild(modal);
        });
        // 상품 삭제 모달 활성화
        productDeleteModal.addEventListener('click', () => {
            modal.innerHTML = modalDeleteAlert;
            body.appendChild(modal);
            // 상품 삭제 모달 닫기
            const alertCancel = document.querySelector('.delAlert .cancelBtn');
            alertCancel.addEventListener('click', () => {
                body.removeChild(modal);
            });
            // 상품 삭제
            const productDelete = document.querySelector('.alertBtnContent .delBtn');
            productDelete.addEventListener('click', () => {
                deleteProduct(productId);
            });
        });
        // 판매 상품 연결
        productLink.addEventListener('click', () => {
            window.location.hash = '#error'; // 주소 업데이트
        });
    }
    else {
        // 다른 사용자 상품일 경우 상품 페이지로 연결
        window.location.hash = '#error';
    }
}
// 판매 상품 삭제
function deleteProduct(productId) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'https://api.mandarin.weniv.co.kr';
        const token = localStorage.getItem('Token');
        const setting = {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-type': 'application/json',
            },
        };
        try {
            const resProfileProduct = yield fetch(`${url}/product/${productId}`, setting);
            if (resProfileProduct.status === 200) {
                location.reload();
                body.removeChild(modal);
                productId = '';
            }
        }
        catch (err) {
            console.error(err);
        }
    });
}
// 사용자에 따라 게시물 모달 구현
function clickUserModal(event) {
    var _a, _b;
    event.preventDefault();
    const myAccountName = localStorage.getItem('accountname');
    let accountName = window.location.hash.split('accountname=')[1];
    accountName = accountName == null ? myAccountName : accountName;
    const postUserName = (_b = (_a = event.currentTarget.previousSibling) === null || _a === void 0 ? void 0 : _a.childNodes[1].textContent) === null || _b === void 0 ? void 0 : _b.replace('@', '');
    const postingId = event.currentTarget.parentElement.dataset.key;
    // 사용자 본인 프로필인 경우, 게시물 삭제 모달
    if (postUserName === myAccountName || accountName === null) {
        body.appendChild(modal);
        modal.innerHTML = modalPost;
        const postDelete = document.querySelector('.postModal .modalBtn1');
        const postEditBtn = document.querySelector('.postModal .modalBtn2');
        const modalClose = document.querySelector('.postModal .modalClose');
        // 모달창 닫기 버튼 클릭 시 모달창 닫기
        modalClose.addEventListener('click', () => {
            body.removeChild(modal);
        });
        // 게시물 삭제 모달 활성화
        postDelete.addEventListener('click', () => {
            modal.innerHTML = modalDeleteAlert;
            body.appendChild(modal);
            // 게시물 삭제 모달 닫기
            const alertCancel = document.querySelector('.delAlert .cancelBtn');
            alertCancel.addEventListener('click', () => {
                body.removeChild(modal);
            });
            // 게시물 삭제
            const postDelete = document.querySelector('.delAlert .delBtn');
            postDelete.addEventListener('click', () => {
                body.removeChild(modal);
                (0,_utils_apiModule__WEBPACK_IMPORTED_MODULE_0__.deletePost)(postingId);
            });
        });
        // 게시물 수정페이지로 이동
        postEditBtn.addEventListener('click', () => {
            window.location.hash = `#postUpload\?postid=${postingId}`;
            body.removeChild(modal);
        });
    }
    else {
        // 다른 사용자 프로필인 경우, 게시물 신고 모달
        body.appendChild(modal);
        modal.innerHTML = modalReport;
        const modalClose = document.querySelector('.reportModal .modalClose');
        const reportModalBtn = document.querySelector('.reportModal .modalBtn1');
        // 모달창 닫기
        modalClose.addEventListener('click', () => {
            body.removeChild(modal);
        });
        // 신고 모달 활성화
        reportModalBtn.addEventListener('click', () => {
            modal.innerHTML = reportAlert;
            body.appendChild(modal);
            // 신고 모달 비활성화
            const cancelBtn = document.querySelector('.reportAlert .cancelBtn');
            cancelBtn.addEventListener('click', () => {
                body.removeChild(modal);
            });
            // 게시물 신고
            const reportBtn = document.querySelector('.reportAlert .reportBtn');
            reportBtn.addEventListener('click', () => {
                (0,_utils_apiModule__WEBPACK_IMPORTED_MODULE_0__.reportPost)(postingId);
            });
        });
    }
}
function clickChatModal() {
    body.appendChild(modal);
    modal.innerHTML = modalChat;
    const modalClose = document.querySelector('.modalClose');
    const cancelBtn = document.querySelector('.modalBtn');
    modalClose.addEventListener('click', () => {
        body.removeChild(modal);
    });
    cancelBtn.addEventListener('click', () => {
        body.removeChild(modal);
        window.location.hash = '#chat'; // 주소 업데이트
    });
}
function clickCommentModal(event) {
    const modal = document.createElement('div');
    event.preventDefault();
    const commentAccountName = event.target.parentElement.closest('article').getAttribute('key');
    const commentId = event.target.parentElement.closest('article').getAttribute('id');
    // 본인 댓글인 경우 삭제 모달 활성화
    if (commentAccountName === localStorage.getItem('accountname')) {
        body.appendChild(modal);
        modal.innerHTML = modalComment;
        const postDelete = document.querySelector('.postModal .modalBtn1');
        const modalClose = document.querySelector('.postModal .modalClose');
        // 모달창 닫기 버튼 클릭 시 모달창 닫기
        modalClose.addEventListener('click', () => {
            body.removeChild(modal);
        });
        // 댓글 삭제 모달 활성화
        postDelete.addEventListener('click', () => {
            modal.innerHTML = modalDeleteAlert;
            body.appendChild(modal);
            // 댓글 삭제 모달 닫기
            const alertCancel = document.querySelector('.delAlert .cancelBtn');
            alertCancel.addEventListener('click', () => {
                body.removeChild(modal);
            });
            // 댓글 삭제
            const postDelete = document.querySelector('.delAlert .delBtn');
            postDelete.addEventListener('click', () => {
                body.removeChild(modal);
                (0,_utils_apiModule__WEBPACK_IMPORTED_MODULE_0__.deleteComment)(commentId);
            });
        });
    }
    else {
        // 다른 사람의 댓글인 경우 신고 모달 활성화
        body.appendChild(modal);
        modal.innerHTML = modalReport;
        const modalClose = document.querySelector('.reportModal .modalClose');
        const reportModalBtn = document.querySelector('.reportModal .modalBtn1');
        // 모달창 닫기
        modalClose.addEventListener('click', () => {
            body.removeChild(modal);
        });
        // 신고 모달 활성화
        reportModalBtn.addEventListener('click', () => {
            modal.innerHTML = reportAlert;
            body.appendChild(modal);
            // 신고 모달 비활성화
            const cancelBtn = document.querySelector('.reportAlert .cancelBtn');
            cancelBtn.addEventListener('click', () => {
                body.removeChild(modal);
            });
            // 댓글 신고
            const reportBtn = document.querySelector('.reportAlert .reportBtn');
            reportBtn.addEventListener('click', () => {
                body.removeChild(modal);
                (0,_utils_apiModule__WEBPACK_IMPORTED_MODULE_0__.reportComment)(commentId);
            });
        });
    }
}
// 사용자 로그아웃 모달
// export function logoutModal(headerModal) {
//   headerModal.addEventListener('click', logoutModal());
// }


/***/ }),

/***/ "./script/post.ts":
/*!************************!*\
  !*** ./script/post.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLoginUserInfo": () => (/* binding */ getLoginUserInfo),
/* harmony export */   "postInput": () => (/* binding */ postInput),
/* harmony export */   "renderPost": () => (/* binding */ renderPost),
/* harmony export */   "submitComment": () => (/* binding */ submitComment)
/* harmony export */ });
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common */ "./utils/common.ts");
/* harmony import */ var _heartBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heartBtn */ "./script/heartBtn.ts");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ "./script/modal.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function postInput(event) {
    const postChatForm = document.querySelector('#postChatContent');
    const postButton = document.querySelector('.postBtn');
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
function renderPost() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'https://api.mandarin.weniv.co.kr';
        const postId = window.location.href.split('postid=')[1];
        const token = localStorage.getItem('Token');
        try {
            const res = yield fetch(`${url}/post/${postId}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-type': 'application/json',
                },
            });
            const json = yield res.json();
            const postInfo = json.post;
            const profileImg = postInfo.author.image;
            const userName = postInfo.author.username;
            const accountName = postInfo.author.accountname;
            const content = postInfo.content;
            const jsonImg = Array.from(postInfo.image.split(','));
            const heartCount = postInfo.heartCount;
            const commentCount = postInfo.commentCount;
            const createdAt = (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.timeForToday)(postInfo.createdAt);
            const postButton = document.querySelector('.postBtn');
            postButton.disabled = true;
            postButton.style.color = '#dbdbdb';
            // 프로필
            const div = document.querySelector('.userItem');
            div.innerHTML = '';
            const section = document.querySelector('.postContent');
            const userBox = document.createElement('a');
            const userProfileImage = document.createElement('img');
            const userInfo = document.createElement('div');
            const userNickname = document.createElement('strong');
            const userText = document.createElement('div');
            const userMsgContent = document.createElement('p');
            userBox.className = 'userBox';
            userProfileImage.className = 'userProfileImage';
            userInfo.className = 'userInfo';
            userNickname.className = 'userNickname';
            userText.className = 'userText';
            userMsgContent.className = 'userMsgContent userStatusMsg';
            userBox.addEventListener('click', () => {
                window.location.hash = `#profile\?accountname=${accountName}`; // 주소 업데이트
            });
            userProfileImage.src = profileImg.length <= 20 ? `${url}/${profileImg}` : profileImg;
            userNickname.innerText = userName;
            userMsgContent.innerText = `@${accountName}`;
            div.appendChild(userBox);
            userBox.appendChild(userProfileImage);
            userBox.appendChild(userInfo);
            userInfo.appendChild(userNickname);
            userInfo.appendChild(userText);
            userText.appendChild(userMsgContent);
            // 게시글
            const jsonImgTags = jsonImg.length > 0
                ? `
       <div class="postDetaileImgContent">
         <ul>
           <li class="postDetaileImgContentFlex">
           ${jsonImg.map((item) => {
                    if (item.split('.')[1] === 'api') {
                        item = item.replace('https://mandarin.api.weniv.co.kr/', 'https://api.mandarin.weniv.co.kr/');
                    }
                    return `<img src=${item} alt="게시물 이미지" />`;
                })}
           </li>
         </ul>
         </div>`
                : '';
            let heartStatus;
            if (json.post.hearted) {
                heartStatus = '.likeBtn.on';
            }
            else {
                heartStatus = '.likeBtn';
            }
            const postTitleHeading4El = document.createElement('h4');
            const contentPEl = document.createElement('p');
            postTitleHeading4El.classList.add('ir');
            postTitleHeading4El.innerText = '게시글 내용';
            contentPEl.innerText = `${content}`;
            section.appendChild(postTitleHeading4El);
            section.appendChild(contentPEl);
            const range = document.createRange();
            const jsonImgTagsNode = range.createContextualFragment(jsonImgTags);
            section.appendChild(jsonImgTagsNode);
            const postBtnDivEl = document.createElement('div');
            const heartBtnEl = document.createElement('button');
            const likeTextSpanEl = document.createElement('span');
            const likeCountSpanEl = document.createElement('span');
            const commentBtnDivEl = document.createElement('div');
            const commentCountSpanEl = document.createElement('span');
            const postDateStrongEl = document.createElement('strong');
            postBtnDivEl.classList.add('postBtnContent');
            heartBtnEl.classList.add(`${heartStatus}`);
            likeTextSpanEl.classList.add('ir');
            likeTextSpanEl.innerText = '좋아요 버튼';
            likeCountSpanEl.classList.add('likeCount');
            likeCountSpanEl.innerText = `${heartCount}`;
            commentBtnDivEl.classList.add('commentBtn');
            commentCountSpanEl.classList.add('commentCount');
            commentCountSpanEl.innerText = `${commentCount}`;
            postDateStrongEl.classList.add('postDate');
            postDateStrongEl.innerText = `${createdAt}`;
            commentBtnDivEl.appendChild(commentCountSpanEl);
            heartBtnEl.appendChild(likeTextSpanEl);
            heartBtnEl.appendChild(likeCountSpanEl);
            postBtnDivEl.appendChild(heartBtnEl);
            postBtnDivEl.appendChild(commentBtnDivEl);
            section.appendChild(postBtnDivEl);
            section.appendChild(postDateStrongEl);
            const heartBtn = document.querySelector('.postBtnContent button');
            heartBtn.addEventListener('click', _heartBtn__WEBPACK_IMPORTED_MODULE_1__.clickHeart);
            // 댓글
            const commentSection = document.querySelector('.postCommentBox');
            const { comments } = yield getCommentDetail();
            for (const comment of comments) {
                const commentArticleEl = document.createElement('article');
                const commentTitleHeading3El = document.createElement('h3');
                const userSectionEl = document.createElement('section');
                const userListDivEl = document.createElement('div');
                const userItemDivEl = document.createElement('div');
                const userBoxDivEl = document.createElement('div');
                const profileImgEl = document.createElement('img');
                const userCommentInfoDivEl = document.createElement('div');
                const userNickNameStrongEl = document.createElement('strong');
                const commentTimeStrongEl = document.createElement('strong');
                const moreModalBtnEl = document.createElement('button');
                const modalTextSpanEl = document.createElement('span');
                const commentContentSectionEl = document.createElement('section');
                const commentTitleHeading4El = document.createElement('h4');
                const commentContentPEl = document.createElement('p');
                commentArticleEl.classList.add('post');
                commentArticleEl.classList.add('postCommentContent');
                commentArticleEl.id = `${comment.id}`;
                commentArticleEl.setAttribute('key', `${comment.author.accountname}`);
                commentTitleHeading3El.classList.add('ir');
                commentTitleHeading3El.innerText = '게시글 댓글';
                userListDivEl.classList.add('userList');
                userItemDivEl.classList.add('userItem');
                userBoxDivEl.classList.add('userBox');
                profileImgEl.classList.add('userProfileImage');
                profileImgEl.classList.add('postUserProfile');
                profileImgEl.src =
                    comment.author.image.length <= 20 ? `${url}/${comment.author.image}` : `${comment.author.image}`;
                profileImgEl.setAttribute('alt', '프로필 이미지');
                userCommentInfoDivEl.classList.add('userCommentInfo');
                userNickNameStrongEl.classList.add('userNickname');
                userNickNameStrongEl.classList.add('postUserNickName');
                userNickNameStrongEl.innerText = `${comment.author.username}`;
                commentTimeStrongEl.classList.add('postTime');
                commentTimeStrongEl.innerText = `∙ ${(0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.timeForToday)(comment.createdAt)}`;
                moreModalBtnEl.classList.add('moreBtn');
                moreModalBtnEl.classList.add('buttonClick');
                modalTextSpanEl.classList.add('ir');
                modalTextSpanEl.innerText = '댓글 모달 버튼';
                commentContentSectionEl.classList.add('postContent');
                commentContentSectionEl.classList.add('postComment');
                commentTitleHeading4El.classList.add('ir');
                commentTitleHeading4El.innerText = '댓글 내용';
                commentContentPEl.innerText = `${comment.content}`;
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
            const modal = document.querySelectorAll('.moreBtn.buttonClick');
            [].forEach.call(modal, function (modal) {
                modal.addEventListener('click', _modal__WEBPACK_IMPORTED_MODULE_2__.clickCommentModal);
            });
        }
        catch (err) {
            console.error(err);
        }
    });
}
// 상세 댓글 불러오기
function getCommentDetail() {
    return __awaiter(this, void 0, void 0, function* () {
        const token = localStorage.getItem('Token');
        const url = 'https://api.mandarin.weniv.co.kr';
        const postId = window.location.href.split('postid=')[1];
        try {
            const res = yield fetch(`${url}/post/${postId}/comments`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-type': 'application/json',
                },
            });
            return res.json();
        }
        catch (err) {
            console.log(err);
        }
    });
}
// 로그인 유저 정보
function getLoginUserInfo(commentUserProfile) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'https://api.mandarin.weniv.co.kr';
        const token = localStorage.getItem('Token');
        const accountname = localStorage.getItem('accountname');
        try {
            const res = yield fetch(`${url}/profile/${accountname}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-type': 'application/json',
                },
            });
            const userJson = yield res.json();
            const commentUserProfileImg = userJson.profile.image;
            // 댓글 유저 프로필 이미지
            commentUserProfile.src =
                commentUserProfileImg.length <= 20 ? `${url}/${commentUserProfileImg}` : `${commentUserProfileImg}`;
        }
        catch (err) {
            console.log(err);
        }
    });
}
// 댓글 입력
function submitComment(event) {
    return __awaiter(this, void 0, void 0, function* () {
        event.preventDefault();
        const url = 'https://api.mandarin.weniv.co.kr';
        const postId = window.location.href.split('postid=')[1];
        const commentInput = document.getElementById('postChatContent');
        const token = localStorage.getItem('Token');
        try {
            const res = yield fetch(`${url}/post/${postId}/comments`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    comment: {
                        content: commentInput.value,
                    },
                }),
            });
            commentInput.value = '';
            if (res) {
                location.reload();
            }
        }
        catch (err) {
            console.log(err);
        }
    });
}


/***/ }),

/***/ "./script/postUpload.ts":
/*!******************************!*\
  !*** ./script/postUpload.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkPost": () => (/* binding */ checkPost),
/* harmony export */   "createPost": () => (/* binding */ createPost),
/* harmony export */   "postInput": () => (/* binding */ postInput),
/* harmony export */   "readInputFile": () => (/* binding */ readInputFile)
/* harmony export */ });
// fileArr  : Blob  객체형 파일 데이터 저장
// arrImgName : 파일명 저장
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let fileArr = [];
let arrImgName = [];
// 게시물 수정 , 생성에 따른 함수 실행
function checkPost(postUserProfile, postImgContainer, postUploadTxt, postUploadBtn) {
    const postid = window.location.hash.split('?postid=')[1];
    fileArr = [];
    // 게시물 수정 PUT 요청
    if (postid) {
        getLoginUserInfo(postUserProfile);
        getPost(postid, postUploadTxt, postImgContainer);
        postUploadBtn.addEventListener('click', () => {
            editPost(postid, postUploadTxt);
        });
    }
    else {
        postUploadBtn.addEventListener('click', () => createPost());
        getLoginUserInfo(postUserProfile);
    }
}
// 로그인 유저 정보
function getLoginUserInfo(profileImgEl) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = localStorage.getItem('Token');
        const accountname = localStorage.getItem('accountname');
        const url = 'https://api.mandarin.weniv.co.kr';
        try {
            const res = yield fetch(`${url}/profile/${accountname}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-type': 'application/json',
                },
            });
            const userJson = yield res.json();
            profileImgEl.src =
                userJson.profile.image.length <= 20 ? `${url}/${userJson.profile.image}` : `${userJson.profile.image}`;
        }
        catch (err) {
            console.log(err);
        }
    });
}
// 업로드 사진 미리보기, 이미지 삭제 이벤트 등록
function readInputFile(event) {
    const reader = new FileReader();
    const files = event.target.files;
    const postImgContainer = document.querySelector('.postUploadImageScreen');
    const postImgItem = document.querySelectorAll('.postImgItem');
    const imgFileName = files[0].name;
    reader.readAsDataURL(files[0]);
    fileArr.push(files[0]);
    if (postImgItem.length === 3) {
        fileArr.splice(fileArr.length - 1);
        alert('이미지는 최대 3장 업로드 가능합니다.');
    }
    else {
        reader.onload = function () {
            const imgItem = document.createElement('div');
            imgItem.style.backgroundImage = `url(${reader.result})`;
            imgItem.className = 'postImgItem';
            imgItem.dataset.key = `${imgFileName}`;
            postImgContainer.appendChild(imgItem);
            event.target.value = '';
            const closeBtn = document.createElement('button');
            closeBtn.className = 'postImgCloseBtn';
            imgItem.appendChild(closeBtn);
            closeBtn.addEventListener('click', deletImg);
        };
    }
}
// 해당 이미지 fileArr에서 삭제, 업로드 사진 미리보기에서 삭제
function deletImg(event) {
    const postImgContainer = document.querySelector('.postUploadImageScreen');
    const imgItem = event.target.parentElement;
    const targetImgName = imgItem.dataset.key;
    const defaultUrl = 'https://api.mandarin.weniv.co.kr';
    const fileLength = fileArr.length;
    // 업로드 사진 미리보기에서 삭제
    postImgContainer.removeChild(imgItem);
    // 클릭한 타겟을 fileArr 배열에서 삭제
    for (let i = 0; i < fileLength; i++) {
        if (fileArr[i].name === targetImgName) {
            fileArr.splice(i, 1);
        }
    }
    for (let i = 0; i < fileLength; i++) {
        let alreadyImg = imgItem.style.backgroundImage.split('"')[1].replace(`${defaultUrl}/`, '');
        if (fileArr[i].name === alreadyImg) {
            fileArr.splice(i, 1);
            break;
        }
    }
}
// 이미지 업로드
function uploadImg(fileArr) {
    return __awaiter(this, void 0, void 0, function* () {
        const formData = new FormData();
        const url = 'https://api.mandarin.weniv.co.kr';
        arrImgName = [];
        fileArr.forEach(file => {
            formData.append('image', file);
        });
        try {
            const response = yield fetch(url + '/image/uploadfiles', {
                method: 'POST',
                body: formData,
            });
            const res = yield response.json();
            res.forEach((imageData) => {
                arrImgName.push(`${url}/${imageData.filename}`);
            });
            fileArr = [];
            return arrImgName;
        }
        catch (_a) {
            fileArr.pop();
            alert('이미지 파일은 최대 3장까지만 가능합니다.');
        }
    });
}
// 업로드버튼 활성화
function postInput() {
    const postUploadTxt = document.querySelector('.postUploadComentTxt');
    const postUploadBtn = document.querySelector('.headerBarBtn.buttonClick');
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
function createPost() {
    return __awaiter(this, void 0, void 0, function* () {
        const postUploadTxt = document.querySelector('.postUploadComentTxt');
        const token = localStorage.getItem('Token');
        const url = 'https://api.mandarin.weniv.co.kr';
        const contentText = postUploadTxt.value;
        const images = yield uploadImg(fileArr);
        const res = yield fetch(`${url}/post`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                post: {
                    content: contentText,
                    image: images.join(','),
                },
            }),
        });
        const json = yield res.json();
        if (json.post) {
            fileArr = [];
            window.location.hash = '#profile';
        }
        else {
            return;
        }
    });
}
// 게시물 수정 페이지에서 url를 파일로 변환
function convertURLtoFile(postImgArr, fileArr) {
    return __awaiter(this, void 0, void 0, function* () {
        for (const imgUrl of postImgArr) {
            const response = yield fetch(imgUrl);
            const data = yield response.blob();
            const ext = imgUrl.split('.').pop(); // url 구조에 맞게 수정할 것
            const filename = imgUrl.split('/').pop(); // url 구조에 맞게 수정할 것
            const metadata = { type: `image/${ext}` };
            fileArr.push(new File([data], filename, metadata));
        }
    });
}
// 게시물 수정 페이지에서 이미지 미리보기 및 삭제 버튼 추가
function setImg(postImgContainer, postImgArr, fileArr) {
    return __awaiter(this, void 0, void 0, function* () {
        yield convertURLtoFile(postImgArr, fileArr);
        if (postImgArr.length >= 1 && postImgArr[0] !== '') {
            postImgArr.map((imageSrc) => {
                const imgItem = document.createElement('div');
                imgItem.className = 'postImgItem';
                imgItem.setAttribute('style', `background-image: url(${imageSrc})`);
                postImgContainer.appendChild(imgItem);
                const closeBtn = document.createElement('button');
                closeBtn.className = 'postImgCloseBtn';
                imgItem.appendChild(closeBtn);
                closeBtn.addEventListener('click', deletImg);
            });
        }
    });
}
// 서버에 저장된 게시글, 이미지 가져오기
function getPost(postid, postUploadTxt, postImgContainer) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = localStorage.getItem('Token');
        const defaultUrl = 'https://api.mandarin.weniv.co.kr';
        try {
            const res = yield fetch(`${defaultUrl}/post/${postid}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-type': 'application/json',
                },
            });
            const json = yield res.json();
            const post = json.post;
            const postContent = post.content;
            const postImgArr = post.image.split(',');
            postUploadTxt.textContent = postContent;
            setImg(postImgContainer, postImgArr, fileArr);
        }
        catch (err) {
            console.log(err);
        }
    });
}
// 게시물 수정
function editPost(postid, postUploadTxt) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = localStorage.getItem('Token');
        const defaultUrl = 'https://api.mandarin.weniv.co.kr';
        const resultImg = yield uploadImg(fileArr);
        try {
            const res = yield fetch(`${defaultUrl}/post/${postid}`, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    post: {
                        content: postUploadTxt.value,
                        image: resultImg.join(','),
                    },
                }),
            });
            const json = yield res.json();
            fileArr = [];
            window.location.hash = '#profile'; // 주소 업데이트
            if (json.type == 'entity.too.large') {
                console.error(json.message);
                alert('이미지 용량이 너무 큽니다.');
            }
        }
        catch (err) {
            console.error(err);
            window.location.hash = '#error';
        }
    });
}


/***/ }),

/***/ "./script/profile.ts":
/*!***************************!*\
  !*** ./script/profile.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "albumTypePost": () => (/* binding */ albumTypePost),
/* harmony export */   "getPostingList": () => (/* binding */ getPostingList),
/* harmony export */   "getProfileInfo": () => (/* binding */ getProfileInfo),
/* harmony export */   "listTypePost": () => (/* binding */ listTypePost)
/* harmony export */ });
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common */ "./utils/common.ts");
/* harmony import */ var _heartBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heartBtn */ "./script/heartBtn.ts");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ "./script/modal.ts");
/* harmony import */ var _utils_apiModule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/apiModule */ "./utils/apiModule.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




// 프로필 정보 가져오기
function getProfileInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        const myAccountName = localStorage.getItem('accountname');
        let accountName = window.location.hash.split('accountname=')[1];
        accountName = accountName == null ? myAccountName : accountName;
        const userProfile = yield (0,_utils_apiModule__WEBPACK_IMPORTED_MODULE_3__.getProfile)(accountName);
        if (userProfile.accountname === myAccountName) {
            setMyProfile(userProfile);
        }
        else {
            setYourProfile(userProfile);
        }
    });
}
function setMyProfile(userProfile) {
    const url = 'https://api.mandarin.weniv.co.kr';
    const createEditLink = document.createElement('div');
    const createProductLink = document.createElement('div');
    const profileLinkBtn = document.querySelector('.link');
    createEditLink.setAttribute('class', 'fixProfile');
    createEditLink.addEventListener('click', () => {
        window.location.hash = `#editProfile`; // 주소 업데이트
    });
    createEditLink.innerText = '프로필 수정';
    profileLinkBtn.append(createEditLink);
    createProductLink.setAttribute('class', 'addPosting');
    createProductLink.addEventListener('click', () => {
        window.location.hash = '#product';
    });
    createProductLink.innerText = '상품 등록';
    profileLinkBtn.append(createProductLink);
    document.querySelector('.ProfileContent .myImage').src =
        userProfile.image.length <= 20 ? `${url}/${userProfile.image}` : `${userProfile.image}`;
    document.querySelector('.profileInfo .userName').innerText = userProfile.username;
    document.querySelector('.profileInfo .userId').innerText = `@${userProfile.accountname}`;
    document.querySelector('.profileInfo .introduction').innerText = userProfile.intro;
    getProductList(userProfile);
}
// 다른 사람 프로필 페이지 구현
function setYourProfile(userProfile) {
    const createMessageImg = document.createElement('img');
    const createFollowButton = document.createElement('button');
    const createShareImg = document.createElement('img');
    const profileLinkBtn = document.querySelector('.link');
    createMessageImg.setAttribute('class', 'messageBtn');
    createMessageImg.setAttribute('src', '../asset/images/icons/icon__message.svg');
    createMessageImg.setAttribute('alt', '메세지 버튼');
    createMessageImg.addEventListener('click', () => {
        window.location.hash = `#chatting1`; // 주소 업데이트
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
    document.querySelector('.profileInfo .userId').innerText = `@ ${userProfile.accountname}`;
    document.querySelector('.profileInfo .introduction').innerText = userProfile.intro;
    // 팔로우 / 언팔로우 스타일
    createFollowButton.addEventListener('click', (event) => {
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
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'https://api.mandarin.weniv.co.kr';
        const token = localStorage.getItem('Token');
        const setting = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-type': 'application/json',
            },
        };
        try {
            const resProfileProduct = yield fetch(`${url}/product/${userProfile.accountname}`, setting);
            const resProfileProductJson = yield resProfileProduct.json();
            setProductList(resProfileProductJson);
        }
        catch (err) {
            console.error(err);
        }
    });
}
// 등록된 상품 수에 따라 프로필에 해당 상품 반영
function setProductList(resProfileProductJson) {
    if (resProfileProductJson.product.length !== 0) {
        const saleItems = document.querySelector('.saleItemContainer');
        const createP = document.createElement('p');
        const createUl = document.createElement('ul');
        const url = 'https://api.mandarin.weniv.co.kr';
        createP.setAttribute('class', 'title');
        createUl.setAttribute('class', 'productList');
        saleItems.append(createP);
        saleItems.append(createUl);
        document.querySelector('.saleItems .title').innerText = '판매 중인 상품';
        const productList = document.querySelector('.saleItems .productList');
        for (const product of resProfileProductJson.product) {
            const imageUrl = product.itemImage.length >= 100 ? `${product.itemImage}` : `${url}/${product.itemImage}`;
            productList.innerHTML += `<li id="${product.id}">
      <img src="${imageUrl}" alt="상품 이미지" />
      <p class="ProductTitle">${product.itemName}</p>
      <p class="price">${product.price.toLocaleString()}원</p>
    </li>`;
        }
    }
    else {
        return;
    }
    const product = document.querySelectorAll('.productList li');
    [].forEach.call(product, function (product) {
        product.addEventListener('click', (event) => {
            const productId = event.target.closest('li').id;
            (0,_modal__WEBPACK_IMPORTED_MODULE_2__.productModal)(productId);
        });
    });
}
// 게시물 가지고 오기
function getPostingList() {
    const userPostInfo = (0,_utils_apiModule__WEBPACK_IMPORTED_MODULE_3__.getPosting)();
    userPostInfo.then(res => {
        setPostingList(res);
    });
}
// 게시물 타입바 생성 및 최초 목록형으로 포스팅
function setPostingList(userPostInfo) {
    const postingSummary = document.querySelector('.postingSummary');
    if (userPostInfo.length === 0) {
        postingSummary.classList.add('hidden');
    }
    else {
        postingSummary.classList.remove('hidden');
        const createArticle = document.createElement('article');
        const createH3 = document.createElement('h3');
        createArticle.setAttribute('class', 'post');
        createH3.setAttribute('class', 'ir');
        createH3.innerText = '피드 게시글';
        createArticle.appendChild(createH3);
        postingSummary.append(createArticle);
        listTypePost(userPostInfo);
    }
}
// 목록형으로 포스팅 표시
function listTypePost(userPostInfo) {
    const postingSummary = document.querySelector('.postingSummary');
    const postContent = document.querySelector('.postContent');
    const albumType = document.querySelector('.postingType.album.buttonClick');
    const ListType = document.querySelector('.postingType.list.buttonClick');
    const url = 'https://api.mandarin.weniv.co.kr';
    albumType.classList.add('unselected');
    ListType.classList.remove('unselected');
    if (postContent) {
        postContent.remove();
    }
    const createArticle = document.createElement('article');
    const createH3 = document.createElement('h3');
    createArticle.setAttribute('class', 'post');
    createH3.setAttribute('class', 'ir');
    createH3.innerText = '피드 게시글';
    createArticle.appendChild(createH3);
    postingSummary.append(createArticle);
    const posting = document.querySelectorAll('.post');
    posting[0].innerHTML = '<h3 class="ir">피드 게시글</h3>';
    if (posting.length >= 2) {
        posting[1].remove();
    }
    for (const post of userPostInfo) {
        let postImage = '';
        let heartStatus = '';
        if (post.image && post.image.search('undefined') === -1) {
            let images = post.image.split(',');
            for (let image of images) {
                if (image.split('.')[1] === 'api') {
                    image = image.replace('https://mandarin.api.weniv.co.kr/', 'https://api.mandarin.weniv.co.kr/');
                }
                postImage += `
        <li>
          <img src="${image}" alt="게시물 이미지" onerror="this.style.display='none'"/>
        </li>
        `;
            }
        }
        let checkImg = !postImage ? '' : `<div class="postImgContent"><ul>${postImage}</ul></div>`;
        // 좋아요 이미지 on, off 스타일 구현
        if (post.hearted) {
            heartStatus = 'likeBtn on';
        }
        else {
            heartStatus = 'likeBtn';
        }
        const range = document.createRange();
        const ImgNode = range.createContextualFragment(checkImg);
        const postItemDivEl = document.createElement('div');
        const listContent = document.querySelector('.post');
        postItemDivEl.classList.add('postItem');
        // 사용자 정보 마크업
        const postHeading4El = document.createElement('h4');
        const userInfoSectionEl = document.createElement('section');
        const userListDivEl = document.createElement('div');
        const userItemDivEl = document.createElement('div');
        const userBoxDivEl = document.createElement('div');
        const userProfileImgEl = document.createElement('img');
        const userInfoDivEl = document.createElement('div');
        const userNicknameStrongEl = document.createElement('strong');
        const userTextDivEl = document.createElement('div');
        const userStatusMsgPEl = document.createElement('p');
        const moreBtnEl = document.createElement('button');
        const moreTextSpanEl = document.createElement('span');
        postHeading4El.classList.add('ir');
        postHeading4El.innerText = '게시물';
        userListDivEl.classList.add('userList');
        userItemDivEl.classList.add('userItem');
        userBoxDivEl.classList.add('userBox');
        userBoxDivEl.setAttribute('data-key', post.id);
        userProfileImgEl.classList.add('userProfileImage');
        if (post.author.image.length <= 20) {
            userProfileImgEl.setAttribute('src', `${url}/${post.author.image}`);
        }
        else
            userProfileImgEl.setAttribute('src', `${post.author.image}`);
        userProfileImgEl.setAttribute('alt', `${post.author.username}님의 프로필 이미지`);
        userInfoDivEl.classList.add('userInfo');
        userNicknameStrongEl.classList.add('userNickname');
        userNicknameStrongEl.innerText = `${post.author.username}`;
        userTextDivEl.classList.add('userText');
        userStatusMsgPEl.classList.add('userMsgContent');
        userStatusMsgPEl.classList.add('userStatusMsg');
        userStatusMsgPEl.innerText = `@${post.author.accountname}`;
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
        const contentSectionEl = document.createElement('section');
        const contentTitleheading4El = document.createElement('h4');
        const contentPEl = document.createElement('p');
        const contentBtnDivEl = document.createElement('div');
        const likeBtnEl = document.createElement('button');
        const likeTextSpanEl = document.createElement('span');
        const likeCountSpanEl = document.createElement('span');
        const commentBtnDivEl = document.createElement('div');
        const commentCountSpanEl = document.createElement('span');
        const postDateStrongEl = document.createElement('strong');
        contentSectionEl.classList.add('postContent');
        contentSectionEl.id = `${post.id}`;
        contentTitleheading4El.classList.add('ir');
        contentTitleheading4El.innerText = '게시글 내용';
        contentPEl.innerText = `${post.content}`;
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
        likeCountSpanEl.innerText = `${post.heartCount}`;
        commentBtnDivEl.classList.add('commentBtn');
        commentBtnDivEl.dataset.postid = `${post.id}`;
        commentCountSpanEl.classList.add('commentCount');
        commentCountSpanEl.innerText = `${post.commentCount}`;
        postDateStrongEl.classList.add('postDate');
        postDateStrongEl.innerText = `${(0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.timeForToday)(post.createdAt)}`;
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
        likeBtnEl.addEventListener('click', _heartBtn__WEBPACK_IMPORTED_MODULE_1__.clickHeart);
        moreBtnEl.addEventListener('click', _modal__WEBPACK_IMPORTED_MODULE_2__.clickUserModal);
        commentBtnDivEl.addEventListener('click', clickComment);
        const moreBtn = document.querySelectorAll('.moreBtn.buttonClick');
        const heartBtn = document.querySelectorAll('.postBtnContent button');
        [].forEach.call(heartBtn, function (heartBtn) {
            heartBtn.addEventListener('click', _heartBtn__WEBPACK_IMPORTED_MODULE_1__.clickHeart);
        });
        [].forEach.call(moreBtn, function (moreBtn) {
            moreBtn.addEventListener('click', _modal__WEBPACK_IMPORTED_MODULE_2__.clickUserModal);
        });
    }
}
function clickComment(event) {
    const postId = event.currentTarget.dataset.postid;
    window.location.hash = `#post\?postid=${postId}`; // 주소 업데이트
}
function clickUserInfo(event) {
    var _a;
    const userAccount = (_a = event.currentTarget.children[1].children[1].textContent) === null || _a === void 0 ? void 0 : _a.replace('@', '');
    window.location.hash = `#profile\?accountname=${userAccount}`; // 주소 업데이트
}
// 앨범형 포스팅 구현
function albumTypePost() {
    (0,_utils_apiModule__WEBPACK_IMPORTED_MODULE_3__.getPosting)().then(res => setAlbum(res));
}
function setAlbum(userPostInfo) {
    const postingSummary = document.querySelector('.postingSummary');
    const postContent = document.querySelectorAll('.postContent');
    const post = document.querySelector('.post');
    const albumType = document.querySelector('.postingType.album.buttonClick');
    const ListType = document.querySelector('.postingType.list.buttonClick');
    ListType.classList.add('unselected');
    albumType.classList.remove('unselected');
    if (post) {
        post.remove();
    }
    if (postContent.length >= 1) {
        postContent[0].remove();
    }
    const createArticle = document.createElement('article');
    const createH2 = document.createElement('h2');
    const createUl = document.createElement('ul');
    createArticle.setAttribute('class', 'postContent');
    createH2.setAttribute('class', 'ir');
    createH2.innerText = '등록된 게시물';
    createUl.setAttribute('class', 'postingList');
    createArticle.appendChild(createH2);
    createArticle.appendChild(createUl);
    postingSummary.appendChild(createArticle);
    for (const post of userPostInfo) {
        const postImg = post.image.split(',');
        // 게시물에 이미지가 없는 경우, img 태그 생성 불가.
        // 게시물에 이미지가 2개 이상인 경우, 이미지 레이어 아이콘 추가.
        if (postImg[0] === '') {
        }
        else if (postImg.length >= 2) {
            const imgLiEl = document.createElement('li');
            const postImgEl = document.createElement('img');
            const layerImgEl = document.createElement('img');
            postImg[0] =
                postImg[0].split('.')[1] === 'api'
                    ? postImg[0].replace('https://mandarin.api.weniv.co.kr', 'https://api.mandarin.weniv.co.kr')
                    : postImg[0];
            postImgEl.setAttribute('src', `${postImg[0]}`);
            postImgEl.setAttribute('alt', '');
            layerImgEl.classList.add('imageLayer');
            layerImgEl.setAttribute('src', '../asset/images/icons/icon__imageLayer.svg');
            layerImgEl.setAttribute('alt', '이미지 레이어 아이콘');
            imgLiEl.appendChild(postImgEl);
            imgLiEl.appendChild(layerImgEl);
            createUl.appendChild(imgLiEl);
        }
        else {
            const imgLiEl = document.createElement('li');
            const postImgEl = document.createElement('img');
            postImgEl.setAttribute('src', `${postImg[0]}`);
            postImgEl.setAttribute('alt', '');
            imgLiEl.appendChild(postImgEl);
            createUl.appendChild(imgLiEl);
        }
    }
}


/***/ }),

/***/ "./script/profileFollow.ts":
/*!*********************************!*\
  !*** ./script/profileFollow.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// 쿼리스트링에 따라 팔로우, 팔로윙 페이지 보여주기
function init(userListUlEl) {
    const title = window.location.hash.split('title=')[1];
    const myAccountName = localStorage.getItem('accountname');
    const reg = new RegExp('@(.*?)&');
    let accountName = window.location.hash.split(reg)[1];
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
    return __awaiter(this, void 0, void 0, function* () {
        const token = localStorage.getItem('Token');
        const url = 'https://api.mandarin.weniv.co.kr';
        const setting = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-type': 'application/json',
            },
        };
        try {
            const followingData = yield fetch(`${url}/profile/${accountName}/following`, setting);
            const followingDataJson = yield followingData.json();
            setFollowing(followingDataJson, userListUlEl);
        }
        catch (err) {
            console.log(err);
        }
    });
}
// 팔로윙 정보(내가 팔로우한 사용자) 페이지에 반영
function setFollowing(followingDataJson, userListUlEl) {
    const title = document.querySelector('.followers .followTitle');
    const url = 'https://api.mandarin.weniv.co.kr';
    title.innerText = 'Followings';
    for (const following of followingDataJson) {
        const userItemLiEl = document.createElement('li');
        const userInfoAnchorEl = document.createElement('a');
        const userProfileImgEl = document.createElement('img');
        const userInfoDivEl = document.createElement('div');
        const userNickNameStrongEl = document.createElement('strong');
        const userTextDivEl = document.createElement('div');
        const userAccountPEl = document.createElement('p');
        const followBtnEl = document.createElement('button');
        userItemLiEl.classList.add('userItem');
        userInfoAnchorEl.classList.add('userBox');
        userProfileImgEl.classList.add('userProfileImage');
        userProfileImgEl.classList.add('follow');
        userProfileImgEl.src = following.image.length <= 20 ? `${url}/${following.image}` : `${following.image}`;
        userProfileImgEl.setAttribute('alt', '프로필 이미지');
        userInfoDivEl.classList.add('userInfo');
        userInfoDivEl.classList.add('follow');
        userNickNameStrongEl.classList.add('userNickname');
        userNickNameStrongEl.innerText = `${following.username}`;
        userTextDivEl.classList.add('userText');
        userAccountPEl.classList.add('userMsgContent');
        userAccountPEl.classList.add('userStatusMsg');
        userAccountPEl.innerText = `${following.accountname}`;
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
    return __awaiter(this, void 0, void 0, function* () {
        const token = localStorage.getItem('Token');
        const url = 'https://api.mandarin.weniv.co.kr';
        const setting = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-type': 'application/json',
            },
        };
        try {
            const followerData = yield fetch(`${url}/profile/${accountName}/follower`, setting);
            const followerDataJson = yield followerData.json();
            setFollower(followerDataJson, userListUlEl);
        }
        catch (err) {
            console.log(err);
        }
    });
}
// 팔로워 정보 (나를 팔로우한 사용자 정보) 페이지에 반영
function setFollower(followerDataJson, userListUlEl) {
    const title = document.querySelector('.followers .followTitle');
    const url = 'https://api.mandarin.weniv.co.kr';
    title.innerText = 'Followers';
    for (const follower of followerDataJson) {
        const userItemLiEl = document.createElement('li');
        const userInfoAnchorEl = document.createElement('a');
        const userProfileImgEl = document.createElement('img');
        const userInfoDivEl = document.createElement('div');
        const userNickNameStrongEl = document.createElement('strong');
        const userTextDivEl = document.createElement('div');
        const userAccountPEl = document.createElement('p');
        const followBtnEl = document.createElement('button');
        userItemLiEl.classList.add('userItem');
        userInfoAnchorEl.classList.add('userBox');
        userProfileImgEl.classList.add('userProfileImage');
        userProfileImgEl.classList.add('follow');
        userProfileImgEl.src = follower.image.length <= 20 ? `${url}/${follower.image}` : `${follower.image}`;
        userProfileImgEl.setAttribute('alt', '프로필 이미지');
        userInfoDivEl.classList.add('userInfo');
        userInfoDivEl.classList.add('follow');
        userNickNameStrongEl.classList.add('userNickname');
        userNickNameStrongEl.innerText = `${follower.username}`;
        userTextDivEl.classList.add('userText');
        userAccountPEl.classList.add('userMsgContent');
        userAccountPEl.classList.add('userStatusMsg');
        userAccountPEl.innerText = `${follower.accountname}`;
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


/***/ }),

/***/ "./script/registerProfile.ts":
/*!***********************************!*\
  !*** ./script/registerProfile.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkInput": () => (/* binding */ checkInput),
/* harmony export */   "isValidId": () => (/* binding */ isValidId),
/* harmony export */   "previewImg": () => (/* binding */ previewImg)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const url = 'https://api.mandarin.weniv.co.kr';
let profileImg;
// 서버에 프로필 이미지 보내기
function sendProfileImg(file) {
    return __awaiter(this, void 0, void 0, function* () {
        const formData = new FormData();
        formData.append('image', file[0]);
        const setting = {
            method: 'POST',
            body: formData,
        };
        try {
            const imageUploadRes = yield fetch(`${url}/image/uploadfiles`, setting);
            const imageUploadJson = yield imageUploadRes.json();
            profileImg = imageUploadJson[0].filename;
        }
        catch (err) {
            console.error(err);
        }
    });
}
// 프로필 이미지 미리보기
function previewImg(event, basicImg) {
    const file = event.target.files;
    if (file[0].size > 10000000) {
        alert('이미지 사이즈는 10MB 이내로 등록 가능합니다.');
        return false;
    }
    basicImg.src = URL.createObjectURL(file[0]);
    sendProfileImg(file);
}
// 버튼 활성화
function isActiveBtn() {
    const profileFormBtn = document.querySelector('.profileFormBtn');
    const username = document.getElementById('username');
    const id = document.getElementById('id');
    const intro = document.getElementById('intro');
    if (username.value !== '' && id.value !== '' && intro.value !== '') {
        profileFormBtn.style.opacity = '1';
        profileFormBtn.disabled = false;
    }
}
// 예외 문자 처리
function checkRegExp() {
    const errorMessage = document.querySelector('.registerFormAlert');
    const profileFormBtn = document.querySelector('.profileFormBtn');
    const id = document.getElementById('id');
    const regExp = /^[a-zA-Z0-9_.]{2,10}$/;
    if (regExp.test(id.value)) {
        errorMessage.classList.add('ir');
        isActiveBtn();
    }
    if (!regExp.test(id.value)) {
        errorMessage.classList.remove('ir');
        profileFormBtn.style.opacity = '0.3';
        id.oninput = () => {
            errorMessage.classList.add('ir');
        };
    }
    if (id.value.length === 0) {
        errorMessage.classList.remove('ir');
        profileFormBtn.style.opacity = '0.3';
    }
}
// 입력 체크
function checkInput(id) {
    if (id.value.length > 0) {
        checkRegExp();
    }
}
// 회원가입 정보 전송
function sendRegister() {
    return __awaiter(this, void 0, void 0, function* () {
        const userName = document.getElementById('username');
        const id = document.getElementById('id');
        const intro = document.getElementById('intro');
        if (profileImg === undefined) {
            profileImg = '1658636863237.png';
        }
        const setting = {
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
                    image: `${url}/${profileImg}`,
                },
            }),
        };
        try {
            const signUpRes = yield fetch(`${url}/user`, setting);
            const signUpJson = yield signUpRes.json();
            if (signUpJson.status === 200)
                window.location.hash = '#login';
            else
                console.error(signUpJson.statusText);
        }
        catch (error) {
            console.error(error);
        }
    });
}
// ID 중복 메시지
function checkId(resMessage) {
    const errorMessage = document.querySelector('.registerFormAlert');
    if (resMessage === '이미 가입된 계정ID 입니다.') {
        errorMessage.innerText = `*${resMessage}`;
        errorMessage.classList.remove('ir');
    }
    if (resMessage === '사용 가능한 계정ID 입니다.') {
        sendRegister();
    }
}
// 유효 ID 검사
function isValidId(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const setting = {
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
        try {
            const validIdRes = yield fetch(`${url}/user/accountnamevalid`, setting);
            const validIdJson = yield validIdRes.json();
            const resMessage = validIdJson.message;
            checkId(resMessage);
        }
        catch (error) {
            console.error(error);
        }
    });
}


/***/ }),

/***/ "./script/search.ts":
/*!**************************!*\
  !*** ./script/search.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ searchUser)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function searchUser(event) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'https://api.mandarin.weniv.co.kr';
        const token = localStorage.getItem('Token');
        const userListContent = document.querySelector('.userList');
        try {
            if (event.target.value == '') {
                userListContent.innerHTML = '';
            }
            else {
                const res = yield fetch(`${url}/user/searchuser/?keyword=${event.target.value}`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                const userData = yield res.json();
                // 검색된 유저 정보 구현
                userListContent.innerHTML = '';
                userData.forEach((element) => {
                    const userItemEl = document.createElement('li');
                    const userAnchorEl = document.createElement('a');
                    const userImgEl = document.createElement('img');
                    const userInfoEl = document.createElement('div');
                    const nickNameEl = document.createElement('strong');
                    const userText = document.createElement('div');
                    const accountNameEl = document.createElement('p');
                    element.image =
                        element.image.split('.')[1] === 'api'
                            ? element.image.replace('https://mandarin.api.weniv.co.kr', 'https://api.mandarin.weniv.co.kr')
                            : element.image;
                    userItemEl.classList.add('userItem');
                    userAnchorEl.classList.add('userBox');
                    userAnchorEl.addEventListener('click', () => {
                        window.location.hash = `#profile\?accountname=${element.accountname}`; // 주소 업데이트
                    });
                    userImgEl.classList.add('userProfileImage');
                    userImgEl.setAttribute('src', `${element.image}`);
                    userImgEl.setAttribute('onerror', "this.onerror=null;this.src='../asset/images/timi.svg'");
                    userImgEl.setAttribute('alt', `${element.username}님의 프로필 이미지`);
                    userInfoEl.classList.add('userInfo');
                    nickNameEl.classList.add('userNickname');
                    nickNameEl.innerText = `${element.username}`;
                    userText.classList.add('userText');
                    accountNameEl.classList.add('userMsgContent');
                    accountNameEl.classList.add('userStatusMsg');
                    accountNameEl.innerText = `@${element.accountname}`;
                    userText.appendChild(accountNameEl);
                    userInfoEl.appendChild(nickNameEl);
                    userInfoEl.appendChild(userText);
                    userAnchorEl.appendChild(userImgEl);
                    userAnchorEl.appendChild(userInfoEl);
                    userItemEl.appendChild(userAnchorEl);
                    userListContent.appendChild(userItemEl);
                });
            }
        }
        catch (err) {
            console.error(err);
        }
    });
}


/***/ }),

/***/ "./script/signUp.ts":
/*!**************************!*\
  !*** ./script/signUp.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkInput": () => (/* binding */ checkInput),
/* harmony export */   "isValidEmail": () => (/* binding */ isValidEmail)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// 버튼 활성화
function isActiveBtn() {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const registerFormBtn = document.querySelector('.registerFormBtn');
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
function checkInput(password, errorPassword) {
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
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    localStorage.clear();
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);
    locationRegisterProfile(signUpReturnData.status);
}
// 사용 가능한 이메일 체크
function checkEmail(signUpReturnData) {
    const email = document.getElementById('email');
    const errorEmail = document.querySelector('.errorPassword');
    if (signUpReturnData.message === '이미 가입된 이메일 주소 입니다.') {
        errorEmail.innerText = `* 이미 가입된 이메일 주소 입니다.`;
        errorEmail.classList.remove('ir');
        email.oninput = () => {
            errorEmail.classList.add('ir');
        };
    }
    else {
        saveData(signUpReturnData);
    }
}
// 이메일 유효성 검사
function isValidEmail() {
    return __awaiter(this, void 0, void 0, function* () {
        const emailInput = document.getElementById('email');
        const url = 'https://api.mandarin.weniv.co.kr';
        const setting = {
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
        try {
            const emailValidRes = yield fetch(`${url}/user/emailvalid`, setting);
            const emailValidJson = yield emailValidRes.json();
            checkEmail(emailValidJson);
        }
        catch (error) {
            console.error(error);
        }
    });
}


/***/ }),

/***/ "./utils/apiModule.ts":
/*!****************************!*\
  !*** ./utils/apiModule.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteComment": () => (/* binding */ deleteComment),
/* harmony export */   "deletePost": () => (/* binding */ deletePost),
/* harmony export */   "getPosting": () => (/* binding */ getPosting),
/* harmony export */   "getProfile": () => (/* binding */ getProfile),
/* harmony export */   "imageUpload": () => (/* binding */ imageUpload),
/* harmony export */   "likeHeart": () => (/* binding */ likeHeart),
/* harmony export */   "likeUnHeart": () => (/* binding */ likeUnHeart),
/* harmony export */   "productImageUpload": () => (/* binding */ productImageUpload),
/* harmony export */   "productSave": () => (/* binding */ productSave),
/* harmony export */   "reportComment": () => (/* binding */ reportComment),
/* harmony export */   "reportPost": () => (/* binding */ reportPost),
/* harmony export */   "updateProfile": () => (/* binding */ updateProfile)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./utils/common.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

// 좋아요 모듈
function likeHeart(postingID) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = `https://api.mandarin.weniv.co.kr/post/${postingID}/heart`;
        const token = localStorage.getItem('Token');
        const res = yield fetch(url, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-type': 'application/json',
            },
        });
        const data = yield res.json();
        return data;
    });
}
// 좋아요 취소 모듈
function likeUnHeart(postingID) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = `https://api.mandarin.weniv.co.kr/post/${postingID}/unheart`;
        const token = localStorage.getItem('Token');
        const res = yield fetch(url, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-type': 'application/json',
            },
        });
        const data = yield res.json();
        return data;
    });
}
// 게시물 신고
function reportPost(postingId) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'https://api.mandarin.weniv.co.kr';
        const token = localStorage.getItem('Token');
        const setting = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-type': 'application/json',
            },
        };
        try {
            const resReport = yield fetch(`${url}/post/${postingId}/report`, setting);
            const resReportJson = yield resReport.json();
            if (resReportJson.status !== 404) {
                location.reload();
            }
        }
        catch (err) {
            console.error(err);
        }
    });
}
// 게시물 삭제
function deletePost(postingId) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'https://api.mandarin.weniv.co.kr';
        const token = localStorage.getItem('Token');
        const setting = {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-type': 'application/json',
            },
        };
        try {
            const resDeleteProduct = yield fetch(`${url}/post/${postingId}`, setting);
            if (resDeleteProduct) {
                location.reload();
            }
        }
        catch (err) {
            console.error(err);
        }
    });
}
// 댓글 신고
function reportComment(commentId) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'https://api.mandarin.weniv.co.kr';
        const token = localStorage.getItem('Token');
        const postId = window.location.hash.split('postid=')[1];
        try {
            const res = yield fetch(`${url}/post/${postId}/comments/${commentId}/report`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-type': 'application/json',
                },
            });
            const json = yield res.json();
            if (json) {
                location.reload();
            }
        }
        catch (err) {
            console.log(err);
        }
    });
}
// 댓글 삭제
function deleteComment(commentId) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'https://api.mandarin.weniv.co.kr';
        const token = localStorage.getItem('Token');
        const postId = window.location.hash.split('postid=')[1];
        try {
            const res = yield fetch(`${url}/post/${postId}/comments/${commentId}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-type': 'application/json',
                },
            });
            const json = yield res.json();
            if (json.status === '200') {
                location.reload();
            }
        }
        catch (err) {
            console.log(err);
        }
    });
}
// 이미지 업로드
function imageUpload(formData) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'https://api.mandarin.weniv.co.kr';
        try {
            const response = yield fetch(url + '/image/uploadfiles', {
                method: 'POST',
                body: formData,
            });
            const data = yield response.json();
            const imageUrl = yield data[0].filename;
            localStorage.setItem('imageUrl', imageUrl);
        }
        catch (err) {
            console.log(err);
        }
    });
}
// 상품 이미지 등록
function productImageUpload(formData) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'https://api.mandarin.weniv.co.kr';
        try {
            const response = yield fetch(url + '/image/uploadfiles', {
                method: 'POST',
                body: formData,
            });
            const data = yield response.json();
            const imageUrl = yield data[0].filename;
            return imageUrl;
        }
        catch (err) {
            console.log(err);
        }
    });
}
function productSave(productNameForm, productPriceForm, productContentForm) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = localStorage.getItem('Token');
        const url = 'https://api.mandarin.weniv.co.kr';
        const imageUrl = localStorage.getItem('ProductImg');
        const productInfo = {
            product: {
                itemName: productNameForm.value,
                price: parseInt(productPriceForm.value.replace(/,/g, '')),
                link: productContentForm.value,
                itemImage: imageUrl,
            },
        };
        const setting = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-type': 'application/json',
            },
            body: JSON.stringify(productInfo),
        };
        try {
            const reqPosting = yield fetch(`${url}/product`, setting);
            if (reqPosting.status === 200) {
                (0,_common__WEBPACK_IMPORTED_MODULE_0__.backHistory)();
            }
        }
        catch (error) {
            console.log(error);
        }
    });
}
// 프로필 수정
function updateProfile() {
    return __awaiter(this, void 0, void 0, function* () {
        const token = localStorage.getItem('Token');
        const url = 'https://api.mandarin.weniv.co.kr';
        const inputName = document.getElementById('name');
        const inputId = document.getElementById('id');
        const inputIntroduce = document.getElementById('introduce');
        const imageUrl = localStorage.getItem('imageUrl');
        const alertMessage = document.querySelector('.alertMessage');
        const userProfileInfo = {
            user: {
                username: inputName.value,
                accountname: inputId.value,
                intro: inputIntroduce.value,
                image: `${imageUrl}`,
            },
        };
        const setting = {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-type': 'application/json',
            },
            body: JSON.stringify(userProfileInfo),
        };
        try {
            const resEditProfile = yield fetch(`${url}/user`, setting);
            const resEditProfileJson = yield resEditProfile.json();
            // 응답 성공시
            if (resEditProfile.status === 200) {
                localStorage.setItem('accountname', inputId.value);
                (0,_common__WEBPACK_IMPORTED_MODULE_0__.backHistory)();
            }
            else {
                alertMessage.classList.remove('ir');
                alertMessage.innerText = `*${resEditProfileJson.message}`;
            }
        }
        catch (err) {
            console.error(err);
        }
    });
}
// 프로필 정보
function getProfile(accountName) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'https://api.mandarin.weniv.co.kr';
        const token = localStorage.getItem('Token');
        const setting = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-type': 'application/json',
            },
        };
        try {
            const resProfile = yield fetch(`${url}/profile/${accountName}`, setting);
            const resProfileJson = yield resProfile.json();
            const userProfile = resProfileJson.profile;
            return userProfile;
        }
        catch (err) {
            console.error(err);
        }
    });
}
// 게시물 확인
function getPosting() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'https://api.mandarin.weniv.co.kr';
        const token = localStorage.getItem('Token');
        const myAccountName = localStorage.getItem('accountname');
        let accountName = window.location.hash.split('accountname=')[1];
        accountName = accountName == null ? myAccountName : accountName;
        const setting = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-type': 'application/json',
            },
        };
        try {
            const resProfileProduct = yield fetch(`${url}/post/${accountName}/userpost/?limit=9`, setting);
            const resProfileProductJson = yield resProfileProduct.json();
            const userPostInfo = resProfileProductJson.post;
            return userPostInfo;
        }
        catch (err) {
            console.error(err);
        }
    });
}


/***/ }),

/***/ "./utils/common.ts":
/*!*************************!*\
  !*** ./utils/common.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "backHistory": () => (/* binding */ backHistory),
/* harmony export */   "debounce": () => (/* binding */ debounce),
/* harmony export */   "timeForToday": () => (/* binding */ timeForToday)
/* harmony export */ });
// 뒤로 가기
function backHistory() {
    return window.history.back();
}
// 게시물 등록 시간 계산 함수
function timeForToday(time) {
    const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
    const postingDate = time.substring(0, time.length - 1);
    const ms = Date.parse(postingDate) + KR_TIME_DIFF;
    const now = Date.now();
    const gap = (now - ms) / 1000;
    if (gap < 60)
        return '방금전';
    else if (gap < 3600)
        return `${Math.floor(gap / 60)} 분 전`;
    else if (gap < 86400)
        return `${Math.floor(gap / 3600)}시간 전`;
    else if (gap < 2592000)
        return `${Math.floor(gap / 86400)}일 전`;
    else
        return `${Math.floor(gap / 2592000)}달 전`;
}
// 검색 API 호출 최적화
function debounce(func, timeout = 500) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args);
        }, timeout);
    };
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/homePage */ "./pages/homePage.ts");
/* harmony import */ var _pages_chatPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/chatPage */ "./pages/chatPage.ts");
/* harmony import */ var _pages_chattingPage1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/chattingPage1 */ "./pages/chattingPage1.ts");
/* harmony import */ var _pages_chattingPage2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/chattingPage2 */ "./pages/chattingPage2.ts");
/* harmony import */ var _pages_chattingPage3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/chattingPage3 */ "./pages/chattingPage3.ts");
/* harmony import */ var _pages_chattingPage4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/chattingPage4 */ "./pages/chattingPage4.ts");
/* harmony import */ var _pages_editProfilePage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/editProfilePage */ "./pages/editProfilePage.ts");
/* harmony import */ var _pages_profilePage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/profilePage */ "./pages/profilePage.ts");
/* harmony import */ var _pages_profileFollowPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/profileFollowPage */ "./pages/profileFollowPage.ts");
/* harmony import */ var _pages_profileRegisterPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/profileRegisterPage */ "./pages/profileRegisterPage.ts");
/* harmony import */ var _pages_errorPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/errorPage */ "./pages/errorPage.ts");
/* harmony import */ var _pages_introPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/introPage */ "./pages/introPage.ts");
/* harmony import */ var _pages_loginPage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/loginPage */ "./pages/loginPage.ts");
/* harmony import */ var _pages_mainPage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/mainPage */ "./pages/mainPage.ts");
/* harmony import */ var _pages_postPage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/postPage */ "./pages/postPage.ts");
/* harmony import */ var _pages_postUploadPage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/postUploadPage */ "./pages/postUploadPage.ts");
/* harmony import */ var _pages_productPage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/productPage */ "./pages/productPage.ts");
/* harmony import */ var _pages_searchPage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/searchPage */ "./pages/searchPage.ts");
/* harmony import */ var _pages_signUpPage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/signUpPage */ "./pages/signUpPage.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




















const routes = {
    '/': _pages_mainPage__WEBPACK_IMPORTED_MODULE_13__["default"],
    '#intro': _pages_introPage__WEBPACK_IMPORTED_MODULE_11__["default"],
    '#login': _pages_loginPage__WEBPACK_IMPORTED_MODULE_12__["default"],
    '#signup': _pages_signUpPage__WEBPACK_IMPORTED_MODULE_18__["default"],
    '#home': _pages_homePage__WEBPACK_IMPORTED_MODULE_0__["default"],
    '#chat': _pages_chatPage__WEBPACK_IMPORTED_MODULE_1__["default"],
    '#chatting1': _pages_chattingPage1__WEBPACK_IMPORTED_MODULE_2__["default"],
    '#chatting2': _pages_chattingPage2__WEBPACK_IMPORTED_MODULE_3__["default"],
    '#chatting3': _pages_chattingPage3__WEBPACK_IMPORTED_MODULE_4__["default"],
    '#chatting4': _pages_chattingPage4__WEBPACK_IMPORTED_MODULE_5__["default"],
    '#editProfile': _pages_editProfilePage__WEBPACK_IMPORTED_MODULE_6__["default"],
    '#profile': _pages_profilePage__WEBPACK_IMPORTED_MODULE_7__["default"],
    '#profileFollow': _pages_profileFollowPage__WEBPACK_IMPORTED_MODULE_8__["default"],
    '#profileRegister': _pages_profileRegisterPage__WEBPACK_IMPORTED_MODULE_9__["default"],
    '#error': _pages_errorPage__WEBPACK_IMPORTED_MODULE_10__["default"],
    '#main': _pages_mainPage__WEBPACK_IMPORTED_MODULE_13__["default"],
    '#post': _pages_postPage__WEBPACK_IMPORTED_MODULE_14__["default"],
    '#postUpload': _pages_postUploadPage__WEBPACK_IMPORTED_MODULE_15__["default"],
    '#product': _pages_productPage__WEBPACK_IMPORTED_MODULE_16__["default"],
    '#follow': _pages_profileFollowPage__WEBPACK_IMPORTED_MODULE_8__["default"],
    '#search': _pages_searchPage__WEBPACK_IMPORTED_MODULE_17__["default"],
};
const router = () => __awaiter(void 0, void 0, void 0, function* () {
    let content = document.getElementById('root');
    let parsedURL = window.location.hash ? window.location.hash.split('?')[0] : window.location.pathname;
    let page = routes[parsedURL] ? routes[parsedURL] : routes['#error'];
    let renderPage = new page();
    // 직전 페이지 초기화
    content ? (content.innerHTML = '') : null;
    yield renderPage.render(content);
});
// 해시 변경 이벤트
window.addEventListener('hashchange', router);
// 페이지 로드 이벤트
window.addEventListener('load', router);
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.hash === '') {
        window.location.hash = '#intro';
    }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDZ0I7QUFDOUM7QUFDQTtBQUNBLDJCQUEyQiwrQ0FBTTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHNEQUFXO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUt5QjtBQUNIO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsc0RBQVc7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2REFBYztBQUMxQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEtvQjtBQUNIO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsc0RBQVc7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2REFBYztBQUMxQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbklvQjtBQUNIO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsc0RBQVc7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2REFBYztBQUMxQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0ZvQjtBQUNIO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsc0RBQVc7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2REFBYztBQUMxQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSTRFO0FBQzNEO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHNEQUFXO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1FQUFjO0FBQ3RCLG9EQUFvRCw0REFBVztBQUMvRCxvREFBb0QsdUVBQWtCO0FBQ3RFLGtEQUFrRCx1RUFBa0I7QUFDcEUscURBQXFELHVFQUFrQjtBQUN2RTtBQUNBLFlBQVksb0VBQWU7QUFDM0IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsZUFBZSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEhlO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHNEQUFXO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDMUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDWTtBQUNJO0FBQ3BCO0FBQ0E7QUFDQTtBQUNGO0FBQ0E7QUFDWTtBQUNOO0FBQ0s7QUFDUDtBQUNBO0FBQ3hDO0FBQ0EsU0FBUyx3REFBSTtBQUNiLGNBQWMseURBQUs7QUFDbkIsY0FBYyx5REFBSztBQUNuQixlQUFlLDBEQUFNO0FBQ3JCLGFBQWEsdURBQUk7QUFDakIsYUFBYSx1REFBSTtBQUNqQixrQkFBa0IsNERBQVM7QUFDM0Isa0JBQWtCLDREQUFTO0FBQzNCLGtCQUFrQiw0REFBUztBQUMzQixrQkFBa0IsNERBQVM7QUFDM0Isb0JBQW9CLDhEQUFXO0FBQy9CLGdCQUFnQiwwREFBTztBQUN2QixzQkFBc0IsZ0VBQWE7QUFDbkMsd0JBQXdCLGtFQUFlO0FBQ3ZDLGNBQWMseURBQUs7QUFDbkIsYUFBYSx3REFBSTtBQUNqQixhQUFhLHdEQUFJO0FBQ2pCLG1CQUFtQiw4REFBVTtBQUM3QixnQkFBZ0IsMkRBQU87QUFDdkIsZUFBZSxnRUFBTTtBQUNyQixlQUFlLDBEQUFNO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLzYwLW1hcmtldC1yZWZhY3RvcmluZy5naXQvLi9wYWdlcy9jaGF0UGFnZS50cyIsIndlYnBhY2s6Ly82MC1tYXJrZXQtcmVmYWN0b3JpbmcuZ2l0Ly4vcGFnZXMvY2hhdHRpbmdQYWdlMS50cyIsIndlYnBhY2s6Ly82MC1tYXJrZXQtcmVmYWN0b3JpbmcuZ2l0Ly4vcGFnZXMvY2hhdHRpbmdQYWdlMi50cyIsIndlYnBhY2s6Ly82MC1tYXJrZXQtcmVmYWN0b3JpbmcuZ2l0Ly4vcGFnZXMvY2hhdHRpbmdQYWdlMy50cyIsIndlYnBhY2s6Ly82MC1tYXJrZXQtcmVmYWN0b3JpbmcuZ2l0Ly4vcGFnZXMvY2hhdHRpbmdQYWdlNC50cyIsIndlYnBhY2s6Ly82MC1tYXJrZXQtcmVmYWN0b3JpbmcuZ2l0Ly4vcGFnZXMvZWRpdFByb2ZpbGVQYWdlLnRzIiwid2VicGFjazovLzYwLW1hcmtldC1yZWZhY3RvcmluZy5naXQvLi9wYWdlcy9lcnJvclBhZ2UudHMiLCJ3ZWJwYWNrOi8vNjAtbWFya2V0LXJlZmFjdG9yaW5nLmdpdC8uL3BhZ2VzL2Zvb3Rlci50cyIsIndlYnBhY2s6Ly82MC1tYXJrZXQtcmVmYWN0b3JpbmcuZ2l0Ly4vcGFnZXMvaG9tZVBhZ2UudHMiLCJ3ZWJwYWNrOi8vNjAtbWFya2V0LXJlZmFjdG9yaW5nLmdpdC8uL3BhZ2VzL2ludHJvUGFnZS50cyIsIndlYnBhY2s6Ly82MC1tYXJrZXQtcmVmYWN0b3JpbmcuZ2l0Ly4vcGFnZXMvbG9naW5QYWdlLnRzIiwid2VicGFjazovLzYwLW1hcmtldC1yZWZhY3RvcmluZy5naXQvLi9wYWdlcy9tYWluUGFnZS50cyIsIndlYnBhY2s6Ly82MC1tYXJrZXQtcmVmYWN0b3JpbmcuZ2l0Ly4vcGFnZXMvcG9zdFBhZ2UudHMiLCJ3ZWJwYWNrOi8vNjAtbWFya2V0LXJlZmFjdG9yaW5nLmdpdC8uL3BhZ2VzL3Bvc3RVcGxvYWRQYWdlLnRzIiwid2VicGFjazovLzYwLW1hcmtldC1yZWZhY3RvcmluZy5naXQvLi9wYWdlcy9wcm9kdWN0UGFnZS50cyIsIndlYnBhY2s6Ly82MC1tYXJrZXQtcmVmYWN0b3JpbmcuZ2l0Ly4vcGFnZXMvcHJvZmlsZUZvbGxvd1BhZ2UudHMiLCJ3ZWJwYWNrOi8vNjAtbWFya2V0LXJlZmFjdG9yaW5nLmdpdC8uL3BhZ2VzL3Byb2ZpbGVQYWdlLnRzIiwid2VicGFjazovLzYwLW1hcmtldC1yZWZhY3RvcmluZy5naXQvLi9wYWdlcy9wcm9maWxlUmVnaXN0ZXJQYWdlLnRzIiwid2VicGFjazovLzYwLW1hcmtldC1yZWZhY3RvcmluZy5naXQvLi9wYWdlcy9zZWFyY2hQYWdlLnRzIiwid2VicGFjazovLzYwLW1hcmtldC1yZWZhY3RvcmluZy5naXQvLi9wYWdlcy9zaWduVXBQYWdlLnRzIiwid2VicGFjazovLzYwLW1hcmtldC1yZWZhY3RvcmluZy5naXQvLi9zY3JpcHQvYWRkUHJvZHVjdC50cyIsIndlYnBhY2s6Ly82MC1tYXJrZXQtcmVmYWN0b3JpbmcuZ2l0Ly4vc2NyaXB0L2VkaXRQcm9maWxlLnRzIiwid2VicGFjazovLzYwLW1hcmtldC1yZWZhY3RvcmluZy5naXQvLi9zY3JpcHQvaGVhcnRCdG4udHMiLCJ3ZWJwYWNrOi8vNjAtbWFya2V0LXJlZmFjdG9yaW5nLmdpdC8uL3NjcmlwdC9ob21lLnRzIiwid2VicGFjazovLzYwLW1hcmtldC1yZWZhY3RvcmluZy5naXQvLi9zY3JpcHQvaW50cm8udHMiLCJ3ZWJwYWNrOi8vNjAtbWFya2V0LXJlZmFjdG9yaW5nLmdpdC8uL3NjcmlwdC9sb2dJbi50cyIsIndlYnBhY2s6Ly82MC1tYXJrZXQtcmVmYWN0b3JpbmcuZ2l0Ly4vc2NyaXB0L21vZGFsLnRzIiwid2VicGFjazovLzYwLW1hcmtldC1yZWZhY3RvcmluZy5naXQvLi9zY3JpcHQvcG9zdC50cyIsIndlYnBhY2s6Ly82MC1tYXJrZXQtcmVmYWN0b3JpbmcuZ2l0Ly4vc2NyaXB0L3Bvc3RVcGxvYWQudHMiLCJ3ZWJwYWNrOi8vNjAtbWFya2V0LXJlZmFjdG9yaW5nLmdpdC8uL3NjcmlwdC9wcm9maWxlLnRzIiwid2VicGFjazovLzYwLW1hcmtldC1yZWZhY3RvcmluZy5naXQvLi9zY3JpcHQvcHJvZmlsZUZvbGxvdy50cyIsIndlYnBhY2s6Ly82MC1tYXJrZXQtcmVmYWN0b3JpbmcuZ2l0Ly4vc2NyaXB0L3JlZ2lzdGVyUHJvZmlsZS50cyIsIndlYnBhY2s6Ly82MC1tYXJrZXQtcmVmYWN0b3JpbmcuZ2l0Ly4vc2NyaXB0L3NlYXJjaC50cyIsIndlYnBhY2s6Ly82MC1tYXJrZXQtcmVmYWN0b3JpbmcuZ2l0Ly4vc2NyaXB0L3NpZ25VcC50cyIsIndlYnBhY2s6Ly82MC1tYXJrZXQtcmVmYWN0b3JpbmcuZ2l0Ly4vdXRpbHMvYXBpTW9kdWxlLnRzIiwid2VicGFjazovLzYwLW1hcmtldC1yZWZhY3RvcmluZy5naXQvLi91dGlscy9jb21tb24udHMiLCJ3ZWJwYWNrOi8vNjAtbWFya2V0LXJlZmFjdG9yaW5nLmdpdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly82MC1tYXJrZXQtcmVmYWN0b3JpbmcuZ2l0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly82MC1tYXJrZXQtcmVmYWN0b3JpbmcuZ2l0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vNjAtbWFya2V0LXJlZmFjdG9yaW5nLmdpdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLzYwLW1hcmtldC1yZWZhY3RvcmluZy5naXQvLi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyJztcclxuaW1wb3J0IHsgYmFja0hpc3RvcnkgfSBmcm9tICcuLi91dGlscy9jb21tb24nO1xyXG5jbGFzcyBDaGF0UGFnZSB7XHJcbiAgICByZW5kZXIoY29udGVudCkge1xyXG4gICAgICAgIGNvbnN0IGZvb3RlciA9IG5ldyBGb290ZXIoKTtcclxuICAgICAgICBjb25zdCBmb290ZXJFbCA9IGZvb3Rlci5yZW5kZXIoKTtcclxuICAgICAgICBjb25zdCBjaGF0V3JhcERpdkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY2hhdFdyYXBEaXZFbC5jbGFzc0xpc3QuYWRkKCdjaGF0V3JhcCcpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QucmVtb3ZlKCdwcm9maWxlQmFja2dyb3VuZCcpO1xyXG4gICAgICAgIC8vIGhlYWRlclxyXG4gICAgICAgIGNvbnN0IGhlYWRlckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICAgICAgY29uc3QgaGVhZGluZzFFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICAgICAgY29uc3QgYXJ0aWNsZUhlYWRlckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xyXG4gICAgICAgIGNvbnN0IGJhY2tJbWdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGhlYWRlckVsLmNsYXNzTGlzdC5hZGQoJ2NoYXRIZWFkZXInKTtcclxuICAgICAgICBoZWFkaW5nMUVsLmNsYXNzTGlzdC5hZGQoJ2lyJyk7XHJcbiAgICAgICAgaGVhZGluZzFFbC5pbm5lclRleHQgPSAn7LGE7YyF67CpIOuqqeuhnSc7XHJcbiAgICAgICAgYXJ0aWNsZUhlYWRlckVsLmNsYXNzTGlzdC5hZGQoJ2hlYWRlckJhcicpO1xyXG4gICAgICAgIGJhY2tJbWdFbC5jbGFzc0xpc3QuYWRkKCdoZWFkZXJCYXJCYWNrJyk7XHJcbiAgICAgICAgYmFja0ltZ0VsLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbkNsaWNrJyk7XHJcbiAgICAgICAgYmFja0ltZ0VsLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL2Fzc2V0L2ltYWdlcy9pY29ucy9pY29uX19hcnJvd0xlZnQuc3ZnJyk7XHJcbiAgICAgICAgYmFja0ltZ0VsLnNldEF0dHJpYnV0ZSgnYWx0JywgJ+uSpOuhnCDqsIDquLAnKTtcclxuICAgICAgICBiYWNrSW1nRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBiYWNrSGlzdG9yeSk7XHJcbiAgICAgICAgYXJ0aWNsZUhlYWRlckVsLmFwcGVuZENoaWxkKGJhY2tJbWdFbCk7XHJcbiAgICAgICAgaGVhZGVyRWwuYXBwZW5kQ2hpbGQoaGVhZGluZzFFbCk7XHJcbiAgICAgICAgaGVhZGVyRWwuYXBwZW5kQ2hpbGQoYXJ0aWNsZUhlYWRlckVsKTtcclxuICAgICAgICBjaGF0V3JhcERpdkVsLmFwcGVuZENoaWxkKGhlYWRlckVsKTtcclxuICAgICAgICAvLyBtYWluXHJcbiAgICAgICAgY29uc3QgbWFpbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJMaXN0VWxFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgY29uc3QgcG9jaGFjY29MaUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBjb25zdCBwb2NoYWNjb0RpdkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgcG9jaGFjY29JbWdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGNvbnN0IHBvY2hhY2NvSW5mb0RpdkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgcG9jaGFjY29OYW1lU3Ryb25nRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHJvbmcnKTtcclxuICAgICAgICBjb25zdCBwb2NoYWNjb1RleHREaXZFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHBvY2hhY2NvTWVzc2FnZVBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBjb25zdCBwb2NoYWNjb0RhdGVQRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgdXNlckxpc3RVbEVsLmNsYXNzTGlzdC5hZGQoJ3VzZXJMaXN0Jyk7XHJcbiAgICAgICAgcG9jaGFjY29MaUVsLmNsYXNzTGlzdC5hZGQoJ3VzZXJJdGVtJyk7XHJcbiAgICAgICAgcG9jaGFjY29EaXZFbC5jbGFzc0xpc3QuYWRkKCd1c2VyQm94Jyk7XHJcbiAgICAgICAgcG9jaGFjY29EaXZFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnI2NoYXR0aW5nMSc7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcG9jaGFjY29JbWdFbC5jbGFzc0xpc3QuYWRkKCd1c2VyUHJvZmlsZUltYWdlJyk7XHJcbiAgICAgICAgcG9jaGFjY29JbWdFbC5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9hc3NldC9pbWFnZXMvdXNlci9wb2NoYWNjby5wbmcnKTtcclxuICAgICAgICBwb2NoYWNjb0ltZ0VsLnNldEF0dHJpYnV0ZSgnYWx0JywgJ+2UhOuhnO2VhCDsnbTrr7jsp4AnKTtcclxuICAgICAgICBwb2NoYWNjb0luZm9EaXZFbC5jbGFzc0xpc3QuYWRkKCd1c2VySW5mbycpO1xyXG4gICAgICAgIHBvY2hhY2NvTmFtZVN0cm9uZ0VsLmNsYXNzTGlzdC5hZGQoJ3VzZXJOaWNrbmFtZScpO1xyXG4gICAgICAgIHBvY2hhY2NvTmFtZVN0cm9uZ0VsLmlubmVyVGV4dCA9ICftj6zssaDsvZQnO1xyXG4gICAgICAgIHBvY2hhY2NvVGV4dERpdkVsLmNsYXNzTGlzdC5hZGQoJ3VzZXJUZXh0Jyk7XHJcbiAgICAgICAgcG9jaGFjY29NZXNzYWdlUEVsLmNsYXNzTGlzdC5hZGQoJ3VzZXJNc2dDb250ZW50Jyk7XHJcbiAgICAgICAgcG9jaGFjY29NZXNzYWdlUEVsLmNsYXNzTGlzdC5hZGQoJ3VzZXJTdGF0dXNNc2cnKTtcclxuICAgICAgICBwb2NoYWNjb01lc3NhZ2VQRWwuaW5uZXJUZXh0ID0gJ+yCrOyLpCDsl4bsirXri4jri6QuIPCfmIUnO1xyXG4gICAgICAgIHBvY2hhY2NvRGF0ZVBFbC5jbGFzc0xpc3QuYWRkKCd1c2VyTXNnQ29udGVudCcpO1xyXG4gICAgICAgIHBvY2hhY2NvRGF0ZVBFbC5jbGFzc0xpc3QuYWRkKCd1c2VyTXNnRGF0ZScpO1xyXG4gICAgICAgIHBvY2hhY2NvRGF0ZVBFbC5pbm5lclRleHQgPSAnMDguIDA3JztcclxuICAgICAgICBwb2NoYWNjb1RleHREaXZFbC5hcHBlbmRDaGlsZChwb2NoYWNjb01lc3NhZ2VQRWwpO1xyXG4gICAgICAgIHBvY2hhY2NvVGV4dERpdkVsLmFwcGVuZENoaWxkKHBvY2hhY2NvRGF0ZVBFbCk7XHJcbiAgICAgICAgcG9jaGFjY29JbmZvRGl2RWwuYXBwZW5kQ2hpbGQocG9jaGFjY29OYW1lU3Ryb25nRWwpO1xyXG4gICAgICAgIHBvY2hhY2NvSW5mb0RpdkVsLmFwcGVuZENoaWxkKHBvY2hhY2NvVGV4dERpdkVsKTtcclxuICAgICAgICBwb2NoYWNjb0RpdkVsLmFwcGVuZENoaWxkKHBvY2hhY2NvSW1nRWwpO1xyXG4gICAgICAgIHBvY2hhY2NvRGl2RWwuYXBwZW5kQ2hpbGQocG9jaGFjY29JbmZvRGl2RWwpO1xyXG4gICAgICAgIHBvY2hhY2NvTGlFbC5hcHBlbmRDaGlsZChwb2NoYWNjb0RpdkVsKTtcclxuICAgICAgICBjb25zdCBrZXJvcGlMaUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBjb25zdCBrZXJvcGlEaXZFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGtlcm9waUltZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgY29uc3Qga2Vyb3BpSW5mb0RpdkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3Qga2Vyb3BpTmFtZVN0cm9uZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3Ryb25nJyk7XHJcbiAgICAgICAgY29uc3Qga2Vyb3BpVGV4dERpdkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3Qga2Vyb3BpTWVzc2FnZVBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBjb25zdCBrZXJvcGlEYXRlUEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGtlcm9waUxpRWwuY2xhc3NMaXN0LmFkZCgndXNlckl0ZW0nKTtcclxuICAgICAgICBrZXJvcGlEaXZFbC5jbGFzc0xpc3QuYWRkKCd1c2VyQm94Jyk7XHJcbiAgICAgICAga2Vyb3BpRGl2RWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyNjaGF0dGluZzInO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGtlcm9waUltZ0VsLmNsYXNzTGlzdC5hZGQoJ3VzZXJQcm9maWxlSW1hZ2UnKTtcclxuICAgICAgICBrZXJvcGlJbWdFbC5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9hc3NldC9pbWFnZXMvdXNlci9rZXJvcGkuanBlZycpO1xyXG4gICAgICAgIGtlcm9waUltZ0VsLnNldEF0dHJpYnV0ZSgnYWx0JywgJ+2UhOuhnO2VhCDsnbTrr7jsp4AnKTtcclxuICAgICAgICBrZXJvcGlJbmZvRGl2RWwuY2xhc3NMaXN0LmFkZCgndXNlckluZm8nKTtcclxuICAgICAgICBrZXJvcGlOYW1lU3Ryb25nRWwuY2xhc3NMaXN0LmFkZCgndXNlck5pY2tuYW1lJyk7XHJcbiAgICAgICAga2Vyb3BpTmFtZVN0cm9uZ0VsLmlubmVyVGV4dCA9ICfsvIDroZztlLwnO1xyXG4gICAgICAgIGtlcm9waVRleHREaXZFbC5jbGFzc0xpc3QuYWRkKCd1c2VyVGV4dCcpO1xyXG4gICAgICAgIGtlcm9waU1lc3NhZ2VQRWwuY2xhc3NMaXN0LmFkZCgndXNlck1zZ0NvbnRlbnQnKTtcclxuICAgICAgICBrZXJvcGlNZXNzYWdlUEVsLmNsYXNzTGlzdC5hZGQoJ3VzZXJTdGF0dXNNc2cnKTtcclxuICAgICAgICBrZXJvcGlNZXNzYWdlUEVsLmlubmVyVGV4dCA9ICfri7nsl7DtlZjso6AhIOydtOuUsCDqsbDquLDshJwg67WZ6rKg7Iq164uI64ukLic7XHJcbiAgICAgICAga2Vyb3BpRGF0ZVBFbC5jbGFzc0xpc3QuYWRkKCd1c2VyTXNnQ29udGVudCcpO1xyXG4gICAgICAgIGtlcm9waURhdGVQRWwuY2xhc3NMaXN0LmFkZCgndXNlck1zZ0RhdGUnKTtcclxuICAgICAgICBrZXJvcGlEYXRlUEVsLmlubmVyVGV4dCA9ICcwOC4gMDMnO1xyXG4gICAgICAgIGtlcm9waVRleHREaXZFbC5hcHBlbmRDaGlsZChrZXJvcGlNZXNzYWdlUEVsKTtcclxuICAgICAgICBrZXJvcGlUZXh0RGl2RWwuYXBwZW5kQ2hpbGQoa2Vyb3BpRGF0ZVBFbCk7XHJcbiAgICAgICAga2Vyb3BpSW5mb0RpdkVsLmFwcGVuZENoaWxkKGtlcm9waU5hbWVTdHJvbmdFbCk7XHJcbiAgICAgICAga2Vyb3BpSW5mb0RpdkVsLmFwcGVuZENoaWxkKGtlcm9waVRleHREaXZFbCk7XHJcbiAgICAgICAga2Vyb3BpRGl2RWwuYXBwZW5kQ2hpbGQoa2Vyb3BpSW1nRWwpO1xyXG4gICAgICAgIGtlcm9waURpdkVsLmFwcGVuZENoaWxkKGtlcm9waUluZm9EaXZFbCk7XHJcbiAgICAgICAga2Vyb3BpTGlFbC5hcHBlbmRDaGlsZChrZXJvcGlEaXZFbCk7XHJcbiAgICAgICAgY29uc3QgYm9vbmdib29uZ0xpRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGNvbnN0IGJvb25nYm9vbmdEaXZFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGJvb25nYm9vbmdJbWdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGNvbnN0IGJvb25nYm9vbmdJbmZvRGl2RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBib29uZ2Jvb25nTmFtZVN0cm9uZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3Ryb25nJyk7XHJcbiAgICAgICAgY29uc3QgYm9vbmdib29uZ1RleHREaXZFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGJvb25nYm9vbmdNZXNzYWdlUEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbnN0IGJvb25nYm9vbmdEYXRlUEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGJvb25nYm9vbmdMaUVsLmNsYXNzTGlzdC5hZGQoJ3VzZXJJdGVtJyk7XHJcbiAgICAgICAgYm9vbmdib29uZ0RpdkVsLmNsYXNzTGlzdC5hZGQoJ3VzZXJCb3gnKTtcclxuICAgICAgICBib29uZ2Jvb25nRGl2RWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyNjaGF0dGluZzMnO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJvb25nYm9vbmdJbWdFbC5jbGFzc0xpc3QuYWRkKCd1c2VyUHJvZmlsZUltYWdlJyk7XHJcbiAgICAgICAgYm9vbmdib29uZ0ltZ0VsLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL2Fzc2V0L2ltYWdlcy9iYXNpYy1wcm9maWxlLnN2ZycpO1xyXG4gICAgICAgIGJvb25nYm9vbmdJbWdFbC5zZXRBdHRyaWJ1dGUoJ2FsdCcsICftlITroZztlYQg7J2066+47KeAJyk7XHJcbiAgICAgICAgYm9vbmdib29uZ0luZm9EaXZFbC5jbGFzc0xpc3QuYWRkKCd1c2VySW5mbycpO1xyXG4gICAgICAgIGJvb25nYm9vbmdOYW1lU3Ryb25nRWwuY2xhc3NMaXN0LmFkZCgndXNlck5pY2tuYW1lJyk7XHJcbiAgICAgICAgYm9vbmdib29uZ05hbWVTdHJvbmdFbC5pbm5lclRleHQgPSAn67aV67aVJztcclxuICAgICAgICBib29uZ2Jvb25nVGV4dERpdkVsLmNsYXNzTGlzdC5hZGQoJ3VzZXJUZXh0Jyk7XHJcbiAgICAgICAgYm9vbmdib29uZ01lc3NhZ2VQRWwuY2xhc3NMaXN0LmFkZCgndXNlck1zZ0NvbnRlbnQnKTtcclxuICAgICAgICBib29uZ2Jvb25nTWVzc2FnZVBFbC5jbGFzc0xpc3QuYWRkKCd1c2VyU3RhdHVzTXNnJyk7XHJcbiAgICAgICAgYm9vbmdib29uZ01lc3NhZ2VQRWwuaW5uZXJUZXh0ID0gJ+uCtCDssKjripQg64K06rCAIO2PieqwgO2VnOuLpC4g7Jik7ZSIIOydtOuypO2KuOyXkCDssLjsl6ztlZjsi5zqs6Ag6rK97ZKIIOuwm+yVhOqwgOyEuOyalCEnO1xyXG4gICAgICAgIGJvb25nYm9vbmdEYXRlUEVsLmNsYXNzTGlzdC5hZGQoJ3VzZXJNc2dDb250ZW50Jyk7XHJcbiAgICAgICAgYm9vbmdib29uZ0RhdGVQRWwuY2xhc3NMaXN0LmFkZCgndXNlck1zZ0RhdGUnKTtcclxuICAgICAgICBib29uZ2Jvb25nRGF0ZVBFbC5pbm5lclRleHQgPSAnMDguIDAxJztcclxuICAgICAgICBib29uZ2Jvb25nVGV4dERpdkVsLmFwcGVuZENoaWxkKGJvb25nYm9vbmdNZXNzYWdlUEVsKTtcclxuICAgICAgICBib29uZ2Jvb25nVGV4dERpdkVsLmFwcGVuZENoaWxkKGJvb25nYm9vbmdEYXRlUEVsKTtcclxuICAgICAgICBib29uZ2Jvb25nSW5mb0RpdkVsLmFwcGVuZENoaWxkKGJvb25nYm9vbmdOYW1lU3Ryb25nRWwpO1xyXG4gICAgICAgIGJvb25nYm9vbmdJbmZvRGl2RWwuYXBwZW5kQ2hpbGQoYm9vbmdib29uZ1RleHREaXZFbCk7XHJcbiAgICAgICAgYm9vbmdib29uZ0RpdkVsLmFwcGVuZENoaWxkKGJvb25nYm9vbmdJbWdFbCk7XHJcbiAgICAgICAgYm9vbmdib29uZ0RpdkVsLmFwcGVuZENoaWxkKGJvb25nYm9vbmdJbmZvRGl2RWwpO1xyXG4gICAgICAgIGJvb25nYm9vbmdMaUVsLmFwcGVuZENoaWxkKGJvb25nYm9vbmdEaXZFbCk7XHJcbiAgICAgICAgY29uc3QgcG9tcG9tTGlFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgY29uc3QgcG9tcG9tRGl2RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBwb21wb21JbWdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGNvbnN0IHBvbXBvbUluZm9EaXZFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHBvbXBvbU5hbWVTdHJvbmdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0cm9uZycpO1xyXG4gICAgICAgIGNvbnN0IHBvbXBvbVRleHREaXZFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHBvbXBvbU1lc3NhZ2VQRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgY29uc3QgcG9tcG9tRGF0ZVBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBwb21wb21MaUVsLmNsYXNzTGlzdC5hZGQoJ3VzZXJJdGVtJyk7XHJcbiAgICAgICAgcG9tcG9tRGl2RWwuY2xhc3NMaXN0LmFkZCgndXNlckJveCcpO1xyXG4gICAgICAgIHBvbXBvbURpdkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjY2hhdHRpbmc0JztcclxuICAgICAgICB9KTtcclxuICAgICAgICBwb21wb21JbWdFbC5jbGFzc0xpc3QuYWRkKCd1c2VyUHJvZmlsZUltYWdlJyk7XHJcbiAgICAgICAgcG9tcG9tSW1nRWwuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vYXNzZXQvaW1hZ2VzL3VzZXIvcG9tcG9tLmpwZWcnKTtcclxuICAgICAgICBwb21wb21JbWdFbC5zZXRBdHRyaWJ1dGUoJ2FsdCcsICftlITroZztlYQg7J2066+47KeAJyk7XHJcbiAgICAgICAgcG9tcG9tSW5mb0RpdkVsLmNsYXNzTGlzdC5hZGQoJ3VzZXJJbmZvJyk7XHJcbiAgICAgICAgcG9tcG9tTmFtZVN0cm9uZ0VsLmNsYXNzTGlzdC5hZGQoJ3VzZXJOaWNrbmFtZScpO1xyXG4gICAgICAgIHBvbXBvbU5hbWVTdHJvbmdFbC5pbm5lclRleHQgPSAn7Y+87Y+8JztcclxuICAgICAgICBwb21wb21UZXh0RGl2RWwuY2xhc3NMaXN0LmFkZCgndXNlclRleHQnKTtcclxuICAgICAgICBwb21wb21NZXNzYWdlUEVsLmNsYXNzTGlzdC5hZGQoJ3VzZXJNc2dDb250ZW50Jyk7XHJcbiAgICAgICAgcG9tcG9tTWVzc2FnZVBFbC5jbGFzc0xpc3QuYWRkKCd1c2VyU3RhdHVzTXNnJyk7XHJcbiAgICAgICAgcG9tcG9tTWVzc2FnZVBFbC5pbm5lclRleHQgPSAn7JeQLi4nO1xyXG4gICAgICAgIHBvbXBvbURhdGVQRWwuY2xhc3NMaXN0LmFkZCgndXNlck1zZ0NvbnRlbnQnKTtcclxuICAgICAgICBwb21wb21EYXRlUEVsLmNsYXNzTGlzdC5hZGQoJ3VzZXJNc2dEYXRlJyk7XHJcbiAgICAgICAgcG9tcG9tRGF0ZVBFbC5pbm5lclRleHQgPSAnMDguIDAxJztcclxuICAgICAgICBwb21wb21UZXh0RGl2RWwuYXBwZW5kQ2hpbGQocG9tcG9tTWVzc2FnZVBFbCk7XHJcbiAgICAgICAgcG9tcG9tVGV4dERpdkVsLmFwcGVuZENoaWxkKHBvbXBvbURhdGVQRWwpO1xyXG4gICAgICAgIHBvbXBvbUluZm9EaXZFbC5hcHBlbmRDaGlsZChwb21wb21OYW1lU3Ryb25nRWwpO1xyXG4gICAgICAgIHBvbXBvbUluZm9EaXZFbC5hcHBlbmRDaGlsZChwb21wb21UZXh0RGl2RWwpO1xyXG4gICAgICAgIHBvbXBvbURpdkVsLmFwcGVuZENoaWxkKHBvbXBvbUltZ0VsKTtcclxuICAgICAgICBwb21wb21EaXZFbC5hcHBlbmRDaGlsZChwb21wb21JbmZvRGl2RWwpO1xyXG4gICAgICAgIHBvbXBvbUxpRWwuYXBwZW5kQ2hpbGQocG9tcG9tRGl2RWwpO1xyXG4gICAgICAgIHVzZXJMaXN0VWxFbC5hcHBlbmRDaGlsZChwb2NoYWNjb0xpRWwpO1xyXG4gICAgICAgIHVzZXJMaXN0VWxFbC5hcHBlbmRDaGlsZChrZXJvcGlMaUVsKTtcclxuICAgICAgICB1c2VyTGlzdFVsRWwuYXBwZW5kQ2hpbGQoYm9vbmdib29uZ0xpRWwpO1xyXG4gICAgICAgIHVzZXJMaXN0VWxFbC5hcHBlbmRDaGlsZChwb21wb21MaUVsKTtcclxuICAgICAgICBtYWluRWwuYXBwZW5kQ2hpbGQodXNlckxpc3RVbEVsKTtcclxuICAgICAgICBjaGF0V3JhcERpdkVsLmFwcGVuZENoaWxkKG1haW5FbCk7XHJcbiAgICAgICAgLy8gZm9vdGVyXHJcbiAgICAgICAgY2hhdFdyYXBEaXZFbC5hcHBlbmRDaGlsZChmb290ZXJFbCk7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjaGF0V3JhcERpdkVsKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDaGF0UGFnZTtcclxuIiwiaW1wb3J0IHsgY2xpY2tDaGF0TW9kYWwgfSBmcm9tICcuLi9zY3JpcHQvbW9kYWwnO1xyXG5pbXBvcnQgeyBiYWNrSGlzdG9yeSB9IGZyb20gJy4uL3V0aWxzL2NvbW1vbic7XHJcbmNsYXNzIENoYXR0aW5nUGFnZTEge1xyXG4gICAgcmVuZGVyKGNvbnRlbnQpIHtcclxuICAgICAgICAvLyBoZWFkZXJcclxuICAgICAgICBjb25zdCBoZWFkZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRpbmcxRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICAgIGNvbnN0IGFydGljbGVIZWFkZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcclxuICAgICAgICBjb25zdCBiYWNrSW1nRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBjb25zdCBjaGF0VXNlclBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBjb25zdCBtZW51SW1nRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBoZWFkZXJFbC5jbGFzc0xpc3QuYWRkKCdjaGF0SGVhZGVyJyk7XHJcbiAgICAgICAgaGVhZGluZzFFbC5jbGFzc0xpc3QuYWRkKCdpcicpO1xyXG4gICAgICAgIGhlYWRpbmcxRWwuaW5uZXJUZXh0ID0gJ+2PrOyxoOy9lOuLmCDssYTtjIXrsKknO1xyXG4gICAgICAgIGFydGljbGVIZWFkZXJFbC5jbGFzc0xpc3QuYWRkKCdoZWFkZXJCYXInKTtcclxuICAgICAgICBiYWNrSW1nRWwuY2xhc3NMaXN0LmFkZCgnaGVhZGVyQmFyQmFjaycpO1xyXG4gICAgICAgIGJhY2tJbWdFbC5jbGFzc0xpc3QuYWRkKCdidXR0b25DbGljaycpO1xyXG4gICAgICAgIGJhY2tJbWdFbC5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9hc3NldC9pbWFnZXMvaWNvbnMvaWNvbl9fYXJyb3dMZWZ0LnN2ZycpO1xyXG4gICAgICAgIGJhY2tJbWdFbC5zZXRBdHRyaWJ1dGUoJ2FsdCcsICfrkqTroZwg6rCA6riwJyk7XHJcbiAgICAgICAgYmFja0ltZ0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYmFja0hpc3RvcnkpO1xyXG4gICAgICAgIGNoYXRVc2VyUEVsLmNsYXNzTGlzdC5hZGQoJ2hlYWRlckJhclRleHQnKTtcclxuICAgICAgICBjaGF0VXNlclBFbC5jbGFzc0xpc3QuYWRkKCdoZWFkZXJCYXJJbnB1dCcpO1xyXG4gICAgICAgIGNoYXRVc2VyUEVsLmlubmVyVGV4dCA9ICftj6zssaDsvZQnO1xyXG4gICAgICAgIG1lbnVJbWdFbC5jbGFzc0xpc3QuYWRkKCdoZWFkZXJCYXJNb2RhbCcpO1xyXG4gICAgICAgIG1lbnVJbWdFbC5jbGFzc0xpc3QuYWRkKCdoZWFkZXJCYXJCdG4nKTtcclxuICAgICAgICBtZW51SW1nRWwuY2xhc3NMaXN0LmFkZCgnYnV0dG9uQ2xpY2snKTtcclxuICAgICAgICBtZW51SW1nRWwuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vYXNzZXQvaW1hZ2VzL2ljb25zL2ljb25fX21lbnUuc3ZnJyk7XHJcbiAgICAgICAgbWVudUltZ0VsLnNldEF0dHJpYnV0ZSgnYWx0JywgJ+uplOuJtCcpO1xyXG4gICAgICAgIG1lbnVJbWdFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY2xpY2tDaGF0TW9kYWwoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBhcnRpY2xlSGVhZGVyRWwuYXBwZW5kQ2hpbGQoYmFja0ltZ0VsKTtcclxuICAgICAgICBhcnRpY2xlSGVhZGVyRWwuYXBwZW5kQ2hpbGQoY2hhdFVzZXJQRWwpO1xyXG4gICAgICAgIGFydGljbGVIZWFkZXJFbC5hcHBlbmRDaGlsZChtZW51SW1nRWwpO1xyXG4gICAgICAgIGhlYWRlckVsLmFwcGVuZENoaWxkKGhlYWRpbmcxRWwpO1xyXG4gICAgICAgIGhlYWRlckVsLmFwcGVuZENoaWxkKGFydGljbGVIZWFkZXJFbCk7XHJcbiAgICAgICAgLy8gbWFpblxyXG4gICAgICAgIGNvbnN0IG1haW5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICAgICAgICBjb25zdCBjaGF0SW4xQXJ0aWNsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xyXG4gICAgICAgIGNvbnN0IGNoYXRJbjFQcm9maWxlSW1nRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBjb25zdCBjaGF0SW4xU2VjdGlvbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IGNoYXRJbjFUZXh0UEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbnN0IGNoYXRJbjFEYXRlUEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIG1haW5FbC5jbGFzc0xpc3QuYWRkKCdjaGF0U2NyZWVuJyk7XHJcbiAgICAgICAgY2hhdEluMUFydGljbGVFbC5jbGFzc0xpc3QuYWRkKCdjaGF0TXNnJyk7XHJcbiAgICAgICAgY2hhdEluMUFydGljbGVFbC5jbGFzc0xpc3QuYWRkKCdjaGF0SW5jb21taW5nTXNnJyk7XHJcbiAgICAgICAgY2hhdEluMVByb2ZpbGVJbWdFbC5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9hc3NldC9pbWFnZXMvdXNlci9wb2NoYWNjby5wbmcnKTtcclxuICAgICAgICBjaGF0SW4xUHJvZmlsZUltZ0VsLnNldEF0dHJpYnV0ZSgnYWx0JywgJ+2UhOuhnO2VhCDsnbTrr7jsp4AnKTtcclxuICAgICAgICBjaGF0SW4xUHJvZmlsZUltZ0VsLmNsYXNzTGlzdC5hZGQoJ3VzZXJQcm9maWxlSW1hZ2UnKTtcclxuICAgICAgICBjaGF0SW4xU2VjdGlvbkVsLmNsYXNzTGlzdC5hZGQoJ2NoYXRNc2dDb250ZW50Jyk7XHJcbiAgICAgICAgY2hhdEluMVRleHRQRWwuY2xhc3NMaXN0LmFkZCgnY2hhdE1zZ1RleHQnKTtcclxuICAgICAgICBjaGF0SW4xVGV4dFBFbC5pbm5lclRleHQgPSAn7JWI64WV7ZWY7IS47JqUISc7XHJcbiAgICAgICAgY2hhdEluMURhdGVQRWwuY2xhc3NMaXN0LmFkZCgnY2hhdE1zZ0RhdGUnKTtcclxuICAgICAgICBjaGF0SW4xRGF0ZVBFbC5pbm5lclRleHQgPSAnMTI6MzknO1xyXG4gICAgICAgIGNoYXRJbjFTZWN0aW9uRWwuYXBwZW5kQ2hpbGQoY2hhdEluMVRleHRQRWwpO1xyXG4gICAgICAgIGNoYXRJbjFTZWN0aW9uRWwuYXBwZW5kQ2hpbGQoY2hhdEluMURhdGVQRWwpO1xyXG4gICAgICAgIGNoYXRJbjFBcnRpY2xlRWwuYXBwZW5kQ2hpbGQoY2hhdEluMVByb2ZpbGVJbWdFbCk7XHJcbiAgICAgICAgY2hhdEluMUFydGljbGVFbC5hcHBlbmRDaGlsZChjaGF0SW4xU2VjdGlvbkVsKTtcclxuICAgICAgICBjb25zdCBjaGF0SW4yQXJ0aWNsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xyXG4gICAgICAgIGNvbnN0IGNoYXRJbjJQcm9maWxlSW1nRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBjb25zdCBjaGF0SW4yU2VjdGlvbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IGNoYXRJbjJUZXh0UEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbnN0IGNoYXRJbjJEYXRlUEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNoYXRJbjJBcnRpY2xlRWwuY2xhc3NMaXN0LmFkZCgnY2hhdE1zZycpO1xyXG4gICAgICAgIGNoYXRJbjJBcnRpY2xlRWwuY2xhc3NMaXN0LmFkZCgnY2hhdEluY29tbWluZ01zZycpO1xyXG4gICAgICAgIGNoYXRJbjJQcm9maWxlSW1nRWwuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vYXNzZXQvaW1hZ2VzL3VzZXIvcG9jaGFjY28ucG5nJyk7XHJcbiAgICAgICAgY2hhdEluMlByb2ZpbGVJbWdFbC5zZXRBdHRyaWJ1dGUoJ2FsdCcsICftlITroZztlYQg7J2066+47KeAJyk7XHJcbiAgICAgICAgY2hhdEluMlByb2ZpbGVJbWdFbC5jbGFzc0xpc3QuYWRkKCd1c2VyUHJvZmlsZUltYWdlJyk7XHJcbiAgICAgICAgY2hhdEluMlNlY3Rpb25FbC5jbGFzc0xpc3QuYWRkKCdjaGF0TXNnQ29udGVudCcpO1xyXG4gICAgICAgIGNoYXRJbjJUZXh0UEVsLmNsYXNzTGlzdC5hZGQoJ2NoYXRNc2dUZXh0Jyk7XHJcbiAgICAgICAgY2hhdEluMlRleHRQRWwuaW5uZXJUZXh0ID0gJ+uLueq3vCDrvZHquLAg7JWM67CUIOyngOybkCDtlZjshajso6A/JztcclxuICAgICAgICBjaGF0SW4yRGF0ZVBFbC5jbGFzc0xpc3QuYWRkKCdjaGF0TXNnRGF0ZScpO1xyXG4gICAgICAgIGNoYXRJbjJEYXRlUEVsLmlubmVyVGV4dCA9ICcxMjo0MSc7XHJcbiAgICAgICAgY2hhdEluMlNlY3Rpb25FbC5hcHBlbmRDaGlsZChjaGF0SW4yVGV4dFBFbCk7XHJcbiAgICAgICAgY2hhdEluMlNlY3Rpb25FbC5hcHBlbmRDaGlsZChjaGF0SW4yRGF0ZVBFbCk7XHJcbiAgICAgICAgY2hhdEluMkFydGljbGVFbC5hcHBlbmRDaGlsZChjaGF0SW4yUHJvZmlsZUltZ0VsKTtcclxuICAgICAgICBjaGF0SW4yQXJ0aWNsZUVsLmFwcGVuZENoaWxkKGNoYXRJbjJTZWN0aW9uRWwpO1xyXG4gICAgICAgIGNvbnN0IGNoYXRPdXQxQXJ0aWNsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xyXG4gICAgICAgIGNvbnN0IGNoYXRPdXQxU2VjdGlvbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IGNoYXRPdXQxVGV4dFBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBjb25zdCBjaGF0T3V0MURhdGVQRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgY2hhdE91dDFBcnRpY2xlRWwuY2xhc3NMaXN0LmFkZCgnY2hhdE1zZycpO1xyXG4gICAgICAgIGNoYXRPdXQxQXJ0aWNsZUVsLmNsYXNzTGlzdC5hZGQoJ2NoYXRPdXRnb2luZ01zZycpO1xyXG4gICAgICAgIGNoYXRPdXQxU2VjdGlvbkVsLmNsYXNzTGlzdC5hZGQoJ2NoYXRNc2dDb250ZW50Jyk7XHJcbiAgICAgICAgY2hhdE91dDFUZXh0UEVsLmNsYXNzTGlzdC5hZGQoJ2NoYXRNc2dUZXh0Jyk7XHJcbiAgICAgICAgY2hhdE91dDFUZXh0UEVsLmlubmVyVGV4dCA9ICfrhKQhIOygnOqwgCDspIDruYTrkJwg64aN67aAIOyeheuLiOuLpC4g8J+nkfCfj7vigI3wn4y+JztcclxuICAgICAgICBjaGF0T3V0MURhdGVQRWwuY2xhc3NMaXN0LmFkZCgnY2hhdE1zZ0RhdGUnKTtcclxuICAgICAgICBjaGF0T3V0MURhdGVQRWwuaW5uZXJUZXh0ID0gJzEyOjQ5JztcclxuICAgICAgICBjaGF0T3V0MVNlY3Rpb25FbC5hcHBlbmRDaGlsZChjaGF0T3V0MVRleHRQRWwpO1xyXG4gICAgICAgIGNoYXRPdXQxU2VjdGlvbkVsLmFwcGVuZENoaWxkKGNoYXRPdXQxRGF0ZVBFbCk7XHJcbiAgICAgICAgY2hhdE91dDFBcnRpY2xlRWwuYXBwZW5kQ2hpbGQoY2hhdE91dDFTZWN0aW9uRWwpO1xyXG4gICAgICAgIGNvbnN0IGNoYXRJbjNBcnRpY2xlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XHJcbiAgICAgICAgY29uc3QgY2hhdEluM1Byb2ZpbGVJbWdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGNvbnN0IGNoYXRJbjNTZWN0aW9uRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgY2hhdEluM1RleHRQRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgY29uc3QgY2hhdEluM0RhdGVQRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgY2hhdEluM0FydGljbGVFbC5jbGFzc0xpc3QuYWRkKCdjaGF0TXNnJyk7XHJcbiAgICAgICAgY2hhdEluM0FydGljbGVFbC5jbGFzc0xpc3QuYWRkKCdjaGF0SW5jb21taW5nTXNnJyk7XHJcbiAgICAgICAgY2hhdEluM1Byb2ZpbGVJbWdFbC5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9hc3NldC9pbWFnZXMvdXNlci9wb2NoYWNjby5wbmcnKTtcclxuICAgICAgICBjaGF0SW4zUHJvZmlsZUltZ0VsLnNldEF0dHJpYnV0ZSgnYWx0JywgJ+2UhOuhnO2VhCDsnbTrr7jsp4AnKTtcclxuICAgICAgICBjaGF0SW4zUHJvZmlsZUltZ0VsLmNsYXNzTGlzdC5hZGQoJ3VzZXJQcm9maWxlSW1hZ2UnKTtcclxuICAgICAgICBjaGF0SW4zU2VjdGlvbkVsLmNsYXNzTGlzdC5hZGQoJ2NoYXRNc2dDb250ZW50Jyk7XHJcbiAgICAgICAgY2hhdEluM1RleHRQRWwuY2xhc3NMaXN0LmFkZCgnY2hhdE1zZ1RleHQnKTtcclxuICAgICAgICBjaGF0SW4zVGV4dFBFbC5pbm5lclRleHQgPSAn64u56re8IOu9keq4sCDtlbTrs7Tsi6Ag7KCBIOyeiOuCmOyalD8g8J+Yhic7XHJcbiAgICAgICAgY2hhdEluM0RhdGVQRWwuY2xhc3NMaXN0LmFkZCgnY2hhdE1zZ0RhdGUnKTtcclxuICAgICAgICBjaGF0SW4zRGF0ZVBFbC5pbm5lclRleHQgPSAnMTI6NTEnO1xyXG4gICAgICAgIGNoYXRJbjNTZWN0aW9uRWwuYXBwZW5kQ2hpbGQoY2hhdEluM1RleHRQRWwpO1xyXG4gICAgICAgIGNoYXRJbjNTZWN0aW9uRWwuYXBwZW5kQ2hpbGQoY2hhdEluM0RhdGVQRWwpO1xyXG4gICAgICAgIGNoYXRJbjNBcnRpY2xlRWwuYXBwZW5kQ2hpbGQoY2hhdEluM1Byb2ZpbGVJbWdFbCk7XHJcbiAgICAgICAgY2hhdEluM0FydGljbGVFbC5hcHBlbmRDaGlsZChjaGF0SW4zU2VjdGlvbkVsKTtcclxuICAgICAgICBjb25zdCBjaGF0T3V0MkFydGljbGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcclxuICAgICAgICBjb25zdCBjaGF0T3V0MlNlY3Rpb25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCBjaGF0T3V0MlRleHRQRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgY29uc3QgY2hhdE91dDJEYXRlUEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNoYXRPdXQyQXJ0aWNsZUVsLmNsYXNzTGlzdC5hZGQoJ2NoYXRNc2cnKTtcclxuICAgICAgICBjaGF0T3V0MkFydGljbGVFbC5jbGFzc0xpc3QuYWRkKCdjaGF0T3V0Z29pbmdNc2cnKTtcclxuICAgICAgICBjaGF0T3V0MlNlY3Rpb25FbC5jbGFzc0xpc3QuYWRkKCdjaGF0TXNnQ29udGVudCcpO1xyXG4gICAgICAgIGNoYXRPdXQyVGV4dFBFbC5jbGFzc0xpc3QuYWRkKCdjaGF0TXNnVGV4dCcpO1xyXG4gICAgICAgIGNoYXRPdXQyVGV4dFBFbC5pbm5lclRleHQgPSAn7IKs7IukIOyXhuyKteuLiOuLpCDwn5iFJztcclxuICAgICAgICBjaGF0T3V0MkRhdGVQRWwuY2xhc3NMaXN0LmFkZCgnY2hhdE1zZ0RhdGUnKTtcclxuICAgICAgICBjaGF0T3V0MkRhdGVQRWwuaW5uZXJUZXh0ID0gJzEyOjU1JztcclxuICAgICAgICBjaGF0T3V0MlNlY3Rpb25FbC5hcHBlbmRDaGlsZChjaGF0T3V0MlRleHRQRWwpO1xyXG4gICAgICAgIGNoYXRPdXQyU2VjdGlvbkVsLmFwcGVuZENoaWxkKGNoYXRPdXQyRGF0ZVBFbCk7XHJcbiAgICAgICAgY2hhdE91dDJBcnRpY2xlRWwuYXBwZW5kQ2hpbGQoY2hhdE91dDJTZWN0aW9uRWwpO1xyXG4gICAgICAgIG1haW5FbC5hcHBlbmRDaGlsZChjaGF0SW4xQXJ0aWNsZUVsKTtcclxuICAgICAgICBtYWluRWwuYXBwZW5kQ2hpbGQoY2hhdEluMkFydGljbGVFbCk7XHJcbiAgICAgICAgbWFpbkVsLmFwcGVuZENoaWxkKGNoYXRPdXQxQXJ0aWNsZUVsKTtcclxuICAgICAgICBtYWluRWwuYXBwZW5kQ2hpbGQoY2hhdEluM0FydGljbGVFbCk7XHJcbiAgICAgICAgbWFpbkVsLmFwcGVuZENoaWxkKGNoYXRPdXQyQXJ0aWNsZUVsKTtcclxuICAgICAgICAvLyBmb290ZXJcclxuICAgICAgICBjb25zdCBmb290ZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG4gICAgICAgIGNvbnN0IGNoYXRJbWdGb3JtRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICAgICAgY29uc3QgY2hhdExhYmVsRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGNvbnN0IHVwbG9hZEltZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0SW1nSW5wdXRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgY29uc3QgY2hhdFRleHRGb3JtRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICAgICAgY29uc3QgY2hhdFRleHRJbnB1dEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBjb25zdCBjaGF0QnRuRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBmb290ZXJFbC5jbGFzc0xpc3QuYWRkKCdjaGF0RW50ZXInKTtcclxuICAgICAgICBjaGF0SW1nRm9ybUVsLmNsYXNzTGlzdC5hZGQoJ2NoYXRFbnRlckltYWdlJyk7XHJcbiAgICAgICAgY2hhdExhYmVsRWwuY2xhc3NMaXN0LmFkZCgnY2hhdFNlbGVjdEltYWdlJyk7XHJcbiAgICAgICAgdXBsb2FkSW1nRWwuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vYXNzZXQvaW1hZ2VzL2ljb25zL2ljb25fX2ltYWdlc1VwbG9kZS5zdmcnKTtcclxuICAgICAgICB1cGxvYWRJbWdFbC5zZXRBdHRyaWJ1dGUoJ2FsdCcsICcnKTtcclxuICAgICAgICBzZWxlY3RJbWdJbnB1dEVsLmlkID0gJ2NoYXRTZWxlY3RJbWFnZSc7XHJcbiAgICAgICAgc2VsZWN0SW1nSW5wdXRFbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZmlsZScpO1xyXG4gICAgICAgIHNlbGVjdEltZ0lucHV0RWwuYWNjZXB0ID0gJ2ltYWdlLyonO1xyXG4gICAgICAgIGNoYXRUZXh0Rm9ybUVsLmNsYXNzTGlzdC5hZGQoJ2NoYXRFbnRlckNvbnRlbnQnKTtcclxuICAgICAgICBjaGF0VGV4dElucHV0RWwucGxhY2Vob2xkZXIgPSAn66mU7Iuc7KeAIOyeheugpe2VmOq4sC4uLic7XHJcbiAgICAgICAgY2hhdFRleHRJbnB1dEVsLnR5cGUgPSAndGV4dCc7XHJcbiAgICAgICAgY2hhdFRleHRJbnB1dEVsLm1heExlbmd0aCA9IDEwMDtcclxuICAgICAgICBjaGF0QnRuRWwudHlwZSA9ICdidXR0b24nO1xyXG4gICAgICAgIGNoYXRCdG5FbC5pbm5lclRleHQgPSAn7KCE7IahJztcclxuICAgICAgICBjaGF0VGV4dEZvcm1FbC5hcHBlbmRDaGlsZChjaGF0VGV4dElucHV0RWwpO1xyXG4gICAgICAgIGNoYXRUZXh0Rm9ybUVsLmFwcGVuZENoaWxkKGNoYXRCdG5FbCk7XHJcbiAgICAgICAgY2hhdExhYmVsRWwuYXBwZW5kQ2hpbGQodXBsb2FkSW1nRWwpO1xyXG4gICAgICAgIGNoYXRJbWdGb3JtRWwuYXBwZW5kQ2hpbGQoY2hhdExhYmVsRWwpO1xyXG4gICAgICAgIGNoYXRJbWdGb3JtRWwuYXBwZW5kQ2hpbGQoc2VsZWN0SW1nSW5wdXRFbCk7XHJcbiAgICAgICAgZm9vdGVyRWwuYXBwZW5kQ2hpbGQoY2hhdEltZ0Zvcm1FbCk7XHJcbiAgICAgICAgZm9vdGVyRWwuYXBwZW5kQ2hpbGQoY2hhdFRleHRGb3JtRWwpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyRWwpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbkVsKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3RlckVsKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDaGF0dGluZ1BhZ2UxO1xyXG4iLCJpbXBvcnQgeyBjbGlja0NoYXRNb2RhbCB9IGZyb20gJy4uL3NjcmlwdC9tb2RhbCc7XHJcbmltcG9ydCB7IGJhY2tIaXN0b3J5IH0gZnJvbSAnLi4vdXRpbHMvY29tbW9uJztcclxuY2xhc3MgQ2hhdHRpbmdQYWdlMiB7XHJcbiAgICByZW5kZXIoY29udGVudCkge1xyXG4gICAgICAgIC8vIGhlYWRlclxyXG4gICAgICAgIGNvbnN0IGhlYWRlckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICAgICAgY29uc3QgaGVhZGluZzFFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICAgICAgY29uc3QgYXJ0aWNsZUhlYWRlckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xyXG4gICAgICAgIGNvbnN0IGJhY2tJbWdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGNvbnN0IGNoYXRVc2VyUEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbnN0IG1lbnVJbWdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGhlYWRlckVsLmNsYXNzTGlzdC5hZGQoJ2NoYXRIZWFkZXInKTtcclxuICAgICAgICBoZWFkaW5nMUVsLmNsYXNzTGlzdC5hZGQoJ2lyJyk7XHJcbiAgICAgICAgaGVhZGluZzFFbC5pbm5lclRleHQgPSAn7LyA66Gc7ZS864uYIOyxhO2MheuwqSc7XHJcbiAgICAgICAgYXJ0aWNsZUhlYWRlckVsLmNsYXNzTGlzdC5hZGQoJ2hlYWRlckJhcicpO1xyXG4gICAgICAgIGJhY2tJbWdFbC5jbGFzc0xpc3QuYWRkKCdoZWFkZXJCYXJCYWNrJyk7XHJcbiAgICAgICAgYmFja0ltZ0VsLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbkNsaWNrJyk7XHJcbiAgICAgICAgYmFja0ltZ0VsLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL2Fzc2V0L2ltYWdlcy9pY29ucy9pY29uX19hcnJvd0xlZnQuc3ZnJyk7XHJcbiAgICAgICAgYmFja0ltZ0VsLnNldEF0dHJpYnV0ZSgnYWx0JywgJ+uSpOuhnCDqsIDquLAnKTtcclxuICAgICAgICBiYWNrSW1nRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBiYWNrSGlzdG9yeSk7XHJcbiAgICAgICAgY2hhdFVzZXJQRWwuY2xhc3NMaXN0LmFkZCgnaGVhZGVyQmFyVGV4dCcpO1xyXG4gICAgICAgIGNoYXRVc2VyUEVsLmNsYXNzTGlzdC5hZGQoJ2hlYWRlckJhcklucHV0Jyk7XHJcbiAgICAgICAgY2hhdFVzZXJQRWwuaW5uZXJUZXh0ID0gJ+y8gOuhnO2UvCc7XHJcbiAgICAgICAgbWVudUltZ0VsLmNsYXNzTGlzdC5hZGQoJ2hlYWRlckJhck1vZGFsJyk7XHJcbiAgICAgICAgbWVudUltZ0VsLmNsYXNzTGlzdC5hZGQoJ2hlYWRlckJhckJ0bicpO1xyXG4gICAgICAgIG1lbnVJbWdFbC5jbGFzc0xpc3QuYWRkKCdidXR0b25DbGljaycpO1xyXG4gICAgICAgIG1lbnVJbWdFbC5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9hc3NldC9pbWFnZXMvaWNvbnMvaWNvbl9fbWVudS5zdmcnKTtcclxuICAgICAgICBtZW51SW1nRWwuc2V0QXR0cmlidXRlKCdhbHQnLCAn66mU64m0Jyk7XHJcbiAgICAgICAgbWVudUltZ0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjbGlja0NoYXRNb2RhbCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFydGljbGVIZWFkZXJFbC5hcHBlbmRDaGlsZChiYWNrSW1nRWwpO1xyXG4gICAgICAgIGFydGljbGVIZWFkZXJFbC5hcHBlbmRDaGlsZChjaGF0VXNlclBFbCk7XHJcbiAgICAgICAgYXJ0aWNsZUhlYWRlckVsLmFwcGVuZENoaWxkKG1lbnVJbWdFbCk7XHJcbiAgICAgICAgaGVhZGVyRWwuYXBwZW5kQ2hpbGQoaGVhZGluZzFFbCk7XHJcbiAgICAgICAgaGVhZGVyRWwuYXBwZW5kQ2hpbGQoYXJ0aWNsZUhlYWRlckVsKTtcclxuICAgICAgICAvLyBtYWluXHJcbiAgICAgICAgY29uc3QgbWFpbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgICAgIGNvbnN0IGNoYXRJbjFBcnRpY2xlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XHJcbiAgICAgICAgY29uc3QgY2hhdEluMVByb2ZpbGVJbWdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGNvbnN0IGNoYXRJbjFTZWN0aW9uRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgY2hhdEluMVRleHRQRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgY29uc3QgY2hhdEluMURhdGVQRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgbWFpbkVsLmNsYXNzTGlzdC5hZGQoJ2NoYXRTY3JlZW4nKTtcclxuICAgICAgICBjaGF0SW4xQXJ0aWNsZUVsLmNsYXNzTGlzdC5hZGQoJ2NoYXRNc2cnKTtcclxuICAgICAgICBjaGF0SW4xQXJ0aWNsZUVsLmNsYXNzTGlzdC5hZGQoJ2NoYXRJbmNvbW1pbmdNc2cnKTtcclxuICAgICAgICBjaGF0SW4xUHJvZmlsZUltZ0VsLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL2Fzc2V0L2ltYWdlcy91c2VyL2tlcm9waS5qcGVnJyk7XHJcbiAgICAgICAgY2hhdEluMVByb2ZpbGVJbWdFbC5zZXRBdHRyaWJ1dGUoJ2FsdCcsICftlITroZztlYQg7J2066+47KeAJyk7XHJcbiAgICAgICAgY2hhdEluMVByb2ZpbGVJbWdFbC5jbGFzc0xpc3QuYWRkKCd1c2VyUHJvZmlsZUltYWdlJyk7XHJcbiAgICAgICAgY2hhdEluMVNlY3Rpb25FbC5jbGFzc0xpc3QuYWRkKCdjaGF0TXNnQ29udGVudCcpO1xyXG4gICAgICAgIGNoYXRJbjFUZXh0UEVsLmNsYXNzTGlzdC5hZGQoJ2NoYXRNc2dUZXh0Jyk7XHJcbiAgICAgICAgY2hhdEluMVRleHRQRWwuaW5uZXJUZXh0ID1cclxuICAgICAgICAgICAgJ+yViOuFle2VmOyEuOyalCEg7L2U7J24IOyEuO2DgeuwqSDqsJnsnbQg6rCA7KO87Iuk656Y7JqUPyDsoJzqsIAg7J20IOuPmeuEpOyXkCDsnbTsgqwg7JioIOyngCDslrzrp4gg7JWIIOuPvOyEnCDsp4Drpqzrpbwg7J6YIOuqqOultOqxsOuToOyalCDwn5iFIOydtOu2iCDruajrnpjrj4Qg64+E7JmA7KO87Iuc66m0IOqwkOyCrO2VmOqyoOyKteuLiOuLpCEnO1xyXG4gICAgICAgIGNoYXRJbjFEYXRlUEVsLmNsYXNzTGlzdC5hZGQoJ2NoYXRNc2dEYXRlJyk7XHJcbiAgICAgICAgY2hhdEluMURhdGVQRWwuaW5uZXJUZXh0ID0gJzEyOjM5JztcclxuICAgICAgICBjaGF0SW4xU2VjdGlvbkVsLmFwcGVuZENoaWxkKGNoYXRJbjFUZXh0UEVsKTtcclxuICAgICAgICBjaGF0SW4xU2VjdGlvbkVsLmFwcGVuZENoaWxkKGNoYXRJbjFEYXRlUEVsKTtcclxuICAgICAgICBjaGF0SW4xQXJ0aWNsZUVsLmFwcGVuZENoaWxkKGNoYXRJbjFQcm9maWxlSW1nRWwpO1xyXG4gICAgICAgIGNoYXRJbjFBcnRpY2xlRWwuYXBwZW5kQ2hpbGQoY2hhdEluMVNlY3Rpb25FbCk7XHJcbiAgICAgICAgY29uc3QgY2hhdE91dDFBcnRpY2xlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XHJcbiAgICAgICAgY29uc3QgY2hhdE91dDFTZWN0aW9uRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgY2hhdE91dDFUZXh0UEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbnN0IGNoYXRPdXQxRGF0ZVBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBjaGF0T3V0MUFydGljbGVFbC5jbGFzc0xpc3QuYWRkKCdjaGF0TXNnJyk7XHJcbiAgICAgICAgY2hhdE91dDFBcnRpY2xlRWwuY2xhc3NMaXN0LmFkZCgnY2hhdE91dGdvaW5nTXNnJyk7XHJcbiAgICAgICAgY2hhdE91dDFTZWN0aW9uRWwuY2xhc3NMaXN0LmFkZCgnY2hhdE1zZ0NvbnRlbnQnKTtcclxuICAgICAgICBjaGF0T3V0MVRleHRQRWwuY2xhc3NMaXN0LmFkZCgnY2hhdE1zZ1RleHQnKTtcclxuICAgICAgICBjaGF0T3V0MVRleHRQRWwuaW5uZXJUZXh0ID1cclxuICAgICAgICAgICAgJ+ygnOqwgCDsnpDso7wg6rCA64qUIOy9lOyduCDshLjtg4HrsKnsnLzroZwg6rCA64+EIOuQoOq5jOyalD8g7JetIOyVniDsgqzqsbDrpqzsl5Ag7J6I64qUIOy9lOy9lCDsvZTsnbgg7IS47YOB67Cp7J207JeQ7JqUISc7XHJcbiAgICAgICAgY2hhdE91dDFEYXRlUEVsLmNsYXNzTGlzdC5hZGQoJ2NoYXRNc2dEYXRlJyk7XHJcbiAgICAgICAgY2hhdE91dDFEYXRlUEVsLmlubmVyVGV4dCA9ICcxMjo1NSc7XHJcbiAgICAgICAgY2hhdE91dDFTZWN0aW9uRWwuYXBwZW5kQ2hpbGQoY2hhdE91dDFUZXh0UEVsKTtcclxuICAgICAgICBjaGF0T3V0MVNlY3Rpb25FbC5hcHBlbmRDaGlsZChjaGF0T3V0MURhdGVQRWwpO1xyXG4gICAgICAgIGNoYXRPdXQxQXJ0aWNsZUVsLmFwcGVuZENoaWxkKGNoYXRPdXQxU2VjdGlvbkVsKTtcclxuICAgICAgICBjb25zdCBjaGF0SW4yQXJ0aWNsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xyXG4gICAgICAgIGNvbnN0IGNoYXRJbjJQcm9maWxlSW1nRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBjb25zdCBjaGF0SW4yU2VjdGlvbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IGNoYXRJbjJUZXh0UEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbnN0IGNoYXRJbjJEYXRlUEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNoYXRJbjJBcnRpY2xlRWwuY2xhc3NMaXN0LmFkZCgnY2hhdE1zZycpO1xyXG4gICAgICAgIGNoYXRJbjJBcnRpY2xlRWwuY2xhc3NMaXN0LmFkZCgnY2hhdEluY29tbWluZ01zZycpO1xyXG4gICAgICAgIGNoYXRJbjJQcm9maWxlSW1nRWwuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vYXNzZXQvaW1hZ2VzL3VzZXIva2Vyb3BpLmpwZWcnKTtcclxuICAgICAgICBjaGF0SW4yUHJvZmlsZUltZ0VsLnNldEF0dHJpYnV0ZSgnYWx0JywgJ+2UhOuhnO2VhCDsnbTrr7jsp4AnKTtcclxuICAgICAgICBjaGF0SW4yUHJvZmlsZUltZ0VsLmNsYXNzTGlzdC5hZGQoJ3VzZXJQcm9maWxlSW1hZ2UnKTtcclxuICAgICAgICBjaGF0SW4yU2VjdGlvbkVsLmNsYXNzTGlzdC5hZGQoJ2NoYXRNc2dDb250ZW50Jyk7XHJcbiAgICAgICAgY2hhdEluMlRleHRQRWwuY2xhc3NMaXN0LmFkZCgnY2hhdE1zZ1RleHQnKTtcclxuICAgICAgICBjaGF0SW4yVGV4dFBFbC5pbm5lclRleHQgPSAn64u57Jew7ZWY7KOgISDsnbTrlLAg6rGw6riw7IScIOu1meqyoOyKteuLiOuLpC4nO1xyXG4gICAgICAgIGNoYXRJbjJEYXRlUEVsLmNsYXNzTGlzdC5hZGQoJ2NoYXRNc2dEYXRlJyk7XHJcbiAgICAgICAgY2hhdEluMkRhdGVQRWwuaW5uZXJUZXh0ID0gJzEyOjU4JztcclxuICAgICAgICBjaGF0SW4yU2VjdGlvbkVsLmFwcGVuZENoaWxkKGNoYXRJbjJUZXh0UEVsKTtcclxuICAgICAgICBjaGF0SW4yU2VjdGlvbkVsLmFwcGVuZENoaWxkKGNoYXRJbjJEYXRlUEVsKTtcclxuICAgICAgICBjaGF0SW4yQXJ0aWNsZUVsLmFwcGVuZENoaWxkKGNoYXRJbjJQcm9maWxlSW1nRWwpO1xyXG4gICAgICAgIGNoYXRJbjJBcnRpY2xlRWwuYXBwZW5kQ2hpbGQoY2hhdEluMlNlY3Rpb25FbCk7XHJcbiAgICAgICAgbWFpbkVsLmFwcGVuZENoaWxkKGNoYXRJbjFBcnRpY2xlRWwpO1xyXG4gICAgICAgIG1haW5FbC5hcHBlbmRDaGlsZChjaGF0T3V0MUFydGljbGVFbCk7XHJcbiAgICAgICAgbWFpbkVsLmFwcGVuZENoaWxkKGNoYXRJbjJBcnRpY2xlRWwpO1xyXG4gICAgICAgIC8vIGZvb3RlclxyXG4gICAgICAgIGNvbnN0IGZvb3RlckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbiAgICAgICAgY29uc3QgY2hhdEltZ0Zvcm1FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgICAgICBjb25zdCBjaGF0TGFiZWxFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgY29uc3QgdXBsb2FkSW1nRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBjb25zdCBzZWxlY3RJbWdJbnB1dEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBjb25zdCBjaGF0VGV4dEZvcm1FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgICAgICBjb25zdCBjaGF0VGV4dElucHV0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGNvbnN0IGNoYXRCdG5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGZvb3RlckVsLmNsYXNzTGlzdC5hZGQoJ2NoYXRFbnRlcicpO1xyXG4gICAgICAgIGNoYXRJbWdGb3JtRWwuY2xhc3NMaXN0LmFkZCgnY2hhdEVudGVySW1hZ2UnKTtcclxuICAgICAgICBjaGF0TGFiZWxFbC5jbGFzc0xpc3QuYWRkKCdjaGF0U2VsZWN0SW1hZ2UnKTtcclxuICAgICAgICB1cGxvYWRJbWdFbC5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9hc3NldC9pbWFnZXMvaWNvbnMvaWNvbl9faW1hZ2VzVXBsb2RlLnN2ZycpO1xyXG4gICAgICAgIHVwbG9hZEltZ0VsLnNldEF0dHJpYnV0ZSgnYWx0JywgJycpO1xyXG4gICAgICAgIHNlbGVjdEltZ0lucHV0RWwuaWQgPSAnY2hhdFNlbGVjdEltYWdlJztcclxuICAgICAgICBzZWxlY3RJbWdJbnB1dEVsLnNldEF0dHJpYnV0ZSgndHlwZScsICdmaWxlJyk7XHJcbiAgICAgICAgc2VsZWN0SW1nSW5wdXRFbC5hY2NlcHQgPSAnaW1hZ2UvKic7XHJcbiAgICAgICAgY2hhdFRleHRGb3JtRWwuY2xhc3NMaXN0LmFkZCgnY2hhdEVudGVyQ29udGVudCcpO1xyXG4gICAgICAgIGNoYXRUZXh0SW5wdXRFbC5wbGFjZWhvbGRlciA9ICfrqZTsi5zsp4Ag7J6F66Cl7ZWY6riwLi4uJztcclxuICAgICAgICBjaGF0VGV4dElucHV0RWwudHlwZSA9ICd0ZXh0JztcclxuICAgICAgICBjaGF0VGV4dElucHV0RWwubWF4TGVuZ3RoID0gMTAwO1xyXG4gICAgICAgIGNoYXRCdG5FbC50eXBlID0gJ2J1dHRvbic7XHJcbiAgICAgICAgY2hhdEJ0bkVsLmlubmVyVGV4dCA9ICfsoITshqEnO1xyXG4gICAgICAgIGNoYXRUZXh0Rm9ybUVsLmFwcGVuZENoaWxkKGNoYXRUZXh0SW5wdXRFbCk7XHJcbiAgICAgICAgY2hhdFRleHRGb3JtRWwuYXBwZW5kQ2hpbGQoY2hhdEJ0bkVsKTtcclxuICAgICAgICBjaGF0TGFiZWxFbC5hcHBlbmRDaGlsZCh1cGxvYWRJbWdFbCk7XHJcbiAgICAgICAgY2hhdEltZ0Zvcm1FbC5hcHBlbmRDaGlsZChjaGF0TGFiZWxFbCk7XHJcbiAgICAgICAgY2hhdEltZ0Zvcm1FbC5hcHBlbmRDaGlsZChzZWxlY3RJbWdJbnB1dEVsKTtcclxuICAgICAgICBmb290ZXJFbC5hcHBlbmRDaGlsZChjaGF0SW1nRm9ybUVsKTtcclxuICAgICAgICBmb290ZXJFbC5hcHBlbmRDaGlsZChjaGF0VGV4dEZvcm1FbCk7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXJFbCk7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluRWwpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyRWwpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENoYXR0aW5nUGFnZTI7XHJcbiIsImltcG9ydCB7IGNsaWNrQ2hhdE1vZGFsIH0gZnJvbSAnLi4vc2NyaXB0L21vZGFsJztcclxuaW1wb3J0IHsgYmFja0hpc3RvcnkgfSBmcm9tICcuLi91dGlscy9jb21tb24nO1xyXG5jbGFzcyBDaGF0dGluZ1BhZ2UzIHtcclxuICAgIHJlbmRlcihjb250ZW50KSB7XHJcbiAgICAgICAgLy8gaGVhZGVyXHJcbiAgICAgICAgY29uc3QgaGVhZGVyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgICAgICBjb25zdCBoZWFkaW5nMUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICBjb25zdCBhcnRpY2xlSGVhZGVyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XHJcbiAgICAgICAgY29uc3QgYmFja0ltZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgY29uc3QgY2hhdFVzZXJQRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgY29uc3QgbWVudUltZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgaGVhZGVyRWwuY2xhc3NMaXN0LmFkZCgnY2hhdEhlYWRlcicpO1xyXG4gICAgICAgIGhlYWRpbmcxRWwuY2xhc3NMaXN0LmFkZCgnaXInKTtcclxuICAgICAgICBoZWFkaW5nMUVsLmlubmVyVGV4dCA9ICfrtpXrtpXri5gg7LGE7YyF67CpJztcclxuICAgICAgICBhcnRpY2xlSGVhZGVyRWwuY2xhc3NMaXN0LmFkZCgnaGVhZGVyQmFyJyk7XHJcbiAgICAgICAgYmFja0ltZ0VsLmNsYXNzTGlzdC5hZGQoJ2hlYWRlckJhckJhY2snKTtcclxuICAgICAgICBiYWNrSW1nRWwuY2xhc3NMaXN0LmFkZCgnYnV0dG9uQ2xpY2snKTtcclxuICAgICAgICBiYWNrSW1nRWwuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vYXNzZXQvaW1hZ2VzL2ljb25zL2ljb25fX2Fycm93TGVmdC5zdmcnKTtcclxuICAgICAgICBiYWNrSW1nRWwuc2V0QXR0cmlidXRlKCdhbHQnLCAn65Kk66GcIOqwgOq4sCcpO1xyXG4gICAgICAgIGJhY2tJbWdFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJhY2tIaXN0b3J5KTtcclxuICAgICAgICBjaGF0VXNlclBFbC5jbGFzc0xpc3QuYWRkKCdoZWFkZXJCYXJUZXh0Jyk7XHJcbiAgICAgICAgY2hhdFVzZXJQRWwuY2xhc3NMaXN0LmFkZCgnaGVhZGVyQmFySW5wdXQnKTtcclxuICAgICAgICBjaGF0VXNlclBFbC5pbm5lclRleHQgPSAn67aV67aVJztcclxuICAgICAgICBtZW51SW1nRWwuY2xhc3NMaXN0LmFkZCgnaGVhZGVyQmFyTW9kYWwnKTtcclxuICAgICAgICBtZW51SW1nRWwuY2xhc3NMaXN0LmFkZCgnaGVhZGVyQmFyQnRuJyk7XHJcbiAgICAgICAgbWVudUltZ0VsLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbkNsaWNrJyk7XHJcbiAgICAgICAgbWVudUltZ0VsLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL2Fzc2V0L2ltYWdlcy9pY29ucy9pY29uX19tZW51LnN2ZycpO1xyXG4gICAgICAgIG1lbnVJbWdFbC5zZXRBdHRyaWJ1dGUoJ2FsdCcsICfrqZTribQnKTtcclxuICAgICAgICBtZW51SW1nRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNsaWNrQ2hhdE1vZGFsKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXJ0aWNsZUhlYWRlckVsLmFwcGVuZENoaWxkKGJhY2tJbWdFbCk7XHJcbiAgICAgICAgYXJ0aWNsZUhlYWRlckVsLmFwcGVuZENoaWxkKGNoYXRVc2VyUEVsKTtcclxuICAgICAgICBhcnRpY2xlSGVhZGVyRWwuYXBwZW5kQ2hpbGQobWVudUltZ0VsKTtcclxuICAgICAgICBoZWFkZXJFbC5hcHBlbmRDaGlsZChoZWFkaW5nMUVsKTtcclxuICAgICAgICBoZWFkZXJFbC5hcHBlbmRDaGlsZChhcnRpY2xlSGVhZGVyRWwpO1xyXG4gICAgICAgIC8vIG1haW5cclxuICAgICAgICBjb25zdCBtYWluRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICAgICAgY29uc3QgY2hhdEluMUFydGljbGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcclxuICAgICAgICBjb25zdCBjaGF0SW4xUHJvZmlsZUltZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgY29uc3QgY2hhdEluMVNlY3Rpb25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCBjaGF0SW4xVGV4dFBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBjb25zdCBjaGF0SW4xRGF0ZVBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBtYWluRWwuY2xhc3NMaXN0LmFkZCgnY2hhdFNjcmVlbicpO1xyXG4gICAgICAgIGNoYXRJbjFBcnRpY2xlRWwuY2xhc3NMaXN0LmFkZCgnY2hhdE1zZycpO1xyXG4gICAgICAgIGNoYXRJbjFBcnRpY2xlRWwuY2xhc3NMaXN0LmFkZCgnY2hhdEluY29tbWluZ01zZycpO1xyXG4gICAgICAgIGNoYXRJbjFQcm9maWxlSW1nRWwuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vYXNzZXQvaW1hZ2VzL2Jhc2ljLXByb2ZpbGUuc3ZnJyk7XHJcbiAgICAgICAgY2hhdEluMVByb2ZpbGVJbWdFbC5zZXRBdHRyaWJ1dGUoJ2FsdCcsICftlITroZztlYQg7J2066+47KeAJyk7XHJcbiAgICAgICAgY2hhdEluMVByb2ZpbGVJbWdFbC5jbGFzc0xpc3QuYWRkKCd1c2VyUHJvZmlsZUltYWdlJyk7XHJcbiAgICAgICAgY2hhdEluMVNlY3Rpb25FbC5jbGFzc0xpc3QuYWRkKCdjaGF0TXNnQ29udGVudCcpO1xyXG4gICAgICAgIGNoYXRJbjFUZXh0UEVsLmNsYXNzTGlzdC5hZGQoJ2NoYXRNc2dUZXh0Jyk7XHJcbiAgICAgICAgY2hhdEluMVRleHRQRWwuaW5uZXJUZXh0ID1cclxuICAgICAgICAgICAgJ+uCtCDssKjripQg64K06rCAIO2PieqwgO2VnOuLpC4g7Jik7ZSIIOydtOuypO2KuCDssLjsl6ztlZjqs6Ag6rK97ZKIIOuwm+yVhOqwgOyEuOyalCEg4qyH77iPIOustOujjCDsg4Hri7Qg4pyoIHd3dy56enpnb3psZGVrZGdrYS5jb20nO1xyXG4gICAgICAgIGNoYXRJbjFEYXRlUEVsLmNsYXNzTGlzdC5hZGQoJ2NoYXRNc2dEYXRlJyk7XHJcbiAgICAgICAgY2hhdEluMURhdGVQRWwuaW5uZXJUZXh0ID0gJzEyOjM5JztcclxuICAgICAgICBjaGF0SW4xU2VjdGlvbkVsLmFwcGVuZENoaWxkKGNoYXRJbjFUZXh0UEVsKTtcclxuICAgICAgICBjaGF0SW4xU2VjdGlvbkVsLmFwcGVuZENoaWxkKGNoYXRJbjFEYXRlUEVsKTtcclxuICAgICAgICBjaGF0SW4xQXJ0aWNsZUVsLmFwcGVuZENoaWxkKGNoYXRJbjFQcm9maWxlSW1nRWwpO1xyXG4gICAgICAgIGNoYXRJbjFBcnRpY2xlRWwuYXBwZW5kQ2hpbGQoY2hhdEluMVNlY3Rpb25FbCk7XHJcbiAgICAgICAgbWFpbkVsLmFwcGVuZENoaWxkKGNoYXRJbjFBcnRpY2xlRWwpO1xyXG4gICAgICAgIC8vIGZvb3RlclxyXG4gICAgICAgIGNvbnN0IGZvb3RlckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbiAgICAgICAgY29uc3QgY2hhdEltZ0Zvcm1FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgICAgICBjb25zdCBjaGF0TGFiZWxFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgY29uc3QgdXBsb2FkSW1nRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBjb25zdCBzZWxlY3RJbWdJbnB1dEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBjb25zdCBjaGF0VGV4dEZvcm1FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgICAgICBjb25zdCBjaGF0VGV4dElucHV0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGNvbnN0IGNoYXRCdG5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGZvb3RlckVsLmNsYXNzTGlzdC5hZGQoJ2NoYXRFbnRlcicpO1xyXG4gICAgICAgIGNoYXRJbWdGb3JtRWwuY2xhc3NMaXN0LmFkZCgnY2hhdEVudGVySW1hZ2UnKTtcclxuICAgICAgICBjaGF0TGFiZWxFbC5jbGFzc0xpc3QuYWRkKCdjaGF0U2VsZWN0SW1hZ2UnKTtcclxuICAgICAgICB1cGxvYWRJbWdFbC5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9hc3NldC9pbWFnZXMvaWNvbnMvaWNvbl9faW1hZ2VzVXBsb2RlLnN2ZycpO1xyXG4gICAgICAgIHVwbG9hZEltZ0VsLnNldEF0dHJpYnV0ZSgnYWx0JywgJycpO1xyXG4gICAgICAgIHNlbGVjdEltZ0lucHV0RWwuaWQgPSAnY2hhdFNlbGVjdEltYWdlJztcclxuICAgICAgICBzZWxlY3RJbWdJbnB1dEVsLnNldEF0dHJpYnV0ZSgndHlwZScsICdmaWxlJyk7XHJcbiAgICAgICAgc2VsZWN0SW1nSW5wdXRFbC5hY2NlcHQgPSAnaW1hZ2UvKic7XHJcbiAgICAgICAgY2hhdFRleHRGb3JtRWwuY2xhc3NMaXN0LmFkZCgnY2hhdEVudGVyQ29udGVudCcpO1xyXG4gICAgICAgIGNoYXRUZXh0SW5wdXRFbC5wbGFjZWhvbGRlciA9ICfrqZTsi5zsp4Ag7J6F66Cl7ZWY6riwLi4uJztcclxuICAgICAgICBjaGF0VGV4dElucHV0RWwudHlwZSA9ICd0ZXh0JztcclxuICAgICAgICBjaGF0VGV4dElucHV0RWwubWF4TGVuZ3RoID0gMTAwO1xyXG4gICAgICAgIGNoYXRCdG5FbC50eXBlID0gJ2J1dHRvbic7XHJcbiAgICAgICAgY2hhdEJ0bkVsLmlubmVyVGV4dCA9ICfsoITshqEnO1xyXG4gICAgICAgIGNoYXRUZXh0Rm9ybUVsLmFwcGVuZENoaWxkKGNoYXRUZXh0SW5wdXRFbCk7XHJcbiAgICAgICAgY2hhdFRleHRGb3JtRWwuYXBwZW5kQ2hpbGQoY2hhdEJ0bkVsKTtcclxuICAgICAgICBjaGF0TGFiZWxFbC5hcHBlbmRDaGlsZCh1cGxvYWRJbWdFbCk7XHJcbiAgICAgICAgY2hhdEltZ0Zvcm1FbC5hcHBlbmRDaGlsZChjaGF0TGFiZWxFbCk7XHJcbiAgICAgICAgY2hhdEltZ0Zvcm1FbC5hcHBlbmRDaGlsZChzZWxlY3RJbWdJbnB1dEVsKTtcclxuICAgICAgICBmb290ZXJFbC5hcHBlbmRDaGlsZChjaGF0SW1nRm9ybUVsKTtcclxuICAgICAgICBmb290ZXJFbC5hcHBlbmRDaGlsZChjaGF0VGV4dEZvcm1FbCk7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXJFbCk7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluRWwpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyRWwpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENoYXR0aW5nUGFnZTM7XHJcbiIsImltcG9ydCB7IGNsaWNrQ2hhdE1vZGFsIH0gZnJvbSAnLi4vc2NyaXB0L21vZGFsJztcclxuaW1wb3J0IHsgYmFja0hpc3RvcnkgfSBmcm9tICcuLi91dGlscy9jb21tb24nO1xyXG5jbGFzcyBDaGF0dGluZ1BhZ2U0IHtcclxuICAgIHJlbmRlcihjb250ZW50KSB7XHJcbiAgICAgICAgLy8gaGVhZGVyXHJcbiAgICAgICAgY29uc3QgaGVhZGVyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgICAgICBjb25zdCBoZWFkaW5nMUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICBjb25zdCBhcnRpY2xlSGVhZGVyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XHJcbiAgICAgICAgY29uc3QgYmFja0ltZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgY29uc3QgY2hhdFVzZXJQRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgY29uc3QgbWVudUltZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgaGVhZGVyRWwuY2xhc3NMaXN0LmFkZCgnY2hhdEhlYWRlcicpO1xyXG4gICAgICAgIGhlYWRpbmcxRWwuY2xhc3NMaXN0LmFkZCgnaXInKTtcclxuICAgICAgICBoZWFkaW5nMUVsLmlubmVyVGV4dCA9ICftj7ztj7zri5gg7LGE7YyF67CpJztcclxuICAgICAgICBhcnRpY2xlSGVhZGVyRWwuY2xhc3NMaXN0LmFkZCgnaGVhZGVyQmFyJyk7XHJcbiAgICAgICAgYmFja0ltZ0VsLmNsYXNzTGlzdC5hZGQoJ2hlYWRlckJhckJhY2snKTtcclxuICAgICAgICBiYWNrSW1nRWwuY2xhc3NMaXN0LmFkZCgnYnV0dG9uQ2xpY2snKTtcclxuICAgICAgICBiYWNrSW1nRWwuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vYXNzZXQvaW1hZ2VzL2ljb25zL2ljb25fX2Fycm93TGVmdC5zdmcnKTtcclxuICAgICAgICBiYWNrSW1nRWwuc2V0QXR0cmlidXRlKCdhbHQnLCAn65Kk66GcIOqwgOq4sCcpO1xyXG4gICAgICAgIGJhY2tJbWdFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJhY2tIaXN0b3J5KTtcclxuICAgICAgICBjaGF0VXNlclBFbC5jbGFzc0xpc3QuYWRkKCdoZWFkZXJCYXJUZXh0Jyk7XHJcbiAgICAgICAgY2hhdFVzZXJQRWwuY2xhc3NMaXN0LmFkZCgnaGVhZGVyQmFySW5wdXQnKTtcclxuICAgICAgICBjaGF0VXNlclBFbC5pbm5lclRleHQgPSAn7Y+87Y+8JztcclxuICAgICAgICBtZW51SW1nRWwuY2xhc3NMaXN0LmFkZCgnaGVhZGVyQmFyTW9kYWwnKTtcclxuICAgICAgICBtZW51SW1nRWwuY2xhc3NMaXN0LmFkZCgnaGVhZGVyQmFyQnRuJyk7XHJcbiAgICAgICAgbWVudUltZ0VsLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbkNsaWNrJyk7XHJcbiAgICAgICAgbWVudUltZ0VsLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL2Fzc2V0L2ltYWdlcy9pY29ucy9pY29uX19tZW51LnN2ZycpO1xyXG4gICAgICAgIG1lbnVJbWdFbC5zZXRBdHRyaWJ1dGUoJ2FsdCcsICfrqZTribQnKTtcclxuICAgICAgICBtZW51SW1nRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNsaWNrQ2hhdE1vZGFsKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXJ0aWNsZUhlYWRlckVsLmFwcGVuZENoaWxkKGJhY2tJbWdFbCk7XHJcbiAgICAgICAgYXJ0aWNsZUhlYWRlckVsLmFwcGVuZENoaWxkKGNoYXRVc2VyUEVsKTtcclxuICAgICAgICBhcnRpY2xlSGVhZGVyRWwuYXBwZW5kQ2hpbGQobWVudUltZ0VsKTtcclxuICAgICAgICBoZWFkZXJFbC5hcHBlbmRDaGlsZChoZWFkaW5nMUVsKTtcclxuICAgICAgICBoZWFkZXJFbC5hcHBlbmRDaGlsZChhcnRpY2xlSGVhZGVyRWwpO1xyXG4gICAgICAgIC8vIG1haW5cclxuICAgICAgICBjb25zdCBtYWluRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICAgICAgY29uc3QgY2hhdEluMUFydGljbGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcclxuICAgICAgICBjb25zdCBjaGF0SW4xUHJvZmlsZUltZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgY29uc3QgY2hhdEluMVNlY3Rpb25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCBjaGF0SW4xVGV4dFBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBjb25zdCBjaGF0SW4xRGF0ZVBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBtYWluRWwuY2xhc3NMaXN0LmFkZCgnY2hhdFNjcmVlbicpO1xyXG4gICAgICAgIGNoYXRJbjFBcnRpY2xlRWwuY2xhc3NMaXN0LmFkZCgnY2hhdE1zZycpO1xyXG4gICAgICAgIGNoYXRJbjFBcnRpY2xlRWwuY2xhc3NMaXN0LmFkZCgnY2hhdEluY29tbWluZ01zZycpO1xyXG4gICAgICAgIGNoYXRJbjFQcm9maWxlSW1nRWwuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vYXNzZXQvaW1hZ2VzL3VzZXIvcG9tcG9tLmpwZWcnKTtcclxuICAgICAgICBjaGF0SW4xUHJvZmlsZUltZ0VsLnNldEF0dHJpYnV0ZSgnYWx0JywgJ+2UhOuhnO2VhCDsnbTrr7jsp4AnKTtcclxuICAgICAgICBjaGF0SW4xUHJvZmlsZUltZ0VsLmNsYXNzTGlzdC5hZGQoJ3VzZXJQcm9maWxlSW1hZ2UnKTtcclxuICAgICAgICBjaGF0SW4xU2VjdGlvbkVsLmNsYXNzTGlzdC5hZGQoJ2NoYXRNc2dDb250ZW50Jyk7XHJcbiAgICAgICAgY2hhdEluMVRleHRQRWwuY2xhc3NMaXN0LmFkZCgnY2hhdE1zZ1RleHQnKTtcclxuICAgICAgICBjaGF0SW4xVGV4dFBFbC5pbm5lclRleHQgPSAn67CY66Ck6rKsIOyCsOyxhSDsp4Dsm5DtlZjshajsobA/JztcclxuICAgICAgICBjaGF0SW4xRGF0ZVBFbC5jbGFzc0xpc3QuYWRkKCdjaGF0TXNnRGF0ZScpO1xyXG4gICAgICAgIGNoYXRJbjFEYXRlUEVsLmlubmVyVGV4dCA9ICcxNTozOSc7XHJcbiAgICAgICAgY2hhdEluMVNlY3Rpb25FbC5hcHBlbmRDaGlsZChjaGF0SW4xVGV4dFBFbCk7XHJcbiAgICAgICAgY2hhdEluMVNlY3Rpb25FbC5hcHBlbmRDaGlsZChjaGF0SW4xRGF0ZVBFbCk7XHJcbiAgICAgICAgY2hhdEluMUFydGljbGVFbC5hcHBlbmRDaGlsZChjaGF0SW4xUHJvZmlsZUltZ0VsKTtcclxuICAgICAgICBjaGF0SW4xQXJ0aWNsZUVsLmFwcGVuZENoaWxkKGNoYXRJbjFTZWN0aW9uRWwpO1xyXG4gICAgICAgIGNvbnN0IGNoYXRPdXQxQXJ0aWNsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xyXG4gICAgICAgIGNvbnN0IGNoYXRPdXQxU2VjdGlvbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IGNoYXRPdXQxVGV4dFBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBjb25zdCBjaGF0T3V0MURhdGVQRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgY2hhdE91dDFBcnRpY2xlRWwuY2xhc3NMaXN0LmFkZCgnY2hhdE1zZycpO1xyXG4gICAgICAgIGNoYXRPdXQxQXJ0aWNsZUVsLmNsYXNzTGlzdC5hZGQoJ2NoYXRPdXRnb2luZ01zZycpO1xyXG4gICAgICAgIGNoYXRPdXQxU2VjdGlvbkVsLmNsYXNzTGlzdC5hZGQoJ2NoYXRNc2dDb250ZW50Jyk7XHJcbiAgICAgICAgY2hhdE91dDFUZXh0UEVsLmNsYXNzTGlzdC5hZGQoJ2NoYXRNc2dUZXh0Jyk7XHJcbiAgICAgICAgY2hhdE91dDFUZXh0UEVsLmlubmVyVGV4dCA9ICfrhKQhIOygnOqwgCDrsJTroZwg6rCV7ZiV7JqxIO2biOugqOyCrOuLmCDsnoXri4jri6QuJztcclxuICAgICAgICBjaGF0T3V0MURhdGVQRWwuY2xhc3NMaXN0LmFkZCgnY2hhdE1zZ0RhdGUnKTtcclxuICAgICAgICBjaGF0T3V0MURhdGVQRWwuaW5uZXJUZXh0ID0gJzE2OjA1JztcclxuICAgICAgICBjaGF0T3V0MVNlY3Rpb25FbC5hcHBlbmRDaGlsZChjaGF0T3V0MVRleHRQRWwpO1xyXG4gICAgICAgIGNoYXRPdXQxU2VjdGlvbkVsLmFwcGVuZENoaWxkKGNoYXRPdXQxRGF0ZVBFbCk7XHJcbiAgICAgICAgY2hhdE91dDFBcnRpY2xlRWwuYXBwZW5kQ2hpbGQoY2hhdE91dDFTZWN0aW9uRWwpO1xyXG4gICAgICAgIGNvbnN0IGNoYXRJbjJBcnRpY2xlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XHJcbiAgICAgICAgY29uc3QgY2hhdEluMlByb2ZpbGVJbWdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGNvbnN0IGNoYXRJbjJTZWN0aW9uRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgY2hhdEluMlRleHRQRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgY29uc3QgY2hhdEluMkRhdGVQRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgY2hhdEluMkFydGljbGVFbC5jbGFzc0xpc3QuYWRkKCdjaGF0TXNnJyk7XHJcbiAgICAgICAgY2hhdEluMkFydGljbGVFbC5jbGFzc0xpc3QuYWRkKCdjaGF0SW5jb21taW5nTXNnJyk7XHJcbiAgICAgICAgY2hhdEluMlByb2ZpbGVJbWdFbC5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9hc3NldC9pbWFnZXMvdXNlci9wb21wb20uanBlZycpO1xyXG4gICAgICAgIGNoYXRJbjJQcm9maWxlSW1nRWwuc2V0QXR0cmlidXRlKCdhbHQnLCAn7ZSE66Gc7ZWEIOydtOuvuOyngCcpO1xyXG4gICAgICAgIGNoYXRJbjJQcm9maWxlSW1nRWwuY2xhc3NMaXN0LmFkZCgndXNlclByb2ZpbGVJbWFnZScpO1xyXG4gICAgICAgIGNoYXRJbjJTZWN0aW9uRWwuY2xhc3NMaXN0LmFkZCgnY2hhdE1zZ0NvbnRlbnQnKTtcclxuICAgICAgICBjaGF0SW4yVGV4dFBFbC5jbGFzc0xpc3QuYWRkKCdjaGF0TXNnVGV4dCcpO1xyXG4gICAgICAgIGNoYXRJbjJUZXh0UEVsLmlubmVyVGV4dCA9ICfrhKQ/JztcclxuICAgICAgICBjaGF0SW4yRGF0ZVBFbC5jbGFzc0xpc3QuYWRkKCdjaGF0TXNnRGF0ZScpO1xyXG4gICAgICAgIGNoYXRJbjJEYXRlUEVsLmlubmVyVGV4dCA9ICcxNjoxOCc7XHJcbiAgICAgICAgY2hhdEluMlNlY3Rpb25FbC5hcHBlbmRDaGlsZChjaGF0SW4yVGV4dFBFbCk7XHJcbiAgICAgICAgY2hhdEluMlNlY3Rpb25FbC5hcHBlbmRDaGlsZChjaGF0SW4yRGF0ZVBFbCk7XHJcbiAgICAgICAgY2hhdEluMkFydGljbGVFbC5hcHBlbmRDaGlsZChjaGF0SW4yUHJvZmlsZUltZ0VsKTtcclxuICAgICAgICBjaGF0SW4yQXJ0aWNsZUVsLmFwcGVuZENoaWxkKGNoYXRJbjJTZWN0aW9uRWwpO1xyXG4gICAgICAgIG1haW5FbC5hcHBlbmRDaGlsZChjaGF0SW4xQXJ0aWNsZUVsKTtcclxuICAgICAgICBtYWluRWwuYXBwZW5kQ2hpbGQoY2hhdE91dDFBcnRpY2xlRWwpO1xyXG4gICAgICAgIG1haW5FbC5hcHBlbmRDaGlsZChjaGF0SW4yQXJ0aWNsZUVsKTtcclxuICAgICAgICAvLyBmb290ZXJcclxuICAgICAgICBjb25zdCBmb290ZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG4gICAgICAgIGNvbnN0IGNoYXRJbWdGb3JtRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICAgICAgY29uc3QgY2hhdExhYmVsRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGNvbnN0IHVwbG9hZEltZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0SW1nSW5wdXRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgY29uc3QgY2hhdFRleHRGb3JtRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICAgICAgY29uc3QgY2hhdFRleHRJbnB1dEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBjb25zdCBjaGF0QnRuRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBmb290ZXJFbC5jbGFzc0xpc3QuYWRkKCdjaGF0RW50ZXInKTtcclxuICAgICAgICBjaGF0SW1nRm9ybUVsLmNsYXNzTGlzdC5hZGQoJ2NoYXRFbnRlckltYWdlJyk7XHJcbiAgICAgICAgY2hhdExhYmVsRWwuY2xhc3NMaXN0LmFkZCgnY2hhdFNlbGVjdEltYWdlJyk7XHJcbiAgICAgICAgdXBsb2FkSW1nRWwuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vYXNzZXQvaW1hZ2VzL2ljb25zL2ljb25fX2ltYWdlc1VwbG9kZS5zdmcnKTtcclxuICAgICAgICB1cGxvYWRJbWdFbC5zZXRBdHRyaWJ1dGUoJ2FsdCcsICcnKTtcclxuICAgICAgICBzZWxlY3RJbWdJbnB1dEVsLmlkID0gJ2NoYXRTZWxlY3RJbWFnZSc7XHJcbiAgICAgICAgc2VsZWN0SW1nSW5wdXRFbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZmlsZScpO1xyXG4gICAgICAgIHNlbGVjdEltZ0lucHV0RWwuYWNjZXB0ID0gJ2ltYWdlLyonO1xyXG4gICAgICAgIGNoYXRUZXh0Rm9ybUVsLmNsYXNzTGlzdC5hZGQoJ2NoYXRFbnRlckNvbnRlbnQnKTtcclxuICAgICAgICBjaGF0VGV4dElucHV0RWwucGxhY2Vob2xkZXIgPSAn66mU7Iuc7KeAIOyeheugpe2VmOq4sC4uLic7XHJcbiAgICAgICAgY2hhdFRleHRJbnB1dEVsLnR5cGUgPSAndGV4dCc7XHJcbiAgICAgICAgY2hhdFRleHRJbnB1dEVsLm1heExlbmd0aCA9IDEwMDtcclxuICAgICAgICBjaGF0QnRuRWwudHlwZSA9ICdidXR0b24nO1xyXG4gICAgICAgIGNoYXRCdG5FbC5pbm5lclRleHQgPSAn7KCE7IahJztcclxuICAgICAgICBjaGF0VGV4dEZvcm1FbC5hcHBlbmRDaGlsZChjaGF0VGV4dElucHV0RWwpO1xyXG4gICAgICAgIGNoYXRUZXh0Rm9ybUVsLmFwcGVuZENoaWxkKGNoYXRCdG5FbCk7XHJcbiAgICAgICAgY2hhdExhYmVsRWwuYXBwZW5kQ2hpbGQodXBsb2FkSW1nRWwpO1xyXG4gICAgICAgIGNoYXRJbWdGb3JtRWwuYXBwZW5kQ2hpbGQoY2hhdExhYmVsRWwpO1xyXG4gICAgICAgIGNoYXRJbWdGb3JtRWwuYXBwZW5kQ2hpbGQoc2VsZWN0SW1nSW5wdXRFbCk7XHJcbiAgICAgICAgZm9vdGVyRWwuYXBwZW5kQ2hpbGQoY2hhdEltZ0Zvcm1FbCk7XHJcbiAgICAgICAgZm9vdGVyRWwuYXBwZW5kQ2hpbGQoY2hhdFRleHRGb3JtRWwpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyRWwpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbkVsKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3RlckVsKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDaGF0dGluZ1BhZ2U0O1xyXG4iLCJpbXBvcnQgeyBnZXRQcm9maWxlSW5mbywgaW1hZ2VDaGFuZ2UsIHByb2ZpbGVDaGFuZ2VJbnB1dCwgY2xpY2tTYXZlQnV0dG9uIH0gZnJvbSAnLi4vc2NyaXB0L2VkaXRQcm9maWxlJztcclxuaW1wb3J0IHsgYmFja0hpc3RvcnkgfSBmcm9tICcuLi91dGlscy9jb21tb24nO1xyXG5jbGFzcyBFZGl0UHJvZmlsZVBhZ2Uge1xyXG4gICAgcmVuZGVyKGNvbnRlbnQpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnJlbW92ZSgncHJvZmlsZUJhY2tncm91bmQnKTtcclxuICAgICAgICAvLyBoZWFkZXJcclxuICAgICAgICBjb25zdCBoZWFkZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlckJhckFydGljbGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcclxuICAgICAgICBjb25zdCBiYWNrSW1nRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBjb25zdCBzYXZlQnRuRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBoZWFkZXJCYXJBcnRpY2xlRWwuY2xhc3NMaXN0LmFkZCgnaGVhZGVyQmFyJyk7XHJcbiAgICAgICAgYmFja0ltZ0VsLmNsYXNzTGlzdC5hZGQoJ2hlYWRlckJhckJhY2snKTtcclxuICAgICAgICBiYWNrSW1nRWwuY2xhc3NMaXN0LmFkZCgnYnV0dG9uQ2xpY2snKTtcclxuICAgICAgICBiYWNrSW1nRWwuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vYXNzZXQvaW1hZ2VzL2ljb25zL2ljb25fX2Fycm93TGVmdC5zdmcnKTtcclxuICAgICAgICBiYWNrSW1nRWwuc2V0QXR0cmlidXRlKCdhbHQnLCAn65Kk66GcIOqwgOq4sCcpO1xyXG4gICAgICAgIGJhY2tJbWdFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJhY2tIaXN0b3J5KTtcclxuICAgICAgICBzYXZlQnRuRWwuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xyXG4gICAgICAgIHNhdmVCdG5FbC5jbGFzc0xpc3QuYWRkKCdoZWFkZXJCYXJTZXR0aW5nQnRuJyk7XHJcbiAgICAgICAgc2F2ZUJ0bkVsLmNsYXNzTGlzdC5hZGQoJ2hlYWRlckJhckJ0bicpO1xyXG4gICAgICAgIHNhdmVCdG5FbC5jbGFzc0xpc3QuYWRkKCdidXR0b25DbGljaycpO1xyXG4gICAgICAgIHNhdmVCdG5FbC5pbm5lclRleHQgPSAn7KCA7J6lJztcclxuICAgICAgICBoZWFkZXJCYXJBcnRpY2xlRWwuYXBwZW5kQ2hpbGQoYmFja0ltZ0VsKTtcclxuICAgICAgICBoZWFkZXJCYXJBcnRpY2xlRWwuYXBwZW5kQ2hpbGQoc2F2ZUJ0bkVsKTtcclxuICAgICAgICBoZWFkZXJFbC5hcHBlbmRDaGlsZChoZWFkZXJCYXJBcnRpY2xlRWwpO1xyXG4gICAgICAgIC8vIG1haW5cclxuICAgICAgICBjb25zdCBtYWluRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICAgICAgY29uc3QgaW1nRm9ybUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgICAgIGNvbnN0IGltZ0xhYmVsRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZUltZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgY29uc3QgdXBsb2FkSW1nRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBjb25zdCBpbWdVcGRhdGVJbnB1dEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBpbWdGb3JtRWwuY2xhc3NMaXN0LmFkZCgndXBkYXRlUHJvZmlsZUltZycpO1xyXG4gICAgICAgIGltZ0xhYmVsRWwuY2xhc3NMaXN0LmFkZCgncHJvZmlsZUltZ0J0bicpO1xyXG4gICAgICAgIGltZ0xhYmVsRWwuc2V0QXR0cmlidXRlKCdmb3InLCAndXBkYXRlVXNlclByb2ZpbGVJbWcnKTtcclxuICAgICAgICB1cGRhdGVJbWdFbC5jbGFzc0xpc3QuYWRkKCd1cGRhdGVVc2VySW1nJyk7XHJcbiAgICAgICAgdXBkYXRlSW1nRWwuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vYXNzZXQvaW1hZ2VzL2Jhc2ljLXByb2ZpbGUuc3ZnJyk7XHJcbiAgICAgICAgdXBkYXRlSW1nRWwuc2V0QXR0cmlidXRlKCdhbHQnLCAn7IKs7Jqp7J6QIOydtOuvuOyngCDsiJjsoJUnKTtcclxuICAgICAgICB1cGxvYWRJbWdFbC5jbGFzc0xpc3QuYWRkKCdpbWdVcGxvYWRCdG4nKTtcclxuICAgICAgICB1cGxvYWRJbWdFbC5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9hc3NldC9pbWFnZXMvaWNvbnMvaWNvbl9faW1hZ2VzVXBsb2RlRmlsbC5zdmcnKTtcclxuICAgICAgICB1cGxvYWRJbWdFbC5zZXRBdHRyaWJ1dGUoJ2FsdCcsICfsnbTrr7jsp4Ag7IiY7KCVJyk7XHJcbiAgICAgICAgaW1nVXBkYXRlSW5wdXRFbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZmlsZScpO1xyXG4gICAgICAgIGltZ1VwZGF0ZUlucHV0RWwuc2V0QXR0cmlidXRlKCdhY2NlcHQnLCAnaW1hZ2UvKicpO1xyXG4gICAgICAgIGltZ1VwZGF0ZUlucHV0RWwuaWQgPSAndXBkYXRlVXNlclByb2ZpbGVJbWcnO1xyXG4gICAgICAgIGltZ0xhYmVsRWwuYXBwZW5kQ2hpbGQodXBkYXRlSW1nRWwpO1xyXG4gICAgICAgIGltZ0xhYmVsRWwuYXBwZW5kQ2hpbGQodXBsb2FkSW1nRWwpO1xyXG4gICAgICAgIGltZ0Zvcm1FbC5hcHBlbmRDaGlsZChpbWdMYWJlbEVsKTtcclxuICAgICAgICBpbWdGb3JtRWwuYXBwZW5kQ2hpbGQoaW1nVXBkYXRlSW5wdXRFbCk7XHJcbiAgICAgICAgbWFpbkVsLmFwcGVuZENoaWxkKGltZ0Zvcm1FbCk7XHJcbiAgICAgICAgY29uc3QgZWRpdEZyb21FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgICAgICBjb25zdCBuYW1lTGFiZWxFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgY29uc3QgbmFtZUlucHV0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGNvbnN0IGlkTGFiZWxFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgY29uc3QgaWRJbnB1dEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBjb25zdCBhbGVydFBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBjb25zdCBpbnRyb0xhYmVsRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGNvbnN0IGludHJvSW5wdXRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgZWRpdEZyb21FbC5jbGFzc0xpc3QuYWRkKCdsb2dJbkZvcm0nKTtcclxuICAgICAgICBlZGl0RnJvbUVsLmNsYXNzTGlzdC5hZGQoJ3JlZ2lzdGVyRm9ybScpO1xyXG4gICAgICAgIGVkaXRGcm9tRWwuY2xhc3NMaXN0LmFkZCgncHJvZmlsZU1vZGlmaWNhdGlvbkZvcm0nKTtcclxuICAgICAgICBlZGl0RnJvbUVsLnNldEF0dHJpYnV0ZSgnbWV0aG9kJywgJ2dldCcpO1xyXG4gICAgICAgIGVkaXRGcm9tRWwuaWQgPSAncHJvZmlsZVNhdmVGb3JtJztcclxuICAgICAgICBuYW1lTGFiZWxFbC5jbGFzc0xpc3QuYWRkKCdyZWdpc3RlckZvcm1MYWJlbCcpO1xyXG4gICAgICAgIG5hbWVMYWJlbEVsLmNsYXNzTGlzdC5hZGQoJ3Byb2ZpbGVNb2RpZmljYXRpb25Gb3JtbGFiZWwnKTtcclxuICAgICAgICBuYW1lTGFiZWxFbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICduYW1lJyk7XHJcbiAgICAgICAgbmFtZUxhYmVsRWwuaW5uZXJUZXh0ID0gJ+yCrOyaqeyekCDsnbTrpoQnO1xyXG4gICAgICAgIG5hbWVJbnB1dEVsLmlkID0gJ25hbWUnO1xyXG4gICAgICAgIG5hbWVJbnB1dEVsLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICAgICAgbmFtZUlucHV0RWwucmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgIG5hbWVJbnB1dEVsLnBsYWNlaG9sZGVyID0gJzJ+MTDsnpAg7J2064K07Jes7JW8IO2VqeuLiOuLpC4nO1xyXG4gICAgICAgIG5hbWVJbnB1dEVsLm1heExlbmd0aCA9IDEwO1xyXG4gICAgICAgIG5hbWVJbnB1dEVsLm1pbkxlbmd0aCA9IDI7XHJcbiAgICAgICAgaWRMYWJlbEVsLmNsYXNzTGlzdC5hZGQoJ3JlZ2lzdGVyRm9ybUxhYmVsJyk7XHJcbiAgICAgICAgaWRMYWJlbEVsLmNsYXNzTGlzdC5hZGQoJ3Byb2ZpbGVNb2RpZmljYXRpb25Gb3JtbGFiZWwnKTtcclxuICAgICAgICBpZExhYmVsRWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZW1haWwnKTtcclxuICAgICAgICBpZExhYmVsRWwuaW5uZXJUZXh0ID0gJ+qzhOyglSBJRCc7XHJcbiAgICAgICAgaWRJbnB1dEVsLmlkID0gJ2lkJztcclxuICAgICAgICBpZElucHV0RWwuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICAgICAgICBpZElucHV0RWwubWluTGVuZ3RoID0gMjtcclxuICAgICAgICBpZElucHV0RWwubWF4TGVuZ3RoID0gMTA7XHJcbiAgICAgICAgaWRJbnB1dEVsLnJlcXVpcmVkID0gdHJ1ZTtcclxuICAgICAgICBpZElucHV0RWwucGxhY2Vob2xkZXIgPSAn7JiB66y4LCDsiKvsnpAsIO2KueyImOusuOyekCguKSwoXynrp4wg7IKs7JqpIOqwgOuKpe2VqeuLiOuLpC4nO1xyXG4gICAgICAgIGFsZXJ0UEVsLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0TWVzc2FnZScpO1xyXG4gICAgICAgIGFsZXJ0UEVsLmlubmVyVGV4dCA9ICcq7JiB66y4LCDsiKvsnpAsIO2KueyImOusuOyekCguKSwoXynrp4wg7IKs7JqpIOqwgOuKpe2VqeuLiOuLpC4nO1xyXG4gICAgICAgIGludHJvTGFiZWxFbC5jbGFzc0xpc3QuYWRkKCdyZWdpc3RlckZvcm1MYWJlbCcpO1xyXG4gICAgICAgIGludHJvTGFiZWxFbC5jbGFzc0xpc3QuYWRkKCdwcm9maWxlTW9kaWZpY2F0aW9uRm9ybWxhYmVsJyk7XHJcbiAgICAgICAgaW50cm9MYWJlbEVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2ludHJvZHVjZScpO1xyXG4gICAgICAgIGludHJvTGFiZWxFbC5pbm5lclRleHQgPSAn7IaM6rCcJztcclxuICAgICAgICBpbnRyb0lucHV0RWwuaWQgPSAnaW50cm9kdWNlJztcclxuICAgICAgICBpbnRyb0lucHV0RWwuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICAgICAgICBpbnRyb0lucHV0RWwucmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgIGludHJvSW5wdXRFbC5wbGFjZWhvbGRlciA9ICfsnpDsi6Dqs7wg7YyQ66ek7ZWgIOyDge2SiOyXkCDrjIDtlZwg7IaM6rCc7ZW0IOyjvOyEuOyalCEnO1xyXG4gICAgICAgIGludHJvSW5wdXRFbC5tYXhMZW5ndGggPSA1MDtcclxuICAgICAgICBpbnRyb0lucHV0RWwubWluTGVuZ3RoID0gMjtcclxuICAgICAgICBlZGl0RnJvbUVsLmFwcGVuZENoaWxkKG5hbWVMYWJlbEVsKTtcclxuICAgICAgICBlZGl0RnJvbUVsLmFwcGVuZENoaWxkKG5hbWVJbnB1dEVsKTtcclxuICAgICAgICBlZGl0RnJvbUVsLmFwcGVuZENoaWxkKGlkTGFiZWxFbCk7XHJcbiAgICAgICAgZWRpdEZyb21FbC5hcHBlbmRDaGlsZChpZElucHV0RWwpO1xyXG4gICAgICAgIGVkaXRGcm9tRWwuYXBwZW5kQ2hpbGQoYWxlcnRQRWwpO1xyXG4gICAgICAgIGVkaXRGcm9tRWwuYXBwZW5kQ2hpbGQoaW50cm9MYWJlbEVsKTtcclxuICAgICAgICBlZGl0RnJvbUVsLmFwcGVuZENoaWxkKGludHJvSW5wdXRFbCk7XHJcbiAgICAgICAgbWFpbkVsLmFwcGVuZENoaWxkKGVkaXRGcm9tRWwpO1xyXG4gICAgICAgIC8vIO2UhOuhnO2VhCDsiJjsoJUg6riw64qlIOq1rO2YhFxyXG4gICAgICAgIGdldFByb2ZpbGVJbmZvKHVwZGF0ZUltZ0VsLCBuYW1lSW5wdXRFbCwgaWRJbnB1dEVsLCBpbnRyb0lucHV0RWwpO1xyXG4gICAgICAgIGltZ1VwZGF0ZUlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaW1hZ2VDaGFuZ2UpO1xyXG4gICAgICAgIG5hbWVJbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4gcHJvZmlsZUNoYW5nZUlucHV0KHNhdmVCdG5FbCkpO1xyXG4gICAgICAgIGlkSW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpID0+IHByb2ZpbGVDaGFuZ2VJbnB1dChzYXZlQnRuRWwpKTtcclxuICAgICAgICBpbnRyb0lucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiBwcm9maWxlQ2hhbmdlSW5wdXQoc2F2ZUJ0bkVsKSk7XHJcbiAgICAgICAgc2F2ZUJ0bkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjbGlja1NhdmVCdXR0b24odXBkYXRlSW1nRWwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyRWwpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbkVsKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBFZGl0UHJvZmlsZVBhZ2U7XHJcbiIsImltcG9ydCB7IGJhY2tIaXN0b3J5IH0gZnJvbSAnLi4vdXRpbHMvY29tbW9uJztcclxuY2xhc3MgRXJyb3JQYWdlIHtcclxuICAgIHJlbmRlcihjb250ZW50KSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ3Byb2ZpbGVCYWNrZ3JvdW5kJyk7XHJcbiAgICAgICAgY29uc3Qgd3JhcEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgd3JhcEVsLmNsYXNzTGlzdC5hZGQoJ3dyYXAnKTtcclxuICAgICAgICAvLyBoZWFkZXJcclxuICAgICAgICBjb25zdCBoZWFkZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRpbmcxRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICAgIGNvbnN0IGVycm9ySW1nRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBjb25zdCBlbmdUaXRsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICBjb25zdCBrb3JUaXRsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICBoZWFkaW5nMUVsLmNsYXNzTGlzdC5hZGQoJ2lyJyk7XHJcbiAgICAgICAgaGVhZGluZzFFbC5pbm5lclRleHQgPSAn7Y6Y7J207KeA66W8IOywvuydhCDsiJgg7JeG7Iq164uI64ukJztcclxuICAgICAgICBlcnJvckltZ0VsLmlkID0gJ3RpbWknO1xyXG4gICAgICAgIGVycm9ySW1nRWwuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vYXNzZXQvaW1hZ2VzL05vdC1Gb3VuZC5zdmcnKTtcclxuICAgICAgICBlcnJvckltZ0VsLnNldEF0dHJpYnV0ZSgnYWx0JywgJ+2LsOuvuCcpO1xyXG4gICAgICAgIGVuZ1RpdGxlRWwuY2xhc3NMaXN0LmFkZCgnc3BlY2lhbFNpdHVhdGlvblRpdGxlJyk7XHJcbiAgICAgICAgZW5nVGl0bGVFbC5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xyXG4gICAgICAgIGVuZ1RpdGxlRWwuaW5uZXJUZXh0ID0gJ05vdCBGb3VuZCA0MDQnO1xyXG4gICAgICAgIGtvclRpdGxlRWwuY2xhc3NMaXN0LmFkZCgnc3BlY2lhbFNpdHVhdGlvblRpdGxlJyk7XHJcbiAgICAgICAga29yVGl0bGVFbC5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xyXG4gICAgICAgIGtvclRpdGxlRWwuY2xhc3NMaXN0LmFkZCgnc3VidGl0bGUnKTtcclxuICAgICAgICBrb3JUaXRsZUVsLmlubmVyVGV4dCA9ICftjpjsnbTsp4Drpbwg7LC+7J2EIOyImCDsl4bsirXri4jri6QgOignO1xyXG4gICAgICAgIGhlYWRlckVsLmFwcGVuZENoaWxkKGhlYWRpbmcxRWwpO1xyXG4gICAgICAgIGhlYWRlckVsLmFwcGVuZENoaWxkKGVycm9ySW1nRWwpO1xyXG4gICAgICAgIGhlYWRlckVsLmFwcGVuZENoaWxkKGVuZ1RpdGxlRWwpO1xyXG4gICAgICAgIGhlYWRlckVsLmFwcGVuZENoaWxkKGtvclRpdGxlRWwpO1xyXG4gICAgICAgIC8vIG1haW5cclxuICAgICAgICBjb25zdCBtYWluRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICAgICAgY29uc3QgYmFja0J0bkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYmFja0J0bkVsLmNsYXNzTGlzdC5hZGQoJ2JhY2tCdG4nKTtcclxuICAgICAgICBiYWNrQnRuRWwuY2xhc3NMaXN0LmFkZCgnYnV0dG9uQ2xpY2snKTtcclxuICAgICAgICBiYWNrQnRuRWwuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xyXG4gICAgICAgIGJhY2tCdG5FbC5pbm5lclRleHQgPSAnPC0g7J207KCEIO2OmOydtOyngOuhnCDrj4zslYTqsIDquLAnO1xyXG4gICAgICAgIGJhY2tCdG5FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJhY2tIaXN0b3J5KTtcclxuICAgICAgICBtYWluRWwuYXBwZW5kQ2hpbGQoYmFja0J0bkVsKTtcclxuICAgICAgICB3cmFwRWwuYXBwZW5kQ2hpbGQoaGVhZGVyRWwpO1xyXG4gICAgICAgIHdyYXBFbC5hcHBlbmRDaGlsZChtYWluRWwpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQod3JhcEVsKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBFcnJvclBhZ2U7XHJcbiIsImNsYXNzIEZvb3RlciB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgLy9mb290ZXJcclxuICAgICAgICBjb25zdCBmb290ZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG4gICAgICAgIGNvbnN0IG5hdkJhckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgICAgICAgY29uc3QgdWxFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgbmF2QmFyRWwuY2xhc3NMaXN0LmFkZCgnbmF2QmFyJyk7XHJcbiAgICAgICAgdWxFbC5jbGFzc0xpc3QuYWRkKCduYXZMaXN0Jyk7XHJcbiAgICAgICAgLy8g7ZmIXHJcbiAgICAgICAgY29uc3QgaG9tZWxpRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGNvbnN0IGhvbWVEaXZFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGhvbWVBcnRpY2xlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XHJcbiAgICAgICAgY29uc3QgaG9tZVBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBob21lRGl2RWwuY2xhc3NMaXN0LmFkZCgnbmF2Jyk7XHJcbiAgICAgICAgaG9tZURpdkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIb21lKTtcclxuICAgICAgICBob21lQXJ0aWNsZUVsLmNsYXNzTGlzdC5hZGQoJ25hdkljb24nKTtcclxuICAgICAgICBob21lQXJ0aWNsZUVsLmNsYXNzTGlzdC5hZGQoJ25hdkhvbWUnKTtcclxuICAgICAgICBob21lUEVsLmNsYXNzTGlzdC5hZGQoJ25hdlRleHQnKTtcclxuICAgICAgICBob21lUEVsLmlubmVyVGV4dCA9ICftmYgnO1xyXG4gICAgICAgIGhvbWVEaXZFbC5hcHBlbmRDaGlsZChob21lQXJ0aWNsZUVsKTtcclxuICAgICAgICBob21lRGl2RWwuYXBwZW5kQ2hpbGQoaG9tZVBFbCk7XHJcbiAgICAgICAgaG9tZWxpRWwuYXBwZW5kQ2hpbGQoaG9tZURpdkVsKTtcclxuICAgICAgICB1bEVsLmFwcGVuZENoaWxkKGhvbWVsaUVsKTtcclxuICAgICAgICAvLyDssYTtjIVcclxuICAgICAgICBjb25zdCBjaGF0bGlFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgY29uc3QgY2hhdERpdkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgY2hhdEFydGljbGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcclxuICAgICAgICBjb25zdCBjaGF0UEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNoYXREaXZFbC5jbGFzc0xpc3QuYWRkKCduYXYnKTtcclxuICAgICAgICBjaGF0RGl2RWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0NoYXQpO1xyXG4gICAgICAgIGNoYXRBcnRpY2xlRWwuY2xhc3NMaXN0LmFkZCgnbmF2SWNvbicpO1xyXG4gICAgICAgIGNoYXRBcnRpY2xlRWwuY2xhc3NMaXN0LmFkZCgnbmF2Q2hhdCcpO1xyXG4gICAgICAgIGNoYXRQRWwuY2xhc3NMaXN0LmFkZCgnbmF2VGV4dCcpO1xyXG4gICAgICAgIGNoYXRQRWwuaW5uZXJUZXh0ID0gJ+yxhO2MhSc7XHJcbiAgICAgICAgY2hhdERpdkVsLmFwcGVuZENoaWxkKGNoYXRBcnRpY2xlRWwpO1xyXG4gICAgICAgIGNoYXREaXZFbC5hcHBlbmRDaGlsZChjaGF0UEVsKTtcclxuICAgICAgICBjaGF0bGlFbC5hcHBlbmRDaGlsZChjaGF0RGl2RWwpO1xyXG4gICAgICAgIHVsRWwuYXBwZW5kQ2hpbGQoY2hhdGxpRWwpO1xyXG4gICAgICAgIC8vIO2PrOyKpO2KuFxyXG4gICAgICAgIGNvbnN0IHBvc3RsaUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBjb25zdCBwb3N0RGl2RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBwb3N0QXJ0aWNsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xyXG4gICAgICAgIGNvbnN0IHBvc3RQRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgcG9zdERpdkVsLmNsYXNzTGlzdC5hZGQoJ25hdicpO1xyXG4gICAgICAgIHBvc3REaXZFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrUG9zdCk7XHJcbiAgICAgICAgcG9zdEFydGljbGVFbC5jbGFzc0xpc3QuYWRkKCduYXZJY29uJyk7XHJcbiAgICAgICAgcG9zdEFydGljbGVFbC5jbGFzc0xpc3QuYWRkKCduYXZQb3N0aW5nJyk7XHJcbiAgICAgICAgcG9zdFBFbC5jbGFzc0xpc3QuYWRkKCduYXZUZXh0Jyk7XHJcbiAgICAgICAgcG9zdFBFbC5pbm5lclRleHQgPSAn6rKM7Iuc66y8IOyekeyEsSc7XHJcbiAgICAgICAgcG9zdERpdkVsLmFwcGVuZENoaWxkKHBvc3RBcnRpY2xlRWwpO1xyXG4gICAgICAgIHBvc3REaXZFbC5hcHBlbmRDaGlsZChwb3N0UEVsKTtcclxuICAgICAgICBwb3N0bGlFbC5hcHBlbmRDaGlsZChwb3N0RGl2RWwpO1xyXG4gICAgICAgIHVsRWwuYXBwZW5kQ2hpbGQocG9zdGxpRWwpO1xyXG4gICAgICAgIC8vIO2UhOuhnO2VhFxyXG4gICAgICAgIGNvbnN0IHByb2ZpbGVsaUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBjb25zdCBwcm9maWxlRGl2RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBwcm9maWxlQXJ0aWNsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xyXG4gICAgICAgIGNvbnN0IHByb2ZpbGVQRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgcHJvZmlsZURpdkVsLmNsYXNzTGlzdC5hZGQoJ25hdicpO1xyXG4gICAgICAgIHByb2ZpbGVEaXZFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrUHJvZmlsZSk7XHJcbiAgICAgICAgcHJvZmlsZUFydGljbGVFbC5jbGFzc0xpc3QuYWRkKCduYXZJY29uJyk7XHJcbiAgICAgICAgcHJvZmlsZUFydGljbGVFbC5jbGFzc0xpc3QuYWRkKCduYXZQcm9maWxlJyk7XHJcbiAgICAgICAgcHJvZmlsZVBFbC5jbGFzc0xpc3QuYWRkKCduYXZUZXh0Jyk7XHJcbiAgICAgICAgcHJvZmlsZVBFbC5pbm5lclRleHQgPSAn7ZSE66Gc7ZWEJztcclxuICAgICAgICBwcm9maWxlRGl2RWwuYXBwZW5kQ2hpbGQocHJvZmlsZUFydGljbGVFbCk7XHJcbiAgICAgICAgcHJvZmlsZURpdkVsLmFwcGVuZENoaWxkKHByb2ZpbGVQRWwpO1xyXG4gICAgICAgIHByb2ZpbGVsaUVsLmFwcGVuZENoaWxkKHByb2ZpbGVEaXZFbCk7XHJcbiAgICAgICAgdWxFbC5hcHBlbmRDaGlsZChwcm9maWxlbGlFbCk7XHJcbiAgICAgICAgbmF2QmFyRWwuYXBwZW5kQ2hpbGQodWxFbCk7XHJcbiAgICAgICAgZm9vdGVyRWwuYXBwZW5kQ2hpbGQobmF2QmFyRWwpO1xyXG4gICAgICAgIC8vIE5hdkJhciBpY29uIO2BtOuemOyKpCDrs4Dqsr3tlZjsl6wg7IOJIOuzgO2ZlFxyXG4gICAgICAgIGNvbnN0IGZvb3Rlckljb25OYW1lID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJyMnKVsxXTtcclxuICAgICAgICBmdW5jdGlvbiBjaGFuZ2VOYXZJY29uKGljb25OYW1lKSB7XHJcbiAgICAgICAgICAgIGlmIChpY29uTmFtZSA9PT0gJ2hvbWUnKSB7XHJcbiAgICAgICAgICAgICAgICBob21lQXJ0aWNsZUVsLmNsYXNzTGlzdC5yZXBsYWNlKCduYXZIb21lJywgJ25hdkhvbWVTZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgY2hhdEFydGljbGVFbC5jbGFzc0xpc3QucmVwbGFjZSgnbmF2Q2hhdFNlbGVjdGVkJywgJ25hdkNoYXQnKTtcclxuICAgICAgICAgICAgICAgIHBvc3RBcnRpY2xlRWwuY2xhc3NMaXN0LnJlcGxhY2UoJ25hdlBvc3RpbmdTZWxlY3RlZCcsICduYXZQb3N0aW5nJyk7XHJcbiAgICAgICAgICAgICAgICBwcm9maWxlQXJ0aWNsZUVsLmNsYXNzTGlzdC5yZXBsYWNlKCduYXZQcm9maWxlU2VsZWN0ZWQnLCAnbmF2UHJvZmlsZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGljb25OYW1lID09PSAnY2hhdCcpIHtcclxuICAgICAgICAgICAgICAgIGhvbWVBcnRpY2xlRWwuY2xhc3NMaXN0LnJlcGxhY2UoJ25hdkhvbWVTZWxlY3RlZCcsICduYXZIb21lJyk7XHJcbiAgICAgICAgICAgICAgICBjaGF0QXJ0aWNsZUVsLmNsYXNzTGlzdC5yZXBsYWNlKCduYXZDaGF0JywgJ25hdkNoYXRTZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgcG9zdEFydGljbGVFbC5jbGFzc0xpc3QucmVwbGFjZSgnbmF2UG9zdGluZ1NlbGVjdGVkJywgJ25hdlBvc3RpbmcnKTtcclxuICAgICAgICAgICAgICAgIHByb2ZpbGVBcnRpY2xlRWwuY2xhc3NMaXN0LnJlcGxhY2UoJ25hdlByb2ZpbGVTZWxlY3RlZCcsICduYXZQcm9maWxlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoaWNvbk5hbWUgPT09ICdwcm9maWxlJykge1xyXG4gICAgICAgICAgICAgICAgaG9tZUFydGljbGVFbC5jbGFzc0xpc3QucmVwbGFjZSgnbmF2SG9tZVNlbGVjdGVkJywgJ25hdkhvbWUnKTtcclxuICAgICAgICAgICAgICAgIGNoYXRBcnRpY2xlRWwuY2xhc3NMaXN0LnJlcGxhY2UoJ25hdkNoYXRTZWxlY3RlZCcsICduYXZDaGF0Jyk7XHJcbiAgICAgICAgICAgICAgICBwb3N0QXJ0aWNsZUVsLmNsYXNzTGlzdC5yZXBsYWNlKCduYXZQb3N0aW5nU2VsZWN0ZWQnLCAnbmF2UG9zdGluZycpO1xyXG4gICAgICAgICAgICAgICAgcHJvZmlsZUFydGljbGVFbC5jbGFzc0xpc3QucmVwbGFjZSgnbmF2UHJvZmlsZScsICduYXZQcm9maWxlU2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjaGFuZ2VOYXZJY29uKGZvb3Rlckljb25OYW1lKTtcclxuICAgICAgICAvLyBOYXZCYXIgaWNvbiDtgbTrpq0g7IucIO2VtOuLuSDtjpjsnbTsp4DroZwg7J2064+ZXHJcbiAgICAgICAgZnVuY3Rpb24gY2xpY2tIb21lKCkge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjaG9tZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGNsaWNrQ2hhdCgpIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnI2NoYXQnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBjbGlja1Byb2ZpbGUoKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyNwcm9maWxlJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gY2xpY2tQb3N0KCkge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjcG9zdFVwbG9hZCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmb290ZXJFbDtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsImltcG9ydCB7IGZlZWRBUEkgfSBmcm9tICcuLi9zY3JpcHQvaG9tZSc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXInO1xyXG5jbGFzcyBIb21lUGFnZSB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgZm9vdGVyID0gbmV3IEZvb3RlcigpO1xyXG4gICAgICAgIGNvbnN0IGZvb3RlckVsID0gZm9vdGVyLnJlbmRlcigpO1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdwcm9maWxlQmFja2dyb3VuZCcpO1xyXG4gICAgICAgIC8vIGhlYWRlclxyXG4gICAgICAgIGNvbnN0IHJvb3RFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICAgICAgY29uc3QgYXJ0aWNsZUhlYWRlckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRpbmcxRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICAgIHJvb3RFbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Jvb3QnKTtcclxuICAgICAgICBhcnRpY2xlSGVhZGVyRWwuY2xhc3NMaXN0LmFkZCgnaGVhZGVyQmFyJyk7XHJcbiAgICAgICAgaGVhZGluZzFFbC5jbGFzc0xpc3QuYWRkKCdtYWluSGVhZGluZycpO1xyXG4gICAgICAgIGhlYWRpbmcxRWwuY2xhc3NMaXN0LmFkZCgnbWFpbkxvZ28nKTtcclxuICAgICAgICBoZWFkaW5nMUVsLmlubmVyVGV4dCA9IFwiNjAnJyDrp4jsvJNcIjtcclxuICAgICAgICBjb25zdCBoZWFkZXJEaXZFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHNwYW5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBoZWFkZXJEaXZFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnI3NlYXJjaCc7IC8vIOyjvOyGjCDsl4XrjbDsnbTtirhcclxuICAgICAgICB9KTtcclxuICAgICAgICBoZWFkZXJEaXZFbC5jbGFzc0xpc3QuYWRkKCdoZWFkZXJCYXJNb2RhbCcpO1xyXG4gICAgICAgIGhlYWRlckRpdkVsLmNsYXNzTGlzdC5hZGQoJ2hlYWRlckJhckJ0bicpO1xyXG4gICAgICAgIGhlYWRlckRpdkVsLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaEJ0bicpO1xyXG4gICAgICAgIHNwYW5FbC5jbGFzc0xpc3QuYWRkKCdpcicpO1xyXG4gICAgICAgIHNwYW5FbC5pbm5lclRleHQgPSAn7IKs7Jqp7J6QIOqygOyDiSDrsoTtirwnO1xyXG4gICAgICAgIGFydGljbGVIZWFkZXJFbC5hcHBlbmRDaGlsZChoZWFkaW5nMUVsKTtcclxuICAgICAgICBhcnRpY2xlSGVhZGVyRWwuYXBwZW5kQ2hpbGQoaGVhZGVyRGl2RWwpO1xyXG4gICAgICAgIGhlYWRlckRpdkVsLmFwcGVuZENoaWxkKHNwYW5FbCk7XHJcbiAgICAgICAgaGVhZGVyRWwuYXBwZW5kQ2hpbGQoYXJ0aWNsZUhlYWRlckVsKTtcclxuICAgICAgICAvLyBtYWluXHJcbiAgICAgICAgY29uc3QgbWFpbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRpbmcyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIGNvbnN0IG1haW5BcnRpY2xlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XHJcbiAgICAgICAgY29uc3QgbWFpbkhlYWRpbmczRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIG1haW5FbC5jbGFzc0xpc3QuYWRkKCdob21lJyk7XHJcbiAgICAgICAgaGVhZGluZzJFbC5jbGFzc0xpc3QuYWRkKCdpcicpO1xyXG4gICAgICAgIGhlYWRpbmcyRWwuaW5uZXJUZXh0ID0gXCI2MCcnIOuniOy8kyDtlLzrk5xcIjtcclxuICAgICAgICBtYWluQXJ0aWNsZUVsLmNsYXNzTGlzdC5hZGQoJ3Bvc3QnKTtcclxuICAgICAgICBtYWluSGVhZGluZzNFbC5jbGFzc0xpc3QuYWRkKCdpcicpO1xyXG4gICAgICAgIG1haW5IZWFkaW5nM0VsLmlubmVyVGV4dCA9ICftlLzrk5wg6rKM7Iuc6riAJztcclxuICAgICAgICBtYWluQXJ0aWNsZUVsLmFwcGVuZENoaWxkKG1haW5IZWFkaW5nM0VsKTtcclxuICAgICAgICBtYWluRWwuYXBwZW5kQ2hpbGQoaGVhZGluZzJFbCk7XHJcbiAgICAgICAgbWFpbkVsLmFwcGVuZENoaWxkKG1haW5BcnRpY2xlRWwpO1xyXG4gICAgICAgIC8vIGhvbWUg7ZS865OcIOq1rO2YhFxyXG4gICAgICAgIGZlZWRBUEkoKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpLmFwcGVuZENoaWxkKGhlYWRlckVsKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpLmFwcGVuZENoaWxkKG1haW5FbCk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb3QnKS5hcHBlbmRDaGlsZChmb290ZXJFbCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiIsImltcG9ydCB7IGlzVmFsaWRUb2tlbiB9IGZyb20gJy4uL3NjcmlwdC9pbnRybyc7XHJcbmNsYXNzIEludHJvUGFnZSB7XHJcbiAgICByZW5kZXIoY29udGVudCkge1xyXG4gICAgICAgIC8vIGhlYWRlclxyXG4gICAgICAgIGNvbnN0IHdyYXBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICAgICAgY29uc3QgaW1nRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBjb25zdCBoZWFkaW5nMUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICB3cmFwRWwuY2xhc3NMaXN0LmFkZCgnd3JhcCcpO1xyXG4gICAgICAgIGhlYWRpbmcxRWwuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcclxuICAgICAgICBoZWFkaW5nMUVsLmNsYXNzTGlzdC5hZGQoJ21hcmtldE5hbWUnKTtcclxuICAgICAgICBpbWdFbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpbWknKTtcclxuICAgICAgICBpbWdFbC5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9hc3NldC9pbWFnZXMvdGltaS5zdmcnKTtcclxuICAgICAgICBpbWdFbC5zZXRBdHRyaWJ1dGUoJ2FsdCcsICfti7Drr7gg7J2066+47KeAJyk7XHJcbiAgICAgICAgaGVhZGVyRWwuYXBwZW5kQ2hpbGQoaW1nRWwpO1xyXG4gICAgICAgIGhlYWRlckVsLmFwcGVuZENoaWxkKGhlYWRpbmcxRWwpO1xyXG4gICAgICAgIHdyYXBFbC5hcHBlbmRDaGlsZChoZWFkZXJFbCk7XHJcbiAgICAgICAgLy8gbWFpblxyXG4gICAgICAgIGNvbnN0IG1haW5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICAgICAgICBjb25zdCBmb3JtRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICAgICAgY29uc3QgbG9naW5CdXR0b25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IHNpZ25VcEJ1dHRvbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgZm9ybUVsLmNsYXNzTGlzdC5hZGQoJ2xvZ0luRm9ybScpO1xyXG4gICAgICAgIGxvZ2luQnV0dG9uRWwuY2xhc3NMaXN0LmFkZCgnYnRuJyk7XHJcbiAgICAgICAgbG9naW5CdXR0b25FbC5jbGFzc0xpc3QuYWRkKCdsb2dJbkJ0bicpO1xyXG4gICAgICAgIGxvZ2luQnV0dG9uRWwuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xyXG4gICAgICAgIGxvZ2luQnV0dG9uRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyNsb2dpbic7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbG9naW5CdXR0b25FbC5pbm5lclRleHQgPSAn7J2066mU7J2866GcIOuhnOq3uOyduCc7XHJcbiAgICAgICAgc2lnblVwQnV0dG9uRWwuY2xhc3NMaXN0LmFkZCgnYnRuJyk7XHJcbiAgICAgICAgc2lnblVwQnV0dG9uRWwuY2xhc3NMaXN0LmFkZCgnbG9nSW5CdG4nKTtcclxuICAgICAgICBzaWduVXBCdXR0b25FbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcbiAgICAgICAgc2lnblVwQnV0dG9uRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyNzaWdudXAnO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNpZ25VcEJ1dHRvbkVsLmlubmVyVGV4dCA9ICftmozsm5DqsIDsnoUnO1xyXG4gICAgICAgIGZvcm1FbC5hcHBlbmRDaGlsZChsb2dpbkJ1dHRvbkVsKTtcclxuICAgICAgICBmb3JtRWwuYXBwZW5kQ2hpbGQoc2lnblVwQnV0dG9uRWwpO1xyXG4gICAgICAgIG1haW5FbC5hcHBlbmRDaGlsZChmb3JtRWwpO1xyXG4gICAgICAgIHdyYXBFbC5hcHBlbmRDaGlsZChtYWluRWwpO1xyXG4gICAgICAgIC8vIO2GoO2BsCDqsoDspp1cclxuICAgICAgICBpc1ZhbGlkVG9rZW4oKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHdyYXBFbCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSW50cm9QYWdlO1xyXG4iLCJpbXBvcnQgeyBjaGVja0lucHV0LCBnZXRMb2dJbkRhdGEgfSBmcm9tICcuLi9zY3JpcHQvbG9nSW4nO1xyXG5jbGFzcyBMb2dpblBhZ2Uge1xyXG4gICAgcmVuZGVyKGNvbnRlbnQpIHtcclxuICAgICAgICAvLyBoZWFkZXJcclxuICAgICAgICBjb25zdCB3cmFwRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBoZWFkZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRpbmcxRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICAgIHdyYXBFbC5jbGFzc0xpc3QuYWRkKCd3cmFwJyk7XHJcbiAgICAgICAgd3JhcEVsLmNsYXNzTGlzdC5hZGQoJ3JlZ2lzdGVyV3JhcCcpO1xyXG4gICAgICAgIGhlYWRpbmcxRWwuY2xhc3NMaXN0LmFkZCgncmVnaXN0ZXJIZWFkZXInKTtcclxuICAgICAgICBoZWFkaW5nMUVsLmlubmVyVGV4dCA9ICfroZzqt7jsnbgnO1xyXG4gICAgICAgIGhlYWRlckVsLmFwcGVuZENoaWxkKGhlYWRpbmcxRWwpO1xyXG4gICAgICAgIHdyYXBFbC5hcHBlbmRDaGlsZChoZWFkZXJFbCk7XHJcbiAgICAgICAgLy8gbWFpblxyXG4gICAgICAgIGNvbnN0IG1haW5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICAgICAgICBjb25zdCBmb3JtRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICAgICAgY29uc3QgZW1haWxMYWJlbEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBjb25zdCBlbWFpbElucHV0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkTGFiZWxFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgY29uc3QgcGFzc3dvcmRJbnB1dEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBjb25zdCBhbGVydFBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBjb25zdCBsb2dpbkJ1dHRvbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgZm9ybUVsLmNsYXNzTGlzdC5hZGQoJ2xvZ0luRm9ybScpO1xyXG4gICAgICAgIGZvcm1FbC5jbGFzc0xpc3QuYWRkKCdyZWdpc3RlckZvcm0nKTtcclxuICAgICAgICBmb3JtRWwuc2V0QXR0cmlidXRlKCdhY3Rpb24nLCAnJyk7XHJcbiAgICAgICAgZm9ybUVsLnNldEF0dHJpYnV0ZSgnbWV0aG9kJywgJ2dldCcpO1xyXG4gICAgICAgIGVtYWlsTGFiZWxFbC5jbGFzc0xpc3QuYWRkKCdyZWdpc3RlckZvcm1MYWJlbCcpO1xyXG4gICAgICAgIGVtYWlsTGFiZWxFbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdlbWFpbCcpO1xyXG4gICAgICAgIGVtYWlsTGFiZWxFbC5pbm5lclRleHQgPSAn7J2066mU7J28JztcclxuICAgICAgICBlbWFpbElucHV0RWwuaWQgPSAnZW1haWwnO1xyXG4gICAgICAgIGVtYWlsSW5wdXRFbC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZW1haWwnKTtcclxuICAgICAgICBlbWFpbElucHV0RWwuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2VtYWlsJyk7XHJcbiAgICAgICAgZW1haWxJbnB1dEVsLnJlcXVpcmVkID0gdHJ1ZTtcclxuICAgICAgICBmb3JtRWwuYXBwZW5kQ2hpbGQoZW1haWxMYWJlbEVsKTtcclxuICAgICAgICBmb3JtRWwuYXBwZW5kQ2hpbGQoZW1haWxJbnB1dEVsKTtcclxuICAgICAgICBwYXNzd29yZExhYmVsRWwuY2xhc3NMaXN0LmFkZCgncmVnaXN0ZXJGb3JtTGFiZWwnKTtcclxuICAgICAgICBwYXNzd29yZExhYmVsRWwuc2V0QXR0cmlidXRlKCdmb3InLCAncGFzc3dvcmQnKTtcclxuICAgICAgICBwYXNzd29yZExhYmVsRWwuaW5uZXJUZXh0ID0gJ+u5hOuwgOuyiO2YuCc7XHJcbiAgICAgICAgcGFzc3dvcmRJbnB1dEVsLmlkID0gJ3Bhc3N3b3JkJztcclxuICAgICAgICBwYXNzd29yZElucHV0RWwuc2V0QXR0cmlidXRlKCduYW1lJywgJ3Bhc3N3b3JkJyk7XHJcbiAgICAgICAgcGFzc3dvcmRJbnB1dEVsLnNldEF0dHJpYnV0ZSgndHlwZScsICdwYXNzd29yZCcpO1xyXG4gICAgICAgIHBhc3N3b3JkSW5wdXRFbC5taW5MZW5ndGggPSA2O1xyXG4gICAgICAgIHBhc3N3b3JkSW5wdXRFbC5yZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgICAgZm9ybUVsLmFwcGVuZENoaWxkKHBhc3N3b3JkTGFiZWxFbCk7XHJcbiAgICAgICAgZm9ybUVsLmFwcGVuZENoaWxkKHBhc3N3b3JkSW5wdXRFbCk7XHJcbiAgICAgICAgYWxlcnRQRWwuY2xhc3NMaXN0LmFkZCgncmVnaXN0ZXJGb3JtQWxlcnQnKTtcclxuICAgICAgICBhbGVydFBFbC5jbGFzc0xpc3QuYWRkKCdpcicpO1xyXG4gICAgICAgIGFsZXJ0UEVsLmlubmVyVGV4dCA9ICcq7J2066mU7J28IOuYkOuKlCDruYTrsIDrsojtmLjqsIAg7J287LmY7ZWY7KeAIOyViuyKteuLiOuLpC4nO1xyXG4gICAgICAgIGZvcm1FbC5hcHBlbmRDaGlsZChhbGVydFBFbCk7XHJcbiAgICAgICAgbG9naW5CdXR0b25FbC5jbGFzc0xpc3QuYWRkKCdidG4nKTtcclxuICAgICAgICBsb2dpbkJ1dHRvbkVsLmNsYXNzTGlzdC5hZGQoJ2xvZ0luQnRuJyk7XHJcbiAgICAgICAgbG9naW5CdXR0b25FbC5jbGFzc0xpc3QuYWRkKCdyZWdpc3RlckZvcm1CdG4nKTtcclxuICAgICAgICBsb2dpbkJ1dHRvbkVsLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcclxuICAgICAgICBsb2dpbkJ1dHRvbkVsLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICBsb2dpbkJ1dHRvbkVsLmlubmVyVGV4dCA9ICfroZzqt7jsnbgnO1xyXG4gICAgICAgIGZvcm1FbC5hcHBlbmRDaGlsZChsb2dpbkJ1dHRvbkVsKTtcclxuICAgICAgICAvLyBhcnRpY2xlXHJcbiAgICAgICAgY29uc3QgYXJ0aWNsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xyXG4gICAgICAgIGNvbnN0IGFuY2hvckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgIGFuY2hvckVsLmNsYXNzTGlzdC5hZGQoJ3JlZ2lzdGVyQnlFbWFpbCcpO1xyXG4gICAgICAgIGFuY2hvckVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjc2lnbnVwJztcclxuICAgICAgICB9KTtcclxuICAgICAgICBhbmNob3JFbC5pbm5lclRleHQgPSAn7J2066mU7J2866GcIO2ajOybkOqwgOyehSc7XHJcbiAgICAgICAgYXJ0aWNsZUVsLmFwcGVuZENoaWxkKGFuY2hvckVsKTtcclxuICAgICAgICBtYWluRWwuYXBwZW5kQ2hpbGQoZm9ybUVsKTtcclxuICAgICAgICB3cmFwRWwuYXBwZW5kQ2hpbGQobWFpbkVsKTtcclxuICAgICAgICB3cmFwRWwuYXBwZW5kQ2hpbGQoYXJ0aWNsZUVsKTtcclxuICAgICAgICAvLyDtj7wg7J6F66ClXHJcbiAgICAgICAgZm9ybUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4gY2hlY2tJbnB1dChlbWFpbElucHV0RWwsIHBhc3N3b3JkSW5wdXRFbCwgbG9naW5CdXR0b25FbCkpO1xyXG4gICAgICAgIC8vIOuhnOq3uOyduCDsnKDtmqjshLEg6rKA7IKsXHJcbiAgICAgICAgbG9naW5CdXR0b25FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGdldExvZ0luRGF0YShlbWFpbElucHV0RWwsIHBhc3N3b3JkSW5wdXRFbCwgYWxlcnRQRWwsIGZvcm1FbCkpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQod3JhcEVsKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBMb2dpblBhZ2U7XHJcbiIsImNsYXNzIE1haW5QYWdlIHtcclxuICAgIHJlbmRlcihjb250ZW50KSB7XHJcbiAgICAgICAgY29uc3Qgd3JhcEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgYXJ0aWNsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgY2xvY2tFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHdyYXBFbC5jbGFzc0xpc3QuYWRkKCd3cmFwJyk7XHJcbiAgICAgICAgYXJ0aWNsZUVsLmNsYXNzTGlzdC5hZGQoJ2xvYWRkaW5nJyk7XHJcbiAgICAgICAgY29udGFpbmVyRWwuY2xhc3NMaXN0LmFkZCgnYm94Jyk7XHJcbiAgICAgICAgY2xvY2tFbC5jbGFzc0xpc3QuYWRkKCdjbG9jaycpO1xyXG4gICAgICAgIGNvbnRhaW5lckVsLmFwcGVuZENoaWxkKGNsb2NrRWwpO1xyXG4gICAgICAgIGFydGljbGVFbC5hcHBlbmRDaGlsZChjb250YWluZXJFbCk7XHJcbiAgICAgICAgd3JhcEVsLmFwcGVuZENoaWxkKGFydGljbGVFbCk7XHJcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjaW50cm8nO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQod3JhcEVsKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNYWluUGFnZTtcclxuIiwiaW1wb3J0IHsgcG9zdElucHV0LCByZW5kZXJQb3N0LCBzdWJtaXRDb21tZW50LCBnZXRMb2dpblVzZXJJbmZvIH0gZnJvbSAnLi4vc2NyaXB0L3Bvc3QnO1xyXG5pbXBvcnQgeyBiYWNrSGlzdG9yeSB9IGZyb20gJy4uL3V0aWxzL2NvbW1vbic7XHJcbmNsYXNzIFBvc3RQYWdlIHtcclxuICAgIHJlbmRlcihjb250ZW50KSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ3Byb2ZpbGVCYWNrZ3JvdW5kJyk7XHJcbiAgICAgICAgLy9oZWFkZXJcclxuICAgICAgICBjb25zdCBoZWFkZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlckJhckFydGljbGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcclxuICAgICAgICBjb25zdCBiYWNrSW1nRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBoZWFkZXJCYXJBcnRpY2xlRWwuY2xhc3NMaXN0LmFkZCgnaGVhZGVyQmFyJyk7XHJcbiAgICAgICAgYmFja0ltZ0VsLmNsYXNzTGlzdC5hZGQoJ2hlYWRlckJhckJhY2snKTtcclxuICAgICAgICBiYWNrSW1nRWwuY2xhc3NMaXN0LmFkZCgnYnV0dG9uQ2xpY2snKTtcclxuICAgICAgICBiYWNrSW1nRWwuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vYXNzZXQvaW1hZ2VzL2ljb25zL2ljb25fX2Fycm93TGVmdC5zdmcnKTtcclxuICAgICAgICBiYWNrSW1nRWwuc2V0QXR0cmlidXRlKCdhbHQnLCAn65Kk66GcIOqwgOq4sCcpO1xyXG4gICAgICAgIGJhY2tJbWdFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJhY2tIaXN0b3J5KTtcclxuICAgICAgICBoZWFkZXJCYXJBcnRpY2xlRWwuYXBwZW5kQ2hpbGQoYmFja0ltZ0VsKTtcclxuICAgICAgICBoZWFkZXJFbC5hcHBlbmRDaGlsZChoZWFkZXJCYXJBcnRpY2xlRWwpO1xyXG4gICAgICAgIC8vbWFpblxyXG4gICAgICAgIGNvbnN0IG1haW5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICAgICAgICBjb25zdCB0aXRsZUhlYWRpbmcyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIGNvbnN0IHBvc3RDb250YWluZXJBcnRpY2xlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XHJcbiAgICAgICAgY29uc3Qgc3ViVGl0bGVIZWFkaW5nM0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBjb25zdCBzZWN0aW9uRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgdXNlckxpc3REaXZFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJJdGVtRGl2RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBwb3N0Q29udGVudFNlY3Rpb25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCBjb21tZW50U2VjdGlvbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIG1haW5FbC5jbGFzc0xpc3QuYWRkKCdwb3N0V3JhcCcpO1xyXG4gICAgICAgIHRpdGxlSGVhZGluZzJFbC5jbGFzc0xpc3QuYWRkKCdpcicpO1xyXG4gICAgICAgIHBvc3RDb250YWluZXJBcnRpY2xlRWwuY2xhc3NMaXN0LmFkZCgncG9zdCcpO1xyXG4gICAgICAgIHBvc3RDb250YWluZXJBcnRpY2xlRWwuY2xhc3NMaXN0LmFkZCgncG9zdENvbnRhaW5lcicpO1xyXG4gICAgICAgIHN1YlRpdGxlSGVhZGluZzNFbC5jbGFzc0xpc3QuYWRkKCdpcicpO1xyXG4gICAgICAgIHVzZXJMaXN0RGl2RWwuY2xhc3NMaXN0LmFkZCgndXNlckxpc3QnKTtcclxuICAgICAgICB1c2VySXRlbURpdkVsLmNsYXNzTGlzdC5hZGQoJ3VzZXJJdGVtJyk7XHJcbiAgICAgICAgcG9zdENvbnRlbnRTZWN0aW9uRWwuY2xhc3NMaXN0LmFkZCgncG9zdENvbnRlbnQnKTtcclxuICAgICAgICBjb21tZW50U2VjdGlvbkVsLmNsYXNzTGlzdC5hZGQoJ3Bvc3RDb21tZW50Qm94Jyk7XHJcbiAgICAgICAgdXNlckxpc3REaXZFbC5hcHBlbmRDaGlsZCh1c2VySXRlbURpdkVsKTtcclxuICAgICAgICBzZWN0aW9uRWwuYXBwZW5kQ2hpbGQodXNlckxpc3REaXZFbCk7XHJcbiAgICAgICAgcG9zdENvbnRhaW5lckFydGljbGVFbC5hcHBlbmRDaGlsZChzdWJUaXRsZUhlYWRpbmczRWwpO1xyXG4gICAgICAgIHBvc3RDb250YWluZXJBcnRpY2xlRWwuYXBwZW5kQ2hpbGQoc2VjdGlvbkVsKTtcclxuICAgICAgICBwb3N0Q29udGFpbmVyQXJ0aWNsZUVsLmFwcGVuZENoaWxkKHBvc3RDb250ZW50U2VjdGlvbkVsKTtcclxuICAgICAgICBtYWluRWwuYXBwZW5kQ2hpbGQodGl0bGVIZWFkaW5nMkVsKTtcclxuICAgICAgICBtYWluRWwuYXBwZW5kQ2hpbGQocG9zdENvbnRhaW5lckFydGljbGVFbCk7XHJcbiAgICAgICAgbWFpbkVsLmFwcGVuZENoaWxkKGNvbW1lbnRTZWN0aW9uRWwpO1xyXG4gICAgICAgIC8vZm9vdGVyXHJcbiAgICAgICAgY29uc3QgZm9vdGVyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuICAgICAgICBjb25zdCBjaGF0Rm9ybUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgICAgIGNvbnN0IGVudGVySW1nRGl2RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCB1c2VyUHJvZmlsZUltZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgY29uc3QgY2hhdENvbnRlbnRMYWJlbEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBjb25zdCBjaGF0SW5wdXRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgY29uc3QgcG9zdEJ0bkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgZm9vdGVyRWwuY2xhc3NMaXN0LmFkZCgnY2hhdEVudGVyJyk7XHJcbiAgICAgICAgZm9vdGVyRWwuY2xhc3NMaXN0LmFkZCgncG9zdENoYXRFbnRlcicpO1xyXG4gICAgICAgIGNoYXRGb3JtRWwuY2xhc3NMaXN0LmFkZCgnY2hhdEVudGVyQ29udGVudCcpO1xyXG4gICAgICAgIGNoYXRGb3JtRWwub25zdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGVudGVySW1nRGl2RWwuY2xhc3NMaXN0LmFkZCgnY2hhdEVudGVySW1hZ2UnKTtcclxuICAgICAgICB1c2VyUHJvZmlsZUltZ0VsLmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnRVc2VyUHJvZmlsZScpO1xyXG4gICAgICAgIHVzZXJQcm9maWxlSW1nRWwuc2V0QXR0cmlidXRlKCdzcmMnLCAnJyk7XHJcbiAgICAgICAgdXNlclByb2ZpbGVJbWdFbC5zZXRBdHRyaWJ1dGUoJ2FsdCcsICcnKTtcclxuICAgICAgICBjaGF0Q29udGVudExhYmVsRWwuY2xhc3NMaXN0LmFkZCgncG9zdENoYXRDb250ZW50Jyk7XHJcbiAgICAgICAgY2hhdElucHV0RWwuaWQgPSAncG9zdENoYXRDb250ZW50JztcclxuICAgICAgICBjaGF0SW5wdXRFbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgICAgIGNoYXRJbnB1dEVsLnBsYWNlaG9sZGVyID0gJ+uplOyLnOyngCDsnoXroKXtlZjquLAuLi4nO1xyXG4gICAgICAgIGNoYXRJbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgcG9zdElucHV0KTtcclxuICAgICAgICBwb3N0QnRuRWwuaWQgPSAnY29tbWVudFN1Ym1pdCc7XHJcbiAgICAgICAgcG9zdEJ0bkVsLmNsYXNzTGlzdC5hZGQoJ3Bvc3RCdG4nKTtcclxuICAgICAgICBwb3N0QnRuRWwuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xyXG4gICAgICAgIHBvc3RCdG5FbC5pbm5lclRleHQgPSAn6rKM7IucJztcclxuICAgICAgICBwb3N0QnRuRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRDb21tZW50KTtcclxuICAgICAgICBlbnRlckltZ0RpdkVsLmFwcGVuZENoaWxkKHVzZXJQcm9maWxlSW1nRWwpO1xyXG4gICAgICAgIGNoYXRGb3JtRWwuYXBwZW5kQ2hpbGQoZW50ZXJJbWdEaXZFbCk7XHJcbiAgICAgICAgY2hhdEZvcm1FbC5hcHBlbmRDaGlsZChjaGF0Q29udGVudExhYmVsRWwpO1xyXG4gICAgICAgIGNoYXRGb3JtRWwuYXBwZW5kQ2hpbGQoY2hhdElucHV0RWwpO1xyXG4gICAgICAgIGNoYXRGb3JtRWwuYXBwZW5kQ2hpbGQocG9zdEJ0bkVsKTtcclxuICAgICAgICBmb290ZXJFbC5hcHBlbmRDaGlsZChjaGF0Rm9ybUVsKTtcclxuICAgICAgICAvLyDqsozsi5zrrLwg7IOB7IS4IO2OmOydtOyngCDsoJXrs7Qg6rCA7KC47Jik6riwIOuwjyDrjJPquIAg6riw64qlIOq1rO2YhFxyXG4gICAgICAgIHJlbmRlclBvc3QoKTtcclxuICAgICAgICBnZXRMb2dpblVzZXJJbmZvKHVzZXJQcm9maWxlSW1nRWwpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyRWwpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbkVsKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3RlckVsKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBQb3N0UGFnZTtcclxuIiwiaW1wb3J0IHsgcG9zdElucHV0LCByZWFkSW5wdXRGaWxlLCBjaGVja1Bvc3QgfSBmcm9tICcuLi9zY3JpcHQvcG9zdFVwbG9hZCc7XHJcbmltcG9ydCB7IGJhY2tIaXN0b3J5IH0gZnJvbSAnLi4vdXRpbHMvY29tbW9uJztcclxuY2xhc3MgUG9zdFVwbG9hZFBhZ2Uge1xyXG4gICAgcmVuZGVyKGNvbnRlbnQpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnJlbW92ZSgncHJvZmlsZUJhY2tncm91bmQnKTtcclxuICAgICAgICAvLyBoZWFkZXJcclxuICAgICAgICBjb25zdCBoZWFkZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlckJhckFydGljbGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcclxuICAgICAgICBjb25zdCBiYWNrSW1nRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBjb25zdCB1cGxvYWRCdG5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGhlYWRlckJhckFydGljbGVFbC5jbGFzc0xpc3QuYWRkKCdoZWFkZXJCYXInKTtcclxuICAgICAgICBoZWFkZXJCYXJBcnRpY2xlRWwuY2xhc3NMaXN0LmFkZCgncG9zdGluZ0hlYWRlckJhcicpO1xyXG4gICAgICAgIGJhY2tJbWdFbC5jbGFzc0xpc3QuYWRkKCdoZWFkZXJCYXJCYWNrJyk7XHJcbiAgICAgICAgYmFja0ltZ0VsLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbkNsaWNrJyk7XHJcbiAgICAgICAgYmFja0ltZ0VsLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL2Fzc2V0L2ltYWdlcy9pY29ucy9pY29uX19hcnJvd0xlZnQuc3ZnJyk7XHJcbiAgICAgICAgYmFja0ltZ0VsLnNldEF0dHJpYnV0ZSgnYWx0JywgJ+uSpOuhnCDqsIDquLAnKTtcclxuICAgICAgICBiYWNrSW1nRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBiYWNrSGlzdG9yeSk7XHJcbiAgICAgICAgdXBsb2FkQnRuRWwuY2xhc3NMaXN0LmFkZCgnaGVhZGVyQmFyU2V0dGluZ0J0bicpO1xyXG4gICAgICAgIHVwbG9hZEJ0bkVsLmNsYXNzTGlzdC5hZGQoJ2hlYWRlckJhckJ0bicpO1xyXG4gICAgICAgIHVwbG9hZEJ0bkVsLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbkNsaWNrJyk7XHJcbiAgICAgICAgdXBsb2FkQnRuRWwuaWQgPSAncG9zdGluZ1VwbG9hZEJ0bic7XHJcbiAgICAgICAgdXBsb2FkQnRuRWwuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xyXG4gICAgICAgIHVwbG9hZEJ0bkVsLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB1cGxvYWRCdG5FbC5pbm5lclRleHQgPSAn7JeF66Gc65OcJztcclxuICAgICAgICBoZWFkZXJCYXJBcnRpY2xlRWwuYXBwZW5kQ2hpbGQoYmFja0ltZ0VsKTtcclxuICAgICAgICBoZWFkZXJCYXJBcnRpY2xlRWwuYXBwZW5kQ2hpbGQodXBsb2FkQnRuRWwpO1xyXG4gICAgICAgIGhlYWRlckVsLmFwcGVuZENoaWxkKGhlYWRlckJhckFydGljbGVFbCk7XHJcbiAgICAgICAgLy8gbWFpblxyXG4gICAgICAgIGNvbnN0IG1haW5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICAgICAgICBjb25zdCBwb3N0VXBsb2FkRm9ybUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgICAgIGNvbnN0IHByb2ZpbGVJbWdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGNvbnN0IHBvc3RUZXh0TGFiZWxFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgY29uc3QgcG9zdFRleHRhcmVhRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdEltZ0xhYmVsRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGNvbnN0IHVwbG9hZEltZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgY29uc3QgdXBsb2FkSW5wdXRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgY29uc3QgcG9zdEltZ0RpdkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbWFpbkVsLmNsYXNzTGlzdC5hZGQoJ3Bvc3RDb250YWluZXInKTtcclxuICAgICAgICBwb3N0VXBsb2FkRm9ybUVsLmNsYXNzTGlzdC5hZGQoJ3Bvc3RVcGxvYWRGb3JtJyk7XHJcbiAgICAgICAgcHJvZmlsZUltZ0VsLmNsYXNzTGlzdC5hZGQoJ3VzZXJQcm9maWxlSW1hZ2UnKTtcclxuICAgICAgICBwcm9maWxlSW1nRWwuY2xhc3NMaXN0LmFkZCgncG9zdFVwbG9hZENvbW1lbnRJbWcnKTtcclxuICAgICAgICBwcm9maWxlSW1nRWwuc2V0QXR0cmlidXRlKCdhbHQnLCAn7ZSE66Gc7ZWEIOydtOuvuOyngCcpO1xyXG4gICAgICAgIHBvc3RUZXh0TGFiZWxFbC5jbGFzc0xpc3QuYWRkKCdpcicpO1xyXG4gICAgICAgIHBvc3RUZXh0TGFiZWxFbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwb3N0VXBsb2FkQ29tZW50Jyk7XHJcbiAgICAgICAgcG9zdFRleHRMYWJlbEVsLmlubmVyVGV4dCA9ICfqsozsi5zquIAg7J6F66Cl7LC97J6F64uI64ukLic7XHJcbiAgICAgICAgcG9zdFRleHRhcmVhRWwuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICAgICAgICBwb3N0VGV4dGFyZWFFbC5pZCA9ICdwb3N0VXBsb2FkQ29tZW50JztcclxuICAgICAgICBwb3N0VGV4dGFyZWFFbC5yb3dzID0gMTA7XHJcbiAgICAgICAgcG9zdFRleHRhcmVhRWwubWF4TGVuZ3RoID0gMTQwO1xyXG4gICAgICAgIHBvc3RUZXh0YXJlYUVsLnBsYWNlaG9sZGVyID0gJ+qyjOyLnOq4gCDsnoXroKXtlZjquLAuLi4nO1xyXG4gICAgICAgIHBvc3RUZXh0YXJlYUVsLmNsYXNzTGlzdC5hZGQoJ3Bvc3RVcGxvYWRDb21lbnRUeHQnKTtcclxuICAgICAgICBwb3N0VGV4dGFyZWFFbC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpID0+IHtcclxuICAgICAgICAgICAgcG9zdElucHV0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2VsZWN0SW1nTGFiZWxFbC5jbGFzc0xpc3QuYWRkKCdwb3N0VXBsb2FkSW5wdXRJbWcnKTtcclxuICAgICAgICBzZWxlY3RJbWdMYWJlbEVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2NoYXRTZWxlY3RJbWFnZScpO1xyXG4gICAgICAgIHVwbG9hZEltZ0VsLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL2Fzc2V0L2ltYWdlcy9pY29ucy9pY29uX19pbWFnZXNVcGxvZGUuc3ZnJyk7XHJcbiAgICAgICAgdXBsb2FkSW1nRWwuc2V0QXR0cmlidXRlKCdhbHQnLCAnJyk7XHJcbiAgICAgICAgdXBsb2FkSW5wdXRFbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZmlsZScpO1xyXG4gICAgICAgIHVwbG9hZElucHV0RWwuaWQgPSAnY2hhdFNlbGVjdEltYWdlJztcclxuICAgICAgICB1cGxvYWRJbnB1dEVsLmFjY2VwdCA9ICdpbWFnZS8qJztcclxuICAgICAgICB1cGxvYWRJbnB1dEVsLmNsYXNzTGlzdC5hZGQoJ3Bvc3RVcGxvYWRJbnB1dCcpO1xyXG4gICAgICAgIHVwbG9hZElucHV0RWwuY2xhc3NMaXN0LmFkZCgnaXInKTtcclxuICAgICAgICB1cGxvYWRJbnB1dEVsLm11bHRpcGxlID0gdHJ1ZTtcclxuICAgICAgICB1cGxvYWRJbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgcmVhZElucHV0RmlsZShldmVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcG9zdEltZ0RpdkVsLmNsYXNzTGlzdC5hZGQoJ3Bvc3RVcGxvYWRJbWFnZVNjcmVlbicpO1xyXG4gICAgICAgIHNlbGVjdEltZ0xhYmVsRWwuYXBwZW5kQ2hpbGQodXBsb2FkSW1nRWwpO1xyXG4gICAgICAgIHBvc3RVcGxvYWRGb3JtRWwuYXBwZW5kQ2hpbGQocHJvZmlsZUltZ0VsKTtcclxuICAgICAgICBwb3N0VXBsb2FkRm9ybUVsLmFwcGVuZENoaWxkKHBvc3RUZXh0TGFiZWxFbCk7XHJcbiAgICAgICAgcG9zdFVwbG9hZEZvcm1FbC5hcHBlbmRDaGlsZChwb3N0VGV4dGFyZWFFbCk7XHJcbiAgICAgICAgcG9zdFVwbG9hZEZvcm1FbC5hcHBlbmRDaGlsZChzZWxlY3RJbWdMYWJlbEVsKTtcclxuICAgICAgICBwb3N0VXBsb2FkRm9ybUVsLmFwcGVuZENoaWxkKHVwbG9hZElucHV0RWwpO1xyXG4gICAgICAgIG1haW5FbC5hcHBlbmRDaGlsZChwb3N0VXBsb2FkRm9ybUVsKTtcclxuICAgICAgICBtYWluRWwuYXBwZW5kQ2hpbGQocG9zdEltZ0RpdkVsKTtcclxuICAgICAgICAvLyDtlITroZztlYQg7J2066+47KeAIOuwmOyYgSwg6rKM7Iuc66y8IOyXheuhnOuTnCDquLDriqUg6rWs7ZiEXHJcbiAgICAgICAgY2hlY2tQb3N0KHByb2ZpbGVJbWdFbCwgcG9zdEltZ0RpdkVsLCBwb3N0VGV4dGFyZWFFbCwgdXBsb2FkQnRuRWwpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyRWwpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbkVsKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBQb3N0VXBsb2FkUGFnZTtcclxuIiwiaW1wb3J0IHsgcHJvZHVjdElucHV0LCBvbkNoYW5nZVByb2R1Y3RJbWcsIGlucHV0TnVtYmVyRm9ybWF0LCBvblByb2R1Y3RTdmFlQnRuLCBvblRpbWVUb2dnbGUsIG9uVGltZVNlbGN0LCB9IGZyb20gJy4uL3NjcmlwdC9hZGRQcm9kdWN0JztcclxuaW1wb3J0IHsgYmFja0hpc3RvcnkgfSBmcm9tICcuLi91dGlscy9jb21tb24nO1xyXG5jbGFzcyBQcm9kdWN0UGFnZSB7XHJcbiAgICByZW5kZXIoY29udGVudCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QucmVtb3ZlKCdwcm9maWxlQmFja2dyb3VuZCcpO1xyXG4gICAgICAgIC8vIGhlYWRlclxyXG4gICAgICAgIGNvbnN0IGhlYWRlckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyQmFyQXJ0aWNsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xyXG4gICAgICAgIGNvbnN0IGJhY2tJbWdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGNvbnN0IHNhdmVCdG5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGhlYWRlckJhckFydGljbGVFbC5jbGFzc0xpc3QuYWRkKCdoZWFkZXJCYXInKTtcclxuICAgICAgICBoZWFkZXJCYXJBcnRpY2xlRWwuY2xhc3NMaXN0LmFkZCgnYWRkUHJvZHVjdEhlYWRlckJhcicpO1xyXG4gICAgICAgIGJhY2tJbWdFbC5jbGFzc0xpc3QuYWRkKCdoZWFkZXJCYXJCYWNrJyk7XHJcbiAgICAgICAgYmFja0ltZ0VsLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbkNsaWNrJyk7XHJcbiAgICAgICAgYmFja0ltZ0VsLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL2Fzc2V0L2ltYWdlcy9pY29ucy9pY29uX19hcnJvd0xlZnQuc3ZnJyk7XHJcbiAgICAgICAgYmFja0ltZ0VsLnNldEF0dHJpYnV0ZSgnYWx0JywgJ+uSpOuhnCDqsIDquLAnKTtcclxuICAgICAgICBiYWNrSW1nRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBiYWNrSGlzdG9yeSk7XHJcbiAgICAgICAgc2F2ZUJ0bkVsLmNsYXNzTGlzdC5hZGQoJ2hlYWRlckJhclNldHRpbmdCdG4nKTtcclxuICAgICAgICBzYXZlQnRuRWwuY2xhc3NMaXN0LmFkZCgnaGVhZGVyQmFyQnRuJyk7XHJcbiAgICAgICAgc2F2ZUJ0bkVsLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbkNsaWNrJyk7XHJcbiAgICAgICAgc2F2ZUJ0bkVsLmlkID0gJ2FkZFByb2R1Y3RTYXZlQnRuJztcclxuICAgICAgICBzYXZlQnRuRWwuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xyXG4gICAgICAgIHNhdmVCdG5FbC5pbm5lclRleHQgPSAn7KCA7J6lJztcclxuICAgICAgICBoZWFkZXJCYXJBcnRpY2xlRWwuYXBwZW5kQ2hpbGQoYmFja0ltZ0VsKTtcclxuICAgICAgICBoZWFkZXJCYXJBcnRpY2xlRWwuYXBwZW5kQ2hpbGQoc2F2ZUJ0bkVsKTtcclxuICAgICAgICBoZWFkZXJFbC5hcHBlbmRDaGlsZChoZWFkZXJCYXJBcnRpY2xlRWwpO1xyXG4gICAgICAgIC8vICBtYWluXHJcbiAgICAgICAgY29uc3QgbWFpbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgICAgIGNvbnN0IGFkZFByb2R1Y3RGb3JtRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICAgICAgbWFpbkVsLmNsYXNzTGlzdC5hZGQoJ2FkZFByb2R1Y3QnKTtcclxuICAgICAgICBhZGRQcm9kdWN0Rm9ybUVsLmNsYXNzTGlzdC5hZGQoJ2FkZFByb2R1Y3RGb3JtJyk7XHJcbiAgICAgICAgLy8gLy8g7J2066+47KeAIOuTseuhnVxyXG4gICAgICAgIGNvbnN0IGFkZEltZ0hlYWRpbmczRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIGNvbnN0IGFkZEltZ0xhYmVsRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZUltZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgY29uc3QgYWRkSW1nRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBjb25zdCBhZGRQcm9kdWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGFkZEltZ0hlYWRpbmczRWwuY2xhc3NMaXN0LmFkZCgnYWRkUHJvZHVjdEZvcm1MYWJlbCcpO1xyXG4gICAgICAgIGFkZEltZ0hlYWRpbmczRWwuaW5uZXJUZXh0ID0gJ+ydtOuvuOyngCDrk7HroZ0nO1xyXG4gICAgICAgIGFkZEltZ0xhYmVsRWwuY2xhc3NMaXN0LmFkZCgnYWRkUHJvZHVjdEZvcm1VcGxvZGVJbWcnKTtcclxuICAgICAgICBhZGRJbWdMYWJlbEVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2FkZFByb2R1Y3RJbWcnKTtcclxuICAgICAgICB1cGRhdGVJbWdFbC5jbGFzc0xpc3QuYWRkKCdhZGRQcm9kdWN0VXBsb2RlSW1nU2NyZWVuJyk7XHJcbiAgICAgICAgYWRkSW1nRWwuY2xhc3NMaXN0LmFkZCgnYWRkUHJvZHVjdFVwbG9kZUltZycpO1xyXG4gICAgICAgIGFkZEltZ0VsLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL2Fzc2V0L2ltYWdlcy9pY29ucy9pY29uX19pbWFnZXNVcGxvZGUuc3ZnJyk7XHJcbiAgICAgICAgYWRkSW1nRWwuc2V0QXR0cmlidXRlKCdhbHQnLCAn7J2066+47KeAIOuTseuhnScpO1xyXG4gICAgICAgIGFkZFByb2R1Y3RJbnB1dC5pZCA9ICdhZGRQcm9kdWN0SW1nJztcclxuICAgICAgICBhZGRQcm9kdWN0SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2ZpbGUnKTtcclxuICAgICAgICBhZGRQcm9kdWN0SW5wdXQuc2V0QXR0cmlidXRlKCdhY2NlcHQnLCAnaW1hZ2UvKicpO1xyXG4gICAgICAgIGFkZEltZ0xhYmVsRWwuYXBwZW5kQ2hpbGQodXBkYXRlSW1nRWwpO1xyXG4gICAgICAgIGFkZEltZ0xhYmVsRWwuYXBwZW5kQ2hpbGQoYWRkSW1nRWwpO1xyXG4gICAgICAgIGFkZFByb2R1Y3RGb3JtRWwuYXBwZW5kQ2hpbGQoYWRkSW1nSGVhZGluZzNFbCk7XHJcbiAgICAgICAgYWRkUHJvZHVjdEZvcm1FbC5hcHBlbmRDaGlsZChhZGRJbWdMYWJlbEVsKTtcclxuICAgICAgICBhZGRQcm9kdWN0Rm9ybUVsLmFwcGVuZENoaWxkKGFkZFByb2R1Y3RJbnB1dCk7XHJcbiAgICAgICAgLy8gLy8g7IOB7ZKI66qFIOuTseuhnVxyXG4gICAgICAgIGNvbnN0IGFkZFByb2R1Y3RMYWJlbEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBjb25zdCBwcm9kdWN0TmFtZUlucHV0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGFkZFByb2R1Y3RMYWJlbEVsLmNsYXNzTGlzdC5hZGQoJ2FkZFByb2R1Y3RGb3JtTGFiZWwnKTtcclxuICAgICAgICBhZGRQcm9kdWN0TGFiZWxFbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdhZGRQcm9kdWN0TmFtZScpO1xyXG4gICAgICAgIGFkZFByb2R1Y3RMYWJlbEVsLmlubmVyVGV4dCA9ICfsg4HtkojrqoUnO1xyXG4gICAgICAgIHByb2R1Y3ROYW1lSW5wdXRFbC5pZCA9ICdhZGRQcm9kdWN0TmFtZSc7XHJcbiAgICAgICAgcHJvZHVjdE5hbWVJbnB1dEVsLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICAgICAgcHJvZHVjdE5hbWVJbnB1dEVsLnJlcXVpcmVkID0gdHJ1ZTtcclxuICAgICAgICBwcm9kdWN0TmFtZUlucHV0RWwucGxhY2Vob2xkZXIgPSAnMn4xNeyekCDsnbTrgrTsl6zslbwg7ZWp64uI64ukLic7XHJcbiAgICAgICAgcHJvZHVjdE5hbWVJbnB1dEVsLm1pbkxlbmd0aCA9IDI7XHJcbiAgICAgICAgcHJvZHVjdE5hbWVJbnB1dEVsLm1heExlbmd0aCA9IDE1O1xyXG4gICAgICAgIGFkZFByb2R1Y3RGb3JtRWwuYXBwZW5kQ2hpbGQoYWRkUHJvZHVjdExhYmVsRWwpO1xyXG4gICAgICAgIGFkZFByb2R1Y3RGb3JtRWwuYXBwZW5kQ2hpbGQocHJvZHVjdE5hbWVJbnB1dEVsKTtcclxuICAgICAgICAvLyAvLyDqsIDqsqkg65Ox66GdXHJcbiAgICAgICAgY29uc3QgYWRkUHJpY2VMYWJlbEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBjb25zdCBhZGRQcmljZUlucHV0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGFkZFByaWNlTGFiZWxFbC5jbGFzc0xpc3QuYWRkKCdhZGRQcm9kdWN0Rm9ybUxhYmVsJyk7XHJcbiAgICAgICAgYWRkUHJpY2VMYWJlbEVsLnNldEF0dHJpYnV0ZSgnZm9ybScsICdhZGRQcm9kdWN0UHJpY2UnKTtcclxuICAgICAgICBhZGRQcmljZUxhYmVsRWwuaW5uZXJUZXh0ID0gJ+qwgOqyqSc7XHJcbiAgICAgICAgYWRkUHJpY2VJbnB1dEVsLmlkID0gJ2FkZFByb2R1Y3RQcmljZSc7XHJcbiAgICAgICAgYWRkUHJpY2VJbnB1dEVsLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICAgICAgYWRkUHJpY2VJbnB1dEVsLnJlcXVpcmVkID0gdHJ1ZTtcclxuICAgICAgICBhZGRQcmljZUlucHV0RWwucGxhY2Vob2xkZXIgPSAn7Iir7J6Q66eMIOyeheugpSDqsIDriqXtlanri4jri6QuJztcclxuICAgICAgICBhZGRQcmljZUlucHV0RWwubWF4TGVuZ3RoID0gMTI7XHJcbiAgICAgICAgYWRkUHJvZHVjdEZvcm1FbC5hcHBlbmRDaGlsZChhZGRQcmljZUxhYmVsRWwpO1xyXG4gICAgICAgIGFkZFByb2R1Y3RGb3JtRWwuYXBwZW5kQ2hpbGQoYWRkUHJpY2VJbnB1dEVsKTtcclxuICAgICAgICAvLyAvLyDsi5zqsIQg7ISg7YOdXHJcbiAgICAgICAgY29uc3QgdGltZVNlbGVjdERpdkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgdGltZVNlbGVjdEhlYWRpbmczRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIGNvbnN0IHRpbWVTZWxlY3RBcnRpY2xlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XHJcbiAgICAgICAgY29uc3QgaXJIZWFkaW5nMkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICBjb25zdCB0aW1lU2VsY3RCdG5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IHRpbWVVbEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICBjb25zdCB0aW1lTGlFbDEwTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgY29uc3QgdGltZUxpRWwzME0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGNvbnN0IHRpbWVMaUVsMUggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGNvbnN0IHRpbWVMaUVsMkggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGNvbnN0IHRpbWVMaUVsM0ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGNvbnN0IHRpbWVMaUVsU2hhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGNvbnN0IHRpbWVCdG4xME0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBjb25zdCB0aW1lQnRuMzBNID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgdGltZUJ0bjFIID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgdGltZUJ0bjJIID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgdGltZUJ0bjNIID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgdGltZUJ0blNoYXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgdGltZVNlbGVjdERpdkVsLmNsYXNzTGlzdC5hZGQoJ3RpbWVTZWxjdCcpO1xyXG4gICAgICAgIHRpbWVTZWxlY3RIZWFkaW5nM0VsLmNsYXNzTGlzdC5hZGQoJ2FkZFByb2R1Y3RGb3JtTGFiZWwnKTtcclxuICAgICAgICB0aW1lU2VsZWN0SGVhZGluZzNFbC5pbm5lclRleHQgPSAn7Iuc6rCEIOyEoO2DnSc7XHJcbiAgICAgICAgdGltZVNlbGVjdEFydGljbGVFbC5jbGFzc0xpc3QuYWRkKCdhZGRQcm9kdWN0VGltZVNlbGVjdCcpO1xyXG4gICAgICAgIGlySGVhZGluZzJFbC5jbGFzc0xpc3QuYWRkKCdpcicpO1xyXG4gICAgICAgIGlySGVhZGluZzJFbC5pbm5lclRleHQgPSAn7Iuc6rCE7J2EIOyEoO2Dne2VtOyjvOyEuOyalC4nO1xyXG4gICAgICAgIHRpbWVTZWxjdEJ0bkVsLmNsYXNzTGlzdC5hZGQoJ2FkZFByb2R1Y3RTZWxlY3RCdG4nKTtcclxuICAgICAgICB0aW1lU2VsY3RCdG5FbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcbiAgICAgICAgdGltZVVsRWwuY2xhc3NMaXN0LmFkZCgnYWRkUHJvZHVjdFRpbWVMaXN0Jyk7XHJcbiAgICAgICAgdGltZUJ0bjEwTS5pbm5lclRleHQgPSAnMTDrtoQg7J207ZWYJztcclxuICAgICAgICB0aW1lQnRuMzBNLmlubmVyVGV4dCA9ICczMOu2hCc7XHJcbiAgICAgICAgdGltZUJ0bjFILmlubmVyVGV4dCA9ICcx7Iuc6rCEJztcclxuICAgICAgICB0aW1lQnRuMkguaW5uZXJUZXh0ID0gJzLsi5zqsIQnO1xyXG4gICAgICAgIHRpbWVCdG4zSC5pbm5lclRleHQgPSAnM+yLnOqwhCc7XHJcbiAgICAgICAgdGltZUJ0blNoYXJlLmlubmVyVGV4dCA9ICfrgpjriJQnO1xyXG4gICAgICAgIHRpbWVCdG4xME0uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xyXG4gICAgICAgIHRpbWVCdG4xME0uY2xhc3NMaXN0LmFkZCgndGV4dEVsbGlwc2lzJyk7XHJcbiAgICAgICAgdGltZUJ0bjMwTS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcbiAgICAgICAgdGltZUJ0bjMwTS5jbGFzc0xpc3QuYWRkKCd0ZXh0RWxsaXBzaXMnKTtcclxuICAgICAgICB0aW1lQnRuMUguc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xyXG4gICAgICAgIHRpbWVCdG4xSC5jbGFzc0xpc3QuYWRkKCd0ZXh0RWxsaXBzaXMnKTtcclxuICAgICAgICB0aW1lQnRuMkguc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xyXG4gICAgICAgIHRpbWVCdG4ySC5jbGFzc0xpc3QuYWRkKCd0ZXh0RWxsaXBzaXMnKTtcclxuICAgICAgICB0aW1lQnRuM0guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xyXG4gICAgICAgIHRpbWVCdG4zSC5jbGFzc0xpc3QuYWRkKCd0ZXh0RWxsaXBzaXMnKTtcclxuICAgICAgICB0aW1lQnRuU2hhcmUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xyXG4gICAgICAgIHRpbWVCdG5TaGFyZS5jbGFzc0xpc3QuYWRkKCd0ZXh0RWxsaXBzaXMnKTtcclxuICAgICAgICB0aW1lTGlFbDEwTS5hcHBlbmRDaGlsZCh0aW1lQnRuMTBNKTtcclxuICAgICAgICB0aW1lTGlFbDMwTS5hcHBlbmRDaGlsZCh0aW1lQnRuMzBNKTtcclxuICAgICAgICB0aW1lTGlFbDFILmFwcGVuZENoaWxkKHRpbWVCdG4xSCk7XHJcbiAgICAgICAgdGltZUxpRWwySC5hcHBlbmRDaGlsZCh0aW1lQnRuMkgpO1xyXG4gICAgICAgIHRpbWVMaUVsM0guYXBwZW5kQ2hpbGQodGltZUJ0bjNIKTtcclxuICAgICAgICB0aW1lTGlFbFNoYXJlLmFwcGVuZENoaWxkKHRpbWVCdG5TaGFyZSk7XHJcbiAgICAgICAgdGltZVVsRWwuYXBwZW5kQ2hpbGQodGltZUxpRWwxME0pO1xyXG4gICAgICAgIHRpbWVVbEVsLmFwcGVuZENoaWxkKHRpbWVMaUVsMzBNKTtcclxuICAgICAgICB0aW1lVWxFbC5hcHBlbmRDaGlsZCh0aW1lTGlFbDFIKTtcclxuICAgICAgICB0aW1lVWxFbC5hcHBlbmRDaGlsZCh0aW1lTGlFbDJIKTtcclxuICAgICAgICB0aW1lVWxFbC5hcHBlbmRDaGlsZCh0aW1lTGlFbDNIKTtcclxuICAgICAgICB0aW1lVWxFbC5hcHBlbmRDaGlsZCh0aW1lTGlFbFNoYXJlKTtcclxuICAgICAgICB0aW1lU2VsZWN0QXJ0aWNsZUVsLmFwcGVuZENoaWxkKGlySGVhZGluZzJFbCk7XHJcbiAgICAgICAgdGltZVNlbGVjdEFydGljbGVFbC5hcHBlbmRDaGlsZCh0aW1lU2VsY3RCdG5FbCk7XHJcbiAgICAgICAgdGltZVNlbGVjdEFydGljbGVFbC5hcHBlbmRDaGlsZCh0aW1lVWxFbCk7XHJcbiAgICAgICAgdGltZVNlbGVjdERpdkVsLmFwcGVuZENoaWxkKHRpbWVTZWxlY3RIZWFkaW5nM0VsKTtcclxuICAgICAgICB0aW1lU2VsZWN0RGl2RWwuYXBwZW5kQ2hpbGQodGltZVNlbGVjdEFydGljbGVFbCk7XHJcbiAgICAgICAgYWRkUHJvZHVjdEZvcm1FbC5hcHBlbmRDaGlsZCh0aW1lU2VsZWN0RGl2RWwpO1xyXG4gICAgICAgIC8vIC8vIOuCtOyaqSDsnoXroKVcclxuICAgICAgICBjb25zdCBjb250ZW50TGFiZWxFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgY29uc3QgY29udGVudFRleHRhcmVhRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgICAgIGNvbnRlbnRMYWJlbEVsLmNsYXNzTGlzdC5hZGQoJ2FkZFByb2R1Y3RGb3JtTGFiZWwnKTtcclxuICAgICAgICBjb250ZW50TGFiZWxFbC5pbm5lclRleHQgPSAn64K07JqpJztcclxuICAgICAgICBjb250ZW50VGV4dGFyZWFFbC5jb2xzID0gMTA7XHJcbiAgICAgICAgY29udGVudFRleHRhcmVhRWwucm93cyA9IDEwO1xyXG4gICAgICAgIGNvbnRlbnRUZXh0YXJlYUVsLmlkID0gJ2FkZFByb2R1Y3RDb250ZW50JztcclxuICAgICAgICBjb250ZW50VGV4dGFyZWFFbC5yZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgICAgY29udGVudFRleHRhcmVhRWwucGxhY2Vob2xkZXIgPSAn64K07Jqp7J2EIOyeheugpe2VtCDso7zshLjsmpQuJztcclxuICAgICAgICBhZGRQcm9kdWN0Rm9ybUVsLmFwcGVuZENoaWxkKGNvbnRlbnRMYWJlbEVsKTtcclxuICAgICAgICBhZGRQcm9kdWN0Rm9ybUVsLmFwcGVuZENoaWxkKGNvbnRlbnRUZXh0YXJlYUVsKTtcclxuICAgICAgICBtYWluRWwuYXBwZW5kQ2hpbGQoYWRkUHJvZHVjdEZvcm1FbCk7XHJcbiAgICAgICAgLy8g7IOB7ZKIIOuTseuhnSDquLDriqVcclxuICAgICAgICBwcm9kdWN0TmFtZUlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RJbnB1dCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnRlbnRUZXh0YXJlYUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBwcm9kdWN0SW5wdXQoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBhZGRQcm9kdWN0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBvbkNoYW5nZVByb2R1Y3RJbWcoZXZlbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFkZFByaWNlSW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpID0+IHtcclxuICAgICAgICAgICAgaW5wdXROdW1iZXJGb3JtYXQoYWRkUHJpY2VJbnB1dEVsKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzYXZlQnRuRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG9uUHJvZHVjdFN2YWVCdG4oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aW1lU2VsY3RCdG5FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgb25UaW1lVG9nZ2xlKHRpbWVTZWxjdEJ0bkVsKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aW1lVWxFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgb25UaW1lU2VsY3QoZXZlbnQsIHRpbWVTZWxjdEJ0bkVsKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlckVsKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5FbCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFBhZ2U7XHJcbiIsImltcG9ydCB7IGluaXQgfSBmcm9tICcuLi9zY3JpcHQvcHJvZmlsZUZvbGxvdyc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXInO1xyXG5pbXBvcnQgeyBiYWNrSGlzdG9yeSB9IGZyb20gJy4uL3V0aWxzL2NvbW1vbic7XHJcbmNvbnN0IGZvb3RlciA9IG5ldyBGb290ZXIoKTtcclxuY2xhc3MgUHJvZmlsZUZvbGxvd1BhZ2Uge1xyXG4gICAgcmVuZGVyKGNvbnRlbnQpIHtcclxuICAgICAgICBjb25zdCBmb290ZXJFbCA9IGZvb3Rlci5yZW5kZXIoKTtcclxuICAgICAgICAvLyBoZWFkZXJcclxuICAgICAgICBjb25zdCBoZWFkZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlckJhckFydGljbGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcclxuICAgICAgICBjb25zdCBiYWNrSW1nRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBjb25zdCB0aXRsZVBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBoZWFkZXJCYXJBcnRpY2xlRWwuY2xhc3NMaXN0LmFkZCgnaGVhZGVyQmFyJyk7XHJcbiAgICAgICAgaGVhZGVyQmFyQXJ0aWNsZUVsLmNsYXNzTGlzdC5hZGQoJ2ZvbGxvd2VycycpO1xyXG4gICAgICAgIGJhY2tJbWdFbC5jbGFzc0xpc3QuYWRkKCdoZWFkZXJCYXJCYWNrJyk7XHJcbiAgICAgICAgYmFja0ltZ0VsLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbkNsaWNrJyk7XHJcbiAgICAgICAgYmFja0ltZ0VsLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL2Fzc2V0L2ltYWdlcy9pY29ucy9pY29uX19hcnJvd0xlZnQuc3ZnJyk7XHJcbiAgICAgICAgYmFja0ltZ0VsLnNldEF0dHJpYnV0ZSgnYWx0JywgJ+uSpOuhnCDqsIDquLAnKTtcclxuICAgICAgICBiYWNrSW1nRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBiYWNrSGlzdG9yeSk7XHJcbiAgICAgICAgdGl0bGVQRWwuY2xhc3NMaXN0LmFkZCgnZm9sbG93VGl0bGUnKTtcclxuICAgICAgICBoZWFkZXJCYXJBcnRpY2xlRWwuYXBwZW5kQ2hpbGQoYmFja0ltZ0VsKTtcclxuICAgICAgICBoZWFkZXJCYXJBcnRpY2xlRWwuYXBwZW5kQ2hpbGQodGl0bGVQRWwpO1xyXG4gICAgICAgIGhlYWRlckVsLmFwcGVuZENoaWxkKGhlYWRlckJhckFydGljbGVFbCk7XHJcbiAgICAgICAgLy8gbWFpblxyXG4gICAgICAgIGNvbnN0IG1haW5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICAgICAgICBjb25zdCB1c2VyU2VjdGlvbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJMaXN0VWxFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgdXNlckxpc3RVbEVsLmNsYXNzTGlzdC5hZGQoJ3VzZXJMaXN0Jyk7XHJcbiAgICAgICAgdXNlclNlY3Rpb25FbC5hcHBlbmRDaGlsZCh1c2VyTGlzdFVsRWwpO1xyXG4gICAgICAgIG1haW5FbC5hcHBlbmRDaGlsZCh1c2VyU2VjdGlvbkVsKTtcclxuICAgICAgICAvLyBmb2xsb3cg66as7Iqk7Yq4IOq1rO2YhFxyXG4gICAgICAgIGluaXQodXNlckxpc3RVbEVsKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlckVsKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5FbCk7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXJFbCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZUZvbGxvd1BhZ2U7XHJcbiIsImltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXInO1xyXG5pbXBvcnQgeyBnZXRQcm9maWxlSW5mbywgZ2V0UG9zdGluZ0xpc3QsIGFsYnVtVHlwZVBvc3QgfSBmcm9tICcuLi9zY3JpcHQvcHJvZmlsZSc7XHJcbmltcG9ydCB7IGxvZ291dE1vZGFsIH0gZnJvbSAnLi4vc2NyaXB0L21vZGFsJztcclxuaW1wb3J0IHsgYmFja0hpc3RvcnkgfSBmcm9tICcuLi91dGlscy9jb21tb24nO1xyXG5jbGFzcyBQcm9maWxlUGFnZSB7XHJcbiAgICByZW5kZXIoY29udGVudCkge1xyXG4gICAgICAgIGNvbnN0IGZvb3RlciA9IG5ldyBGb290ZXIoKTtcclxuICAgICAgICBjb25zdCBmb290ZXJFbCA9IGZvb3Rlci5yZW5kZXIoKTtcclxuICAgICAgICAvLyBib2R5XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ3Byb2ZpbGVCYWNrZ3JvdW5kJyk7XHJcbiAgICAgICAgLy8gaGVhZGVyXHJcbiAgICAgICAgY29uc3QgaGVhZGVyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgICAgICBjb25zdCBoZWFkaW5nMUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICBjb25zdCBoZWFkZXJBcnRpY2xlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XHJcbiAgICAgICAgY29uc3QgYmFja0ltZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgY29uc3QgbWVudUltZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgaGVhZGluZzFFbC5jbGFzc0xpc3QuYWRkKCdpcicpO1xyXG4gICAgICAgIGhlYWRpbmcxRWwuaW5uZXJUZXh0ID0gJ+2UhOuhnO2VhCc7XHJcbiAgICAgICAgaGVhZGVyQXJ0aWNsZUVsLmNsYXNzTGlzdC5hZGQoJ2hlYWRlckJhcicpO1xyXG4gICAgICAgIGhlYWRlckFydGljbGVFbC5jbGFzc0xpc3QuYWRkKCdwcm9maWxlJyk7XHJcbiAgICAgICAgYmFja0ltZ0VsLmNsYXNzTGlzdC5hZGQoJ2hlYWRlckJhckJhY2snKTtcclxuICAgICAgICBiYWNrSW1nRWwuY2xhc3NMaXN0LmFkZCgnYnV0dG9uQ2xpY2snKTtcclxuICAgICAgICBiYWNrSW1nRWwuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vYXNzZXQvaW1hZ2VzL2ljb25zL2ljb25fX2Fycm93TGVmdC5zdmcnKTtcclxuICAgICAgICBiYWNrSW1nRWwuc2V0QXR0cmlidXRlKCdhbHQnLCAn65Kk66GcIOqwgOq4sCcpO1xyXG4gICAgICAgIG1lbnVJbWdFbC5jbGFzc0xpc3QuYWRkKCdoZWFkZXJCYXJCdG4nKTtcclxuICAgICAgICBtZW51SW1nRWwuY2xhc3NMaXN0LmFkZCgnYnV0dG9uQ2xpY2snKTtcclxuICAgICAgICBtZW51SW1nRWwuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vYXNzZXQvaW1hZ2VzL2ljb25zL2ljb25fX21lbnUuc3ZnJyk7XHJcbiAgICAgICAgbWVudUltZ0VsLnNldEF0dHJpYnV0ZSgnYWx0JywgJ+uplOuJtCcpO1xyXG4gICAgICAgIGhlYWRlckFydGljbGVFbC5hcHBlbmRDaGlsZChiYWNrSW1nRWwpO1xyXG4gICAgICAgIGhlYWRlckFydGljbGVFbC5hcHBlbmRDaGlsZChtZW51SW1nRWwpO1xyXG4gICAgICAgIGhlYWRlckVsLmFwcGVuZENoaWxkKGhlYWRpbmcxRWwpO1xyXG4gICAgICAgIGhlYWRlckVsLmFwcGVuZENoaWxkKGhlYWRlckFydGljbGVFbCk7XHJcbiAgICAgICAgLy8gbWFpblxyXG4gICAgICAgIGNvbnN0IG1haW5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICAgICAgICBjb25zdCBpbnRyb1NlY3Rpb25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCBoZWFkaW5nMkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICBjb25zdCBmb2xsb3dTZWN0aW9uRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgZm9sbG93ZXJEaXZFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IG15UHJvZmlsZUltZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgY29uc3QgZm9sbG93aW5nRGl2RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBwcm9maWxlSW5mb1NlY3Rpb25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCB1c2VyTmFtZVN0cm9uZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3Ryb25nJyk7XHJcbiAgICAgICAgY29uc3QgdXNlcklkUEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbnN0IGludHJvZHVjdGlvblBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBjb25zdCBsaW5rU2VjdGlvbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IHNhbGVJdGVtc1NlY3Rpb25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCBzYWxlSXRlbURpdkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgcG9zdGluZ1NlY3Rpb25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCBhbGJ1bUJhckFydGljbGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcclxuICAgICAgICBjb25zdCBsaXN0VHlwZUltZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgY29uc3QgYWxidW1UeXBlSW1nRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBtYWluRWwuY2xhc3NMaXN0LmFkZCgnUHJvZmlsZUNvbnRlbnQnKTtcclxuICAgICAgICBpbnRyb1NlY3Rpb25FbC5jbGFzc0xpc3QuYWRkKCdpbnRyb2R1Y2UnKTtcclxuICAgICAgICBoZWFkaW5nMkVsLmNsYXNzTGlzdC5hZGQoJ2lyJyk7XHJcbiAgICAgICAgaGVhZGluZzJFbC5pbm5lclRleHQgPSAn7ZSE66Gc7ZWEIOyGjOqwnCc7XHJcbiAgICAgICAgZm9sbG93U2VjdGlvbkVsLmNsYXNzTGlzdC5hZGQoJ215Rm9sbG93Jyk7XHJcbiAgICAgICAgZm9sbG93U2VjdGlvbkVsLmNsYXNzTGlzdC5hZGQoJ215UHJvZmlsZUltZycpO1xyXG4gICAgICAgIGZvbGxvd2VyRGl2RWwuY2xhc3NMaXN0LmFkZCgnZm9sbG93ZXJzJyk7XHJcbiAgICAgICAgbXlQcm9maWxlSW1nRWwuY2xhc3NMaXN0LmFkZCgnbXlJbWFnZScpO1xyXG4gICAgICAgIG15UHJvZmlsZUltZ0VsLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL2Fzc2V0L2ltYWdlcy9iYXNpYy1wcm9maWxlLnN2ZycpO1xyXG4gICAgICAgIG15UHJvZmlsZUltZ0VsLnNldEF0dHJpYnV0ZSgnYWx0JywgJ+uCtCDtlITroZztlYQg7J2066+47KeAJyk7XHJcbiAgICAgICAgZm9sbG93aW5nRGl2RWwuY2xhc3NMaXN0LmFkZCgnZm9sbG93aW5ncycpO1xyXG4gICAgICAgIHByb2ZpbGVJbmZvU2VjdGlvbkVsLmNsYXNzTGlzdC5hZGQoJ3Byb2ZpbGVJbmZvJyk7XHJcbiAgICAgICAgdXNlck5hbWVTdHJvbmdFbC5jbGFzc0xpc3QuYWRkKCd1c2VyTmFtZScpO1xyXG4gICAgICAgIHVzZXJJZFBFbC5jbGFzc0xpc3QuYWRkKCd1c2VySWQnKTtcclxuICAgICAgICBpbnRyb2R1Y3Rpb25QRWwuY2xhc3NMaXN0LmFkZCgnaW50cm9kdWN0aW9uJyk7XHJcbiAgICAgICAgbGlua1NlY3Rpb25FbC5jbGFzc0xpc3QuYWRkKCdsaW5rJyk7XHJcbiAgICAgICAgc2FsZUl0ZW1zU2VjdGlvbkVsLmNsYXNzTGlzdC5hZGQoJ3NhbGVJdGVtcycpO1xyXG4gICAgICAgIHNhbGVJdGVtRGl2RWwuY2xhc3NMaXN0LmFkZCgnc2FsZUl0ZW1Db250YWluZXInKTtcclxuICAgICAgICBwb3N0aW5nU2VjdGlvbkVsLmNsYXNzTGlzdC5hZGQoJ3Bvc3RpbmdTdW1tYXJ5Jyk7XHJcbiAgICAgICAgYWxidW1CYXJBcnRpY2xlRWwuY2xhc3NMaXN0LmFkZCgnYWxidW1CYXInKTtcclxuICAgICAgICBsaXN0VHlwZUltZ0VsLmNsYXNzTGlzdC5hZGQoJ3Bvc3RpbmdUeXBlJyk7XHJcbiAgICAgICAgbGlzdFR5cGVJbWdFbC5jbGFzc0xpc3QuYWRkKCdsaXN0Jyk7XHJcbiAgICAgICAgbGlzdFR5cGVJbWdFbC5jbGFzc0xpc3QuYWRkKCdidXR0b25DbGljaycpO1xyXG4gICAgICAgIGxpc3RUeXBlSW1nRWwuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vYXNzZXQvaW1hZ2VzL2ljb25zL2ljb25fX3Bvc3RMaXN0LnN2ZycpO1xyXG4gICAgICAgIGxpc3RUeXBlSW1nRWwuc2V0QXR0cmlidXRlKCdhbHQnLCAn66as7Iqk7Yq47ZiV7Jy866GcIOuztOq4sCcpO1xyXG4gICAgICAgIGFsYnVtVHlwZUltZ0VsLmNsYXNzTGlzdC5hZGQoJ3Bvc3RpbmdUeXBlJyk7XHJcbiAgICAgICAgYWxidW1UeXBlSW1nRWwuY2xhc3NMaXN0LmFkZCgnYWxidW0nKTtcclxuICAgICAgICBhbGJ1bVR5cGVJbWdFbC5jbGFzc0xpc3QuYWRkKCdidXR0b25DbGljaycpO1xyXG4gICAgICAgIGFsYnVtVHlwZUltZ0VsLmNsYXNzTGlzdC5hZGQoJ3Vuc2VsZWN0ZWQnKTtcclxuICAgICAgICBhbGJ1bVR5cGVJbWdFbC5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9hc3NldC9pbWFnZXMvaWNvbnMvaWNvbl9fcG9zdEFsYnVtLnN2ZycpO1xyXG4gICAgICAgIGFsYnVtVHlwZUltZ0VsLnNldEF0dHJpYnV0ZSgnYWx0JywgJ+yVqOuylO2YleycvOuhnCDrs7TquLAnKTtcclxuICAgICAgICAvLyDrkqTroZwg6rCA6riwXHJcbiAgICAgICAgYmFja0ltZ0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYmFja0hpc3RvcnkpO1xyXG4gICAgICAgIHNhbGVJdGVtc1NlY3Rpb25FbC5hcHBlbmRDaGlsZChzYWxlSXRlbURpdkVsKTtcclxuICAgICAgICBwcm9maWxlSW5mb1NlY3Rpb25FbC5hcHBlbmRDaGlsZCh1c2VyTmFtZVN0cm9uZ0VsKTtcclxuICAgICAgICBwcm9maWxlSW5mb1NlY3Rpb25FbC5hcHBlbmRDaGlsZCh1c2VySWRQRWwpO1xyXG4gICAgICAgIHByb2ZpbGVJbmZvU2VjdGlvbkVsLmFwcGVuZENoaWxkKGludHJvZHVjdGlvblBFbCk7XHJcbiAgICAgICAgZm9sbG93U2VjdGlvbkVsLmFwcGVuZENoaWxkKGZvbGxvd2VyRGl2RWwpO1xyXG4gICAgICAgIGZvbGxvd1NlY3Rpb25FbC5hcHBlbmRDaGlsZChteVByb2ZpbGVJbWdFbCk7XHJcbiAgICAgICAgZm9sbG93U2VjdGlvbkVsLmFwcGVuZENoaWxkKGZvbGxvd2luZ0RpdkVsKTtcclxuICAgICAgICBpbnRyb1NlY3Rpb25FbC5hcHBlbmRDaGlsZChoZWFkaW5nMkVsKTtcclxuICAgICAgICBpbnRyb1NlY3Rpb25FbC5hcHBlbmRDaGlsZChmb2xsb3dTZWN0aW9uRWwpO1xyXG4gICAgICAgIGludHJvU2VjdGlvbkVsLmFwcGVuZENoaWxkKHByb2ZpbGVJbmZvU2VjdGlvbkVsKTtcclxuICAgICAgICBpbnRyb1NlY3Rpb25FbC5hcHBlbmRDaGlsZChsaW5rU2VjdGlvbkVsKTtcclxuICAgICAgICBhbGJ1bUJhckFydGljbGVFbC5hcHBlbmRDaGlsZChsaXN0VHlwZUltZ0VsKTtcclxuICAgICAgICBhbGJ1bUJhckFydGljbGVFbC5hcHBlbmRDaGlsZChhbGJ1bVR5cGVJbWdFbCk7XHJcbiAgICAgICAgcG9zdGluZ1NlY3Rpb25FbC5hcHBlbmRDaGlsZChhbGJ1bUJhckFydGljbGVFbCk7XHJcbiAgICAgICAgbWFpbkVsLmFwcGVuZENoaWxkKGludHJvU2VjdGlvbkVsKTtcclxuICAgICAgICBtYWluRWwuYXBwZW5kQ2hpbGQoc2FsZUl0ZW1zU2VjdGlvbkVsKTtcclxuICAgICAgICBtYWluRWwuYXBwZW5kQ2hpbGQocG9zdGluZ1NlY3Rpb25FbCk7XHJcbiAgICAgICAgLy8g7YyU66Gc7JuMLCDtjJTroZzsnokg7Y6Y7J207KeAIOydtOuPmVxyXG4gICAgICAgIGZvbGxvd2VyRGl2RWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja2VkRm9sbG93TGluayk7XHJcbiAgICAgICAgZm9sbG93aW5nRGl2RWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja2VkRm9sbG93TGluayk7XHJcbiAgICAgICAgZnVuY3Rpb24gY2xpY2tlZEZvbGxvd0xpbmsoZXZlbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvZmlsZVVzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZUluZm8gLnVzZXJJZCcpO1xyXG4gICAgICAgICAgICBjb25zdCB1c2VySWQgPSBwcm9maWxlVXNlci5pbm5lclRleHQucmVwbGFjZSgvIC9nLCAnJyk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gYCNwcm9maWxlRm9sbG93P2FjY291bnRuYW1lPSR7dXNlcklkfSZ0aXRsZT0ke2V2ZW50LnRhcmdldC5jbGFzc05hbWV9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g7ZSE66Gc7ZWEIOygleuztCDqsIDsoLjsmKTquLBcclxuICAgICAgICBnZXRQcm9maWxlSW5mbygpO1xyXG4gICAgICAgIGdldFBvc3RpbmdMaXN0KCk7XHJcbiAgICAgICAgLy8g66qp66Gd7ZiVLCDslajrspTtmJXsnLzroZwg7Y+s7Iqk7YyFIOq1rO2YhFxyXG4gICAgICAgIGFsYnVtQmFyQXJ0aWNsZUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RUeXBlID0gZXZlbnQudGFyZ2V0LmNsYXNzTmFtZS5zcGxpdCgnICcpWzFdO1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0VHlwZSA9PT0gJ2xpc3QnKSB7XHJcbiAgICAgICAgICAgICAgICBnZXRQb3N0aW5nTGlzdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHNlbGVjdFR5cGUgPT09ICdhbGJ1bScpIHtcclxuICAgICAgICAgICAgICAgIGFsYnVtVHlwZVBvc3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIOyCrOyaqeyekCDroZzqt7jslYTsm4Mg66qo64usXHJcbiAgICAgICAgbWVudUltZ0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsb2dvdXRNb2RhbCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyRWwpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbkVsKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3RlckVsKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlUGFnZTtcclxuIiwiaW1wb3J0IHsgcHJldmlld0ltZywgY2hlY2tJbnB1dCwgaXNWYWxpZElkIH0gZnJvbSAnLi4vc2NyaXB0L3JlZ2lzdGVyUHJvZmlsZSc7XHJcbmNsYXNzIFByb2ZpbGVSZWdpc3RlciB7XHJcbiAgICByZW5kZXIoY29udGVudCkge1xyXG4gICAgICAgIGNvbnN0IHdyYXBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIC8vaGVhZGVyXHJcbiAgICAgICAgY29uc3QgaGVhZGVyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgICAgICBjb25zdCBoZWFkaW5nMUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICBjb25zdCBpbmZvUEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHdyYXBFbC5jbGFzc0xpc3QuYWRkKCd3cmFwJyk7XHJcbiAgICAgICAgd3JhcEVsLmNsYXNzTGlzdC5hZGQoJ3JlZ2lzdGVyV3JhcCcpO1xyXG4gICAgICAgIGhlYWRpbmcxRWwuY2xhc3NMaXN0LmFkZCgncmVnaXN0ZXJIZWFkZXInKTtcclxuICAgICAgICBpbmZvUEVsLmNsYXNzTGlzdC5hZGQoJ3JlZ2lzdGVySW5mbycpO1xyXG4gICAgICAgIGhlYWRlckVsLmFwcGVuZENoaWxkKGhlYWRpbmcxRWwpO1xyXG4gICAgICAgIGhlYWRlckVsLmFwcGVuZENoaWxkKGluZm9QRWwpO1xyXG4gICAgICAgIHdyYXBFbC5hcHBlbmRDaGlsZChoZWFkZXJFbCk7XHJcbiAgICAgICAgLy9tYWluXHJcbiAgICAgICAgY29uc3QgbWFpbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgICAgIGNvbnN0IHByb2ZpbGVGb3JtRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICAgICAgY29uc3QgcHJvZmlsZUltZ0xhYmVsRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGNvbnN0IHByb2ZpbGVJbWdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGNvbnN0IHVwbG9hZEltZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgY29uc3QgaW1nSW5wdXRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgY29uc3QgdXNlck5hbWVMYWJlbEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBjb25zdCB1c2VyTmFtZUlucHV0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJJZExhYmVsRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJJZElucHV0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJJbnRyb0xhYmVsRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJJbnRyb0lucHV0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGNvbnN0IHJlZ2lzdGVyQWxlcnRQRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgY29uc3QgcHJvZmlsZUZvcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBwcm9maWxlRm9ybUVsLmNsYXNzTGlzdC5hZGQoJ2xvZ0luRm9ybScpO1xyXG4gICAgICAgIHByb2ZpbGVGb3JtRWwuY2xhc3NMaXN0LmFkZCgncmVnaXN0ZXJGb3JtJyk7XHJcbiAgICAgICAgcHJvZmlsZUZvcm1FbC5jbGFzc0xpc3QuYWRkKCdwcm9maWxlRm9ybScpO1xyXG4gICAgICAgIHByb2ZpbGVJbWdMYWJlbEVsLmNsYXNzTGlzdC5hZGQoJ3Byb2ZpbGVJbWdCdG4nKTtcclxuICAgICAgICBwcm9maWxlSW1nTGFiZWxFbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcm9maWxlSW1nJyk7XHJcbiAgICAgICAgcHJvZmlsZUltZ0VsLmNsYXNzTGlzdC5hZGQoJ3VwbG9hZFByb2ZpbGVJbWcnKTtcclxuICAgICAgICBwcm9maWxlSW1nRWwuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vYXNzZXQvaW1hZ2VzL2Jhc2ljLXByb2ZpbGUuc3ZnJyk7XHJcbiAgICAgICAgcHJvZmlsZUltZ0VsLnNldEF0dHJpYnV0ZSgnYWx0JywgJ+yCrOyaqeyekCDtlITroZztlYQg7J2066+47KeAJyk7XHJcbiAgICAgICAgdXBsb2FkSW1nRWwuY2xhc3NMaXN0LmFkZCgndXBsb2FkUHJvZmlsZUltZ0ljb24nKTtcclxuICAgICAgICB1cGxvYWRJbWdFbC5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9hc3NldC9pbWFnZXMvaWNvbnMvaWNvbl9faW1hZ2VzVXBsb2RlRmlsbC5zdmcnKTtcclxuICAgICAgICB1cGxvYWRJbWdFbC5zZXRBdHRyaWJ1dGUoJ2FsdCcsICfsnbTrr7jsp4Ag7JeF66Gc65OcJyk7XHJcbiAgICAgICAgaW1nSW5wdXRFbC5pZCA9ICdwcm9maWxlSW1nJztcclxuICAgICAgICBpbWdJbnB1dEVsLmNsYXNzTGlzdC5hZGQoJ2lyJyk7XHJcbiAgICAgICAgaW1nSW5wdXRFbC5uYW1lID0gJ3Byb2ZpbGVJbWcnO1xyXG4gICAgICAgIGltZ0lucHV0RWwuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2ZpbGUnKTtcclxuICAgICAgICBpbWdJbnB1dEVsLnNldEF0dHJpYnV0ZSgnYWNjZXB0JywgJ2ltYWdlLyonKTtcclxuICAgICAgICB1c2VyTmFtZUxhYmVsRWwuY2xhc3NMaXN0LmFkZCgncmVnaXN0ZXJGb3JtTGFiZWwnKTtcclxuICAgICAgICB1c2VyTmFtZUxhYmVsRWwuc2V0QXR0cmlidXRlKCdmb3InLCAndXNlcm5hbWUnKTtcclxuICAgICAgICB1c2VyTmFtZUxhYmVsRWwuaW5uZXJUZXh0ID0gJ+yCrOyaqeyekCDsnbTrpoQnO1xyXG4gICAgICAgIHVzZXJOYW1lSW5wdXRFbC5pZCA9ICd1c2VybmFtZSc7XHJcbiAgICAgICAgdXNlck5hbWVJbnB1dEVsLm5hbWUgPSAndXNlcm5hbWUnO1xyXG4gICAgICAgIHVzZXJOYW1lSW5wdXRFbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgICAgIHVzZXJOYW1lSW5wdXRFbC5zZXRBdHRyaWJ1dGUoJ21pbmxlbmd0aCcsICcyJyk7XHJcbiAgICAgICAgdXNlck5hbWVJbnB1dEVsLnNldEF0dHJpYnV0ZSgnbWF4TGVuZ3RoJywgJzEwJyk7XHJcbiAgICAgICAgdXNlck5hbWVJbnB1dEVsLnJlcXVpcmVkID0gdHJ1ZTtcclxuICAgICAgICB1c2VyTmFtZUlucHV0RWwuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICcyfjEw7J6QIOydtOuCtOyXrOyVvCDtlanri4jri6QuJyk7XHJcbiAgICAgICAgdXNlcklkTGFiZWxFbC5jbGFzc0xpc3QuYWRkKCdyZWdpc3RlckZvcm1MYWJlbCcpO1xyXG4gICAgICAgIHVzZXJJZExhYmVsRWwuc2V0QXR0cmlidXRlKCdmb3InLCAnaWQnKTtcclxuICAgICAgICB1c2VySWRMYWJlbEVsLmlubmVyVGV4dCA9ICfqs4TsoJUgSUQnO1xyXG4gICAgICAgIHVzZXJJZElucHV0RWwuaWQgPSAnaWQnO1xyXG4gICAgICAgIHVzZXJJZElucHV0RWwubmFtZSA9ICdpZCc7XHJcbiAgICAgICAgdXNlcklkSW5wdXRFbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgICAgIHVzZXJJZElucHV0RWwuc2V0QXR0cmlidXRlKCdtaW5sZW5ndGgnLCAnMicpO1xyXG4gICAgICAgIHVzZXJJZElucHV0RWwuc2V0QXR0cmlidXRlKCdtYXhMZW5ndGgnLCAnMTAnKTtcclxuICAgICAgICB1c2VySWRJbnB1dEVsLnJlcXVpcmVkID0gdHJ1ZTtcclxuICAgICAgICB1c2VySWRJbnB1dEVsLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAn7JiB66y4LCDsiKvsnpAsIO2KueyImOusuOyekCguKSwoXynrp4wg7IKs7JqpIOqwgOuKpe2VqeuLiOuLpC4nKTtcclxuICAgICAgICByZWdpc3RlckFsZXJ0UEVsLmNsYXNzTGlzdC5hZGQoJ3JlZ2lzdGVyRm9ybUFsZXJ0Jyk7XHJcbiAgICAgICAgcmVnaXN0ZXJBbGVydFBFbC5jbGFzc0xpc3QuYWRkKCdpcicpO1xyXG4gICAgICAgIHJlZ2lzdGVyQWxlcnRQRWwuaW5uZXJUZXh0ID0gJ+yYgeusuCwg7Iir7J6QLCDtirnsiJjrrLjsnpAoLiksKF8p66eMIOyCrOyaqSDqsIDriqXtlanri4jri6QuJztcclxuICAgICAgICB1c2VySW50cm9MYWJlbEVsLmNsYXNzTGlzdC5hZGQoJ3JlZ2lzdGVyRm9ybUxhYmVsJyk7XHJcbiAgICAgICAgdXNlckludHJvTGFiZWxFbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdpbnRybycpO1xyXG4gICAgICAgIHVzZXJJbnRyb0xhYmVsRWwuaW5uZXJUZXh0ID0gJ+yGjOqwnCc7XHJcbiAgICAgICAgdXNlckludHJvSW5wdXRFbC5pZCA9ICdpbnRybyc7XHJcbiAgICAgICAgdXNlckludHJvSW5wdXRFbC5uYW1lID0gJ2ludHJvJztcclxuICAgICAgICB1c2VySW50cm9JbnB1dEVsLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICAgICAgdXNlckludHJvSW5wdXRFbC5zZXRBdHRyaWJ1dGUoJ21pbmxlbmd0aCcsICcyJyk7XHJcbiAgICAgICAgdXNlckludHJvSW5wdXRFbC5zZXRBdHRyaWJ1dGUoJ21heExlbmd0aCcsICc1MCcpO1xyXG4gICAgICAgIHVzZXJJbnRyb0lucHV0RWwucmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgIHVzZXJJbnRyb0lucHV0RWwuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICfsnpDsi6Dqs7wg7YyQ66ek7ZWgIOyDge2SiOyXkCDrjIDtlZwg7IaM6rCc7ZW0IOyjvOyEuOyalCEnKTtcclxuICAgICAgICBwcm9maWxlRm9ybUJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcclxuICAgICAgICBwcm9maWxlRm9ybUJ0bi5jbGFzc0xpc3QuYWRkKCdyZWdpc3RlckZvcm1CdG4nKTtcclxuICAgICAgICBwcm9maWxlRm9ybUJ0bi5jbGFzc0xpc3QuYWRkKCdwcm9maWxlRm9ybUJ0bicpO1xyXG4gICAgICAgIHByb2ZpbGVGb3JtQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcclxuICAgICAgICBwcm9maWxlRm9ybUJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgcHJvZmlsZUZvcm1CdG4uaW5uZXJUZXh0ID0gXCI2MCcnIOuniOy8kyDsi5zsnpHtlZjquLBcIjtcclxuICAgICAgICBwcm9maWxlSW1nTGFiZWxFbC5hcHBlbmRDaGlsZChwcm9maWxlSW1nRWwpO1xyXG4gICAgICAgIHByb2ZpbGVJbWdMYWJlbEVsLmFwcGVuZENoaWxkKHVwbG9hZEltZ0VsKTtcclxuICAgICAgICBwcm9maWxlRm9ybUVsLmFwcGVuZENoaWxkKHByb2ZpbGVJbWdMYWJlbEVsKTtcclxuICAgICAgICBwcm9maWxlRm9ybUVsLmFwcGVuZENoaWxkKGltZ0lucHV0RWwpO1xyXG4gICAgICAgIHByb2ZpbGVGb3JtRWwuYXBwZW5kQ2hpbGQodXNlck5hbWVMYWJlbEVsKTtcclxuICAgICAgICBwcm9maWxlRm9ybUVsLmFwcGVuZENoaWxkKHVzZXJOYW1lSW5wdXRFbCk7XHJcbiAgICAgICAgcHJvZmlsZUZvcm1FbC5hcHBlbmRDaGlsZCh1c2VySWRMYWJlbEVsKTtcclxuICAgICAgICBwcm9maWxlRm9ybUVsLmFwcGVuZENoaWxkKHVzZXJJZElucHV0RWwpO1xyXG4gICAgICAgIHByb2ZpbGVGb3JtRWwuYXBwZW5kQ2hpbGQocmVnaXN0ZXJBbGVydFBFbCk7XHJcbiAgICAgICAgcHJvZmlsZUZvcm1FbC5hcHBlbmRDaGlsZCh1c2VySW50cm9MYWJlbEVsKTtcclxuICAgICAgICBwcm9maWxlRm9ybUVsLmFwcGVuZENoaWxkKHVzZXJJbnRyb0lucHV0RWwpO1xyXG4gICAgICAgIHByb2ZpbGVGb3JtRWwuYXBwZW5kQ2hpbGQocHJvZmlsZUZvcm1CdG4pO1xyXG4gICAgICAgIG1haW5FbC5hcHBlbmRDaGlsZChwcm9maWxlRm9ybUVsKTtcclxuICAgICAgICB3cmFwRWwuYXBwZW5kQ2hpbGQobWFpbkVsKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHdyYXBFbCk7XHJcbiAgICAgICAgLy8g7ZSE66Gc7ZWEIOydtOuvuOyngCDsl4XroZzrk5xcclxuICAgICAgICBpbWdJbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHByZXZpZXdJbWcoZXZlbnQsIHByb2ZpbGVJbWdFbCkpO1xyXG4gICAgICAgIC8vIO2PvCDsnoXroKVcclxuICAgICAgICBwcm9maWxlRm9ybUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4gY2hlY2tJbnB1dCh1c2VySWRJbnB1dEVsKSk7XHJcbiAgICAgICAgLy8gNjAnJyDrp4jsvJMg7Iuc7J6R7ZWY6riwIOuyhO2KvCDtgbTrpq1cclxuICAgICAgICBwcm9maWxlRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGlzVmFsaWRJZCh1c2VySWRJbnB1dEVsKSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZVJlZ2lzdGVyO1xyXG4iLCJpbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyJztcclxuaW1wb3J0IFNlYXJjaCBmcm9tICcuLi9zY3JpcHQvc2VhcmNoJztcclxuaW1wb3J0IHsgYmFja0hpc3RvcnksIGRlYm91bmNlIH0gZnJvbSAnLi4vdXRpbHMvY29tbW9uJztcclxuY2xhc3MgU2VhcmNoUGFnZSB7XHJcbiAgICByZW5kZXIoY29udGVudCkge1xyXG4gICAgICAgIGNvbnN0IGZvb3RlciA9IG5ldyBGb290ZXIoKTtcclxuICAgICAgICBjb25zdCBmb290ZXJFbCA9IGZvb3Rlci5yZW5kZXIoKTtcclxuICAgICAgICAvLyBoZWFkZXJcclxuICAgICAgICBjb25zdCBoZWFkZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgICAgIGNvbnN0IGFydGljbGVIZWFkZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcclxuICAgICAgICBjb25zdCBiYWNrSW1hZ2VFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGNvbnN0IGlucHV0U2VhcmNoRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGFydGljbGVIZWFkZXJFbC5jbGFzc0xpc3QuYWRkKCdoZWFkZXJCYXInKTtcclxuICAgICAgICBhcnRpY2xlSGVhZGVyRWwuY2xhc3NMaXN0LmFkZCgnYnV0dG9uQ2xpY2snKTtcclxuICAgICAgICBiYWNrSW1hZ2VFbC5jbGFzc0xpc3QuYWRkKCdoZWFkZXJCYXJCYWNrJyk7XHJcbiAgICAgICAgYmFja0ltYWdlRWwuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vYXNzZXQvaW1hZ2VzL2ljb25zL2ljb25fX2Fycm93TGVmdC5zdmcnKTtcclxuICAgICAgICBiYWNrSW1hZ2VFbC5zZXRBdHRyaWJ1dGUoJ2FsdCcsICfrkqTroZwg6rCA6riwJyk7XHJcbiAgICAgICAgYmFja0ltYWdlRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBiYWNrSGlzdG9yeSk7XHJcbiAgICAgICAgaW5wdXRTZWFyY2hFbC5jbGFzc0xpc3QuYWRkKCdoZWFkZXJCYXJTZWFyY2gnKTtcclxuICAgICAgICBpbnB1dFNlYXJjaEVsLmNsYXNzTGlzdC5hZGQoJ2hlYWRlckJhcklucHV0Jyk7XHJcbiAgICAgICAgaW5wdXRTZWFyY2hFbC5jbGFzc0xpc3QuYWRkKCdidXR0b25DbGljaycpO1xyXG4gICAgICAgIGlucHV0U2VhcmNoRWwuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICAgICAgICBpbnB1dFNlYXJjaEVsLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAn6rOE7KCVIOqygOyDiScpO1xyXG4gICAgICAgIGlucHV0U2VhcmNoRWwubWF4TGVuZ3RoID0gOTtcclxuICAgICAgICBpbnB1dFNlYXJjaEVsLmF1dG9mb2N1cyA9IHRydWU7XHJcbiAgICAgICAgYXJ0aWNsZUhlYWRlckVsLmFwcGVuZENoaWxkKGJhY2tJbWFnZUVsKTtcclxuICAgICAgICBhcnRpY2xlSGVhZGVyRWwuYXBwZW5kQ2hpbGQoaW5wdXRTZWFyY2hFbCk7XHJcbiAgICAgICAgaGVhZGVyRWwuYXBwZW5kQ2hpbGQoYXJ0aWNsZUhlYWRlckVsKTtcclxuICAgICAgICAvLyBtYWluXHJcbiAgICAgICAgY29uc3QgbWFpbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRpbmcyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIGNvbnN0IHNlY3Rpb25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCB1bE1haW5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgaGVhZGluZzJFbC5jbGFzc0xpc3QuYWRkKCdpcicpO1xyXG4gICAgICAgIGhlYWRpbmcyRWwuaW5uZXJUZXh0ID0gJ+ycoOyggCDqsoDsg4kg7Y6Y7J207KeAJztcclxuICAgICAgICB1bE1haW5FbC5jbGFzc0xpc3QuYWRkKCd1c2VyTGlzdCcpO1xyXG4gICAgICAgIHNlY3Rpb25FbC5hcHBlbmRDaGlsZCh1bE1haW5FbCk7XHJcbiAgICAgICAgbWFpbkVsLmFwcGVuZENoaWxkKGhlYWRpbmcyRWwpO1xyXG4gICAgICAgIG1haW5FbC5hcHBlbmRDaGlsZChzZWN0aW9uRWwpO1xyXG4gICAgICAgIC8vIHVzZXIg6rKA7IOJIOq4sOuKpVxyXG4gICAgICAgIGlucHV0U2VhcmNoRWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBkZWJvdW5jZShTZWFyY2gpKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlckVsKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5FbCk7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXJFbCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUGFnZTtcclxuIiwiaW1wb3J0IHsgY2hlY2tJbnB1dCwgaXNWYWxpZEVtYWlsIH0gZnJvbSAnLi4vc2NyaXB0L3NpZ25VcCc7XHJcbmNsYXNzIFNpZ25VcFBhZ2Uge1xyXG4gICAgcmVuZGVyKGNvbnRlbnQpIHtcclxuICAgICAgICAvLyBoZWFkZXJcclxuICAgICAgICBjb25zdCB3cmFwRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBoZWFkZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRpbmcxRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICAgIHdyYXBFbC5jbGFzc0xpc3QuYWRkKCd3cmFwJyk7XHJcbiAgICAgICAgd3JhcEVsLmNsYXNzTGlzdC5hZGQoJ3JlZ2lzdGVyV3JhcCcpO1xyXG4gICAgICAgIGhlYWRpbmcxRWwuY2xhc3NMaXN0LmFkZCgncmVnaXN0ZXJIZWFkZXInKTtcclxuICAgICAgICBoZWFkaW5nMUVsLmlubmVyVGV4dCA9ICfsnbTrqZTsnbzroZwg7ZqM7JuQ6rCA7J6FJztcclxuICAgICAgICBoZWFkZXJFbC5hcHBlbmRDaGlsZChoZWFkaW5nMUVsKTtcclxuICAgICAgICB3cmFwRWwuYXBwZW5kQ2hpbGQoaGVhZGVyRWwpO1xyXG4gICAgICAgIC8vIG1haW5cclxuICAgICAgICBjb25zdCBtYWluRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICAgICAgY29uc3QgZm9ybUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgICAgIGNvbnN0IGVtYWlsTGFiZWxFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgY29uc3QgZW1haWxJbnB1dEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBjb25zdCBwYXNzd29yZExhYmVsRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkSW5wdXRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgY29uc3QgZW1haWxBbGVydFBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBjb25zdCBwYXNzd29yZEFsZXJ0UEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbnN0IGxvZ2luQnV0dG9uRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBmb3JtRWwuY2xhc3NMaXN0LmFkZCgnbG9nSW5Gb3JtJyk7XHJcbiAgICAgICAgZm9ybUVsLmNsYXNzTGlzdC5hZGQoJ3JlZ2lzdGVyRm9ybScpO1xyXG4gICAgICAgIGZvcm1FbC5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICcnKTtcclxuICAgICAgICBmb3JtRWwuc2V0QXR0cmlidXRlKCdtZXRob2QnLCAnZ2V0Jyk7XHJcbiAgICAgICAgZW1haWxMYWJlbEVsLmNsYXNzTGlzdC5hZGQoJ3JlZ2lzdGVyRm9ybUxhYmVsJyk7XHJcbiAgICAgICAgZW1haWxMYWJlbEVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2VtYWlsJyk7XHJcbiAgICAgICAgZW1haWxMYWJlbEVsLmlubmVyVGV4dCA9ICfsnbTrqZTsnbwnO1xyXG4gICAgICAgIGVtYWlsSW5wdXRFbC5pZCA9ICdlbWFpbCc7XHJcbiAgICAgICAgZW1haWxJbnB1dEVsLnNldEF0dHJpYnV0ZSgnbmFtZScsICdlbWFpbCcpO1xyXG4gICAgICAgIGVtYWlsSW5wdXRFbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZW1haWwnKTtcclxuICAgICAgICBlbWFpbElucHV0RWwucmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgIGZvcm1FbC5hcHBlbmRDaGlsZChlbWFpbExhYmVsRWwpO1xyXG4gICAgICAgIGZvcm1FbC5hcHBlbmRDaGlsZChlbWFpbElucHV0RWwpO1xyXG4gICAgICAgIGVtYWlsQWxlcnRQRWwuY2xhc3NMaXN0LmFkZCgncmVnaXN0ZXJGb3JtQWxlcnQnKTtcclxuICAgICAgICBlbWFpbEFsZXJ0UEVsLmNsYXNzTGlzdC5hZGQoJ2Vycm9yRW1haWwnKTtcclxuICAgICAgICBlbWFpbEFsZXJ0UEVsLmNsYXNzTGlzdC5hZGQoJ2lyJyk7XHJcbiAgICAgICAgZW1haWxBbGVydFBFbC5pbm5lclRleHQgPSAnKuydtOuvuCDqsIDsnoXrkJwg7J2066mU7J28IOyjvOyGjOyeheuLiOuLpC4nO1xyXG4gICAgICAgIGZvcm1FbC5hcHBlbmRDaGlsZChlbWFpbEFsZXJ0UEVsKTtcclxuICAgICAgICBwYXNzd29yZExhYmVsRWwuY2xhc3NMaXN0LmFkZCgncmVnaXN0ZXJGb3JtTGFiZWwnKTtcclxuICAgICAgICBwYXNzd29yZExhYmVsRWwuc2V0QXR0cmlidXRlKCdmb3InLCAncGFzc3dvcmQnKTtcclxuICAgICAgICBwYXNzd29yZExhYmVsRWwuaW5uZXJUZXh0ID0gJ+u5hOuwgOuyiO2YuCc7XHJcbiAgICAgICAgcGFzc3dvcmRJbnB1dEVsLmlkID0gJ3Bhc3N3b3JkJztcclxuICAgICAgICBwYXNzd29yZElucHV0RWwuc2V0QXR0cmlidXRlKCduYW1lJywgJ3Bhc3N3b3JkJyk7XHJcbiAgICAgICAgcGFzc3dvcmRJbnB1dEVsLnNldEF0dHJpYnV0ZSgndHlwZScsICdwYXNzd29yZCcpO1xyXG4gICAgICAgIHBhc3N3b3JkSW5wdXRFbC5tYXhMZW5ndGggPSAxMDtcclxuICAgICAgICBwYXNzd29yZElucHV0RWwucmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgIGZvcm1FbC5hcHBlbmRDaGlsZChwYXNzd29yZExhYmVsRWwpO1xyXG4gICAgICAgIGZvcm1FbC5hcHBlbmRDaGlsZChwYXNzd29yZElucHV0RWwpO1xyXG4gICAgICAgIHBhc3N3b3JkQWxlcnRQRWwuY2xhc3NMaXN0LmFkZCgncmVnaXN0ZXJGb3JtQWxlcnQnKTtcclxuICAgICAgICBwYXNzd29yZEFsZXJ0UEVsLmNsYXNzTGlzdC5hZGQoJ2Vycm9yUGFzc3dvcmQnKTtcclxuICAgICAgICBwYXNzd29yZEFsZXJ0UEVsLmNsYXNzTGlzdC5hZGQoJ2lyJyk7XHJcbiAgICAgICAgcGFzc3dvcmRBbGVydFBFbC5pbm5lclRleHQgPSAnKuu5hOuwgOuyiO2YuOuKlCA27J6QIOydtOyDgeydtOyWtOyVvCDtlanri4jri6QuJztcclxuICAgICAgICBmb3JtRWwuYXBwZW5kQ2hpbGQocGFzc3dvcmRBbGVydFBFbCk7XHJcbiAgICAgICAgbG9naW5CdXR0b25FbC5jbGFzc0xpc3QuYWRkKCdidG4nKTtcclxuICAgICAgICBsb2dpbkJ1dHRvbkVsLmNsYXNzTGlzdC5hZGQoJ2xvZ0luQnRuJyk7XHJcbiAgICAgICAgbG9naW5CdXR0b25FbC5jbGFzc0xpc3QuYWRkKCdyZWdpc3RlckZvcm1CdG4nKTtcclxuICAgICAgICBsb2dpbkJ1dHRvbkVsLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcclxuICAgICAgICBsb2dpbkJ1dHRvbkVsLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICBsb2dpbkJ1dHRvbkVsLmlubmVyVGV4dCA9ICfri6TsnYwnO1xyXG4gICAgICAgIGZvcm1FbC5hcHBlbmRDaGlsZChsb2dpbkJ1dHRvbkVsKTtcclxuICAgICAgICAvLyDtj7wg7J6F66ClXHJcbiAgICAgICAgZm9ybUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4gY2hlY2tJbnB1dChwYXNzd29yZElucHV0RWwsIHBhc3N3b3JkQWxlcnRQRWwpKTtcclxuICAgICAgICAvLyDsnbTrqZTsnbwg7Jyg7Zqo7ISxIOqygOyCrCDrsoTtirxcclxuICAgICAgICBsb2dpbkJ1dHRvbkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gaXNWYWxpZEVtYWlsKCkpO1xyXG4gICAgICAgIGNvbnN0IGFydGljbGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcclxuICAgICAgICBjb25zdCBhbmNob3JFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICBhbmNob3JFbC5jbGFzc0xpc3QuYWRkKCdyZWdpc3RlckJ5RW1haWwnKTtcclxuICAgICAgICBhbmNob3JFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnI2xvZ2luJztcclxuICAgICAgICB9KTtcclxuICAgICAgICBhbmNob3JFbC5pbm5lclRleHQgPSAn66Gc6re47J24IO2VmOufrCDqsIDquLAnO1xyXG4gICAgICAgIGFydGljbGVFbC5hcHBlbmRDaGlsZChhbmNob3JFbCk7XHJcbiAgICAgICAgbWFpbkVsLmFwcGVuZENoaWxkKGZvcm1FbCk7XHJcbiAgICAgICAgd3JhcEVsLmFwcGVuZENoaWxkKG1haW5FbCk7XHJcbiAgICAgICAgd3JhcEVsLmFwcGVuZENoaWxkKGFydGljbGVFbCk7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh3cmFwRWwpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25VcFBhZ2U7XHJcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgcHJvZHVjdEltYWdlVXBsb2FkLCBwcm9kdWN0U2F2ZSB9IGZyb20gJy4uL3V0aWxzL2FwaU1vZHVsZSc7XHJcbi8vIOyDge2SiCDsnbTrr7jsp4Ag66+466as67O06riwIC8gYXBp7ISc67KE7JeQIOyghOyGoe2VmOqzoCDrs4Dqsr3rkJwg7J2066+47KeAIOydtOumhCDqsIDsoLjsmKTquLBcclxuZXhwb3J0IGZ1bmN0aW9uIG9uQ2hhbmdlUHJvZHVjdEltZyhldmVudCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBjb25zdCBpbWdSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlcztcclxuICAgICAgICBpZiAoZmlsZSAmJiBmaWxlWzBdKSB7XHJcbiAgICAgICAgICAgIGltZ1JlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkUHJvZHVjdFVwbG9kZUltZ1NjcmVlbicpLnNyYyA9IGAke2ltZ1JlYWRlci5yZXN1bHR9YDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaW1nUmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZVswXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBmaWxlWzBdKTtcclxuICAgICAgICBjb25zdCBpbWdVcmwgPSB5aWVsZCBwcm9kdWN0SW1hZ2VVcGxvYWQoZm9ybURhdGEpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdQcm9kdWN0SW1nJywgaW1nVXJsKTtcclxuICAgICAgICB5aWVsZCBwcm9kdWN0SW5wdXQoKTtcclxuICAgIH0pO1xyXG59XHJcbi8vIOyDge2SiCDqsIDqsqkg7Iir7J6Q66eMLCDsnpDrj5kg7JuQ7ZmU64uo7JyEXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnB1dE51bWJlckZvcm1hdChwcm9kdWN0UHJpY2VGb3JtKSB7XHJcbiAgICBwcm9kdWN0UHJpY2VGb3JtLnZhbHVlID0gY29tbWEodW5jb21tYShwcm9kdWN0UHJpY2VGb3JtLnZhbHVlKSk7XHJcbiAgICBwcm9kdWN0SW5wdXQoKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY29tbWEoYWRkUHJvZHVjdFByaWNlU3RyaW5nKSB7XHJcbiAgICBhZGRQcm9kdWN0UHJpY2VTdHJpbmcgPSBTdHJpbmcoYWRkUHJvZHVjdFByaWNlU3RyaW5nKTtcclxuICAgIHJldHVybiBhZGRQcm9kdWN0UHJpY2VTdHJpbmcucmVwbGFjZSgvKFxcZCkoPz0oPzpcXGR7M30pKyg/IVxcZCkpL2csICckMSwnKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdW5jb21tYShhZGRQcm9kdWN0UHJpY2VTdHJpbmcpIHtcclxuICAgIGFkZFByb2R1Y3RQcmljZVN0cmluZyA9IFN0cmluZyhhZGRQcm9kdWN0UHJpY2VTdHJpbmcpO1xyXG4gICAgcmV0dXJuIGFkZFByb2R1Y3RQcmljZVN0cmluZy5yZXBsYWNlKC9bXlxcZF0rL2csICcnKTtcclxufVxyXG4vLyBwcm9kdWN0SW1nLCBwcm9kdWN0TmFtZSwgcHJvZHVjdFByaWNlLCBwcm9kdWN0Q29udGVudHMgIOuqqOuRkCDsnoXroKXsnbQg65CY66m0IO2XpOuNlOuwlOyXkCDsoIDsnqUg67KE7Yq8IO2ZnOyEse2ZlFxyXG5leHBvcnQgZnVuY3Rpb24gcHJvZHVjdElucHV0KCkge1xyXG4gICAgY29uc3QgcHJvZHVjdEltZ0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvZHVjdEltZycpO1xyXG4gICAgY29uc3QgcHJvZHVjdE5hbWVGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2R1Y3ROYW1lJyk7XHJcbiAgICBjb25zdCBwcm9kdWN0UHJpY2VGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2R1Y3RQcmljZScpO1xyXG4gICAgY29uc3QgcHJvZHVjdENvbnRlbnRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2R1Y3RDb250ZW50Jyk7XHJcbiAgICBjb25zdCBwcm9kdWN0U2F2ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9kdWN0U2F2ZUJ0bicpO1xyXG4gICAgaWYgKHByb2R1Y3RJbWdGb3JtLnZhbHVlICE9PSAnJyAmJlxyXG4gICAgICAgIHByb2R1Y3ROYW1lRm9ybS52YWx1ZSAhPT0gJycgJiZcclxuICAgICAgICBwcm9kdWN0UHJpY2VGb3JtLnZhbHVlICE9PSAnJyAmJlxyXG4gICAgICAgIHByb2R1Y3RDb250ZW50Rm9ybS52YWx1ZSAhPT0gJycpIHtcclxuICAgICAgICBwcm9kdWN0U2F2ZUJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgIHByb2R1Y3RTYXZlQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBwcm9kdWN0U2F2ZUJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gJzAuMyc7XHJcbiAgICAgICAgcHJvZHVjdFNhdmVCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG59XHJcbi8vIOyDge2SiCDrk7HroZ0g66qo65OgIOuNsOydtO2EsCDrs7TrgrTquLBcclxuZXhwb3J0IGZ1bmN0aW9uIG9uUHJvZHVjdFN2YWVCdG4oKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3ROYW1lRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9kdWN0TmFtZScpO1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RQcmljZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvZHVjdFByaWNlJyk7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdENvbnRlbnRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2R1Y3RDb250ZW50Jyk7XHJcbiAgICAgICAgcHJvZHVjdFNhdmUocHJvZHVjdE5hbWVGb3JtLCBwcm9kdWN0UHJpY2VGb3JtLCBwcm9kdWN0Q29udGVudEZvcm0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIG9uVGltZVRvZ2dsZSh0aW1lU2VsY3RCdG5FbCkge1xyXG4gICAgdGltZVNlbGN0QnRuRWwuY2xhc3NMaXN0LnRvZ2dsZSgnb24nKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gb25UaW1lU2VsY3QoZXZlbnQsIHRpbWVTZWxjdEJ0bkVsKSB7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0Lm5vZGVOYW1lID09PSAnQlVUVE9OJykge1xyXG4gICAgICAgIHRpbWVTZWxjdEJ0bkVsLnRleHRDb250ZW50ID0gZXZlbnQudGFyZ2V0LnRleHRDb250ZW50O1xyXG4gICAgICAgIHRpbWVTZWxjdEJ0bkVsLnN0eWxlLmNvbG9yID0gJ2JsYWNrJztcclxuICAgICAgICB0aW1lU2VsY3RCdG5FbC5jbGFzc0xpc3QucmVtb3ZlKCdvbicpO1xyXG4gICAgfVxyXG59XHJcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgaW1hZ2VVcGxvYWQsIHVwZGF0ZVByb2ZpbGUgfSBmcm9tICcuLi91dGlscy9hcGlNb2R1bGUnO1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvZmlsZUluZm8ocHJvZmlsZUltZywgaW5wdXROYW1lLCBpbnB1dElkLCBpbnB1dEludHJvZHVjZSkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9hcGkubWFuZGFyaW4ud2VuaXYuY28ua3InO1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Rva2VuJyk7XHJcbiAgICAgICAgY29uc3QgbXlBY2NvdW50TmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2NvdW50bmFtZScpO1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc1Byb2ZpbGUgPSB5aWVsZCBmZXRjaChgJHt1cmx9L3Byb2ZpbGUvJHtteUFjY291bnROYW1lfWAsIHNldHRpbmcpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNQcm9maWxlSnNvbiA9IHlpZWxkIHJlc1Byb2ZpbGUuanNvbigpO1xyXG4gICAgICAgICAgICBjb25zdCB1c2VyUHJvZmlsZSA9IHlpZWxkIHJlc1Byb2ZpbGVKc29uLnByb2ZpbGU7XHJcbiAgICAgICAgICAgIHByb2ZpbGVJbWcuc3JjID0gdXNlclByb2ZpbGUuaW1hZ2UubGVuZ3RoIDw9IDIwID8gYCR7dXJsfS8ke3VzZXJQcm9maWxlLmltYWdlfWAgOiBgJHt1c2VyUHJvZmlsZS5pbWFnZX1gO1xyXG4gICAgICAgICAgICBpbnB1dE5hbWUudmFsdWUgPSBgJHt1c2VyUHJvZmlsZS51c2VybmFtZX1gO1xyXG4gICAgICAgICAgICBpbnB1dElkLnZhbHVlID0gYCR7dXNlclByb2ZpbGUuYWNjb3VudG5hbWV9YDtcclxuICAgICAgICAgICAgaW5wdXRJbnRyb2R1Y2UudmFsdWUgPSBgJHt1c2VyUHJvZmlsZS5pbnRyb31gO1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlclByb2ZpbGUuaW1hZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9maWxlQ2hhbmdlSW5wdXQocHJvZmlsZVNhdmVCdXR0b24pIHtcclxuICAgIGNvbnN0IGlucHV0TmFtZUxlbmd0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJykudmFsdWUubGVuZ3RoO1xyXG4gICAgY29uc3QgaW5wdXRJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpZCcpO1xyXG4gICAgY29uc3QgaW5wdXRJZExlbmd0aCA9IGlucHV0SWQudmFsdWUubGVuZ3RoO1xyXG4gICAgY29uc3QgaW5wdXRJbnRyb2R1Y2VMZW5ndGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW50cm9kdWNlJykudmFsdWUubGVuZ3RoO1xyXG4gICAgY29uc3QgY2hlY2sgPSAvXlthLXpBLVowLTlfLl17MSwxMH0kLztcclxuICAgIGNvbnN0IGFsZXJ0TWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGVydE1lc3NhZ2UnKTtcclxuICAgIGFsZXJ0TWVzc2FnZS5pbm5lclRleHQgPSAnKuyYgeusuCwg7Iir7J6QLCDtirnsiJjrrLjsnpAoLiksKF8p66eMIOyCrOyaqSDqsIDriqXtlanri4jri6QuJztcclxuICAgIC8vIOunjOyVvSDsmIjsmbgg66y47J6Q6rCAIOyXhuycvOuptCBpciDtgbTrnpjsiqQg7LaU6rCAXHJcbiAgICBpZiAoY2hlY2sudGVzdChpbnB1dElkLnZhbHVlKSkge1xyXG4gICAgICAgIGFsZXJ0TWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdpcicpO1xyXG4gICAgICAgIGlmIChpbnB1dE5hbWVMZW5ndGggPj0gMiAmJiBpbnB1dEludHJvZHVjZUxlbmd0aCA+PSAyICYmIGlucHV0SWRMZW5ndGggPj0gMikge1xyXG4gICAgICAgICAgICBwcm9maWxlU2F2ZUJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgICAgICBwcm9maWxlU2F2ZUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcHJvZmlsZVNhdmVCdXR0b24uc3R5bGUub3BhY2l0eSA9ICcwLjMnO1xyXG4gICAgICAgICAgICBwcm9maWxlU2F2ZUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8g66eM7JW9IOyYiOyZuCDrrLjsnpDqsIAg7J6I7Jy866m0IGlyIO2BtOuemOyKpCDsoJzqsbBcclxuICAgIGlmICghY2hlY2sudGVzdChpbnB1dElkLnZhbHVlKSkge1xyXG4gICAgICAgIGFsZXJ0TWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdpcicpO1xyXG4gICAgICAgIHByb2ZpbGVTYXZlQnV0dG9uLnN0eWxlLm9wYWNpdHkgPSAnMC4zJztcclxuICAgICAgICBwcm9maWxlU2F2ZUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoaW5wdXRJZC52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICBhbGVydE1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnaXInKTtcclxuICAgIH1cclxufVxyXG4vLyDtlITroZztlYQg7J2066+47KeAIOq1kOyytCDrsI8gQVBJ7ISc67KE7JeQIOydtOuvuOyngCDsoITshqHtlZjsl6wg67OA6rK965CcIOydtOuvuOyngCDsnbTrpoQg6rCA7KC47Jik6riwXHJcbmV4cG9ydCBmdW5jdGlvbiBpbWFnZUNoYW5nZShldmVudCkge1xyXG4gICAgY29uc3QgaW1nUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzO1xyXG4gICAgaWYgKGZpbGVbMF0uc2l6ZSA+IDEwMDAwMDAwKSB7XHJcbiAgICAgICAgYWxlcnQoJ+ydtOuvuOyngCDsgqzsnbTspojripQgMTBNQiDsnbTrgrTroZwg65Ox66GdIOqwgOuKpe2VqeuLiOuLpC4nKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoZmlsZSAmJiBmaWxlWzBdKSB7XHJcbiAgICAgICAgaW1nUmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVwZGF0ZVVzZXJJbWcnKS5zcmMgPSBgJHtpbWdSZWFkZXIucmVzdWx0fWA7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpbWdSZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlWzBdKTtcclxuICAgIH1cclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBmaWxlWzBdKTtcclxuICAgIGltYWdlVXBsb2FkKGZvcm1EYXRhKTtcclxufVxyXG4vLyDsoIDsnqUg67KE7Yq8IO2BtOumrSDsi5wg7ISc67KE7JeQIO2UhOuhnO2VhCDsnbTrr7jsp4AsIOydtOumhCwg7IaM6rCcLCDqs4TsoJUgSUQg7KCE7IahXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGlja1NhdmVCdXR0b24ocHJvZmlsZUltZykge1xyXG4gICAgbGV0IGltYWdlVXJsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ltYWdlVXJsJyk7XHJcbiAgICBpZiAoaW1hZ2VVcmwgPT09IG51bGwpIHtcclxuICAgICAgICBpbWFnZVVybCA9IHByb2ZpbGVJbWcuc3JjO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbWFnZVVybCcsIGltYWdlVXJsKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZVByb2ZpbGUoKTtcclxufVxyXG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IGxpa2VIZWFydCwgbGlrZVVuSGVhcnQgfSBmcm9tICcuLi91dGlscy9hcGlNb2R1bGUnO1xyXG4vLyDsoovslYTsmpQg67KE7Yq8IO2BtOumrVxyXG5leHBvcnQgZnVuY3Rpb24gY2xpY2tIZWFydChldmVudCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBjb25zdCBsaWtlQnRuID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IGxpa2VDb3VudCA9IGxpa2VCdG4uY2hpbGRyZW5bMV07XHJcbiAgICAgICAgbGV0IHBvc3RJZCA9IGxpa2VCdG4uY2xvc2VzdCgnc2VjdGlvbicpLmlkO1xyXG4gICAgICAgIHBvc3RJZCA/IHBvc3RJZCA6IChwb3N0SWQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGxvY2F0aW9uLnNlYXJjaCkuZ2V0KCdwb3N0aWQnKSk7XHJcbiAgICAgICAgaWYgKGxpa2VCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdvbicpKSB7XHJcbiAgICAgICAgICAgIGxpa2VCdG4uY2xhc3NMaXN0LnJlbW92ZSgnb24nKTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHlpZWxkIGxpa2VVbkhlYXJ0KHBvc3RJZCk7XHJcbiAgICAgICAgICAgIGxpa2VDb3VudC5pbm5lckhUTUwgPSB5aWVsZCBkYXRhLnBvc3QuaGVhcnRDb3VudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxpa2VCdG4uY2xhc3NMaXN0LmFkZCgnb24nKTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHlpZWxkIGxpa2VIZWFydChwb3N0SWQpO1xyXG4gICAgICAgICAgICBsaWtlQ291bnQuaW5uZXJIVE1MID0gZGF0YS5wb3N0LmhlYXJ0Q291bnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyB0aW1lRm9yVG9kYXkgfSBmcm9tICcuLi91dGlscy9jb21tb24nO1xyXG5pbXBvcnQgeyBjbGlja0hlYXJ0IH0gZnJvbSAnLi9oZWFydEJ0bic7XHJcbmltcG9ydCB7IGNsaWNrVXNlck1vZGFsIH0gZnJvbSAnLi9tb2RhbCc7XHJcbmZ1bmN0aW9uIG5vRmVlZCgpIHtcclxuICAgIGNvbnN0IHN1YlRpdGxlSGVhZGluZzNFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBjb25zdCBub25lRmVlZFNlY3Rpb25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25vbmVGZWVkJyk7XHJcbiAgICBjb25zdCBjb250ZW50UEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3Qgc2VhcmNoTGlua0RpdkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBjb250ZW50TWFpbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgc3ViVGl0bGVIZWFkaW5nM0VsLmNsYXNzTGlzdC5hZGQoJ2lyJyk7XHJcbiAgICBzdWJUaXRsZUhlYWRpbmczRWwuaW5uZXJUZXh0ID0gJ+2UvOuTnCDqsozsi5zquIAnO1xyXG4gICAgbm9uZUZlZWRTZWN0aW9uRWwuY2xhc3NMaXN0LmFkZCgnbm9uZUZlZWQnKTtcclxuICAgIGNvbnRlbnRQRWwuaW5uZXJUZXh0ID0gJ+ycoOyggOulvCDqsoDsg4ntlbQg7YyU66Gc7JqwIO2VtOuztOyEuOyalCEnO1xyXG4gICAgc2VhcmNoTGlua0RpdkVsLmNsYXNzTGlzdC5hZGQoJ3VzZXJTZWFyY2hCdG4nKTtcclxuICAgIHNlYXJjaExpbmtEaXZFbC5pbm5lclRleHQgPSAn6rKA7IOJ7ZWY6riwJztcclxuICAgIHNlYXJjaExpbmtEaXZFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjc2VhcmNoJzsgLy8g7KO87IaMIOyXheuNsOydtO2KuFxyXG4gICAgfSk7XHJcbiAgICBub25lRmVlZFNlY3Rpb25FbC5hcHBlbmRDaGlsZChjb250ZW50UEVsKTtcclxuICAgIG5vbmVGZWVkU2VjdGlvbkVsLmFwcGVuZENoaWxkKHNlYXJjaExpbmtEaXZFbCk7XHJcbiAgICBjb250ZW50TWFpbkVsLmFwcGVuZENoaWxkKHN1YlRpdGxlSGVhZGluZzNFbCk7XHJcbiAgICBjb250ZW50TWFpbkVsLmFwcGVuZENoaWxkKG5vbmVGZWVkU2VjdGlvbkVsKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZmVlZEFQSSgpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgY29uc3QgZGVmYXVsdFVybCA9ICdodHRwczovL2FwaS5tYW5kYXJpbi53ZW5pdi5jby5rcic7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVG9rZW4nKTtcclxuICAgICAgICBjb25zdCBzZXR0aW5nID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNGZWVkID0geWllbGQgZmV0Y2goYCR7ZGVmYXVsdFVybH0vcG9zdC9mZWVkP2xpbWl0PTMwYCwgc2V0dGluZyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGpzb25GZWVkID0geWllbGQgcmVzRmVlZC5qc29uKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc3RzID0ganNvbkZlZWQucG9zdHM7XHJcbiAgICAgICAgICAgIGlmIChwb3N0cy5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgbm9GZWVkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVGZWVkKHBvc3RzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoX2EpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVGhlIGZlZWQgY2Fubm90IGJlIHJlY2VpdmVkLicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGNsaWNrVXNlckluZm8oZXZlbnQpIHtcclxuICAgIHZhciBfYTtcclxuICAgIGNvbnN0IGV2ZW50VGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgY29uc3QgdXNlckFjY291bnQgPSAoX2EgPSBldmVudC5jdXJyZW50VGFyZ2V0LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLnRleHRDb250ZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVwbGFjZSgnQCcsICcnKTtcclxuICAgIGlmIChldmVudFRhcmdldC5jbGFzc05hbWUgPT09ICdtb3JlQnRuIGJ1dHRvbkNsaWNrJykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gYCNwcm9maWxlXFw/YWNjb3VudG5hbWU9JHt1c2VyQWNjb3VudH1gOyAvLyDso7zshowg7JeF642w7J207Yq4XHJcbn1cclxuZnVuY3Rpb24gY2xpY2tDb21tZW50KGV2ZW50KSB7XHJcbiAgICBjb25zdCBwb3N0SWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucG9zdGlkO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBgI3Bvc3RcXD9wb3N0aWQ9JHtwb3N0SWR9YDsgLy8g7KO87IaMIOyXheuNsOydtO2KuFxyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZUZlZWQocG9zdHMpIHtcclxuICAgIGNvbnN0IGxpc3RDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvc3QnKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBwb3N0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHBvc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ3Bvc3RJdGVtJyk7XHJcbiAgICAgICAgLy8g7J2066+47KeAIHVybCDsoIDsnqVcclxuICAgICAgICBsZXQgcG9zdEltYWdlID0gJyc7XHJcbiAgICAgICAgaWYgKHBvc3RzW2ldLmltYWdlKSB7XHJcbiAgICAgICAgICAgIGxldCBpbWFnZXMgPSBwb3N0c1tpXS5pbWFnZS5zcGxpdCgnLCcpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbWFnZSBvZiBpbWFnZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpbWFnZS5zcGxpdCgnLicpWzFdID09PSAnYXBpJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlID0gaW1hZ2UucmVwbGFjZSgnaHR0cHM6Ly9tYW5kYXJpbi5hcGkud2VuaXYuY28ua3IvJywgJ2h0dHBzOi8vYXBpLm1hbmRhcmluLndlbml2LmNvLmtyLycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcG9zdEltYWdlICs9IGBcclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2V9XCIgYWx0PVwi6rKM7Iuc66y8IOydtOuvuOyngFwiIC8+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICBgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjaGVja0ltZyA9ICFwb3N0SW1hZ2VcclxuICAgICAgICAgICAgPyAnJ1xyXG4gICAgICAgICAgICA6IGA8ZGl2IGNsYXNzPVwicG9zdEltZ0NvbnRlbnRcIj5cclxuICAgICAgICAgICAgPHVsPiR7cG9zdEltYWdlfTwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuICAgICAgICBjb25zdCBjaGVja0ltZ05vZGUgPSByYW5nZS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoY2hlY2tJbWcpO1xyXG4gICAgICAgIC8vIOyCrOyaqeyekCDsoJXrs7Qg66eI7YGs7JeFXHJcbiAgICAgICAgY29uc3QgcG9zdEhlYWRpbmc0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJJbmZvU2VjdGlvbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJMaXN0RGl2RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCB1c2VySXRlbURpdkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgdXNlckJveERpdkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgdXNlclByb2ZpbGVJbWdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJJbmZvRGl2RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCB1c2VyTmlja25hbWVTdHJvbmdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0cm9uZycpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJUZXh0RGl2RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCB1c2VyU3RhdHVzTXNnUEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbnN0IG1vcmVCdG5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IG1vcmVUZXh0U3BhbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIHBvc3RIZWFkaW5nNEVsLmNsYXNzTGlzdC5hZGQoJ2lyJyk7XHJcbiAgICAgICAgcG9zdEhlYWRpbmc0RWwuaW5uZXJUZXh0ID0gJ+qyjOyLnOusvCc7XHJcbiAgICAgICAgdXNlckxpc3REaXZFbC5jbGFzc0xpc3QuYWRkKCd1c2VyTGlzdCcpO1xyXG4gICAgICAgIHVzZXJJdGVtRGl2RWwuY2xhc3NMaXN0LmFkZCgndXNlckl0ZW0nKTtcclxuICAgICAgICB1c2VyQm94RGl2RWwuY2xhc3NMaXN0LmFkZCgndXNlckJveCcpO1xyXG4gICAgICAgIHVzZXJCb3hEaXZFbC5zZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JywgcG9zdHNbaV0uaWQpO1xyXG4gICAgICAgIHVzZXJQcm9maWxlSW1nRWwuY2xhc3NMaXN0LmFkZCgndXNlclByb2ZpbGVJbWFnZScpO1xyXG4gICAgICAgIHVzZXJQcm9maWxlSW1nRWwuc2V0QXR0cmlidXRlKCdzcmMnLCBgJHtwb3N0c1tpXS5hdXRob3IuaW1hZ2V9YCk7XHJcbiAgICAgICAgdXNlclByb2ZpbGVJbWdFbC5zZXRBdHRyaWJ1dGUoJ2FsdCcsIGAke3Bvc3RzW2ldLmF1dGhvci51c2VybmFtZX3ri5jsnZgg7ZSE66Gc7ZWEIOydtOuvuOyngGApO1xyXG4gICAgICAgIHVzZXJJbmZvRGl2RWwuY2xhc3NMaXN0LmFkZCgndXNlckluZm8nKTtcclxuICAgICAgICB1c2VyTmlja25hbWVTdHJvbmdFbC5jbGFzc0xpc3QuYWRkKCd1c2VyTmlja25hbWUnKTtcclxuICAgICAgICB1c2VyTmlja25hbWVTdHJvbmdFbC5pbm5lclRleHQgPSBgJHtwb3N0c1tpXS5hdXRob3IudXNlcm5hbWV9YDtcclxuICAgICAgICB1c2VyVGV4dERpdkVsLmNsYXNzTGlzdC5hZGQoJ3VzZXJUZXh0Jyk7XHJcbiAgICAgICAgdXNlclN0YXR1c01zZ1BFbC5jbGFzc0xpc3QuYWRkKCd1c2VyTXNnQ29udGVudCcpO1xyXG4gICAgICAgIHVzZXJTdGF0dXNNc2dQRWwuY2xhc3NMaXN0LmFkZCgndXNlclN0YXR1c01zZycpO1xyXG4gICAgICAgIHVzZXJTdGF0dXNNc2dQRWwuaW5uZXJUZXh0ID0gYEAke3Bvc3RzW2ldLmF1dGhvci5hY2NvdW50bmFtZX1gO1xyXG4gICAgICAgIG1vcmVCdG5FbC5jbGFzc0xpc3QuYWRkKCdtb3JlQnRuJyk7XHJcbiAgICAgICAgbW9yZUJ0bkVsLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbkNsaWNrJyk7XHJcbiAgICAgICAgbW9yZVRleHRTcGFuRWwuY2xhc3NMaXN0LmFkZCgnaXInKTtcclxuICAgICAgICBtb3JlVGV4dFNwYW5FbC5pbm5lclRleHQgPSAn6rKM7Iuc6riAIOuNlOuztOq4sCDrsoTtirwnO1xyXG4gICAgICAgIG1vcmVCdG5FbC5hcHBlbmRDaGlsZChtb3JlVGV4dFNwYW5FbCk7XHJcbiAgICAgICAgdXNlclRleHREaXZFbC5hcHBlbmRDaGlsZCh1c2VyU3RhdHVzTXNnUEVsKTtcclxuICAgICAgICB1c2VySW5mb0RpdkVsLmFwcGVuZENoaWxkKHVzZXJOaWNrbmFtZVN0cm9uZ0VsKTtcclxuICAgICAgICB1c2VySW5mb0RpdkVsLmFwcGVuZENoaWxkKHVzZXJUZXh0RGl2RWwpO1xyXG4gICAgICAgIHVzZXJCb3hEaXZFbC5hcHBlbmRDaGlsZCh1c2VyUHJvZmlsZUltZ0VsKTtcclxuICAgICAgICB1c2VyQm94RGl2RWwuYXBwZW5kQ2hpbGQodXNlckluZm9EaXZFbCk7XHJcbiAgICAgICAgdXNlckJveERpdkVsLmFwcGVuZENoaWxkKG1vcmVCdG5FbCk7XHJcbiAgICAgICAgdXNlckl0ZW1EaXZFbC5hcHBlbmRDaGlsZCh1c2VyQm94RGl2RWwpO1xyXG4gICAgICAgIHVzZXJMaXN0RGl2RWwuYXBwZW5kQ2hpbGQodXNlckl0ZW1EaXZFbCk7XHJcbiAgICAgICAgdXNlckluZm9TZWN0aW9uRWwuYXBwZW5kQ2hpbGQodXNlckxpc3REaXZFbCk7XHJcbiAgICAgICAgcG9zdEl0ZW0uYXBwZW5kQ2hpbGQocG9zdEhlYWRpbmc0RWwpO1xyXG4gICAgICAgIHBvc3RJdGVtLmFwcGVuZENoaWxkKHVzZXJJbmZvU2VjdGlvbkVsKTtcclxuICAgICAgICAvLyDqsozsi5zrrLwg66eI7YGs7JeFXHJcbiAgICAgICAgY29uc3QgY29udGVudFNlY3Rpb25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCBjb250ZW50VGl0bGVoZWFkaW5nNEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuICAgICAgICBjb25zdCBjb250ZW50UEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRCdG5EaXZFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGxpa2VCdG5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IGxpa2VUZXh0U3BhbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIGNvbnN0IGxpa2VDb3VudFNwYW5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBjb25zdCBjb21tZW50QnRuRGl2RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBjb21tZW50Q291bnRTcGFuRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgY29uc3QgcG9zdERhdGVTdHJvbmdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0cm9uZycpO1xyXG4gICAgICAgIGNvbnRlbnRTZWN0aW9uRWwuY2xhc3NMaXN0LmFkZCgncG9zdENvbnRlbnQnKTtcclxuICAgICAgICBjb250ZW50U2VjdGlvbkVsLmlkID0gYCR7cG9zdHNbaV0uaWR9YDtcclxuICAgICAgICBjb250ZW50VGl0bGVoZWFkaW5nNEVsLmNsYXNzTGlzdC5hZGQoJ2lyJyk7XHJcbiAgICAgICAgY29udGVudFRpdGxlaGVhZGluZzRFbC5pbm5lclRleHQgPSAn6rKM7Iuc6riAIOuCtOyaqSc7XHJcbiAgICAgICAgY29udGVudFBFbC5pbm5lclRleHQgPSBgJHtwb3N0c1tpXS5jb250ZW50fWA7XHJcbiAgICAgICAgY29udGVudEJ0bkRpdkVsLmNsYXNzTGlzdC5hZGQoJ3Bvc3RCdG5Db250ZW50Jyk7XHJcbiAgICAgICAgbGlrZUJ0bkVsLmNsYXNzTGlzdC5hZGQoJ2xpa2VCdG4nKTtcclxuICAgICAgICBpZiAocG9zdHNbaV0uaGVhcnRlZCkge1xyXG4gICAgICAgICAgICBsaWtlQnRuRWwuY2xhc3NMaXN0LmFkZCgnb24nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxpa2VCdG5FbC5jbGFzc0xpc3QucmVtb3ZlKCdvbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaWtlVGV4dFNwYW5FbC5jbGFzc0xpc3QuYWRkKCdpcicpO1xyXG4gICAgICAgIGxpa2VUZXh0U3BhbkVsLmlubmVyVGV4dCA9ICfsoovslYTsmpQg67KE7Yq8JztcclxuICAgICAgICBsaWtlQ291bnRTcGFuRWwuY2xhc3NMaXN0LmFkZCgnY29tbWVudENvdW50Jyk7XHJcbiAgICAgICAgbGlrZUNvdW50U3BhbkVsLmlubmVyVGV4dCA9IGAke3Bvc3RzW2ldLmhlYXJ0Q291bnR9YDtcclxuICAgICAgICBjb21tZW50QnRuRGl2RWwuY2xhc3NMaXN0LmFkZCgnY29tbWVudEJ0bicpO1xyXG4gICAgICAgIGNvbW1lbnRCdG5EaXZFbC5kYXRhc2V0LnBvc3RpZCA9IGAke3Bvc3RzW2ldLmlkfWA7XHJcbiAgICAgICAgY29tbWVudENvdW50U3BhbkVsLmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnRDb3VudCcpO1xyXG4gICAgICAgIGNvbW1lbnRDb3VudFNwYW5FbC5pbm5lclRleHQgPSBgJHtwb3N0c1tpXS5jb21tZW50Q291bnR9YDtcclxuICAgICAgICBwb3N0RGF0ZVN0cm9uZ0VsLmNsYXNzTGlzdC5hZGQoJ3Bvc3REYXRlJyk7XHJcbiAgICAgICAgcG9zdERhdGVTdHJvbmdFbC5pbm5lclRleHQgPSBgJHt0aW1lRm9yVG9kYXkocG9zdHNbaV0uY3JlYXRlZEF0KX1gO1xyXG4gICAgICAgIGxpa2VCdG5FbC5hcHBlbmRDaGlsZChsaWtlVGV4dFNwYW5FbCk7XHJcbiAgICAgICAgbGlrZUJ0bkVsLmFwcGVuZENoaWxkKGxpa2VDb3VudFNwYW5FbCk7XHJcbiAgICAgICAgY29tbWVudEJ0bkRpdkVsLmFwcGVuZENoaWxkKGNvbW1lbnRDb3VudFNwYW5FbCk7XHJcbiAgICAgICAgY29udGVudEJ0bkRpdkVsLmFwcGVuZENoaWxkKGxpa2VCdG5FbCk7XHJcbiAgICAgICAgY29udGVudEJ0bkRpdkVsLmFwcGVuZENoaWxkKGNvbW1lbnRCdG5EaXZFbCk7XHJcbiAgICAgICAgY29udGVudFNlY3Rpb25FbC5hcHBlbmRDaGlsZChjb250ZW50VGl0bGVoZWFkaW5nNEVsKTtcclxuICAgICAgICBjb250ZW50U2VjdGlvbkVsLmFwcGVuZENoaWxkKGNvbnRlbnRQRWwpO1xyXG4gICAgICAgIGNvbnRlbnRTZWN0aW9uRWwuYXBwZW5kQ2hpbGQoY2hlY2tJbWdOb2RlKTtcclxuICAgICAgICBjb250ZW50U2VjdGlvbkVsLmFwcGVuZENoaWxkKGNvbnRlbnRCdG5EaXZFbCk7XHJcbiAgICAgICAgY29udGVudFNlY3Rpb25FbC5hcHBlbmRDaGlsZChwb3N0RGF0ZVN0cm9uZ0VsKTtcclxuICAgICAgICBwb3N0SXRlbS5hcHBlbmRDaGlsZChjb250ZW50U2VjdGlvbkVsKTtcclxuICAgICAgICBsaXN0Q29udGVudC5hcHBlbmRDaGlsZChwb3N0SXRlbSk7XHJcbiAgICAgICAgdXNlckJveERpdkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tVc2VySW5mbyk7XHJcbiAgICAgICAgbGlrZUJ0bkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIZWFydCk7XHJcbiAgICAgICAgbW9yZUJ0bkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tVc2VyTW9kYWwpO1xyXG4gICAgICAgIGNvbW1lbnRCdG5EaXZFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrQ29tbWVudCk7XHJcbiAgICB9XHJcbn1cclxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG4vLyDthqDtgbAg7Jes67aAIO2ZleyduCDtm4Qg7ZmI7Jy866GcIOydtOuPmVxyXG5mdW5jdGlvbiBsb2dJbihyZXNNZXNzYWdlKSB7XHJcbiAgICBpZiAocmVzTWVzc2FnZSA9PT0gMjAwKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnI2hvbWUnO1xyXG4gICAgfVxyXG59XHJcbi8vIO2GoO2BsCDqsoDspp1cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRUb2tlbigpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vYXBpLm1hbmRhcmluLndlbml2LmNvLmtyJztcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUb2tlbicpO1xyXG4gICAgICAgIGlmICh0b2tlbiA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzZXR0aW5nID0ge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNWYWxpZFRva2VuID0geWllbGQgZmV0Y2goYCR7dXJsfS91c2VyL2NoZWNrdG9rZW5gLCBzZXR0aW5nKTtcclxuICAgICAgICAgICAgbG9nSW4ocmVzVmFsaWRUb2tlbi5zdGF0dXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyNzaWdudXAnO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuLy8g67KE7Yq8IO2ZnOyEse2ZlFxyXG5mdW5jdGlvbiBpc0FjdGl2ZUJ0bihlbWFpbCwgcGFzc3dvcmQsIGxvZ2luQnV0dG9uRWwpIHtcclxuICAgIGlmIChlbWFpbC52YWx1ZSAhPT0gJycgJiYgcGFzc3dvcmQudmFsdWUgIT09ICcnKSB7XHJcbiAgICAgICAgbG9naW5CdXR0b25FbC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgIGxvZ2luQnV0dG9uRWwuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGVtYWlsLnZhbHVlID09PSAnJyB8fCBwYXNzd29yZC52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICBsb2dpbkJ1dHRvbkVsLnN0eWxlLm9wYWNpdHkgPSAnMC4zJztcclxuICAgICAgICBsb2dpbkJ1dHRvbkVsLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH1cclxufVxyXG4vLyDruYTrsIDrsojtmLgg6ri47J20IOyytO2BrFxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJbnB1dChlbWFpbCwgcGFzc3dvcmQsIGxvZ2luQnV0dG9uRWwpIHtcclxuICAgIGlmIChwYXNzd29yZC52YWx1ZS5sZW5ndGggPj0gNikge1xyXG4gICAgICAgIGlzQWN0aXZlQnRuKGVtYWlsLCBwYXNzd29yZCwgbG9naW5CdXR0b25FbCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBsb2dpbkJ1dHRvbkVsLnN0eWxlLm9wYWNpdHkgPSAnMC4zJztcclxuICAgICAgICBsb2dpbkJ1dHRvbkVsLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH1cclxufVxyXG4vLyDtmYjsnLzroZwg7J2064+ZXHJcbmZ1bmN0aW9uIGxvY2F0aW9uSG9tZShzdGF0dXMpIHtcclxuICAgIGlmIChzdGF0dXMgIT09IDQyMikge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyNob21lJztcclxuICAgIH1cclxufVxyXG4vLyDroZzsu6wg7Iqk7Yag66as7KeA7JeQIO2GoO2BsCDsoIDsnqVcclxuZnVuY3Rpb24gc2F2ZVRva2VuKHVzZXJEYXRhLCBzdGF0dXMpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdUb2tlbicsIHVzZXJEYXRhLnRva2VuKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY2NvdW50bmFtZScsIHVzZXJEYXRhLmFjY291bnRuYW1lKTtcclxuICAgIGxvY2F0aW9uSG9tZShzdGF0dXMpO1xyXG59XHJcbi8vIOuhnOq3uOyduCDssrTtgaxcclxuZnVuY3Rpb24gY2hlY2tsb2dJbih1c2VyRGF0YSwgc3RhdHVzLCBhbGVydFBFbCwgZm9ybUVsKSB7XHJcbiAgICBpZiAoc3RhdHVzICE9PSA0MjIpIHtcclxuICAgICAgICBzYXZlVG9rZW4odXNlckRhdGEsIHN0YXR1cyk7XHJcbiAgICB9XHJcbiAgICBpZiAoc3RhdHVzID09PSA0MjIpIHtcclxuICAgICAgICBhbGVydFBFbC5jbGFzc0xpc3QucmVtb3ZlKCdpcicpO1xyXG4gICAgfVxyXG4gICAgZm9ybUVsLm9uaW5wdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgYWxlcnRQRWwuY2xhc3NMaXN0LmFkZCgnaXInKTtcclxuICAgIH07XHJcbn1cclxuLy8g66Gc6re47J24IOuNsOydtO2EsCDsmpTssq1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExvZ0luRGF0YShlbWFpbCwgcGFzc3dvcmQsIGFsZXJ0UEVsLCBmb3JtRWwpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vYXBpLm1hbmRhcmluLndlbml2LmNvLmtyJztcclxuICAgICAgICBjb25zdCB1c2VySWRQdyA9IHtcclxuICAgICAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLnZhbHVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXJJZFB3KSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc0xvZ2luID0geWllbGQgZmV0Y2goYCR7dXJsfS91c2VyL2xvZ2luYCwgc2V0dGluZyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3Jlc0xvZ2luSnNvbiA9IHlpZWxkIHJlc0xvZ2luLmpzb24oKTtcclxuICAgICAgICAgICAgY2hlY2tsb2dJbihyZXNyZXNMb2dpbkpzb24udXNlciwgcmVzTG9naW4uc3RhdHVzLCBhbGVydFBFbCwgZm9ybUVsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyBkZWxldGVQb3N0LCByZXBvcnRQb3N0LCBkZWxldGVDb21tZW50LCByZXBvcnRDb21tZW50IH0gZnJvbSAnLi4vdXRpbHMvYXBpTW9kdWxlJztcclxuY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNvbnN0IG1vZGFsSGVhZGVyID0gYDxzZWN0aW9uIGNsYXNzPVwibW9kYWxCZyBzZXRVc2VydE1vZGFsXCI+XHJcbiAgPGFydGljbGUgY2xhc3M9XCJtb2RhbCBhcHBlYXJcIj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJtb2RhbENsb3NlXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiaXJcIj7rjZTrs7TquLAg64ur6riwIOuyhO2KvDwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cIm1vZGFsQnRuIG1vZGFsQnRuMlwiPuuhnOq3uOyVhOybgzwvYnV0dG9uPlxyXG4gIDwvYXJ0aWNsZT5cclxuPC9zZWN0aW9uPmA7XHJcbmNvbnN0IGxvZ291dEFsZXJ0ID0gYDxzZWN0aW9uIGNsYXNzPVwibW9kYWxBbGVydCBsb2dvdXRBbGVydFwiPlxyXG4gIDxoNCBjbGFzcz1cImlyXCI+66Gc6re47JWE7JuDIOywvTwvaDQ+XHJcbiAgPHN0cm9uZyBjbGFzcz1cImFsZXJ0TXNnXCI+66Gc6re47JWE7JuD7ZWY7Iuc6rKg7Ja07JqUPzwvc3Ryb25nPlxyXG4gIDxkaXYgY2xhc3M9XCJhbGVydEJ0bkNvbnRlbnRcIj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJjYW5jZWxCdG5cIj7st6jshow8L2J1dHRvbj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJsb2dvdXRCdG5cIj7roZzqt7jslYTsm4M8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC9zZWN0aW9uPmA7XHJcbmNvbnN0IG1vZGFsUHJvZHVjdCA9IGA8c2VjdGlvbiBjbGFzcz1cIm1vZGFsQmcgcHJvZHVjdE1vZGFsXCI+XHJcbiAgPGFydGljbGUgY2xhc3M9XCJtb2RhbCBhcHBlYXJcIj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJtb2RhbENsb3NlXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiaXJcIj7rjZTrs7TquLAg64ur6riwIOuyhO2KvDwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cIm1vZGFsQnRuIG1vZGFsQnRuMVwiPuyCreygnDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cIm1vZGFsQnRuIG1vZGFsQnRuM1wiPuybueyCrOydtO2KuOyXkOyEnCDsg4Htkogg67O06riwPC9idXR0b24+XHJcbiAgPC9hcnRpY2xlPlxyXG48L3NlY3Rpb24+YDtcclxuY29uc3QgbW9kYWxEZWxldGVBbGVydCA9IGA8c2VjdGlvbiBjbGFzcz1cIm1vZGFsQWxlcnQgZGVsQWxlcnRcIj5cclxuICA8aDQgY2xhc3M9XCJpclwiPuyCreygnCDssL08L2g0PlxyXG4gIDxzdHJvbmcgY2xhc3M9XCJhbGVydE1zZ1wiPuyCreygnO2VmOyLnOqyoOyWtOyalD88L3N0cm9uZz5cclxuICA8ZGl2IGNsYXNzPVwiYWxlcnRCdG5Db250ZW50XCI+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiY2FuY2VsQnRuXCI+7Leo7IaMPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiZGVsQnRuXCI+7IKt7KCcPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvc2VjdGlvbj5gO1xyXG5jb25zdCBtb2RhbFBvc3QgPSBgPHNlY3Rpb24gY2xhc3M9XCJtb2RhbEJnIHBvc3RNb2RhbFwiPlxyXG4gIDxhcnRpY2xlIGNsYXNzPVwibW9kYWwgYXBwZWFyXCI+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwibW9kYWxDbG9zZVwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImlyXCI+642U67O06riwIOuLq+q4sCDrsoTtirw8L3NwYW4+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJtb2RhbEJ0biBtb2RhbEJ0bjFcIj7sgq3soJw8L2J1dHRvbj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJtb2RhbEJ0biBtb2RhbEJ0bjJcIj7siJjsoJU8L2J1dHRvbj5cclxuICA8L2FydGljbGU+XHJcbjwvc2VjdGlvbj5gO1xyXG5jb25zdCBtb2RhbENvbW1lbnQgPSBgPHNlY3Rpb24gY2xhc3M9XCJtb2RhbEJnIHBvc3RNb2RhbFwiPlxyXG4gIDxhcnRpY2xlIGNsYXNzPVwibW9kYWwgYXBwZWFyXCI+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwibW9kYWxDbG9zZVwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImlyXCI+642U67O06riwIOuLq+q4sCDrsoTtirw8L3NwYW4+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJtb2RhbEJ0biBtb2RhbEJ0bjFcIj7sgq3soJw8L2J1dHRvbj5cclxuICA8L2FydGljbGU+XHJcbjwvc2VjdGlvbj5gO1xyXG5jb25zdCBtb2RhbFJlcG9ydCA9IGA8c2VjdGlvbiBjbGFzcz1cIm1vZGFsQmcgcmVwb3J0TW9kYWxcIj5cclxuPGFydGljbGUgY2xhc3M9XCJtb2RhbCBhcHBlYXJcIj5cclxuICA8YnV0dG9uIGNsYXNzPVwibW9kYWxDbG9zZVwiPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJpclwiPuuNlOuztOq4sCDri6vquLAg67KE7Yq8PC9zcGFuPlxyXG4gIDwvYnV0dG9uPlxyXG4gIDxidXR0b24gY2xhc3M9XCJtb2RhbEJ0biBtb2RhbEJ0bjFcIj7si6Dqs6DtlZjquLA8L2J1dHRvbj5cclxuPC9hcnRpY2xlPlxyXG48L3NlY3Rpb24+YDtcclxuY29uc3QgcmVwb3J0QWxlcnQgPSBgPHNlY3Rpb24gY2xhc3M9XCJtb2RhbEFsZXJ0IHJlcG9ydEFsZXJ0XCI+XHJcbjxoNCBjbGFzcz1cImlyXCI+7Iug6rOgIOywvTwvaDQ+XHJcbjxzdHJvbmcgY2xhc3M9XCJhbGVydE1zZ1wiPuyLoOqzoO2VmOyLnOqyoOyWtOyalD88L3N0cm9uZz5cclxuPGRpdiBjbGFzcz1cImFsZXJ0QnRuQ29udGVudFwiPlxyXG4gIDxidXR0b24gY2xhc3M9XCJjYW5jZWxCdG5cIj7st6jshow8L2J1dHRvbj5cclxuICA8YnV0dG9uIGNsYXNzPVwicmVwb3J0QnRuXCI+7Iug6rOgPC9idXR0b24+XHJcbjwvZGl2PlxyXG48L3NlY3Rpb24+YDtcclxuY29uc3QgbW9kYWxDaGF0ID0gYDxzZWN0aW9uIGNsYXNzPVwibW9kYWxCZyBjaGF0TW9kYWxcIj5cclxuPGFydGljbGUgY2xhc3M9XCJtb2RhbCBhcHBlYXJcIj5cclxuICA8YnV0dG9uIGNsYXNzPVwibW9kYWxDbG9zZVwiPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJpclwiPuyxhO2MheuwqSDrgpjqsIDquLAg67KE7Yq8PC9zcGFuPlxyXG4gIDwvYnV0dG9uPlxyXG4gIDxidXR0b24gY2xhc3M9XCJtb2RhbEJ0biBtb2RhbEJ0bjFcIj7ssYTtjIXrsKkg64KY6rCA6riwPC9idXR0b24+XHJcbjwvYXJ0aWNsZT5cclxuPC9zZWN0aW9uPmA7XHJcbi8vIOyCrOyaqeyekCDrqqjri6zssL1cclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ291dE1vZGFsKCkge1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XHJcbiAgICBtb2RhbC5pbm5lckhUTUwgPSBtb2RhbEhlYWRlcjtcclxuICAgIGNvbnN0IG1vZGFsTG9nb3V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldFVzZXJ0TW9kYWwgLm1vZGFsQnRuMicpO1xyXG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0VXNlcnRNb2RhbCAubW9kYWxDbG9zZScpO1xyXG4gICAgLy8g7IKs7Jqp7J6QIOuqqOuLrOywvSDruYTtmZzshLHtmZRcclxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQobW9kYWwpO1xyXG4gICAgfSk7XHJcbiAgICAvLyDsgqzsmqnsnpAg66Gc6re47JWE7JuDIOuqqOuLrOywvSDtmZzshLHtmZRcclxuICAgIG1vZGFsTG9nb3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIG1vZGFsLmlubmVySFRNTCA9IGxvZ291dEFsZXJ0O1xyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpO1xyXG4gICAgICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvdXRBbGVydCAuY2FuY2VsQnRuJyk7XHJcbiAgICAgICAgY29uc3QgbG9nb3V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ291dEFsZXJ0IC5sb2dvdXRCdG4nKTtcclxuICAgICAgICAvLyDsgqzsmqnsnpAg66Gc6re47JWE7JuDIOuqqOuLrOywvSDruYTtmZzshLHtmZRcclxuICAgICAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQobW9kYWwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIOyCrOyaqeyekCDroZzqt7jslYTsm4NcclxuICAgICAgICBsb2dvdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICAgICAgICBib2R5LnJlbW92ZUNoaWxkKG1vZGFsKTtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnI2xvZ2luJzsgLy8g7KO87IaMIOyXheuNsOydtO2KuFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuLy8g7IOB7ZKIIOuqqOuLrFxyXG5leHBvcnQgZnVuY3Rpb24gcHJvZHVjdE1vZGFsKHByb2R1Y3RJZCkge1xyXG4gICAgY29uc3QgbXlBY2NvdW50TmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2NvdW50bmFtZScpO1xyXG4gICAgbGV0IGFjY291bnROYW1lID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJ2FjY291bnRuYW1lPScpWzFdO1xyXG4gICAgYWNjb3VudE5hbWUgPSBhY2NvdW50TmFtZSA9PSBudWxsID8gbXlBY2NvdW50TmFtZSA6IGFjY291bnROYW1lO1xyXG4gICAgLy8g7IKs7Jqp7J6QIOuzuOyduOydvCDqsr3smrAg7IOB7ZKIIOyCreygnFxyXG4gICAgaWYgKG15QWNjb3VudE5hbWUgPT09IGFjY291bnROYW1lKSB7XHJcbiAgICAgICAgbW9kYWwuaW5uZXJIVE1MID0gbW9kYWxQcm9kdWN0O1xyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpO1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RNb2RhbENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RNb2RhbCAubW9kYWxDbG9zZScpO1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3REZWxldGVNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0TW9kYWwgLm1vZGFsQnRuMScpO1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RNb2RhbCAubW9kYWxCdG4zJyk7XHJcbiAgICAgICAgLy8g7IOB7ZKIIOuqqOuLrCDssL0g64ur6riwXHJcbiAgICAgICAgcHJvZHVjdE1vZGFsQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQobW9kYWwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIOyDge2SiCDsgq3soJwg66qo64usIO2ZnOyEse2ZlFxyXG4gICAgICAgIHByb2R1Y3REZWxldGVNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbW9kYWwuaW5uZXJIVE1MID0gbW9kYWxEZWxldGVBbGVydDtcclxuICAgICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XHJcbiAgICAgICAgICAgIC8vIOyDge2SiCDsgq3soJwg66qo64usIOuLq+q4sFxyXG4gICAgICAgICAgICBjb25zdCBhbGVydENhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxBbGVydCAuY2FuY2VsQnRuJyk7XHJcbiAgICAgICAgICAgIGFsZXJ0Q2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYm9keS5yZW1vdmVDaGlsZChtb2RhbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyDsg4Htkogg7IKt7KCcXHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3REZWxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxlcnRCdG5Db250ZW50IC5kZWxCdG4nKTtcclxuICAgICAgICAgICAgcHJvZHVjdERlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZVByb2R1Y3QocHJvZHVjdElkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8g7YyQ66ekIOyDge2SiCDsl7DqsrBcclxuICAgICAgICBwcm9kdWN0TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnI2Vycm9yJzsgLy8g7KO87IaMIOyXheuNsOydtO2KuFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgLy8g64uk66W4IOyCrOyaqeyekCDsg4Htkojsnbwg6rK97JqwIOyDge2SiCDtjpjsnbTsp4DroZwg7Jew6rKwXHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnI2Vycm9yJztcclxuICAgIH1cclxufVxyXG4vLyDtjJDrp6Qg7IOB7ZKIIOyCreygnFxyXG5mdW5jdGlvbiBkZWxldGVQcm9kdWN0KHByb2R1Y3RJZCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9hcGkubWFuZGFyaW4ud2VuaXYuY28ua3InO1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Rva2VuJyk7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzUHJvZmlsZVByb2R1Y3QgPSB5aWVsZCBmZXRjaChgJHt1cmx9L3Byb2R1Y3QvJHtwcm9kdWN0SWR9YCwgc2V0dGluZyk7XHJcbiAgICAgICAgICAgIGlmIChyZXNQcm9maWxlUHJvZHVjdC5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICBib2R5LnJlbW92ZUNoaWxkKG1vZGFsKTtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RJZCA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbi8vIOyCrOyaqeyekOyXkCDrlLDrnbwg6rKM7Iuc66y8IOuqqOuLrCDqtaztmIRcclxuZXhwb3J0IGZ1bmN0aW9uIGNsaWNrVXNlck1vZGFsKGV2ZW50KSB7XHJcbiAgICB2YXIgX2EsIF9iO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IG15QWNjb3VudE5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjb3VudG5hbWUnKTtcclxuICAgIGxldCBhY2NvdW50TmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCdhY2NvdW50bmFtZT0nKVsxXTtcclxuICAgIGFjY291bnROYW1lID0gYWNjb3VudE5hbWUgPT0gbnVsbCA/IG15QWNjb3VudE5hbWUgOiBhY2NvdW50TmFtZTtcclxuICAgIGNvbnN0IHBvc3RVc2VyTmFtZSA9IChfYiA9IChfYSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucHJldmlvdXNTaWJsaW5nKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnJlcGxhY2UoJ0AnLCAnJyk7XHJcbiAgICBjb25zdCBwb3N0aW5nSWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5rZXk7XHJcbiAgICAvLyDsgqzsmqnsnpAg67O47J24IO2UhOuhnO2VhOyduCDqsr3smrAsIOqyjOyLnOusvCDsgq3soJwg66qo64usXHJcbiAgICBpZiAocG9zdFVzZXJOYW1lID09PSBteUFjY291bnROYW1lIHx8IGFjY291bnROYW1lID09PSBudWxsKSB7XHJcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XHJcbiAgICAgICAgbW9kYWwuaW5uZXJIVE1MID0gbW9kYWxQb3N0O1xyXG4gICAgICAgIGNvbnN0IHBvc3REZWxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zdE1vZGFsIC5tb2RhbEJ0bjEnKTtcclxuICAgICAgICBjb25zdCBwb3N0RWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0TW9kYWwgLm1vZGFsQnRuMicpO1xyXG4gICAgICAgIGNvbnN0IG1vZGFsQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zdE1vZGFsIC5tb2RhbENsb3NlJyk7XHJcbiAgICAgICAgLy8g66qo64us7LC9IOuLq+q4sCDrsoTtirwg7YG066atIOyLnCDrqqjri6zssL0g64ur6riwXHJcbiAgICAgICAgbW9kYWxDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgYm9keS5yZW1vdmVDaGlsZChtb2RhbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8g6rKM7Iuc66y8IOyCreygnCDrqqjri6wg7Zmc7ISx7ZmUXHJcbiAgICAgICAgcG9zdERlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbW9kYWwuaW5uZXJIVE1MID0gbW9kYWxEZWxldGVBbGVydDtcclxuICAgICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XHJcbiAgICAgICAgICAgIC8vIOqyjOyLnOusvCDsgq3soJwg66qo64usIOuLq+q4sFxyXG4gICAgICAgICAgICBjb25zdCBhbGVydENhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxBbGVydCAuY2FuY2VsQnRuJyk7XHJcbiAgICAgICAgICAgIGFsZXJ0Q2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYm9keS5yZW1vdmVDaGlsZChtb2RhbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyDqsozsi5zrrLwg7IKt7KCcXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc3REZWxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsQWxlcnQgLmRlbEJ0bicpO1xyXG4gICAgICAgICAgICBwb3N0RGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYm9keS5yZW1vdmVDaGlsZChtb2RhbCk7XHJcbiAgICAgICAgICAgICAgICBkZWxldGVQb3N0KHBvc3RpbmdJZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIOqyjOyLnOusvCDsiJjsoJXtjpjsnbTsp4DroZwg7J2064+ZXHJcbiAgICAgICAgcG9zdEVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gYCNwb3N0VXBsb2FkXFw/cG9zdGlkPSR7cG9zdGluZ0lkfWA7XHJcbiAgICAgICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQobW9kYWwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgLy8g64uk66W4IOyCrOyaqeyekCDtlITroZztlYTsnbgg6rK97JqwLCDqsozsi5zrrLwg7Iug6rOgIOuqqOuLrFxyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpO1xyXG4gICAgICAgIG1vZGFsLmlubmVySFRNTCA9IG1vZGFsUmVwb3J0O1xyXG4gICAgICAgIGNvbnN0IG1vZGFsQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVwb3J0TW9kYWwgLm1vZGFsQ2xvc2UnKTtcclxuICAgICAgICBjb25zdCByZXBvcnRNb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXBvcnRNb2RhbCAubW9kYWxCdG4xJyk7XHJcbiAgICAgICAgLy8g66qo64us7LC9IOuLq+q4sFxyXG4gICAgICAgIG1vZGFsQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQobW9kYWwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIOyLoOqzoCDrqqjri6wg7Zmc7ISx7ZmUXHJcbiAgICAgICAgcmVwb3J0TW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1vZGFsLmlubmVySFRNTCA9IHJlcG9ydEFsZXJ0O1xyXG4gICAgICAgICAgICBib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcclxuICAgICAgICAgICAgLy8g7Iug6rOgIOuqqOuLrCDruYTtmZzshLHtmZRcclxuICAgICAgICAgICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlcG9ydEFsZXJ0IC5jYW5jZWxCdG4nKTtcclxuICAgICAgICAgICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYm9keS5yZW1vdmVDaGlsZChtb2RhbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyDqsozsi5zrrLwg7Iug6rOgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcG9ydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXBvcnRBbGVydCAucmVwb3J0QnRuJyk7XHJcbiAgICAgICAgICAgIHJlcG9ydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlcG9ydFBvc3QocG9zdGluZ0lkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNsaWNrQ2hhdE1vZGFsKCkge1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XHJcbiAgICBtb2RhbC5pbm5lckhUTUwgPSBtb2RhbENoYXQ7XHJcbiAgICBjb25zdCBtb2RhbENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsQ2xvc2UnKTtcclxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbEJ0bicpO1xyXG4gICAgbW9kYWxDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBib2R5LnJlbW92ZUNoaWxkKG1vZGFsKTtcclxuICAgIH0pO1xyXG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQobW9kYWwpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyNjaGF0JzsgLy8g7KO87IaMIOyXheuNsOydtO2KuFxyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNsaWNrQ29tbWVudE1vZGFsKGV2ZW50KSB7XHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGNvbW1lbnRBY2NvdW50TmFtZSA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsb3Nlc3QoJ2FydGljbGUnKS5nZXRBdHRyaWJ1dGUoJ2tleScpO1xyXG4gICAgY29uc3QgY29tbWVudElkID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xvc2VzdCgnYXJ0aWNsZScpLmdldEF0dHJpYnV0ZSgnaWQnKTtcclxuICAgIC8vIOuzuOyduCDrjJPquIDsnbgg6rK97JqwIOyCreygnCDrqqjri6wg7Zmc7ISx7ZmUXHJcbiAgICBpZiAoY29tbWVudEFjY291bnROYW1lID09PSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjb3VudG5hbWUnKSkge1xyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpO1xyXG4gICAgICAgIG1vZGFsLmlubmVySFRNTCA9IG1vZGFsQ29tbWVudDtcclxuICAgICAgICBjb25zdCBwb3N0RGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvc3RNb2RhbCAubW9kYWxCdG4xJyk7XHJcbiAgICAgICAgY29uc3QgbW9kYWxDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0TW9kYWwgLm1vZGFsQ2xvc2UnKTtcclxuICAgICAgICAvLyDrqqjri6zssL0g64ur6riwIOuyhO2KvCDtgbTrpq0g7IucIOuqqOuLrOywvSDri6vquLBcclxuICAgICAgICBtb2RhbENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBib2R5LnJlbW92ZUNoaWxkKG1vZGFsKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyDrjJPquIAg7IKt7KCcIOuqqOuLrCDtmZzshLHtmZRcclxuICAgICAgICBwb3N0RGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBtb2RhbC5pbm5lckhUTUwgPSBtb2RhbERlbGV0ZUFsZXJ0O1xyXG4gICAgICAgICAgICBib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcclxuICAgICAgICAgICAgLy8g64yT6riAIOyCreygnCDrqqjri6wg64ur6riwXHJcbiAgICAgICAgICAgIGNvbnN0IGFsZXJ0Q2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbEFsZXJ0IC5jYW5jZWxCdG4nKTtcclxuICAgICAgICAgICAgYWxlcnRDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBib2R5LnJlbW92ZUNoaWxkKG1vZGFsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIOuMk+q4gCDsgq3soJxcclxuICAgICAgICAgICAgY29uc3QgcG9zdERlbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxBbGVydCAuZGVsQnRuJyk7XHJcbiAgICAgICAgICAgIHBvc3REZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBib2R5LnJlbW92ZUNoaWxkKG1vZGFsKTtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZUNvbW1lbnQoY29tbWVudElkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAvLyDri6Trpbgg7IKs656M7J2YIOuMk+q4gOyduCDqsr3smrAg7Iug6rOgIOuqqOuLrCDtmZzshLHtmZRcclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcclxuICAgICAgICBtb2RhbC5pbm5lckhUTUwgPSBtb2RhbFJlcG9ydDtcclxuICAgICAgICBjb25zdCBtb2RhbENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlcG9ydE1vZGFsIC5tb2RhbENsb3NlJyk7XHJcbiAgICAgICAgY29uc3QgcmVwb3J0TW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVwb3J0TW9kYWwgLm1vZGFsQnRuMScpO1xyXG4gICAgICAgIC8vIOuqqOuLrOywvSDri6vquLBcclxuICAgICAgICBtb2RhbENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBib2R5LnJlbW92ZUNoaWxkKG1vZGFsKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyDsi6Dqs6Ag66qo64usIO2ZnOyEse2ZlFxyXG4gICAgICAgIHJlcG9ydE1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBtb2RhbC5pbm5lckhUTUwgPSByZXBvcnRBbGVydDtcclxuICAgICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XHJcbiAgICAgICAgICAgIC8vIOyLoOqzoCDrqqjri6wg67mE7Zmc7ISx7ZmUXHJcbiAgICAgICAgICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXBvcnRBbGVydCAuY2FuY2VsQnRuJyk7XHJcbiAgICAgICAgICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQobW9kYWwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8g64yT6riAIOyLoOqzoFxyXG4gICAgICAgICAgICBjb25zdCByZXBvcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVwb3J0QWxlcnQgLnJlcG9ydEJ0bicpO1xyXG4gICAgICAgICAgICByZXBvcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBib2R5LnJlbW92ZUNoaWxkKG1vZGFsKTtcclxuICAgICAgICAgICAgICAgIHJlcG9ydENvbW1lbnQoY29tbWVudElkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuLy8g7IKs7Jqp7J6QIOuhnOq3uOyVhOybgyDrqqjri6xcclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGxvZ291dE1vZGFsKGhlYWRlck1vZGFsKSB7XHJcbi8vICAgaGVhZGVyTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2dvdXRNb2RhbCgpKTtcclxuLy8gfVxyXG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IHRpbWVGb3JUb2RheSB9IGZyb20gJy4uL3V0aWxzL2NvbW1vbic7XHJcbmltcG9ydCB7IGNsaWNrSGVhcnQgfSBmcm9tICcuL2hlYXJ0QnRuJztcclxuaW1wb3J0IHsgY2xpY2tDb21tZW50TW9kYWwgfSBmcm9tICcuL21vZGFsJztcclxuZXhwb3J0IGZ1bmN0aW9uIHBvc3RJbnB1dChldmVudCkge1xyXG4gICAgY29uc3QgcG9zdENoYXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bvc3RDaGF0Q29udGVudCcpO1xyXG4gICAgY29uc3QgcG9zdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0QnRuJyk7XHJcbiAgICAvLyBlbnRlciDsi5zsl5AgY29tbWVudCDsnoXroKVcclxuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICBzdWJtaXRDb21tZW50KGV2ZW50KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmIChwb3N0Q2hhdEZvcm0udmFsdWUgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIHBvc3RCdXR0b24uc3R5bGUuY29sb3IgPSAnIzYxNjdhYyc7XHJcbiAgICAgICAgICAgIHBvc3RCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHBvc3RCdXR0b24uc3R5bGUuY29sb3IgPSAnI2RiZGJkYic7XHJcbiAgICAgICAgICAgIHBvc3RCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLyDtlITroZztlYQsIOqyjOyLnOq4gCwg64yT6riAIOuNsOydtO2EsCDrtojrn6zsmKTquLBcclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclBvc3QoKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9ICdodHRwczovL2FwaS5tYW5kYXJpbi53ZW5pdi5jby5rcic7XHJcbiAgICAgICAgY29uc3QgcG9zdElkID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJ3Bvc3RpZD0nKVsxXTtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUb2tlbicpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIGZldGNoKGAke3VybH0vcG9zdC8ke3Bvc3RJZH1gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QganNvbiA9IHlpZWxkIHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc3RJbmZvID0ganNvbi5wb3N0O1xyXG4gICAgICAgICAgICBjb25zdCBwcm9maWxlSW1nID0gcG9zdEluZm8uYXV0aG9yLmltYWdlO1xyXG4gICAgICAgICAgICBjb25zdCB1c2VyTmFtZSA9IHBvc3RJbmZvLmF1dGhvci51c2VybmFtZTtcclxuICAgICAgICAgICAgY29uc3QgYWNjb3VudE5hbWUgPSBwb3N0SW5mby5hdXRob3IuYWNjb3VudG5hbWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBwb3N0SW5mby5jb250ZW50O1xyXG4gICAgICAgICAgICBjb25zdCBqc29uSW1nID0gQXJyYXkuZnJvbShwb3N0SW5mby5pbWFnZS5zcGxpdCgnLCcpKTtcclxuICAgICAgICAgICAgY29uc3QgaGVhcnRDb3VudCA9IHBvc3RJbmZvLmhlYXJ0Q291bnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbW1lbnRDb3VudCA9IHBvc3RJbmZvLmNvbW1lbnRDb3VudDtcclxuICAgICAgICAgICAgY29uc3QgY3JlYXRlZEF0ID0gdGltZUZvclRvZGF5KHBvc3RJbmZvLmNyZWF0ZWRBdCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zdEJ0bicpO1xyXG4gICAgICAgICAgICBwb3N0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgcG9zdEJ1dHRvbi5zdHlsZS5jb2xvciA9ICcjZGJkYmRiJztcclxuICAgICAgICAgICAgLy8g7ZSE66Gc7ZWEXHJcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VySXRlbScpO1xyXG4gICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zdENvbnRlbnQnKTtcclxuICAgICAgICAgICAgY29uc3QgdXNlckJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICAgICAgY29uc3QgdXNlclByb2ZpbGVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICBjb25zdCB1c2VySW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjb25zdCB1c2VyTmlja25hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHJvbmcnKTtcclxuICAgICAgICAgICAgY29uc3QgdXNlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY29uc3QgdXNlck1zZ0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIHVzZXJCb3guY2xhc3NOYW1lID0gJ3VzZXJCb3gnO1xyXG4gICAgICAgICAgICB1c2VyUHJvZmlsZUltYWdlLmNsYXNzTmFtZSA9ICd1c2VyUHJvZmlsZUltYWdlJztcclxuICAgICAgICAgICAgdXNlckluZm8uY2xhc3NOYW1lID0gJ3VzZXJJbmZvJztcclxuICAgICAgICAgICAgdXNlck5pY2tuYW1lLmNsYXNzTmFtZSA9ICd1c2VyTmlja25hbWUnO1xyXG4gICAgICAgICAgICB1c2VyVGV4dC5jbGFzc05hbWUgPSAndXNlclRleHQnO1xyXG4gICAgICAgICAgICB1c2VyTXNnQ29udGVudC5jbGFzc05hbWUgPSAndXNlck1zZ0NvbnRlbnQgdXNlclN0YXR1c01zZyc7XHJcbiAgICAgICAgICAgIHVzZXJCb3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGAjcHJvZmlsZVxcP2FjY291bnRuYW1lPSR7YWNjb3VudE5hbWV9YDsgLy8g7KO87IaMIOyXheuNsOydtO2KuFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdXNlclByb2ZpbGVJbWFnZS5zcmMgPSBwcm9maWxlSW1nLmxlbmd0aCA8PSAyMCA/IGAke3VybH0vJHtwcm9maWxlSW1nfWAgOiBwcm9maWxlSW1nO1xyXG4gICAgICAgICAgICB1c2VyTmlja25hbWUuaW5uZXJUZXh0ID0gdXNlck5hbWU7XHJcbiAgICAgICAgICAgIHVzZXJNc2dDb250ZW50LmlubmVyVGV4dCA9IGBAJHthY2NvdW50TmFtZX1gO1xyXG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodXNlckJveCk7XHJcbiAgICAgICAgICAgIHVzZXJCb3guYXBwZW5kQ2hpbGQodXNlclByb2ZpbGVJbWFnZSk7XHJcbiAgICAgICAgICAgIHVzZXJCb3guYXBwZW5kQ2hpbGQodXNlckluZm8pO1xyXG4gICAgICAgICAgICB1c2VySW5mby5hcHBlbmRDaGlsZCh1c2VyTmlja25hbWUpO1xyXG4gICAgICAgICAgICB1c2VySW5mby5hcHBlbmRDaGlsZCh1c2VyVGV4dCk7XHJcbiAgICAgICAgICAgIHVzZXJUZXh0LmFwcGVuZENoaWxkKHVzZXJNc2dDb250ZW50KTtcclxuICAgICAgICAgICAgLy8g6rKM7Iuc6riAXHJcbiAgICAgICAgICAgIGNvbnN0IGpzb25JbWdUYWdzID0ganNvbkltZy5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICAgICA/IGBcclxuICAgICAgIDxkaXYgY2xhc3M9XCJwb3N0RGV0YWlsZUltZ0NvbnRlbnRcIj5cclxuICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgIDxsaSBjbGFzcz1cInBvc3REZXRhaWxlSW1nQ29udGVudEZsZXhcIj5cclxuICAgICAgICAgICAke2pzb25JbWcubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uc3BsaXQoJy4nKVsxXSA9PT0gJ2FwaScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSA9IGl0ZW0ucmVwbGFjZSgnaHR0cHM6Ly9tYW5kYXJpbi5hcGkud2VuaXYuY28ua3IvJywgJ2h0dHBzOi8vYXBpLm1hbmRhcmluLndlbml2LmNvLmtyLycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxpbWcgc3JjPSR7aXRlbX0gYWx0PVwi6rKM7Iuc66y8IOydtOuvuOyngFwiIC8+YDtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICAgICAgICAgIDogJyc7XHJcbiAgICAgICAgICAgIGxldCBoZWFydFN0YXR1cztcclxuICAgICAgICAgICAgaWYgKGpzb24ucG9zdC5oZWFydGVkKSB7XHJcbiAgICAgICAgICAgICAgICBoZWFydFN0YXR1cyA9ICcubGlrZUJ0bi5vbic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBoZWFydFN0YXR1cyA9ICcubGlrZUJ0bic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgcG9zdFRpdGxlSGVhZGluZzRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRQRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIHBvc3RUaXRsZUhlYWRpbmc0RWwuY2xhc3NMaXN0LmFkZCgnaXInKTtcclxuICAgICAgICAgICAgcG9zdFRpdGxlSGVhZGluZzRFbC5pbm5lclRleHQgPSAn6rKM7Iuc6riAIOuCtOyaqSc7XHJcbiAgICAgICAgICAgIGNvbnRlbnRQRWwuaW5uZXJUZXh0ID0gYCR7Y29udGVudH1gO1xyXG4gICAgICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHBvc3RUaXRsZUhlYWRpbmc0RWwpO1xyXG4gICAgICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGNvbnRlbnRQRWwpO1xyXG4gICAgICAgICAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGpzb25JbWdUYWdzTm9kZSA9IHJhbmdlLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChqc29uSW1nVGFncyk7XHJcbiAgICAgICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoanNvbkltZ1RhZ3NOb2RlKTtcclxuICAgICAgICAgICAgY29uc3QgcG9zdEJ0bkRpdkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYXJ0QnRuRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgY29uc3QgbGlrZVRleHRTcGFuRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpa2VDb3VudFNwYW5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgY29uc3QgY29tbWVudEJ0bkRpdkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbW1lbnRDb3VudFNwYW5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgY29uc3QgcG9zdERhdGVTdHJvbmdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0cm9uZycpO1xyXG4gICAgICAgICAgICBwb3N0QnRuRGl2RWwuY2xhc3NMaXN0LmFkZCgncG9zdEJ0bkNvbnRlbnQnKTtcclxuICAgICAgICAgICAgaGVhcnRCdG5FbC5jbGFzc0xpc3QuYWRkKGAke2hlYXJ0U3RhdHVzfWApO1xyXG4gICAgICAgICAgICBsaWtlVGV4dFNwYW5FbC5jbGFzc0xpc3QuYWRkKCdpcicpO1xyXG4gICAgICAgICAgICBsaWtlVGV4dFNwYW5FbC5pbm5lclRleHQgPSAn7KKL7JWE7JqUIOuyhO2KvCc7XHJcbiAgICAgICAgICAgIGxpa2VDb3VudFNwYW5FbC5jbGFzc0xpc3QuYWRkKCdsaWtlQ291bnQnKTtcclxuICAgICAgICAgICAgbGlrZUNvdW50U3BhbkVsLmlubmVyVGV4dCA9IGAke2hlYXJ0Q291bnR9YDtcclxuICAgICAgICAgICAgY29tbWVudEJ0bkRpdkVsLmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnRCdG4nKTtcclxuICAgICAgICAgICAgY29tbWVudENvdW50U3BhbkVsLmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnRDb3VudCcpO1xyXG4gICAgICAgICAgICBjb21tZW50Q291bnRTcGFuRWwuaW5uZXJUZXh0ID0gYCR7Y29tbWVudENvdW50fWA7XHJcbiAgICAgICAgICAgIHBvc3REYXRlU3Ryb25nRWwuY2xhc3NMaXN0LmFkZCgncG9zdERhdGUnKTtcclxuICAgICAgICAgICAgcG9zdERhdGVTdHJvbmdFbC5pbm5lclRleHQgPSBgJHtjcmVhdGVkQXR9YDtcclxuICAgICAgICAgICAgY29tbWVudEJ0bkRpdkVsLmFwcGVuZENoaWxkKGNvbW1lbnRDb3VudFNwYW5FbCk7XHJcbiAgICAgICAgICAgIGhlYXJ0QnRuRWwuYXBwZW5kQ2hpbGQobGlrZVRleHRTcGFuRWwpO1xyXG4gICAgICAgICAgICBoZWFydEJ0bkVsLmFwcGVuZENoaWxkKGxpa2VDb3VudFNwYW5FbCk7XHJcbiAgICAgICAgICAgIHBvc3RCdG5EaXZFbC5hcHBlbmRDaGlsZChoZWFydEJ0bkVsKTtcclxuICAgICAgICAgICAgcG9zdEJ0bkRpdkVsLmFwcGVuZENoaWxkKGNvbW1lbnRCdG5EaXZFbCk7XHJcbiAgICAgICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQocG9zdEJ0bkRpdkVsKTtcclxuICAgICAgICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChwb3N0RGF0ZVN0cm9uZ0VsKTtcclxuICAgICAgICAgICAgY29uc3QgaGVhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zdEJ0bkNvbnRlbnQgYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGhlYXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIZWFydCk7XHJcbiAgICAgICAgICAgIC8vIOuMk+q4gFxyXG4gICAgICAgICAgICBjb25zdCBjb21tZW50U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0Q29tbWVudEJveCcpO1xyXG4gICAgICAgICAgICBjb25zdCB7IGNvbW1lbnRzIH0gPSB5aWVsZCBnZXRDb21tZW50RGV0YWlsKCk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgY29tbWVudCBvZiBjb21tZW50cykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29tbWVudEFydGljbGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbW1lbnRUaXRsZUhlYWRpbmczRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlclNlY3Rpb25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJMaXN0RGl2RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJJdGVtRGl2RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJCb3hEaXZFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZmlsZUltZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyQ29tbWVudEluZm9EaXZFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlck5pY2tOYW1lU3Ryb25nRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHJvbmcnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbW1lbnRUaW1lU3Ryb25nRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHJvbmcnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1vcmVNb2RhbEJ0bkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb2RhbFRleHRTcGFuRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb21tZW50Q29udGVudFNlY3Rpb25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbW1lbnRUaXRsZUhlYWRpbmc0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29tbWVudENvbnRlbnRQRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50QXJ0aWNsZUVsLmNsYXNzTGlzdC5hZGQoJ3Bvc3QnKTtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRBcnRpY2xlRWwuY2xhc3NMaXN0LmFkZCgncG9zdENvbW1lbnRDb250ZW50Jyk7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50QXJ0aWNsZUVsLmlkID0gYCR7Y29tbWVudC5pZH1gO1xyXG4gICAgICAgICAgICAgICAgY29tbWVudEFydGljbGVFbC5zZXRBdHRyaWJ1dGUoJ2tleScsIGAke2NvbW1lbnQuYXV0aG9yLmFjY291bnRuYW1lfWApO1xyXG4gICAgICAgICAgICAgICAgY29tbWVudFRpdGxlSGVhZGluZzNFbC5jbGFzc0xpc3QuYWRkKCdpcicpO1xyXG4gICAgICAgICAgICAgICAgY29tbWVudFRpdGxlSGVhZGluZzNFbC5pbm5lclRleHQgPSAn6rKM7Iuc6riAIOuMk+q4gCc7XHJcbiAgICAgICAgICAgICAgICB1c2VyTGlzdERpdkVsLmNsYXNzTGlzdC5hZGQoJ3VzZXJMaXN0Jyk7XHJcbiAgICAgICAgICAgICAgICB1c2VySXRlbURpdkVsLmNsYXNzTGlzdC5hZGQoJ3VzZXJJdGVtJyk7XHJcbiAgICAgICAgICAgICAgICB1c2VyQm94RGl2RWwuY2xhc3NMaXN0LmFkZCgndXNlckJveCcpO1xyXG4gICAgICAgICAgICAgICAgcHJvZmlsZUltZ0VsLmNsYXNzTGlzdC5hZGQoJ3VzZXJQcm9maWxlSW1hZ2UnKTtcclxuICAgICAgICAgICAgICAgIHByb2ZpbGVJbWdFbC5jbGFzc0xpc3QuYWRkKCdwb3N0VXNlclByb2ZpbGUnKTtcclxuICAgICAgICAgICAgICAgIHByb2ZpbGVJbWdFbC5zcmMgPVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnQuYXV0aG9yLmltYWdlLmxlbmd0aCA8PSAyMCA/IGAke3VybH0vJHtjb21tZW50LmF1dGhvci5pbWFnZX1gIDogYCR7Y29tbWVudC5hdXRob3IuaW1hZ2V9YDtcclxuICAgICAgICAgICAgICAgIHByb2ZpbGVJbWdFbC5zZXRBdHRyaWJ1dGUoJ2FsdCcsICftlITroZztlYQg7J2066+47KeAJyk7XHJcbiAgICAgICAgICAgICAgICB1c2VyQ29tbWVudEluZm9EaXZFbC5jbGFzc0xpc3QuYWRkKCd1c2VyQ29tbWVudEluZm8nKTtcclxuICAgICAgICAgICAgICAgIHVzZXJOaWNrTmFtZVN0cm9uZ0VsLmNsYXNzTGlzdC5hZGQoJ3VzZXJOaWNrbmFtZScpO1xyXG4gICAgICAgICAgICAgICAgdXNlck5pY2tOYW1lU3Ryb25nRWwuY2xhc3NMaXN0LmFkZCgncG9zdFVzZXJOaWNrTmFtZScpO1xyXG4gICAgICAgICAgICAgICAgdXNlck5pY2tOYW1lU3Ryb25nRWwuaW5uZXJUZXh0ID0gYCR7Y29tbWVudC5hdXRob3IudXNlcm5hbWV9YDtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRUaW1lU3Ryb25nRWwuY2xhc3NMaXN0LmFkZCgncG9zdFRpbWUnKTtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRUaW1lU3Ryb25nRWwuaW5uZXJUZXh0ID0gYOKImSAke3RpbWVGb3JUb2RheShjb21tZW50LmNyZWF0ZWRBdCl9YDtcclxuICAgICAgICAgICAgICAgIG1vcmVNb2RhbEJ0bkVsLmNsYXNzTGlzdC5hZGQoJ21vcmVCdG4nKTtcclxuICAgICAgICAgICAgICAgIG1vcmVNb2RhbEJ0bkVsLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbkNsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICBtb2RhbFRleHRTcGFuRWwuY2xhc3NMaXN0LmFkZCgnaXInKTtcclxuICAgICAgICAgICAgICAgIG1vZGFsVGV4dFNwYW5FbC5pbm5lclRleHQgPSAn64yT6riAIOuqqOuLrCDrsoTtirwnO1xyXG4gICAgICAgICAgICAgICAgY29tbWVudENvbnRlbnRTZWN0aW9uRWwuY2xhc3NMaXN0LmFkZCgncG9zdENvbnRlbnQnKTtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRDb250ZW50U2VjdGlvbkVsLmNsYXNzTGlzdC5hZGQoJ3Bvc3RDb21tZW50Jyk7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50VGl0bGVIZWFkaW5nNEVsLmNsYXNzTGlzdC5hZGQoJ2lyJyk7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50VGl0bGVIZWFkaW5nNEVsLmlubmVyVGV4dCA9ICfrjJPquIAg64K07JqpJztcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRDb250ZW50UEVsLmlubmVyVGV4dCA9IGAke2NvbW1lbnQuY29udGVudH1gO1xyXG4gICAgICAgICAgICAgICAgdXNlckNvbW1lbnRJbmZvRGl2RWwuYXBwZW5kQ2hpbGQodXNlck5pY2tOYW1lU3Ryb25nRWwpO1xyXG4gICAgICAgICAgICAgICAgdXNlckNvbW1lbnRJbmZvRGl2RWwuYXBwZW5kQ2hpbGQoY29tbWVudFRpbWVTdHJvbmdFbCk7XHJcbiAgICAgICAgICAgICAgICB1c2VyQm94RGl2RWwuYXBwZW5kQ2hpbGQocHJvZmlsZUltZ0VsKTtcclxuICAgICAgICAgICAgICAgIHVzZXJCb3hEaXZFbC5hcHBlbmRDaGlsZCh1c2VyQ29tbWVudEluZm9EaXZFbCk7XHJcbiAgICAgICAgICAgICAgICB1c2VyQm94RGl2RWwuYXBwZW5kQ2hpbGQobW9yZU1vZGFsQnRuRWwpO1xyXG4gICAgICAgICAgICAgICAgbW9yZU1vZGFsQnRuRWwuYXBwZW5kQ2hpbGQobW9kYWxUZXh0U3BhbkVsKTtcclxuICAgICAgICAgICAgICAgIHVzZXJJdGVtRGl2RWwuYXBwZW5kQ2hpbGQodXNlckJveERpdkVsKTtcclxuICAgICAgICAgICAgICAgIHVzZXJMaXN0RGl2RWwuYXBwZW5kQ2hpbGQodXNlckl0ZW1EaXZFbCk7XHJcbiAgICAgICAgICAgICAgICB1c2VyU2VjdGlvbkVsLmFwcGVuZENoaWxkKHVzZXJMaXN0RGl2RWwpO1xyXG4gICAgICAgICAgICAgICAgY29tbWVudENvbnRlbnRTZWN0aW9uRWwuYXBwZW5kQ2hpbGQoY29tbWVudFRpdGxlSGVhZGluZzRFbCk7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50Q29udGVudFNlY3Rpb25FbC5hcHBlbmRDaGlsZChjb21tZW50Q29udGVudFBFbCk7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50QXJ0aWNsZUVsLmFwcGVuZENoaWxkKGNvbW1lbnRUaXRsZUhlYWRpbmczRWwpO1xyXG4gICAgICAgICAgICAgICAgY29tbWVudEFydGljbGVFbC5hcHBlbmRDaGlsZCh1c2VyU2VjdGlvbkVsKTtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRBcnRpY2xlRWwuYXBwZW5kQ2hpbGQoY29tbWVudENvbnRlbnRTZWN0aW9uRWwpO1xyXG4gICAgICAgICAgICAgICAgY29tbWVudFNlY3Rpb24uYXBwZW5kQ2hpbGQoY29tbWVudEFydGljbGVFbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9yZUJ0bi5idXR0b25DbGljaycpO1xyXG4gICAgICAgICAgICBbXS5mb3JFYWNoLmNhbGwobW9kYWwsIGZ1bmN0aW9uIChtb2RhbCkge1xyXG4gICAgICAgICAgICAgICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0NvbW1lbnRNb2RhbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG4vLyDsg4HshLgg64yT6riAIOu2iOufrOyYpOq4sFxyXG5mdW5jdGlvbiBnZXRDb21tZW50RGV0YWlsKCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUb2tlbicpO1xyXG4gICAgICAgIGNvbnN0IHVybCA9ICdodHRwczovL2FwaS5tYW5kYXJpbi53ZW5pdi5jby5rcic7XHJcbiAgICAgICAgY29uc3QgcG9zdElkID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJ3Bvc3RpZD0nKVsxXTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBmZXRjaChgJHt1cmx9L3Bvc3QvJHtwb3N0SWR9L2NvbW1lbnRzYCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuLy8g66Gc6re47J24IOycoOyggCDsoJXrs7RcclxuZXhwb3J0IGZ1bmN0aW9uIGdldExvZ2luVXNlckluZm8oY29tbWVudFVzZXJQcm9maWxlKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9ICdodHRwczovL2FwaS5tYW5kYXJpbi53ZW5pdi5jby5rcic7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVG9rZW4nKTtcclxuICAgICAgICBjb25zdCBhY2NvdW50bmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2NvdW50bmFtZScpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIGZldGNoKGAke3VybH0vcHJvZmlsZS8ke2FjY291bnRuYW1lfWAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCB1c2VySnNvbiA9IHlpZWxkIHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbW1lbnRVc2VyUHJvZmlsZUltZyA9IHVzZXJKc29uLnByb2ZpbGUuaW1hZ2U7XHJcbiAgICAgICAgICAgIC8vIOuMk+q4gCDsnKDsoIAg7ZSE66Gc7ZWEIOydtOuvuOyngFxyXG4gICAgICAgICAgICBjb21tZW50VXNlclByb2ZpbGUuc3JjID1cclxuICAgICAgICAgICAgICAgIGNvbW1lbnRVc2VyUHJvZmlsZUltZy5sZW5ndGggPD0gMjAgPyBgJHt1cmx9LyR7Y29tbWVudFVzZXJQcm9maWxlSW1nfWAgOiBgJHtjb21tZW50VXNlclByb2ZpbGVJbWd9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbi8vIOuMk+q4gCDsnoXroKVcclxuZXhwb3J0IGZ1bmN0aW9uIHN1Ym1pdENvbW1lbnQoZXZlbnQpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9hcGkubWFuZGFyaW4ud2VuaXYuY28ua3InO1xyXG4gICAgICAgIGNvbnN0IHBvc3RJZCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCdwb3N0aWQ9JylbMV07XHJcbiAgICAgICAgY29uc3QgY29tbWVudElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bvc3RDaGF0Q29udGVudCcpO1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Rva2VuJyk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgZmV0Y2goYCR7dXJsfS9wb3N0LyR7cG9zdElkfS9jb21tZW50c2AsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogY29tbWVudElucHV0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbW1lbnRJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIiwiLy8gZmlsZUFyciAgOiBCbG9iICDqsJ3ssrTtmJUg7YyM7J28IOuNsOydtO2EsCDsoIDsnqVcclxuLy8gYXJySW1nTmFtZSA6IO2MjOydvOuqhSDsoIDsnqVcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5sZXQgZmlsZUFyciA9IFtdO1xyXG5sZXQgYXJySW1nTmFtZSA9IFtdO1xyXG4vLyDqsozsi5zrrLwg7IiY7KCVICwg7IOd7ISx7JeQIOuUsOuluCDtlajsiJgg7Iuk7ZaJXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja1Bvc3QocG9zdFVzZXJQcm9maWxlLCBwb3N0SW1nQ29udGFpbmVyLCBwb3N0VXBsb2FkVHh0LCBwb3N0VXBsb2FkQnRuKSB7XHJcbiAgICBjb25zdCBwb3N0aWQgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zcGxpdCgnP3Bvc3RpZD0nKVsxXTtcclxuICAgIGZpbGVBcnIgPSBbXTtcclxuICAgIC8vIOqyjOyLnOusvCDsiJjsoJUgUFVUIOyalOyyrVxyXG4gICAgaWYgKHBvc3RpZCkge1xyXG4gICAgICAgIGdldExvZ2luVXNlckluZm8ocG9zdFVzZXJQcm9maWxlKTtcclxuICAgICAgICBnZXRQb3N0KHBvc3RpZCwgcG9zdFVwbG9hZFR4dCwgcG9zdEltZ0NvbnRhaW5lcik7XHJcbiAgICAgICAgcG9zdFVwbG9hZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgZWRpdFBvc3QocG9zdGlkLCBwb3N0VXBsb2FkVHh0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHBvc3RVcGxvYWRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjcmVhdGVQb3N0KCkpO1xyXG4gICAgICAgIGdldExvZ2luVXNlckluZm8ocG9zdFVzZXJQcm9maWxlKTtcclxuICAgIH1cclxufVxyXG4vLyDroZzqt7jsnbgg7Jyg7KCAIOygleuztFxyXG5mdW5jdGlvbiBnZXRMb2dpblVzZXJJbmZvKHByb2ZpbGVJbWdFbCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUb2tlbicpO1xyXG4gICAgICAgIGNvbnN0IGFjY291bnRuYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY291bnRuYW1lJyk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vYXBpLm1hbmRhcmluLndlbml2LmNvLmtyJztcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBmZXRjaChgJHt1cmx9L3Byb2ZpbGUvJHthY2NvdW50bmFtZX1gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgdXNlckpzb24gPSB5aWVsZCByZXMuanNvbigpO1xyXG4gICAgICAgICAgICBwcm9maWxlSW1nRWwuc3JjID1cclxuICAgICAgICAgICAgICAgIHVzZXJKc29uLnByb2ZpbGUuaW1hZ2UubGVuZ3RoIDw9IDIwID8gYCR7dXJsfS8ke3VzZXJKc29uLnByb2ZpbGUuaW1hZ2V9YCA6IGAke3VzZXJKc29uLnByb2ZpbGUuaW1hZ2V9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbi8vIOyXheuhnOuTnCDsgqzsp4Qg66+466as67O06riwLCDsnbTrr7jsp4Ag7IKt7KCcIOydtOuypO2KuCDrk7HroZ1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRJbnB1dEZpbGUoZXZlbnQpIHtcclxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICBjb25zdCBmaWxlcyA9IGV2ZW50LnRhcmdldC5maWxlcztcclxuICAgIGNvbnN0IHBvc3RJbWdDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zdFVwbG9hZEltYWdlU2NyZWVuJyk7XHJcbiAgICBjb25zdCBwb3N0SW1nSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3N0SW1nSXRlbScpO1xyXG4gICAgY29uc3QgaW1nRmlsZU5hbWUgPSBmaWxlc1swXS5uYW1lO1xyXG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZXNbMF0pO1xyXG4gICAgZmlsZUFyci5wdXNoKGZpbGVzWzBdKTtcclxuICAgIGlmIChwb3N0SW1nSXRlbS5sZW5ndGggPT09IDMpIHtcclxuICAgICAgICBmaWxlQXJyLnNwbGljZShmaWxlQXJyLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIGFsZXJ0KCfsnbTrr7jsp4DripQg7LWc64yAIDPsnqUg7JeF66Gc65OcIOqwgOuKpe2VqeuLiOuLpC4nKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGltZ0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgaW1nSXRlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7cmVhZGVyLnJlc3VsdH0pYDtcclxuICAgICAgICAgICAgaW1nSXRlbS5jbGFzc05hbWUgPSAncG9zdEltZ0l0ZW0nO1xyXG4gICAgICAgICAgICBpbWdJdGVtLmRhdGFzZXQua2V5ID0gYCR7aW1nRmlsZU5hbWV9YDtcclxuICAgICAgICAgICAgcG9zdEltZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbWdJdGVtKTtcclxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGNsb3NlQnRuLmNsYXNzTmFtZSA9ICdwb3N0SW1nQ2xvc2VCdG4nO1xyXG4gICAgICAgICAgICBpbWdJdGVtLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcclxuICAgICAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldEltZyk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG4vLyDtlbTri7kg7J2066+47KeAIGZpbGVBcnLsl5DshJwg7IKt7KCcLCDsl4XroZzrk5wg7IKs7KeEIOuvuOumrOuztOq4sOyXkOyEnCDsgq3soJxcclxuZnVuY3Rpb24gZGVsZXRJbWcoZXZlbnQpIHtcclxuICAgIGNvbnN0IHBvc3RJbWdDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zdFVwbG9hZEltYWdlU2NyZWVuJyk7XHJcbiAgICBjb25zdCBpbWdJdGVtID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcbiAgICBjb25zdCB0YXJnZXRJbWdOYW1lID0gaW1nSXRlbS5kYXRhc2V0LmtleTtcclxuICAgIGNvbnN0IGRlZmF1bHRVcmwgPSAnaHR0cHM6Ly9hcGkubWFuZGFyaW4ud2VuaXYuY28ua3InO1xyXG4gICAgY29uc3QgZmlsZUxlbmd0aCA9IGZpbGVBcnIubGVuZ3RoO1xyXG4gICAgLy8g7JeF66Gc65OcIOyCrOynhCDrr7jrpqzrs7TquLDsl5DshJwg7IKt7KCcXHJcbiAgICBwb3N0SW1nQ29udGFpbmVyLnJlbW92ZUNoaWxkKGltZ0l0ZW0pO1xyXG4gICAgLy8g7YG066at7ZWcIO2DgOqyn+ydhCBmaWxlQXJyIOuwsOyXtOyXkOyEnCDsgq3soJxcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZUxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGZpbGVBcnJbaV0ubmFtZSA9PT0gdGFyZ2V0SW1nTmFtZSkge1xyXG4gICAgICAgICAgICBmaWxlQXJyLnNwbGljZShpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVMZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBhbHJlYWR5SW1nID0gaW1nSXRlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2Uuc3BsaXQoJ1wiJylbMV0ucmVwbGFjZShgJHtkZWZhdWx0VXJsfS9gLCAnJyk7XHJcbiAgICAgICAgaWYgKGZpbGVBcnJbaV0ubmFtZSA9PT0gYWxyZWFkeUltZykge1xyXG4gICAgICAgICAgICBmaWxlQXJyLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vIOydtOuvuOyngCDsl4XroZzrk5xcclxuZnVuY3Rpb24gdXBsb2FkSW1nKGZpbGVBcnIpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9hcGkubWFuZGFyaW4ud2VuaXYuY28ua3InO1xyXG4gICAgICAgIGFyckltZ05hbWUgPSBbXTtcclxuICAgICAgICBmaWxlQXJyLmZvckVhY2goZmlsZSA9PiB7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBmaWxlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKHVybCArICcvaW1hZ2UvdXBsb2FkZmlsZXMnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICByZXMuZm9yRWFjaCgoaW1hZ2VEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhcnJJbWdOYW1lLnB1c2goYCR7dXJsfS8ke2ltYWdlRGF0YS5maWxlbmFtZX1gKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGZpbGVBcnIgPSBbXTtcclxuICAgICAgICAgICAgcmV0dXJuIGFyckltZ05hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChfYSkge1xyXG4gICAgICAgICAgICBmaWxlQXJyLnBvcCgpO1xyXG4gICAgICAgICAgICBhbGVydCgn7J2066+47KeAIO2MjOydvOydgCDstZzrjIAgM+yepeq5jOyngOunjCDqsIDriqXtlanri4jri6QuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuLy8g7JeF66Gc65Oc67KE7Yq8IO2ZnOyEse2ZlFxyXG5leHBvcnQgZnVuY3Rpb24gcG9zdElucHV0KCkge1xyXG4gICAgY29uc3QgcG9zdFVwbG9hZFR4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0VXBsb2FkQ29tZW50VHh0Jyk7XHJcbiAgICBjb25zdCBwb3N0VXBsb2FkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlckJhckJ0bi5idXR0b25DbGljaycpO1xyXG4gICAgaWYgKHBvc3RVcGxvYWRUeHQudmFsdWUubGVuZ3RoID49IDEpIHtcclxuICAgICAgICBwb3N0VXBsb2FkQnRuLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgICAgcG9zdFVwbG9hZEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcG9zdFVwbG9hZEJ0bi5zdHlsZS5vcGFjaXR5ID0gJzAuMyc7XHJcbiAgICAgICAgcG9zdFVwbG9hZEJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcbn1cclxuLy8g6rKM7Iuc6riAIOyekeyEsSDtm4Qg642w7J207YSwIOyEnOuyhOyXkCDrs7TrgrTquLBcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBvc3QoKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIGNvbnN0IHBvc3RVcGxvYWRUeHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zdFVwbG9hZENvbWVudFR4dCcpO1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Rva2VuJyk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vYXBpLm1hbmRhcmluLndlbml2LmNvLmtyJztcclxuICAgICAgICBjb25zdCBjb250ZW50VGV4dCA9IHBvc3RVcGxvYWRUeHQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgaW1hZ2VzID0geWllbGQgdXBsb2FkSW1nKGZpbGVBcnIpO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIGZldGNoKGAke3VybH0vcG9zdGAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgcG9zdDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnRUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBpbWFnZXMuam9pbignLCcpLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QganNvbiA9IHlpZWxkIHJlcy5qc29uKCk7XHJcbiAgICAgICAgaWYgKGpzb24ucG9zdCkge1xyXG4gICAgICAgICAgICBmaWxlQXJyID0gW107XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyNwcm9maWxlJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG4vLyDqsozsi5zrrLwg7IiY7KCVIO2OmOydtOyngOyXkOyEnCB1cmzrpbwg7YyM7J2866GcIOuzgO2ZmFxyXG5mdW5jdGlvbiBjb252ZXJ0VVJMdG9GaWxlKHBvc3RJbWdBcnIsIGZpbGVBcnIpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBpbWdVcmwgb2YgcG9zdEltZ0Fycikge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKGltZ1VybCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB5aWVsZCByZXNwb25zZS5ibG9iKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4dCA9IGltZ1VybC5zcGxpdCgnLicpLnBvcCgpOyAvLyB1cmwg6rWs7KGw7JeQIOunnuqyjCDsiJjsoJXtlaAg6rKDXHJcbiAgICAgICAgICAgIGNvbnN0IGZpbGVuYW1lID0gaW1nVXJsLnNwbGl0KCcvJykucG9wKCk7IC8vIHVybCDqtazsobDsl5Ag66ee6rKMIOyImOygle2VoCDqsoNcclxuICAgICAgICAgICAgY29uc3QgbWV0YWRhdGEgPSB7IHR5cGU6IGBpbWFnZS8ke2V4dH1gIH07XHJcbiAgICAgICAgICAgIGZpbGVBcnIucHVzaChuZXcgRmlsZShbZGF0YV0sIGZpbGVuYW1lLCBtZXRhZGF0YSkpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbi8vIOqyjOyLnOusvCDsiJjsoJUg7Y6Y7J207KeA7JeQ7IScIOydtOuvuOyngCDrr7jrpqzrs7TquLAg67CPIOyCreygnCDrsoTtirwg7LaU6rCAXHJcbmZ1bmN0aW9uIHNldEltZyhwb3N0SW1nQ29udGFpbmVyLCBwb3N0SW1nQXJyLCBmaWxlQXJyKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIHlpZWxkIGNvbnZlcnRVUkx0b0ZpbGUocG9zdEltZ0FyciwgZmlsZUFycik7XHJcbiAgICAgICAgaWYgKHBvc3RJbWdBcnIubGVuZ3RoID49IDEgJiYgcG9zdEltZ0FyclswXSAhPT0gJycpIHtcclxuICAgICAgICAgICAgcG9zdEltZ0Fyci5tYXAoKGltYWdlU3JjKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbWdJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBpbWdJdGVtLmNsYXNzTmFtZSA9ICdwb3N0SW1nSXRlbSc7XHJcbiAgICAgICAgICAgICAgICBpbWdJdGVtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7aW1hZ2VTcmN9KWApO1xyXG4gICAgICAgICAgICAgICAgcG9zdEltZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbWdJdGVtKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgICAgICBjbG9zZUJ0bi5jbGFzc05hbWUgPSAncG9zdEltZ0Nsb3NlQnRuJztcclxuICAgICAgICAgICAgICAgIGltZ0l0ZW0uYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xyXG4gICAgICAgICAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldEltZyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbi8vIOyEnOuyhOyXkCDsoIDsnqXrkJwg6rKM7Iuc6riALCDsnbTrr7jsp4Ag6rCA7KC47Jik6riwXHJcbmZ1bmN0aW9uIGdldFBvc3QocG9zdGlkLCBwb3N0VXBsb2FkVHh0LCBwb3N0SW1nQ29udGFpbmVyKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Rva2VuJyk7XHJcbiAgICAgICAgY29uc3QgZGVmYXVsdFVybCA9ICdodHRwczovL2FwaS5tYW5kYXJpbi53ZW5pdi5jby5rcic7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgZmV0Y2goYCR7ZGVmYXVsdFVybH0vcG9zdC8ke3Bvc3RpZH1gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QganNvbiA9IHlpZWxkIHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBqc29uLnBvc3Q7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc3RDb250ZW50ID0gcG9zdC5jb250ZW50O1xyXG4gICAgICAgICAgICBjb25zdCBwb3N0SW1nQXJyID0gcG9zdC5pbWFnZS5zcGxpdCgnLCcpO1xyXG4gICAgICAgICAgICBwb3N0VXBsb2FkVHh0LnRleHRDb250ZW50ID0gcG9zdENvbnRlbnQ7XHJcbiAgICAgICAgICAgIHNldEltZyhwb3N0SW1nQ29udGFpbmVyLCBwb3N0SW1nQXJyLCBmaWxlQXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbi8vIOqyjOyLnOusvCDsiJjsoJVcclxuZnVuY3Rpb24gZWRpdFBvc3QocG9zdGlkLCBwb3N0VXBsb2FkVHh0KSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Rva2VuJyk7XHJcbiAgICAgICAgY29uc3QgZGVmYXVsdFVybCA9ICdodHRwczovL2FwaS5tYW5kYXJpbi53ZW5pdi5jby5rcic7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0SW1nID0geWllbGQgdXBsb2FkSW1nKGZpbGVBcnIpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIGZldGNoKGAke2RlZmF1bHRVcmx9L3Bvc3QvJHtwb3N0aWR9YCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICBwb3N0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHBvc3RVcGxvYWRUeHQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiByZXN1bHRJbWcuam9pbignLCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSB5aWVsZCByZXMuanNvbigpO1xyXG4gICAgICAgICAgICBmaWxlQXJyID0gW107XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyNwcm9maWxlJzsgLy8g7KO87IaMIOyXheuNsOydtO2KuFxyXG4gICAgICAgICAgICBpZiAoanNvbi50eXBlID09ICdlbnRpdHkudG9vLmxhcmdlJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihqc29uLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ+ydtOuvuOyngCDsmqnrn4nsnbQg64SI66y0IO2BveuLiOuLpC4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnI2Vycm9yJztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IHRpbWVGb3JUb2RheSB9IGZyb20gJy4uL3V0aWxzL2NvbW1vbic7XHJcbmltcG9ydCB7IGNsaWNrSGVhcnQgfSBmcm9tICcuL2hlYXJ0QnRuJztcclxuaW1wb3J0IHsgY2xpY2tVc2VyTW9kYWwsIHByb2R1Y3RNb2RhbCB9IGZyb20gJy4vbW9kYWwnO1xyXG5pbXBvcnQgeyBnZXRQcm9maWxlLCBnZXRQb3N0aW5nIH0gZnJvbSAnLi4vdXRpbHMvYXBpTW9kdWxlJztcclxuLy8g7ZSE66Gc7ZWEIOygleuztCDqsIDsoLjsmKTquLBcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2ZpbGVJbmZvKCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBjb25zdCBteUFjY291bnROYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY291bnRuYW1lJyk7XHJcbiAgICAgICAgbGV0IGFjY291bnROYW1lID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJ2FjY291bnRuYW1lPScpWzFdO1xyXG4gICAgICAgIGFjY291bnROYW1lID0gYWNjb3VudE5hbWUgPT0gbnVsbCA/IG15QWNjb3VudE5hbWUgOiBhY2NvdW50TmFtZTtcclxuICAgICAgICBjb25zdCB1c2VyUHJvZmlsZSA9IHlpZWxkIGdldFByb2ZpbGUoYWNjb3VudE5hbWUpO1xyXG4gICAgICAgIGlmICh1c2VyUHJvZmlsZS5hY2NvdW50bmFtZSA9PT0gbXlBY2NvdW50TmFtZSkge1xyXG4gICAgICAgICAgICBzZXRNeVByb2ZpbGUodXNlclByb2ZpbGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2V0WW91clByb2ZpbGUodXNlclByb2ZpbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHNldE15UHJvZmlsZSh1c2VyUHJvZmlsZSkge1xyXG4gICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vYXBpLm1hbmRhcmluLndlbml2LmNvLmtyJztcclxuICAgIGNvbnN0IGNyZWF0ZUVkaXRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBjcmVhdGVQcm9kdWN0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgcHJvZmlsZUxpbmtCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGluaycpO1xyXG4gICAgY3JlYXRlRWRpdExpbmsuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmaXhQcm9maWxlJyk7XHJcbiAgICBjcmVhdGVFZGl0TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGAjZWRpdFByb2ZpbGVgOyAvLyDso7zshowg7JeF642w7J207Yq4XHJcbiAgICB9KTtcclxuICAgIGNyZWF0ZUVkaXRMaW5rLmlubmVyVGV4dCA9ICftlITroZztlYQg7IiY7KCVJztcclxuICAgIHByb2ZpbGVMaW5rQnRuLmFwcGVuZChjcmVhdGVFZGl0TGluayk7XHJcbiAgICBjcmVhdGVQcm9kdWN0TGluay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FkZFBvc3RpbmcnKTtcclxuICAgIGNyZWF0ZVByb2R1Y3RMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyNwcm9kdWN0JztcclxuICAgIH0pO1xyXG4gICAgY3JlYXRlUHJvZHVjdExpbmsuaW5uZXJUZXh0ID0gJ+yDge2SiCDrk7HroZ0nO1xyXG4gICAgcHJvZmlsZUxpbmtCdG4uYXBwZW5kKGNyZWF0ZVByb2R1Y3RMaW5rKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5Qcm9maWxlQ29udGVudCAubXlJbWFnZScpLnNyYyA9XHJcbiAgICAgICAgdXNlclByb2ZpbGUuaW1hZ2UubGVuZ3RoIDw9IDIwID8gYCR7dXJsfS8ke3VzZXJQcm9maWxlLmltYWdlfWAgOiBgJHt1c2VyUHJvZmlsZS5pbWFnZX1gO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVJbmZvIC51c2VyTmFtZScpLmlubmVyVGV4dCA9IHVzZXJQcm9maWxlLnVzZXJuYW1lO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVJbmZvIC51c2VySWQnKS5pbm5lclRleHQgPSBgQCR7dXNlclByb2ZpbGUuYWNjb3VudG5hbWV9YDtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlSW5mbyAuaW50cm9kdWN0aW9uJykuaW5uZXJUZXh0ID0gdXNlclByb2ZpbGUuaW50cm87XHJcbiAgICBnZXRQcm9kdWN0TGlzdCh1c2VyUHJvZmlsZSk7XHJcbn1cclxuLy8g64uk66W4IOyCrOuejCDtlITroZztlYQg7Y6Y7J207KeAIOq1rO2YhFxyXG5mdW5jdGlvbiBzZXRZb3VyUHJvZmlsZSh1c2VyUHJvZmlsZSkge1xyXG4gICAgY29uc3QgY3JlYXRlTWVzc2FnZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgY29uc3QgY3JlYXRlRm9sbG93QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjb25zdCBjcmVhdGVTaGFyZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgY29uc3QgcHJvZmlsZUxpbmtCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGluaycpO1xyXG4gICAgY3JlYXRlTWVzc2FnZUltZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lc3NhZ2VCdG4nKTtcclxuICAgIGNyZWF0ZU1lc3NhZ2VJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vYXNzZXQvaW1hZ2VzL2ljb25zL2ljb25fX21lc3NhZ2Uuc3ZnJyk7XHJcbiAgICBjcmVhdGVNZXNzYWdlSW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgJ+uplOyEuOyngCDrsoTtirwnKTtcclxuICAgIGNyZWF0ZU1lc3NhZ2VJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBgI2NoYXR0aW5nMWA7IC8vIOyjvOyGjCDsl4XrjbDsnbTtirhcclxuICAgIH0pO1xyXG4gICAgcHJvZmlsZUxpbmtCdG4uYXBwZW5kKGNyZWF0ZU1lc3NhZ2VJbWcpO1xyXG4gICAgY3JlYXRlRm9sbG93QnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9sbG93QnRuJyk7XHJcbiAgICBjcmVhdGVGb2xsb3dCdXR0b24uaW5uZXJUZXh0ID0gJ+2MlOuhnOyasCc7XHJcbiAgICBwcm9maWxlTGlua0J0bi5hcHBlbmQoY3JlYXRlRm9sbG93QnV0dG9uKTtcclxuICAgIGNyZWF0ZVNoYXJlSW1nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2hhcmVCdG4nKTtcclxuICAgIGNyZWF0ZVNoYXJlSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL2Fzc2V0L2ltYWdlcy9pY29ucy9pY29uX19zaGFyZS5zdmcnKTtcclxuICAgIGNyZWF0ZVNoYXJlSW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgJ+qzteycoCDrsoTtirwnKTtcclxuICAgIHByb2ZpbGVMaW5rQnRuLmFwcGVuZChjcmVhdGVTaGFyZUltZyk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuUHJvZmlsZUNvbnRlbnQgLm15SW1hZ2UnKS5zcmMgPSB1c2VyUHJvZmlsZS5pbWFnZTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlSW5mbyAudXNlck5hbWUnKS5pbm5lclRleHQgPSB1c2VyUHJvZmlsZS51c2VybmFtZTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlSW5mbyAudXNlcklkJykuaW5uZXJUZXh0ID0gYEAgJHt1c2VyUHJvZmlsZS5hY2NvdW50bmFtZX1gO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVJbmZvIC5pbnRyb2R1Y3Rpb24nKS5pbm5lclRleHQgPSB1c2VyUHJvZmlsZS5pbnRybztcclxuICAgIC8vIO2MlOuhnOyasCAvIOyWuO2MlOuhnOyasCDsiqTtg4DsnbxcclxuICAgIGNyZWF0ZUZvbGxvd0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdmb2xsb3cnKTtcclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2ZvbGxvd0J0biBmb2xsb3cnKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5pbm5lclRleHQgPSAn7Ja47YyU66Gc7JqwJztcclxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnN0eWxlLm9wYWNpdHkgPSAnMC41JztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5pbm5lclRleHQgPSAn7YyU66Gc7JqwJztcclxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBnZXRQcm9kdWN0TGlzdCh1c2VyUHJvZmlsZSk7XHJcbn1cclxuLy8g7IKs7Jqp7J6Q6rCAIO2MkOunpCDspJHsnbgg7IOB7ZKIIOygleuztCDqsIDsoLjsmKTquLBcclxuZnVuY3Rpb24gZ2V0UHJvZHVjdExpc3QodXNlclByb2ZpbGUpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vYXBpLm1hbmRhcmluLndlbml2LmNvLmtyJztcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUb2tlbicpO1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc1Byb2ZpbGVQcm9kdWN0ID0geWllbGQgZmV0Y2goYCR7dXJsfS9wcm9kdWN0LyR7dXNlclByb2ZpbGUuYWNjb3VudG5hbWV9YCwgc2V0dGluZyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc1Byb2ZpbGVQcm9kdWN0SnNvbiA9IHlpZWxkIHJlc1Byb2ZpbGVQcm9kdWN0Lmpzb24oKTtcclxuICAgICAgICAgICAgc2V0UHJvZHVjdExpc3QocmVzUHJvZmlsZVByb2R1Y3RKc29uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuLy8g65Ox66Gd65CcIOyDge2SiCDsiJjsl5Ag65Sw6528IO2UhOuhnO2VhOyXkCDtlbTri7kg7IOB7ZKIIOuwmOyYgVxyXG5mdW5jdGlvbiBzZXRQcm9kdWN0TGlzdChyZXNQcm9maWxlUHJvZHVjdEpzb24pIHtcclxuICAgIGlmIChyZXNQcm9maWxlUHJvZHVjdEpzb24ucHJvZHVjdC5sZW5ndGggIT09IDApIHtcclxuICAgICAgICBjb25zdCBzYWxlSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2FsZUl0ZW1Db250YWluZXInKTtcclxuICAgICAgICBjb25zdCBjcmVhdGVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZVVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9hcGkubWFuZGFyaW4ud2VuaXYuY28ua3InO1xyXG4gICAgICAgIGNyZWF0ZVAuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aXRsZScpO1xyXG4gICAgICAgIGNyZWF0ZVVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvZHVjdExpc3QnKTtcclxuICAgICAgICBzYWxlSXRlbXMuYXBwZW5kKGNyZWF0ZVApO1xyXG4gICAgICAgIHNhbGVJdGVtcy5hcHBlbmQoY3JlYXRlVWwpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYWxlSXRlbXMgLnRpdGxlJykuaW5uZXJUZXh0ID0gJ+2MkOunpCDspJHsnbgg7IOB7ZKIJztcclxuICAgICAgICBjb25zdCBwcm9kdWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYWxlSXRlbXMgLnByb2R1Y3RMaXN0Jyk7XHJcbiAgICAgICAgZm9yIChjb25zdCBwcm9kdWN0IG9mIHJlc1Byb2ZpbGVQcm9kdWN0SnNvbi5wcm9kdWN0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlVXJsID0gcHJvZHVjdC5pdGVtSW1hZ2UubGVuZ3RoID49IDEwMCA/IGAke3Byb2R1Y3QuaXRlbUltYWdlfWAgOiBgJHt1cmx9LyR7cHJvZHVjdC5pdGVtSW1hZ2V9YDtcclxuICAgICAgICAgICAgcHJvZHVjdExpc3QuaW5uZXJIVE1MICs9IGA8bGkgaWQ9XCIke3Byb2R1Y3QuaWR9XCI+XHJcbiAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZVVybH1cIiBhbHQ9XCLsg4Htkogg7J2066+47KeAXCIgLz5cclxuICAgICAgPHAgY2xhc3M9XCJQcm9kdWN0VGl0bGVcIj4ke3Byb2R1Y3QuaXRlbU5hbWV9PC9wPlxyXG4gICAgICA8cCBjbGFzcz1cInByaWNlXCI+JHtwcm9kdWN0LnByaWNlLnRvTG9jYWxlU3RyaW5nKCl97JuQPC9wPlxyXG4gICAgPC9saT5gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHByb2R1Y3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdExpc3QgbGknKTtcclxuICAgIFtdLmZvckVhY2guY2FsbChwcm9kdWN0LCBmdW5jdGlvbiAocHJvZHVjdCkge1xyXG4gICAgICAgIHByb2R1Y3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdElkID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2xpJykuaWQ7XHJcbiAgICAgICAgICAgIHByb2R1Y3RNb2RhbChwcm9kdWN0SWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuLy8g6rKM7Iuc66y8IOqwgOyngOqzoCDsmKTquLBcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc3RpbmdMaXN0KCkge1xyXG4gICAgY29uc3QgdXNlclBvc3RJbmZvID0gZ2V0UG9zdGluZygpO1xyXG4gICAgdXNlclBvc3RJbmZvLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBzZXRQb3N0aW5nTGlzdChyZXMpO1xyXG4gICAgfSk7XHJcbn1cclxuLy8g6rKM7Iuc66y8IO2DgOyeheuwlCDsg53shLEg67CPIOy1nOy0iCDrqqnroZ3tmJXsnLzroZwg7Y+s7Iqk7YyFXHJcbmZ1bmN0aW9uIHNldFBvc3RpbmdMaXN0KHVzZXJQb3N0SW5mbykge1xyXG4gICAgY29uc3QgcG9zdGluZ1N1bW1hcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zdGluZ1N1bW1hcnknKTtcclxuICAgIGlmICh1c2VyUG9zdEluZm8ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcG9zdGluZ1N1bW1hcnkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBwb3N0aW5nU3VtbWFyeS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICBjb25zdCBjcmVhdGVBcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZUgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBjcmVhdGVBcnRpY2xlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncG9zdCcpO1xyXG4gICAgICAgIGNyZWF0ZUgzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaXInKTtcclxuICAgICAgICBjcmVhdGVIMy5pbm5lclRleHQgPSAn7ZS865OcIOqyjOyLnOq4gCc7XHJcbiAgICAgICAgY3JlYXRlQXJ0aWNsZS5hcHBlbmRDaGlsZChjcmVhdGVIMyk7XHJcbiAgICAgICAgcG9zdGluZ1N1bW1hcnkuYXBwZW5kKGNyZWF0ZUFydGljbGUpO1xyXG4gICAgICAgIGxpc3RUeXBlUG9zdCh1c2VyUG9zdEluZm8pO1xyXG4gICAgfVxyXG59XHJcbi8vIOuqqeuhne2YleycvOuhnCDtj6zsiqTtjIUg7ZGc7IucXHJcbmV4cG9ydCBmdW5jdGlvbiBsaXN0VHlwZVBvc3QodXNlclBvc3RJbmZvKSB7XHJcbiAgICBjb25zdCBwb3N0aW5nU3VtbWFyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0aW5nU3VtbWFyeScpO1xyXG4gICAgY29uc3QgcG9zdENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zdENvbnRlbnQnKTtcclxuICAgIGNvbnN0IGFsYnVtVHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0aW5nVHlwZS5hbGJ1bS5idXR0b25DbGljaycpO1xyXG4gICAgY29uc3QgTGlzdFR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zdGluZ1R5cGUubGlzdC5idXR0b25DbGljaycpO1xyXG4gICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vYXBpLm1hbmRhcmluLndlbml2LmNvLmtyJztcclxuICAgIGFsYnVtVHlwZS5jbGFzc0xpc3QuYWRkKCd1bnNlbGVjdGVkJyk7XHJcbiAgICBMaXN0VHlwZS5jbGFzc0xpc3QucmVtb3ZlKCd1bnNlbGVjdGVkJyk7XHJcbiAgICBpZiAocG9zdENvbnRlbnQpIHtcclxuICAgICAgICBwb3N0Q29udGVudC5yZW1vdmUoKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGNyZWF0ZUFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XHJcbiAgICBjb25zdCBjcmVhdGVIMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBjcmVhdGVBcnRpY2xlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncG9zdCcpO1xyXG4gICAgY3JlYXRlSDMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpcicpO1xyXG4gICAgY3JlYXRlSDMuaW5uZXJUZXh0ID0gJ+2UvOuTnCDqsozsi5zquIAnO1xyXG4gICAgY3JlYXRlQXJ0aWNsZS5hcHBlbmRDaGlsZChjcmVhdGVIMyk7XHJcbiAgICBwb3N0aW5nU3VtbWFyeS5hcHBlbmQoY3JlYXRlQXJ0aWNsZSk7XHJcbiAgICBjb25zdCBwb3N0aW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvc3QnKTtcclxuICAgIHBvc3RpbmdbMF0uaW5uZXJIVE1MID0gJzxoMyBjbGFzcz1cImlyXCI+7ZS865OcIOqyjOyLnOq4gDwvaDM+JztcclxuICAgIGlmIChwb3N0aW5nLmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgICAgcG9zdGluZ1sxXS5yZW1vdmUoKTtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgcG9zdCBvZiB1c2VyUG9zdEluZm8pIHtcclxuICAgICAgICBsZXQgcG9zdEltYWdlID0gJyc7XHJcbiAgICAgICAgbGV0IGhlYXJ0U3RhdHVzID0gJyc7XHJcbiAgICAgICAgaWYgKHBvc3QuaW1hZ2UgJiYgcG9zdC5pbWFnZS5zZWFyY2goJ3VuZGVmaW5lZCcpID09PSAtMSkge1xyXG4gICAgICAgICAgICBsZXQgaW1hZ2VzID0gcG9zdC5pbWFnZS5zcGxpdCgnLCcpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbWFnZSBvZiBpbWFnZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpbWFnZS5zcGxpdCgnLicpWzFdID09PSAnYXBpJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlID0gaW1hZ2UucmVwbGFjZSgnaHR0cHM6Ly9tYW5kYXJpbi5hcGkud2VuaXYuY28ua3IvJywgJ2h0dHBzOi8vYXBpLm1hbmRhcmluLndlbml2LmNvLmtyLycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcG9zdEltYWdlICs9IGBcclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2V9XCIgYWx0PVwi6rKM7Iuc66y8IOydtOuvuOyngFwiIG9uZXJyb3I9XCJ0aGlzLnN0eWxlLmRpc3BsYXk9J25vbmUnXCIvPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY2hlY2tJbWcgPSAhcG9zdEltYWdlID8gJycgOiBgPGRpdiBjbGFzcz1cInBvc3RJbWdDb250ZW50XCI+PHVsPiR7cG9zdEltYWdlfTwvdWw+PC9kaXY+YDtcclxuICAgICAgICAvLyDsoovslYTsmpQg7J2066+47KeAIG9uLCBvZmYg7Iqk7YOA7J28IOq1rO2YhFxyXG4gICAgICAgIGlmIChwb3N0LmhlYXJ0ZWQpIHtcclxuICAgICAgICAgICAgaGVhcnRTdGF0dXMgPSAnbGlrZUJ0biBvbic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBoZWFydFN0YXR1cyA9ICdsaWtlQnRuJztcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG4gICAgICAgIGNvbnN0IEltZ05vZGUgPSByYW5nZS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoY2hlY2tJbWcpO1xyXG4gICAgICAgIGNvbnN0IHBvc3RJdGVtRGl2RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBsaXN0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0Jyk7XHJcbiAgICAgICAgcG9zdEl0ZW1EaXZFbC5jbGFzc0xpc3QuYWRkKCdwb3N0SXRlbScpO1xyXG4gICAgICAgIC8vIOyCrOyaqeyekCDsoJXrs7Qg66eI7YGs7JeFXHJcbiAgICAgICAgY29uc3QgcG9zdEhlYWRpbmc0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJJbmZvU2VjdGlvbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJMaXN0RGl2RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCB1c2VySXRlbURpdkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgdXNlckJveERpdkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgdXNlclByb2ZpbGVJbWdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJJbmZvRGl2RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCB1c2VyTmlja25hbWVTdHJvbmdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0cm9uZycpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJUZXh0RGl2RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCB1c2VyU3RhdHVzTXNnUEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbnN0IG1vcmVCdG5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IG1vcmVUZXh0U3BhbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIHBvc3RIZWFkaW5nNEVsLmNsYXNzTGlzdC5hZGQoJ2lyJyk7XHJcbiAgICAgICAgcG9zdEhlYWRpbmc0RWwuaW5uZXJUZXh0ID0gJ+qyjOyLnOusvCc7XHJcbiAgICAgICAgdXNlckxpc3REaXZFbC5jbGFzc0xpc3QuYWRkKCd1c2VyTGlzdCcpO1xyXG4gICAgICAgIHVzZXJJdGVtRGl2RWwuY2xhc3NMaXN0LmFkZCgndXNlckl0ZW0nKTtcclxuICAgICAgICB1c2VyQm94RGl2RWwuY2xhc3NMaXN0LmFkZCgndXNlckJveCcpO1xyXG4gICAgICAgIHVzZXJCb3hEaXZFbC5zZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JywgcG9zdC5pZCk7XHJcbiAgICAgICAgdXNlclByb2ZpbGVJbWdFbC5jbGFzc0xpc3QuYWRkKCd1c2VyUHJvZmlsZUltYWdlJyk7XHJcbiAgICAgICAgaWYgKHBvc3QuYXV0aG9yLmltYWdlLmxlbmd0aCA8PSAyMCkge1xyXG4gICAgICAgICAgICB1c2VyUHJvZmlsZUltZ0VsLnNldEF0dHJpYnV0ZSgnc3JjJywgYCR7dXJsfS8ke3Bvc3QuYXV0aG9yLmltYWdlfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHVzZXJQcm9maWxlSW1nRWwuc2V0QXR0cmlidXRlKCdzcmMnLCBgJHtwb3N0LmF1dGhvci5pbWFnZX1gKTtcclxuICAgICAgICB1c2VyUHJvZmlsZUltZ0VsLnNldEF0dHJpYnV0ZSgnYWx0JywgYCR7cG9zdC5hdXRob3IudXNlcm5hbWV964uY7J2YIO2UhOuhnO2VhCDsnbTrr7jsp4BgKTtcclxuICAgICAgICB1c2VySW5mb0RpdkVsLmNsYXNzTGlzdC5hZGQoJ3VzZXJJbmZvJyk7XHJcbiAgICAgICAgdXNlck5pY2tuYW1lU3Ryb25nRWwuY2xhc3NMaXN0LmFkZCgndXNlck5pY2tuYW1lJyk7XHJcbiAgICAgICAgdXNlck5pY2tuYW1lU3Ryb25nRWwuaW5uZXJUZXh0ID0gYCR7cG9zdC5hdXRob3IudXNlcm5hbWV9YDtcclxuICAgICAgICB1c2VyVGV4dERpdkVsLmNsYXNzTGlzdC5hZGQoJ3VzZXJUZXh0Jyk7XHJcbiAgICAgICAgdXNlclN0YXR1c01zZ1BFbC5jbGFzc0xpc3QuYWRkKCd1c2VyTXNnQ29udGVudCcpO1xyXG4gICAgICAgIHVzZXJTdGF0dXNNc2dQRWwuY2xhc3NMaXN0LmFkZCgndXNlclN0YXR1c01zZycpO1xyXG4gICAgICAgIHVzZXJTdGF0dXNNc2dQRWwuaW5uZXJUZXh0ID0gYEAke3Bvc3QuYXV0aG9yLmFjY291bnRuYW1lfWA7XHJcbiAgICAgICAgbW9yZUJ0bkVsLmNsYXNzTGlzdC5hZGQoJ21vcmVCdG4nKTtcclxuICAgICAgICBtb3JlQnRuRWwuY2xhc3NMaXN0LmFkZCgnYnV0dG9uQ2xpY2snKTtcclxuICAgICAgICBtb3JlVGV4dFNwYW5FbC5jbGFzc0xpc3QuYWRkKCdpcicpO1xyXG4gICAgICAgIG1vcmVUZXh0U3BhbkVsLmlubmVyVGV4dCA9ICfqsozsi5zquIAg642U67O06riwIOuyhO2KvCc7XHJcbiAgICAgICAgbW9yZUJ0bkVsLmFwcGVuZENoaWxkKG1vcmVUZXh0U3BhbkVsKTtcclxuICAgICAgICB1c2VyVGV4dERpdkVsLmFwcGVuZENoaWxkKHVzZXJTdGF0dXNNc2dQRWwpO1xyXG4gICAgICAgIHVzZXJJbmZvRGl2RWwuYXBwZW5kQ2hpbGQodXNlck5pY2tuYW1lU3Ryb25nRWwpO1xyXG4gICAgICAgIHVzZXJJbmZvRGl2RWwuYXBwZW5kQ2hpbGQodXNlclRleHREaXZFbCk7XHJcbiAgICAgICAgdXNlckJveERpdkVsLmFwcGVuZENoaWxkKHVzZXJQcm9maWxlSW1nRWwpO1xyXG4gICAgICAgIHVzZXJCb3hEaXZFbC5hcHBlbmRDaGlsZCh1c2VySW5mb0RpdkVsKTtcclxuICAgICAgICB1c2VyQm94RGl2RWwuYXBwZW5kQ2hpbGQobW9yZUJ0bkVsKTtcclxuICAgICAgICB1c2VySXRlbURpdkVsLmFwcGVuZENoaWxkKHVzZXJCb3hEaXZFbCk7XHJcbiAgICAgICAgdXNlckxpc3REaXZFbC5hcHBlbmRDaGlsZCh1c2VySXRlbURpdkVsKTtcclxuICAgICAgICB1c2VySW5mb1NlY3Rpb25FbC5hcHBlbmRDaGlsZCh1c2VyTGlzdERpdkVsKTtcclxuICAgICAgICBwb3N0SXRlbURpdkVsLmFwcGVuZENoaWxkKHBvc3RIZWFkaW5nNEVsKTtcclxuICAgICAgICBwb3N0SXRlbURpdkVsLmFwcGVuZENoaWxkKHVzZXJJbmZvU2VjdGlvbkVsKTtcclxuICAgICAgICAvLyDqsozsi5zrrLwg66eI7YGs7JeFXHJcbiAgICAgICAgY29uc3QgY29udGVudFNlY3Rpb25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCBjb250ZW50VGl0bGVoZWFkaW5nNEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuICAgICAgICBjb25zdCBjb250ZW50UEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRCdG5EaXZFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGxpa2VCdG5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IGxpa2VUZXh0U3BhbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIGNvbnN0IGxpa2VDb3VudFNwYW5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBjb25zdCBjb21tZW50QnRuRGl2RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBjb21tZW50Q291bnRTcGFuRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgY29uc3QgcG9zdERhdGVTdHJvbmdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0cm9uZycpO1xyXG4gICAgICAgIGNvbnRlbnRTZWN0aW9uRWwuY2xhc3NMaXN0LmFkZCgncG9zdENvbnRlbnQnKTtcclxuICAgICAgICBjb250ZW50U2VjdGlvbkVsLmlkID0gYCR7cG9zdC5pZH1gO1xyXG4gICAgICAgIGNvbnRlbnRUaXRsZWhlYWRpbmc0RWwuY2xhc3NMaXN0LmFkZCgnaXInKTtcclxuICAgICAgICBjb250ZW50VGl0bGVoZWFkaW5nNEVsLmlubmVyVGV4dCA9ICfqsozsi5zquIAg64K07JqpJztcclxuICAgICAgICBjb250ZW50UEVsLmlubmVyVGV4dCA9IGAke3Bvc3QuY29udGVudH1gO1xyXG4gICAgICAgIGNvbnRlbnRCdG5EaXZFbC5jbGFzc0xpc3QuYWRkKCdwb3N0QnRuQ29udGVudCcpO1xyXG4gICAgICAgIGxpa2VCdG5FbC5jbGFzc0xpc3QuYWRkKCdsaWtlQnRuJyk7XHJcbiAgICAgICAgaWYgKHBvc3QuaGVhcnRlZCkge1xyXG4gICAgICAgICAgICBsaWtlQnRuRWwuY2xhc3NMaXN0LmFkZCgnb24nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxpa2VCdG5FbC5jbGFzc0xpc3QucmVtb3ZlKCdvbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaWtlVGV4dFNwYW5FbC5jbGFzc0xpc3QuYWRkKCdpcicpO1xyXG4gICAgICAgIGxpa2VUZXh0U3BhbkVsLmlubmVyVGV4dCA9ICfsoovslYTsmpQg67KE7Yq8JztcclxuICAgICAgICBsaWtlQ291bnRTcGFuRWwuY2xhc3NMaXN0LmFkZCgnY29tbWVudENvdW50Jyk7XHJcbiAgICAgICAgbGlrZUNvdW50U3BhbkVsLmlubmVyVGV4dCA9IGAke3Bvc3QuaGVhcnRDb3VudH1gO1xyXG4gICAgICAgIGNvbW1lbnRCdG5EaXZFbC5jbGFzc0xpc3QuYWRkKCdjb21tZW50QnRuJyk7XHJcbiAgICAgICAgY29tbWVudEJ0bkRpdkVsLmRhdGFzZXQucG9zdGlkID0gYCR7cG9zdC5pZH1gO1xyXG4gICAgICAgIGNvbW1lbnRDb3VudFNwYW5FbC5jbGFzc0xpc3QuYWRkKCdjb21tZW50Q291bnQnKTtcclxuICAgICAgICBjb21tZW50Q291bnRTcGFuRWwuaW5uZXJUZXh0ID0gYCR7cG9zdC5jb21tZW50Q291bnR9YDtcclxuICAgICAgICBwb3N0RGF0ZVN0cm9uZ0VsLmNsYXNzTGlzdC5hZGQoJ3Bvc3REYXRlJyk7XHJcbiAgICAgICAgcG9zdERhdGVTdHJvbmdFbC5pbm5lclRleHQgPSBgJHt0aW1lRm9yVG9kYXkocG9zdC5jcmVhdGVkQXQpfWA7XHJcbiAgICAgICAgbGlrZUJ0bkVsLmFwcGVuZENoaWxkKGxpa2VUZXh0U3BhbkVsKTtcclxuICAgICAgICBsaWtlQnRuRWwuYXBwZW5kQ2hpbGQobGlrZUNvdW50U3BhbkVsKTtcclxuICAgICAgICBjb21tZW50QnRuRGl2RWwuYXBwZW5kQ2hpbGQoY29tbWVudENvdW50U3BhbkVsKTtcclxuICAgICAgICBjb250ZW50QnRuRGl2RWwuYXBwZW5kQ2hpbGQobGlrZUJ0bkVsKTtcclxuICAgICAgICBjb250ZW50QnRuRGl2RWwuYXBwZW5kQ2hpbGQoY29tbWVudEJ0bkRpdkVsKTtcclxuICAgICAgICBjb250ZW50U2VjdGlvbkVsLmFwcGVuZENoaWxkKGNvbnRlbnRUaXRsZWhlYWRpbmc0RWwpO1xyXG4gICAgICAgIGNvbnRlbnRTZWN0aW9uRWwuYXBwZW5kQ2hpbGQoY29udGVudFBFbCk7XHJcbiAgICAgICAgY29udGVudFNlY3Rpb25FbC5hcHBlbmRDaGlsZChJbWdOb2RlKTtcclxuICAgICAgICBjb250ZW50U2VjdGlvbkVsLmFwcGVuZENoaWxkKGNvbnRlbnRCdG5EaXZFbCk7XHJcbiAgICAgICAgY29udGVudFNlY3Rpb25FbC5hcHBlbmRDaGlsZChwb3N0RGF0ZVN0cm9uZ0VsKTtcclxuICAgICAgICBwb3N0SXRlbURpdkVsLmFwcGVuZENoaWxkKGNvbnRlbnRTZWN0aW9uRWwpO1xyXG4gICAgICAgIGxpc3RDb250ZW50LmFwcGVuZENoaWxkKHBvc3RJdGVtRGl2RWwpO1xyXG4gICAgICAgIHVzZXJCb3hEaXZFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrVXNlckluZm8pO1xyXG4gICAgICAgIGxpa2VCdG5FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGVhcnQpO1xyXG4gICAgICAgIG1vcmVCdG5FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrVXNlck1vZGFsKTtcclxuICAgICAgICBjb21tZW50QnRuRGl2RWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0NvbW1lbnQpO1xyXG4gICAgICAgIGNvbnN0IG1vcmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9yZUJ0bi5idXR0b25DbGljaycpO1xyXG4gICAgICAgIGNvbnN0IGhlYXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvc3RCdG5Db250ZW50IGJ1dHRvbicpO1xyXG4gICAgICAgIFtdLmZvckVhY2guY2FsbChoZWFydEJ0biwgZnVuY3Rpb24gKGhlYXJ0QnRuKSB7XHJcbiAgICAgICAgICAgIGhlYXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIZWFydCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKG1vcmVCdG4sIGZ1bmN0aW9uIChtb3JlQnRuKSB7XHJcbiAgICAgICAgICAgIG1vcmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja1VzZXJNb2RhbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gY2xpY2tDb21tZW50KGV2ZW50KSB7XHJcbiAgICBjb25zdCBwb3N0SWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucG9zdGlkO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBgI3Bvc3RcXD9wb3N0aWQ9JHtwb3N0SWR9YDsgLy8g7KO87IaMIOyXheuNsOydtO2KuFxyXG59XHJcbmZ1bmN0aW9uIGNsaWNrVXNlckluZm8oZXZlbnQpIHtcclxuICAgIHZhciBfYTtcclxuICAgIGNvbnN0IHVzZXJBY2NvdW50ID0gKF9hID0gZXZlbnQuY3VycmVudFRhcmdldC5jaGlsZHJlblsxXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlcGxhY2UoJ0AnLCAnJyk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGAjcHJvZmlsZVxcP2FjY291bnRuYW1lPSR7dXNlckFjY291bnR9YDsgLy8g7KO87IaMIOyXheuNsOydtO2KuFxyXG59XHJcbi8vIOyVqOuylO2YlSDtj6zsiqTtjIUg6rWs7ZiEXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGJ1bVR5cGVQb3N0KCkge1xyXG4gICAgZ2V0UG9zdGluZygpLnRoZW4ocmVzID0+IHNldEFsYnVtKHJlcykpO1xyXG59XHJcbmZ1bmN0aW9uIHNldEFsYnVtKHVzZXJQb3N0SW5mbykge1xyXG4gICAgY29uc3QgcG9zdGluZ1N1bW1hcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zdGluZ1N1bW1hcnknKTtcclxuICAgIGNvbnN0IHBvc3RDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvc3RDb250ZW50Jyk7XHJcbiAgICBjb25zdCBwb3N0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvc3QnKTtcclxuICAgIGNvbnN0IGFsYnVtVHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0aW5nVHlwZS5hbGJ1bS5idXR0b25DbGljaycpO1xyXG4gICAgY29uc3QgTGlzdFR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zdGluZ1R5cGUubGlzdC5idXR0b25DbGljaycpO1xyXG4gICAgTGlzdFR5cGUuY2xhc3NMaXN0LmFkZCgndW5zZWxlY3RlZCcpO1xyXG4gICAgYWxidW1UeXBlLmNsYXNzTGlzdC5yZW1vdmUoJ3Vuc2VsZWN0ZWQnKTtcclxuICAgIGlmIChwb3N0KSB7XHJcbiAgICAgICAgcG9zdC5yZW1vdmUoKTtcclxuICAgIH1cclxuICAgIGlmIChwb3N0Q29udGVudC5sZW5ndGggPj0gMSkge1xyXG4gICAgICAgIHBvc3RDb250ZW50WzBdLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY3JlYXRlQXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcclxuICAgIGNvbnN0IGNyZWF0ZUgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGNvbnN0IGNyZWF0ZVVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIGNyZWF0ZUFydGljbGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwb3N0Q29udGVudCcpO1xyXG4gICAgY3JlYXRlSDIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpcicpO1xyXG4gICAgY3JlYXRlSDIuaW5uZXJUZXh0ID0gJ+uTseuhneuQnCDqsozsi5zrrLwnO1xyXG4gICAgY3JlYXRlVWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwb3N0aW5nTGlzdCcpO1xyXG4gICAgY3JlYXRlQXJ0aWNsZS5hcHBlbmRDaGlsZChjcmVhdGVIMik7XHJcbiAgICBjcmVhdGVBcnRpY2xlLmFwcGVuZENoaWxkKGNyZWF0ZVVsKTtcclxuICAgIHBvc3RpbmdTdW1tYXJ5LmFwcGVuZENoaWxkKGNyZWF0ZUFydGljbGUpO1xyXG4gICAgZm9yIChjb25zdCBwb3N0IG9mIHVzZXJQb3N0SW5mbykge1xyXG4gICAgICAgIGNvbnN0IHBvc3RJbWcgPSBwb3N0LmltYWdlLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgLy8g6rKM7Iuc66y87JeQIOydtOuvuOyngOqwgCDsl4bripQg6rK97JqwLCBpbWcg7YOc6re4IOyDneyEsSDrtojqsIAuXHJcbiAgICAgICAgLy8g6rKM7Iuc66y87JeQIOydtOuvuOyngOqwgCAy6rCcIOydtOyDgeyduCDqsr3smrAsIOydtOuvuOyngCDroIjsnbTslrQg7JWE7J207L2YIOy2lOqwgC5cclxuICAgICAgICBpZiAocG9zdEltZ1swXSA9PT0gJycpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocG9zdEltZy5sZW5ndGggPj0gMikge1xyXG4gICAgICAgICAgICBjb25zdCBpbWdMaUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgY29uc3QgcG9zdEltZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxheWVySW1nRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgcG9zdEltZ1swXSA9XHJcbiAgICAgICAgICAgICAgICBwb3N0SW1nWzBdLnNwbGl0KCcuJylbMV0gPT09ICdhcGknXHJcbiAgICAgICAgICAgICAgICAgICAgPyBwb3N0SW1nWzBdLnJlcGxhY2UoJ2h0dHBzOi8vbWFuZGFyaW4uYXBpLndlbml2LmNvLmtyJywgJ2h0dHBzOi8vYXBpLm1hbmRhcmluLndlbml2LmNvLmtyJylcclxuICAgICAgICAgICAgICAgICAgICA6IHBvc3RJbWdbMF07XHJcbiAgICAgICAgICAgIHBvc3RJbWdFbC5zZXRBdHRyaWJ1dGUoJ3NyYycsIGAke3Bvc3RJbWdbMF19YCk7XHJcbiAgICAgICAgICAgIHBvc3RJbWdFbC5zZXRBdHRyaWJ1dGUoJ2FsdCcsICcnKTtcclxuICAgICAgICAgICAgbGF5ZXJJbWdFbC5jbGFzc0xpc3QuYWRkKCdpbWFnZUxheWVyJyk7XHJcbiAgICAgICAgICAgIGxheWVySW1nRWwuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vYXNzZXQvaW1hZ2VzL2ljb25zL2ljb25fX2ltYWdlTGF5ZXIuc3ZnJyk7XHJcbiAgICAgICAgICAgIGxheWVySW1nRWwuc2V0QXR0cmlidXRlKCdhbHQnLCAn7J2066+47KeAIOugiOydtOyWtCDslYTsnbTsvZgnKTtcclxuICAgICAgICAgICAgaW1nTGlFbC5hcHBlbmRDaGlsZChwb3N0SW1nRWwpO1xyXG4gICAgICAgICAgICBpbWdMaUVsLmFwcGVuZENoaWxkKGxheWVySW1nRWwpO1xyXG4gICAgICAgICAgICBjcmVhdGVVbC5hcHBlbmRDaGlsZChpbWdMaUVsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGltZ0xpRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICBjb25zdCBwb3N0SW1nRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgcG9zdEltZ0VsLnNldEF0dHJpYnV0ZSgnc3JjJywgYCR7cG9zdEltZ1swXX1gKTtcclxuICAgICAgICAgICAgcG9zdEltZ0VsLnNldEF0dHJpYnV0ZSgnYWx0JywgJycpO1xyXG4gICAgICAgICAgICBpbWdMaUVsLmFwcGVuZENoaWxkKHBvc3RJbWdFbCk7XHJcbiAgICAgICAgICAgIGNyZWF0ZVVsLmFwcGVuZENoaWxkKGltZ0xpRWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbi8vIOy/vOumrOyKpO2KuOungeyXkCDrlLDrnbwg7YyU66Gc7JqwLCDtjJTroZzsnJkg7Y6Y7J207KeAIOuztOyXrOyjvOq4sFxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdCh1c2VyTGlzdFVsRWwpIHtcclxuICAgIGNvbnN0IHRpdGxlID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJ3RpdGxlPScpWzFdO1xyXG4gICAgY29uc3QgbXlBY2NvdW50TmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2NvdW50bmFtZScpO1xyXG4gICAgY29uc3QgcmVnID0gbmV3IFJlZ0V4cCgnQCguKj8pJicpO1xyXG4gICAgbGV0IGFjY291bnROYW1lID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQocmVnKVsxXTtcclxuICAgIGFjY291bnROYW1lID0gYWNjb3VudE5hbWUgPT0gbnVsbCA/IG15QWNjb3VudE5hbWUgOiBhY2NvdW50TmFtZTtcclxuICAgIGlmICh0aXRsZSA9PT0gJ2ZvbGxvd2VycycpIHtcclxuICAgICAgICBnZXRGb2xsb3dlckxpc3QoYWNjb3VudE5hbWUsIHVzZXJMaXN0VWxFbCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aXRsZSA9PT0gJ2ZvbGxvd2luZ3MnKSB7XHJcbiAgICAgICAgZ2V0Rm9sbG93aW5nTGlzdChhY2NvdW50TmFtZSwgdXNlckxpc3RVbEVsKTtcclxuICAgIH1cclxufVxyXG4vLyDtjJTroZzsnJkg7KCV67O0IOqwgOyguOyYpOq4sCjrgrTqsIAg7YyU66Gc7Jqw7ZWcIOyCrOyaqeyekCDrqqnroZ0g6rCA7KC47Jik6riwKVxyXG5mdW5jdGlvbiBnZXRGb2xsb3dpbmdMaXN0KGFjY291bnROYW1lLCB1c2VyTGlzdFVsRWwpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVG9rZW4nKTtcclxuICAgICAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9hcGkubWFuZGFyaW4ud2VuaXYuY28ua3InO1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvbGxvd2luZ0RhdGEgPSB5aWVsZCBmZXRjaChgJHt1cmx9L3Byb2ZpbGUvJHthY2NvdW50TmFtZX0vZm9sbG93aW5nYCwgc2V0dGluZyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvbGxvd2luZ0RhdGFKc29uID0geWllbGQgZm9sbG93aW5nRGF0YS5qc29uKCk7XHJcbiAgICAgICAgICAgIHNldEZvbGxvd2luZyhmb2xsb3dpbmdEYXRhSnNvbiwgdXNlckxpc3RVbEVsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbi8vIO2MlOuhnOycmSDsoJXrs7Qo64K06rCAIO2MlOuhnOyasO2VnCDsgqzsmqnsnpApIO2OmOydtOyngOyXkCDrsJjsmIFcclxuZnVuY3Rpb24gc2V0Rm9sbG93aW5nKGZvbGxvd2luZ0RhdGFKc29uLCB1c2VyTGlzdFVsRWwpIHtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvbGxvd2VycyAuZm9sbG93VGl0bGUnKTtcclxuICAgIGNvbnN0IHVybCA9ICdodHRwczovL2FwaS5tYW5kYXJpbi53ZW5pdi5jby5rcic7XHJcbiAgICB0aXRsZS5pbm5lclRleHQgPSAnRm9sbG93aW5ncyc7XHJcbiAgICBmb3IgKGNvbnN0IGZvbGxvd2luZyBvZiBmb2xsb3dpbmdEYXRhSnNvbikge1xyXG4gICAgICAgIGNvbnN0IHVzZXJJdGVtTGlFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgY29uc3QgdXNlckluZm9BbmNob3JFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICBjb25zdCB1c2VyUHJvZmlsZUltZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgY29uc3QgdXNlckluZm9EaXZFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJOaWNrTmFtZVN0cm9uZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3Ryb25nJyk7XHJcbiAgICAgICAgY29uc3QgdXNlclRleHREaXZFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJBY2NvdW50UEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbnN0IGZvbGxvd0J0bkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgdXNlckl0ZW1MaUVsLmNsYXNzTGlzdC5hZGQoJ3VzZXJJdGVtJyk7XHJcbiAgICAgICAgdXNlckluZm9BbmNob3JFbC5jbGFzc0xpc3QuYWRkKCd1c2VyQm94Jyk7XHJcbiAgICAgICAgdXNlclByb2ZpbGVJbWdFbC5jbGFzc0xpc3QuYWRkKCd1c2VyUHJvZmlsZUltYWdlJyk7XHJcbiAgICAgICAgdXNlclByb2ZpbGVJbWdFbC5jbGFzc0xpc3QuYWRkKCdmb2xsb3cnKTtcclxuICAgICAgICB1c2VyUHJvZmlsZUltZ0VsLnNyYyA9IGZvbGxvd2luZy5pbWFnZS5sZW5ndGggPD0gMjAgPyBgJHt1cmx9LyR7Zm9sbG93aW5nLmltYWdlfWAgOiBgJHtmb2xsb3dpbmcuaW1hZ2V9YDtcclxuICAgICAgICB1c2VyUHJvZmlsZUltZ0VsLnNldEF0dHJpYnV0ZSgnYWx0JywgJ+2UhOuhnO2VhCDsnbTrr7jsp4AnKTtcclxuICAgICAgICB1c2VySW5mb0RpdkVsLmNsYXNzTGlzdC5hZGQoJ3VzZXJJbmZvJyk7XHJcbiAgICAgICAgdXNlckluZm9EaXZFbC5jbGFzc0xpc3QuYWRkKCdmb2xsb3cnKTtcclxuICAgICAgICB1c2VyTmlja05hbWVTdHJvbmdFbC5jbGFzc0xpc3QuYWRkKCd1c2VyTmlja25hbWUnKTtcclxuICAgICAgICB1c2VyTmlja05hbWVTdHJvbmdFbC5pbm5lclRleHQgPSBgJHtmb2xsb3dpbmcudXNlcm5hbWV9YDtcclxuICAgICAgICB1c2VyVGV4dERpdkVsLmNsYXNzTGlzdC5hZGQoJ3VzZXJUZXh0Jyk7XHJcbiAgICAgICAgdXNlckFjY291bnRQRWwuY2xhc3NMaXN0LmFkZCgndXNlck1zZ0NvbnRlbnQnKTtcclxuICAgICAgICB1c2VyQWNjb3VudFBFbC5jbGFzc0xpc3QuYWRkKCd1c2VyU3RhdHVzTXNnJyk7XHJcbiAgICAgICAgdXNlckFjY291bnRQRWwuaW5uZXJUZXh0ID0gYCR7Zm9sbG93aW5nLmFjY291bnRuYW1lfWA7XHJcbiAgICAgICAgZm9sbG93QnRuRWwuY2xhc3NMaXN0LmFkZCgncHJvZmlsZScpO1xyXG4gICAgICAgIGZvbGxvd0J0bkVsLmNsYXNzTGlzdC5hZGQoJ2ZvbGxvd0J0bicpO1xyXG4gICAgICAgIGZvbGxvd0J0bkVsLmlubmVyVGV4dCA9ICftjJTroZzsmrAnO1xyXG4gICAgICAgIGZvbGxvd0J0bkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRm9sbG93KTtcclxuICAgICAgICB1c2VyVGV4dERpdkVsLmFwcGVuZENoaWxkKHVzZXJBY2NvdW50UEVsKTtcclxuICAgICAgICB1c2VySW5mb0RpdkVsLmFwcGVuZENoaWxkKHVzZXJOaWNrTmFtZVN0cm9uZ0VsKTtcclxuICAgICAgICB1c2VySW5mb0RpdkVsLmFwcGVuZENoaWxkKHVzZXJUZXh0RGl2RWwpO1xyXG4gICAgICAgIHVzZXJJbmZvQW5jaG9yRWwuYXBwZW5kQ2hpbGQodXNlclByb2ZpbGVJbWdFbCk7XHJcbiAgICAgICAgdXNlckluZm9BbmNob3JFbC5hcHBlbmRDaGlsZCh1c2VySW5mb0RpdkVsKTtcclxuICAgICAgICB1c2VySW5mb0FuY2hvckVsLmFwcGVuZENoaWxkKGZvbGxvd0J0bkVsKTtcclxuICAgICAgICB1c2VySXRlbUxpRWwuYXBwZW5kQ2hpbGQodXNlckluZm9BbmNob3JFbCk7XHJcbiAgICAgICAgdXNlckxpc3RVbEVsLmFwcGVuZENoaWxkKHVzZXJJdGVtTGlFbCk7XHJcbiAgICB9XHJcbn1cclxuLy8g7YyU66Gc7JqwIOuyhO2KvCDtgbTrpq0g7IucIOuyhO2KvCDsiqTtg4Dsnbwg67OA6rK9XHJcbmZ1bmN0aW9uIGhhbmRsZUZvbGxvdyhldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdmb2xsb3cnKTtcclxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAncHJvZmlsZSBmb2xsb3dCdG4gZm9sbG93Jykge1xyXG4gICAgICAgIGV2ZW50LnRhcmdldC5pbm5lclRleHQgPSAn7Leo7IaMJztcclxuICAgICAgICBldmVudC50YXJnZXQuc3R5bGUub3BhY2l0eSA9ICcwLjYnO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZXZlbnQudGFyZ2V0LmlubmVyVGV4dCA9ICftjJTroZzsmrAnO1xyXG4gICAgICAgIGV2ZW50LnRhcmdldC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgfVxyXG59XHJcbi8vIO2MlOuhnOybjCDsoJXrs7Qg6rCA7KC47Jik6riwKOuCmOulvCDtjJTroZzsmrDtlZwg7IKs7Jqp7J6QIOuqqeuhnSDqsIDsoLjsmKTquLApXHJcbmZ1bmN0aW9uIGdldEZvbGxvd2VyTGlzdChhY2NvdW50TmFtZSwgdXNlckxpc3RVbEVsKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Rva2VuJyk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vYXBpLm1hbmRhcmluLndlbml2LmNvLmtyJztcclxuICAgICAgICBjb25zdCBzZXR0aW5nID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBmb2xsb3dlckRhdGEgPSB5aWVsZCBmZXRjaChgJHt1cmx9L3Byb2ZpbGUvJHthY2NvdW50TmFtZX0vZm9sbG93ZXJgLCBzZXR0aW5nKTtcclxuICAgICAgICAgICAgY29uc3QgZm9sbG93ZXJEYXRhSnNvbiA9IHlpZWxkIGZvbGxvd2VyRGF0YS5qc29uKCk7XHJcbiAgICAgICAgICAgIHNldEZvbGxvd2VyKGZvbGxvd2VyRGF0YUpzb24sIHVzZXJMaXN0VWxFbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG4vLyDtjJTroZzsm4wg7KCV67O0ICjrgpjrpbwg7YyU66Gc7Jqw7ZWcIOyCrOyaqeyekCDsoJXrs7QpIO2OmOydtOyngOyXkCDrsJjsmIFcclxuZnVuY3Rpb24gc2V0Rm9sbG93ZXIoZm9sbG93ZXJEYXRhSnNvbiwgdXNlckxpc3RVbEVsKSB7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb2xsb3dlcnMgLmZvbGxvd1RpdGxlJyk7XHJcbiAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9hcGkubWFuZGFyaW4ud2VuaXYuY28ua3InO1xyXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gJ0ZvbGxvd2Vycyc7XHJcbiAgICBmb3IgKGNvbnN0IGZvbGxvd2VyIG9mIGZvbGxvd2VyRGF0YUpzb24pIHtcclxuICAgICAgICBjb25zdCB1c2VySXRlbUxpRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJJbmZvQW5jaG9yRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgY29uc3QgdXNlclByb2ZpbGVJbWdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJJbmZvRGl2RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCB1c2VyTmlja05hbWVTdHJvbmdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0cm9uZycpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJUZXh0RGl2RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCB1c2VyQWNjb3VudFBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBjb25zdCBmb2xsb3dCdG5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIHVzZXJJdGVtTGlFbC5jbGFzc0xpc3QuYWRkKCd1c2VySXRlbScpO1xyXG4gICAgICAgIHVzZXJJbmZvQW5jaG9yRWwuY2xhc3NMaXN0LmFkZCgndXNlckJveCcpO1xyXG4gICAgICAgIHVzZXJQcm9maWxlSW1nRWwuY2xhc3NMaXN0LmFkZCgndXNlclByb2ZpbGVJbWFnZScpO1xyXG4gICAgICAgIHVzZXJQcm9maWxlSW1nRWwuY2xhc3NMaXN0LmFkZCgnZm9sbG93Jyk7XHJcbiAgICAgICAgdXNlclByb2ZpbGVJbWdFbC5zcmMgPSBmb2xsb3dlci5pbWFnZS5sZW5ndGggPD0gMjAgPyBgJHt1cmx9LyR7Zm9sbG93ZXIuaW1hZ2V9YCA6IGAke2ZvbGxvd2VyLmltYWdlfWA7XHJcbiAgICAgICAgdXNlclByb2ZpbGVJbWdFbC5zZXRBdHRyaWJ1dGUoJ2FsdCcsICftlITroZztlYQg7J2066+47KeAJyk7XHJcbiAgICAgICAgdXNlckluZm9EaXZFbC5jbGFzc0xpc3QuYWRkKCd1c2VySW5mbycpO1xyXG4gICAgICAgIHVzZXJJbmZvRGl2RWwuY2xhc3NMaXN0LmFkZCgnZm9sbG93Jyk7XHJcbiAgICAgICAgdXNlck5pY2tOYW1lU3Ryb25nRWwuY2xhc3NMaXN0LmFkZCgndXNlck5pY2tuYW1lJyk7XHJcbiAgICAgICAgdXNlck5pY2tOYW1lU3Ryb25nRWwuaW5uZXJUZXh0ID0gYCR7Zm9sbG93ZXIudXNlcm5hbWV9YDtcclxuICAgICAgICB1c2VyVGV4dERpdkVsLmNsYXNzTGlzdC5hZGQoJ3VzZXJUZXh0Jyk7XHJcbiAgICAgICAgdXNlckFjY291bnRQRWwuY2xhc3NMaXN0LmFkZCgndXNlck1zZ0NvbnRlbnQnKTtcclxuICAgICAgICB1c2VyQWNjb3VudFBFbC5jbGFzc0xpc3QuYWRkKCd1c2VyU3RhdHVzTXNnJyk7XHJcbiAgICAgICAgdXNlckFjY291bnRQRWwuaW5uZXJUZXh0ID0gYCR7Zm9sbG93ZXIuYWNjb3VudG5hbWV9YDtcclxuICAgICAgICBmb2xsb3dCdG5FbC5jbGFzc0xpc3QuYWRkKCdwcm9maWxlJyk7XHJcbiAgICAgICAgZm9sbG93QnRuRWwuY2xhc3NMaXN0LmFkZCgnZm9sbG93QnRuJyk7XHJcbiAgICAgICAgZm9sbG93QnRuRWwuaW5uZXJUZXh0ID0gJ+2MlOuhnOyasCc7XHJcbiAgICAgICAgZm9sbG93QnRuRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVGb2xsb3cpO1xyXG4gICAgICAgIHVzZXJUZXh0RGl2RWwuYXBwZW5kQ2hpbGQodXNlckFjY291bnRQRWwpO1xyXG4gICAgICAgIHVzZXJJbmZvRGl2RWwuYXBwZW5kQ2hpbGQodXNlck5pY2tOYW1lU3Ryb25nRWwpO1xyXG4gICAgICAgIHVzZXJJbmZvRGl2RWwuYXBwZW5kQ2hpbGQodXNlclRleHREaXZFbCk7XHJcbiAgICAgICAgdXNlckluZm9BbmNob3JFbC5hcHBlbmRDaGlsZCh1c2VyUHJvZmlsZUltZ0VsKTtcclxuICAgICAgICB1c2VySW5mb0FuY2hvckVsLmFwcGVuZENoaWxkKHVzZXJJbmZvRGl2RWwpO1xyXG4gICAgICAgIHVzZXJJbmZvQW5jaG9yRWwuYXBwZW5kQ2hpbGQoZm9sbG93QnRuRWwpO1xyXG4gICAgICAgIHVzZXJJdGVtTGlFbC5hcHBlbmRDaGlsZCh1c2VySW5mb0FuY2hvckVsKTtcclxuICAgICAgICB1c2VyTGlzdFVsRWwuYXBwZW5kQ2hpbGQodXNlckl0ZW1MaUVsKTtcclxuICAgIH1cclxufVxyXG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmNvbnN0IHVybCA9ICdodHRwczovL2FwaS5tYW5kYXJpbi53ZW5pdi5jby5rcic7XHJcbmxldCBwcm9maWxlSW1nO1xyXG4vLyDshJzrsoTsl5Ag7ZSE66Gc7ZWEIOydtOuvuOyngCDrs7TrgrTquLBcclxuZnVuY3Rpb24gc2VuZFByb2ZpbGVJbWcoZmlsZSkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBmaWxlWzBdKTtcclxuICAgICAgICBjb25zdCBzZXR0aW5nID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgYm9keTogZm9ybURhdGEsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZVVwbG9hZFJlcyA9IHlpZWxkIGZldGNoKGAke3VybH0vaW1hZ2UvdXBsb2FkZmlsZXNgLCBzZXR0aW5nKTtcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2VVcGxvYWRKc29uID0geWllbGQgaW1hZ2VVcGxvYWRSZXMuanNvbigpO1xyXG4gICAgICAgICAgICBwcm9maWxlSW1nID0gaW1hZ2VVcGxvYWRKc29uWzBdLmZpbGVuYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG4vLyDtlITroZztlYQg7J2066+47KeAIOuvuOumrOuztOq4sFxyXG5leHBvcnQgZnVuY3Rpb24gcHJldmlld0ltZyhldmVudCwgYmFzaWNJbWcpIHtcclxuICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXM7XHJcbiAgICBpZiAoZmlsZVswXS5zaXplID4gMTAwMDAwMDApIHtcclxuICAgICAgICBhbGVydCgn7J2066+47KeAIOyCrOydtOymiOuKlCAxME1CIOydtOuCtOuhnCDrk7HroZ0g6rCA64ql7ZWp64uI64ukLicpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGJhc2ljSW1nLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZVswXSk7XHJcbiAgICBzZW5kUHJvZmlsZUltZyhmaWxlKTtcclxufVxyXG4vLyDrsoTtirwg7Zmc7ISx7ZmUXHJcbmZ1bmN0aW9uIGlzQWN0aXZlQnRuKCkge1xyXG4gICAgY29uc3QgcHJvZmlsZUZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZUZvcm1CdG4nKTtcclxuICAgIGNvbnN0IHVzZXJuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJuYW1lJyk7XHJcbiAgICBjb25zdCBpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpZCcpO1xyXG4gICAgY29uc3QgaW50cm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW50cm8nKTtcclxuICAgIGlmICh1c2VybmFtZS52YWx1ZSAhPT0gJycgJiYgaWQudmFsdWUgIT09ICcnICYmIGludHJvLnZhbHVlICE9PSAnJykge1xyXG4gICAgICAgIHByb2ZpbGVGb3JtQnRuLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgICAgcHJvZmlsZUZvcm1CdG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxufVxyXG4vLyDsmIjsmbgg66y47J6QIOyymOumrFxyXG5mdW5jdGlvbiBjaGVja1JlZ0V4cCgpIHtcclxuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWdpc3RlckZvcm1BbGVydCcpO1xyXG4gICAgY29uc3QgcHJvZmlsZUZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZUZvcm1CdG4nKTtcclxuICAgIGNvbnN0IGlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lkJyk7XHJcbiAgICBjb25zdCByZWdFeHAgPSAvXlthLXpBLVowLTlfLl17MiwxMH0kLztcclxuICAgIGlmIChyZWdFeHAudGVzdChpZC52YWx1ZSkpIHtcclxuICAgICAgICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnaXInKTtcclxuICAgICAgICBpc0FjdGl2ZUJ0bigpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFyZWdFeHAudGVzdChpZC52YWx1ZSkpIHtcclxuICAgICAgICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaXInKTtcclxuICAgICAgICBwcm9maWxlRm9ybUJ0bi5zdHlsZS5vcGFjaXR5ID0gJzAuMyc7XHJcbiAgICAgICAgaWQub25pbnB1dCA9ICgpID0+IHtcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2lyJyk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGlmIChpZC52YWx1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaXInKTtcclxuICAgICAgICBwcm9maWxlRm9ybUJ0bi5zdHlsZS5vcGFjaXR5ID0gJzAuMyc7XHJcbiAgICB9XHJcbn1cclxuLy8g7J6F66ClIOyytO2BrFxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJbnB1dChpZCkge1xyXG4gICAgaWYgKGlkLnZhbHVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjaGVja1JlZ0V4cCgpO1xyXG4gICAgfVxyXG59XHJcbi8vIO2ajOybkOqwgOyehSDsoJXrs7Qg7KCE7IahXHJcbmZ1bmN0aW9uIHNlbmRSZWdpc3RlcigpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcm5hbWUnKTtcclxuICAgICAgICBjb25zdCBpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpZCcpO1xyXG4gICAgICAgIGNvbnN0IGludHJvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ludHJvJyk7XHJcbiAgICAgICAgaWYgKHByb2ZpbGVJbWcgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBwcm9maWxlSW1nID0gJzE2NTg2MzY4NjMyMzcucG5nJztcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogdXNlck5hbWUudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbWFpbCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGFzc3dvcmQnKSxcclxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50bmFtZTogaWQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaW50cm86IGludHJvLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBgJHt1cmx9LyR7cHJvZmlsZUltZ31gLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBzaWduVXBSZXMgPSB5aWVsZCBmZXRjaChgJHt1cmx9L3VzZXJgLCBzZXR0aW5nKTtcclxuICAgICAgICAgICAgY29uc3Qgc2lnblVwSnNvbiA9IHlpZWxkIHNpZ25VcFJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIGlmIChzaWduVXBKc29uLnN0YXR1cyA9PT0gMjAwKVxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnI2xvZ2luJztcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihzaWduVXBKc29uLnN0YXR1c1RleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuLy8gSUQg7KSR67O1IOuplOyLnOyngFxyXG5mdW5jdGlvbiBjaGVja0lkKHJlc01lc3NhZ2UpIHtcclxuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWdpc3RlckZvcm1BbGVydCcpO1xyXG4gICAgaWYgKHJlc01lc3NhZ2UgPT09ICfsnbTrr7gg6rCA7J6F65CcIOqzhOyglUlEIOyeheuLiOuLpC4nKSB7XHJcbiAgICAgICAgZXJyb3JNZXNzYWdlLmlubmVyVGV4dCA9IGAqJHtyZXNNZXNzYWdlfWA7XHJcbiAgICAgICAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2lyJyk7XHJcbiAgICB9XHJcbiAgICBpZiAocmVzTWVzc2FnZSA9PT0gJ+yCrOyaqSDqsIDriqXtlZwg6rOE7KCVSUQg7J6F64uI64ukLicpIHtcclxuICAgICAgICBzZW5kUmVnaXN0ZXIoKTtcclxuICAgIH1cclxufVxyXG4vLyDsnKDtmqggSUQg6rKA7IKsXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkSWQoaWQpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50bmFtZTogaWQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkSWRSZXMgPSB5aWVsZCBmZXRjaChgJHt1cmx9L3VzZXIvYWNjb3VudG5hbWV2YWxpZGAsIHNldHRpbmcpO1xyXG4gICAgICAgICAgICBjb25zdCB2YWxpZElkSnNvbiA9IHlpZWxkIHZhbGlkSWRSZXMuanNvbigpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNNZXNzYWdlID0gdmFsaWRJZEpzb24ubWVzc2FnZTtcclxuICAgICAgICAgICAgY2hlY2tJZChyZXNNZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2VhcmNoVXNlcihldmVudCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9hcGkubWFuZGFyaW4ud2VuaXYuY28ua3InO1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Rva2VuJyk7XHJcbiAgICAgICAgY29uc3QgdXNlckxpc3RDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXJMaXN0Jyk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgdXNlckxpc3RDb250ZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgZmV0Y2goYCR7dXJsfS91c2VyL3NlYXJjaHVzZXIvP2tleXdvcmQ9JHtldmVudC50YXJnZXQudmFsdWV9YCwge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyRGF0YSA9IHlpZWxkIHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICAvLyDqsoDsg4nrkJwg7Jyg7KCAIOygleuztCDqtaztmIRcclxuICAgICAgICAgICAgICAgIHVzZXJMaXN0Q29udGVudC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgICAgIHVzZXJEYXRhLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1c2VySXRlbUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1c2VyQW5jaG9yRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXNlckltZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXNlckluZm9FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5pY2tOYW1lRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHJvbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1c2VyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjY291bnROYW1lRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pbWFnZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaW1hZ2Uuc3BsaXQoJy4nKVsxXSA9PT0gJ2FwaSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZWxlbWVudC5pbWFnZS5yZXBsYWNlKCdodHRwczovL21hbmRhcmluLmFwaS53ZW5pdi5jby5rcicsICdodHRwczovL2FwaS5tYW5kYXJpbi53ZW5pdi5jby5rcicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGVsZW1lbnQuaW1hZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlckl0ZW1FbC5jbGFzc0xpc3QuYWRkKCd1c2VySXRlbScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJBbmNob3JFbC5jbGFzc0xpc3QuYWRkKCd1c2VyQm94Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlckFuY2hvckVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGAjcHJvZmlsZVxcP2FjY291bnRuYW1lPSR7ZWxlbWVudC5hY2NvdW50bmFtZX1gOyAvLyDso7zshowg7JeF642w7J207Yq4XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlckltZ0VsLmNsYXNzTGlzdC5hZGQoJ3VzZXJQcm9maWxlSW1hZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICB1c2VySW1nRWwuc2V0QXR0cmlidXRlKCdzcmMnLCBgJHtlbGVtZW50LmltYWdlfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJbWdFbC5zZXRBdHRyaWJ1dGUoJ29uZXJyb3InLCBcInRoaXMub25lcnJvcj1udWxsO3RoaXMuc3JjPScuLi9hc3NldC9pbWFnZXMvdGltaS5zdmcnXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJbWdFbC5zZXRBdHRyaWJ1dGUoJ2FsdCcsIGAke2VsZW1lbnQudXNlcm5hbWV964uY7J2YIO2UhOuhnO2VhCDsnbTrr7jsp4BgKTtcclxuICAgICAgICAgICAgICAgICAgICB1c2VySW5mb0VsLmNsYXNzTGlzdC5hZGQoJ3VzZXJJbmZvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmlja05hbWVFbC5jbGFzc0xpc3QuYWRkKCd1c2VyTmlja25hbWUnKTtcclxuICAgICAgICAgICAgICAgICAgICBuaWNrTmFtZUVsLmlubmVyVGV4dCA9IGAke2VsZW1lbnQudXNlcm5hbWV9YDtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyVGV4dC5jbGFzc0xpc3QuYWRkKCd1c2VyVGV4dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnROYW1lRWwuY2xhc3NMaXN0LmFkZCgndXNlck1zZ0NvbnRlbnQnKTtcclxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZUVsLmNsYXNzTGlzdC5hZGQoJ3VzZXJTdGF0dXNNc2cnKTtcclxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZUVsLmlubmVyVGV4dCA9IGBAJHtlbGVtZW50LmFjY291bnRuYW1lfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlclRleHQuYXBwZW5kQ2hpbGQoYWNjb3VudE5hbWVFbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlckluZm9FbC5hcHBlbmRDaGlsZChuaWNrTmFtZUVsKTtcclxuICAgICAgICAgICAgICAgICAgICB1c2VySW5mb0VsLmFwcGVuZENoaWxkKHVzZXJUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyQW5jaG9yRWwuYXBwZW5kQ2hpbGQodXNlckltZ0VsKTtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyQW5jaG9yRWwuYXBwZW5kQ2hpbGQodXNlckluZm9FbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlckl0ZW1FbC5hcHBlbmRDaGlsZCh1c2VyQW5jaG9yRWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJMaXN0Q29udGVudC5hcHBlbmRDaGlsZCh1c2VySXRlbUVsKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuLy8g67KE7Yq8IO2ZnOyEse2ZlFxyXG5mdW5jdGlvbiBpc0FjdGl2ZUJ0bigpIHtcclxuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJyk7XHJcbiAgICBjb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZCcpO1xyXG4gICAgY29uc3QgcmVnaXN0ZXJGb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZ2lzdGVyRm9ybUJ0bicpO1xyXG4gICAgaWYgKGVtYWlsLnZhbHVlICE9PSAnJyAmJiBwYXNzd29yZC52YWx1ZS5sZW5ndGggPj0gNikge1xyXG4gICAgICAgIHJlZ2lzdGVyRm9ybUJ0bi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgIHJlZ2lzdGVyRm9ybUJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGVtYWlsLnZhbHVlID09PSAnJyB8fCBwYXNzd29yZC52YWx1ZS5sZW5ndGggPCA2KSB7XHJcbiAgICAgICAgcmVnaXN0ZXJGb3JtQnRuLnN0eWxlLm9wYWNpdHkgPSAnMC4zJztcclxuICAgICAgICByZWdpc3RlckZvcm1CdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG59XHJcbi8vIOyeheugpSDssrTtgaxcclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSW5wdXQocGFzc3dvcmQsIGVycm9yUGFzc3dvcmQpIHtcclxuICAgIGlmIChwYXNzd29yZC52YWx1ZS5sZW5ndGggPCA2KSB7XHJcbiAgICAgICAgZXJyb3JQYXNzd29yZC5jbGFzc0xpc3QucmVtb3ZlKCdpcicpO1xyXG4gICAgfVxyXG4gICAgaWYgKHBhc3N3b3JkLnZhbHVlLmxlbmd0aCA+PSA2KSB7XHJcbiAgICAgICAgZXJyb3JQYXNzd29yZC5jbGFzc0xpc3QuYWRkKCdpcicpO1xyXG4gICAgICAgIGlzQWN0aXZlQnRuKCk7XHJcbiAgICB9XHJcbn1cclxuLy8g7ZSE66Gc7ZWEIOyEpOygleycvOuhnCDsnbTrj5lcclxuZnVuY3Rpb24gbG9jYXRpb25SZWdpc3RlclByb2ZpbGUoc3RhdHVzKSB7XHJcbiAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjcHJvZmlsZVJlZ2lzdGVyJztcclxuICAgIH1cclxufVxyXG4vLyDsnbTrqZTsnbwsIOu5hOuwgOuyiO2YuCDroZzsu6wg7Iqk7Yag66as7KeA7JeQIOyggOyepVxyXG5mdW5jdGlvbiBzYXZlRGF0YShzaWduVXBSZXR1cm5EYXRhKSB7XHJcbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpO1xyXG4gICAgY29uc3QgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQnKTtcclxuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2VtYWlsJywgZW1haWwudmFsdWUpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Bhc3N3b3JkJywgcGFzc3dvcmQudmFsdWUpO1xyXG4gICAgbG9jYXRpb25SZWdpc3RlclByb2ZpbGUoc2lnblVwUmV0dXJuRGF0YS5zdGF0dXMpO1xyXG59XHJcbi8vIOyCrOyaqSDqsIDriqXtlZwg7J2066mU7J28IOyytO2BrFxyXG5mdW5jdGlvbiBjaGVja0VtYWlsKHNpZ25VcFJldHVybkRhdGEpIHtcclxuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJyk7XHJcbiAgICBjb25zdCBlcnJvckVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yUGFzc3dvcmQnKTtcclxuICAgIGlmIChzaWduVXBSZXR1cm5EYXRhLm1lc3NhZ2UgPT09ICfsnbTrr7gg6rCA7J6F65CcIOydtOuplOydvCDso7zshowg7J6F64uI64ukLicpIHtcclxuICAgICAgICBlcnJvckVtYWlsLmlubmVyVGV4dCA9IGAqIOydtOuvuCDqsIDsnoXrkJwg7J2066mU7J28IOyjvOyGjCDsnoXri4jri6QuYDtcclxuICAgICAgICBlcnJvckVtYWlsLmNsYXNzTGlzdC5yZW1vdmUoJ2lyJyk7XHJcbiAgICAgICAgZW1haWwub25pbnB1dCA9ICgpID0+IHtcclxuICAgICAgICAgICAgZXJyb3JFbWFpbC5jbGFzc0xpc3QuYWRkKCdpcicpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBzYXZlRGF0YShzaWduVXBSZXR1cm5EYXRhKTtcclxuICAgIH1cclxufVxyXG4vLyDsnbTrqZTsnbwg7Jyg7Zqo7ISxIOqygOyCrFxyXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZEVtYWlsKCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJyk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vYXBpLm1hbmRhcmluLndlbml2LmNvLmtyJztcclxuICAgICAgICBjb25zdCBzZXR0aW5nID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbElucHV0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBlbWFpbFZhbGlkUmVzID0geWllbGQgZmV0Y2goYCR7dXJsfS91c2VyL2VtYWlsdmFsaWRgLCBzZXR0aW5nKTtcclxuICAgICAgICAgICAgY29uc3QgZW1haWxWYWxpZEpzb24gPSB5aWVsZCBlbWFpbFZhbGlkUmVzLmpzb24oKTtcclxuICAgICAgICAgICAgY2hlY2tFbWFpbChlbWFpbFZhbGlkSnNvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IGJhY2tIaXN0b3J5IH0gZnJvbSAnLi9jb21tb24nO1xyXG4vLyDsoovslYTsmpQg66qo65OIXHJcbmV4cG9ydCBmdW5jdGlvbiBsaWtlSGVhcnQocG9zdGluZ0lEKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5tYW5kYXJpbi53ZW5pdi5jby5rci9wb3N0LyR7cG9zdGluZ0lEfS9oZWFydGA7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVG9rZW4nKTtcclxuICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBkYXRhID0geWllbGQgcmVzLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pO1xyXG59XHJcbi8vIOyii+yVhOyalCDst6jshowg66qo65OIXHJcbmV4cG9ydCBmdW5jdGlvbiBsaWtlVW5IZWFydChwb3N0aW5nSUQpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm1hbmRhcmluLndlbml2LmNvLmtyL3Bvc3QvJHtwb3N0aW5nSUR9L3VuaGVhcnRgO1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Rva2VuJyk7XHJcbiAgICAgICAgY29uc3QgcmVzID0geWllbGQgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBkYXRhID0geWllbGQgcmVzLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pO1xyXG59XHJcbi8vIOqyjOyLnOusvCDsi6Dqs6BcclxuZXhwb3J0IGZ1bmN0aW9uIHJlcG9ydFBvc3QocG9zdGluZ0lkKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9ICdodHRwczovL2FwaS5tYW5kYXJpbi53ZW5pdi5jby5rcic7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVG9rZW4nKTtcclxuICAgICAgICBjb25zdCBzZXR0aW5nID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzUmVwb3J0ID0geWllbGQgZmV0Y2goYCR7dXJsfS9wb3N0LyR7cG9zdGluZ0lkfS9yZXBvcnRgLCBzZXR0aW5nKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzUmVwb3J0SnNvbiA9IHlpZWxkIHJlc1JlcG9ydC5qc29uKCk7XHJcbiAgICAgICAgICAgIGlmIChyZXNSZXBvcnRKc29uLnN0YXR1cyAhPT0gNDA0KSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG4vLyDqsozsi5zrrLwg7IKt7KCcXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVQb3N0KHBvc3RpbmdJZCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9hcGkubWFuZGFyaW4ud2VuaXYuY28ua3InO1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Rva2VuJyk7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzRGVsZXRlUHJvZHVjdCA9IHlpZWxkIGZldGNoKGAke3VybH0vcG9zdC8ke3Bvc3RpbmdJZH1gLCBzZXR0aW5nKTtcclxuICAgICAgICAgICAgaWYgKHJlc0RlbGV0ZVByb2R1Y3QpIHtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbi8vIOuMk+q4gCDsi6Dqs6BcclxuZXhwb3J0IGZ1bmN0aW9uIHJlcG9ydENvbW1lbnQoY29tbWVudElkKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9ICdodHRwczovL2FwaS5tYW5kYXJpbi53ZW5pdi5jby5rcic7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVG9rZW4nKTtcclxuICAgICAgICBjb25zdCBwb3N0SWQgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zcGxpdCgncG9zdGlkPScpWzFdO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIGZldGNoKGAke3VybH0vcG9zdC8ke3Bvc3RJZH0vY29tbWVudHMvJHtjb21tZW50SWR9L3JlcG9ydGAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBqc29uID0geWllbGQgcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgaWYgKGpzb24pIHtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG4vLyDrjJPquIAg7IKt7KCcXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVDb21tZW50KGNvbW1lbnRJZCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9hcGkubWFuZGFyaW4ud2VuaXYuY28ua3InO1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Rva2VuJyk7XHJcbiAgICAgICAgY29uc3QgcG9zdElkID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJ3Bvc3RpZD0nKVsxXTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBmZXRjaChgJHt1cmx9L3Bvc3QvJHtwb3N0SWR9L2NvbW1lbnRzLyR7Y29tbWVudElkfWAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBqc29uID0geWllbGQgcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgaWYgKGpzb24uc3RhdHVzID09PSAnMjAwJykge1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbi8vIOydtOuvuOyngCDsl4XroZzrk5xcclxuZXhwb3J0IGZ1bmN0aW9uIGltYWdlVXBsb2FkKGZvcm1EYXRhKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9ICdodHRwczovL2FwaS5tYW5kYXJpbi53ZW5pdi5jby5rcic7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaCh1cmwgKyAnL2ltYWdlL3VwbG9hZGZpbGVzJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBmb3JtRGF0YSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlVXJsID0geWllbGQgZGF0YVswXS5maWxlbmFtZTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ltYWdlVXJsJywgaW1hZ2VVcmwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuLy8g7IOB7ZKIIOydtOuvuOyngCDrk7HroZ1cclxuZXhwb3J0IGZ1bmN0aW9uIHByb2R1Y3RJbWFnZVVwbG9hZChmb3JtRGF0YSkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9hcGkubWFuZGFyaW4ud2VuaXYuY28ua3InO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2godXJsICsgJy9pbWFnZS91cGxvYWRmaWxlcycsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgYm9keTogZm9ybURhdGEsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZVVybCA9IHlpZWxkIGRhdGFbMF0uZmlsZW5hbWU7XHJcbiAgICAgICAgICAgIHJldHVybiBpbWFnZVVybDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9kdWN0U2F2ZShwcm9kdWN0TmFtZUZvcm0sIHByb2R1Y3RQcmljZUZvcm0sIHByb2R1Y3RDb250ZW50Rm9ybSkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUb2tlbicpO1xyXG4gICAgICAgIGNvbnN0IHVybCA9ICdodHRwczovL2FwaS5tYW5kYXJpbi53ZW5pdi5jby5rcic7XHJcbiAgICAgICAgY29uc3QgaW1hZ2VVcmwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnUHJvZHVjdEltZycpO1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RJbmZvID0ge1xyXG4gICAgICAgICAgICBwcm9kdWN0OiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtTmFtZTogcHJvZHVjdE5hbWVGb3JtLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IHBhcnNlSW50KHByb2R1Y3RQcmljZUZvcm0udmFsdWUucmVwbGFjZSgvLC9nLCAnJykpLFxyXG4gICAgICAgICAgICAgICAgbGluazogcHJvZHVjdENvbnRlbnRGb3JtLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgaXRlbUltYWdlOiBpbWFnZVVybCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHByb2R1Y3RJbmZvKSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcVBvc3RpbmcgPSB5aWVsZCBmZXRjaChgJHt1cmx9L3Byb2R1Y3RgLCBzZXR0aW5nKTtcclxuICAgICAgICAgICAgaWYgKHJlcVBvc3Rpbmcuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIGJhY2tIaXN0b3J5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG4vLyDtlITroZztlYQg7IiY7KCVXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVQcm9maWxlKCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUb2tlbicpO1xyXG4gICAgICAgIGNvbnN0IHVybCA9ICdodHRwczovL2FwaS5tYW5kYXJpbi53ZW5pdi5jby5rcic7XHJcbiAgICAgICAgY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKTtcclxuICAgICAgICBjb25zdCBpbnB1dElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lkJyk7XHJcbiAgICAgICAgY29uc3QgaW5wdXRJbnRyb2R1Y2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW50cm9kdWNlJyk7XHJcbiAgICAgICAgY29uc3QgaW1hZ2VVcmwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW1hZ2VVcmwnKTtcclxuICAgICAgICBjb25zdCBhbGVydE1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxlcnRNZXNzYWdlJyk7XHJcbiAgICAgICAgY29uc3QgdXNlclByb2ZpbGVJbmZvID0ge1xyXG4gICAgICAgICAgICB1c2VyOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogaW5wdXROYW1lLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgYWNjb3VudG5hbWU6IGlucHV0SWQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBpbnRybzogaW5wdXRJbnRyb2R1Y2UudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogYCR7aW1hZ2VVcmx9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlclByb2ZpbGVJbmZvKSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc0VkaXRQcm9maWxlID0geWllbGQgZmV0Y2goYCR7dXJsfS91c2VyYCwgc2V0dGluZyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc0VkaXRQcm9maWxlSnNvbiA9IHlpZWxkIHJlc0VkaXRQcm9maWxlLmpzb24oKTtcclxuICAgICAgICAgICAgLy8g7J2R64u1IOyEseqzteyLnFxyXG4gICAgICAgICAgICBpZiAocmVzRWRpdFByb2ZpbGUuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY2NvdW50bmFtZScsIGlucHV0SWQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgYmFja0hpc3RvcnkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0TWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdpcicpO1xyXG4gICAgICAgICAgICAgICAgYWxlcnRNZXNzYWdlLmlubmVyVGV4dCA9IGAqJHtyZXNFZGl0UHJvZmlsZUpzb24ubWVzc2FnZX1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbi8vIO2UhOuhnO2VhCDsoJXrs7RcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2ZpbGUoYWNjb3VudE5hbWUpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vYXBpLm1hbmRhcmluLndlbml2LmNvLmtyJztcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUb2tlbicpO1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc1Byb2ZpbGUgPSB5aWVsZCBmZXRjaChgJHt1cmx9L3Byb2ZpbGUvJHthY2NvdW50TmFtZX1gLCBzZXR0aW5nKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzUHJvZmlsZUpzb24gPSB5aWVsZCByZXNQcm9maWxlLmpzb24oKTtcclxuICAgICAgICAgICAgY29uc3QgdXNlclByb2ZpbGUgPSByZXNQcm9maWxlSnNvbi5wcm9maWxlO1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlclByb2ZpbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbi8vIOqyjOyLnOusvCDtmZXsnbhcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc3RpbmcoKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9ICdodHRwczovL2FwaS5tYW5kYXJpbi53ZW5pdi5jby5rcic7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVG9rZW4nKTtcclxuICAgICAgICBjb25zdCBteUFjY291bnROYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY291bnRuYW1lJyk7XHJcbiAgICAgICAgbGV0IGFjY291bnROYW1lID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJ2FjY291bnRuYW1lPScpWzFdO1xyXG4gICAgICAgIGFjY291bnROYW1lID0gYWNjb3VudE5hbWUgPT0gbnVsbCA/IG15QWNjb3VudE5hbWUgOiBhY2NvdW50TmFtZTtcclxuICAgICAgICBjb25zdCBzZXR0aW5nID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNQcm9maWxlUHJvZHVjdCA9IHlpZWxkIGZldGNoKGAke3VybH0vcG9zdC8ke2FjY291bnROYW1lfS91c2VycG9zdC8/bGltaXQ9OWAsIHNldHRpbmcpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNQcm9maWxlUHJvZHVjdEpzb24gPSB5aWVsZCByZXNQcm9maWxlUHJvZHVjdC5qc29uKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJQb3N0SW5mbyA9IHJlc1Byb2ZpbGVQcm9kdWN0SnNvbi5wb3N0O1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlclBvc3RJbmZvO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG4iLCIvLyDrkqTroZwg6rCA6riwXHJcbmV4cG9ydCBmdW5jdGlvbiBiYWNrSGlzdG9yeSgpIHtcclxuICAgIHJldHVybiB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XHJcbn1cclxuLy8g6rKM7Iuc66y8IOuTseuhnSDsi5zqsIQg6rOE7IKwIO2VqOyImFxyXG5leHBvcnQgZnVuY3Rpb24gdGltZUZvclRvZGF5KHRpbWUpIHtcclxuICAgIGNvbnN0IEtSX1RJTUVfRElGRiA9IDkgKiA2MCAqIDYwICogMTAwMDtcclxuICAgIGNvbnN0IHBvc3RpbmdEYXRlID0gdGltZS5zdWJzdHJpbmcoMCwgdGltZS5sZW5ndGggLSAxKTtcclxuICAgIGNvbnN0IG1zID0gRGF0ZS5wYXJzZShwb3N0aW5nRGF0ZSkgKyBLUl9USU1FX0RJRkY7XHJcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgY29uc3QgZ2FwID0gKG5vdyAtIG1zKSAvIDEwMDA7XHJcbiAgICBpZiAoZ2FwIDwgNjApXHJcbiAgICAgICAgcmV0dXJuICfrsKnquIjsoIQnO1xyXG4gICAgZWxzZSBpZiAoZ2FwIDwgMzYwMClcclxuICAgICAgICByZXR1cm4gYCR7TWF0aC5mbG9vcihnYXAgLyA2MCl9IOu2hCDsoIRgO1xyXG4gICAgZWxzZSBpZiAoZ2FwIDwgODY0MDApXHJcbiAgICAgICAgcmV0dXJuIGAke01hdGguZmxvb3IoZ2FwIC8gMzYwMCl97Iuc6rCEIOyghGA7XHJcbiAgICBlbHNlIGlmIChnYXAgPCAyNTkyMDAwKVxyXG4gICAgICAgIHJldHVybiBgJHtNYXRoLmZsb29yKGdhcCAvIDg2NDAwKX3snbwg7KCEYDtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gYCR7TWF0aC5mbG9vcihnYXAgLyAyNTkyMDAwKX3ri6wg7KCEYDtcclxufVxyXG4vLyDqsoDsg4kgQVBJIO2YuOy2nCDstZzsoIHtmZRcclxuZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHRpbWVvdXQgPSA1MDApIHtcclxuICAgIGxldCB0aW1lcjtcclxuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZnVuYyguLi5hcmdzKTtcclxuICAgICAgICB9LCB0aW1lb3V0KTtcclxuICAgIH07XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCBIb21lIGZyb20gJy4vcGFnZXMvaG9tZVBhZ2UnO1xyXG5pbXBvcnQgQ2hhdCBmcm9tICcuL3BhZ2VzL2NoYXRQYWdlJztcclxuaW1wb3J0IENoYXR0aW5nMSBmcm9tICcuL3BhZ2VzL2NoYXR0aW5nUGFnZTEnO1xyXG5pbXBvcnQgQ2hhdHRpbmcyIGZyb20gJy4vcGFnZXMvY2hhdHRpbmdQYWdlMic7XHJcbmltcG9ydCBDaGF0dGluZzMgZnJvbSAnLi9wYWdlcy9jaGF0dGluZ1BhZ2UzJztcclxuaW1wb3J0IENoYXR0aW5nNCBmcm9tICcuL3BhZ2VzL2NoYXR0aW5nUGFnZTQnO1xyXG5pbXBvcnQgRWRpdFByb2ZpbGUgZnJvbSAnLi9wYWdlcy9lZGl0UHJvZmlsZVBhZ2UnO1xyXG5pbXBvcnQgUHJvZmlsZSBmcm9tICcuL3BhZ2VzL3Byb2ZpbGVQYWdlJztcclxuaW1wb3J0IFByb2ZpbGVGb2xsb3cgZnJvbSAnLi9wYWdlcy9wcm9maWxlRm9sbG93UGFnZSc7XHJcbmltcG9ydCBQcm9maWxlUmVnaXN0ZXIgZnJvbSAnLi9wYWdlcy9wcm9maWxlUmVnaXN0ZXJQYWdlJztcclxuaW1wb3J0IEVycm9yIGZyb20gJy4vcGFnZXMvZXJyb3JQYWdlJztcclxuaW1wb3J0IEludHJvIGZyb20gJy4vcGFnZXMvaW50cm9QYWdlJztcclxuaW1wb3J0IExvZ2luIGZyb20gJy4vcGFnZXMvbG9naW5QYWdlJztcclxuaW1wb3J0IE1haW4gZnJvbSAnLi9wYWdlcy9tYWluUGFnZSc7XHJcbmltcG9ydCBQb3N0IGZyb20gJy4vcGFnZXMvcG9zdFBhZ2UnO1xyXG5pbXBvcnQgUG9zdFVwbG9hZCBmcm9tICcuL3BhZ2VzL3Bvc3RVcGxvYWRQYWdlJztcclxuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi9wYWdlcy9wcm9kdWN0UGFnZSc7XHJcbmltcG9ydCBGb2xsb3cgZnJvbSAnLi9wYWdlcy9wcm9maWxlRm9sbG93UGFnZSc7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9wYWdlcy9zZWFyY2hQYWdlJztcclxuaW1wb3J0IFNpZ25VcCBmcm9tICcuL3BhZ2VzL3NpZ25VcFBhZ2UnO1xyXG5jb25zdCByb3V0ZXMgPSB7XHJcbiAgICAnLyc6IE1haW4sXHJcbiAgICAnI2ludHJvJzogSW50cm8sXHJcbiAgICAnI2xvZ2luJzogTG9naW4sXHJcbiAgICAnI3NpZ251cCc6IFNpZ25VcCxcclxuICAgICcjaG9tZSc6IEhvbWUsXHJcbiAgICAnI2NoYXQnOiBDaGF0LFxyXG4gICAgJyNjaGF0dGluZzEnOiBDaGF0dGluZzEsXHJcbiAgICAnI2NoYXR0aW5nMic6IENoYXR0aW5nMixcclxuICAgICcjY2hhdHRpbmczJzogQ2hhdHRpbmczLFxyXG4gICAgJyNjaGF0dGluZzQnOiBDaGF0dGluZzQsXHJcbiAgICAnI2VkaXRQcm9maWxlJzogRWRpdFByb2ZpbGUsXHJcbiAgICAnI3Byb2ZpbGUnOiBQcm9maWxlLFxyXG4gICAgJyNwcm9maWxlRm9sbG93JzogUHJvZmlsZUZvbGxvdyxcclxuICAgICcjcHJvZmlsZVJlZ2lzdGVyJzogUHJvZmlsZVJlZ2lzdGVyLFxyXG4gICAgJyNlcnJvcic6IEVycm9yLFxyXG4gICAgJyNtYWluJzogTWFpbixcclxuICAgICcjcG9zdCc6IFBvc3QsXHJcbiAgICAnI3Bvc3RVcGxvYWQnOiBQb3N0VXBsb2FkLFxyXG4gICAgJyNwcm9kdWN0JzogUHJvZHVjdCxcclxuICAgICcjZm9sbG93JzogRm9sbG93LFxyXG4gICAgJyNzZWFyY2gnOiBTZWFyY2gsXHJcbn07XHJcbmNvbnN0IHJvdXRlciA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xyXG4gICAgbGV0IHBhcnNlZFVSTCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoID8gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJz8nKVswXSA6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuICAgIGxldCBwYWdlID0gcm91dGVzW3BhcnNlZFVSTF0gPyByb3V0ZXNbcGFyc2VkVVJMXSA6IHJvdXRlc1snI2Vycm9yJ107XHJcbiAgICBsZXQgcmVuZGVyUGFnZSA9IG5ldyBwYWdlKCk7XHJcbiAgICAvLyDsp4HsoIQg7Y6Y7J207KeAIOy0iOq4sO2ZlFxyXG4gICAgY29udGVudCA/IChjb250ZW50LmlubmVySFRNTCA9ICcnKSA6IG51bGw7XHJcbiAgICB5aWVsZCByZW5kZXJQYWdlLnJlbmRlcihjb250ZW50KTtcclxufSk7XHJcbi8vIO2VtOyLnCDrs4Dqsr0g7J2067Kk7Yq4XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgcm91dGVyKTtcclxuLy8g7Y6Y7J207KeAIOuhnOuTnCDsnbTrsqTtirhcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCByb3V0ZXIpO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoID09PSAnJykge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyNpbnRybyc7XHJcbiAgICB9XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=