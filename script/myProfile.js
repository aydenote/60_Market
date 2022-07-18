// 프로필 정보 가져오기
async function getProfileInfo() {
  const url = "https://mandarin.api.weniv.co.kr";
  const accountName = localStorage.getItem("accountname");
  const token = localStorage.getItem("Token");

  const setting = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
  };

  try {
    const resEditProfile = await fetch(`${url}/profile/${accountName}`, setting);
    const resEditProfileJson = await resEditProfile.json();
    const editUserProfile = resEditProfileJson.profile;
    setProfileInfo(editUserProfile);
  } catch (err) {
    console.error(err);
  }
}
getProfileInfo();

// 프로필 정보 입력하기
function setProfileInfo(editUserProfile) {
  document.querySelector(".ProfileContent .myImage").src = editUserProfile.image;
  document.querySelector(".profileInfo .userName").innerText = editUserProfile.username;
  document.querySelector(".profileInfo .userId").innerText = `@ ${editUserProfile.accountname}`;
  document.querySelector(".profileInfo .introduction").innerText = editUserProfile.intro;
}


