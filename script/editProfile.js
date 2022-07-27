// input Name, input introduce 2글자 이상, input id 5글자 이상 입력 시 헤더바에 저장 버튼 활성화
const profileSaveButton = document.querySelector(".headerBarBtn.buttonClick");
const profileImg = document.querySelector(".updateUserImg");
const inputName = document.querySelector("#name");
const inputId = document.querySelector("#id");
const alertMessage = document.querySelector(".alertMessage");
const inputIntroduce = document.querySelector("#introduce");
const myAccountName = localStorage.getItem("accountname");
const url = "https://mandarin.api.weniv.co.kr";
const token = localStorage.getItem("Token");
let imageUrl;

// 최초 프로필 정보 넣기
async function getProfileInfo() {
  const url = "https://mandarin.api.weniv.co.kr";
  const token = localStorage.getItem("Token");

  const setting = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
  };

  try {
    const resProfile = await fetch(`${url}/profile/${myAccountName}`, setting);
    const resProfileJson = await resProfile.json();
    const userProfile = resProfileJson.profile;
    profileImg.setAttribute("src", `${userProfile.image}`);

    inputName.value = `${userProfile.username}`;
    inputId.value = `${userProfile.accountname}`;
    inputIntroduce.value = `${userProfile.intro}`;
    return userProfile.image;
  } catch (err) {
    console.error(err);
  }
}
getProfileInfo();

profileSaveButton.disabled = true;
function profileChangeInput() {
  alertMessage.classList.add("ir");
  const inputNameLength = inputName.value.length;
  const inputIdLength = inputId.value.length;
  const inputIntroduceLength = inputIntroduce.value.length;

  let check = /^[a-zA-Z0-9_.]{2,10}$/;

  // 유효성 검사
  if (
    inputNameLength >= 2 &&
    inputIntroduceLength >= 2 &&
    inputIdLength >= 2 &&
    check.test(inputId.value)
  ) {
    profileSaveButton.style.opacity = "1";
    profileSaveButton.disabled = false;
  } else {
    profileSaveButton.style.opacity = "0.3";
    profileSaveButton.disabled = true;
  }
}

// 프로필 이미지 교체 및 API서버에 이지 전송하여 변경된 이미지 이름 가져오기
async function imageChange(e) {
  const imgReader = new FileReader();
  const formData = new FormData();

  if (e.target.files[0].size > 10000000) {
    alert("이미지 사이즈는 10MB 이내로 등록 가능합니다.");
    return;
  }

  if (e.target.files && e.target.files[0]) {
    imgReader.onload = function () {
      document.querySelector(".updateUserImg").src = imgReader.result;
    };
    imgReader.readAsDataURL(e.target.files[0]);
  }

  formData.append("image", e.target.files[0]);
  try {
    const response = await fetch(url + "/image/uploadfiles", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    imageUrl = await data[0].filename;
    imageUrl = `${url}/${imageUrl}`;
  } catch (err) {
    console.log(err);
  }
}
// 헤더바에 저장 버튼 클릭 시 서버에 프로필 이미지, 이름, 소개, 계정 ID 전송
profileSaveButton.addEventListener("click", clickSaveButton);
async function clickSaveButton() {
  if (imageUrl === undefined) {
    imageUrl = profileImg.src;
  }
  const userProfileInfo = {
    user: {
      username: inputName.value,
      accountname: inputId.value,
      intro: inputIntroduce.value,
      image: `${imageUrl}`,
    },
  };
  const setting = {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
    body: JSON.stringify(userProfileInfo),
  };
  try {
    const resEditProfile = await fetch(`${url}/user`, setting);
    const resEditProfileJson = await resEditProfile.json();
    // 응답 성공시
    if (resEditProfile.status === 200) {
      localStorage.setItem("accountname", inputId.value);
      location.href = "../pages/profile.html";
    } else {
      alertMessage.classList.remove("ir");
      alertMessage.innerText = `*${resEditProfileJson.message}`;
    }
  } catch (err) {
    console.error(err);
  }
}
