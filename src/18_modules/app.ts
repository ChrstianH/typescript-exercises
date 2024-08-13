// Module-Namensräume-TS-1_1

import { addFive } from "./calculator";

console.log(addFive(-27));
console.log(addFive(26));
console.log(addFive(7));

// Module-Namensräume-TS-1_2

import { add, subtract, multiply, divide } from "./operations";

console.log(add(37, 12));
console.log(subtract(92, 59));
console.log(multiply(7, 46));
console.log(divide(91, 13));

import {
  addNumbers,
  subtractNumbers,
  multiplyNumbers,
  divideNumbers,
} from "./operations2";

console.log(addNumbers(37, 12));
console.log(subtractNumbers(92, 59));
console.log(multiplyNumbers(7, 46));
console.log(divideNumbers(91, 13));

// Module-Namensräume-TS-1_3

import getRandomColor from "./random-color-generator";
import { TextTools } from "./text-tools";

console.log(getRandomColor());
console.log(getRandomColor());
console.log(getRandomColor());
console.log(getRandomColor());

// Module-Namensräume-TS-2_1

const text1: string =
  "Erfolg besteht darin, dass man genau die Fähigkeiten hat, die im Moment gefragt sind.";
const text2: string =
  "Die einzige Art, gute Arbeit zu leisten, besteht darin, zu lieben, was man tut.";
const text3: string =
  "Der beste Weg, die Zukunft vorherzusagen, ist, sie selbst zu gestalten.";

console.log(TextTools.toUpperCase(text1));
console.log(TextTools.toUpperCase(text2));
console.log(TextTools.toUpperCase(text3));
console.log(TextTools.reverse(text1));
console.log(TextTools.reverse(text2));
console.log(TextTools.reverse(text3));
console.log(TextTools.constText);
