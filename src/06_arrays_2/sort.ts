// Array-TS-Sort-Level-1_3

let numArray1: number[] = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];
console.log(numArray1);

const numArrayAsc: number[] = numArray1.sort((a: number, b: number) => a - b);
console.log(numArrayAsc);

const numArrayDesc: number[] = numArray1.sort((a: number, b: number) => b - a);
console.log(numArrayDesc);

// Array-TS-Sort-Level-2_3

const oldPainters: string[] = [
  "Caspar David Friedrich",
  "Mary Cassatt",
  "Rosa Bonheur",
  "Francisco de Goya",
  "Édouard Manet",
];
const newerPainters: string[] = [
  "Pablo Picasso",
  "Salvador Dalí",
  "Frida Kahlo",
  "Georgia O'Keeffe",
];

const femalePainters1: string[] = oldPainters.splice(1, 2);
const femalePainters2: string[] = newerPainters.splice(2, 2);
const femalePainters: string[] = femalePainters1.concat(femalePainters2);
console.log(femalePainters);
const malePainters: string[] = [...oldPainters, ...newerPainters];
console.log(malePainters);
