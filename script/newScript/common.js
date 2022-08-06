import { likeHeart, likeUnHeart } from "./apiModule.js";

// 뒤로 가기
export function backHistory() {
  window.location = document.referrer;
}

// 좋아요 버튼 클릭
export async function clickHeart(e) {
  const likeBtn = e.target;
  const likeCount = e.target.children[1];
  let postId = e.target.closest("section").id;
  postId === ""
    ? (postId = new URLSearchParams(location.search).get("postid"))
    : postId;
  let data = {};

  if (likeBtn.classList.contains("on")) {
    likeBtn.classList.remove("on");
    data = await likeUnHeart(postId);
    likeCount.innerHTML = data.post.heartCount;
  } else {
    likeBtn.classList.add("on");
    data = await likeHeart(postId);
    likeCount.innerHTML = data.post.heartCount;
  }
}

// 게시물 등록 시간 계산 함수
export function timeForToday(time) {
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
  const postingDate = time.substring(0, time.length - 1);
  const ms = Date.parse(postingDate) + KR_TIME_DIFF;
  const now = Date.now();
  const gap = (now - ms) / 1000;
  if (gap < 60) return "방금전";
  else if (gap < 3600) return `${parseInt(gap / 60)}분 전`;
  else if (gap < 86400) return `${parseInt(gap / 3600)}시간 전`;
  else if (gap < 2592000) return `${parseInt(gap / 86400)}일 전`;
  else return `${parseInt(gap / 2592000)}달 전`;
}
