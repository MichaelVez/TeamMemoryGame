//randomize cards array // add data-img attribute
export function start_random(gridSize) {
  let arr = crateRandomArray(gridSize);
  assignCards(arr, gridSize);
}
function crateRandomArray(gridSize) {
  let newArr = [];
  let size = gridSize / 2;
  for (let i = 0; i < size; i++) {
    newArr.push(i);
    newArr.push(i);
  }
  return newArr;
}
function assignCards(arr) {
  const cell = document.querySelectorAll(".cell");
  for (let i = 0; i < cell.length; i++) {
    let randomNum = Math.floor(Math.random() * arr.length);
    cell[i].setAttribute("data-img", arr[randomNum]);
    arr.splice(randomNum, 1);
  }
}
function removeFromArr(ar, num) {
  let array = ar;
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] === num) {
      array.splice(i, 1);
      break;
    }
  }
  return array;
}
