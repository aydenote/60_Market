import { clickChatModal } from '../script/modal.js';
import { backHistory } from '../script/common.js';

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
    backImgEl.addEventListener('click', backHistory);
    chatUserPEl.classList.add('headerBarText');
    chatUserPEl.classList.add('headerBarInput');
    chatUserPEl.innerText = '케로피';
    menuImgEl.classList.add('headerBarModal');
    menuImgEl.classList.add('headerBarBtn');
    menuImgEl.classList.add('buttonClick');
    menuImgEl.setAttribute('src', '../asset/images/icons/icon__menu.svg');
    menuImgEl.setAttribute('alt', '메뉴');
    menuImgEl.addEventListener('click', () => {
      clickChatModal();
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
    chatTextInputEl.maxLength = '100';
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

export default ChattingPage2;
