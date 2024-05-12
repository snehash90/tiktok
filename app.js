let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-game-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true; // PlayerO
let count = 0;

const winPatteren = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turn0 = true;
  enableBoxes();
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    msgContainer.classList.add("hide");
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", (evt) => {
    if (turn0) {
      box.innerHTML = "0";
      turn0 = false;
      box.disabled = true;
    } else {
      box.innerHTML = "X";
      turn0 = true;
      box.disabled = true;
    }
    checkWinner();
  });
});

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatteren) {
    let positionVal1 = boxes[pattern[0]].innerText;
    let positionVal2 = boxes[pattern[1]].innerText;
    let positionVal3 = boxes[pattern[2]].innerText;
    if (positionVal1 != "" && positionVal2 != "" && positionVal3 != "") {
      if (positionVal1 === positionVal2 && positionVal2 == positionVal3) {
        showWinner(positionVal1);
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
