import App from "./app.js";

window.setTimeout(() => {
  window.history.pushState({}, "", "/intro"); // 주소 업데이트
  new App(config).setup();
}, 1000);

const config = {
  rootEl: "#root",
};

new App(config).setup();
