const url = 'https://mandarin.api.weniv.co.kr';
let profileImg;

// 서버에 프로필 이미지 보내기
async function sendProfileImg(selectedImg) {
  const formData = new FormData();
  formData.append('image', selectedImg);

  try {
    const res = await axios.post(`${url}/image/uploadfiles`, formData);
    profileImg = res.data[0].filename;
  } catch (err) {
    return err;
  }
}

// 프로필 이미지 미리보기
export function previewImg(event, basicImg) {
  let selectedImg = event.target.files[0];

  if (selectedImg.size > 10000000) {
    alert('이미지 사이즈는 10MB 이내로 등록 가능합니다.');
    return false;
  }
  basicImg.src = URL.createObjectURL(selectedImg);
  sendProfileImg(selectedImg);
  URL.revokeObjectURL(selectedImg);
}

// 버튼 활성화
function isActiveBtn() {
  const profileFormBtn = document.querySelector('.profileFormBtn');
  const username = document.getElementById('username');
  const id = document.getElementById('id');
  const intro = document.getElementById('intro');
  if (username.value !== '' && id.value !== '' && intro.value !== '') {
    profileFormBtn.style.opacity = '1';
    profileFormBtn.disabled = false;
  }
}

// 예외 문자 처리
function checkRegExp() {
  const errorMessage = document.querySelector('.registerFormAlert');
  const profileFormBtn = document.querySelector('.profileFormBtn');
  const id = document.getElementById('id');
  const regExp = /^[a-zA-Z0-9_.]{2,10}$/;
  if (regExp.test(id.value)) {
    errorMessage.classList.add('ir');
    isActiveBtn();
  }
  if (!regExp.test(id.value)) {
    errorMessage.classList.remove('ir');
    profileFormBtn.style.opacity = '0.3';
    id.oninput = () => {
      errorMessage.classList.add('ir');
    };
  }
  if (id.value.length === 0) {
    errorMessage.classList.remove('ir');
    profileFormBtn.style.opacity = '0.3';
  }
}

// 입력 체크
export function checkInput(id) {
  if (id.value.length > 0) {
    checkRegExp();
  }
}

// 회원가입 정보 전송
async function sendRegister() {
  const username = document.getElementById('username');
  const id = document.getElementById('id');
  const intro = document.getElementById('intro');
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
    window.location.hash = '#login';
  } catch (error) {
    console.error(error);
  }
}

// ID 중복 메시지
function checkId(resMessage) {
  const errorMessage = document.querySelector('.registerFormAlert');

  if (resMessage === '이미 가입된 계정ID 입니다.') {
    errorMessage.innerText = `*${resMessage}`;
    errorMessage.classList.remove('ir');
  }
  if (resMessage === '사용 가능한 계정ID 입니다.') {
    sendRegister(resMessage);
  }
}

// 유효 ID 검사
export async function isValidId(id) {
  try {
    const res = await axios.post(`${url}/user/accountnamevalid`, {
      user: {
        accountname: id.value,
      },
    });
    const resMessage = res.data.message;
    checkId(resMessage);
  } catch (error) {
    console.error(error);
  }
}
