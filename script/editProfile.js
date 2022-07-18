// input Name, input introduce 2글자 이상, input id 5글자 이상 입력 시 헤더바에 저장 버튼 활성화
const profileSaveButton = document.querySelector(".headerBarBtn.buttonClick");
const inputName = document.querySelector(".profileModificationForm #name");
const inputId = document.querySelector(".profileModificationForm #id");
const inputIntroduce = document.querySelector(".profileModificationForm #introduce");

profileSaveButton.disabled = true;
function profileChangeInput() {
  const inputNameLength = document.querySelector(".profileModificationForm #name").value.length;
  const inputIntroduceLength = document.querySelector(".profileModificationForm #introduce").value.length;
  const inputIdLength = document.querySelector(".profileModificationForm #id").value.length;

  if (inputNameLength >= 2 && inputIntroduceLength >= 2 && inputIdLength >= 5) {
    profileSaveButton.style.opacity = "1";
    profileSaveButton.disabled = false;
  } else {
    profileSaveButton.style.opacity = "0.3";
    profileSaveButton.disabled = true;
  }
}
