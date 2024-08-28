function addNumbers(a: number, b: number, callback: (sum: number) => void) {
  callback(a + b);
}

const showAlert = (sum: number): void => window.alert(sum);

addNumbers(23, 42, showAlert);
