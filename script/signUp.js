const url = 'https://mandarin.api.weniv.co.kr';

// 폼 입력
export class CheckForm {
  constructor(email, password, errorPassword, registerFormBtn) {
    this.email = email;
    this.password = password;
    this.errorPassword = errorPassword;
    this.registerFormBtn = registerFormBtn;
  }

  // 버튼 활성화
  isActiveBtn = () => {
    if (this.email.value !== '' && this.password.value.length >= 6) {
      this.registerFormBtn.style.opacity = '1';
      this.registerFormBtn.disabled = false;
    }
    if (this.email.value === '' || this.password.value.length < 6) {
      this.registerFormBtn.style.opacity = '0.3';
      this.registerFormBtn.disabled = true;
    }
  };

  // 입력 체크
  checkInput = () => {
    if (this.password.value.length < 6) {
      this.errorPassword.classList.remove('ir');
    }
    if (this.password.value.length >= 6) {
      this.errorPassword.classList.add('ir');
      this.isActiveBtn();
    }
  };
}

// 이메일 유효성 검사
export class Validation {
  constructor(email, password, errorEmail) {
    this.email = email;
    this.errorEmail = errorEmail;
    this.password = password;
  }

  // 프로필 설정으로 이동
  locationRegisterProfile = status => {
    if (status === 200) {
      window.location.hash = '#profileRegister';
    }
  };

  // 이메일, 비밀번호 로컬 스토리지에 저장
  saveData = status => {
    // localStorage.clear();
    localStorage.setItem('email', this.email.value);
    localStorage.setItem('password', this.password.value);
    this.locationRegisterProfile(status);
  };

  // 사용 가능한 이메일 체크
  checkEmail = status => {
    if (status !== 200) {
      this.errorEmail.innerText = `*${resMessage}`;
      this.errorEmail.classList.remove('ir');
      this.email.oninput = () => {
        this.errorEmail.classList.add('ir');
      };
    }
    if (status === 200) {
      this.saveData(status);
    }
  };

  // 이메일 유효성 검사
  isValidEmail = async () => {
    try {
      const res = await axios.post(`${url}/user/emailvalid`, {
        user: {
          email: this.email.value,
        },
      });
      this.checkEmail(res.status);
    } catch (error) {
      this.checkEmail(error.response.data.message);
    }
  };
}
