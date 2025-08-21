let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer = null;
let isRunning = false;

const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const millisecondsEl = document.getElementById("milliseconds");

function updateDisplay() {
  minutesEl.textContent = minutes.toString().padStart(2, "0");
  secondsEl.textContent = seconds.toString().padStart(2, "0");
  millisecondsEl.textContent = milliseconds.toString().padStart(2, "0");
}

function startStopwatch() {
  if (isRunning) return;
  isRunning = true;
  timer = setInterval(() => {
    milliseconds++;
    if (milliseconds >= 100) {
      milliseconds = 0;
      seconds++;
    }
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
    }
    updateDisplay();
  }, 10);
}

function stopStopwatch() {
  clearInterval(timer);
  isRunning = false;
}

function resetStopwatch() {
  clearInterval(timer);
  isRunning = false;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateDisplay();
}

document.getElementById("start").addEventListener("click", startStopwatch);
document.getElementById("stop").addEventListener("click", stopStopwatch);
document.getElementById("reset").addEventListener("click", resetStopwatch);

// Initialize display
updateDisplay();
