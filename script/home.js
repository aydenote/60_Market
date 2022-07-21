//로그인 구현시 삭제
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjNmOGUxNTM2MWFhZWE1NjlhYWUzOCIsImV4cCI6MTY2MTE0NTgyNywiaWF0IjoxNjU1OTYxODI3fQ.F7JLkiPLzbW3GcLUK_b_-h4_7zkZdLQgTZB-OddOhLY";

let state = "list";
const curUrl = location.href;

const albumBtn = document.querySelector(".postingType.album");
const listBtn = document.querySelector(".postingType.list");
const albumContent = document.querySelector(".postContent");
const listContent = document.querySelector(".post");

listBtn.addEventListener("click", changeListType);
albumBtn.addEventListener("click", changeAlbumType);

// 프로필페이지 게시물 리스트형으로 변경, 버튼 활성화
function changeListType() {
  state = "list";
  albumContent.classList.add("hidden");
  listContent.classList.remove("hidden");
  albumBtn.classList.add("unselected");
  listBtn.classList.remove("unselected");
}

// 프로필페이지 게시물 앨범형으로 변경, 버튼 활성화
function changeAlbumType() {
  state = "album";
  albumContent.classList.remove("hidden");
  listContent.classList.add("hidden");
  albumBtn.classList.remove("unselected");
  listBtn.classList.add("unselected");
}

// 나의 프로필 페이지 일 때 데이터 뿌려주기
async function myProfileFeed(state) {
  const url = `https://mandarin.api.weniv.co.kr/post/${postAccountName}/userpost/?limit=9&skip=3`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  const posts = data.posts;
  getFeed(posts, state);
}
