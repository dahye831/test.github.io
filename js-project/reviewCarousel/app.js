//element
const slideItems = document.querySelectorAll('.slide_item');
const slideButtonPrev = document.querySelector('.slide_button_prev');
const slideButtonNext = document.querySelector(".slide_button_next");
const slideBar = document.querySelector('.slide_inner')

//slide item
const ITEM_WIDTH = slideBar.offsetWidth;
let move = 0;
slideBar.setAttribute("style", "transform: translateX(0)");

const slideFun = (e) => {
  const target = e.target;
  const targetName = target.className;
  const slideLength = slideItems.length;
  const listWidth = ITEM_WIDTH * slideLength;
  const listMoveMax = listWidth - ITEM_WIDTH;
  const listMoveMin = 0;

  //next button click event
  if (targetName.includes('next')) {
    if (move === -listMoveMax) {
      slideBar.style.transform = `translateX(${listMoveMax}px)`;
    } else if(move > -listMoveMax){
      move -= ITEM_WIDTH;
      slideBar.style.transform = `translateX(${move}px)`;
    }
  }
  //prev button click event
  if (targetName.includes('prev')) {
    if (move === listMoveMin) {
      slideBar.style.transform = `translateX(${listMoveMin}px)`;
    } else {
      move += ITEM_WIDTH;
      slideBar.style.transform = `translateX(${move}px)`;
    }
  }
}

slideButtonNext.addEventListener("click", slideFun);
slideButtonPrev.addEventListener("click", slideFun);