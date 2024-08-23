import Car from "./classes/Car";
import ElectricCar from "./classes/ElectricCar";
import InstanceChecker from "./classes/InstanceChecker";

const car = new Car();
const ecar = new ElectricCar();

console.log(InstanceChecker.isCar(car));
console.log(InstanceChecker.isCar(ecar));
console.log(InstanceChecker.isElectricCar(car));
console.log(InstanceChecker.isElectricCar(ecar));
