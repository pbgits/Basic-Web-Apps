const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const resetBtn = document.getElementById("reset");

let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
let isGameActive = true;

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function handleCellClick(event) {
  const index = event.target.dataset.index;

  if (gameState[index] !== "" || !isGameActive) return;

  gameState[index] = currentPlayer;
  event.target.textContent = currentPlayer;
  event.target.classList.add("taken");

  if (checkWin()) {
    statusText.textContent = `🎉 Player ${currentPlayer} Wins!`;
    isGameActive = false;
    return;
  }

  if (!gameState.includes("")) {
    statusText.textContent = "It's a Draw!";
    isGameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusText.textContent = `Player ${currentPlayer}'s turn`;
}

function checkWin() {
  return winningConditions.some(condition => {
    return condition.every(index => gameState[index] === currentPlayer);
  });
}

function resetGame() {
  currentPlayer = "X";
  gameState = ["", "", "", "", "", "", "", "", ""];
  isGameActive = true;
  statusText.textContent = `Player X's turn`;
  cells.forEach(cell => {
    cell.textContent = "";
    cell.classList.remove("taken");
  });
}

cells.forEach(cell => cell.addEventListener("click", handleCellClick));
resetBtn.addEventListener("click", resetGame);
