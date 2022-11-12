import App from "./app.js";

const config = {
  rootEl: "#root",
};

// 폼 입력
class CheckForm {
  constructor(email, password, loginButtonEl) {
    this.email = email;
    this.password = password;
    this.loginButtonEl = loginButtonEl;
  }

  // 버튼 활성화
  isActiveBtn = () => {
    if (this.email.value !== "" && this.password.value !== "") {
      this.loginButtonEl.style.opacity = "1";
      this.loginButtonEl.disabled = false;
    } else if (this.email.value === "" || this.password.value === "") {
      this.loginButtonEl.style.opacity = "0.3";
      this.loginButtonEl.disabled = true;
    }
  };

  // 비밀번호 길이 체크
  checkInput = () => {
    if (this.password.value.length >= 6) {
      this.isActiveBtn();
    } else {
      this.loginButtonEl.style.opacity = "0.3";
      this.loginButtonEl.disabled = true;
    }
  };
}

// 로그인 유효성 검사
class Validation {
  constructor(email, password, alertPEl, formEl) {
    this.email = email;
    this.password = password;
    this.alertPEl = alertPEl;
    this.formEl = formEl;
  }
  // 홈으로 이동
  locationHome = (status) => {
    if (status !== 422) {
      window.history.pushState({}, "", "/home"); // 주소 업데이트
      new App(config).setup();
    }
  };

  // 로컬 스토리지에 토큰 저장
  saveToken = (userData, status) => {
    localStorage.setItem("Token", userData.token);
    localStorage.setItem("accountname", userData.accountname);
    this.locationHome(status);
  };

  // 로그인 체크
  checklogIn = (userData, status) => {
    if (status !== 422) {
      this.saveToken(userData, status);
    }
    if (status === 422) {
      this.alertPEl.classList.remove("ir");
    }
    this.formEl.oninput = () => {
      this.alertPEl.classList.add("ir");
    };
  };

  // 로그인 데이터 요청
  getLogInData = async () => {
    const url = "https://mandarin.api.weniv.co.kr";
    const userIdPw = {
      user: {
        email: this.email.value,
        password: this.password.value,
      },
    };

    const setting = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userIdPw),
    };
    try {
      const resLogin = await fetch(`${url}/user/login`, setting);
      const resresLoginJson = await resLogin.json();
      this.checklogIn(resresLoginJson.user, resLogin.status);
    } catch (err) {
      console.error(err);
    }
  };
}

export { CheckForm, Validation };
