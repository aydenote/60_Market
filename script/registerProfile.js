const url = 'https://mandarin.api.weniv.co.kr';
const token = localStorage.getItem('Token');

let imgUrl;
const profileImg = document.querySelector('.uploadProfileImg');
const username = document.querySelector('#username');
const id = document.querySelector('#id');
const intro = document.querySelector('#intro');
const profileForm = document.querySelector('.profileForm');
const profileFormBtn = document.querySelector('.profileFormBtn');
const errorMessage = document.querySelector('.registerFormAlert');

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

// ID 중복 체크 및 회원가입 정보 전송
class IsValidId {
  constructor(id, errorMessage) {
    this.id = id;
    this.errorMessage = errorMessage;
  }

  // ✨ 이 부분이 에러가 있음
  // 회원가입 정보 전송
  sendRegister = async () => {
    try {
      const res = await axios.post(`${url}/user`, {
        user: {
          username: username.value,
          email: localStorage.getItem('email'),
          password: localStorage.getItem('password'),
          accountname: id.value,
          intro: intro.value,
          image: 'https://mandarin.api.weniv.co.kr/Ellipse.png',
        },
      });
      console.log(res);
      // location.href = './logIn.html';
      // console.log(username.value);
      // console.log(localStorage.getItem('email'));
      // console.log(localStorage.getItem('password'));
      // console.log(id.value);
      // console.log(this.id.value);
      // console.log(intro.value);
    } catch (err) {
      console.log(err);
      // return err;
    }
  };

  // ID 중복 메시지
  checkId = (resMessage) => {
    if (resMessage === '이미 가입된 계정ID 입니다.') {
      this.errorMessage.innerText = `*${resMessage}`;
      this.errorMessage.classList.remove('ir');
      this.id.oninput = () => {
        this.errorMessage.classList.add('ir');
      };
    }
    if (resMessage === '사용 가능한 계정ID 입니다.') {
      this.sendRegister(resMessage);
    }
  };

  // 유효 ID 검사
  isValidId = async () => {
    try {
      const res = await axios.post(`${url}/user/accountnamevalid`, {
        user: {
          accountname: this.id.value,
        },
      });
      const resMessage = res.data.message;
      this.checkId(resMessage);
    } catch (err) {
      return err;
    }
  };
}

// 폼 내용 체크
const checkForm = new CheckForm(username, id, intro, profileFormBtn);
// ID 중복 체크
const isValidId = new IsValidId(id, errorMessage);

// 폼 입력
profileForm.addEventListener('input', checkForm.checkInput);
// 60'' 마켓 시작하기 버튼 클릭
profileFormBtn.addEventListener('click', isValidId.isValidId);
