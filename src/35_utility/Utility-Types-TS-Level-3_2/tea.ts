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

// ----- Utility-Types-TS-Level-3_2 -----

type OmitTea = Omit<ITea, "temperature">;

const darjeeling: OmitTea = {
  name: "Darjeeling",
  type: "Black tea",
  brewingTime: 3,
};
prepareTea(darjeeling);

type PickTea = Pick<ITea, "name" | "brewingTime">;

const macha: PickTea = {
  name: "Macha",
  brewingTime: 4,
};
prepareTea(macha);

type RequredTea = Required<ITea>;

const rooibos: RequredTea = {
  name: "Rooibos tea",
  type: "Rooibos",
  temperature: 90,
  brewingTime: 6,
};
prepareTea(rooibos);

type ReadOnlyTea = Readonly<ITea>;

const assam: ReadOnlyTea = {
  name: "Assam",
  type: "Black tea",
  temperature: 90,
  brewingTime: 5,
};
prepareTea(assam);

type TeaType =
  | "Green"
  | "Black"
  | "Rooibos"
  | "Peppermint"
  | "Oolong"
  | "Sencha"
  | "Chamomile";

type TeaTypeCaffeine = Exclude<TeaType, "Roibos" | "Peppermint" | "Chamomile">;
type TeaTypeNoCaffeine = Exclude<TeaType, TeaTypeCaffeine>;

class Tea implements ITea {
  constructor(
    public name: string,
    public type: TeaType,
    public temperature: number,
    public brewingTime: number
  ) {}
}
class CaffeineTea extends Tea implements ITea {
  constructor(
    name: string,
    type: TeaTypeCaffeine,
    temperature: number,
    brewingTime: number
  ) {
    super(name, type, temperature, brewingTime);
  }
}

console.log(new Tea("Peppermint", "Peppermint", 90, 5));
console.log(new CaffeineTea("Assam", "Black", 90, 5));
