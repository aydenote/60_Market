class Router {
  // const router = new Router({
  //   "/": ProductPage,
  //   "/detail": ProductDetail,
  // });
  constructor(routes) {
    if (!routes) {
      console.error("Can not initialize routes, need routes!");
    }
    this.routes = routes;
    for (const key in routes) {
      const route = routes[key];
      if (key.indexOf(":") > -1) {
        const [_, routeName, ...param] = key.split("/");
        this.routes["/" + routeName] = route;
        delete this.routes[key];
      }
    }
  }

  init(rootElementId) {
    if (!rootElementId) {
      console.error("Can not initialize routes, not define rootElementId");
      return null;
    }
    this.rootElementId = rootElementId;
    this.routing(window.location.pathname);

    window.addEventListener("click", (e) => {
      if (e.target.tagName.toLowerCase() === "a") {
        e.preventDefault();
        this.routePush(e.target.href);
      }
    });
    window.onpopstate = () => this.routing(window.location.pathname);
  }

  routePush(pathname) {
    window.history.pushState({}, null, pathname);
    this.routing(window.location.pathname);
  }

  routing(pathname) {
    const [_, routeName, param] = pathname.split("/");
    let page = "";

    if (this.routes[pathname]) {
      // new ProductDetail or new ProductPage
      const component = new this.routes[pathname]();
      page = component.render();
    } else if (param) {
      const component = new this.routes["/" + routeName](param);
      page = component.render();
    }

    if (page) {
      this.render(page);
    }
  }

  render(page) {
    const rootElement = document.querySelector(this.rootElementId);
    const pageParam = [];
    rootElement.innerHTML = "";

    for (let element in page) {
      if (page.hasOwnProperty(element)) {
        pageParam.push(element);
      }
    }

    for (const param of pageParam) {
      rootElement.appendChild(page[param]);
    }
  }
}

export default Router;
