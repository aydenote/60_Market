import App from "../app.js";
import Validation from "../intro.js";

const config = {
  rootEl: "#root",
};
const url = "https://mandarin.api.weniv.co.kr";
const token = localStorage.getItem("Token");

class IntroPage {
  render() {
    // header
    const wrapEl = document.createElement("div");
    const headerEl = document.createElement("header");
    const imgEl = document.createElement("img");
    const heading1El = document.createElement("h1");

    wrapEl.classList.add("wrap");
    heading1El.classList.add("title");
    heading1El.classList.add("marketName");
    imgEl.setAttribute("id", "timi");
    imgEl.setAttribute("src", "../asset/images/timi.svg");
    imgEl.setAttribute("alt", "티미 이미지");
    headerEl.appendChild(imgEl);
    headerEl.appendChild(heading1El);

    wrapEl.appendChild(headerEl);

    // main
    const mainEl = document.createElement("main");
    const formEl = document.createElement("form");
    const loginButtonEl = document.createElement("button");
    const signUpButtonEl = document.createElement("button");

    formEl.classList.add("logInForm");
    loginButtonEl.classList.add("btn");
    loginButtonEl.classList.add("logInBtn");
    loginButtonEl.setAttribute("type", "button");
    loginButtonEl.addEventListener("click", () => {
      window.history.pushState({}, "", "/login"); // 주소 업데이트
      new App(config).setup();
    });
    loginButtonEl.innerText = "이메일로 로그인";

    signUpButtonEl.classList.add("btn");
    signUpButtonEl.classList.add("logInBtn");
    signUpButtonEl.setAttribute("type", "button");
    signUpButtonEl.addEventListener("click", () => {
      window.history.pushState({}, "", "/signUp"); // 주소 업데이트
      new App(config).setup();
    });
    signUpButtonEl.innerText = "회원가입";

    formEl.appendChild(loginButtonEl);
    formEl.appendChild(signUpButtonEl);
    mainEl.appendChild(formEl);

    wrapEl.appendChild(mainEl);

    // 토큰 검증
    const validation = new Validation(url);
    validation.isValidToken(token);

    return { wrapEl };
  }
}

export default IntroPage;
