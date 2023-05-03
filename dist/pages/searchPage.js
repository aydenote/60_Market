import Footer from './footer';
import Search from '../script/search';
import { backHistory, debounce } from '../utils/common';
var SearchPage = /** @class */ (function () {
    function SearchPage() {
    }
    SearchPage.prototype.render = function (content) {
        var footer = new Footer();
        var footerEl = footer.render();
        // header
        var headerEl = document.createElement('header');
        var articleHeaderEl = document.createElement('article');
        var backImageEl = document.createElement('img');
        var inputSearchEl = document.createElement('input');
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
        inputSearchEl.maxLength = 9;
        inputSearchEl.autofocus = true;
        articleHeaderEl.appendChild(backImageEl);
        articleHeaderEl.appendChild(inputSearchEl);
        headerEl.appendChild(articleHeaderEl);
        // main
        var mainEl = document.createElement('main');
        var heading2El = document.createElement('h2');
        var sectionEl = document.createElement('section');
        var ulMainEl = document.createElement('ul');
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
    };
    return SearchPage;
}());
export default SearchPage;
