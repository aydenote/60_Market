import { checkInput, isValidEmail } from '../script/signUp';
var SignUpPage = /** @class */ (function () {
    function SignUpPage() {
    }
    SignUpPage.prototype.render = function (content) {
        // header
        var wrapEl = document.createElement('div');
        var headerEl = document.createElement('header');
        var heading1El = document.createElement('h1');
        wrapEl.classList.add('wrap');
        wrapEl.classList.add('registerWrap');
        heading1El.classList.add('registerHeader');
        heading1El.innerText = '이메일로 회원가입';
        headerEl.appendChild(heading1El);
        wrapEl.appendChild(headerEl);
        // main
        var mainEl = document.createElement('main');
        var formEl = document.createElement('form');
        var emailLabelEl = document.createElement('label');
        var emailInputEl = document.createElement('input');
        var passwordLabelEl = document.createElement('label');
        var passwordInputEl = document.createElement('input');
        var emailAlertPEl = document.createElement('p');
        var passwordAlertPEl = document.createElement('p');
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
        formEl.addEventListener('input', function () { return checkInput(passwordInputEl, passwordAlertPEl); });
        // 이메일 유효성 검사 버튼
        loginButtonEl.addEventListener('click', function () { return isValidEmail(); });
        var articleEl = document.createElement('article');
        var anchorEl = document.createElement('a');
        anchorEl.classList.add('registerByEmail');
        anchorEl.addEventListener('click', function () {
            window.location.hash = '#login';
        });
        anchorEl.innerText = '로그인 하러 가기';
        articleEl.appendChild(anchorEl);
        mainEl.appendChild(formEl);
        wrapEl.appendChild(mainEl);
        wrapEl.appendChild(articleEl);
        content.appendChild(wrapEl);
    };
    return SignUpPage;
}());
export default SignUpPage;
