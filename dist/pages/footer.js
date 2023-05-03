var Footer = /** @class */ (function () {
    function Footer() {
    }
    Footer.prototype.render = function () {
        //footer
        var footerEl = document.createElement('footer');
        var navBarEl = document.createElement('nav');
        var ulEl = document.createElement('ul');
        navBarEl.classList.add('navBar');
        ulEl.classList.add('navList');
        // 홈
        var homeliEl = document.createElement('li');
        var homeDivEl = document.createElement('div');
        var homeArticleEl = document.createElement('article');
        var homePEl = document.createElement('p');
        homeDivEl.classList.add('nav');
        homeDivEl.addEventListener('click', clickHome);
        homeArticleEl.classList.add('navIcon');
        homeArticleEl.classList.add('navHome');
        homePEl.classList.add('navText');
        homePEl.innerText = '홈';
        homeDivEl.appendChild(homeArticleEl);
        homeDivEl.appendChild(homePEl);
        homeliEl.appendChild(homeDivEl);
        ulEl.appendChild(homeliEl);
        // 채팅
        var chatliEl = document.createElement('li');
        var chatDivEl = document.createElement('div');
        var chatArticleEl = document.createElement('article');
        var chatPEl = document.createElement('p');
        chatDivEl.classList.add('nav');
        chatDivEl.addEventListener('click', clickChat);
        chatArticleEl.classList.add('navIcon');
        chatArticleEl.classList.add('navChat');
        chatPEl.classList.add('navText');
        chatPEl.innerText = '채팅';
        chatDivEl.appendChild(chatArticleEl);
        chatDivEl.appendChild(chatPEl);
        chatliEl.appendChild(chatDivEl);
        ulEl.appendChild(chatliEl);
        // 포스트
        var postliEl = document.createElement('li');
        var postDivEl = document.createElement('div');
        var postArticleEl = document.createElement('article');
        var postPEl = document.createElement('p');
        postDivEl.classList.add('nav');
        postDivEl.addEventListener('click', clickPost);
        postArticleEl.classList.add('navIcon');
        postArticleEl.classList.add('navPosting');
        postPEl.classList.add('navText');
        postPEl.innerText = '게시물 작성';
        postDivEl.appendChild(postArticleEl);
        postDivEl.appendChild(postPEl);
        postliEl.appendChild(postDivEl);
        ulEl.appendChild(postliEl);
        // 프로필
        var profileliEl = document.createElement('li');
        var profileDivEl = document.createElement('div');
        var profileArticleEl = document.createElement('article');
        var profilePEl = document.createElement('p');
        profileDivEl.classList.add('nav');
        profileDivEl.addEventListener('click', clickProfile);
        profileArticleEl.classList.add('navIcon');
        profileArticleEl.classList.add('navProfile');
        profilePEl.classList.add('navText');
        profilePEl.innerText = '프로필';
        profileDivEl.appendChild(profileArticleEl);
        profileDivEl.appendChild(profilePEl);
        profileliEl.appendChild(profileDivEl);
        ulEl.appendChild(profileliEl);
        navBarEl.appendChild(ulEl);
        footerEl.appendChild(navBarEl);
        // NavBar icon 클래스 변경하여 색 변화
        var footerIconName = window.location.hash.split('#')[1];
        function changeNavIcon(iconName) {
            if (iconName === 'home') {
                homeArticleEl.classList.replace('navHome', 'navHomeSelected');
                chatArticleEl.classList.replace('navChatSelected', 'navChat');
                postArticleEl.classList.replace('navPostingSelected', 'navPosting');
                profileArticleEl.classList.replace('navProfileSelected', 'navProfile');
            }
            else if (iconName === 'chat') {
                homeArticleEl.classList.replace('navHomeSelected', 'navHome');
                chatArticleEl.classList.replace('navChat', 'navChatSelected');
                postArticleEl.classList.replace('navPostingSelected', 'navPosting');
                profileArticleEl.classList.replace('navProfileSelected', 'navProfile');
            }
            else if (iconName === 'profile') {
                homeArticleEl.classList.replace('navHomeSelected', 'navHome');
                chatArticleEl.classList.replace('navChatSelected', 'navChat');
                postArticleEl.classList.replace('navPostingSelected', 'navPosting');
                profileArticleEl.classList.replace('navProfile', 'navProfileSelected');
            }
        }
        changeNavIcon(footerIconName);
        // NavBar icon 클릭 시 해당 페이지로 이동
        function clickHome() {
            window.location.hash = '#home';
        }
        function clickChat() {
            window.location.hash = '#chat';
        }
        function clickProfile() {
            window.location.hash = '#profile';
        }
        function clickPost() {
            window.location.hash = '#postUpload';
        }
        return footerEl;
    };
    return Footer;
}());
export default Footer;
