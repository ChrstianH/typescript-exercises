function add(a: number, b: number) {
  return a + b;
}
function subtract(a: number, b: number) {
  return a - b;
}
function multiply(a: number, b: number) {
  return a * b;
}
function divide(a: number, b: number) {
  if (b !== 0) {
    return a / b;
  } else if (a !== 0) {
    return b / a;
  } else {
    return NaN;
  }
}

export {
  add as addNumbers,
  subtract as subtractNumbers,
  multiply as multiplyNumbers,
  divide as divideNumbers,
};
