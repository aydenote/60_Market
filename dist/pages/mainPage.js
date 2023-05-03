var MainPage = /** @class */ (function () {
    function MainPage() {
    }
    MainPage.prototype.render = function (content) {
        var wrapEl = document.createElement('div');
        var articleEl = document.createElement('article');
        var containerEl = document.createElement('div');
        var clockEl = document.createElement('div');
        wrapEl.classList.add('wrap');
        articleEl.classList.add('loadding');
        containerEl.classList.add('box');
        clockEl.classList.add('clock');
        containerEl.appendChild(clockEl);
        articleEl.appendChild(containerEl);
        wrapEl.appendChild(articleEl);
        window.setTimeout(function () {
            window.location.hash = '#intro';
        }, 1000);
        content.appendChild(wrapEl);
    };
    return MainPage;
}());
export default MainPage;
