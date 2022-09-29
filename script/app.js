import {
  MainPage,
  IntroPage,
  LoginPage,
  SignUpPage,
  HomePage,
  SearchPage,
  ProfilePage,
  ProfileFollowPage,
  ProductPage,
  EditProfilePage,
  ChatPage,
  ChattingPage1,
  ChattingPage2,
  ChattingPage3,
  ChattingPage4,
  PostUploadPage,
  ErrorPage,
  PostPage,
} from "./pages/index.js";
import { Router } from "./utils/index.js";

export default class App {
  constructor(props) {
    this.props = props;
  }

  setup() {
    const { rootEl } = this.props;

    const router = new Router({
      "/": MainPage,
      "/intro": IntroPage,
      "/login": LoginPage,
      "/signUp": SignUpPage,
      "/home": HomePage,
      "/search": SearchPage,
      "/profile": ProfilePage,
      "/profileFollow": ProfileFollowPage,
      "/product": ProductPage,
      "/editProfile": EditProfilePage,
      "/chat": ChatPage,
      "/chatting1": ChattingPage1,
      "/chatting2": ChattingPage2,
      "/chatting3": ChattingPage3,
      "/chatting4": ChattingPage4,
      "/postUpload": PostUploadPage,
      "/post": PostPage,
      "/error": ErrorPage,
    });
    router.init(rootEl);
  }
}
