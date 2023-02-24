import { postInput, renderPost, submitComment, getLoginUserInfo } from '../script/post.js';
import { backHistory } from '../utils/common.js';

class PostPage {
  render(content: HTMLElement) {
    (document.querySelector('body') as HTMLElement).classList.remove('profileBackground');

    //header
    const headerEl = document.createElement('header');
    const headerBarArticleEl = document.createElement('article');
    const backImgEl = document.createElement('img');

    headerBarArticleEl.classList.add('headerBar');
    backImgEl.classList.add('headerBarBack');
    backImgEl.classList.add('buttonClick');
    backImgEl.setAttribute('src', '../asset/images/icons/icon__arrowLeft.svg');
    backImgEl.setAttribute('alt', '뒤로 가기');
    backImgEl.addEventListener('click', backHistory);

    headerBarArticleEl.appendChild(backImgEl);
    headerEl.appendChild(headerBarArticleEl);

    //main
    const mainEl = document.createElement('main');
    const titleHeading2El = document.createElement('h2');
    const postContainerArticleEl = document.createElement('article');
    const subTitleHeading3El = document.createElement('h3');
    const sectionEl = document.createElement('section');
    const userListDivEl = document.createElement('div');
    const userItemDivEl = document.createElement('div');
    const postContentSectionEl = document.createElement('section');
    const commentSectionEl = document.createElement('section');

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
    const footerEl = document.createElement('footer');
    const chatFormEl = document.createElement('form');
    const enterImgDivEl = document.createElement('div');
    const userProfileImgEl = document.createElement('img');
    const chatContentLabelEl = document.createElement('label');
    const chatInputEl = document.createElement('input');
    const postBtnEl = document.createElement('button');

    footerEl.classList.add('chatEnter');
    footerEl.classList.add('postChatEnter');
    chatFormEl.classList.add('chatEnterContent');
    chatFormEl.onsubmit = () => {
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
  }
}

export default PostPage;
