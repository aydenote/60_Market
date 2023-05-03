import { deletePost, reportPost, deleteComment, reportComment } from '../utils/apiModule';
const body = document.body;
const modal = document.createElement('div');

const modalHeader = `<section class="modalBg setUsertModal">
  <article class="modal appear">
    <button class="modalClose">
      <span class="ir">더보기 닫기 버튼</span>
    </button>
    <button class="modalBtn modalBtn2">로그아웃</button>
  </article>
</section>`;

const logoutAlert = `<section class="modalAlert logoutAlert">
  <h4 class="ir">로그아웃 창</h4>
  <strong class="alertMsg">로그아웃하시겠어요?</strong>
  <div class="alertBtnContent">
    <button class="cancelBtn">취소</button>
    <button class="logoutBtn">로그아웃</button>
  </div>
</section>`;

const modalProduct = `<section class="modalBg productModal">
  <article class="modal appear">
    <button class="modalClose">
      <span class="ir">더보기 닫기 버튼</span>
    </button>
    <button class="modalBtn modalBtn1">삭제</button>
    <button class="modalBtn modalBtn3">웹사이트에서 상품 보기</button>
  </article>
</section>`;

const modalDeleteAlert = `<section class="modalAlert delAlert">
  <h4 class="ir">삭제 창</h4>
  <strong class="alertMsg">삭제하시겠어요?</strong>
  <div class="alertBtnContent">
    <button class="cancelBtn">취소</button>
    <button class="delBtn">삭제</button>
  </div>
</section>`;

const modalPost = `<section class="modalBg postModal">
  <article class="modal appear">
    <button class="modalClose">
      <span class="ir">더보기 닫기 버튼</span>
    </button>
    <button class="modalBtn modalBtn1">삭제</button>
    <button class="modalBtn modalBtn2">수정</button>
  </article>
</section>`;

const modalComment = `<section class="modalBg postModal">
  <article class="modal appear">
    <button class="modalClose">
      <span class="ir">더보기 닫기 버튼</span>
    </button>
    <button class="modalBtn modalBtn1">삭제</button>
  </article>
</section>`;

const modalReport = `<section class="modalBg reportModal">
<article class="modal appear">
  <button class="modalClose">
    <span class="ir">더보기 닫기 버튼</span>
  </button>
  <button class="modalBtn modalBtn1">신고하기</button>
</article>
</section>`;

const reportAlert = `<section class="modalAlert reportAlert">
<h4 class="ir">신고 창</h4>
<strong class="alertMsg">신고하시겠어요?</strong>
<div class="alertBtnContent">
  <button class="cancelBtn">취소</button>
  <button class="reportBtn">신고</button>
</div>
</section>`;

const modalChat = `<section class="modalBg chatModal">
<article class="modal appear">
  <button class="modalClose">
    <span class="ir">채팅방 나가기 버튼</span>
  </button>
  <button class="modalBtn modalBtn1">채팅방 나가기</button>
</article>
</section>`;

// 사용자 모달창
export function logoutModal() {
  body.appendChild(modal);
  modal.innerHTML = modalHeader;

  const modalLogoutBtn = document.querySelector('.setUsertModal .modalBtn2') as HTMLButtonElement;
  const closeBtn = document.querySelector('.setUsertModal .modalClose') as HTMLButtonElement;

  // 사용자 모달창 비활성화
  closeBtn.addEventListener('click', () => {
    body.removeChild(modal);
  });

  // 사용자 로그아웃 모달창 활성화
  modalLogoutBtn.addEventListener('click', () => {
    modal.innerHTML = logoutAlert;
    body.appendChild(modal);

    const cancelBtn = document.querySelector('.logoutAlert .cancelBtn') as HTMLButtonElement;
    const logoutBtn = document.querySelector('.logoutAlert .logoutBtn') as HTMLButtonElement;

    // 사용자 로그아웃 모달창 비활성화
    cancelBtn.addEventListener('click', () => {
      body.removeChild(modal);
    });

    // 사용자 로그아웃
    logoutBtn.addEventListener('click', () => {
      localStorage.clear();
      body.removeChild(modal);
      window.location.hash = '#login'; // 주소 업데이트
    });
  });
}

