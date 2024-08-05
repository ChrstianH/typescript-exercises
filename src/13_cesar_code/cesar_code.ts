const messageElement = document.getElementById("message") as HTMLInputElement;
const shiftElement = document.getElementById("shift") as HTMLInputElement;

const alphabet: string[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function encodeText(): void {
  let message: string = messageElement.value;
  const shift: number = Number(shiftElement.value);

  let messageArray: string[] = message.toUpperCase().split("");
  let counter: number = 0;
  do {
    const characterToEncode = messageArray[counter];
    let positionInAlphabet = alphabet.indexOf(characterToEncode);
    positionInAlphabet = (positionInAlphabet + shift) % 26;
    messageArray[counter] = alphabet[positionInAlphabet];

    counter++;
  } while (counter < message.length);

  message = messageArray.join("");

  const outputElement = document.getElementById("output") as HTMLElement;
  outputElement.textContent = message;
}

function decodeText(): void {
  let message: string = messageElement.value;
  const shift: number = Number(shiftElement.value);

  let messageArray: string[] = message.toUpperCase().split("");
  let counter: number = 0;

  do {
    const characterToEncode = messageArray[counter];
    let positionInAlphabet = alphabet.indexOf(characterToEncode);
    positionInAlphabet = positionInAlphabet - shift;
    positionInAlphabet =
      positionInAlphabet < 0 ? positionInAlphabet + 26 : positionInAlphabet;
    messageArray[counter] = alphabet[positionInAlphabet];

    counter++;
  } while (counter < message.length);

  message = messageArray.join("");

  const outputElement = document.getElementById("output") as HTMLElement;
  outputElement.textContent = message;
}

const encodeBtn = document.getElementById("encode") as HTMLButtonElement;
const decodeBtn = document.getElementById("decode") as HTMLButtonElement;

encodeBtn.addEventListener("click", encodeText);
decodeBtn.addEventListener("click", decodeText);
