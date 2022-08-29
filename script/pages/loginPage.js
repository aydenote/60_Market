class LoginPage {
  render() {
    const wrapEl = document.createElement("div");
    wrapEl.classList.add("wrap");
    wrapEl.classList.add("registerWrap");

    return { wrapEl };
  }
}

export default LoginPage;

/* <div class="wrap registerWrap">
<header>
  <h1 class="registerHeader">로그인</h1>
</header>

<main>
  <form class="logInForm registerForm" action="" method="get">
    <label class="registerFormLabel" for="email">이메일</label>
    <input id="email" name="email" type="email" required />
    <label class="registerFormLabel" for="password">비밀번호</label>
    <input
      id="password"
      name="password"
      type="password"
      minlength="6"
      required
    />
    <p class="registerFormAlert ir">
      *이메일 또는 비밀번호가 일치하지 않습니다.
    </p>

    <button type="button" class="btn logInBtn registerFormBtn" disabled>
      로그인
    </button>
  </form>
</main>

<article>
  <a class="registerByEmail" href="signUp.html">이메일로 회원가입</a>
</article>
</div> */
