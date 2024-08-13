const getNumberText = (num: number): string => {
  const numberTexts: string[] = ["One", "Two", "Three", "Four", "Five"];
  const index: number = num - 1;
  return numberTexts[index] ?? "Unknown";
};
const userInput: number = Math.ceil(Math.random() * 7);
console.log(userInput);
const numberText = getNumberText(userInput);
console.log(numberText);
