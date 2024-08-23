import IceCreamParlor from "./classes/IceCreamParlor";

const selectElement = document.getElementById(
  "iceCream-select"
) as HTMLSelectElement;

const displayAllBtn = document.getElementById(
  "displayAll"
) as HTMLButtonElement;
const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
const delBtn = document.getElementById("delBtn") as HTMLButtonElement;
const availableBtn = document.getElementById(
  "availableBtn"
) as HTMLButtonElement;
const displayPriceBtn = document.getElementById(
  "displayPrice"
) as HTMLButtonElement;
const outputElement = document.getElementById("output") as HTMLDivElement;

const iceCreamParlor: IceCreamParlor = new IceCreamParlor();

const flavorArray = iceCreamParlor.listFlavors();
flavorArray.forEach((flavor: string, index: number) => {
  const optionEl = document.createElement("option") as HTMLOptionElement;
  optionEl.value = flavor;
  optionEl.textContent = flavor;
  optionEl.setAttribute("selected", (index === 0).toString());
  selectElement.appendChild(optionEl);
});

displayAllBtn.addEventListener("click", (event: MouseEvent) => {
  event.preventDefault();
});
addBtn.addEventListener("click", (event: Event) => {
  event.preventDefault();
});
delBtn.addEventListener("click", (event: Event) => {
  event.preventDefault();
});
availableBtn.addEventListener("click", (event: Event) => {
  event.preventDefault();
});
displayPriceBtn.addEventListener("click", (event: Event) => {
  event.preventDefault();
});
