import Singer from "./Singer";

class Madonna extends Singer {
  constructor(name = "Madonna") {
    super(name);
  }

  sing(): string {
    return "Like a Virgin";
  }
}

export default Madonna;
