import { postInput, renderPost, submitComment, getLoginUserInfo } from '../script/post';
import { backHistory } from '../utils/common';
var PostPage = /** @class */ (function () {
    function PostPage() {
    }
    PostPage.prototype.render = function (content) {
        document.querySelector('body').classList.remove('profileBackground');
        //header
        var headerEl = document.createElement('header');
        var headerBarArticleEl = document.createElement('article');
        var backImgEl = document.createElement('img');
        headerBarArticleEl.classList.add('headerBar');
        backImgEl.classList.add('headerBarBack');
        backImgEl.classList.add('buttonClick');
        backImgEl.setAttribute('src', '../asset/images/icons/icon__arrowLeft.svg');
        backImgEl.setAttribute('alt', '뒤로 가기');
        backImgEl.addEventListener('click', backHistory);
        headerBarArticleEl.appendChild(backImgEl);
        headerEl.appendChild(headerBarArticleEl);
        //main
        var mainEl = document.createElement('main');
        var titleHeading2El = document.createElement('h2');
        var postContainerArticleEl = document.createElement('article');
        var subTitleHeading3El = document.createElement('h3');
        var sectionEl = document.createElement('section');
        var userListDivEl = document.createElement('div');
        var userItemDivEl = document.createElement('div');
        var postContentSectionEl = document.createElement('section');
        var commentSectionEl = document.createElement('section');
        mainEl.classList.add('postWrap');
        titleHeading2El.classList.add('ir');
        postContainerArticleEl.classList.add('post');
        postContainerArticleEl.classList.add('postContainer');
        subTitleHeading3El.classList.add('ir');
        userListDivEl.classList.add('userList');
        userItemDivEl.classList.add('userItem');
        postContentSectionEl.classList.add('postContent');
        commentSectionEl.classList.add('postCommentBox');
        userListDivEl.appendChild(userItemDivEl);
        sectionEl.appendChild(userListDivEl);
        postContainerArticleEl.appendChild(subTitleHeading3El);
        postContainerArticleEl.appendChild(sectionEl);
        postContainerArticleEl.appendChild(postContentSectionEl);
        mainEl.appendChild(titleHeading2El);
        mainEl.appendChild(postContainerArticleEl);
        mainEl.appendChild(commentSectionEl);
        //footer
        var footerEl = document.createElement('footer');
        var chatFormEl = document.createElement('form');
        var enterImgDivEl = document.createElement('div');
        var userProfileImgEl = document.createElement('img');
        var chatContentLabelEl = document.createElement('label');
        var chatInputEl = document.createElement('input');
        var postBtnEl = document.createElement('button');
        footerEl.classList.add('chatEnter');
        footerEl.classList.add('postChatEnter');
        chatFormEl.classList.add('chatEnterContent');
        chatFormEl.onsubmit = function () {
            return false;
        };
        enterImgDivEl.classList.add('chatEnterImage');
        userProfileImgEl.classList.add('commentUserProfile');
        userProfileImgEl.setAttribute('src', '');
        userProfileImgEl.setAttribute('alt', '');
        chatContentLabelEl.classList.add('postChatContent');
        chatInputEl.id = 'postChatContent';
        chatInputEl.setAttribute('type', 'text');
        chatInputEl.placeholder = '메시지 입력하기...';
        chatInputEl.addEventListener('keyup', postInput);
        postBtnEl.id = 'commentSubmit';
        postBtnEl.classList.add('postBtn');
        postBtnEl.setAttribute('type', 'button');
        postBtnEl.innerText = '게시';
        postBtnEl.addEventListener('click', submitComment);
        enterImgDivEl.appendChild(userProfileImgEl);
        chatFormEl.appendChild(enterImgDivEl);
        chatFormEl.appendChild(chatContentLabelEl);
        chatFormEl.appendChild(chatInputEl);
        chatFormEl.appendChild(postBtnEl);
        footerEl.appendChild(chatFormEl);
        // 게시물 상세 페이지 정보 가져오기 및 댓글 기능 구현
        renderPost();
        getLoginUserInfo(userProfileImgEl);
        content.appendChild(headerEl);
        content.appendChild(mainEl);
        content.appendChild(footerEl);
    };
    return PostPage;
}());
export default PostPage;
