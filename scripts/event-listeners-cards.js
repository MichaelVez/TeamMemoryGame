let stack = [];
export function eventListenersCards() {
  let gameBored = document.querySelector(".game-board");
  gameBored.addEventListener("click", gameBorClick);
  // todo timerStart()
}
function gameBorClick(event) {
  let lastCard = {
    x: event.target.getAttribute("data-x"),
    y: event.target.getAttribute("data-y"),
    img: event.target.getAttribute("data-img"),
  };
  stack.push(lastCard);
  if (stack.length === 1) {
    selectCard(stack[0]);
  }
  if (stack.length === 2) {
    if (
      //check match
      stack[0].getAttribute("data-img") === stack[1].getAttribute("data-img")
    ) {
      trueSelect(stack[0], stack[1]);
    } else {
      //not a match
      selectCard(stack[1]);
      //todo - tries++
      //todo - delay to not be able to click cards
      //todo - hide cards
    }

    //?stack will always contain 0\1\2 items
    stack.pop();
    stack.pop();
  }
  checkWin();
}
function selectCard(card) {
  //this function will show the card and leave it on hold
}
function trueSelect(card1, card2) {
  //score++
  //leave cards showing
}
function checkWin() {
  //check if all cards are flipped
  //win splash
  //stopTimer
}
