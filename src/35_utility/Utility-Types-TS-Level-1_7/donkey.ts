interface IDonkey {
  name: string;
  age: number;
  fluffyness: number;
  favoriteFood: string;
}

enum Donkey {
  Daisy,
  Gus,
  Rosie,
  Coco,
  Jasper,
}

const donkeyRecord: Record<Donkey, IDonkey> = {
  0: { name: "Daisy", age: 4, fluffyness: 9, favoriteFood: "Hay" },
  1: { name: "Gus", age: 5, fluffyness: 7, favoriteFood: "Straw" },
  2: { name: "Rosie", age: 6, fluffyness: 5, favoriteFood: "Succulents" },
  3: { name: "Coco", age: 4, fluffyness: 6, favoriteFood: "Chaff" },
  4: { name: "Jasper", age: 3, fluffyness: 8, favoriteFood: "Hay" },
};

console.log(donkeyRecord);
