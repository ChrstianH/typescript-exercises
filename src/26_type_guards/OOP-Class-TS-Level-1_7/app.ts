import InstanceChecker from "./classes/InstanceChecker";
import Unicorn from "./classes/Unicorn";

const instanceCheck = InstanceChecker.isUnicorn({});
console.log(instanceCheck);

const myUnicorn = new Unicorn("Silberschweif", [
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "Blue",
  "Indigo",
  "Violet",
]);

console.log(InstanceChecker.isUnicorn(myUnicorn));
