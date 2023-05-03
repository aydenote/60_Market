import { isValidToken } from '../script/intro';
var IntroPage = /** @class */ (function () {
    function IntroPage() {
    }
    IntroPage.prototype.render = function (content) {
        // header
        var wrapEl = document.createElement('div');
        var headerEl = document.createElement('header');
        var imgEl = document.createElement('img');
        var heading1El = document.createElement('h1');
        wrapEl.classList.add('wrap');
        heading1El.classList.add('title');
        heading1El.classList.add('marketName');
        imgEl.setAttribute('id', 'timi');
        imgEl.setAttribute('src', '../asset/images/timi.svg');
        imgEl.setAttribute('alt', '티미 이미지');
        headerEl.appendChild(imgEl);
        headerEl.appendChild(heading1El);
        wrapEl.appendChild(headerEl);
        // main
        var mainEl = document.createElement('main');
        var formEl = document.createElement('form');
        var loginButtonEl = document.createElement('button');
        var signUpButtonEl = document.createElement('button');
        formEl.classList.add('logInForm');
        loginButtonEl.classList.add('btn');
        loginButtonEl.classList.add('logInBtn');
        loginButtonEl.setAttribute('type', 'button');
        loginButtonEl.addEventListener('click', function () {
            window.location.hash = '#login';
        });
        loginButtonEl.innerText = '이메일로 로그인';
        signUpButtonEl.classList.add('btn');
        signUpButtonEl.classList.add('logInBtn');
        signUpButtonEl.setAttribute('type', 'button');
        signUpButtonEl.addEventListener('click', function () {
            window.location.hash = '#signup';
        });
        signUpButtonEl.innerText = '회원가입';
        formEl.appendChild(loginButtonEl);
        formEl.appendChild(signUpButtonEl);
        mainEl.appendChild(formEl);
        wrapEl.appendChild(mainEl);
        // 토큰 검증
        isValidToken();
        content.appendChild(wrapEl);
    };
    return IntroPage;
}());
export default IntroPage;
