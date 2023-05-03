import { backHistory } from '../utils/common';
var ErrorPage = /** @class */ (function () {
    function ErrorPage() {
    }
    ErrorPage.prototype.render = function (content) {
        document.querySelector('body').classList.remove('profileBackground');
        var wrapEl = document.createElement('div');
        wrapEl.classList.add('wrap');
        // header
        var headerEl = document.createElement('header');
        var heading1El = document.createElement('h1');
        var errorImgEl = document.createElement('img');
        var engTitleEl = document.createElement('h2');
        var korTitleEl = document.createElement('h2');
        heading1El.classList.add('ir');
        heading1El.innerText = '페이지를 찾을 수 없습니다';
        errorImgEl.id = 'timi';
        errorImgEl.setAttribute('src', '../asset/images/Not-Found.svg');
        errorImgEl.setAttribute('alt', '티미');
        engTitleEl.classList.add('specialSituationTitle');
        engTitleEl.classList.add('title');
        engTitleEl.innerText = 'Not Found 404';
        korTitleEl.classList.add('specialSituationTitle');
        korTitleEl.classList.add('title');
        korTitleEl.classList.add('subtitle');
        korTitleEl.innerText = '페이지를 찾을 수 없습니다 :(';
        headerEl.appendChild(heading1El);
        headerEl.appendChild(errorImgEl);
        headerEl.appendChild(engTitleEl);
        headerEl.appendChild(korTitleEl);
        // main
        var mainEl = document.createElement('main');
        var backBtnEl = document.createElement('button');
        backBtnEl.classList.add('backBtn');
        backBtnEl.classList.add('buttonClick');
        backBtnEl.setAttribute('type', 'submit');
        backBtnEl.innerText = '<- 이전 페이지로 돌아가기';
        backBtnEl.addEventListener('click', backHistory);
        mainEl.appendChild(backBtnEl);
        wrapEl.appendChild(headerEl);
        wrapEl.appendChild(mainEl);
        content.appendChild(wrapEl);
    };
    return ErrorPage;
}());
export default ErrorPage;
