const selectElement = document.getElementById(
  "farbeAuswahlen"
) as HTMLSelectElement;

const buttonElement = document.getElementById("button") as HTMLButtonElement;

buttonElement.addEventListener("click", (event: MouseEvent) => {
  event.preventDefault();
  const color: string = selectElement.selectedOptions[0].innerText
    .split(" ")
    .join("");
  document.body.style.backgroundColor = color;
});
