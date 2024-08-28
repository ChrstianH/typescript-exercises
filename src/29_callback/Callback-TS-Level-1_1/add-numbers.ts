function addNumbers(a: number, b: number, callback: (sum: number) => void) {
  callback(a + b);
}

const showSum = (sum: number): void => console.log(sum);

addNumbers(23, 42, showSum);
