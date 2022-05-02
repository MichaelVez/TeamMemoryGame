//timer
//startTimer()
//stopTimer()

const timerCount = document.querySelector(".timer .count");
const btnStart = document.querySelector("#btnStart");
const btnStop = document.querySelector("#btnStop");
let check = null;

function startTimer() {
  let seconds = 0;
  let minuts = 0;
  check = setInterval(() => {
    let total = minuts < 10 ? "0" + minuts : minuts;
    seconds++;
    timerCount.innerText =
      seconds < 10 ? total + ":0" + seconds : total + ":" + seconds;
    if (seconds === 59) {
      seconds = -1;
      minuts++;
    }
  }, 1000);
}

btnStart.addEventListener("click", () => {
  startTimer();
});

function stopTimer() {
  clearInterval(check);
  check = null;
}

btnStop.addEventListener("click", () => {
  stopTimer();
});
