const oldHollywoodActors: string[] = [
  "Marlon Brando",
  "Audrey Hepburn",
  "Elizabeth Taylor",
  "Cary Grant",
  "Paul Newman",
  "Doris Day",
];
console.log(oldHollywoodActors);

const actorsReference: string[] = oldHollywoodActors;
oldHollywoodActors.push("Marilyn Monroe");

console.log(oldHollywoodActors);
console.log(actorsReference);

const actorsCopyConcat = oldHollywoodActors.concat();
console.log("actorsCopyConcat:", actorsCopyConcat);
actorsCopyConcat.unshift("Christopher Lee");
console.log("actorsCopyConcat:", actorsCopyConcat);

const actorsCopySlice = oldHollywoodActors.slice();
console.log("actorsCopySlice:", actorsCopySlice);
actorsCopySlice.unshift("Alec Guinness");
console.log("actorsCopySlice:", actorsCopySlice);

const actorsCopySpread = [...oldHollywoodActors];
console.log("actorsCopySpread:", actorsCopySpread);
actorsCopySpread.push("Will Smith");
console.log("actorsCopySpread:", actorsCopySpread);
