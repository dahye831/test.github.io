let count = 0; //카운트 초기값

const buttons = document.querySelectorAll(".button");
const numberText = document.querySelector(".number");

buttons.forEach((item) => {
  item.addEventListener("click", function (e) {
    const buttonType = item.id;

    switch (buttonType) {
      case "decrease":
        console.log("감소");
        count--;
        break;
      case "increase":
        console.log("증가");
        count++;
        break;
      case "reset":
        console.log("리셋");
        count = 0;
    }

    if (count > 0) {
      numberText.style.color = "red";
    } else if (count < 0) {
      numberText.style.color = "blue";
    } else {
      numberText.style.color = "black";
    }
    numberText.textContent = count;
  });
});
