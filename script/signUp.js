const url = 'https://mandarin.api.weniv.co.kr';
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const errorEmail = document.querySelector('.errorEmail');
const errorPassword = document.querySelector('.errorPassword');
const registerForm = document.querySelector('.registerForm');
const registerFormBtn = document.querySelector('.registerFormBtn');

// 버튼 활성화
const isActiveBtn = () => {
  if (email.value !== '' && password.value.length > 6) {
    registerFormBtn.style.opacity = '1';
    registerFormBtn.disabled = false;
  }
  if (email.value === '' || password.value.length <= 6) {
    registerFormBtn.style.opacity = '0.3';
    registerFormBtn.disabled = true;
  }
};

// 비밀번호 길이 체크
const checkPassword = password.addEventListener('input', () => {
  if (password.value.length < 6) {
    errorPassword.classList.remove('ir');
  }
  if (password.value.length >= 6) {
    errorPassword.classList.add('ir');
    isActiveBtn();
  }
});

// 폼 입력
registerForm.addEventListener('input', checkPassword);

// 프로필 설정으로 이동
const locationRegisterProfile = async () => {
  const isValidResult = await isValidEmail();
  if (isValidResult === '사용 가능한 이메일 입니다.') {
    location.href = './registerProfile.html';
  }
};

// 사용 가능한 이메일 체크
const checkEmail = (resMessage) => {
  if (resMessage !== '사용 가능한 이메일 입니다.') {
    errorEmail.innerText = `*${resMessage}`;
    errorEmail.classList.remove('ir');
    email.oninput = () => {
      errorEmail.classList.add('ir');
    };
  }
  if (resMessage === '사용 가능한 이메일 입니다.') {
    locationRegisterProfile();
  }
};

// 이메일 유효성 검사
const isValidEmail = async () => {
  try {
    const res = await axios.post(`${url}/user/emailvalid`, {
      user: {
        email: email.value,
      },
    });
    console.log(res);
    const resMessage = res.data.message;
    checkEmail(resMessage);
    return resMessage;
  } catch (err) {
    checkEmail(err.response.data.message);
  }
};

// 이메일 유효성 검사 버튼
registerFormBtn.addEventListener('click', isValidEmail);
