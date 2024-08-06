const inputElement = document.getElementById("textInput") as HTMLInputElement;

const buttonElement = document.getElementById("btn") as HTMLButtonElement;

const output = document.getElementById("output") as HTMLDivElement;

buttonElement.addEventListener("click", (event: MouseEvent) => {
  event.preventDefault();
  const userInput = inputElement.value;
  if (userInput.length > 0) {
    const dateTime = new Date();
    const dateString = dateTime.toLocaleString("de-DE");
    const outputString: string = `${dateString}: ${userInput}`;

    const pElement = document.createElement("p") as HTMLParagraphElement;
    pElement.textContent = outputString;

    output.appendChild(pElement);
  }
});
