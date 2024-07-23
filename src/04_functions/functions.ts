// ** Functions-TS-Grundlagen-Level-1_4 **

function showHero(
  heroName: string,
  heroPower: string,
  heroEnemy: string
): void {
  let nameOutput: string;
  let powerOutput: string;
  let enemyOutput: string;

  nameOutput = `Mein:e Lieblingsheld:in ist: ${heroName}. `;
  powerOutput = `Er/Sie hat die Fähigkeit: ${heroPower}. `;
  enemyOutput = `Sein/Ihr größte/r Gegner:in ist: ${heroEnemy}.`;

  console.log(nameOutput + powerOutput + enemyOutput);
}

showHero("Luke Skywalker", "die Macht", "Darth Vader");

// ** Functions-TS-Grundlagen-Level-1_6 **

function returnOne() {
  return 1;
}
let x: number = 1;
let y = returnOne();

if (x === y) {
  console.log("Wird das gedruckt?");
}

// ** Functions-TS-Grundlagen-Level-1_7 **

function multiplyBy2(zahl: number) {
  return zahl * 2;
}

const result = multiplyBy2(8);
console.log(result);

// ** Functions-TS-Grundlagen-Level-1_8 **

function myAge(birthYear: number) {
  return new Date().getFullYear() - birthYear;
}

console.log(myAge(1976));

function diffAge(birthYear1: number, birthYear2: number) {
  const altersDifferenz =
    birthYear1 < birthYear2 ? birthYear2 - birthYear1 : birthYear1 - birthYear2;
  return altersDifferenz;
}

const ageDiff = diffAge(1976, 1987);
console.log(ageDiff);

// ** Functions-TS-Grundlagen-Level-1_9 **

function textAboutMe(
  vorname: string,
  nachname: string,
  geburtsort: string,
  alter: number,
  wohnort: string
): void {
  console.log(
    "Mein Name ist " +
      vorname +
      " " +
      nachname +
      ". Ich bin in " +
      geburtsort +
      " geboren. Ich lerne bei SuperCode. Ich bin " +
      alter +
      " Jahre alt. Ich wohne in " +
      wohnort +
      "."
  );
}

textAboutMe("Christian", "Henschel", "Schönebeck", 48, "Dresden");
