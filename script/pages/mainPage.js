import App from "../app.js";

const config = {
  rootEl: "#root",
};

class MainPage {
  render() {
    const wrapEl = document.createElement("div");
    const articleEl = document.createElement("article");
    const containerEl = document.createElement("div");
    const clockEl = document.createElement("div");

    wrapEl.classList.add("wrap");
    articleEl.classList.add("loadding");
    containerEl.classList.add("box");
    clockEl.classList.add("clock");

    containerEl.appendChild(clockEl);
    articleEl.appendChild(containerEl);
    wrapEl.appendChild(articleEl);

    window.setTimeout(() => {
      window.history.pushState({}, "", "/intro"); // 주소 업데이트
      new App(config).setup();
    }, 1000);

    return { wrapEl };
  }
}

export default MainPage;
