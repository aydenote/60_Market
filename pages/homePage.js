import { feedAPI } from '../script/home.js';
import Footer from './footer.js';

const defaultUrl = 'https://mandarin.api.weniv.co.kr';

class HomePage {
  render() {
    const url = window.location.pathname.replace('/', '');
    const footer = new Footer();
    const footerEl = footer.render(url);
    const body = document.querySelector('body');
    body.classList.remove('profileBackground');

    // header
    const rootEl = document.createElement('div');
    const headerEl = document.createElement('header');
    const articleHeaderEl = document.createElement('article');
    const heading1El = document.createElement('h1');

    rootEl.setAttribute('id', 'root');
    articleHeaderEl.classList.add('headerBar');
    heading1El.classList.add('mainHeading');
    heading1El.classList.add('mainLogo');
    heading1El.innerText = "60'' 마켓";

    const headerDivEl = document.createElement('div');
    const spanEl = document.createElement('span');

    headerDivEl.addEventListener('click', () => {
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
    const mainEl = document.createElement('main');
    const heading2El = document.createElement('h2');
    const mainArticleEl = document.createElement('article');
    const mainHeading3El = document.createElement('h3');

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
  }
}

export default HomePage;
