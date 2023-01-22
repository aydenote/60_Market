import { checkInput, getLogInData } from '../script/logIn.js';

class LoginPage {
  render(content) {
    // header
    const wrapEl = document.createElement('div');
    const headerEl = document.createElement('header');
    const heading1El = document.createElement('h1');

    wrapEl.classList.add('wrap');
    wrapEl.classList.add('registerWrap');
    heading1El.classList.add('registerHeader');
    heading1El.innerText = '로그인';

    headerEl.appendChild(heading1El);
    wrapEl.appendChild(headerEl);

    // main
    const mainEl = document.createElement('main');
    const formEl = document.createElement('form');
    const emailLabelEl = document.createElement('label');
    const emailInputEl = document.createElement('input');
    const passwordLabelEl = document.createElement('label');
    const passwordInputEl = document.createElement('input');
    const alertPEl = document.createElement('p');
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

    passwordLabelEl.classList.add('registerFormLabel');
    passwordLabelEl.setAttribute('for', 'password');
    passwordLabelEl.innerText = '비밀번호';

    passwordInputEl.id = 'password';
    passwordInputEl.setAttribute('name', 'password');
    passwordInputEl.setAttribute('type', 'password');
    passwordInputEl.minlength = '6';
    passwordInputEl.required = true;

    formEl.appendChild(passwordLabelEl);
    formEl.appendChild(passwordInputEl);

    alertPEl.classList.add('registerFormAlert');
    alertPEl.classList.add('ir');
    alertPEl.innerText = '*이메일 또는 비밀번호가 일치하지 않습니다.';
    formEl.appendChild(alertPEl);

    loginButtonEl.classList.add('btn');
    loginButtonEl.classList.add('logInBtn');
    loginButtonEl.classList.add('registerFormBtn');
    loginButtonEl.setAttribute('type', 'button');
    loginButtonEl.disabled = true;
    loginButtonEl.innerText = '로그인';
    formEl.appendChild(loginButtonEl);

    // article
    const articleEl = document.createElement('article');
    const anchorEl = document.createElement('a');

    anchorEl.classList.add('registerByEmail');
    anchorEl.addEventListener('click', () => {
      window.location.hash = '#signup';
    });
    anchorEl.innerText = '이메일로 회원가입';
    articleEl.appendChild(anchorEl);

    mainEl.appendChild(formEl);
    wrapEl.appendChild(mainEl);
    wrapEl.appendChild(articleEl);

    // 폼 입력
    formEl.addEventListener('input', () => checkInput(emailInputEl, passwordInputEl, loginButtonEl));
    // 로그인 유효성 검사
    loginButtonEl.addEventListener('click', () => getLogInData(emailInputEl, passwordInputEl, alertPEl, formEl));
    
    content.appendChild(wrapEl);
  }
}

export default LoginPage;
