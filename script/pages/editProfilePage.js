class EditProfilePage {
  render() {
    document.querySelector("body").classList.remove("profileBackground");
    // header
    const headerEl = document.createElement("header");
    const headerBarArticleEl = document.createElement("article");
    const backImgEl = document.createElement("img");
    const saveBtnEl = document.createElement("button");

    headerBarArticleEl.classList.add("headerBar");
    backImgEl.classList.add("headerBarBack");
    backImgEl.classList.add("buttonClick");
    backImgEl.setAttribute("src", "../asset/images/icons/icon__arrowLeft.svg");
    backImgEl.setAttribute("alt", "뒤로 가기");
    saveBtnEl.setAttribute("type", "button");
    saveBtnEl.classList.add("headerBarSettingBtn");
    saveBtnEl.classList.add("headerBarBtn");
    saveBtnEl.classList.add("buttonClick");
    saveBtnEl.innerText = "저장";

    headerBarArticleEl.appendChild(backImgEl);
    headerBarArticleEl.appendChild(saveBtnEl);
    headerEl.appendChild(headerBarArticleEl);

    // main
    const mainEl = document.createElement("main");
    const imgFormEl = document.createElement("form");
    const imgLabelEl = document.createElement("label");
    const updateImgEl = document.createElement("img");
    const uploadImgEl = document.createElement("img");
    const imgUpdateInputEl = document.createElement("input");

    imgFormEl.classList.add("updateProfileImg");
    imgLabelEl.classList.add("profileImgBtn");
    imgLabelEl.setAttribute("for", "updateUserProfileImg");
    updateImgEl.classList.add("updateUserImg");
    updateImgEl.setAttribute("src", "../asset/images/basic-profile.svg");
    updateImgEl.setAttribute("alt", "사용자 이미지 수정");
    uploadImgEl.classList.add("imgUploadBtn");
    uploadImgEl.setAttribute(
      "src",
      "../asset/images/icons/icon__imagesUplodeFill.svg"
    );
    uploadImgEl.setAttribute("alt", "이미지 수정");
    imgUpdateInputEl.setAttribute("type", "file");
    imgUpdateInputEl.setAttribute("accept", "image/*");
    imgUpdateInputEl.id = "updateUserProfileImg";
    imgUpdateInputEl.addEventListener("change", () => {
      console.log("1");
    });

    imgLabelEl.appendChild(updateImgEl);
    imgLabelEl.appendChild(uploadImgEl);
    imgFormEl.appendChild(imgLabelEl);
    imgFormEl.appendChild(imgUpdateInputEl);
    mainEl.appendChild(imgFormEl);

    const editFromEl = document.createElement("form");
    const nameLabelEl = document.createElement("label");
    const nameInputEl = document.createElement("input");
    const idLabelEl = document.createElement("label");
    const idInputEl = document.createElement("input");
    const alertPEl = document.createElement("p");
    const introLabelEl = document.createElement("label");
    const introInputEl = document.createElement("input");

    editFromEl.classList.add("logInForm");
    editFromEl.classList.add("registerForm");
    editFromEl.classList.add("profileModificationForm");
    editFromEl.setAttribute("method", "get");
    editFromEl.id = "profileSaveForm";
    nameLabelEl.classList.add("registerFormLabel");
    nameLabelEl.classList.add("profileModificationFormlabel");
    nameLabelEl.setAttribute("for", "name");
    nameLabelEl.innerText = "사용자 이름";
    nameInputEl.id = "name";
    nameInputEl.addEventListener("keyup", () => {
      console.log("2");
    });
    nameInputEl.setAttribute("type", "text");
    nameInputEl.required = true;
    nameInputEl.placeholder = "2~10자 이내여야 합니다.";
    nameInputEl.maxLength = "10";
    nameInputEl.minLength = "2";
    idLabelEl.classList.add("registerFormLabel");
    idLabelEl.classList.add("profileModificationFormlabel");
    idLabelEl.setAttribute("for", "email");
    idLabelEl.innerText = "계정 ID";
    idInputEl.addEventListener("keyup", () => {
      console.log("1");
    });
    idInputEl.id = "id";
    idInputEl.setAttribute("type", "text");
    idInputEl.minLength = "2";
    idInputEl.maxLength = "10";
    idInputEl.required = true;
    idInputEl.placeholder = "영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.";
    alertPEl.classList.add("alertMessage");
    alertPEl.innerText = "*영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.";
    introLabelEl.classList.add("registerFormLabel");
    introLabelEl.classList.add("profileModificationFormlabel");
    introLabelEl.setAttribute("for", "introduce");
    introLabelEl.innerText = "소개";
    introInputEl.id = "introduce";
    introInputEl.addEventListener("keyup", () => {
      console.log("1");
    });
    introInputEl.setAttribute("type", "text");
    introInputEl.required = "true";
    introInputEl.placeholder = "자신과 판매할 상품에 대한 소개해 주세요!";
    introInputEl.maxLength = "50";
    introInputEl.minLength = "2";

    editFromEl.appendChild(nameLabelEl);
    editFromEl.appendChild(nameInputEl);
    editFromEl.appendChild(idLabelEl);
    editFromEl.appendChild(idInputEl);
    editFromEl.appendChild(alertPEl);
    editFromEl.appendChild(introLabelEl);
    editFromEl.appendChild(introInputEl);
    mainEl.appendChild(editFromEl);
    return { headerEl, mainEl };
  }
}

export default EditProfilePage;

/*      <main>
        <form class="logInForm registerForm profileModificationForm" method="get" id="profileSaveForm">
          <label class="registerFormLabel profileModificationFormlabel" for="name">사용자 이름</label>

          <input onkeyup="profileChangeInput()" id="name" type="text" required placeholder="2~10자 이내여야 합니다." maxlength="10" minlength="2"/>
          <label class="registerFormLabel profileModificationFormlabel" for="email">계정 ID</label>
          <input
            onkeyup="profileChangeInput()"
            id="id"
            type="text"
            minlength="2"
            maxlength="10"
            required
            placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
          />
          <p class="alertMessage">*영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.</p>
          <label class="registerFormLabel profileModificationFormlabel" for="introduce">소개</label>
          <input onkeyup="profileChangeInput()" id="introduce" type="text" required placeholder="자신과 판매할 상품에 대한 소개해 주세요!" maxlength="50" minlength="2"/>
        </form>
      </main>
    </div> */
