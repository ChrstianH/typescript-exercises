const promise: Promise<number[]> = new Promise((resolve, reject) => {
  const rndNumber1 = Math.ceil(Math.random() * 130);
  console.log(rndNumber1);
  const rndNumber2 = Math.ceil(Math.random() * 130);
  console.log(rndNumber2);
  const rndNumber3 = Math.ceil(Math.random() * 130);
  console.log(rndNumber3);
  if (rndNumber1 > 100 || rndNumber2 > 100 || rndNumber3 > 100) {
    reject("Einer oder mehrere Werte sind zu groß");
  } else {
    resolve([rndNumber1, rndNumber2, rndNumber3]);
  }
});

promise
  .then((resp) => (resp = resp.map((num: number) => (num += 7))))
  .then((resp) => (resp = resp.map((num: number) => (num *= 2))))
  .then((resp) => (resp = resp.map((num: number) => (num -= 1))))
  .then((resp) => (resp = resp.map((num: number) => (num %= 2))))
  .then((resp) => console.log(resp))
  .catch((err) => console.error(err))
  .finally(() => console.log("Finished"));
