import { getEncodedText, getDecodedText } from "./utils/encryption";

const messageElement = document.getElementById("message") as HTMLInputElement;
const shiftElement = document.getElementById("shift") as HTMLInputElement;

function encodeText(): void {
  let message: string = messageElement.value;
  const shift: number = Number(shiftElement.value);

  const newMessage: string = getEncodedText(message, shift);

  const outputElement = document.getElementById("output") as HTMLElement;
  outputElement.textContent = newMessage;
}

function decodeText(): void {
  let message: string = messageElement.value;
  const shift: number = Number(shiftElement.value);

  const newMessage: string = getDecodedText(message, shift);

  const outputElement = document.getElementById("output") as HTMLElement;
  outputElement.textContent = newMessage;
}

const encodeBtn = document.getElementById("encode") as HTMLButtonElement;
const decodeBtn = document.getElementById("decode") as HTMLButtonElement;

encodeBtn.addEventListener("click", encodeText);
decodeBtn.addEventListener("click", decodeText);
