import Singer from "./Singer";

class WhitneyHouston extends Singer {
  constructor(name = "Whitney Houston") {
    super(name);
  }

  sing(): string {
    return "I Will Always Love You";
  }
}

export default WhitneyHouston;
