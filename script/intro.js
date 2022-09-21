import App from "./app.js";

const config = {
  rootEl: "#root",
};

class Validation {
  constructor(url) {
    this.url = url;
  }

  // 토큰이 있으면 홈으로 이동
  logIn = (resMessage) => {
    if (resMessage === 200) {
      window.history.pushState({}, "", "/home"); // 주소 업데이트
      new App(config).setup();
    }
  };

  // 토큰 검증
  isValidToken = async (token) => {
    if (token === null) {
      return;
    }

    let setting = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    };

    try {
      const resValidToken = await fetch(`${this.url}/user/checktoken`, setting);
      this.logIn(resValidToken.status);
    } catch (err) {
      window.history.pushState({}, "", "/signUp"); // 주소 업데이트
      new App(config).setup();
    }
  };
}

export default Validation;
