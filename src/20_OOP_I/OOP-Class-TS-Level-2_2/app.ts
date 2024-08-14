import Car from "../classes/Car"
import Driver from "../classes/Driver";

const mcLaren:Car = new Car("McLaren", 1997, 378);
const mercedes:Car = new Car("Mercedes",1993, 250);
const ferrari:Car = new Car("Ferrari",2008, 312);

const lh44 = new Driver("Lewis", "Hamilton", 39, mercedes)
const gr63 = new Driver("George", "Russel", 26, mercedes)
const cs55 = new Driver("Carlos", "Sainz", 30, ferrari)
const cl16 = new Driver("Charles", "Leclerc", 27, ferrari)
const ln04 = new Driver("Lando", "Norris", 25, mcLaren)
const op81 = new Driver("Oscar", "Piastri", 23, mcLaren)

console.log(lh44)
console.log(gr63)
console.log(cs55)
console.log(cl16)
console.log(ln04)
console.log(op81)
