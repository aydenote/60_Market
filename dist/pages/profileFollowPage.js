import { init } from '../script/profileFollow';
import Footer from './footer';
import { backHistory } from '../utils/common';
var footer = new Footer();
var ProfileFollowPage = /** @class */ (function () {
    function ProfileFollowPage() {
    }
    ProfileFollowPage.prototype.render = function (content) {
        var footerEl = footer.render();
        // header
        var headerEl = document.createElement('header');
        var headerBarArticleEl = document.createElement('article');
        var backImgEl = document.createElement('img');
        var titlePEl = document.createElement('p');
        headerBarArticleEl.classList.add('headerBar');
        headerBarArticleEl.classList.add('followers');
        backImgEl.classList.add('headerBarBack');
        backImgEl.classList.add('buttonClick');
        backImgEl.setAttribute('src', '../asset/images/icons/icon__arrowLeft.svg');
        backImgEl.setAttribute('alt', '뒤로 가기');
        backImgEl.addEventListener('click', backHistory);
        titlePEl.classList.add('followTitle');
        headerBarArticleEl.appendChild(backImgEl);
        headerBarArticleEl.appendChild(titlePEl);
        headerEl.appendChild(headerBarArticleEl);
        // main
        var mainEl = document.createElement('main');
        var userSectionEl = document.createElement('section');
        var userListUlEl = document.createElement('ul');
        userListUlEl.classList.add('userList');
        userSectionEl.appendChild(userListUlEl);
        mainEl.appendChild(userSectionEl);
        // follow 리스트 구현
        init(userListUlEl);
        content.appendChild(headerEl);
        content.appendChild(mainEl);
        content.appendChild(footerEl);
    };
    return ProfileFollowPage;
}());
export default ProfileFollowPage;
