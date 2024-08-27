const btnElement = document.getElementById("btn") as HTMLButtonElement;
const prozElement = document.getElementsByClassName(
  "zeit"
)[0] as HTMLDivElement;

btnElement.addEventListener("click", () => {
  let current_percentage = Number.parseInt(prozElement.innerHTML);
  const interval = setInterval(() => {
    current_percentage--;
    prozElement.innerHTML = `${current_percentage.toString()}%`;
    if (current_percentage === 0) {
      clearInterval(interval);
    }
  }, 100);
});
