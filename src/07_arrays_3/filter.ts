// Array-TS-Iteration-Level-1_8

const zahlen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function printEvenNumbers(zahl: number) {
  return zahl % 2 === 0;
}
function printOddNumbers(zahl: number) {
  return zahl % 2 === 1;
}

let evenNumbers1: number[] = zahlen.filter((zahl) => printEvenNumbers(zahl));
let oddNumbers1: number[] = zahlen.filter((zahl) => printOddNumbers(zahl));
console.log(evenNumbers1);
console.log(oddNumbers1);
let evenNumbers2: number[] = zahlen.filter((zahl) => zahl % 2 === 0);
let oddNumbers2: number[] = zahlen.filter((zahl) => zahl % 2 === 1);
console.log(evenNumbers2);
console.log(oddNumbers2);

// Array-filter-TS-Level-1_2

const heroArr: (string | null | undefined)[] = [
  "Superman",
  "Batman",
  undefined,
  undefined,
  "Wonder Woman",
  "Spider-Man",
  "Black Widow",
  "Iron Man",
  "Thor",
  "Catwoman",
  undefined,
  null,
];

function showHeroesCleaned(heroArray: (string | null | undefined)[]) {
  return heroArray.filter(
    (hero: string | null | undefined) => hero !== null && hero !== undefined
  );
}

console.log(heroArr);
const heroesCleaned: string[] = showHeroesCleaned(heroArr);
console.log(heroesCleaned);

//Ternary-Operator-TS-Level-2_1

const woerter: string[] = [
  "Banane",
  "Kaktus",
  "Flausch",
  "Ente",
  "Apfel",
  "Auto",
  "Giraffe",
  "Schmetterling",
  "Krokodil",
  "Lampe",
];

function shortWords(wordlist: string[]): string[] {
  return wordlist.filter((word: string) => word.length <= 6);
}
console.log(shortWords(woerter));

function wordsWithE(wordlist: string[]): string[] {
  return wordlist.filter((word: string) => word.toLowerCase().includes("e"));
}
console.log(wordsWithE(woerter));
