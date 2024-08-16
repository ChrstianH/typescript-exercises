import Car from "../classes/Car";
import Driver from "../classes/Driver";
import CarType from "../types/CarType";

const mcLaren: Car = new Car("McLaren", 1997, 168, CarType.Convertible);
const mercedes: Car = new Car("Mercedes", 1993, 50, CarType.Coupe);
const ferrari: Car = new Car("Ferrari", 2008, 112, CarType.Sedan);

const lh44 = new Driver("Lewis", "Hamilton", 39, mercedes, 2001);
const gr63 = new Driver("George", "Russel", 26, mercedes, 2002);
const cs55 = new Driver("Carlos", "Sainz", 30, ferrari, 2003);
const cl16 = new Driver("Charles", "Leclerc", 27, ferrari, 2004);
const ln04 = new Driver("Lando", "Norris", 25, mcLaren, 2005);
const op81 = new Driver("Oscar", "Piastri", 23, mcLaren, 2006);

mcLaren.getSpeedInfo();
mercedes.getSpeedInfo();
ferrari.getSpeedInfo();

console.log(lh44.getCarType());
console.log(gr63.getCarType());
console.log(cs55.getCarType());
console.log(cl16.getCarType());
console.log(ln04.getCarType());
console.log(op81.getCarType());
