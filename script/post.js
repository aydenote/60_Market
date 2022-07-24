// 게시 버튼 활성화
const postChatForm = document.querySelector("#postChatContent");
const postButton = document.querySelector(".postBtn");

postButton.disabled = true;
function postInput() {
  console.log(postChatForm.value);
  if (postChatForm.value !== "") {
    postButton.style.color = "var(--mainColor)";
    postButton.disabled = false;
  } else {
    postButton.style.color = "var(--borderColor)";
    postButton.disabled = true;
  }
}