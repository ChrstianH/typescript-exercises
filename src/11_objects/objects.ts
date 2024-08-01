// Objekte-TS-Level-1_3

type Apple = {
  color: string;
  size: string;
  isSweet: boolean;
};

let redApple: Apple = { color: "red", size: "big", isSweet: true };
let greenApple: Apple = { color: "green", size: "small", isSweet: false };
let yellowApple: Apple = { color: "yellow", size: "big", isSweet: true };
let apples: Apple[] = [redApple, greenApple, yellowApple];

for (let apple of apples) {
  console.log(apple.size);
}

apples.forEach((apple: Apple) => console.log(apple.color));

console.log(apples.length);

let pinkApple: Apple = { color: "pink", size: "small", isSweet: true };
apples.push(pinkApple);

console.log(apples);

// Objekte-TS-Level-1_4

type Pet = {
  tiertyp: string;
  namen: string[];
};

let unsereHaustiere: Pet[] = [
  {
    tiertyp: "Katze",
    namen: ["Gipsy", "Nala", "Dinky"],
  },
  {
    tiertyp: "Hunde",
    namen: ["Knöpfchen", "Pinselchen", "Droopy"],
  },
];

console.log(unsereHaustiere[0].namen[1]);
console.log(unsereHaustiere[1].namen[2]);

let dogs = unsereHaustiere.find(
  (haustier: Pet) => haustier.tiertyp === "Hunde"
)!;

dogs.namen.forEach((name) => console.log(name));

let newNames = dogs.namen.map((name: string) =>
  name === "Droopy" ? (name = "Snoopy") : name
);
dogs.namen = [...newNames];

let cats = unsereHaustiere.find(
  (haustier: Pet) => haustier.tiertyp === "Katze"
)!;

newNames = cats.namen.map((name: string) =>
  name === "Dinky" ? (name = "Pinky") : name
);
cats.namen = [...newNames];

const budgies: Pet = {
  tiertyp: "Wellensittich",
  namen: ["Felix", "Oscar", "Paul", "Henry"],
};

unsereHaustiere.push(budgies);

console.log(unsereHaustiere);

// Objekte-TS-Level-1_5

type Lager = {
  schreibtisch: {
    schublade: string;
  };
  schrank: {
    "Obere Schublade": {
      Ordner1: string;
      Ordner2: string;
    };
    "Untere Schublade": string;
  };
};

let unserLager: Lager = {
  schreibtisch: {
    schublade: "Hefter",
  },
  schrank: {
    "Obere Schublade": {
      Ordner1: "Dokumente",
      Ordner2: "Geheimnisse",
    },
    "Untere Schublade": "Cola",
  },
};

console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schrank["Untere Schublade"]);
console.log(unserLager.schreibtisch.schublade);

// Objekte-TS-Level-1_6

type Musik = {
  kunstler: string;
  title: string;
  release_jahr: number;
  formate: string[];
  gold: boolean;
};

let meineTopVier: Musik[] = [
  {
    kunstler: "The Beatles",
    title: "Abbey Road",
    release_jahr: 1969,
    formate: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
  {
    kunstler: "Pink Floyd",
    title: "Dark Side of the Moon",
    release_jahr: 1978,
    formate: ["CS", "CD", "LP", "Download"],
    gold: true,
  },
  {
    kunstler: "Led Zeppelin",
    title: "Led Zeppelin IV",
    release_jahr: 1971,
    formate: ["CS", "LP", "Download"],
    gold: true,
  },
  {
    kunstler: "Metallica",
    title: "Kill ’Em All und Ride the Lightning",
    release_jahr: 1983,
    formate: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
];

console.log(meineTopVier[0].kunstler);
console.log(meineTopVier[1].formate[3]);
console.log(meineTopVier[1].gold);
const year1 = meineTopVier[2].release_jahr;
const year2 = meineTopVier[3].release_jahr;
console.log(`${year1} und ${year2}`);
console.log(meineTopVier[3].formate[2]);
console.log(meineTopVier[3].title.split(" ")[4]);

const newMusic: Musik = {
  kunstler: "Hocico",
  title: "Sangre Hirviente",
  release_jahr: 1999,
  formate: ["CD"],
  gold: false,
};

meineTopVier.push(newMusic);
console.log(meineTopVier);

// Objekte-TS-Level-2_2

type PeriodActive = {
  start: number;
  end: number | string;
  extra?: number;
};

type Singer = {
  name: string;
  country: string;
  period_active: PeriodActive;
  genre: string;
};

const singers: Singer[] = [
  {
    name: "The Beatles",
    country: "United Kingdom",
    period_active: { start: 1960, end: 1970 },
    genre: "Rock / Pop",
  },
  {
    name: "Elvis Presley",
    country: "United States",
    period_active: { start: 1954, end: 1977 },
    genre: "Rock and roll",
  },
  {
    name: "Michael Jackson",
    country: "United States",
    period_active: { start: 1964, end: 2009 },
    genre: "Pop / Rock / Dance / Soul / R&B",
  },
  {
    name: "Elton John",
    country: "United Kingdom",
    period_active: { start: 1964, end: "present" },
    genre: "Pop / Rock",
  },
  {
    name: "Madonna",
    country: "United States",
    period_active: { start: 1979, end: "present" },
    genre: "Pop / Dance / Electronica",
  },
  {
    name: "Led Zeppelin",
    country: "United Kingdom",
    period_active: { start: 1968, end: 1980 },
    genre: "Hard rock / Blues rock / Folk rock",
  },
  {
    name: "Rihanna",
    country: "United States",
    period_active: { start: 2005, end: "present" },
    genre: "R&B / Pop / Dance / Hip-hop",
  },
  {
    name: "Pink Floyd",
    country: "United Kingdom",
    period_active: { start: 1965, end: 1996, extra: 2014 },
    genre: "Progressive rock / Psychedelic rock",
  },
];

const copySingers1 = [...singers];
const singersOrderedByName = copySingers1.sort(
  (singer1: Singer, singer2: Singer) => singer1.name.localeCompare(singer2.name)
);
console.log(singersOrderedByName);

const copySingers2 = [...singers];
const singersOrderedByActivity = copySingers2.sort(
  (singer1: Singer, singer2: Singer) =>
    singer1.period_active.start - singer2.period_active.start
);
console.log(singersOrderedByActivity);
