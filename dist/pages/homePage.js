import { feedAPI } from '../script/home';
import Footer from './footer';
var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage.prototype.render = function () {
        var footer = new Footer();
        var footerEl = footer.render();
        var body = document.querySelector('body');
        body.classList.remove('profileBackground');
        // header
        var rootEl = document.createElement('div');
        var headerEl = document.createElement('header');
        var articleHeaderEl = document.createElement('article');
        var heading1El = document.createElement('h1');
        rootEl.setAttribute('id', 'root');
        articleHeaderEl.classList.add('headerBar');
        heading1El.classList.add('mainHeading');
        heading1El.classList.add('mainLogo');
        heading1El.innerText = "60'' 마켓";
        var headerDivEl = document.createElement('div');
        var spanEl = document.createElement('span');
        headerDivEl.addEventListener('click', function () {
            window.location.hash = '#search'; // 주소 업데이트
        });
        headerDivEl.classList.add('headerBarModal');
        headerDivEl.classList.add('headerBarBtn');
        headerDivEl.classList.add('searchBtn');
        spanEl.classList.add('ir');
        spanEl.innerText = '사용자 검색 버튼';
        articleHeaderEl.appendChild(heading1El);
        articleHeaderEl.appendChild(headerDivEl);
        headerDivEl.appendChild(spanEl);
        headerEl.appendChild(articleHeaderEl);
        // main
        var mainEl = document.createElement('main');
        var heading2El = document.createElement('h2');
        var mainArticleEl = document.createElement('article');
        var mainHeading3El = document.createElement('h3');
        mainEl.classList.add('home');
        heading2El.classList.add('ir');
        heading2El.innerText = "60'' 마켓 피드";
        mainArticleEl.classList.add('post');
        mainHeading3El.classList.add('ir');
        mainHeading3El.innerText = '피드 게시글';
        mainArticleEl.appendChild(mainHeading3El);
        mainEl.appendChild(heading2El);
        mainEl.appendChild(mainArticleEl);
        // home 피드 구현
        feedAPI();
        document.querySelector('#root').appendChild(headerEl);
        document.querySelector('#root').appendChild(mainEl);
        document.querySelector('#root').appendChild(footerEl);
    };
    return HomePage;
}());
export default HomePage;
