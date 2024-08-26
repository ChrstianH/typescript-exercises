import { Alcohol, Cocktail, Mixer } from "./alcohol";

const mixCocktail = (alcohol: Alcohol, mixer: Mixer): Cocktail => {
  const cocktail: Cocktail = {
    name: alcohol.name + " " + mixer.name,
    type: alcohol.type,
    percentage: alcohol.percentage,
    carbonated: mixer.carbonated,
  };
  return cocktail;
};

const gin: Alcohol = { name: "Gin", percentage: 43, type: "Gin" };
const whiskey: Alcohol = { name: "Whiskey", percentage: 45, type: "Whiskey" };

const tonic: Mixer = { name: "Tonic", type: "Tonic Water", carbonated: true };
const cola: Mixer = { name: "Cola", type: "Cola", carbonated: true };

console.log(mixCocktail(gin, tonic));
console.log(mixCocktail(gin, cola));
console.log(mixCocktail(whiskey, tonic));
console.log(mixCocktail(whiskey, cola));
