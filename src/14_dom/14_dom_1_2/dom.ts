const infoElement = document.getElementById("info") as HTMLDivElement;

const h1Element = document.createElement("h1") as HTMLHeadElement;
h1Element.textContent = "Hello World!";

const h2Element = document.createElement("h2") as HTMLHeadElement;
h2Element.textContent = "How are you?";

infoElement.appendChild(h1Element);
infoElement.appendChild(h2Element);

const containerElement = document.getElementById("container") as HTMLDivElement;

const pElement = document.createElement("p") as HTMLParagraphElement;
pElement.textContent = "This is a Paragraph.";
containerElement.appendChild(pElement);

const inputElement = document.createElement("input") as HTMLInputElement;
inputElement.setAttribute("type", "text");
containerElement.appendChild(inputElement);
