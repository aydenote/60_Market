import App from "../app.js";
import { clickChatModal } from "../newScript/modal.js";
const config = {
  rootEl: "#root",
};

class ChattingPage1 {
  render() {
    // header
    const headerEl = document.createElement("header");
    const heading1El = document.createElement("h1");
    const articleHeaderEl = document.createElement("article");
    const backImgEl = document.createElement("img");
    const chatUserPEl = document.createElement("p");
    const menuImgEl = document.createElement("img");

    headerEl.classList.add("chatHeader");
    heading1El.classList.add("ir");
    heading1El.innerText = "포챠코님 채팅방";
    articleHeaderEl.classList.add("headerBar");
    backImgEl.classList.add("headerBarBack");
    backImgEl.classList.add("buttonClick");
    backImgEl.setAttribute("src", "../asset/images/icons/icon__arrowLeft.svg");
    backImgEl.setAttribute("alt", "뒤로 가기");
    backImgEl.addEventListener("click", () => {
      console.log("뒤로 가기");
    });
    chatUserPEl.classList.add("headerBarText");
    chatUserPEl.classList.add("headerBarInput");
    chatUserPEl.innerText = "포챠코";
    menuImgEl.classList.add("headerBarModal");
    menuImgEl.classList.add("headerBarBtn");
    menuImgEl.classList.add("buttonClick");
    menuImgEl.setAttribute("src", "../asset/images/icons/icon__menu.svg");
    menuImgEl.setAttribute("alt", "메뉴");
    menuImgEl.addEventListener("click", () => {
      clickChatModal();
    });

    articleHeaderEl.appendChild(backImgEl);
    articleHeaderEl.appendChild(chatUserPEl);
    articleHeaderEl.appendChild(menuImgEl);
    headerEl.appendChild(heading1El);
    headerEl.appendChild(articleHeaderEl);

    // main
    const mainEl = document.createElement("main");
    const chatIn1ArticleEl = document.createElement("article");
    const chatIn1ProfileImgEl = document.createElement("img");
    const chatIn1SectionEl = document.createElement("section");
    const chatIn1TextPEl = document.createElement("p");
    const chatIn1DatePEl = document.createElement("p");

    mainEl.classList.add("chatScreen");
    chatIn1ArticleEl.classList.add("chatMsg");
    chatIn1ArticleEl.classList.add("chatIncommingMsg");
    chatIn1ProfileImgEl.setAttribute(
      "src",
      "../asset/images/user/pochacco.png"
    );
    chatIn1ProfileImgEl.setAttribute("alt", "프로필 이미지");
    chatIn1ProfileImgEl.classList.add("userProfileImage");
    chatIn1SectionEl.classList.add("chatMsgContent");
    chatIn1TextPEl.classList.add("chatMsgText");
    chatIn1TextPEl.innerText = "안녕하세요!";
    chatIn1DatePEl.classList.add("chatMsgDate");
    chatIn1DatePEl.innerText = "12:39";

    chatIn1SectionEl.appendChild(chatIn1TextPEl);
    chatIn1SectionEl.appendChild(chatIn1DatePEl);
    chatIn1ArticleEl.appendChild(chatIn1ProfileImgEl);
    chatIn1ArticleEl.appendChild(chatIn1SectionEl);

    const chatIn2ArticleEl = document.createElement("article");
    const chatIn2ProfileImgEl = document.createElement("img");
    const chatIn2SectionEl = document.createElement("section");
    const chatIn2TextPEl = document.createElement("p");
    const chatIn2DatePEl = document.createElement("p");

    chatIn2ArticleEl.classList.add("chatMsg");
    chatIn2ArticleEl.classList.add("chatIncommingMsg");
    chatIn2ProfileImgEl.setAttribute(
      "src",
      "../asset/images/user/pochacco.png"
    );
    chatIn2ProfileImgEl.setAttribute("alt", "프로필 이미지");
    chatIn2ProfileImgEl.classList.add("userProfileImage");
    chatIn2SectionEl.classList.add("chatMsgContent");
    chatIn2TextPEl.classList.add("chatMsgText");
    chatIn2TextPEl.innerText = "당근 뽑기 알바 지원 하셨죠?";
    chatIn2DatePEl.classList.add("chatMsgDate");
    chatIn2DatePEl.innerText = "12:41";

    chatIn2SectionEl.appendChild(chatIn2TextPEl);
    chatIn2SectionEl.appendChild(chatIn2DatePEl);
    chatIn2ArticleEl.appendChild(chatIn2ProfileImgEl);
    chatIn2ArticleEl.appendChild(chatIn2SectionEl);

    const chatOut1ArticleEl = document.createElement("article");
    const chatOut1SectionEl = document.createElement("section");
    const chatOut1TextPEl = document.createElement("p");
    const chatOut1DatePEl = document.createElement("p");

    chatOut1ArticleEl.classList.add("chatMsg");
    chatOut1ArticleEl.classList.add("chatOutgoingMsg");
    chatOut1SectionEl.classList.add("chatMsgContent");
    chatOut1TextPEl.classList.add("chatMsgText");
    chatOut1TextPEl.innerText = "네! 제가 준비된 농부 입니다. 🧑🏻‍🌾";
    chatOut1DatePEl.classList.add("chatMsgDate");
    chatOut1DatePEl.innerText = "12:49";

    chatOut1SectionEl.appendChild(chatOut1TextPEl);
    chatOut1SectionEl.appendChild(chatOut1DatePEl);
    chatOut1ArticleEl.appendChild(chatOut1SectionEl);

    const chatIn3ArticleEl = document.createElement("article");
    const chatIn3ProfileImgEl = document.createElement("img");
    const chatIn3SectionEl = document.createElement("section");
    const chatIn3TextPEl = document.createElement("p");
    const chatIn3DatePEl = document.createElement("p");

    chatIn3ArticleEl.classList.add("chatMsg");
    chatIn3ArticleEl.classList.add("chatIncommingMsg");
    chatIn3ProfileImgEl.setAttribute(
      "src",
      "../asset/images/user/pochacco.png"
    );
    chatIn3ProfileImgEl.setAttribute("alt", "프로필 이미지");
    chatIn3ProfileImgEl.classList.add("userProfileImage");
    chatIn3SectionEl.classList.add("chatMsgContent");
    chatIn3TextPEl.classList.add("chatMsgText");
    chatIn3TextPEl.innerText = "당근 뽑기 해보신 적 있나요? 😆";
    chatIn3DatePEl.classList.add("chatMsgDate");
    chatIn3DatePEl.innerText = "12:51";

    chatIn3SectionEl.appendChild(chatIn3TextPEl);
    chatIn3SectionEl.appendChild(chatIn3DatePEl);
    chatIn3ArticleEl.appendChild(chatIn3ProfileImgEl);
    chatIn3ArticleEl.appendChild(chatIn3SectionEl);

    const chatOut2ArticleEl = document.createElement("article");
    const chatOut2SectionEl = document.createElement("section");
    const chatOut2TextPEl = document.createElement("p");
    const chatOut2DatePEl = document.createElement("p");

    chatOut2ArticleEl.classList.add("chatMsg");
    chatOut2ArticleEl.classList.add("chatOutgoingMsg");
    chatOut2SectionEl.classList.add("chatMsgContent");
    chatOut2TextPEl.classList.add("chatMsgText");
    chatOut2TextPEl.innerText = "사실 없습니다 😅";
    chatOut2DatePEl.classList.add("chatMsgDate");
    chatOut2DatePEl.innerText = "12:55";

    chatOut2SectionEl.appendChild(chatOut2TextPEl);
    chatOut2SectionEl.appendChild(chatOut2DatePEl);
    chatOut2ArticleEl.appendChild(chatOut2SectionEl);

    mainEl.appendChild(chatIn1ArticleEl);
    mainEl.appendChild(chatIn2ArticleEl);
    mainEl.appendChild(chatOut1ArticleEl);
    mainEl.appendChild(chatIn3ArticleEl);
    mainEl.appendChild(chatOut2ArticleEl);

    // footer
    const footerEl = document.createElement("footer");
    const chatImgFormEl = document.createElement("form");
    const chatLabelEl = document.createElement("label");
    const uploadImgEl = document.createElement("img");
    const selectImgInputEl = document.createElement("input");
    const chatTextFormEl = document.createElement("form");
    const chatTextInputEl = document.createElement("input");
    const chatBtnEl = document.createElement("button");

    footerEl.classList.add("chatEnter");
    chatImgFormEl.classList.add("chatEnterImage");
    chatLabelEl.classList.add("chatSelectImage");
    uploadImgEl.setAttribute(
      "src",
      "../asset/images/icons/icon__imagesUplode.svg"
    );
    uploadImgEl.setAttribute("alt", "");
    selectImgInputEl.id = "chatSelectImage";
    selectImgInputEl.setAttribute("type", "file");
    selectImgInputEl.accept = "image/*";
    chatTextFormEl.classList.add("chatEnterContent");
    chatTextInputEl.placeholder = "메시지 입력하기...";
    chatTextInputEl.type = "text";
    chatTextInputEl.maxLength = "100";
    chatBtnEl.type = "button";
    chatBtnEl.innerText = "전송";

    chatTextFormEl.appendChild(chatTextInputEl);
    chatTextFormEl.appendChild(chatBtnEl);
    chatLabelEl.appendChild(uploadImgEl);
    chatImgFormEl.appendChild(chatLabelEl);
    chatImgFormEl.appendChild(selectImgInputEl);
    footerEl.appendChild(chatImgFormEl);
    footerEl.appendChild(chatTextFormEl);

    return { headerEl, mainEl, footerEl };
  }
}

export default ChattingPage1;
