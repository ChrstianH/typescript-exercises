// String-Methods-TS-Level-1_1

let firstName: string = "Christian";
let lastName: string = "Henschel";

console.log(firstName.length);
console.log(lastName.length);

const fullName: string = firstName.concat(lastName);
console.log(fullName.length);

// String-Methods-TS-Level-1_2

const earthQuote: string =
  "How inappropriate to call this planet Earth, when clearly it is Ocean.";

const positionOf_h: number = earthQuote.indexOf("h");
const positionOf_Earth: number = earthQuote.indexOf("Earth");
const positionOf_Moon: number = earthQuote.indexOf("Moon");
console.log(positionOf_h);
console.log(positionOf_Earth);
console.log(positionOf_Moon);

// String-Methods-TS-Level-1_3

let oceanQuote: string =
  "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.";

const searchSemicolon: number = oceanQuote.search(";");
const searchGreen: number = oceanQuote.search("green");
const searchBlue: number = oceanQuote.search("blue");
console.log(searchSemicolon);
console.log(searchGreen);
console.log(searchBlue);
