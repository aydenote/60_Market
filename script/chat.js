const menu = document.querySelector('.headerBarModal');
const modal = document.querySelector('.chatModal');
const exitChat = document.querySelector('.modalBtn');

// 메뉴 버튼 클릭시 모달창
menu.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

// 모달 닫기 버튼 클릭시 모달창 숨김
modal.addEventListener('click', () => {
  modal.classList.add('hidden');
});

// 채팅방 나가기
exitChat.addEventListener('click', () => {
  location.href = './chat.html';
});
