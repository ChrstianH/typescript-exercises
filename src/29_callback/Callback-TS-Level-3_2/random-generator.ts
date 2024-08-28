function randomNumber(): string {
  const randomNumber = Math.random();
  return randomNumber.toString();
}
function randomText(): string {
  const texts = [
    "The vibrant colors of the sunset painted the sky in shades of orange and pink.",
    "Advances in artificial intelligence are transforming the way we interact with machines.",
    "Exploring ancient ruins can provide a fascinating glimpse into the history of a civilization.",
    "Regular exercise and a balanced diet are essential for maintaining overall well-being.",
    "The intricate details of the painting reveal the artist's unique perspective on life.",
  ];
  const textIndex = Math.floor(Math.random() * texts.length);
  return texts[textIndex];
}
function randomBoolean(): string {
  const randomBoolean = Math.random() >= 0.5;
  return randomBoolean.toString();
}
function randomEmoji(): string {
  const emojis = [
    "😀",
    "🤣",
    "😅",
    "😊",
    "😍",
    "😗",
    "☺",
    "🤩",
    "😐",
    "🙄",
    "😥",
    "😯",
    "😁",
    "😃",
    "😆",
  ];
  const emojisPos = Math.floor(Math.random() * 15);
  console.log(emojisPos);
  const randomEmoji = emojis[emojisPos];
  console.log(randomEmoji);
  return randomEmoji;
}

const funcArray = [randomNumber, randomText, randomBoolean, randomEmoji];

const headline = document.getElementById("headline") as HTMLHeadElement;
const button = document.getElementById("randomButton") as HTMLButtonElement;
button.addEventListener("click", () => {
  const funcIndex = Math.floor(Math.random() * 4);
  updateHeadline(funcArray[funcIndex]);
});

function updateHeadline(callback: () => string) {
  const randomContent: string = callback();
  headline.textContent = randomContent;
}
