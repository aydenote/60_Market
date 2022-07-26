const url = 'https://mandarin.api.weniv.co.kr';
let profileImg;
const basicImg = document.querySelector('.uploadProfileImg');
const profileImgInput = document.querySelector('#profileImg');
const username = document.querySelector('#username');
const id = document.querySelector('#id');
const intro = document.querySelector('#intro');
const profileForm = document.querySelector('.profileForm');
const profileFormBtn = document.querySelector('.profileFormBtn');
const errorMessage = document.querySelector('.registerFormAlert');

// 프로필 이미지 업로드
class UploadProfileImg {
  constructor(profileImg) {
    this.profileImg = profileImg;
  }

  // 서버에 프로필 이미지 보내기
  sendProfileImg = async (selectedImg) => {
    const formData = new FormData();
    formData.append('image', selectedImg);

    try {
      const res = await axios.post(`${url}/image/uploadfiles`, formData);
      profileImg = res.data[0].filename;
    } catch (err) {
      return err;
    }
  };

  // 프로필 이미지 미리보기
  previewImg = () => {
    let selectedImg = profileImgInput.files[0];

    if (selectedImg.size > 10000000) {
      alert('이미지 사이즈는 10MB 이내로 등록 가능합니다.');
      return false;
    }
    profileImg.src = URL.createObjectURL(selectedImg);
    profileImg.classList.add('setting');
    this.sendProfileImg(selectedImg);
    URL.revokeObjectURL(selectedImg);
  };
}

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

  // 회원가입 정보 전송
  sendRegister = async () => {
    if (profileImg === undefined) {
      profileImg = '1658636863237.png';
    }
    try {
      const res = await axios.post(`${url}/user`, {
        user: {
          username: username.value,
          email: localStorage.getItem('email'),
          password: localStorage.getItem('password'),
          accountname: id.value,
          intro: intro.value,
          image: `${url}/${profileImg}`,
        },
      });
      location.href = './logIn.html';
    } catch (err) {
      return err;
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

// 프로필 이미지 업로드
const uploadProfileImg = new UploadProfileImg(profileImg);
// 폼 내용 체크
const checkForm = new CheckForm(username, id, intro, profileFormBtn);
// ID 중복 체크 및 회원가입 정보 전송
const isValidId = new IsValidId(id, errorMessage);

// 프로필 이미지 업로드
profileImgInput.addEventListener('change', uploadProfileImg.previewImg);
// 폼 입력
profileForm.addEventListener('input', checkForm.checkInput);
// 60'' 마켓 시작하기 버튼 클릭
profileFormBtn.addEventListener('click', isValidId.isValidId);
