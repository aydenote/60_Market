class HomePage {
  render() {
    // header
    const rootEl = document.createElement("div");
    const headerEl = document.createElement("header");
    const articleHeaderEl = document.createElement("article");
    const heading1El = document.createElement("h1");

    rootEl.setAttribute("id", "root");
    articleHeaderEl.classList.add("headerBar");
    heading1El.classList.add("mainHeading");
    heading1El.classList.add("mainLogo");
    heading1El.innerText = "60'' 마켓";

    const anchorEl = document.createElement("a");
    const spanEl = document.createElement("span");

    anchorEl.setAttribute("href", "./search.html");
    anchorEl.classList.add("headerBarModal");
    anchorEl.classList.add("headerBarBtn");
    anchorEl.classList.add("searchBtn");
    spanEl.classList.add("ir");
    spanEl.innerText = "사용자 검색 버튼";

    articleHeaderEl.appendChild(heading1El);
    articleHeaderEl.appendChild(anchorEl);
    anchorEl.appendChild(spanEl);
    headerEl.appendChild(articleHeaderEl);

    // main
    const mainEl = document.createElement("main");
    const heading2El = document.createElement("h2");
    const heading3El = document.createElement("h3");
    const articleMainEl = document.createElement("article");

    mainEl.classList.add("home");
    heading2El.classList.add("ir");
    heading2El.innerText = "60'' 마켓 피드";

    articleMainEl.classList.add("post");
    heading3El.classList.add("ir");
    heading3El.innerText = "피드 게시글";

    articleMainEl.appendChild(heading3El);
    mainEl.appendChild(heading2El);
    mainEl.appendChild(articleMainEl);

    //footer

    return { headerEl, mainEl };
  }
}

export default HomePage;
/*
{
   <header>
      <article class="headerBar">
        <h1 class="mainHeading mainLogo">60'' 마켓</h1>
        <a href="./search.html"  class="headerBarModal headerBarBtn searchBtn"><span class="ir">사용자 검색 버튼</span></a>
    </header>
    <main class="home">
      <h2 class="ir">60'' 마켓 피드</h2>
      <article class="post">
        <h3 class="ir">피드 게시글</h3>
      </article>


    </main>
    <footer>
      <nav class="navBar">
        <ul class="navList">
          <li>
            <a href="home.html" class="nav">
              <article class="navIcon navHomeSelected"></article>
              <p class="navText">홈</p>
            </a>
          </li>
          <li>
            <a href="chat.html" class="nav">
              <article class="navIcon navChat"></article>
              <p class="navText selectedNav">채팅</p>
            </a>
          </li>
          <li>
            <a href="postUpload.html" class="nav">
              <article class="navIcon navPosting"></article>
              <p class="navText">게시물 작성</p>
            </a>
          </li>
          <li>
            <a href="profile.html" class="nav">
              <article class="navIcon navProfile"></article>
              <p class="navText">프로필</p>
            </a>
          </li>
        </ul>
      </nav>
    </footer> 
}
*/
