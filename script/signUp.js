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
