// 뒤로 가기
export function backHistory() {
    return window.history.back();
}
// 게시물 등록 시간 계산 함수
export function timeForToday(time) {
    var KR_TIME_DIFF = 9 * 60 * 60 * 1000;
    var postingDate = time.substring(0, time.length - 1);
    var ms = Date.parse(postingDate) + KR_TIME_DIFF;
    var now = Date.now();
    var gap = (now - ms) / 1000;
    if (gap < 60)
        return '방금전';
    else if (gap < 3600)
        return "".concat(Math.floor(gap / 60), " \uBD84 \uC804");
    else if (gap < 86400)
        return "".concat(Math.floor(gap / 3600), "\uC2DC\uAC04 \uC804");
    else if (gap < 2592000)
        return "".concat(Math.floor(gap / 86400), "\uC77C \uC804");
    else
        return "".concat(Math.floor(gap / 2592000), "\uB2EC \uC804");
}
// 검색 API 호출 최적화
export function debounce(func, timeout) {
    if (timeout === void 0) { timeout = 500; }
    var timer;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timer);
        timer = setTimeout(function () {
            func.apply(void 0, args);
        }, timeout);
    };
}
