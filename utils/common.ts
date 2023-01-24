// 뒤로 가기
export function backHistory(): void {
  return window.history.back();
}

// 게시물 등록 시간 계산 함수
export function timeForToday(time: string): string {
  const KR_TIME_DIFF: number = 9 * 60 * 60 * 1000;
  const postingDate: string = time.substring(0, time.length - 1);
  const ms: number = Date.parse(postingDate) + KR_TIME_DIFF;
  const now: number = Date.now();
  const gap: number = (now - ms) / 1000;
  if (gap < 60) return '방금전';
  else if (gap < 3600) return `${Math.floor(gap / 60)} 분 전`;
  else if (gap < 86400) return `${Math.floor(gap / 3600)}시간 전`;
  else if (gap < 2592000) return `${Math.floor(gap / 86400)}일 전`;
  else return `${Math.floor(gap / 2592000)}달 전`;
}

// 검색 API 호출 최적화
export function debounce<Params extends any[]>(
  func: (...args: Params) => any,
  timeout: number = 500
): (...args: Params) => void {
  let timer: NodeJS.Timeout;
  return (...args: Params) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}
