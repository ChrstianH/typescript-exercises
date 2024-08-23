import Singer from "./Singer";

class Adele extends Singer {
  constructor(name = "Adele") {
    super(name);
  }

  sing(): string {
    return "Someone Like You";
  }
}

export default Adele;
