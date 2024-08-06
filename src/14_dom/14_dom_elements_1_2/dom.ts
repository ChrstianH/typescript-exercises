const buttonElement = document.querySelector("button") as HTMLButtonElement;

const exampleElements = document.getElementsByClassName("example");

buttonElement.addEventListener("click", (event: MouseEvent) => {
  event.preventDefault();
  let count: number = 0;
  while (count < exampleElements.length) {
    if (
      exampleElements[count].getAttribute("style") !== "background-color: #000"
    ) {
      exampleElements[count].setAttribute("style", "background-color: #000");
    } else {
      switch (count) {
        case 0:
        case 1:
        case 2:
        case 3:
          exampleElements[count].setAttribute(
            "style",
            "background-color: #666"
          );
          break;
        case 4:
          exampleElements[count].setAttribute(
            "style",
            "background-color: #fff"
          );
          break;
      }
    }
    count++;
  }
});
