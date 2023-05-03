const url = 'https://api.mandarin.weniv.co.kr';
let profileImg: string;

// 서버에 프로필 이미지 보내기
async function sendProfileImg(file: FileList) {
  const formData = new FormData();
  formData.append('image', file[0]);

  const setting = {
    method: 'POST',
    body: formData,
  };

  try {
    const imageUploadRes = await fetch(`${url}/image/uploadfiles`, setting);
    const imageUploadJson = await imageUploadRes.json();
    profileImg = imageUploadJson[0].filename;
  } catch (err) {
    console.error(err);
  }
}

// 프로필 이미지 미리보기
export function previewImg(event: Event, basicImg: HTMLImageElement) {
  const file = (<HTMLInputElement>event.target).files;

  if (file![0].size > 10000000) {
    alert('이미지 사이즈는 10MB 이내로 등록 가능합니다.');
    return false;
  }
  basicImg.src = URL.createObjectURL(file![0]);
  sendProfileImg(file!);
}

// 버튼 활성화
function isActiveBtn() {
  const profileFormBtn = document.querySelector('.profileFormBtn') as HTMLButtonElement;
  const username = document.getElementById('username') as HTMLInputElement;
  const id = document.getElementById('id') as HTMLInputElement;
  const intro = document.getElementById('intro') as HTMLInputElement;
  if (username.value !== '' && id.value !== '' && intro.value !== '') {
    profileFormBtn.style.opacity = '1';
    profileFormBtn.disabled = false;
  }
}

// 예외 문자 처리
function checkRegExp() {
  const errorMessage = document.querySelector('.registerFormAlert') as HTMLElement;
  const profileFormBtn = document.querySelector('.profileFormBtn') as HTMLButtonElement;
  const id = document.getElementById('id') as HTMLInputElement;
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
export function checkInput(id: HTMLInputElement) {
  if (id.value.length > 0) {
    checkRegExp();
  }
}

// 회원가입 정보 전송
async function sendRegister() {
  const userName = document.getElementById('username') as HTMLInputElement;
  const id = document.getElementById('id') as HTMLInputElement;
  const intro = document.getElementById('intro') as HTMLInputElement;
  if (profileImg === undefined) {
    profileImg = '1658636863237.png';
  }

  const setting = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      user: {
        username: userName.value,
        email: localStorage.getItem('email'),
        password: localStorage.getItem('password'),
        accountname: id.value,
        intro: intro.value,
        image: `${url}/${profileImg}`,
      },
    }),
  };

  try {
    const signUpRes = await fetch(`${url}/user`, setting);
    const signUpJson = await signUpRes.json();
    if (signUpJson.status === 200) window.location.hash = '#login';
    else console.error(signUpJson.statusText);
  } catch (error) {
    console.error(error);
  }
}

// ID 중복 메시지
function checkId(resMessage: string) {
  const errorMessage = document.querySelector('.registerFormAlert') as HTMLElement;

  if (resMessage === '이미 가입된 계정ID 입니다.') {
    errorMessage.innerText = `*${resMessage}`;
    errorMessage.classList.remove('ir');
  }
  if (resMessage === '사용 가능한 계정ID 입니다.') {
    sendRegister();
  }
}

// 유효 ID 검사
export async function isValidId(id: HTMLInputElement) {
  const setting = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      user: {
        accountname: id.value,
      },
    }),
  };

  try {
    const validIdRes = await fetch(`${url}/user/accountnamevalid`, setting);
    const validIdJson = await validIdRes.json();
    const resMessage = validIdJson.message;
    checkId(resMessage);
  } catch (error) {
    console.error(error);
  }
}
