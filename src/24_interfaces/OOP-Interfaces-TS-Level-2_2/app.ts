import Manager from "./classes/Manager";
import Subordinate from "./classes/Subordinate";
import Trainee from "./classes/Trainee";

const subordinate1: Subordinate = new Subordinate("Sub1", 20, "pos1");
subordinate1._startDate = new Date("2023-07-08");
const subordinate2: Subordinate = new Subordinate("Sub2", 23, "pos2");
subordinate2._startDate = new Date("2021-09-29");
const subordinate3: Subordinate = new Subordinate("Sub3", 27, "pos3");
subordinate3._startDate = new Date("2022-08-30");

const manager: Manager = new Manager("Manager", 45, "Board");
manager._startDate = new Date("2002-11-23");

manager.addSubordinate(subordinate1);
manager.addSubordinate(subordinate2);
manager.addSubordinate(subordinate3);

const trainee1: Trainee = new Trainee("Trainee1", 18);
trainee1._startDate = new Date("2024-05-12");
const trainee2: Trainee = new Trainee("Trainee2", 19);
trainee2._startDate = new Date("2024-03-24");

manager.addSubordinate(trainee1);
manager.addSubordinate(trainee2);

console.table(manager);
console.table(subordinate1);
console.table(subordinate2);
console.table(subordinate3);
console.table(trainee1);
console.table(trainee2);

console.log(manager.getYearsOfService());
console.log(subordinate1.getYearsOfService());
console.log(subordinate2.getYearsOfService());
console.log(subordinate3.getYearsOfService());
console.log(trainee1.getYearsOfService());
console.log(trainee2.getYearsOfService());