// 상품 모달
export function productModal(productId: string) {
  const myAccountName = localStorage.getItem('accountname');
  let accountName: string | null = window.location.hash.split('accountname=')[1];
  accountName = accountName == null ? myAccountName : accountName;

  // 사용자 본인일 경우 상품 삭제
  if (myAccountName === accountName) {
    modal.innerHTML = modalProduct;
    body.appendChild(modal);

    const productModalClose = document.querySelector('.productModal .modalClose') as HTMLButtonElement;
    const productDeleteModal = document.querySelector('.productModal .modalBtn1') as HTMLButtonElement;
    const productLink = document.querySelector('.productModal .modalBtn3') as HTMLButtonElement;

    // 상품 모달 창 닫기
    productModalClose.addEventListener('click', () => {
      body.removeChild(modal);
    });

    // 상품 삭제 모달 활성화
    productDeleteModal.addEventListener('click', () => {
      modal.innerHTML = modalDeleteAlert;
      body.appendChild(modal);

      // 상품 삭제 모달 닫기
      const alertCancel = document.querySelector('.delAlert .cancelBtn') as HTMLButtonElement;
      alertCancel.addEventListener('click', () => {
        body.removeChild(modal);
      });

      // 상품 삭제
      const productDelete = document.querySelector('.alertBtnContent .delBtn') as HTMLButtonElement;
      productDelete.addEventListener('click', () => {
        deleteProduct(productId);
      });
    });

    // 판매 상품 연결
    productLink.addEventListener('click', () => {
      window.location.hash = '#error'; // 주소 업데이트
    });
  } else {
    // 다른 사용자 상품일 경우 상품 페이지로 연결
    window.location.hash = '#error';
  }
}

// 판매 상품 삭제
async function deleteProduct(productId: string) {
  const url = 'https://api.mandarin.weniv.co.kr';
  const token = localStorage.getItem('Token');

  const setting = {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json',
    },
  };

  try {
    const resProfileProduct = await fetch(`${url}/product/${productId}`, setting);
    if (resProfileProduct.status === 200) {
      location.reload();
      body.removeChild(modal);
      productId = '';
    }
  } catch (err) {
    console.error(err);
  }
}

// 사용자에 따라 게시물 모달 구현
export function clickUserModal(event: MouseEvent) {
  event.preventDefault();
  const myAccountName = localStorage.getItem('accountname');
  let accountName: string | null = window.location.hash.split('accountname=')[1];
  accountName = accountName == null ? myAccountName : accountName;
  const postUserName = (event.currentTarget as HTMLElement)!.previousSibling?.childNodes[1].textContent?.replace(
    '@',
    ''
  );
  const postingId = (event.currentTarget as HTMLElement)!.parentElement!.dataset.key!;

  // 사용자 본인 프로필인 경우, 게시물 삭제 모달
  if (postUserName === myAccountName || accountName === null) {
    body.appendChild(modal);
    modal.innerHTML = modalPost;

    const postDelete = document.querySelector('.postModal .modalBtn1') as HTMLButtonElement;
    const postEditBtn = document.querySelector('.postModal .modalBtn2') as HTMLButtonElement;
    const modalClose = document.querySelector('.postModal .modalClose') as HTMLButtonElement;

    // 모달창 닫기 버튼 클릭 시 모달창 닫기
    modalClose.addEventListener('click', () => {
      body.removeChild(modal);
    });

    // 게시물 삭제 모달 활성화
    postDelete.addEventListener('click', () => {
      modal.innerHTML = modalDeleteAlert;
      body.appendChild(modal);

      // 게시물 삭제 모달 닫기
      const alertCancel = document.querySelector('.delAlert .cancelBtn') as HTMLButtonElement;
      alertCancel.addEventListener('click', () => {
        body.removeChild(modal);
      });

      // 게시물 삭제
      const postDelete = document.querySelector('.delAlert .delBtn') as HTMLButtonElement;
      postDelete.addEventListener('click', () => {
        body.removeChild(modal);
        deletePost(postingId!);
      });
    });

    // 게시물 수정페이지로 이동
    postEditBtn.addEventListener('click', () => {
      window.location.hash = `#postUpload\?postid=${postingId}`;
      body.removeChild(modal);
    });
  } else {
    // 다른 사용자 프로필인 경우, 게시물 신고 모달
    body.appendChild(modal);
    modal.innerHTML = modalReport;

    const modalClose = document.querySelector('.reportModal .modalClose') as HTMLButtonElement;
    const reportModalBtn = document.querySelector('.reportModal .modalBtn1') as HTMLButtonElement;

    // 모달창 닫기
    modalClose.addEventListener('click', () => {
      body.removeChild(modal);
    });

    // 신고 모달 활성화
    reportModalBtn.addEventListener('click', () => {
      modal.innerHTML = reportAlert;
      body.appendChild(modal);

      // 신고 모달 비활성화
      const cancelBtn = document.querySelector('.reportAlert .cancelBtn') as HTMLButtonElement;
      cancelBtn.addEventListener('click', () => {
        body.removeChild(modal);
      });

      // 게시물 신고
      const reportBtn = document.querySelector('.reportAlert .reportBtn') as HTMLButtonElement;
      reportBtn.addEventListener('click', () => {
        reportPost(postingId);
      });
    });
  }
}

