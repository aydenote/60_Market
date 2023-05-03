import Footer from './footer';
import { getProfileInfo, getPostingList, albumTypePost } from '../script/profile';
import { logoutModal } from '../script/modal';
import { backHistory } from '../utils/common';
var ProfilePage = /** @class */ (function () {
    function ProfilePage() {
    }
    ProfilePage.prototype.render = function (content) {
        var footer = new Footer();
        var footerEl = footer.render();
        // body
        document.querySelector('body').classList.add('profileBackground');
        // header
        var headerEl = document.createElement('header');
        var heading1El = document.createElement('h1');
        var headerArticleEl = document.createElement('article');
        var backImgEl = document.createElement('img');
        var menuImgEl = document.createElement('img');
        heading1El.classList.add('ir');
        heading1El.innerText = '프로필';
        headerArticleEl.classList.add('headerBar');
        headerArticleEl.classList.add('profile');
        backImgEl.classList.add('headerBarBack');
        backImgEl.classList.add('buttonClick');
        backImgEl.setAttribute('src', '../asset/images/icons/icon__arrowLeft.svg');
        backImgEl.setAttribute('alt', '뒤로 가기');
        menuImgEl.classList.add('headerBarBtn');
        menuImgEl.classList.add('buttonClick');
        menuImgEl.setAttribute('src', '../asset/images/icons/icon__menu.svg');
        menuImgEl.setAttribute('alt', '메뉴');
        headerArticleEl.appendChild(backImgEl);
        headerArticleEl.appendChild(menuImgEl);
        headerEl.appendChild(heading1El);
        headerEl.appendChild(headerArticleEl);
        // main
        var mainEl = document.createElement('main');
        var introSectionEl = document.createElement('section');
        var heading2El = document.createElement('h2');
        var followSectionEl = document.createElement('section');
        var followerDivEl = document.createElement('div');
        var myProfileImgEl = document.createElement('img');
        var followingDivEl = document.createElement('div');
        var profileInfoSectionEl = document.createElement('section');
        var userNameStrongEl = document.createElement('strong');
        var userIdPEl = document.createElement('p');
        var introductionPEl = document.createElement('p');
        var linkSectionEl = document.createElement('section');
        var saleItemsSectionEl = document.createElement('section');
        var saleItemDivEl = document.createElement('div');
        var postingSectionEl = document.createElement('section');
        var albumBarArticleEl = document.createElement('article');
        var listTypeImgEl = document.createElement('img');
        var albumTypeImgEl = document.createElement('img');
        mainEl.classList.add('ProfileContent');
        introSectionEl.classList.add('introduce');
        heading2El.classList.add('ir');
        heading2El.innerText = '프로필 소개';
        followSectionEl.classList.add('myFollow');
        followSectionEl.classList.add('myProfileImg');
        followerDivEl.classList.add('followers');
        myProfileImgEl.classList.add('myImage');
        myProfileImgEl.setAttribute('src', '../asset/images/basic-profile.svg');
        myProfileImgEl.setAttribute('alt', '내 프로필 이미지');
        followingDivEl.classList.add('followings');
        profileInfoSectionEl.classList.add('profileInfo');
        userNameStrongEl.classList.add('userName');
        userIdPEl.classList.add('userId');
        introductionPEl.classList.add('introduction');
        linkSectionEl.classList.add('link');
        saleItemsSectionEl.classList.add('saleItems');
        saleItemDivEl.classList.add('saleItemContainer');
        postingSectionEl.classList.add('postingSummary');
        albumBarArticleEl.classList.add('albumBar');
        listTypeImgEl.classList.add('postingType');
        listTypeImgEl.classList.add('list');
        listTypeImgEl.classList.add('buttonClick');
        listTypeImgEl.setAttribute('src', '../asset/images/icons/icon__postList.svg');
        listTypeImgEl.setAttribute('alt', '리스트형으로 보기');
        albumTypeImgEl.classList.add('postingType');
        albumTypeImgEl.classList.add('album');
        albumTypeImgEl.classList.add('buttonClick');
        albumTypeImgEl.classList.add('unselected');
        albumTypeImgEl.setAttribute('src', '../asset/images/icons/icon__postAlbum.svg');
        albumTypeImgEl.setAttribute('alt', '앨범형으로 보기');
        // 뒤로 가기
        backImgEl.addEventListener('click', backHistory);
        saleItemsSectionEl.appendChild(saleItemDivEl);
        profileInfoSectionEl.appendChild(userNameStrongEl);
        profileInfoSectionEl.appendChild(userIdPEl);
        profileInfoSectionEl.appendChild(introductionPEl);
        followSectionEl.appendChild(followerDivEl);
        followSectionEl.appendChild(myProfileImgEl);
        followSectionEl.appendChild(followingDivEl);
        introSectionEl.appendChild(heading2El);
        introSectionEl.appendChild(followSectionEl);
        introSectionEl.appendChild(profileInfoSectionEl);
        introSectionEl.appendChild(linkSectionEl);
        albumBarArticleEl.appendChild(listTypeImgEl);
        albumBarArticleEl.appendChild(albumTypeImgEl);
        postingSectionEl.appendChild(albumBarArticleEl);
        mainEl.appendChild(introSectionEl);
        mainEl.appendChild(saleItemsSectionEl);
        mainEl.appendChild(postingSectionEl);
        // 팔로워, 팔로잉 페이지 이동
        followerDivEl.addEventListener('click', clickedFollowLink);
        followingDivEl.addEventListener('click', clickedFollowLink);
        function clickedFollowLink(event) {
            var profileUser = document.querySelector('.profileInfo .userId');
            var userId = profileUser.innerText.replace(/ /g, '');
            window.location.hash = "#profileFollow?accountname=".concat(userId, "&title=").concat(event.target.className);
        }
        // 프로필 정보 가져오기
        getProfileInfo();
        getPostingList();
        // 목록형, 앨범형으로 포스팅 구현
        albumBarArticleEl.addEventListener('click', function (event) {
            var selectType = event.target.className.split(' ')[1];
            if (selectType === 'list') {
                getPostingList();
            }
            else if (selectType === 'album') {
                albumTypePost();
            }
            else {
                return;
            }
        });
        // 사용자 로그아웃 모달
        menuImgEl.addEventListener('click', function () {
            logoutModal();
        });
        content.appendChild(headerEl);
        content.appendChild(mainEl);
        content.appendChild(footerEl);
    };
    return ProfilePage;
}());
export default ProfilePage;
