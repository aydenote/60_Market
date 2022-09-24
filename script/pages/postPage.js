import {
  getLoginUserInfo,
  createPost,
  postInput,
  readInputFile,
} from "../postUpload.js";

class PostPage {
  render() {
    document.querySelector("body").classList.remove("profileBackground");
    // header
    const headerEl = document.createElement("header");
    const headerBarArticleEl = document.createElement("article");
    const backImgEl = document.createElement("img");
    const uploadBtnEl = document.createElement("button");

    headerBarArticleEl.classList.add("headerBar");
    headerBarArticleEl.classList.add("postingHeaderBar");
    backImgEl.classList.add("headerBarBack");
    backImgEl.classList.add("buttonClick");
    backImgEl.setAttribute("src", "../asset/images/icons/icon__arrowLeft.svg");
    backImgEl.setAttribute("alt", "뒤로 가기");
    uploadBtnEl.classList.add("headerBarSettingBtn");
    uploadBtnEl.classList.add("headerBarBtn");
    uploadBtnEl.classList.add("buttonClick");
    uploadBtnEl.id = "postingUploadBtn";
    uploadBtnEl.setAttribute("type", "button");
    uploadBtnEl.disabled = true;
    uploadBtnEl.innerText = "업로드";
    uploadBtnEl.addEventListener("click", () => {
      createPost();
    });

    headerBarArticleEl.appendChild(backImgEl);
    headerBarArticleEl.appendChild(uploadBtnEl);
    headerEl.appendChild(headerBarArticleEl);

    // main
    const mainEl = document.createElement("main");
    const postUploadFormEl = document.createElement("form");
    const profileImgEl = document.createElement("img");
    const postTextLabelEl = document.createElement("label");
    const postTextareaEl = document.createElement("textarea");
    const selectImgLabelEl = document.createElement("label");
    const uploadImgEl = document.createElement("img");
    const uploadInputEl = document.createElement("input");
    const postImgDivEl = document.createElement("div");

    mainEl.classList.add("postContainer");
    postUploadFormEl.classList.add("postUploadForm");
    profileImgEl.classList.add("userProfileImage");
    profileImgEl.classList.add("postUploadCommentImg");
    profileImgEl.setAttribute("alt", "프로필 이미지");
    postTextLabelEl.classList.add("ir");
    postTextLabelEl.setAttribute("for", "postUploadComent");
    postTextLabelEl.innerText = "게시글 입력창입니다.";
    postTextareaEl.setAttribute("type", "text");
    postTextareaEl.id = "postUploadComent";
    postTextareaEl.rows = "10";
    postTextareaEl.maxLength = "140";
    postTextareaEl.placeholder = "게시글 입력하기...";
    postTextareaEl.classList.add("postUploadComentTxt");
    postTextareaEl.addEventListener("keyup", () => {
      postInput();
    });
    selectImgLabelEl.classList.add("postUploadInputImg");
    selectImgLabelEl.setAttribute("for", "chatSelectImage");
    uploadImgEl.setAttribute(
      "src",
      "../asset/images/icons/icon__imagesUplode.svg"
    );
    uploadImgEl.setAttribute("alt", "");
    uploadInputEl.setAttribute("type", "file");
    uploadInputEl.id = "chatSelectImage";
    uploadInputEl.accept = "image/*";
    uploadInputEl.classList.add("postUploadInput");
    uploadInputEl.classList.add("ir");
    uploadInputEl.multiple = true;
    uploadInputEl.addEventListener("change", (event) => {
      readInputFile(event);
    });
    postImgDivEl.classList.add("postUploadImageScreen");

    selectImgLabelEl.appendChild(uploadImgEl);
    postUploadFormEl.appendChild(profileImgEl);
    postUploadFormEl.appendChild(postTextLabelEl);
    postUploadFormEl.appendChild(postTextareaEl);
    postUploadFormEl.appendChild(selectImgLabelEl);
    postUploadFormEl.appendChild(uploadInputEl);
    mainEl.appendChild(postUploadFormEl);
    mainEl.appendChild(postImgDivEl);

    // 프로필 이미지 반영, 게시물 업로드 기능 구현
    // const postUpload = new PostUpload(profileImgEl, postImgDivEl, uploadBtnEl);
    getLoginUserInfo(profileImgEl);

    return { headerEl, mainEl };
  }
}

export default PostPage;
