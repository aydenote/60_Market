import Footer from "./footer.js";
import Search from "../search.js";

const footer = new Footer();
const footerEl = footer.render();

class SearchPage {
  render() {
    // header
    const headerEl = document.createElement("header");
    const articleHeaderEl = document.createElement("article");
    const backImageEl = document.createElement("img");
    const inputSearchEl = document.createElement("input");
    articleHeaderEl.classList.add("headerBar");
    articleHeaderEl.classList.add("buttonClick");
    backImageEl.classList.add("headerBarBack");
    backImageEl.setAttribute(
      "src",
      "../asset/images/icons/icon__arrowLeft.svg"
    );
    backImageEl.setAttribute("alt", "뒤로 가기");
    backImageEl.addEventListener("click", () => {
      window.history.back();
    });

    inputSearchEl.classList.add("headerBarSearch");
    inputSearchEl.classList.add("headerBarInput");
    inputSearchEl.classList.add("buttonClick");
    inputSearchEl.setAttribute("type", "text");
    inputSearchEl.setAttribute("placeholder", "계정 검색");
    inputSearchEl.maxLength = "9";
    inputSearchEl.autofocus = true;

    articleHeaderEl.appendChild(backImageEl);
    articleHeaderEl.appendChild(inputSearchEl);
    headerEl.appendChild(articleHeaderEl);

    // main
    const mainEl = document.createElement("main");
    const heading2El = document.createElement("h2");
    const sectionEl = document.createElement("section");
    const ulMainEl = document.createElement("ul");

    heading2El.classList.add("ir");
    heading2El.innerText = "유저 검색 페이지";
    ulMainEl.classList.add("userList");

    sectionEl.appendChild(ulMainEl);
    mainEl.appendChild(heading2El);
    mainEl.appendChild(sectionEl);

    // user 검색 기능
    inputSearchEl.addEventListener("input", (event) => {
      const url = "https://mandarin.api.weniv.co.kr";
      const token = localStorage.getItem("Token");
      Search(event, url, token, ulMainEl);
    });

    return { headerEl, mainEl, footerEl };
  }
}

export default SearchPage;
