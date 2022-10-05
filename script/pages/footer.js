import App from "../app.js";

const config = {
  rootEl: "#root",
};

class Footer {
  render(link) {
    //footer
    const footerEl = document.createElement("footer");
    const navBarEl = document.createElement("nav");
    const ulEl = document.createElement("ul");
    navBarEl.classList.add("navBar");
    ulEl.classList.add("navList");

    // 홈
    const homeliEl = document.createElement("li");
    const homeDivEl = document.createElement("div");
    const homeArticleEl = document.createElement("article");
    const homePEl = document.createElement("p");

    homeDivEl.classList.add("nav");
    homeDivEl.addEventListener("click", clickHome);
    homeArticleEl.classList.add("navIcon");
    homeArticleEl.classList.add("navHome");

    homePEl.classList.add("navText");
    homePEl.innerText = "홈";

    homeDivEl.appendChild(homeArticleEl);
    homeDivEl.appendChild(homePEl);
    homeliEl.appendChild(homeDivEl);
    ulEl.appendChild(homeliEl);

    // 채팅
    const chatliEl = document.createElement("li");
    const chatDivEl = document.createElement("div");
    const chatArticleEl = document.createElement("article");
    const chatPEl = document.createElement("p");

    chatDivEl.classList.add("nav");
    chatDivEl.addEventListener("click", clickChat);
    chatArticleEl.classList.add("navIcon");
    chatArticleEl.classList.add("navChat");

    chatPEl.classList.add("navText");
    chatPEl.innerText = "채팅";

    chatDivEl.appendChild(chatArticleEl);
    chatDivEl.appendChild(chatPEl);
    chatliEl.appendChild(chatDivEl);
    ulEl.appendChild(chatliEl);

    // 포스트
    const postliEl = document.createElement("li");
    const postDivEl = document.createElement("div");
    const postArticleEl = document.createElement("article");
    const postPEl = document.createElement("p");

    postDivEl.classList.add("nav");
    postDivEl.addEventListener("click", () => {
      window.history.pushState({}, "", "/postUpload"); // 주소 업데이트
      new App(config).setup();
    });
    postArticleEl.classList.add("navIcon");
    postArticleEl.classList.add("navPosting");

    postPEl.classList.add("navText");
    postPEl.innerText = "게시물 작성";

    postDivEl.appendChild(postArticleEl);
    postDivEl.appendChild(postPEl);
    postliEl.appendChild(postDivEl);
    ulEl.appendChild(postliEl);

    // 프로필
    const profileliEl = document.createElement("li");
    const profileDivEl = document.createElement("div");
    const profileArticleEl = document.createElement("article");
    const profilePEl = document.createElement("p");

    profileDivEl.classList.add("nav");
    profileDivEl.addEventListener("click", clickProfile);
    profileArticleEl.classList.add("navIcon");
    profileArticleEl.classList.add("navProfile");

    profilePEl.classList.add("navText");
    profilePEl.innerText = "프로필";

    profileDivEl.appendChild(profileArticleEl);
    profileDivEl.appendChild(profilePEl);
    profileliEl.appendChild(profileDivEl);
    ulEl.appendChild(profileliEl);

    navBarEl.appendChild(ulEl);
    footerEl.appendChild(navBarEl);

    // NavBar icon 클래스 변경하여 색 변화
    if (link === "home") {
      homeArticleEl.classList.replace("navHome", "navHomeSelected");
      chatArticleEl.classList.replace("navChatSelected", "navChat");
      postArticleEl.classList.replace("navPostingSelected", "navPosting");
      profileArticleEl.classList.replace("navProfileSelected", "navProfile");
    } else if (link === "chat") {
      homeArticleEl.classList.replace("navHomeSelected", "navHome");
      chatArticleEl.classList.replace("navChat", "navChatSelected");
      postArticleEl.classList.replace("navPostingSelected", "navPosting");
      profileArticleEl.classList.replace("navProfileSelected", "navProfile");
    } else if (link === "profile") {
      homeArticleEl.classList.replace("navHomeSelected", "navHome");
      chatArticleEl.classList.replace("navChatSelected", "navChat");
      postArticleEl.classList.replace("navPostingSelected", "navPosting");
      profileArticleEl.classList.replace("navProfile", "navProfileSelected");
    }

    // NavBar icon 클릭 시 해당 페이지로 이동
    function clickHome() {
      window.history.pushState({}, "", "/home"); // 주소 업데이트
      new App(config).setup();
    }

    function clickChat() {
      window.history.pushState({}, "", "/chat"); // 주소 업데이트
      new App(config).setup();
    }

    function clickProfile() {
      window.history.pushState({}, "", "/profile"); // 주소 업데이트
      new App(config).setup();
    }

    return footerEl;
  }
}

export default Footer;
