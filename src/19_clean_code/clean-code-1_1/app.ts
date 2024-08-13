const textInput = document.getElementById("textInput") as HTMLInputElement;
const countUpperCase = document.getElementById(
  "countUpperCaseLetters"
) as HTMLButtonElement;
const countSpacesElement = document.getElementById(
  "countSpaces"
) as HTMLButtonElement;
const countVowelsElement = document.getElementById(
  "countVowels"
) as HTMLButtonElement;
const outputElement = document.getElementById("output") as HTMLDivElement;

const upperCaseLetters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const vowels: string = "AEIOUaeiou";

function countCharacters(optionSelected: number): number {
  let counter: number = 0;
  const userInput: string = textInput.value;

  for (let i: number = 0; i < userInput.length; i++) {
    let char: string = userInput.charAt(i);
    switch (optionSelected) {
      case 1:
        if (upperCaseLetters.includes(char)) {
          counter++;
        }
        break;
      case 2:
        if (char === " ") {
          counter++;
        }
        break;
      case 3:
        if (vowels.includes(char)) {
          counter++;
        }
        break;
      default:
        break;
    }
  }
  return counter;
}

function countUpperCaseLetters(): void {
  console.log("countUpperCaseLetters");
  const count = countCharacters(1);
  outputElement.innerText = count.toString();
}

countUpperCase.addEventListener("click", countUpperCaseLetters);

function countSpaces(): void {
  const count = countCharacters(2);
  outputElement.innerHTML = count.toString();
}

countSpacesElement.addEventListener("click", countSpaces);

function countVowels(): void {
  const count = countCharacters(3);
  outputElement.innerHTML = count.toString();
}

countVowelsElement.addEventListener("click", countVowels);
