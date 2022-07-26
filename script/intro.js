const logIn = () => {
  if (localStorage.getItem('Token')) {
    location.href = './home.html';
  }
};
logIn();
