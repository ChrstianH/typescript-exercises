import Person from "../classes/Person";
import SchoolClass from "../classes/SchoolClass";

const spanishClass = new SchoolClass(1, "Spanish 2");

const names: string[][] = [
  ["Piaras Luis", "MacCormaic"],
  ["Liùsaidh Herbert", "Sauer"],
  ["Fermín Wilhelm", "Nakano"],
  ["Margarita Stuart", "Sala"],
  ["Cayetana Deysi", "Sweeney"],
  ["Hilda Shichirou", "León"],
  ["Hirohito Artur", "Grimm"],
  ["Tanguy Gastón", "Vonnegut"],
  ["Blaise Ilona", "Rodríguez"],
  ["Pascale Lassi", "Expósito"],
];
names.forEach((name: string[]) => {
  const person: Person = new Person(
    spanishClass._people.length + 1,
    name[0],
    name[1],
    new Date(2004, 4, 25)
  );
  spanishClass._people.push(person);
});

console.log(spanishClass._people);
