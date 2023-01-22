// 버튼 활성화
function isActiveBtn(email, password, loginButtonEl) {
  if (email.value !== '' && password.value !== '') {
    loginButtonEl.style.opacity = '1';
    loginButtonEl.disabled = false;
  } else if (email.value === '' || password.value === '') {
    loginButtonEl.style.opacity = '0.3';
    loginButtonEl.disabled = true;
  }
}

// 비밀번호 길이 체크
export function checkInput(email, password, loginButtonEl) {
  if (password.value.length >= 6) {
    isActiveBtn(email, password, loginButtonEl);
  } else {
    loginButtonEl.style.opacity = '0.3';
    loginButtonEl.disabled = true;
  }
}

// 홈으로 이동
function locationHome(status) {
  if (status !== 422) {
    window.location.hash = '#home';
  }
}

// 로컬 스토리지에 토큰 저장
function saveToken(userData, status) {
  localStorage.setItem('Token', userData.token);
  localStorage.setItem('accountname', userData.accountname);
  locationHome(status);
}

// 로그인 체크
function checklogIn(userData, status, alertPEl, formEl) {
  if (status !== 422) {
    saveToken(userData, status);
  }
  if (status === 422) {
    alertPEl.classList.remove('ir');
  }
  formEl.oninput = () => {
    alertPEl.classList.add('ir');
  };
}

// 로그인 데이터 요청
export async function getLogInData(email, password, alertPEl, formEl) {
  const url = 'https://mandarin.api.weniv.co.kr';
  const userIdPw = {
    user: {
      email: email.value,
      password: password.value,
    },
  };

  const setting = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(userIdPw),
  };
  try {
    const resLogin = await fetch(`${url}/user/login`, setting);
    const resresLoginJson = await resLogin.json();
    checklogIn(resresLoginJson.user, resLogin.status, alertPEl, formEl);
  } catch (err) {
    console.error(err);
  }
}
