class MainPage {
  render(content: HTMLElement) {
    const wrapEl = document.createElement('div');
    const articleEl = document.createElement('article');
    const containerEl = document.createElement('div');
    const clockEl = document.createElement('div');

    wrapEl.classList.add('wrap');
    articleEl.classList.add('loadding');
    containerEl.classList.add('box');
    clockEl.classList.add('clock');

    containerEl.appendChild(clockEl);
    articleEl.appendChild(containerEl);
    wrapEl.appendChild(articleEl);

    window.setTimeout(() => {
      window.location.hash = '#intro';
    }, 1000);

    content.appendChild(wrapEl);
  }
}

export default MainPage;
