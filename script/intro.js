// 토큰 여부 확인 후 홈으로 이동
function logIn(resMessage) {
  if (resMessage === 200) {
    window.location.hash = '#home';
  }
}

// 토큰 검증
export async function isValidToken() {
  const url = 'https://mandarin.api.weniv.co.kr';
  const token = localStorage.getItem('Token');
  if (token === null) {
    return;
  }

  let setting = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json',
    },
  };

  try {
    const resValidToken = await fetch(`${url}/user/checktoken`, setting);
    logIn(resValidToken.status);
  } catch (err) {
    window.location.hash = '#signup';
  }
}
