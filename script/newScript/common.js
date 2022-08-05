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
