// Loops-TS-Level-1_10

function getHighestNumber(numbers: number[]): number {
  let highestNumber: number = 0;

  for (let number of numbers) {
    if (number > highestNumber) {
      highestNumber = number;
    }
  }
  return highestNumber;
}

console.log(getHighestNumber([50, 39, 99, 57, 92, 26, 31, 61, 91, 38]));
console.log(getHighestNumber([89, 55, 56, 65, 37, 35, 63]));
console.log(getHighestNumber([96, 2, 8, 28, 18]));
console.log(getHighestNumber([32, 20, 23]));

// Loops-TS-Level-1_11

function calculateSum(maxNumber: number): number {
  let sum: number = 0;

  for (let index: number = 1; index <= maxNumber; index++) {
    sum += index;
  }

  return sum;
}

console.log(calculateSum(96));
console.log(calculateSum(2));
console.log(calculateSum(8));
console.log(calculateSum(28));
console.log(calculateSum(18));

// Loops-TS-Level-2_3

function getNumberOfVowels(text: string): number[] {
  // Array to count vowels  A  E  I  O  U
  const vowels: number[] = [0, 0, 0, 0, 0];

  for (let index: number = 0; index < text.length; index++) {
    switch (text.charAt(index)) {
      case "A":
      case "a":
        vowels[0]++;
        break;
      case "E":
      case "e":
        vowels[1]++;
        break;
      case "I":
      case "i":
        vowels[2]++;
        break;
      case "O":
      case "o":
        vowels[3]++;
        break;
      case "U":
      case "u":
        vowels[4]++;
        break;
      default:
        break;
    }
  }
  return vowels;
}

const text1: string =
  "Sigh view am high neat half to what. Sent late held than set why wife our. If an blessing building steepest. Agreement distrusts mrs six affection satisfied. Day blushes visitor end company old prevent chapter. Consider declared out expenses her concerns. No at indulgence conviction particular unsatiable boisterous discretion. Direct enough off others say eldest may exeter she. Possible all ignorant supplied get settling marriage recurred.";
console.log(getNumberOfVowels(text1));

const text2: string =
  "Smallest directly families surprise honoured am an. Speaking replying mistress him numerous she returned feelings may day. Evening way luckily son exposed get general greatly. Zealously prevailed be arranging do. Set arranging too dejection september happiness. Understood instrument or do connection no appearance do invitation. Dried quick round it or order. Add past see west felt did any. Say out noise you taste merry plate you share. My resolve arrived is we chamber be removal.";
console.log(getNumberOfVowels(text2));

const text3: string =
  "By spite about do of do allow blush. Additions in conveying or collected objection in. Suffer few desire wonder her object hardly nearer. Abroad no chatty others my silent an. Fat way appear denote who wholly narrow gay settle. Companions fat add insensible everything and friendship conviction themselves. Theirs months ten had add narrow own.";
console.log(getNumberOfVowels(text3));

// Loops-TS-Level-2_3

function addToFifty(): void {
  let randomSum: number = 0;

  do {
    let randomNumber: number = Math.floor(Math.random() * 10 + 1);
    randomSum += randomNumber;
  } while (randomSum <= 50);

  console.log(randomSum + " > 50. Stopping right here.");
}

addToFifty();
addToFifty();
addToFifty();

// Loops-TS-Level-3_6

//const scores: number[] = [44, 11, 70, 80, 52, 88, 94, 3, 25, 46];
const scores: number[] = [
  49, 41, 95, 75, 36, 45, 37, 61, 94, 70, 91, 24, 50, 67, 66,
];

let scoreSum: number = 0;
let scoreAvg: number = 0;

for (let score of scores) {
  scoreSum += score;
}
scoreAvg = scoreSum / scores.length;
console.log(scoreAvg);
switch (true) {
  case scoreAvg < 50:
    console.log("Ungenügend");
    break;
  case scoreAvg >= 50 && scoreAvg < 60:
    console.log("Mangelhaft");
    break;
  case scoreAvg >= 60 && scoreAvg < 70:
    console.log("Ausreichend");
    break;
  case scoreAvg >= 70 && scoreAvg < 80:
    console.log("Befridigend");
    break;
  case scoreAvg >= 80 && scoreAvg < 90:
    console.log("Gut");
    break;
  case scoreAvg >= 90:
    console.log("Sehr gut");
    break;
  default:
    break;
}

// Loops-TS-Level-3_7

const allGermanLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function encodeText(textToEncode: string): string {
  let encodedText: string = "";
  const specialChars: string =
    "ÄäÖöÜü^°@!\"§$%&/()=?+*~#',.-:;_<>|{}[]\\ 1234567890";
  for (let index: number = 0; index < textToEncode.length; index++) {
    let charAtIndex: string = textToEncode.charAt(index);

    if (specialChars.includes(charAtIndex)) {
      encodedText += charAtIndex.toUpperCase();
    } else {
      const charUpper: string = charAtIndex.toUpperCase();
      const germanLettersIndex = allGermanLetters.indexOf(charUpper);
      const encodedIndex: number =
        germanLettersIndex + 13 > 25
          ? germanLettersIndex - 13
          : germanLettersIndex + 13;
      const encodedLetter: string = allGermanLetters[encodedIndex];
      encodedText += encodedLetter;
    }
  }
  return encodedText;
}

console.log(encodeText("Hallo Welt!"));
console.log(encodeText(`die Verschlüsselung von Texten`));
