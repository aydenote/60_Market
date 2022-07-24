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

// 홈으로 이동
const locationHome = async (event) => {
  event.preventDefault();
  const isValidResult = await getLogInData();
  if (isValidResult !== 422) {
    location.href = './home.html';
  }
};

logInFormBtn.addEventListener('click', locationHome);
