import { checkInput, getLogInData } from '../script/logIn';
var LoginPage = /** @class */ (function () {
    function LoginPage() {
    }
    LoginPage.prototype.render = function (content) {
        // header
        var wrapEl = document.createElement('div');
        var headerEl = document.createElement('header');
        var heading1El = document.createElement('h1');
        wrapEl.classList.add('wrap');
        wrapEl.classList.add('registerWrap');
        heading1El.classList.add('registerHeader');
        heading1El.innerText = '로그인';
        headerEl.appendChild(heading1El);
        wrapEl.appendChild(headerEl);
        // main
        var mainEl = document.createElement('main');
        var formEl = document.createElement('form');
        var emailLabelEl = document.createElement('label');
        var emailInputEl = document.createElement('input');
        var passwordLabelEl = document.createElement('label');
        var passwordInputEl = document.createElement('input');
        var alertPEl = document.createElement('p');
        var loginButtonEl = document.createElement('button');
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
        passwordInputEl.minLength = 6;
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
        var articleEl = document.createElement('article');
        var anchorEl = document.createElement('a');
        anchorEl.classList.add('registerByEmail');
        anchorEl.addEventListener('click', function () {
            window.location.hash = '#signup';
        });
        anchorEl.innerText = '이메일로 회원가입';
        articleEl.appendChild(anchorEl);
        mainEl.appendChild(formEl);
        wrapEl.appendChild(mainEl);
        wrapEl.appendChild(articleEl);
        // 폼 입력
        formEl.addEventListener('input', function () { return checkInput(emailInputEl, passwordInputEl, loginButtonEl); });
        // 로그인 유효성 검사
        loginButtonEl.addEventListener('click', function () { return getLogInData(emailInputEl, passwordInputEl, alertPEl, formEl); });
        content.appendChild(wrapEl);
    };
    return LoginPage;
}());
export default LoginPage;
