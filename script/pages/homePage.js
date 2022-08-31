import Home from "../home.js";

const token = localStorage.getItem("Token");
const defaultUrl = "https://mandarin.api.weniv.co.kr";
const listContent = document.querySelector(".post");

class HomePage {
  render() {
    // header
    const rootEl = document.createElement("div");
    const headerEl = document.createElement("header");
    const articleHeaderEl = document.createElement("article");
    const heading1El = document.createElement("h1");

    rootEl.setAttribute("id", "root");
    articleHeaderEl.classList.add("headerBar");
    heading1El.classList.add("mainHeading");
    heading1El.classList.add("mainLogo");
    heading1El.innerText = "60'' 마켓";

    const headerAnchorEl = document.createElement("a");
    const spanEl = document.createElement("span");

    headerAnchorEl.setAttribute("href", "./search.html");
    headerAnchorEl.classList.add("headerBarModal");
    headerAnchorEl.classList.add("headerBarBtn");
    headerAnchorEl.classList.add("searchBtn");
    spanEl.classList.add("ir");
    spanEl.innerText = "사용자 검색 버튼";

    articleHeaderEl.appendChild(heading1El);
    articleHeaderEl.appendChild(headerAnchorEl);
    headerAnchorEl.appendChild(spanEl);
    headerEl.appendChild(articleHeaderEl);

    // main
    const mainEl = document.createElement("main");
    const heading2El = document.createElement("h2");
    const mainHeading3El = document.createElement("h3");
    const mainArticleEl = document.createElement("article");

    mainEl.classList.add("home");
    heading2El.classList.add("ir");
    heading2El.innerText = "60'' 마켓 피드";

    mainArticleEl.classList.add("post");
    mainHeading3El.classList.add("ir");
    mainHeading3El.innerText = "피드 게시글";

    mainArticleEl.appendChild(mainHeading3El);
    mainEl.appendChild(heading2El);
    mainEl.appendChild(mainArticleEl);

    //footer
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

    // home 피드 구현
    const homeFeed = new Home(token, defaultUrl, listContent);
    homeFeed.feedAPI(token, defaultUrl);

    return { headerEl, mainEl, footerEl };
  }
}

export default HomePage;
