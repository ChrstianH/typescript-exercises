const userInputElement = document.getElementById(
  "inputText"
) as HTMLInputElement;
const buttonElement = document.getElementById("addItem") as HTMLButtonElement;
const listElement = document.getElementById("myList") as HTMLUListElement;

buttonElement.addEventListener("click", () => {
  const newUserInput = userInputElement.value.trim();
  if (newUserInput.length > 0) {
    const newListItem = document.createElement("li") as HTMLLIElement;
    newListItem.textContent = newUserInput;
    listElement.appendChild(newListItem);
  }
});
