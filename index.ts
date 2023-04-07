import Home from './pages/homePage.ts';
import Chat from './pages/chatPage.ts';
import Chatting1 from './pages/chattingPage1.ts';
import Chatting2 from './pages/chattingPage2.ts';
import Chatting3 from './pages/chattingPage3.ts';
import Chatting4 from './pages/chattingPage4.ts';
import EditProfile from './pages/editProfilePage.ts';
import Profile from './pages/profilePage.ts';
import ProfileFollow from './pages/profileFollowPage.ts';
import ProfileRegister from './pages/profileRegisterPage.ts';
import Error from './pages/errorPage.ts';
import Intro from './pages/introPage.ts';
import Login from './pages/loginPage.ts';
import Main from './pages/mainPage.ts';
import Post from './pages/postPage.ts';
import PostUpload from './pages/postUploadPage.ts';
import Product from './pages/productPage.ts';
import Follow from './pages/profileFollowPage.ts';
import Search from './pages/searchPage.ts';
import SignUp from './pages/signUpPage.ts';

interface RouteType {
  [key: string]: Function;
}

const routes: RouteType = {
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
  '#main': Main,
  '#post': Post,
  '#postUpload': PostUpload,
  '#product': Product,
  '#follow': Follow,
  '#search': Search,
};

const router = async () => {
  let content = document.getElementById('root') as HTMLElement;
  let parsedURL = window.location.hash ? window.location.hash.split('?')[0] : window.location.pathname;
  let page: any = routes[parsedURL] ? routes[parsedURL] : routes['#error'];
  let renderPage = new page();

  // 직전 페이지 초기화
  content ? (content.innerHTML = '') : null;

  await renderPage.render(content);
};

// 해시 변경 이벤트
window.addEventListener('hashchange', router);

// 페이지 로드 이벤트
window.addEventListener('load', router);
