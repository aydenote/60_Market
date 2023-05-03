import { likeHeart, likeUnHeart } from '../utils/apiModule';

// 좋아요 버튼 클릭
export async function clickHeart(event: MouseEvent) {
  const likeBtn = event.target as HTMLElement;
  const likeCount = likeBtn.children[1];
  let postId = likeBtn.closest('section')!.id;
  postId ? postId : (postId = new URLSearchParams(location.search).get('postid')!);

  if (likeBtn.classList.contains('on')) {
    likeBtn.classList.remove('on');
    const data = await likeUnHeart(postId);
    likeCount.innerHTML = await data.post.heartCount;
  } else {
    likeBtn.classList.add('on');
    const data = await likeHeart(postId);
    likeCount.innerHTML = data.post.heartCount;
  }
}
