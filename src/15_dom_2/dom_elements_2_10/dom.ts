const h1Wrapper = document.getElementById("element") as HTMLDivElement;

console.log(h1Wrapper.classList);

const smallBtn = document.getElementById("textSmall") as HTMLButtonElement;
smallBtn.addEventListener("click", textSmall);

const mediumBtn = document.getElementById("textMedium") as HTMLButtonElement;
mediumBtn.addEventListener("click", textMedium);

const bigBtn = document.getElementById("textBig") as HTMLButtonElement;
bigBtn.addEventListener("click", textBig);

function textSmall(): void {
  h1Wrapper.classList.remove(...h1Wrapper.classList);
  h1Wrapper.classList.add("small");
}
function textMedium(): void {
  h1Wrapper.classList.remove(...h1Wrapper.classList);
  h1Wrapper.classList.add("middle");
}
function textBig(): void {
  h1Wrapper.classList.remove(...h1Wrapper.classList);
  h1Wrapper.classList.add("big");
}
