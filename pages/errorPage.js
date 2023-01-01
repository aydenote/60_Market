import { backHistory } from '../script/common.js';

class ErrorPage {
  render(content) {
    document.querySelector('body').classList.remove('profileBackground');
    const wrapEl = document.createElement('div');
    wrapEl.classList.add('wrap');

    // header
    const headerEl = document.createElement('header');
    const heading1El = document.createElement('h1');
    const errorImgEl = document.createElement('img');
    const engTitleEl = document.createElement('h2');
    const korTitleEl = document.createElement('h2');

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
    const mainEl = document.createElement('main');
    const backBtnEl = document.createElement('button');

    backBtnEl.classList.add('backBtn');
    backBtnEl.classList.add('buttonClick');
    backBtnEl.setAttribute('type', 'submit');
    backBtnEl.innerText = '<- 이전 페이지로 돌아가기';
    backBtnEl.addEventListener('click', backHistory);

    mainEl.appendChild(backBtnEl);
    wrapEl.appendChild(headerEl);
    wrapEl.appendChild(mainEl);

    content.appendChild(wrapEl);
  }
}

export default ErrorPage;
