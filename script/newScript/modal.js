// 로그아웃 모달
export function logoutModal() {
  const userLogout = document.querySelector(".setUsertModal .modalBtn2");
  const headerBarModal = document.querySelector(".modalBg.setUsertModal");
  const modalClose = document.querySelector(".setUsertModal .modalClose");

  // 사용자 로그아웃 모달창 활성화, 비활성화
  headerBarModal.classList.remove("hidden");
  modalClose.addEventListener("click", () => {
    headerBarModal.classList.add("hidden");
  });

  // 사용자 로그아웃 확인 모달창 활성화, 비활성화
  userLogout.addEventListener("click", () => {
    const logoutCheckModal = document.querySelector(".modalAlert.logoutAlert");
    const cancelBtn = document.querySelector(".logoutAlert .cancelBtn");
    const logoutBtn = document.querySelector(".logoutAlert .logoutBtn");

    logoutCheckModal.classList.remove("hidden");
    cancelBtn.addEventListener("click", () => {
      logoutCheckModal.classList.add("hidden");
    });

    // 사용자 로그아웃
    logoutBtn.addEventListener("click", () => {
      localStorage.clear();
      location.href = "../pages/logIn.html";
    });
  });
}

// 사용자에 따라 게시물 모달 구현
export function clickUserModal(event) {
  const URLSearch = new URLSearchParams(location.search);
  const myAccountName = localStorage.getItem("accountname");
  const postUserName =
    event.target.previousElementSibling.children[1].innerText.replace("@", "");
  let accountName = URLSearch.get("accountname");
  accountName = accountName === null ? postUserName : accountName;
  const postingId = event.path[4].nextElementSibling.id;

  event.preventDefault();

  // 사용자 본인 프로필인 경우, 게시물 삭제 모달
  if (accountName === myAccountName || accountName === null) {
    const postDelete = document.querySelector(".posttModal .modalBtn1");
    const cancelBtn = document.querySelector(".postDelAlert .cancelBtn");
    const postDelAlert = document.querySelector(".postDelAlert");
    const posttModal = document.querySelector(".posttModal");
    const modalClose = document.querySelector(".posttModal .modalClose");

    const delBtn = document.querySelector(".postDelAlert .delBtn");
    posttModal.classList.remove("hidden");

    // 모달창 닫기 버튼 클릭 시 모달창 닫기
    modalClose.addEventListener("click", () => {
      posttModal.classList.add("hidden");
    });

    // 삭제 버튼 클릭 시 게시물 삭제 확인 모달 활성화
    postDelete.addEventListener("click", () => {
      postDelAlert.classList.remove("hidden");
    });

    // 취소 버튼 클릭 시
    cancelBtn.addEventListener("click", () => {
      postDelAlert.classList.add("hidden");
    });

    // 게시물 삭제 버튼 클릭 시
    delBtn.addEventListener("click", async function () {
      const url = "https://mandarin.api.weniv.co.kr";
      const token = localStorage.getItem("Token");

      const setting = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      };

      try {
        const resDeleteProduct = await fetch(
          `${url}/post/${postingId}`,
          setting
        );
        if (resDeleteProduct) {
          location.href = "../pages/profile.html";
        }
      } catch (err) {
        console.error(err);
      }
    });
    // 게시물 수정페이지로 이동
    const postEditBtn = document.querySelector(".posttModal .modalBtn2");

    postEditBtn.addEventListener("click", () => {
      window.location = `postUpload.html\?postid=${postingId}`;
    });
  } else {
    // 다른 사용자 프로필인 경우, 게시물 신고 모달
    const reportAlert = document.querySelector(".reportAlert");
    const reportModal = document.querySelector(".reportModal");
    const cancelBtn = document.querySelector(".reportAlert .cancelBtn");
    const reportModalBtn = document.querySelector(".reportModal .modalBtn1");
    const reportBtn = document.querySelector(".reportAlert .reportBtn");
    const modalClose = document.querySelector(".reportModal .modalClose");
    reportModal.classList.remove("hidden");

    // 모달창 닫기 버튼 클릭 시 모달창 닫기
    modalClose.addEventListener("click", () => {
      reportModal.classList.add("hidden");
    });

    // 모달창 취소 확인 모달에서 취소 버튼 클릭 시 모달창 닫기
    cancelBtn.addEventListener("click", () => {
      reportAlert.classList.add("hidden");
    });

    // 신고 모달창에서 신고 버튼 클릭 시 신고 확인 모달 활성화
    reportModalBtn.addEventListener("click", () => {
      reportAlert.classList.remove("hidden");
    });

    reportBtn.addEventListener("click", async function () {
      reportModal.classList.add("hidden");
      const url = "https://mandarin.api.weniv.co.kr";
      const token = localStorage.getItem("Token");

      const setting = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      };

      try {
        const resReport = await fetch(
          `${url}/post/${postingId}/report`,
          setting
        );
        const resReportJson = await resReport.json();
        if (resReportJson.status !== 404) {
          reportAlert.classList.add("hidden");
        }
      } catch (err) {
        console.error(err);
      }
    });
  }
}

// 상품 삭제
export function productModal(e) {
  const URLSearch = new URLSearchParams(location.search);
  const myAccountName = localStorage.getItem("accountname");
  let accountName = URLSearch.get("accountname");
  accountName = accountName === null ? myAccountName : accountName;

  if (myAccountName === accountName) {
    const productModal = document.querySelector(".productModal");
    const productModalClose = document.querySelector(
      ".productModal .modalClose"
    );
    const productDeleteModal = document.querySelector(
      ".productModal .modalBtn1"
    );
    const productDelAlert = document.querySelector(".productDelAlert");
    const productLink = document.querySelector(".productModal .modalBtn3");
    const alertCancel = document.querySelector(".productDelAlert .cancelBtn");
    const productDelete = document.querySelector(".alertBtnContent .delBtn");

    productModal.classList.remove("hidden");

    // 모달 창 닫기
    productModalClose.addEventListener("click", () => {
      productModal.classList.add("hidden");
    });

    // 상품 삭제 확인 모달
    productDeleteModal.addEventListener("click", () => {
      productDelAlert.classList.remove("hidden");
    });

    // 삭제 확인 모달에서 취소
    alertCancel.addEventListener("click", () => {
      productDelAlert.classList.add("hidden");
    });

    // 판매 상품 연결
    productLink.addEventListener("click", () => {
      location.href = "../pages/error.html";
    });

    // 판매 상품 삭제
    productDelete.addEventListener("click", async function () {
      let productId = e.target.closest("li").id;
      const url = "https://mandarin.api.weniv.co.kr";
      const token = localStorage.getItem("Token");

      const setting = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      };

      try {
        const resProfileProduct = await fetch(
          `${url}/product/${productId}`,
          setting
        );
        if (resProfileProduct.status === 200) {
          location.href = "../pages/profile.html";
          productId = "";
        }
      } catch (err) {
        console.error(err);
      }
    });
  } else {
    location.href = "../pages/error.html";
  }
}
