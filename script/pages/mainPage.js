class MainPage {
  render() {
    const wrapEl = document.createElement("div");
    const articleEl = document.createElement("article");
    const containerEl = document.createElement("div");
    const clockEl = document.createElement("div");

    wrapEl.classList.add("wrap");
    articleEl.classList.add("loadding");
    containerEl.classList.add("box");
    clockEl.classList.add("clock");

    containerEl.appendChild(clockEl);
    articleEl.appendChild(containerEl);
    wrapEl.appendChild(articleEl);

    return { wrapEl };
  }

}

export default MainPage;
