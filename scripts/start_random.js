//randomize cards array
export function start_random(gridSize) {
  const cell = document.querySelectorAll(".cell");
  console.log(cell);
  let arr = crateRandomArray(gridSize);
  console.log(crateRandomArray());
  cell.forEach(function (el, i) {
    el.setAttribute("data-type", arr[i]);
  });
}
function crateRandomArray(gridSize) {
  let newArr = [];
  let size = gridSize / 2;
  console.log(gridSize);
  for (let i = 0; i < gridSize; i++) {
    let random = Math.floor(Math.random() * size);
    while (newArr.indexOf(random) !== -1) {
      newArr.push(random);
    }
  }
  return newArr;
}
