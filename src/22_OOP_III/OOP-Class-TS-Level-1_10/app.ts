import Beverage from "../classes/Beverage";
import Coffee from "../classes/Coffee";
import Tea from "../classes/Tea";
import Flavour from "./types/flavour";
import Type from "./types/type";

const beverage:Beverage = new Beverage("Coke Zero", 1.95);

const coffee:Coffee = new Coffee("Small Coffee", 2.40, Type.Americano);

const tea:Tea = new Tea("Tea", 2.00, Flavour.Chai)

console.log(beverage);
console.log(coffee);
console.log(tea);
