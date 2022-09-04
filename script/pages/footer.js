import App from "../app.js";

const config = {
  rootEl: "#root",
};

class Footer {
  render() {
    //footer
    // const root = document.createElement("div");
    const footerEl = document.createElement("footer");
    const navBarEl = document.createElement("nav");
    const ulEl = document.createElement("ul");
    navBarEl.classList.add("navBar");
    ulEl.classList.add("navList");

    // 홈
    const homeliEl = document.createElement("li");
    const homeAnchorEl = document.createElement("a");
    const homeArticleEl = document.createElement("article");
    const homePEl = document.createElement("p");

    homeAnchorEl.classList.add("nav");
    homeAnchorEl.addEventListener("click", () => {
      window.history.pushState({}, "", "/home"); // 주소 업데이트
      new App(config).setup();
    });
    homeArticleEl.classList.add("navIcon");
    homeArticleEl.classList.add("navHomeSelected");

    homePEl.classList.add("navText");
    homePEl.innerText = "홈";

    homeAnchorEl.appendChild(homeArticleEl);
    homeAnchorEl.appendChild(homePEl);
    homeliEl.appendChild(homeAnchorEl);
    ulEl.appendChild(homeliEl);

    // 채팅
    const chatliEl = document.createElement("li");
    const chatAnchorEl = document.createElement("a");
    const chatArticleEl = document.createElement("article");
    const chatPEl = document.createElement("p");

    chatAnchorEl.classList.add("nav");
    chatAnchorEl.addEventListener("click", () => {
      window.history.pushState({}, "", "/chat"); // 주소 업데이트
      new App(config).setup();
    });
    chatArticleEl.classList.add("navIcon");
    chatArticleEl.classList.add("navChat");

    chatPEl.classList.add("navText");
    chatPEl.innerText = "채팅";

    chatAnchorEl.appendChild(chatArticleEl);
    chatAnchorEl.appendChild(chatPEl);
    chatliEl.appendChild(chatAnchorEl);
    ulEl.appendChild(chatliEl);

    // 포스트
    const postliEl = document.createElement("li");
    const postAnchorEl = document.createElement("a");
    const postArticleEl = document.createElement("article");
    const postPEl = document.createElement("p");

    postAnchorEl.classList.add("nav");
    postAnchorEl.addEventListener("click", () => {
      window.history.pushState({}, "", "/post"); // 주소 업데이트
      new App(config).setup();
    });
    postArticleEl.classList.add("navIcon");
    postArticleEl.classList.add("navPosting");

    postPEl.classList.add("navText");
    postPEl.innerText = "게시물 작성";

    postAnchorEl.appendChild(postArticleEl);
    postAnchorEl.appendChild(postPEl);
    postliEl.appendChild(postAnchorEl);
    ulEl.appendChild(postliEl);

    // 프로필
    const profileliEl = document.createElement("li");
    const profileAnchorEl = document.createElement("a");
    const profileArticleEl = document.createElement("article");
    const profilePEl = document.createElement("p");

    profileAnchorEl.classList.add("nav");
    profileAnchorEl.addEventListener("click", () => {
      window.history.pushState({}, "", "/profile"); // 주소 업데이트
      new App(config).setup();
    });
    profileArticleEl.classList.add("navIcon");
    profileArticleEl.classList.add("navProfile");

    profilePEl.classList.add("navText");
    profilePEl.innerText = "프로필";

    profileAnchorEl.appendChild(profileArticleEl);
    profileAnchorEl.appendChild(profilePEl);
    profileliEl.appendChild(profileAnchorEl);
    ulEl.appendChild(profileliEl);

    navBarEl.appendChild(ulEl);
    footerEl.appendChild(navBarEl);

    return footerEl;
  }
}

export default Footer;
