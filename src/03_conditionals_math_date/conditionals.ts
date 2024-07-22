// ** Conditionals-Level-2_1 **

const johnGroesse = 170;
const johnAlter = 22;

const meikeGroesse = 168;
const meikeAlter = 34;

const johnScore = johnGroesse * 5 + johnAlter;
const meikeScore = meikeGroesse * 5 + meikeAlter;

console.log("Johns Score: ", johnScore);
console.log("Meikes Score: ", meikeScore);

if (johnScore > meikeScore) {
  console.log(`John gewinnt mit ${johnScore} Punkten.`);
} else if (johnScore < meikeScore) {
  console.log(`Meike gewinnt mit ${meikeScore} Punkten.`);
} else {
  console.log("Das Spiel endet Unentschieden.");
}

// ** Conditionals-TS-Level-2_4 **

const randomNumber1: number = Math.ceil(Math.random() * 77);
const randomNumber2: number = Math.ceil(Math.random() * 77);

if (randomNumber1 > randomNumber2) {
  console.log("Erste Zahl größer");
} else if (randomNumber1 < randomNumber2) {
  console.log("Zweite Zahl größer");
} else {
  console.log("So ein Zufall!");
}

switch (true) {
  case randomNumber1 > randomNumber2:
    console.log("Erste Zahl größer");
    break;
  case randomNumber1 < randomNumber2:
    console.log("Zweite Zahl größer");
    break;
  default:
    console.log("So ein Zufall!");
    break;
}

// ** Conditionals-TS-Level-1_5 **

let weekdayAsNumber: number = 0;
let weekdayAsString: string;

const userInput: string | null = window.prompt(
  "Please insert a number from 1 to 7"
);
if (userInput) {
  weekdayAsNumber = parseInt(userInput);
}
switch (weekdayAsNumber) {
  case 1:
    weekdayAsString = "Montag";
    break;
  case 2:
    weekdayAsString = "Dienstag";
    break;
  case 3:
    weekdayAsString = "Mittwoch";
    break;
  case 4:
    weekdayAsString = "Donnerstag";
    break;
  case 5:
    weekdayAsString = "Freitag";
    break;
  case 6:
    weekdayAsString = "Samstag";
    break;
  case 7:
    weekdayAsString = "Sonntag";
    break;
  default:
    weekdayAsString = "Weekday must be between 1 and 7";
    break;
}
console.log(weekdayAsString);

// ** Conditionals-TS-Level-2_8 **

const schoolGrade: number = Math.ceil(Math.random() * 10);

switch (schoolGrade) {
  case 1:
    console.log("sehr gut");
    break;
  case 2:
    console.log("gut");
    break;
  case 3:
    console.log("befriedigend");
    break;
  case 4:
    console.log("ausreichend");
    break;
  case 5:
    console.log("mangelhaft");
    break;
  case 6:
    console.log("ungenügend");
    break;
  default:
    console.log("keine gültige Schulnote");
}

// ** Conditionals-TS-Level-3_1 **

const salesMonth: number = Math.ceil(Math.random() * 12);
let outputText: string = "Im ";
switch (salesMonth) {
  case 1:
  case 2:
  case 3:
    outputText += "1. Quartal";
    break;
  case 4:
  case 5:
  case 6:
    outputText += "2. Quartal";
    break;
  case 7:
  case 8:
  case 9:
    outputText += "3. Quartal";
    break;
  case 10:
  case 11:
  case 12:
    outputText += "4. Quartal";
    break;
  default:
    break;
}

outputText += " war der Umsatz ";

const totalSales: number = Math.ceil(Math.random() * 9000) + 1000;
switch (true) {
  case totalSales >= 1000 && totalSales <= 2500:
    outputText += "schlecht";
    break;
  case totalSales >= 2501 && totalSales <= 5000:
    outputText += "mittelmäßig";
    break;
  case totalSales >= 5001 && totalSales <= 7500:
    outputText += "hoch";
    break;
  case totalSales >= 7501 && totalSales <= 10000:
    outputText += "unglaublich";
    break;
  default:
    break;
}
console.log(outputText);

// ** Ternary-Operator-TS-Level-2_2 **
const isOnline: boolean = Math.random() >= 0.5;
const isPremiumUser: boolean = Math.random() >= 0.5;
const isAdult: boolean = Math.random() >= 0.5;

console.log(isOnline ? "online" : "offline");
const monthlyFee: number = isPremiumUser ? 19.99 : 12.99;
console.log({ monthlyFee });
window.alert(isAdult ? "Willkommen" : "Keine Berechtigung");

const randomAge: number = Math.ceil(Math.random() * 120);
const randomSalary: number = Math.ceil(Math.random() * 15000);

const isMiddleAged: boolean = randomAge >= 40 && randomAge <= 65;
console.log(isMiddleAged);
console.log(
  randomSalary > 10000
    ? "You are rich"
    : randomSalary > 1500
    ? "Not too bad"
    : "Not that much"
);
