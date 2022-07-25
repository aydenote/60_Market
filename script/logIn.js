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
  if (password.value.length >= 6) {
    isActiveBtn();
  }
};

// 폼 입력
logInForm.addEventListener('input', checkPassword);

// 홈으로 이동
const locationHome = (status) => {
  if (status !== 422) {
    location.href = './home.html';
  }
};

// 로컬 스토리지에 토큰 저장
const saveToken = (userData, status) => {
  localStorage.setItem('Token', userData.token);
  localStorage.setItem('accountname', userData.accountname);
  locationHome(status);
};

// 로그인 체크
const checklogIn = (userData, status) => {
  if (status !== 422) {
    saveToken(userData, status);
  }
  if (status === 422) {
    errorMessage.classList.remove('ir');
  }
  logInForm.oninput = () => {
    errorMessage.classList.add('ir');
  };
};

// 로그인 데이터 요청
const getLogInData = async () => {
  try {
    const res = await axios.post(`${url}/user/login`, {
      user: {
        email: email.value,
        password: password.value,
      },
    });
    const userData = res.data.user;
    const status = res.data.status;
    checklogIn(userData, status);
    return status;
  } catch (err) {
    return err;
  }
};

// 로그인 데이터 요청 버튼
logInFormBtn.addEventListener('click', getLogInData);
