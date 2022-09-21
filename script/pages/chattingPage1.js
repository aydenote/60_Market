import App from "../app.js";
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

    mainEl.appendChild(chatIn1ArticleEl);
    mainEl.appendChild(chatIn2ArticleEl);
    mainEl.appendChild(chatOut1ArticleEl);

    return { headerEl, mainEl };
  }
}

export default ChattingPage1;

/* 
    <main class="chatScreen">
     
      <!-- 발신 메시지 -->
      <article class="chatMsg chatOutgoingMsg">
        <section class="chatMsgContent">
          <!-- 메시지 내용 -->
          <p class="chatMsgText">네! 제가 준비된 농부 입니다. 🧑🏻‍🌾</p>
          <!-- 메시지 날짜 -->
          <p class="chatMsgDate">12:49</p>
        </section>
      </article>
      <!-- 수신 메시지 -->
      <article class="chatMsg chatIncommingMsg">
        <!-- 수신 메시지 유저 프로필 사진 -->
        <img
          src="../asset/images/user/pochacco.png"
          alt="프로필 이미지"
          class="userProfileImage"
        />
        <section class="chatMsgContent">
          <!-- 메시지 내용 -->
          <p class="chatMsgText">당근 뽑기 해보신 적 있나요? 😆</p>
          <!-- 메시지 날짜 -->
          <p class="chatMsgDate">12:51</p>
        </section>
      </article>
      <!-- 발신 메시지 -->
      <article class="chatMsg chatOutgoingMsg">
        <section class="chatMsgContent">
          <!-- 메시지 내용 -->
          <p class="chatMsgText">사실 없습니다 😅</p>
          <!-- 메시지 날짜 -->
          <p class="chatMsgDate">12:55</p>
        </section>
      </article>
    </main>

    <!-- 채팅 입력 -->
    <footer class="chatEnter">
      <form class="chatEnterImage">
        <label for="chatSelectImage">
          <img src="../asset/images/icons/icon__imagesUplode.svg" alt="" />
        </label>
        <input id="chatSelectImage" type="file" accept="image/*" />
      </form>
      <form class="chatEnterContent">
        <input type="text" placeholder="메시지 입력하기..." maxlength="100" />
        <button type="button">전송</button>
      </form>
    </footer>

    <section class="modalBg chatModal hidden">
      <article class="modal appear">
        <button class="modalClose">
          <span class="ir">채팅방 나가기 버튼</span>
        </button>
        <button class="modalBtn modalBtn1">채팅방 나가기</button>
      </article>
    </section> */
