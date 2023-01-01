import Home from './pages/homePage.js';
import Chat from './pages/chatPage.js';
import Chatting1 from './pages/chattingPage1.js';
import Chatting2 from './pages/chattingPage2.js';
import Chatting3 from './pages/chattingPage3.js';
import Chatting4 from './pages/chattingPage4.js';
import EditProfile from './pages/editProfilePage.js';
import Profile from './pages/profilePage.js';
import ProfileFollow from './pages/profileFollowPage.js';
import ProfileRegister from './pages/profileRegisterPage.js';
import Error from './pages/errorPage.js';
import Intro from './pages/introPage.js';
import Login from './pages/loginPage.js';
import Main from './pages/mainPage.js';
import Post from './pages/postPage.js';
import PostUpload from './pages/postUploadPage.js';
import Product from './pages/productPage.js';
import Follow from './pages/profileFollowPage.js';
import Search from './pages/searchPage.js';
import SignUp from './pages/signUpPage.js';

const routes = {
  '/': Main,
  '#intro': Intro,
  '#login': Login,
  '#signup': SignUp,
  '#home': Home,
  '#chat': Chat,
  '#chatting1': Chatting1,
  '#chatting2': Chatting2,
  '#chatting3': Chatting3,
  '#chatting4': Chatting4,
  '#editProfile': EditProfile,
  '#profile': Profile,
  '#profileFollow': ProfileFollow,
  '#profileRegister': ProfileRegister,
  '#error': Error,
  '#intro': Intro,
  '#main': Main,
  '#post': Post,
  '#postUpload': PostUpload,
  '#product': Product,
  '#follow': Follow,
  '#search': Search,
};

const router = async () => {
  let content = document.getElementById('root');
  let parsedURL = window.location.hash
    ? window.location.hash.split('?')[0]
    : window.location.pathname;
  let page = routes[parsedURL] ? routes[parsedURL] : routes['#error'];
  let renderPage = new page();

  // 직전 페이지 초기화
  content.innerHTML = '';

  await renderPage.render(content);
};

// 해시 변경 이벤트
window.addEventListener('hashchange', router);

// 페이지 로드 이벤트
window.addEventListener('load', router);
