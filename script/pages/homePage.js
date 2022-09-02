import Home from "../home.js";
import App from "../app.js";
import Footer from "./footer.js";

const config = {
  rootEl: "#root",
};

const token = localStorage.getItem("Token");
const defaultUrl = "https://mandarin.api.weniv.co.kr";
const listContent = document.querySelector(".post");
const footer = new Footer();
const footerEl = footer.render();

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

    headerAnchorEl.addEventListener("click", () => {
      window.history.pushState({}, "", "/search"); // 주소 업데이트
      new App(config).setup();
    });
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

    // home 피드 구현
    const homeFeed = new Home(token, defaultUrl, listContent);
    homeFeed.feedAPI(token, defaultUrl);

    return { headerEl, mainEl, footerEl };
  }
}

export default HomePage;
