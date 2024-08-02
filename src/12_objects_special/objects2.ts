// Tuple-TS-Level-1_1

const starWarsActor1: [string, string] = ["Luke Skywalker", "Mark Hamill"];
const starWarsActor2: [string, string] = ["Darth Vader", "James Earl Jones"];
const starWarsActor3: [string, string] = ["Yoda", "Frank Oz"];
const starWarsActor4: [string, string] = ["Han Solo", "Harrison Ford"];
const starWarsActor5: [string, string] = ["Princess Leia", "Carrie Fisher"];

const starWarsActor = [
  starWarsActor1,
  starWarsActor2,
  starWarsActor3,
  starWarsActor4,
  starWarsActor5,
];

starWarsActor.forEach((tuple) => {
  console.log(`${tuple[1]} spielt ${tuple[0]}`);
});

// Enum-TS-Level-2_1

enum HtmlError {
  OK = 200,
  Redirect = 300,
  BadRequest = 400,
  InternalServerError = 500,
}

function showHtmlError(): void {
  let error = Math.floor(Math.random() * 6);
  switch (error) {
    case 0:
    case 1:
    case 2:
      console.log(HtmlError[HtmlError.OK]);
      break;
    case 3:
      console.log(HtmlError[HtmlError.Redirect]);
      break;
    case 4:
      console.log(HtmlError[HtmlError.BadRequest]);
      break;

    case 5:
      console.log(HtmlError[HtmlError.InternalServerError]);
      break;
  }
}

showHtmlError();

// Enum-TS-Level-2_2

type Color = {
  code: string;
};

enum ClothingColor {
  Gelb = "#ffff00",
  Orange = "#ff8000",
  Pink = "#fe2e9a",
  Blau = "#0000ff",
  Lila = "#6a0888",
  Grau = "#808080",
}

const allColors: Color[] = [];
for (let color in ClothingColor) {
  allColors.push(color);
}
console.log(allColors);

allColors.forEach((color) => {
  const button = document.createElement("button");
  button.style.backgroundColor = ClothingColor[color];
  button.textContent = color;
  document.body.appendChild(button);
});

// Set-TS-Level-1_1

const starWarsCharacters = new Set<string>();
starWarsCharacters
  .add("Luke Skywalker")
  .add("Darth Vader")
  .add("Obi Wan Kenobi");
console.log(starWarsCharacters);
starWarsCharacters.add("Leia Organa");
console.log(starWarsCharacters);
starWarsCharacters.add("Leia Organa");
console.log(starWarsCharacters);
