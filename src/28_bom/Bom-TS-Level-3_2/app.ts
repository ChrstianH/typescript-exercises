const startElement = document.getElementById(
  "start-button"
) as HTMLButtonElement;
const pauseElement = document.getElementById(
  "pause-button"
) as HTMLButtonElement;
const restartElement = document.getElementById(
  "restart-button"
) as HTMLButtonElement;
const resetElement = document.getElementById(
  "reset-button"
) as HTMLButtonElement;

const minutesInput = document.getElementById("minutes") as HTMLInputElement;
const timeElement = document.getElementById("time") as HTMLDivElement;

let minutes: number = 0;
let seconds: number = 0;

let interval = setInterval(() => {});

startElement.addEventListener("click", () => {
  if (minutes !== 0 || seconds !== 0) {
    clearInterval(interval);
    startInterval();
  } else if (
    minutesInput.value.length !== 0 &&
    Number(minutesInput.value) > 0
  ) {
    clearInterval(interval);
    minutes = Number(minutesInput.value);
    seconds = 0;
    displayTime();
    startInterval();
  }
});
pauseElement.addEventListener("click", () => {
  clearInterval(interval);
});

restartElement.addEventListener("click", () => {
  if (minutesInput.value.length !== 0 && Number(minutesInput.value) > 0) {
    clearInterval(interval);
    minutes = Number(minutesInput.value);
    seconds = 0;
    displayTime();
    startInterval();
  }
});

resetElement.addEventListener("click", () => {
  clearInterval(interval);
  minutesInput.value = "";
  minutes = 0;
  seconds = 0;
  displayTime();
});

const startInterval = () => {
  interval = setInterval(() => {
    seconds--;
    if (seconds < 0) {
      seconds = 59;
      minutes--;
      if (minutes < 0) {
        clearInterval(interval);
        minutes = 0;
        seconds = 0;
      }
    }
    displayTime();
  }, 1000);
};

const displayTime = () => {
  timeElement.innerText = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
};
