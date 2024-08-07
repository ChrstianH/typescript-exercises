const selectElement = document.getElementById(
  "farbeAuswahlen"
) as HTMLSelectElement;

const buttonElement = document.getElementById("button") as HTMLButtonElement;

buttonElement.addEventListener("click", (event: MouseEvent) => {
  event.preventDefault();
  const index: number = selectElement.selectedIndex;
  selectElement.remove(index);
});
