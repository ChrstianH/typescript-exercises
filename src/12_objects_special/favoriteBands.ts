const favoriteBands = new Map<string, string[]>();

favoriteBands.set("The Beatles", [
  "John Lennon",
  "Paul McCartney",
  "George Harrison",
  "Ringo Starr",
]);
favoriteBands.set("Queen", [
  "Freddie Mercury",
  "Brian May",
  "Roger Taylor",
  "John Deacon",
]);
favoriteBands.set("Kiss", [
  "Gene Simmons",
  "Paul Stanley",
  "Ace Frehley",
  "Peter Criss",
]);
favoriteBands.set("NWA", ["Ice Cube", "Dr. Dre", "Eazy-E", "MC Ren"]);
favoriteBands.set("Kraftwerk", [
  "Ralf Hütter",
  "Florian Schneider",
  "Karl Bartos",
  "Wolfgang Flür",
]);
favoriteBands.set("Pink Floyd", [
  "Roger Waters",
  "David Gilmour",
  "Nick Mason",
  "Richard Wright",
]);
favoriteBands.set("Metallica", [
  "James Hetfield",
  "Lars Ulrich",
  "Kirk Hammett",
  "Robert Trujillo",
]);
favoriteBands.set("The Rolling Stones", [
  "Mick Jagger",
  "Keith Richards",
  "Charlie Watts",
  "Ronnie Wood",
]);
favoriteBands.set("U2", [
  "Bono",
  "The Edge",
  "Adam Clayton",
  "Larry Mullen Jr.",
]);

console.log(favoriteBands.size);

favoriteBands.set("Hocico", ["Erk Aicrag", "Racso Agroyam"]);

console.log(favoriteBands.size);

const band = favoriteBands.get("Kraftwerk")!;
console.log(band.reverse()[0]);
