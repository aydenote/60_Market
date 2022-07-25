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

// 모달창 구현
const API_ROOT = 'https://mandarin.api.weniv.co.kr';
const POST_ID = new URLSearchParams(location.search).get('postid'); 

async function renderPost() {
  const token = localStorage.getItem('Token');
  try {
    const res = await fetch(`${API_ROOT}/post/${POST_ID}`, {
      method: 'GET',
      headers: {
        'Authorization' : `Bearer ${token}`,
	      'Content-type' : 'application/json',
      }
    });