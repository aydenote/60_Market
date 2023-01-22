import { imageUpload, updateProfile } from '../utils/apiModule.js';

export async function getProfileInfo(profileImg, inputName, inputId, inputIntroduce) {
  const url = 'https://mandarin.api.weniv.co.kr';
  const token = localStorage.getItem('Token');
  const myAccountName = localStorage.getItem('accountname');

  const setting = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json',
    },
  };

  try {
    const resProfile = await fetch(`${url}/profile/${myAccountName}`, setting);
    const resProfileJson = await resProfile.json();
    const userProfile = await resProfileJson.profile;
    profileImg.setAttribute('src', `${url}/${userProfile.image}`);

    inputName.value = `${userProfile.username}`;
    inputId.value = `${userProfile.accountname}`;
    inputIntroduce.value = `${userProfile.intro}`;
    return userProfile.image;
  } catch (err) {
    console.error(err);
  }
}

export function profileChangeInput(profileSaveButton) {
  const inputNameLength = document.getElementById('name').value.length;
  const inputId = document.getElementById('id');
  const inputIdLength = inputId.value.length;
  const inputIntroduceLength = document.getElementById('introduce').value.length;
  const check = /^[a-zA-Z0-9_.]{1,10}$/;
  const alertMessage = document.querySelector('.alertMessage');
  alertMessage.innerText = '*영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.';

  // 만약 예외 문자가 없으면 ir 클래스 추가
  if (check.test(inputId.value)) {
    alertMessage.classList.add('ir');
    if (inputNameLength >= 2 && inputIntroduceLength >= 2 && inputIdLength >= 2) {
      profileSaveButton.style.opacity = '1';
      profileSaveButton.disabled = false;
    } else {
      profileSaveButton.style.opacity = '0.3';
      profileSaveButton.disabled = true;
    }
  }

  // 만약 예외 문자가 있으면 ir 클래스 제거
  if (!check.test(inputId.value)) {
    alertMessage.classList.remove('ir');
    profileSaveButton.style.opacity = '0.3';
    profileSaveButton.disabled = true;
  }

  if (inputId.value === '') {
    alertMessage.classList.add('ir');
  }
}

// 프로필 이미지 교체 및 API서버에 이미지 전송하여 변경된 이미지 이름 가져오기
export function imageChange(event) {
  const imgReader = new FileReader();
  const formData = new FormData();

  if (event.target.files[0].size > 10000000) {
    alert('이미지 사이즈는 10MB 이내로 등록 가능합니다.');
    return;
  }

  if (event.target.files && event.target.files[0]) {
    imgReader.onload = function () {
      document.querySelector('.updateUserImg').src = imgReader.result;
    };
    imgReader.readAsDataURL(e.target.files[0]);
  }

  formData.append('image', e.target.files[0]);
  imageUpload(formData);
}

// 저장 버튼 클릭 시 서버에 프로필 이미지, 이름, 소개, 계정 ID 전송
export function clickSaveButton(profileImg) {
  const imageUrl = localStorage.getItem('imageUrl');

  if (imageUrl === undefined) {
    imageUrl = profileImg.src;
  }

  updateProfile();
}
