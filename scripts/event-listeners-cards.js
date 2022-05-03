import { startTimer } from "./events-btns.js";
let correctMatchCount = 0;
let wrongMatchCount = 0;
const correctMatch = document.querySelector(".rightgues");
const wrongMatch = document.querySelector(".wrongguess");

export function eventListenersCards() {
  let gameBored = document.querySelector(".game-board");
  gameBored.addEventListener("click", gameBorClick);
}
function gameBorClick(event) {
  //first time timer
  startTimer();
  //check if a card is click
  if (event.target.classList.contains("cardBack")) {
    //get card name
    const clickedCard = event.target.previousElementSibling;
    //showcard
    event.target.style.display = "none";
    event.target.previousElementSibling.style.display = "flex";
    //showcard
    clickedCard.classList.add("openCard");

    const openCards = document.querySelectorAll(".openCard");
    //check if 2 cards are open
    if (openCards.length === 2) {
      if (
        openCards[0].getAttribute("data-name") ===
        openCards[1].getAttribute("data-name")
      ) {
        //good match
        openCards.forEach((card) => {
          card.classList.remove("openCard");
          card.style.pointerEvents = "none";
        });
        correctMatchCount++;
        correctMatch.innerText = correctMatchCount;
      } else {
        //wrong match
        wrongMatchCount++;
        wrongMatch.innerText = wrongMatchCount;
        event.target.style.display = "none";
        //todo set timeout! and then display none
        //todo - delay to not be able to click cards

        event.target.style.display = "flex";
        event.target.previousElementSibling.style.display = "none";
        event.target.previousElementSibling.classList.remove("openCard");
        let otherCard = document.querySelector(".openCard");
        otherCard.style.display = "none";
        otherCard.nextElementSibling.style.display = "flex";
        otherCard.classList.remove("openCard");
      }
    }
    checkWin();
  }
}

function checkWin() {
  //check if all cards are flipped
  //stopTimer
  //win splash
}
