function showMaximum(numbers: number[], callback: (max: number) => number) {
  const max = Math.max(...numbers);
  console.log(max);
  const result = callback(max);
  console.log(result);
  console.log("Finished with showMaximum");
}

const numbersArray: number[] = [8, 15, 27, 3, 34, 12, 21, 36, 5, 29];

const powerOfTen = (max: number): number => Math.pow(max, 10);

showMaximum(numbersArray, powerOfTen);
