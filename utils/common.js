// 뒤로 가기
export function backHistory() {
  window.history.back();
}

// 게시물 등록 시간 계산 함수
export function timeForToday(time) {
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
  const postingDate = time.substring(0, time.length - 1);
  const ms = Date.parse(postingDate) + KR_TIME_DIFF;
  const now = Date.now();
  const gap = (now - ms) / 1000;
  if (gap < 60) return '방금전';
  else if (gap < 3600) return `${parseInt(gap / 60)}분 전`;
  else if (gap < 86400) return `${parseInt(gap / 3600)}시간 전`;
  else if (gap < 2592000) return `${parseInt(gap / 86400)}일 전`;
  else return `${parseInt(gap / 2592000)}달 전`;
}

// API 호출 최적화
export function debounce(callback, delay = 500) {
  let timer = null;
  return function (...args) {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => callback.apply(this, args), delay);
  };
}
