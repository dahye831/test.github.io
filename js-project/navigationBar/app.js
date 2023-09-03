//모바일에서 네비게이션 버튼 클릭 시 오픈
const navButton = document.querySelector('.navigation__button');
const navBox = document.querySelector('.navigation')
const navBoxClass = navBox.classList;

const handleClick = () => {
  const isOpen = navBoxClass.contains("open");
  if (isOpen) {
    navBox.classList.remove('open')
  } else {
    navBox.classList.add('open')
  }
};

navButton.addEventListener('click', handleClick)