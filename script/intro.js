const url = "https://mandarin.api.weniv.co.kr";
const token = localStorage.getItem("Token");

class Validation {
  constructor(url) {
    this.url = url;
  }

  // 토큰이 있으면 홈으로 이동
  logIn = (resMessage) => {
    if (resMessage === true) {
      location.href = "./home.html";
    }
  };

  // 토큰 검증
  isValidToken = async () => {
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    };

    try {
      const res = await axios.get(`${this.url}/user/checktoken`, config);
      const resMessage = res.data.isValid;
      this.logIn(resMessage);
    } catch (err) {
      location.href = "./signUp.html";
    }
  };
}

// 토큰 검증
const validation = new Validation(url);
validation.isValidToken();
