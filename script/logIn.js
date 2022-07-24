const url = 'https://mandarin.api.weniv.co.kr';
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const errorMessage = document.querySelector('.registerFormAlert');
const logInForm = document.querySelector('.logInForm');
const logInFormBtn = document.querySelector('.logInBtn');

// 버튼 활성화
const isActiveBtn = () => {
  if (email.value !== '' && password.value !== '') {
    logInFormBtn.style.opacity = '1';
    logInFormBtn.disabled = false;
  }
};

// 비밀번호 길이 체크
const checkPassword = () => {
  password.addEventListener('input', () => {
    if (password.value.length > 6) {
      isActiveBtn();
    }
  });
};

// 폼 입력
logInForm.addEventListener('input', checkPassword);
