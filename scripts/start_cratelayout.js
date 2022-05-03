let gameBored = document.querySelector(".game-board");

export function start_crateLayout(x, y) {
  for (let i = 0; i < x; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    gameBored.appendChild(row);
    for (let j = 0; j < y; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.style.width = `${100 / y}%`;
      row.appendChild(cell);
      let cardFront = document.createElement("div");
      cardFront.classList.add("cardFront");
      let cardBack = document.createElement("div");
      cardBack.classList.add("cardBack");
      cell.appendChild(cardFront);
      cardFront.style.display = "none";
      cell.appendChild(cardBack);
    }
  }
}
