import { likeHeart, likeUnHeart } from '../utils/apiModule.js';

// 좋아요 버튼 클릭
export async function clickHeart(event) {
  const likeBtn = event.target;
  const likeCount = event.target.children[1];
  let postId = event.target.closest('section').id;
  postId === '' ? (postId = new URLSearchParams(location.search).get('postid')) : postId;
  let data = {};

  if (likeBtn.classList.contains('on')) {
    likeBtn.classList.remove('on');
    data = await likeUnHeart(postId);
    likeCount.innerHTML = data.post.heartCount;
  } else {
    likeBtn.classList.add('on');
    data = await likeHeart(postId);
    likeCount.innerHTML = data.post.heartCount;
  }
}
