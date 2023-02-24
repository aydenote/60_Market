interface SignUpReturnDataType {
  message: string;
  status?: number;
}

// 버튼 활성화
function isActiveBtn() {
  const email = document.getElementById('email') as HTMLInputElement;
  const password = document.getElementById('password') as HTMLInputElement;
  const registerFormBtn = document.querySelector('.registerFormBtn') as HTMLButtonElement;
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
export function checkInput(password: HTMLInputElement, errorPassword: HTMLElement) {
  if (password.value.length < 6) {
    errorPassword.classList.remove('ir');
  }
  if (password.value.length >= 6) {
    errorPassword.classList.add('ir');
    isActiveBtn();
  }
}

// 프로필 설정으로 이동
function locationRegisterProfile(status: number) {
  if (status === 200) {
    window.location.hash = '#profileRegister';
  }
}

// 이메일, 비밀번호 로컬 스토리지에 저장
function saveData(signUpReturnData: SignUpReturnDataType) {
  const email = document.getElementById('email') as HTMLInputElement;
  const password = document.getElementById('password') as HTMLInputElement;
  localStorage.clear();
  localStorage.setItem('email', email.value);
  localStorage.setItem('password', password.value);
  locationRegisterProfile(signUpReturnData.status!);
}

// 사용 가능한 이메일 체크
function checkEmail(signUpReturnData: SignUpReturnDataType) {
  const email = document.getElementById('email') as HTMLInputElement;
  const errorEmail = document.querySelector('.errorPassword') as HTMLElement;
  if (signUpReturnData.message === '이미 가입된 이메일 주소 입니다.') {
    errorEmail.innerText = `* 이미 가입된 이메일 주소 입니다.`;
    errorEmail.classList.remove('ir');
    email.oninput = () => {
      errorEmail.classList.add('ir');
    };
  } else {
    saveData(signUpReturnData);
  }
}

// 이메일 유효성 검사
export async function isValidEmail() {
  const emailInput = document.getElementById('email') as HTMLInputElement;
  const url = 'https://mandarin.api.weniv.co.kr';

  const setting = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      user: {
        email: emailInput.value,
      },
    }),
  };

  try {
    const emailValidRes = await fetch(`${url}/user/emailvalid`, setting);
    const emailValidJson = await emailValidRes.json();
    checkEmail(emailValidJson);
  } catch (error) {
    console.error(error);
  }
}
