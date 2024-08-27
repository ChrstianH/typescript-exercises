const countElement = document.getElementById("count") as HTMLDivElement;
const messageElement = document.getElementsByClassName(
  "message"
)[0] as HTMLDivElement;
let count = Number(countElement?.innerText);

const interval = setInterval(() => {
  countElement.innerText = count.toString();
  count--;
  if (count < 0) {
    clearInterval(interval);
    messageElement.style.opacity = "0";
  }
}, 1000);
