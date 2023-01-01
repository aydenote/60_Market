import { UploadProfileImg, CheckForm, IsValidId } from '../script/registerProfile.js';

class ProfileRegister {
  render(content) {
    const wrapEl = document.createElement('div');

    //header
    const headerEl = document.createElement('header');
    const heading1El = document.createElement('h1');
    const infoPEl = document.createElement('p');

    wrapEl.classList.add('wrap');
    wrapEl.classList.add('registerWrap');
    heading1El.classList.add('registerHeader');
    infoPEl.classList.add('registerInfo');

    headerEl.appendChild(heading1El);
    headerEl.appendChild(infoPEl);
    wrapEl.appendChild(headerEl);

    //main
    const mainEl = document.createElement('main');
    const profileFormEl = document.createElement('form');
    const profileImgLabelEl = document.createElement('label');
    const profileImgEl = document.createElement('img');
    const uploadImgEl = document.createElement('img');
    const imgInputEl = document.createElement('input');
    const userNameLabelEl = document.createElement('label');
    const userNameInputEl = document.createElement('input');
    const userIdLabelEl = document.createElement('label');
    const userIdInputEl = document.createElement('input');
    const userIntroLabelEl = document.createElement('label');
    const userIntroInputEl = document.createElement('input');
    const registerAlertPEl = document.createElement('p');
    const profileFormBtn = document.createElement('button');

    profileFormEl.classList.add('logInForm');
    profileFormEl.classList.add('registerForm');
    profileFormEl.classList.add('profileForm');
    profileImgLabelEl.classList.add('profileImgBtn');
    profileImgLabelEl.setAttribute('for', 'profileImg');
    profileImgEl.classList.add('uploadProfileImg');
    profileImgEl.setAttribute('src', '../asset/images/basic-profile.svg');
    profileImgEl.setAttribute('alt', '사용자 프로필 이미지');
    uploadImgEl.classList.add('uploadProfileImgIcon');
    uploadImgEl.setAttribute('src', '../asset/images/icons/icon__imagesUplodeFill.svg');
    uploadImgEl.setAttribute('alt', '이미지 업로드');
    imgInputEl.id = 'profileImg';
    imgInputEl.classList.add('ir');
    imgInputEl.name = 'profileImg';
    imgInputEl.setAttribute('type', 'file');
    imgInputEl.setAttribute('accept', 'image/*');

    userNameLabelEl.classList.add('registerFormLabel');
    userNameLabelEl.setAttribute('for', 'username');
    userNameLabelEl.innerText = '사용자 이름';
    userNameInputEl.id = 'username';
    userNameInputEl.name = 'username';
    userNameInputEl.setAttribute('type', 'text');
    userNameInputEl.setAttribute('minlength', '2');
    userNameInputEl.setAttribute('maxLength', '10');
    userNameInputEl.required = true;
    userNameInputEl.setAttribute('placeholder', '2~10자 이내여야 합니다.');

    userIdLabelEl.classList.add('registerFormLabel');
    userIdLabelEl.setAttribute('for', 'id');
    userIdLabelEl.innerText = '계정 ID';
    userIdInputEl.id = 'id';
    userIdInputEl.name = 'id';
    userIdInputEl.setAttribute('type', 'text');
    userIdInputEl.setAttribute('minlength', '2');
    userIdInputEl.setAttribute('maxLength', '10');
    userIdInputEl.required = true;
    userIdInputEl.setAttribute('placeholder', '영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.');

    registerAlertPEl.classList.add('registerFormAlert');
    registerAlertPEl.classList.add('ir');
    registerAlertPEl.innerText = '영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.';

    userIntroLabelEl.classList.add('registerFormLabel');
    userIntroLabelEl.setAttribute('for', 'intro');
    userIntroLabelEl.innerText = '소개';
    userIntroInputEl.id = 'intro';
    userIntroInputEl.name = 'intro';
    userIntroInputEl.setAttribute('type', 'text');
    userIntroInputEl.setAttribute('minlength', '2');
    userIntroInputEl.setAttribute('maxLength', '50');
    userIntroInputEl.required = true;
    userIntroInputEl.setAttribute('placeholder', '자신과 판매할 상품에 대한 소개해 주세요!');
    profileFormBtn.classList.add('btn');
    profileFormBtn.classList.add('registerFormBtn');
    profileFormBtn.classList.add('profileFormBtn');
    profileFormBtn.setAttribute('type', 'button');
    profileFormBtn.disabled = true;
    profileFormBtn.innerText = "60'' 마켓 시작하기";

    profileImgLabelEl.appendChild(profileImgEl);
    profileImgLabelEl.appendChild(uploadImgEl);
    profileFormEl.appendChild(profileImgLabelEl);
    profileFormEl.appendChild(imgInputEl);
    profileFormEl.appendChild(userNameLabelEl);
    profileFormEl.appendChild(userNameInputEl);
    profileFormEl.appendChild(userIdLabelEl);
    profileFormEl.appendChild(userIdInputEl);
    profileFormEl.appendChild(registerAlertPEl);
    profileFormEl.appendChild(userIntroLabelEl);
    profileFormEl.appendChild(userIntroInputEl);
    profileFormEl.appendChild(profileFormBtn);
    mainEl.appendChild(profileFormEl);
    wrapEl.appendChild(mainEl);
    content.appendChild(wrapEl);

    // 프로필 이미지 업로드
    const uploadProfileImg = new UploadProfileImg(profileImgEl, imgInputEl);
    // 폼 내용 체크
    const checkForm = new CheckForm(
      userNameInputEl,
      userIdInputEl,
      userIntroInputEl,
      profileFormBtn,
      registerAlertPEl
    );
    // ID 중복 체크 및 회원가입 정보 전송
    const isValidId = new IsValidId(
      userNameInputEl,
      userIdInputEl,
      userIntroInputEl,
      registerAlertPEl
    );

    // 프로필 이미지 업로드
    imgInputEl.addEventListener('change', uploadProfileImg.previewImg);
    // 폼 입력
    profileFormEl.addEventListener('input', checkForm.checkInput);
    // 60'' 마켓 시작하기 버튼 클릭
    profileFormBtn.addEventListener('click', isValidId.isValidId);
  }
}

export default ProfileRegister;
