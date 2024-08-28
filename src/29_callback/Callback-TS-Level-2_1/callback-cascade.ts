function calculateSumAndMore(
  a: number,
  b: number,
  callback1: (result1: number) => number,
  callback2: (result2: number) => number
) {
  const sum = a + b;
  const result1 = callback1(sum);
  const result2 = callback2(result1);

  console.log(result2);
}

const doubleSum = (sum: number) => 2 * sum;
const doubleSumBinary = (doubleSum: number): number =>
  Number(doubleSum.toString(2));

calculateSumAndMore(47, 11, doubleSum, doubleSumBinary);
