// ** Math-TS-Level-1_1 **

const pi: number = Math.PI;
console.log({ pi });

const roundedPi: number = Math.round(pi * 100) / 100;
console.log({ roundedPi });

// ** Math-TS-Level-1_2 **

function roundNumber(x: number): number {
  let roundedNumber: number = Math.round(x);
  return roundedNumber;
}
let randomNumbers: number[] = [3.14, 193.4464, 0.8596433607, -2.940629089];

randomNumbers.forEach((element) => {
  console.log(roundNumber(element));
});

// ** Math-TS-Level-1_3 **

const randomNum: number = Math.random();
const randomNum1_10: number = Math.floor(Math.random() * 10 + 1);
const randomNum1_100: number = Math.floor(Math.random() * 100 + 1);

console.log(randomNum);
console.log(randomNum1_10);
console.log(randomNum1_100);

// ** Math-TS-Level-2_2 **

const numberToGuess: number = Math.ceil(Math.random() * 10);
const guessedNumber: string | null = window.prompt(
  "Gib deinen Tip ab (1 - 10)"
);
const result: string =
  guessedNumber && numberToGuess === parseInt(guessedNumber)
    ? "gewonnen"
    : "verloren";
console.log(`Du hast ${result}. Die Zahl war ${numberToGuess}.`);
