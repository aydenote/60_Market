// 공통으로 사용되는 코드
const token = localStorage.getItem("Token");
const accountname = localStorage.getItem("accountname");

// 토크 없을 경우
if (!token) {
  window.location.href = "index.html";
}

// 뒤로가기
const backBtn1 = document.querySelector(".headerBarBack");
const backBtn2 = document.querySelector(".backBtn");

function backHistory() {
  window.history.back();
}
backBtn1.addEventListener("click", backHistory);
backBtn2.addEventListener("click", backHistory);
