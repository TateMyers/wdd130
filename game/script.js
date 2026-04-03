const grid = document.getElementById("grid");

const rows = 5;
const cols = 5;

// Player position
let player = { row: 0, col: 0 };

// Create grid
function drawGrid() {
  grid.innerHTML = "";

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      // Check if player is here
      if (r === player.row && c === player.col) {
        const img = document.createElement("img");
        img.src = "assets/monsterDude.png"; // replace with your image
        img.classList.add("player");
        cell.appendChild(img);
      }

      grid.appendChild(cell);
    }
  }
}

// Movement
document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      if (player.row > 0) player.row--;
      break;
    case "ArrowDown":
      if (player.row < rows - 1) player.row++;
      break;
    case "ArrowLeft":
      if (player.col > 0) player.col--;
      break;
    case "ArrowRight":
      if (player.col < cols - 1) player.col++;
      break;
  }

  drawGrid();
});

// Initial draw
drawGrid();