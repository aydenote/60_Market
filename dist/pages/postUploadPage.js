import { postInput, readInputFile, checkPost } from '../script/postUpload';
import { backHistory } from '../utils/common';
var PostUploadPage = /** @class */ (function () {
    function PostUploadPage() {
    }
    PostUploadPage.prototype.render = function (content) {
        document.querySelector('body').classList.remove('profileBackground');
        // header
        var headerEl = document.createElement('header');
        var headerBarArticleEl = document.createElement('article');
        var backImgEl = document.createElement('img');
        var uploadBtnEl = document.createElement('button');
        headerBarArticleEl.classList.add('headerBar');
        headerBarArticleEl.classList.add('postingHeaderBar');
        backImgEl.classList.add('headerBarBack');
        backImgEl.classList.add('buttonClick');
        backImgEl.setAttribute('src', '../asset/images/icons/icon__arrowLeft.svg');
        backImgEl.setAttribute('alt', '뒤로 가기');
        backImgEl.addEventListener('click', backHistory);
        uploadBtnEl.classList.add('headerBarSettingBtn');
        uploadBtnEl.classList.add('headerBarBtn');
        uploadBtnEl.classList.add('buttonClick');
        uploadBtnEl.id = 'postingUploadBtn';
        uploadBtnEl.setAttribute('type', 'button');
        uploadBtnEl.disabled = true;
        uploadBtnEl.innerText = '업로드';
        headerBarArticleEl.appendChild(backImgEl);
        headerBarArticleEl.appendChild(uploadBtnEl);
        headerEl.appendChild(headerBarArticleEl);
        // main
        var mainEl = document.createElement('main');
        var postUploadFormEl = document.createElement('form');
        var profileImgEl = document.createElement('img');
        var postTextLabelEl = document.createElement('label');
        var postTextareaEl = document.createElement('textarea');
        var selectImgLabelEl = document.createElement('label');
        var uploadImgEl = document.createElement('img');
        var uploadInputEl = document.createElement('input');
        var postImgDivEl = document.createElement('div');
        mainEl.classList.add('postContainer');
        postUploadFormEl.classList.add('postUploadForm');
        profileImgEl.classList.add('userProfileImage');
        profileImgEl.classList.add('postUploadCommentImg');
        profileImgEl.setAttribute('alt', '프로필 이미지');
        postTextLabelEl.classList.add('ir');
        postTextLabelEl.setAttribute('for', 'postUploadComent');
        postTextLabelEl.innerText = '게시글 입력창입니다.';
        postTextareaEl.setAttribute('type', 'text');
        postTextareaEl.id = 'postUploadComent';
        postTextareaEl.rows = 10;
        postTextareaEl.maxLength = 140;
        postTextareaEl.placeholder = '게시글 입력하기...';
        postTextareaEl.classList.add('postUploadComentTxt');
        postTextareaEl.addEventListener('keyup', function () {
            postInput();
        });
        selectImgLabelEl.classList.add('postUploadInputImg');
        selectImgLabelEl.setAttribute('for', 'chatSelectImage');
        uploadImgEl.setAttribute('src', '../asset/images/icons/icon__imagesUplode.svg');
        uploadImgEl.setAttribute('alt', '');
        uploadInputEl.setAttribute('type', 'file');
        uploadInputEl.id = 'chatSelectImage';
        uploadInputEl.accept = 'image/*';
        uploadInputEl.classList.add('postUploadInput');
        uploadInputEl.classList.add('ir');
        uploadInputEl.multiple = true;
        uploadInputEl.addEventListener('change', function (event) {
            readInputFile(event);
        });
        postImgDivEl.classList.add('postUploadImageScreen');
        selectImgLabelEl.appendChild(uploadImgEl);
        postUploadFormEl.appendChild(profileImgEl);
        postUploadFormEl.appendChild(postTextLabelEl);
        postUploadFormEl.appendChild(postTextareaEl);
        postUploadFormEl.appendChild(selectImgLabelEl);
        postUploadFormEl.appendChild(uploadInputEl);
        mainEl.appendChild(postUploadFormEl);
        mainEl.appendChild(postImgDivEl);
        // 프로필 이미지 반영, 게시물 업로드 기능 구현
        checkPost(profileImgEl, postImgDivEl, postTextareaEl, uploadBtnEl);
        content.appendChild(headerEl);
        content.appendChild(mainEl);
    };
    return PostUploadPage;
}());
export default PostUploadPage;
