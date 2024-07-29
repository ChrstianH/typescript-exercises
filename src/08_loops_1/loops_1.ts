// Loops-TS-Level-1_1

for (let i: number = 1; i <= 10; i++) {
  console.log(`Hello World ${i}`);
}

// Loops-TS-Level-1_2

let numbersToTen: number[] = [];
for (let i: number = 0; i <= 10; i++) {
  numbersToTen.push(i);
}
console.log(numbersToTen);

// Loops-TS-Level-1_3

let counter: number = 0;
while (counter < 10) {
  console.log(`Hello World ${counter}`);
  counter++;
}

// Loops-TS-Level-1_4

let friendNames: string[] = [
  "Georg",
  "Anass",
  "Elaine",
  "Hakan",
  "Eric",
  "Kim",
  "Sergio",
];
for (let i: number = 0; i < friendNames.length; i++) {
  console.log(friendNames[i]);
}

for (let friend of friendNames) {
  console.log(friend);
}

// Loops-TS-Level-1_7

let divContainer = document.querySelector(".loopContainer1");
counter = 1;
do {
  let pElement = document.createElement("p");
  pElement.textContent = `The number is ${counter}`;
  divContainer?.appendChild(pElement);
  counter++;
} while (counter <= 5);

// Loops-TS-Level-1_8

divContainer = document.querySelector(".loopContainer2");
let pElement = document.createElement("p");
counter = 2;
do {
  pElement.innerHTML += counter.toString() + "<br>";
  counter += 2;
} while (counter <= 20);
divContainer?.appendChild(pElement);

// Loops-TS-Level-2_1

function createImageNames(): string[] {
  let returnArray: string[] = [];

  for (let i: number = 1; i <= 100; i++) {
    let imageName: string = "image_";
    if (i < 10) {
      imageName += "00";
    } else if (i < 100) {
      imageName += "0";
    }
    imageName += i.toString() + ".jpg";
    returnArray.push(imageName);
  }

  return returnArray;
}

console.log(createImageNames());

// Loops-TS-Level-2_2

const repetitionsElement: any =
  document.getElementById("repetitions") ?? new HTMLElement();
const buttonElement = document.getElementById("doLoops") ?? new HTMLElement();
const pElement2 = document.getElementById("output") ?? new HTMLElement();
buttonElement.addEventListener("click", function (event) {
  event.preventDefault();
  pElement2.textContent = "L";
  let repetitions: number = repetitionsElement.value;
  for (let i: number = 0; i < repetitions; i++) {
    pElement2.textContent += "o";
  }
  pElement2.textContent += "p";
});

// Loops-TS-Level-3_1

let text: string = `I didn't ask for a completely reasonable excuse! I asked you to get busy! But I know you in the future. I cleaned your poop. What are you hacking off? Is it my torso?! 'It is!' My precious torso! Please, Don-Bot… look into your hard drive, and open your mercy file! Shut up and get to the point! I barely knew Philip, but as a clergyman I have no problem telling his most intimate friends all about him. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Moving along… Well, then good news! It's a suppository. I'll get my kit! And when we woke up, we had these bodies. Daddy Bender, we're hungry. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor. Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew. That could be 'my' beautiful soul sitting naked on a couch. If I could just learn to play this stupid thing. Well, thanks to the Internet, I'm now bored with sex. Is there a place on the web that panders to my lust for violence? I was all of history's great robot actors - Acting Unit 0.8; Thespomat; David Duchovny! Bender, I didn't know you liked cooking. That's so cute. Fatal. You don't know how to do any of those. Who are you, my warranty?! Shut up and get to the point! Fry, you can't just sit here in the dark listening to classical music. That's not soon enough! And why did 'I' have to take a cab? Bender?! You stole the atom. You know, I was God once. For the last time, I don't like lilacs! Your 'first' wife was the one who liked lilacs! And yet you haven't said what I told you to say! How can any of us trust you? Your best is an idiot! I found what I need. And it's not friends, it's things. No! The kind with looting and maybe starting a few fires! When will that be? Ugh, it's filthy! Why not create a National Endowment for Strip Clubs while we're at it? I'm just glad my fat, ugly mama isn't alive to see this day. Why did you bring us here? And until then, I can never die? I'm sure those windmills will keep them cool. You don't know how to do any of those. Fry, you can't just sit here in the dark listening to classical music. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Oh, but you can. But you may have to metaphorically make a deal with the devil. And by "devil", `;

function splitText(text: string): string[] {
  const textArray = text.split("");
  const textInBlocksOfHundred: string[] = [];
  const linesTotal: number = Math.ceil(text.length / 100);
  let lineCounter: number = 1;
  while (textArray.length > 100) {
    textInBlocksOfHundred.push(
      textArray.splice(0, 100).join("") +
        " - " +
        lineCounter.toString() +
        " of " +
        linesTotal.toString()
    );
    lineCounter++;
  }
  textInBlocksOfHundred.push(
    textArray.join("") +
      " - " +
      lineCounter.toString() +
      " of " +
      linesTotal.toString()
  );

  return textInBlocksOfHundred;
}

console.log(splitText(text));

// Loops-TS-Level-3_2

let numbers: number[] = [5, 22, 15, 100, 55];

divContainer = document.querySelector(".loopContainer3");
let pElement3 = document.createElement("p");

pElement3.innerHTML = "";
for(let number of numbers) {
  console.log(number)
    for(let i:number = 2; i <= Math.ceil(number/2); i++) {
      console.log(i)
        if(number % i === 0) {
            pElement3.innerHTML += `${number.toString()} is dividable by ${i.toString()}. The result is ${(number/i).toString()}.`
            pElement3.innerHTML += "<br>"
        }
    }
}
divContainer?.appendChild(pElement3);

