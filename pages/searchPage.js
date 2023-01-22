import Footer from './footer.js';
import Search from '../script/search.js';
import { backHistory, debounce } from '../utils/common.js';

class SearchPage {
  render(content) {
    const footer = new Footer();
    const footerEl = footer.render();
    // header
    const headerEl = document.createElement('header');
    const articleHeaderEl = document.createElement('article');
    const backImageEl = document.createElement('img');
    const inputSearchEl = document.createElement('input');
    articleHeaderEl.classList.add('headerBar');
    articleHeaderEl.classList.add('buttonClick');
    backImageEl.classList.add('headerBarBack');
    backImageEl.setAttribute('src', '../asset/images/icons/icon__arrowLeft.svg');
    backImageEl.setAttribute('alt', '뒤로 가기');
    backImageEl.addEventListener('click', backHistory);

    inputSearchEl.classList.add('headerBarSearch');
    inputSearchEl.classList.add('headerBarInput');
    inputSearchEl.classList.add('buttonClick');
    inputSearchEl.setAttribute('type', 'text');
    inputSearchEl.setAttribute('placeholder', '계정 검색');
    inputSearchEl.maxLength = '9';
    inputSearchEl.autofocus = true;

    articleHeaderEl.appendChild(backImageEl);
    articleHeaderEl.appendChild(inputSearchEl);
    headerEl.appendChild(articleHeaderEl);

    // main
    const mainEl = document.createElement('main');
    const heading2El = document.createElement('h2');
    const sectionEl = document.createElement('section');
    const ulMainEl = document.createElement('ul');

    heading2El.classList.add('ir');
    heading2El.innerText = '유저 검색 페이지';
    ulMainEl.classList.add('userList');

    sectionEl.appendChild(ulMainEl);
    mainEl.appendChild(heading2El);
    mainEl.appendChild(sectionEl);

    // user 검색 기능
    inputSearchEl.addEventListener('keyup', debounce(Search));

    content.appendChild(headerEl);
    content.appendChild(mainEl);
    content.appendChild(footerEl);
  }
}

export default SearchPage;
