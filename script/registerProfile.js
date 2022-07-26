const url = 'https://mandarin.api.weniv.co.kr';
const token = localStorage.getItem('Token');

const profileImg = document.querySelector('#profileImg');
const username = document.querySelector('#username');
const id = document.querySelector('#id');
const intro = document.querySelector('#intro');
const profileForm = document.querySelector('.profileForm');
const profileFormBtn = document.querySelector('.profileFormBtn');
const errorMessage = document.querySelector('.registerFormAlert');

// 폼 내용 체크
const checkForm = new CheckForm(username, id, intro, profileFormBtn);

// 폼 내용 체크
class CheckForm {
  constructor(username, id, intro, profileFormBtn) {
    this.username = username;
    this.id = id;
    this.intro = intro;
    this.profileFormBtn = profileFormBtn;
  }

  // 버튼 활성화
  isActiveBtn = () => {
    if (
      this.username.value !== '' &&
      this.id.value !== '' &&
      this.intro.value !== ''
    ) {
      this.profileFormBtn.style.opacity = '1';
      this.profileFormBtn.disabled = false;
    }
  };

  // 예외 문자 처리
  checkRegExp = () => {
    const regExp = /^[a-zA-Z0-9_.]{2,10}$/;
    if (regExp.test(this.id.value)) {
      errorMessage.classList.add('ir');
      this.isActiveBtn();
    }
    if (!regExp.test(this.id.value)) {
      errorMessage.classList.remove('ir');
      this.profileFormBtn.style.opacity = '0.3';
    }
  };

  // 입력 체크
  checkInput = () => {
    if (
      this.username.value.length > 1 &&
      this.id.value.length > 1 &&
      this.intro.value.length > 1
    ) {
      this.checkRegExp();
    }
  };
}

// 폼 입력
profileForm.addEventListener('input', checkForm.checkInput);
