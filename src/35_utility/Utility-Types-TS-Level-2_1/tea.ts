interface ITea {
  name: string;
  type: string;
  temperature: number;
  brewingTime: number;
}

type PartialTea = Partial<ITea>;

function prepareTea(tea: PartialTea) {
  if (!tea.name && !tea.brewingTime) {
    console.error("Tea name and/or brewingTime missing.");
  } else {
    console.log(`${tea.name} will be ready in ${tea.brewingTime}`);
  }
}

const greenTea: ITea = {
  name: "Sencha",
  type: "Green tea",
  temperature: 75,
  brewingTime: 5,
};
prepareTea(greenTea);

const blackTea: PartialTea = {
  name: "Earl Grey",
  type: "Black tea",
  brewingTime: 3,
};
prepareTea(blackTea);

const errorTea: PartialTea = { temperature: 100 };
prepareTea(errorTea);
