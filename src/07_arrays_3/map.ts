// Array-TS-Iteration-Level-1_2

const drinks = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta",
];

function drinkToUpperCase(drink: string) {
  return drink.toUpperCase();
}
const upperDrinks = drinks.map(drinkToUpperCase);
console.log(upperDrinks);

const drinkTexts = drinks.map((drink: string) => {
  return `I like ${drink}`;
});
console.log(drinkTexts);

// Array-TS-Iteration-Level-1_4

let fahrenheit: number[] = [0, 32, 45, 50, 75, 80, 99, 120];

const celsius: number[] = fahrenheit.map((temp) =>
  Math.round((temp - 32) / 1.8)
);
console.log(celsius);

// Array-TS-Iteration-Level-1_5

let checkNumber: number[] = [
  18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30,
  74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78,
];

const numbersChecked: number[] = checkNumber.map((number: number) => {
  if (number % 3 == 0) {
    return 100 + number;
  } else {
    return number;
  }
});
console.log(numbersChecked);

// Array-TS-Iteration-Level-1_6

let album: string[] = [
  "holidays.jpg",
  "Restaurant.jpg",
  "desktop",
  "rooms.GIF",
  "DOGATBEACH.jpg",
];

const filenames = album.map((image: string) => {
  if (image.includes(".")) {
    return image.split(".")[0].toLowerCase();
  } else return "invalid";
});
console.log(filenames);

// Array-TS-Iteration-Level-1_7

let fruits: string[] = ["🍇", "🍌", "🍒", "🍎"];

const fruchtsaefte = fruits.map((fruit: string) => fruit + "🥛");
console.log(fruchtsaefte);
