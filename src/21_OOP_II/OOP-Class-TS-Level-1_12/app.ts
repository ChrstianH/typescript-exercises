import IceCreamFlavour from "../classes/IceCreamFlavor";

const vanilla = new IceCreamFlavour();
vanilla._name = "Vanilla";
vanilla._price = 1.6;
vanilla._isPopular = true;

const saltyCaramel = new IceCreamFlavour();
saltyCaramel._name = "Salty Caramel";
saltyCaramel._price = 1.4;
saltyCaramel._isPopular = false;

const strawberry = new IceCreamFlavour();
strawberry._name = "Strawberry";
strawberry._price = 1.5;
strawberry._isPopular = true;

const stracciatella = new IceCreamFlavour();
stracciatella._name = "Stracciatella";
stracciatella._price = 1.7;
stracciatella._isPopular = true;
stracciatella._description = "Milk ice cream with bitter chocolate chips";

const iceCreamFlavors: IceCreamFlavour[] = [
  vanilla,
  saltyCaramel,
  strawberry,
  stracciatella,
];

const popularFlavors: IceCreamFlavour[] = iceCreamFlavors.filter(
  (flavor: IceCreamFlavour) => flavor._isPopular
);
console.log(popularFlavors);

console.log(vanilla.getTotalPrice(2).toFixed(2));
console.log(saltyCaramel.getTotalPrice(3).toFixed(2));
console.log(strawberry.getTotalPrice(4).toFixed(2));
console.log(stracciatella.getTotalPrice(5).toFixed(2));

vanilla.printInfo();
saltyCaramel.printInfo();
strawberry.printInfo();
stracciatella.printInfo();

console.log(vanilla.getLengthOfDescription());
console.log(saltyCaramel.getLengthOfDescription());
console.log(strawberry.getLengthOfDescription());
console.log(stracciatella.getLengthOfDescription());