export function clickChatModal() {
  body.appendChild(modal);
  modal.innerHTML = modalChat;

  const modalClose = document.querySelector('.modalClose') as HTMLButtonElement;
  const cancelBtn = document.querySelector('.modalBtn') as HTMLButtonElement;

  modalClose.addEventListener('click', () => {
    body.removeChild(modal);
  });
  cancelBtn.addEventListener('click', () => {
    body.removeChild(modal);
    window.location.hash = '#chat'; // 주소 업데이트
  });
}

export function clickCommentModal(event: MouseEvent) {
  const modal = document.createElement('div');

  event.preventDefault();
  const commentAccountName = (event.target as HTMLElement)!.parentElement!.closest('article')!.getAttribute('key')!;
  const commentId = (event.target as HTMLElement)!.parentElement!.closest('article')!.getAttribute('id')!;

  // 본인 댓글인 경우 삭제 모달 활성화
  if (commentAccountName === localStorage.getItem('accountname')) {
    body.appendChild(modal);
    modal.innerHTML = modalComment;

    const postDelete = document.querySelector('.postModal .modalBtn1') as HTMLButtonElement;
    const modalClose = document.querySelector('.postModal .modalClose') as HTMLButtonElement;

    // 모달창 닫기 버튼 클릭 시 모달창 닫기
    modalClose.addEventListener('click', () => {
      body.removeChild(modal);
    });

    // 댓글 삭제 모달 활성화
    postDelete.addEventListener('click', () => {
      modal.innerHTML = modalDeleteAlert;
      body.appendChild(modal);

      // 댓글 삭제 모달 닫기
      const alertCancel = document.querySelector('.delAlert .cancelBtn') as HTMLButtonElement;
      alertCancel.addEventListener('click', () => {
        body.removeChild(modal);
      });

      // 댓글 삭제
      const postDelete = document.querySelector('.delAlert .delBtn') as HTMLButtonElement;
      postDelete.addEventListener('click', () => {
        body.removeChild(modal);
        deleteComment(commentId);
      });
    });
  } else {
    // 다른 사람의 댓글인 경우 신고 모달 활성화
    body.appendChild(modal);
    modal.innerHTML = modalReport;

    const modalClose = document.querySelector('.reportModal .modalClose') as HTMLButtonElement;
    const reportModalBtn = document.querySelector('.reportModal .modalBtn1') as HTMLButtonElement;

    // 모달창 닫기
    modalClose.addEventListener('click', () => {
      body.removeChild(modal);
    });

    // 신고 모달 활성화
    reportModalBtn.addEventListener('click', () => {
      modal.innerHTML = reportAlert;
      body.appendChild(modal);

      // 신고 모달 비활성화
      const cancelBtn = document.querySelector('.reportAlert .cancelBtn') as HTMLButtonElement;
      cancelBtn.addEventListener('click', () => {
        body.removeChild(modal);
      });

      // 댓글 신고
      const reportBtn = document.querySelector('.reportAlert .reportBtn') as HTMLButtonElement;
      reportBtn.addEventListener('click', () => {
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
