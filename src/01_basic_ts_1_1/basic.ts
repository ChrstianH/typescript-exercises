// Intro-TS-Level-1_11
console.log("Welcome :)");

// Intro-TS-Level-1_12
let dogName = "Leon";
console.log(dogName);
dogName = "elf";
// dogName = 11;
//Der Typ "number" kann dem Typ "string" nicht zugewiesen werden.

let ts_is_fun: boolean = true;
console.log(ts_is_fun);

let topic: string = "Intro TS";
console.log(topic);

let seventeen: number = 23;

const sum = seventeen + 44;
console.log(sum);

// Intro-TS-Level-1_13
// Addition
let addition_operator: number = 1 + 1;
console.log("addition: " + addition_operator);

// Subtraktion
let subtraktion_operator: number = 2 - 1;
console.log("subtraktion: " + subtraktion_operator);

// Multiplikation
let multiplication_operator: number = 2 * 2;
console.log("multiplication: " + multiplication_operator);

// Division
let division_operator: number = 4 / 2;
console.log("division: " + division_operator);

// Modulo: zeigt an, was der Rest sein würde.
let modulo_operator: number = 14 % 5;
console.log("modulus: " + modulo_operator);

// Intro-TS-Level-1_8

let x: number = 20;
let y: number = 30;

let add: number = x + y;
console.log(add);

let subtract1: number = x - y;
let subtract2: number = y - x;
console.log(subtract1);
console.log(subtract2);

let multiply: number = x * y;
console.log(multiply);

let divide: number = x / y;
console.log(divide);

let z: number = 10;
let resultOne: number = multiply / z;
console.log(resultOne);

let a: number = 15;
let b: number = 9;
let remainder: number = a % b;
console.log(remainder);

let c: number = 20;
let resultTwo: number = (a + b) * c;
console.log(resultTwo);

a++;
console.log(a);
b--;
console.log(b);

let resultThree: number = a - b;
console.log(resultThree);

let remainder2: number = resultOne % resultTwo;
console.log(remainder2);

// Intro-TS-Level-1_16
let score: number = 5 + 5 * 10;
console.log("Ergebnis: " + score);

score = (5 + 5) * 10;
console.log("Ergebnis: " + score);

score = 0;
score = score + 10;
console.log("Ergebnis: " + score);
score += 10;
console.log("Ergebnis: " + score);

let zahl = 1;
zahl = zahl + 1;
zahl += 1;
zahl++;
console.log("increment: " + zahl);
zahl--;
console.log("dekrement: " + zahl);
