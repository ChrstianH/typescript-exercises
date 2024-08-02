enum PizzaSize {
  Small,
  Medium,
  Large,
  Familie,
}

enum PizzaIngredients {
  Cheese,
  TomatoSauce,
  Onion,
  Salami,
  Jalapenos,
  Garlic,
  Maize,
  Tomatoes,
}

type Pizza = {
  size: PizzaSize;
  ingredients: PizzaIngredients[];
};

const pizzaMargerita: Pizza = {
  size: PizzaSize.Small,
  ingredients: [PizzaIngredients.Cheese, PizzaIngredients.TomatoSauce],
};
console.log(pizzaMargerita);

const pizzaSalami: Pizza = {
  size: PizzaSize.Familie,
  ingredients: [
    PizzaIngredients.Cheese,
    PizzaIngredients.TomatoSauce,
    PizzaIngredients.Salami,
  ],
};
console.log(pizzaSalami);

const pizzaDiavolo: Pizza = {
  size: PizzaSize.Medium,
  ingredients: [
    PizzaIngredients.Cheese,
    PizzaIngredients.TomatoSauce,
    PizzaIngredients.Salami,
    PizzaIngredients.Jalapenos,
  ],
};
console.log(pizzaDiavolo);

const pizzaVegetable: Pizza = {
  size: PizzaSize.Large,
  ingredients: [
    PizzaIngredients.Cheese,
    PizzaIngredients.TomatoSauce,
    PizzaIngredients.Onion,
    PizzaIngredients.Maize,
    PizzaIngredients.Garlic,
  ],
};
console.log(pizzaVegetable);
