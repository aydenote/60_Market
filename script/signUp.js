const url = 'https://mandarin.api.weniv.co.kr';
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const errorEmail = document.querySelector('.errorEmail');
const errorPassword = document.querySelector('.errorPassword');
const registerForm = document.querySelector('.registerForm');
const registerFormBtn = document.querySelector('.registerFormBtn');

// 폼 입력
class CheckForm {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  // 버튼 활성화
  isActiveBtn = () => {
    if (email.value !== '' && password.value.length >= 6) {
      registerFormBtn.style.opacity = '1';
      registerFormBtn.disabled = false;
    }
    if (email.value === '' || password.value.length < 6) {
      registerFormBtn.style.opacity = '0.3';
      registerFormBtn.disabled = true;
    }
  };

  // 입력 체크
  checkInput = () => {
    if (password.value.length < 6) {
      errorPassword.classList.remove('ir');
    }
    if (password.value.length >= 6) {
      errorPassword.classList.add('ir');
      this.isActiveBtn();
    }
  };
}

// 유효성 
class Validation {
  constructor(email) {
    this.email = email;
  }

  // 프로필 설정으로 이동
  locationRegisterProfile = (resMessage) => {
    if (resMessage === '사용 가능한 이메일 입니다.') {
      location.href = './registerProfile.html';
    }
  };

  // 이메일, 비밀번호 로컬 스토리지에 저장
  saveData = (resMessage) => {
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);
    this.locationRegisterProfile(resMessage);
  };

  // 사용 가능한 이메일 체크
  checkEmail = (resMessage) => {
    if (resMessage !== '사용 가능한 이메일 입니다.') {
      errorEmail.innerText = `*${resMessage}`;
      errorEmail.classList.remove('ir');
      email.oninput = () => {
        errorEmail.classList.add('ir');
      };
    }
    if (resMessage === '사용 가능한 이메일 입니다.') {
      this.saveData(resMessage);
    }
  };

  // 이메일 유효성 검사
  isValidEmail = async () => {
    try {
      const res = await axios.post(`${url}/user/emailvalid`, {
        user: {
          email: email.value,
        },
      });
      const resMessage = res.data.message;
      this.checkEmail(resMessage);
      return resMessage;
    } catch (err) {
      this.checkEmail(err.response.data.message);
    }
  };
}

// 폼 입력
const checkForm = new CheckForm(email, password);
// 이메일 유효성 검사
const validation = new Validation(email);

// 폼 입력
registerForm.addEventListener('input', checkForm.checkInput);
// 이메일 유효성 검사 버튼
registerFormBtn.addEventListener('click', validation.isValidEmail);
