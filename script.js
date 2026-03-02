const board = Array(9).fill("");
let currentPlayer = "X";
let gameOver = false;

const statusEl = document.getElementById("status");
const cells = [...document.querySelectorAll(".cell")];
const resetBtn = document.getElementById("reset");

const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWinner() {
  for (const [a, b, c] of winningPatterns) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  if (board.every((cell) => cell !== "")) {
    return "draw";
  }

  return null;
}

function updateStatus(result = null) {
  if (result === "draw") {
    statusEl.textContent = "It's a draw!";
    return;
  }

  if (result) {
    statusEl.textContent = `Player ${result} wins!`;
    return;
  }

  statusEl.textContent = `Player ${currentPlayer}'s turn`;
}

function handleCellClick(event) {
  const cell = event.currentTarget;
  const index = Number(cell.dataset.index);

  if (gameOver || board[index]) {
    return;
  }

  board[index] = currentPlayer;
  cell.textContent = currentPlayer;
  cell.dataset.value = currentPlayer;

  const result = checkWinner();
  if (result) {
    gameOver = true;
    updateStatus(result);
    cells.forEach((c) => {
      c.disabled = true;
    });
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  updateStatus();
}

function resetGame() {
  board.fill("");
  currentPlayer = "X";
  gameOver = false;
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.disabled = false;
    delete cell.dataset.value;
  });
  updateStatus();
}

cells.forEach((cell) => {
  cell.addEventListener("click", handleCellClick);
});

resetBtn.addEventListener("click", resetGame);
