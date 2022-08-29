import { MainPage, IntroPage, LoginPage, HomePage } from "./pages/index.js";
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
      // "/home": HomePage,
      // "/detail": ProductDetail,
    });
    router.init(rootEl);
  }
}
