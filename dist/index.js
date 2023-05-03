var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var routes = {
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
var router = function () { return __awaiter(void 0, void 0, void 0, function () {
    var content, parsedURL, page, renderPage;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                content = document.getElementById('root');
                parsedURL = window.location.hash ? window.location.hash.split('?')[0] : window.location.pathname;
                page = routes[parsedURL] ? routes[parsedURL] : routes['#error'];
                renderPage = new page();
                // 직전 페이지 초기화
                content ? (content.innerHTML = '') : null;
                return [4 /*yield*/, renderPage.render(content)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
// 해시 변경 이벤트
window.addEventListener('hashchange', router);
// 페이지 로드 이벤트
window.addEventListener('load', router);
