// 좋아요 모듈
export async function likeHeart(postingID) {
  const url = `https://mandarin.api.weniv.co.kr/post/${postingID}/heart`;
  const token = localStorage.getItem('Token');

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json',
    },
  });
  const data = await res.json();
  return data;
}

// 좋아요 취소 모듈
export async function likeUnHeart(postingID) {
  const url = `https://mandarin.api.weniv.co.kr/post/${postingID}/unheart`;
  const token = localStorage.getItem('Token');
  const res = await fetch(url, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json',
    },
  });
  const data = await res.json();
  return data;
}

// 게시물 신고
export async function reportPost(postingId) {
  const url = 'https://mandarin.api.weniv.co.kr';
  const token = localStorage.getItem('Token');

  const setting = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json',
    },
  };

  try {
    const resReport = await fetch(`${url}/post/${postingId}/report`, setting);
    const resReportJson = await resReport.json();
    if (resReportJson.status !== 404) {
      location.reload();
    }
  } catch (err) {
    console.error(err);
  }
}

// 게시물 삭제
export async function deletePost(postingId) {
  const url = 'https://mandarin.api.weniv.co.kr';
  const token = localStorage.getItem('Token');

  const setting = {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json',
    },
  };

  try {
    const resDeleteProduct = await fetch(`${url}/post/${postingId}`, setting);
    if (resDeleteProduct) {
      location.reload();
    }
  } catch (err) {
    console.error(err);
  }
}

// 댓글 신고
export async function reportComment(commentId) {
  const url = 'https://mandarin.api.weniv.co.kr';
  const token = localStorage.getItem('Token');
  const postId = window.location.hash.split('postid=')[1];

  try {
    const res = await fetch(`${url}/post/${postId}/comments/${commentId}/report`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    const json = await res.json();
    if (json) {
      location.reload();
    }
  } catch (err) {
    console.log(err);
  }
}

// 댓글 삭제
export async function deleteComment(commentId) {
  const url = 'https://mandarin.api.weniv.co.kr';
  const token = localStorage.getItem('Token');
  const postId = window.location.hash.split('postid=')[1];

  try {
    const res = await fetch(`${url}/post/${postId}/comments/${commentId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    const json = await res.json();
    if (json.status === '200') {
      location.reload();
    }
  } catch (err) {
    console.log(err);
  }
}

// 이미지 업로드
export async function imageUpload(formData) {
  const url = 'https://mandarin.api.weniv.co.kr';

  try {
    const response = await fetch(url + '/image/uploadfiles', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    const imageUrl = await data[0].filename;
    localStorage.setItem('imageUrl', imageUrl);
  } catch (err) {
    console.log(err);
  }
}

// 상품 등록
export async function productSave(productNameForm, productPriceForm, productContentForm) {
  const token = localStorage.getItem('Token');
  const url = 'https://mandarin.api.weniv.co.kr';
  const imageUrl = localStorage.getItem('imageUrl');
  const productInfo = {
    product: {
      itemName: productNameForm.value,
      price: parseInt(productPriceForm.value.replace(/,/g, '')),
      link: productContentForm.value,
      itemImage: `${url}/${imageUrl}`,
    },
  };
  const setting = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json',
    },
    body: JSON.stringify(productInfo),
  };
  try {
    const reqPosting = await fetch(`${url}/product`, setting);
    if (reqPosting.status === 200) {
      window.history.back(1);
    }
  } catch (error) {
    console.log(error);
  }
}
