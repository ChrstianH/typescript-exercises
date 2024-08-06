const galleryElement = document.getElementById("gallery") as HTMLElement;

let count: number = 0;

while (count < 3) {
  const figureElement = document.createElement("figure") as HTMLElement;

  const imgElement = document.createElement("img") as HTMLImageElement;
  imgElement.setAttribute("src", "./igor-omilaev-dLGr3RmrKsE-unsplash.jpg");
  imgElement.setAttribute(
    "alt",
    "Eine Gruppe von Quietscheenten mit einer Krone auf dem Kopf"
  );
  figureElement.appendChild(imgElement);

  const captionElement = document.createElement("figcaption") as HTMLElement;
  captionElement.textContent = `Fig ${(count + 1).toString()}`;

  figureElement.appendChild(captionElement);

  galleryElement.appendChild(figureElement);
  count++;
}
