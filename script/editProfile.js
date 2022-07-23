// input Name, input introduce 2글자 이상, input id 5글자 이상 입력 시 헤더바에 저장 버튼 활성화
const profileSaveButton = document.querySelector(".headerBarBtn.buttonClick");
const inputName = document.querySelector(".profileModificationForm #name");
const inputId = document.querySelector(".profileModificationForm #id");
const inputIntroduce = document.querySelector(".profileModificationForm #introduce");
const url = "https://mandarin.api.weniv.co.kr";
const token = localStorage.getItem("Token");
let imageUrl;

profileSaveButton.disabled = true;
function profileChangeInput() {
  const inputNameLength = document.querySelector(".profileModificationForm #name").value.length;
  const inputIntroduceLength = document.querySelector(".profileModificationForm #introduce").value.length;
  const inputId = document.querySelector(".profileModificationForm #id");
  const inputIdLength = document.querySelector(".profileModificationForm #id").value.length;
  let check = /^[a-zA-Z0-9_.]{2,10}$/;

  if (inputNameLength >= 2 && inputIntroduceLength >= 2 && inputIdLength >= 2 && check.test(inputId.value)) {
    profileSaveButton.style.opacity = "1";
    profileSaveButton.disabled = false;
  } else {
    profileSaveButton.style.opacity = "0.3";
    profileSaveButton.disabled = true;
  }
}

// 프로필 이미지 교체 및 API서버에 이미지 전송하여 변경된 이미지 이름 가져오기
async function imageChange(e) {
  const imgReader = new FileReader();
  const formData = new FormData();

  if (e.target.files && e.target.files[0]) {
    document.querySelector(".updateUserImg").classList.add("addImg");
    imgReader.onload = function () {
      document.querySelector(".updateUserImg.addImg").src = imgReader.result;
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
  } catch (err) {
    console.log(err);
  }
}

// 헤더바에 저장 버튼 클릭 시 서버에 프로필 이미지, 이름, 소개, 계정 ID 전송
profileSaveButton.addEventListener("click", clickSaveButton);
async function clickSaveButton() {
  if (imageUrl === undefined) {
    imageUrl = "1658109040211.png";
  }
  const userProfileInfo = {
    user: {
      username: inputName.value,
      accountname: inputId.value,
      intro: inputIntroduce.value,
      image: `${url}/${imageUrl}`,
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
    // 응답 성공시
    if (resEditProfile.status === 200) {
      localStorage.setItem("accountname", inputId.value);
      location.href = "./profile.html";
    }
  } catch (err) {
    console.error(err);
  }
}
