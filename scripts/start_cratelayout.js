//crate cards container
let gameBored = document.querySelector(".game-board");
// let x_set = 4;
// let y_set = 3;
export function start_crateLayout(x, y) {
  for (let i = 0; i < x; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    gameBored.appendChild(row);
    for (let j = 0; j < y; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.setAttribute(`data-x`, j);
      cell.style.width = `${100 / x}%`;
      cell.setAttribute(`data-y`, i);
      row.appendChild(cell);
    }
  }
}
