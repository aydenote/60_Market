import Footer from './footer.js';
import { backHistory } from '../utils/common.js';

class ChatPage {
  render(content) {
    const url = window.location.pathname.replace('/', '');
    const footer = new Footer();
    const footerEl = footer.render(url);
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
    backImgEl.addEventListener('click', backHistory);

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

export default ChatPage;
