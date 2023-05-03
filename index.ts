import Home from './pages/homePage';
import Chat from './pages/chatPage';
import Chatting1 from './pages/chattingPage1';
import Chatting2 from './pages/chattingPage2';
import Chatting3 from './pages/chattingPage3';
import Chatting4 from './pages/chattingPage4';
import EditProfile from './pages/editProfilePage';
import Profile from './pages/profilePage';
import ProfileFollow from './pages/profileFollowPage';
import ProfileRegister from './pages/profileRegisterPage';
import Error from './pages/errorPage';
import Intro from './pages/introPage';
import Login from './pages/loginPage';
import Main from './pages/mainPage';
import Post from './pages/postPage';
import PostUpload from './pages/postUploadPage';
import Product from './pages/productPage';
import Follow from './pages/profileFollowPage';
import Search from './pages/searchPage';
import SignUp from './pages/signUpPage';

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
