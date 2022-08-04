// API 통신 모듈

// 좋아요 모듈
export async function likeHeart(postingID) {
  const url = `https://mandarin.api.weniv.co.kr/post/${postingID}/heart`;
  const token = localStorage.getItem("Token");

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return data;
}

// 좋아요 취소 모듈
export async function likeUnHeart(postingID) {
  const url = `https://mandarin.api.weniv.co.kr/post/${postingID}/unheart`;
  const token = localStorage.getItem("Token");
  const res = await fetch(url, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return data;
}

// 포스팅 삭제
export async function deletePosting() {
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
    const resDeleteProduct = await fetch(`${url}/post/${postingId}`, setting);
    if (resDeleteProduct) {
      location.href = "../pages/profile.html";
    }
  } catch (err) {
    console.error(err);
  }
}

// 게시물 신고
export async function reportPosting() {
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
    const resReport = await fetch(`${url}/post/${postingId}/report`, setting);
    const resReportJson = await resReport.json();
    if (resReportJson.status !== 404) {
      reportAlert.classList.add("hidden");
    }
  } catch (err) {
    console.error(err);
  }
}

// 판매 상품 삭제
export async function deleteProduct() {
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
}
