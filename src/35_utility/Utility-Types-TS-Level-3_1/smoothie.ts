interface ISmoothie {
  name: string;
  ingredients: string[];
  size: Size;
  price: number;
}

enum Size {
  small,
  medium,
  large,
  xlarge,
}

const customizeSmoothie = (
  basicSmoothie: ISmoothie,
  customizedSmoothie: Partial<ISmoothie>
): ISmoothie => {
  const smoothie: ISmoothie = basicSmoothie;

  if (customizedSmoothie.name) {
    smoothie.name = customizedSmoothie.name;
  }
  if (customizedSmoothie.ingredients) {
    smoothie.ingredients = customizedSmoothie.ingredients;
  }
  if (customizedSmoothie.size) {
    smoothie.size = customizedSmoothie.size;
  }
  if (customizedSmoothie.price) {
    smoothie.price = customizedSmoothie.price;
  }

  return smoothie;
};

const smoothie1 = {
  name: "Beeren-Smoothie",
  ingredients: ["Heidelbeeren", "Himbeeren", "Honig", "Naturjoghurt"],
  size: Size.medium,
  price: 5,
};
const smoothie2: Partial<ISmoothie> = {
  name: "Erdbeer-Bananen-Smoothie",
  ingredients: [
    "Erdbeeren",
    "Bananen",
    "Haferflocken",
    "Naturjoghurt",
    "Milch",
    "Honig",
  ],
  size: Size.medium,
  price: 5,
};

const customizedSmoothie = customizeSmoothie(smoothie1, smoothie2);
console.log(customizedSmoothie);
