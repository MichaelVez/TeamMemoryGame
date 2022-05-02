//timer
//startTimer()
//stopTimer()

export function startTimer() {
  const timerCount = document.querySelector(".timer .count");
  let seconds = 0;
  let minuts = 0;
  setInterval(() => {
    let total = minuts < 10 ? "0" + minuts : minuts;
    seconds++;
    timerCount.innerText =
      seconds < 10 ? total + ":0" + seconds : total + ":" + seconds;
    if (seconds === 60) {
      seconds = 0;
      minuts++;
    }
  }, 1000);
}

export function stopTImer() {
  clearInterval(startTimer());
};
