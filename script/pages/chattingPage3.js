import { clickChatModal } from "../modal.js";

class ChattingPage3 {
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
    heading1El.innerText = "붕붕님 채팅방";
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
    chatUserPEl.innerText = "붕붕";
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
      "../asset/images/basic-profile.svg"
    );
    chatIn1ProfileImgEl.setAttribute("alt", "프로필 이미지");
    chatIn1ProfileImgEl.classList.add("userProfileImage");
    chatIn1SectionEl.classList.add("chatMsgContent");
    chatIn1TextPEl.classList.add("chatMsgText");
    chatIn1TextPEl.innerText =
      "내 차는 내가 평가한다. 오픈 이벤트 참여하고 경품 받아가세요! ⬇️ 무료 상담 ✨ www.zzzgozldekdgka.com";
    chatIn1DatePEl.classList.add("chatMsgDate");
    chatIn1DatePEl.innerText = "12:39";

    chatIn1SectionEl.appendChild(chatIn1TextPEl);
    chatIn1SectionEl.appendChild(chatIn1DatePEl);
    chatIn1ArticleEl.appendChild(chatIn1ProfileImgEl);
    chatIn1ArticleEl.appendChild(chatIn1SectionEl);

    mainEl.appendChild(chatIn1ArticleEl);

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

export default ChattingPage3;
