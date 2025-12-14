let boxes = document.querySelectorAll(".box");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let reset = document.querySelector("#reset-btn");
let newGame = document.querySelector("#new-btn");
let turnX = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];


boxes.forEach((box) => {
  box.addEventListener("click", function () {
    if (box.textContent !== "" || box.disabled) {
      return;
    }
    
    if (turnX) {
      box.textContent = "X";
      turnX = false;
    } else {
      box.textContent = "O";
      turnX = true;
    }
    box.disabled = true;
    chkwinner();
  });
});


const showWinner = (winner) => {
  msg.textContent = `Congratulations! ${winner} player is Winner`;
  msgContainer.classList.remove("hide");
  
  boxes.forEach((box) => {
    box.disabled = true;
  });
}


const chkwinner = () => {
  for (let pattern of winPatterns) {
    let position1 = boxes[pattern[0]].textContent;
    let position2 = boxes[pattern[1]].textContent;
    let position3 = boxes[pattern[2]].textContent;
    
    if (position1 !== "" && position2 !== "" && position3 !== "") {
      if (position1 === position2 && position2 === position3) {
        showWinner(position1);
        return;
      }
    }
  }
}
  

const resetGame = () => {
  turnX = true;
  boxes.forEach((box) => {
    box.textContent = "";
    box.disabled = false;
  });
  msgContainer.classList.add("hide");
}

newGame.addEventListener("click", resetGame);

reset.addEventListener("click", resetGame);