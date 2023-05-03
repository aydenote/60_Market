import { checkInput, isValidEmail } from '../script/signUp';

class SignUpPage {
  render(content: HTMLElement) {
    // header
    const wrapEl = document.createElement('div');
    const headerEl = document.createElement('header');
    const heading1El = document.createElement('h1');

    wrapEl.classList.add('wrap');
    wrapEl.classList.add('registerWrap');
    heading1El.classList.add('registerHeader');
    heading1El.innerText = '이메일로 회원가입';

    headerEl.appendChild(heading1El);
    wrapEl.appendChild(headerEl);

    // main
    const mainEl = document.createElement('main');
    const formEl = document.createElement('form');
    const emailLabelEl = document.createElement('label');
    const emailInputEl = document.createElement('input');
    const passwordLabelEl = document.createElement('label');
    const passwordInputEl = document.createElement('input');
    const emailAlertPEl = document.createElement('p');
    const passwordAlertPEl = document.createElement('p');
    const loginButtonEl = document.createElement('button');

    formEl.classList.add('logInForm');
    formEl.classList.add('registerForm');
    formEl.setAttribute('action', '');
    formEl.setAttribute('method', 'get');

    emailLabelEl.classList.add('registerFormLabel');
    emailLabelEl.setAttribute('for', 'email');
    emailLabelEl.innerText = '이메일';

    emailInputEl.id = 'email';
    emailInputEl.setAttribute('name', 'email');
    emailInputEl.setAttribute('type', 'email');
    emailInputEl.required = true;

    formEl.appendChild(emailLabelEl);
    formEl.appendChild(emailInputEl);

    emailAlertPEl.classList.add('registerFormAlert');
    emailAlertPEl.classList.add('errorEmail');
    emailAlertPEl.classList.add('ir');
    emailAlertPEl.innerText = '*이미 가입된 이메일 주소입니다.';
    formEl.appendChild(emailAlertPEl);

    passwordLabelEl.classList.add('registerFormLabel');
    passwordLabelEl.setAttribute('for', 'password');
    passwordLabelEl.innerText = '비밀번호';

    passwordInputEl.id = 'password';
    passwordInputEl.setAttribute('name', 'password');
    passwordInputEl.setAttribute('type', 'password');
    passwordInputEl.maxLength = 10;
    passwordInputEl.required = true;

    formEl.appendChild(passwordLabelEl);
    formEl.appendChild(passwordInputEl);

    passwordAlertPEl.classList.add('registerFormAlert');
    passwordAlertPEl.classList.add('errorPassword');
    passwordAlertPEl.classList.add('ir');
    passwordAlertPEl.innerText = '*비밀번호는 6자 이상이어야 합니다.';
    formEl.appendChild(passwordAlertPEl);

    loginButtonEl.classList.add('btn');
    loginButtonEl.classList.add('logInBtn');
    loginButtonEl.classList.add('registerFormBtn');
    loginButtonEl.setAttribute('type', 'button');
    loginButtonEl.disabled = true;
    loginButtonEl.innerText = '다음';
    formEl.appendChild(loginButtonEl);

    // 폼 입력
    formEl.addEventListener('input', () => checkInput(passwordInputEl, passwordAlertPEl));
    // 이메일 유효성 검사 버튼
    loginButtonEl.addEventListener('click', () => isValidEmail());

    const articleEl = document.createElement('article');
    const anchorEl = document.createElement('a');

    anchorEl.classList.add('registerByEmail');
    anchorEl.addEventListener('click', () => {
      window.location.hash = '#login';
    });
    anchorEl.innerText = '로그인 하러 가기';
    articleEl.appendChild(anchorEl);

    mainEl.appendChild(formEl);
    wrapEl.appendChild(mainEl);
    wrapEl.appendChild(articleEl);

    content.appendChild(wrapEl);
  }
}

export default SignUpPage;
