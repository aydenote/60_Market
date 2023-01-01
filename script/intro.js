class Validation {
  constructor(url) {
    this.url = url;
  }

  // 토큰이 있으면 홈으로 이동
  logIn = resMessage => {
    if (resMessage === 200) {
      window.location.hash = '#home';
    }
  };

  // 토큰 검증
  isValidToken = async token => {
    if (token === null) {
      return;
    }

    let setting = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    };

    try {
      const resValidToken = await fetch(`${this.url}/user/checktoken`, setting);
      this.logIn(resValidToken.status);
    } catch (err) {
      window.location.hash = '#signup';
    }
  };
}

export default Validation;
