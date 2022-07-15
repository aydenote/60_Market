// input Name, input introduce 모두 2글자 이상 입력 시 헤더바에 저장 버튼 활성화
const profileSaveButton = document.querySelector(".headerBarBtn.buttonClick");

profileSaveButton.disabled = true;
function profileChangeInput() {
  const inputNameLength = document.querySelector(".profileModificationForm #name").value.length;
  const inputIntroduceLength = document.querySelector(".profileModificationForm #introduce").value.length;
  if (inputNameLength >= 2 && inputIntroduceLength >= 2) {
    profileSaveButton.style.opacity = "1";
    profileSaveButton.disabled = false;
  } else {
    profileSaveButton.style.opacity = "0.3";
    profileSaveButton.disabled = true;
  }
}
