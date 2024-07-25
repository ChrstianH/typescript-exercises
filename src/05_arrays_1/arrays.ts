// ** Array-TS-Level-1_1 **

const bucketList: string[] = ["Neuseeland", "Schottland", "Mexiko"];
const luckyNumbers: number[] = [3, 7, 11];
const favoritePeople: string[] = ["Anne", "Chuck", "Norris"];

console.log(bucketList);
console.log(luckyNumbers);
console.log(favoritePeople);

// ** Array-TS-Level-1_2 **

console.log(bucketList[0]);
console.log(bucketList[1]);
console.log(bucketList[2]);
console.log(luckyNumbers[0]);
console.log(luckyNumbers[1]);
console.log(luckyNumbers[2]);
console.log(favoritePeople[0]);
console.log(favoritePeople[1]);
console.log(favoritePeople[2]);

// ** Array-TS-Level-1_3 **

console.log(bucketList.length);
console.log(luckyNumbers.length);
console.log(favoritePeople.length);

// ** Array-TS-Level-1_4 **

console.log(bucketList);
console.log(bucketList.length);
bucketList.push("Island", "Japan");
console.log(bucketList);
console.log(bucketList.length);

// ** Array-TS-Level-1_5 **

console.log(bucketList);
const deletedItem = bucketList.pop();
console.log(`Entfernt: ${deletedItem}`);
console.log(bucketList);
console.log(luckyNumbers);
const deletedNumber = luckyNumbers.pop();
console.log(`Entfernt: ${deletedNumber}`);
console.log(luckyNumbers);
console.log(favoritePeople);
const deletedPerson = favoritePeople.pop();
console.log(`Entfernt: ${deletedPerson}`);
console.log(favoritePeople);

// ** Array-TS-Level-1_6 **

console.log(bucketList);
const shiftedItem = bucketList.shift();
console.log(`Entfernt: ${shiftedItem}`);
console.log(bucketList);
console.log(luckyNumbers);
const shiftedNumber = luckyNumbers.shift();
console.log(`Entfernt: ${shiftedNumber}`);
console.log(luckyNumbers);
console.log(favoritePeople);
const shiftedPerson = favoritePeople.shift();
console.log(`Entfernt: ${shiftedPerson}`);
console.log(favoritePeople);

// ** Array-TS-Level-1_7 **

console.log(bucketList);
console.log(bucketList.length);
bucketList.unshift("Neuseeland", "Japan");
console.log(bucketList);
console.log(bucketList.length);

// ** Array-TS-Level-1_8 **

const lieblingsreiseziele: string[] = [
  "Neuseeland",
  "Schottland",
  "Mexiko",
  "Indien",
  "Dubai",
  "Island",
  "Japan",
];

console.log(lieblingsreiseziele);
const deletedItems = lieblingsreiseziele.slice(3, 5);
console.log(deletedItems);
console.log(lieblingsreiseziele);

// ** Array-TS-Level-1_9 **

const randomNumbers: number[] = [23, 54, 75];
console.log(randomNumbers);
randomNumbers.push(1, 4, 9, 16, 25);
console.log(randomNumbers);
randomNumbers.unshift(36, 49, 64, 81, 100);
console.log(randomNumbers);
randomNumbers.pop();
randomNumbers.pop();
console.log(randomNumbers);
randomNumbers.shift();
randomNumbers.shift();
console.log(randomNumbers);

// ** Array-TS-Level-1_10 **

const futuramaQuote: string =
  "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards.";

const futuramaArray1 = futuramaQuote.split(".");
const futuramaArray2 = futuramaQuote.split(" ");
const futuramaArray3 = futuramaQuote.split("");

console.log(futuramaQuote);
console.log(futuramaArray1);
console.log(futuramaArray2);
console.log(futuramaArray3);
