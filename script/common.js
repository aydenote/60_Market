// 공통으로 사용되는 코드
const token = localStorage.getItem("Token");
const accountname = localStorage.getItem("accountname");

// 토크 없을 경우
if (!token) {
  window.location.href = "index.html";
}
