const url = 'https://mandarin.api.weniv.co.kr';
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const errorEmail = document.querySelector('.errorEmail');
const errorPassword = document.querySelector('.errorPassword');
const registerForm = document.querySelector('.registerForm');
const registerFormBtn = document.querySelector('.registerFormBtn');

// 회원가입 버튼 활성화
function isActiveBtn() {
  if (email.value !== '' && password.value !== '') {
    registerFormBtn.style.opacity = '1';
  } else {
    registerFormBtn.style.opacity = '0.3';
  }
}

// 사용 가능한 이메일 체크
function emailCheck(reqMessage) {
  if (reqMessage !== '사용 가능한 이메일 입니다.') {
    errorEmail.classList.remove('ir');
    email.oninput = () => {
      errorEmail.classList.add('ir');
    };
  }
}

// 비밀번호 길이 체크
password.addEventListener('input', () => {
  if (password.value.length < 6) {
    errorPassword.classList.remove('ir');
    registerFormBtn.disabled = true;
  } else {
    errorPassword.classList.add('ir');
    registerFormBtn.disabled = false;
    isActiveBtn();
  }
});

// 폼 입력
registerForm.addEventListener('input', isActiveBtn);

// 유효한 이메일 검사
async function isEmailValid() {
  try {
    const res = await axios.post(`${url}/user/emailvalid`, {
      user: {
        email: email.value,
      },
    });
    const reqMessage = res.data.message;
    emailCheck(reqMessage);
    return reqMessage;
  } catch (err) {
    emailCheck(err.response.data.message);
  }
}
