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

// 로그인 데이터 요청
async function getLogInData() {
  try {
    const res = await axios.post(`${url}/user/login`, {
      user: {
        email: email.value,
        password: password.value,
      },
    });
    console.log(res);
    const userData = res.data;
    const status = userData.status;
    logIn(userData, status);
    return status;
  } catch (err) {
    console.log(err);
  }
}

// 로컬 스토리지에 토큰 저장
function saveToken(userData) {
  localStorage.setItem('Token', userData.token);
  localStorage.setItem('accountname', userData.accountname);
}

// 로그인
const logIn = (userData, status) => {
  if (status !== 422) {
    saveToken(userData);
  }
  // 로그인 실패 메시지
  errorMessage.classList.remove('ir');
  // 폼 입력시 에러 메시지 삭제
  logInForm.oninput = () => {
    errorMessage.classList.add('ir');
  };
};

// 홈으로 이동
const locationHome = async (event) => {
  event.preventDefault();
  const isValidResult = await getLogInData();
  if (isValidResult !== 422) {
    location.href = './home.html';
  }
};

logInFormBtn.addEventListener('click', locationHome);
