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
    registerFormBtn.disabled = false;
  } else {
    registerFormBtn.disabled = true;
  }
}

// 사용 가능한 이메일 체크
function checkEmail(resMessage) {
  if (resMessage !== '사용 가능한 이메일 입니다.') {
    errorEmail.innerText = `*${resMessage}`;
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
async function isValidEmail() {
  try {
    const res = await axios.post(`${url}/user/emailvalid`, {
      user: {
        email: email.value,
      },
    });
    const resMessage = res.data.message;
    checkEmail(resMessage);
    return resMessage;
  } catch (err) {
    console.log(err);
    checkEmail(err.response.data.message);
  }
}

// 프로필 설정 페이지로 이동
registerFormBtn.addEventListener('click', locationRegisterProfile);

async function locationRegisterProfile(event) {
  event.preventDefault();
  const isValidResult = await isValidEmail();
  if (isValidResult === '사용 가능한 이메일 입니다.') {
    location.href = './registerProfile.html';
  }
}
