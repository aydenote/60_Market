import {
  MainPage,
  IntroPage,
  LoginPage,
  SignUpPage,
  HomePage,
  SearchPage,
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
    });
    router.init(rootEl);
  }
}
