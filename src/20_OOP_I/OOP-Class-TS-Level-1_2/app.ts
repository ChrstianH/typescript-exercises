import SchoolClass from "../classes/SchoolClass";

const spanishClass = new SchoolClass(1, "Spanish 2");

const informaticsClass = new SchoolClass(2, "Informatics");
informaticsClass._name = "Business law";

const statisticsClass = new SchoolClass(3, "Statistics");
statisticsClass._name = "Mathematics";

console.log(spanishClass);
console.log(informaticsClass);
console.log(statisticsClass);
