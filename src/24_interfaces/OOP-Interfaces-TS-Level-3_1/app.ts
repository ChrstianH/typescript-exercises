import IceCreamParlor from "./classes/IceCreamParlor";

const selectElement = document.getElementById(
  "iceCream-select"
) as HTMLSelectElement;

const iceCreamParlor: IceCreamParlor = new IceCreamParlor();
const flavorArray = iceCreamParlor.listFlavors();
flavorArray.forEach((flavor: string) => {
  const optionEl = document.createElement("option") as HTMLOptionElement;
  optionEl.value = flavor;
  optionEl.textContent = flavor;
  selectElement.appendChild(optionEl);
  //  selectElement.setAttribute("size", flavorArray.length.toString());
});
