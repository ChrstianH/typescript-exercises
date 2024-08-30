function processData(
  numbers: number[],
  callback1: (numbers: number[]) => number[],
  callback2: (numbers: number[]) => number[]
): Map<number, string> {
  const sortedNumbers = callback1(numbers);
  const doubledNumbers = callback2(sortedNumbers);
  const map = new Map();
  numbers.forEach((number: number, index: number) =>
    map.set(number, doubledNumbers[index].toString(16))
  );
  return map;
}

const sortNumbers = (numbers: number[]) => numbers.sort((a, b) => a - b);
const multiplyBy2 = (numbers: number[]) =>
  numbers.map((number: number) => number * 2);

const array1: number[] = [86, 6, 67, 73, 4, 24, 46, 75, 11, 12];
const array2: number[] = [46, 44, 52, 59, 32, 6, 97, 11, 29, 63];
const result1 = processData(array1, sortNumbers, multiplyBy2);
console.log(result1);
const result2 = processData(array2, sortNumbers, multiplyBy2);
console.log(result2);
