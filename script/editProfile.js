import App from "./app.js";
const config = {
  rootEl: "#root",
};
// 뒤로 가기
// backHistory.addEventListener("click", () => {
//   window.location = document.referrer;
// });

// 최초 프로필 정보 넣기
class EditProfile {
  constructor(
    inputName,
    inputId,
    profileImg,
    inputIntroduce,
    alertMessage,
    profileSaveButton
  ) {
    this.inputName = inputName;
    this.inputId = inputId;
    this.profileImg = profileImg;
    this.inputIntroduce = inputIntroduce;
    this.alertMessage = alertMessage;
    this.profileSaveButton = profileSaveButton;
    this.imageUrl;
  }
  getProfileInfo = async function () {
    const url = "https://mandarin.api.weniv.co.kr";
    const token = localStorage.getItem("Token");
    const myAccountName = localStorage.getItem("accountname");

    const setting = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    };

    try {
      const resProfile = await fetch(
        `${url}/profile/${myAccountName}`,
        setting
      );
      const resProfileJson = await resProfile.json();
      const userProfile = resProfileJson.profile;
      this.profileImg.setAttribute("src", `${userProfile.image}`);

      this.inputName.value = `${userProfile.username}`;
      this.inputId.value = `${userProfile.accountname}`;
      this.inputIntroduce.value = `${userProfile.intro}`;
      return userProfile.image;
    } catch (err) {
      console.error(err);
    }
  };

  profileChangeInput = () => {
    const inputNameLength = this.inputName.value.length;
    const inputIdLength = this.inputId.value.length;
    const inputIntroduceLength = this.inputIntroduce.value.length;
    const check = /^[a-zA-Z0-9_.]{1,10}$/;
    this.alertMessage.innerText =
      "*영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.";

    // 만약 예외 문자가 없으면 ir 클래스 추가
    if (check.test(this.inputId.value)) {
      this.alertMessage.classList.add("ir");
      if (
        inputNameLength >= 2 &&
        inputIntroduceLength >= 2 &&
        inputIdLength >= 2
      ) {
        this.profileSaveButton.style.opacity = "1";
        this.profileSaveButton.disabled = false;
      } else {
        this.profileSaveButton.style.opacity = "0.3";
        this.profileSaveButton.disabled = true;
      }
    }

    // 만약 예외 문자가 있으면 ir 클래스 제거
    if (!check.test(this.inputId.value)) {
      this.alertMessage.classList.remove("ir");
      this.profileSaveButton.style.opacity = "0.3";
      this.profileSaveButton.disabled = true;
    }

    if (this.inputId.value === "") {
      this.alertMessage.classList.add("ir");
    }
  };

  // 프로필 이미지 교체 및 API서버에 이미지 전송하여 변경된 이미지 이름 가져오기
  imageChange = async function (e) {
    const imgReader = new FileReader();
    const formData = new FormData();
    const url = "https://mandarin.api.weniv.co.kr";

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
      this.imageUrl = await data[0].filename;
      this.imageUrl = `${url}/${this.imageUrl}`;
    } catch (err) {
      console.log(err);
    }
  };

  // 저장 버튼 클릭 시 서버에 프로필 이미지, 이름, 소개, 계정 ID 전송
  clickSaveButton = async function () {
    const token = localStorage.getItem("Token");
    const url = "https://mandarin.api.weniv.co.kr";

    if (this.imageUrl === undefined) {
      this.imageUrl = this.profileImg.src;
    }
    const userProfileInfo = {
      user: {
        username: this.inputName.value,
        accountname: this.inputId.value,
        intro: this.inputIntroduce.value,
        image: `${this.imageUrl}`,
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
        localStorage.setItem("accountname", this.inputId.value);
        window.history.pushState({}, "", "/profile"); // 주소 업데이트
        new App(config).setup();
      } else {
        this.alertMessage.classList.remove("ir");
        this.alertMessage.innerText = `*${resEditProfileJson.message}`;
      }
    } catch (err) {
      console.error(err);
    }
  };
}

export default EditProfile;
