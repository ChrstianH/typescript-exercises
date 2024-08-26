const generateLottoNumber = (): number | null => {
  let randomNumber: number | null = Math.ceil(Math.random() * 100);
  try {
    if (randomNumber > 49) {
      randomNumber = null;
      throw new Error();
    }
  } catch (error) {
    console.error("Number greater than 49");
  } finally {
    return randomNumber;
  }
};

const lottoResults: number[] = [];

while (lottoResults.length < 7) {
  const lottoNumber = generateLottoNumber();
  if (lottoNumber && !lottoResults.includes(lottoNumber)) {
    lottoResults.push(lottoNumber);
  }
}

console.log(lottoResults);
