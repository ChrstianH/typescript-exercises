export type Alcohol = { name: string; percentage: number; type: string };

export type Mixer = { name: string; type: string; carbonated: boolean };

export type Cocktail = Alcohol & Mixer;

const mojito: Cocktail = {
  name: "Mojito",
  percentage: 15,
  type: "Rum Cocktail",
  carbonated: true,
};

console.log(mojito);
