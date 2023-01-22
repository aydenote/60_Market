// 버튼 활성화
function isActiveBtn() {
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const registerFormBtn = document.querySelector('.registerFormBtn');
  if (email.value !== '' && password.value.length >= 6) {
    registerFormBtn.style.opacity = '1';
    registerFormBtn.disabled = false;
  }
  if (email.value === '' || password.value.length < 6) {
    registerFormBtn.style.opacity = '0.3';
    registerFormBtn.disabled = true;
  }
}

// 입력 체크
export function checkInput(password, errorPassword) {
  if (password.value.length < 6) {
    errorPassword.classList.remove('ir');
  }
  if (password.value.length >= 6) {
    errorPassword.classList.add('ir');
    isActiveBtn();
  }
}

// 프로필 설정으로 이동
function locationRegisterProfile(status) {
  if (status === 200) {
    window.location.hash = '#profileRegister';
  }
}

// 이메일, 비밀번호 로컬 스토리지에 저장
function saveData(res) {
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  localStorage.clear();
  localStorage.setItem('email', email.value);
  localStorage.setItem('password', password.value);
  locationRegisterProfile(res.status);
}

// 사용 가능한 이메일 체크
function checkEmail(res) {
  const email = document.getElementById('email');
  const errorEmail = document.querySelector('.errorPassword');
  if (res.data.message === '이미 가입된 이메일 주소 입니다.') {
    errorEmail.innerText = `* 이미 가입된 이메일 주소 입니다.`;
    errorEmail.classList.remove('ir');
    email.oninput = () => {
      errorEmail.classList.add('ir');
    };
  } else {
    saveData(res);
  }
}

// 이메일 유효성 검사
export async function isValidEmail() {
  const emailInput = document.getElementById('email');
  const url = 'https://mandarin.api.weniv.co.kr';

  const res = await axios.post(`${url}/user/emailvalid`, {
    user: {
      email: emailInput.value,
    },
  });
  checkEmail(res);
}
