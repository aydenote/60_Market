var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { deletePost, reportPost, deleteComment, reportComment } from '../utils/apiModule';
var body = document.body;
var modal = document.createElement('div');
var modalHeader = "<section class=\"modalBg setUsertModal\">\n  <article class=\"modal appear\">\n    <button class=\"modalClose\">\n      <span class=\"ir\">\uB354\uBCF4\uAE30 \uB2EB\uAE30 \uBC84\uD2BC</span>\n    </button>\n    <button class=\"modalBtn modalBtn2\">\uB85C\uADF8\uC544\uC6C3</button>\n  </article>\n</section>";
var logoutAlert = "<section class=\"modalAlert logoutAlert\">\n  <h4 class=\"ir\">\uB85C\uADF8\uC544\uC6C3 \uCC3D</h4>\n  <strong class=\"alertMsg\">\uB85C\uADF8\uC544\uC6C3\uD558\uC2DC\uACA0\uC5B4\uC694?</strong>\n  <div class=\"alertBtnContent\">\n    <button class=\"cancelBtn\">\uCDE8\uC18C</button>\n    <button class=\"logoutBtn\">\uB85C\uADF8\uC544\uC6C3</button>\n  </div>\n</section>";
var modalProduct = "<section class=\"modalBg productModal\">\n  <article class=\"modal appear\">\n    <button class=\"modalClose\">\n      <span class=\"ir\">\uB354\uBCF4\uAE30 \uB2EB\uAE30 \uBC84\uD2BC</span>\n    </button>\n    <button class=\"modalBtn modalBtn1\">\uC0AD\uC81C</button>\n    <button class=\"modalBtn modalBtn3\">\uC6F9\uC0AC\uC774\uD2B8\uC5D0\uC11C \uC0C1\uD488 \uBCF4\uAE30</button>\n  </article>\n</section>";
var modalDeleteAlert = "<section class=\"modalAlert delAlert\">\n  <h4 class=\"ir\">\uC0AD\uC81C \uCC3D</h4>\n  <strong class=\"alertMsg\">\uC0AD\uC81C\uD558\uC2DC\uACA0\uC5B4\uC694?</strong>\n  <div class=\"alertBtnContent\">\n    <button class=\"cancelBtn\">\uCDE8\uC18C</button>\n    <button class=\"delBtn\">\uC0AD\uC81C</button>\n  </div>\n</section>";
var modalPost = "<section class=\"modalBg postModal\">\n  <article class=\"modal appear\">\n    <button class=\"modalClose\">\n      <span class=\"ir\">\uB354\uBCF4\uAE30 \uB2EB\uAE30 \uBC84\uD2BC</span>\n    </button>\n    <button class=\"modalBtn modalBtn1\">\uC0AD\uC81C</button>\n    <button class=\"modalBtn modalBtn2\">\uC218\uC815</button>\n  </article>\n</section>";
var modalComment = "<section class=\"modalBg postModal\">\n  <article class=\"modal appear\">\n    <button class=\"modalClose\">\n      <span class=\"ir\">\uB354\uBCF4\uAE30 \uB2EB\uAE30 \uBC84\uD2BC</span>\n    </button>\n    <button class=\"modalBtn modalBtn1\">\uC0AD\uC81C</button>\n  </article>\n</section>";
var modalReport = "<section class=\"modalBg reportModal\">\n<article class=\"modal appear\">\n  <button class=\"modalClose\">\n    <span class=\"ir\">\uB354\uBCF4\uAE30 \uB2EB\uAE30 \uBC84\uD2BC</span>\n  </button>\n  <button class=\"modalBtn modalBtn1\">\uC2E0\uACE0\uD558\uAE30</button>\n</article>\n</section>";
var reportAlert = "<section class=\"modalAlert reportAlert\">\n<h4 class=\"ir\">\uC2E0\uACE0 \uCC3D</h4>\n<strong class=\"alertMsg\">\uC2E0\uACE0\uD558\uC2DC\uACA0\uC5B4\uC694?</strong>\n<div class=\"alertBtnContent\">\n  <button class=\"cancelBtn\">\uCDE8\uC18C</button>\n  <button class=\"reportBtn\">\uC2E0\uACE0</button>\n</div>\n</section>";
var modalChat = "<section class=\"modalBg chatModal\">\n<article class=\"modal appear\">\n  <button class=\"modalClose\">\n    <span class=\"ir\">\uCC44\uD305\uBC29 \uB098\uAC00\uAE30 \uBC84\uD2BC</span>\n  </button>\n  <button class=\"modalBtn modalBtn1\">\uCC44\uD305\uBC29 \uB098\uAC00\uAE30</button>\n</article>\n</section>";
// 사용자 모달창
export function logoutModal() {
    body.appendChild(modal);
    modal.innerHTML = modalHeader;
    var modalLogoutBtn = document.querySelector('.setUsertModal .modalBtn2');
    var closeBtn = document.querySelector('.setUsertModal .modalClose');
    // 사용자 모달창 비활성화
    closeBtn.addEventListener('click', function () {
        body.removeChild(modal);
    });
    // 사용자 로그아웃 모달창 활성화
    modalLogoutBtn.addEventListener('click', function () {
        modal.innerHTML = logoutAlert;
        body.appendChild(modal);
        var cancelBtn = document.querySelector('.logoutAlert .cancelBtn');
        var logoutBtn = document.querySelector('.logoutAlert .logoutBtn');
        // 사용자 로그아웃 모달창 비활성화
        cancelBtn.addEventListener('click', function () {
            body.removeChild(modal);
        });
        // 사용자 로그아웃
        logoutBtn.addEventListener('click', function () {
            localStorage.clear();
            body.removeChild(modal);
            window.location.hash = '#login'; // 주소 업데이트
        });
    });
}
// 상품 모달
export function productModal(productId) {
    var myAccountName = localStorage.getItem('accountname');
    var accountName = window.location.hash.split('accountname=')[1];
    accountName = accountName == null ? myAccountName : accountName;
    // 사용자 본인일 경우 상품 삭제
    if (myAccountName === accountName) {
        modal.innerHTML = modalProduct;
        body.appendChild(modal);
        var productModalClose = document.querySelector('.productModal .modalClose');
        var productDeleteModal = document.querySelector('.productModal .modalBtn1');
        var productLink = document.querySelector('.productModal .modalBtn3');
        // 상품 모달 창 닫기
        productModalClose.addEventListener('click', function () {
            body.removeChild(modal);
        });
        // 상품 삭제 모달 활성화
        productDeleteModal.addEventListener('click', function () {
            modal.innerHTML = modalDeleteAlert;
            body.appendChild(modal);
            // 상품 삭제 모달 닫기
            var alertCancel = document.querySelector('.delAlert .cancelBtn');
            alertCancel.addEventListener('click', function () {
                body.removeChild(modal);
            });
            // 상품 삭제
            var productDelete = document.querySelector('.alertBtnContent .delBtn');
            productDelete.addEventListener('click', function () {
                deleteProduct(productId);
            });
        });
        // 판매 상품 연결
        productLink.addEventListener('click', function () {
            window.location.hash = '#error'; // 주소 업데이트
        });
    }
    else {
        // 다른 사용자 상품일 경우 상품 페이지로 연결
        window.location.hash = '#error';
    }
}
// 판매 상품 삭제
function deleteProduct(productId) {
    return __awaiter(this, void 0, void 0, function () {
        var url, token, setting, resProfileProduct, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = 'https://api.mandarin.weniv.co.kr';
                    token = localStorage.getItem('Token');
                    setting = {
                        method: 'DELETE',
                        headers: {
                            Authorization: "Bearer ".concat(token),
                            'Content-type': 'application/json',
                        },
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fetch("".concat(url, "/product/").concat(productId), setting)];
                case 2:
                    resProfileProduct = _a.sent();
                    if (resProfileProduct.status === 200) {
                        location.reload();
                        body.removeChild(modal);
                        productId = '';
                    }
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.error(err_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// 사용자에 따라 게시물 모달 구현
export function clickUserModal(event) {
    var _a, _b;
    event.preventDefault();
    var myAccountName = localStorage.getItem('accountname');
    var accountName = window.location.hash.split('accountname=')[1];
    accountName = accountName == null ? myAccountName : accountName;
    var postUserName = (_b = (_a = event.currentTarget.previousSibling) === null || _a === void 0 ? void 0 : _a.childNodes[1].textContent) === null || _b === void 0 ? void 0 : _b.replace('@', '');
    var postingId = event.currentTarget.parentElement.dataset.key;
    // 사용자 본인 프로필인 경우, 게시물 삭제 모달
    if (postUserName === myAccountName || accountName === null) {
        body.appendChild(modal);
        modal.innerHTML = modalPost;
        var postDelete = document.querySelector('.postModal .modalBtn1');
        var postEditBtn = document.querySelector('.postModal .modalBtn2');
        var modalClose = document.querySelector('.postModal .modalClose');
        // 모달창 닫기 버튼 클릭 시 모달창 닫기
        modalClose.addEventListener('click', function () {
            body.removeChild(modal);
        });
        // 게시물 삭제 모달 활성화
        postDelete.addEventListener('click', function () {
            modal.innerHTML = modalDeleteAlert;
            body.appendChild(modal);
            // 게시물 삭제 모달 닫기
            var alertCancel = document.querySelector('.delAlert .cancelBtn');
            alertCancel.addEventListener('click', function () {
                body.removeChild(modal);
            });
            // 게시물 삭제
            var postDelete = document.querySelector('.delAlert .delBtn');
            postDelete.addEventListener('click', function () {
                body.removeChild(modal);
                deletePost(postingId);
            });
        });
        // 게시물 수정페이지로 이동
        postEditBtn.addEventListener('click', function () {
            window.location.hash = "#postUpload?postid=".concat(postingId);
            body.removeChild(modal);
        });
    }
    else {
        // 다른 사용자 프로필인 경우, 게시물 신고 모달
        body.appendChild(modal);
        modal.innerHTML = modalReport;
        var modalClose = document.querySelector('.reportModal .modalClose');
        var reportModalBtn = document.querySelector('.reportModal .modalBtn1');
        // 모달창 닫기
        modalClose.addEventListener('click', function () {
            body.removeChild(modal);
        });
        // 신고 모달 활성화
        reportModalBtn.addEventListener('click', function () {
            modal.innerHTML = reportAlert;
            body.appendChild(modal);
            // 신고 모달 비활성화
            var cancelBtn = document.querySelector('.reportAlert .cancelBtn');
            cancelBtn.addEventListener('click', function () {
                body.removeChild(modal);
            });
            // 게시물 신고
            var reportBtn = document.querySelector('.reportAlert .reportBtn');
            reportBtn.addEventListener('click', function () {
                reportPost(postingId);
            });
        });
    }
}
export function clickChatModal() {
    body.appendChild(modal);
    modal.innerHTML = modalChat;
    var modalClose = document.querySelector('.modalClose');
    var cancelBtn = document.querySelector('.modalBtn');
    modalClose.addEventListener('click', function () {
        body.removeChild(modal);
    });
    cancelBtn.addEventListener('click', function () {
        body.removeChild(modal);
        window.location.hash = '#chat'; // 주소 업데이트
    });
}
export function clickCommentModal(event) {
    var modal = document.createElement('div');
    event.preventDefault();
    var commentAccountName = event.target.parentElement.closest('article').getAttribute('key');
    var commentId = event.target.parentElement.closest('article').getAttribute('id');
    // 본인 댓글인 경우 삭제 모달 활성화
    if (commentAccountName === localStorage.getItem('accountname')) {
        body.appendChild(modal);
        modal.innerHTML = modalComment;
        var postDelete = document.querySelector('.postModal .modalBtn1');
        var modalClose = document.querySelector('.postModal .modalClose');
        // 모달창 닫기 버튼 클릭 시 모달창 닫기
        modalClose.addEventListener('click', function () {
            body.removeChild(modal);
        });
        // 댓글 삭제 모달 활성화
        postDelete.addEventListener('click', function () {
            modal.innerHTML = modalDeleteAlert;
            body.appendChild(modal);
            // 댓글 삭제 모달 닫기
            var alertCancel = document.querySelector('.delAlert .cancelBtn');
            alertCancel.addEventListener('click', function () {
                body.removeChild(modal);
            });
            // 댓글 삭제
            var postDelete = document.querySelector('.delAlert .delBtn');
            postDelete.addEventListener('click', function () {
                body.removeChild(modal);
                deleteComment(commentId);
            });
        });
    }
    else {
        // 다른 사람의 댓글인 경우 신고 모달 활성화
        body.appendChild(modal);
        modal.innerHTML = modalReport;
        var modalClose = document.querySelector('.reportModal .modalClose');
        var reportModalBtn = document.querySelector('.reportModal .modalBtn1');
        // 모달창 닫기
        modalClose.addEventListener('click', function () {
            body.removeChild(modal);
        });
        // 신고 모달 활성화
        reportModalBtn.addEventListener('click', function () {
            modal.innerHTML = reportAlert;
            body.appendChild(modal);
            // 신고 모달 비활성화
            var cancelBtn = document.querySelector('.reportAlert .cancelBtn');
            cancelBtn.addEventListener('click', function () {
                body.removeChild(modal);
            });
            // 댓글 신고
            var reportBtn = document.querySelector('.reportAlert .reportBtn');
            reportBtn.addEventListener('click', function () {
                body.removeChild(modal);
                reportComment(commentId);
            });
        });
    }
}
// 사용자 로그아웃 모달
// export function logoutModal(headerModal) {
//   headerModal.addEventListener('click', logoutModal());
// }
