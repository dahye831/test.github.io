//네비게이션 버튼 클릭 -> 딤드 노출 -> (좌->우) 사이드 바 노출
//slide 닫기 버튼 -> 딤드 미노출 -> (우->좌) 사이드바 미노출
const navButton = document.querySelector('.navigation__button');
const slideBar = document.querySelector('.slideBar__area');
const closeButton = document.querySelector('.slideBar__close--button')
const dimmed = document.querySelector('.dimmed')


function openSlideBar() {
  const isOpen = slideBar.classList.contains('open')
  if (!isOpen) {
    slideBar.classList.add('open')
    slideBar.classList.remove("close");
    dimmed.style.display = 'block' 
  }
}

function closeSlideBar() {
  const isOpen = slideBar.classList.contains("open");
  if (isOpen) {
    slideBar.classList.add("close");
    slideBar.classList.remove("open");
    dimmed.style.display = "none";
  }
}
navButton.addEventListener('click', openSlideBar)
closeButton.addEventListener("click", closeSlideBar);