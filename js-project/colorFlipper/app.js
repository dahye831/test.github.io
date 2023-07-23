//컬러값 hex코드 data
const data = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

const buttonChange = document.querySelector(".button__change");
const bgElement = document.querySelector(".wrap");
const colorText = document.querySelector(".color");

const getRandomNum = (min, max) => {
  min = Math.ceil(min); //ceil 올림
  max = Math.floor(max); //floor 버림
  return Math.floor(Math.random() * (max - min)) + min; //min포함 max 미포함
};

const handleClick = () => {
  const hexColorArray = [];
  const dataLength = data.length;

  for (let i = 0; i < 6; i++) {
    const randomIndex = getRandomNum(0, dataLength);
    hexColorArray.push(data[randomIndex]);
  }

  const hexColor = hexColorArray.join("");

  bgElement.setAttribute("style", `background-color : #${hexColor}`);
  colorText.innerText = `#${hexColor}`;
};

buttonChange.addEventListener("click", handleClick);
