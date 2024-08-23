import Singer from "./Singer";

class MichaelJackson extends Singer {
  constructor(name = "Michael Jackson") {
    super(name);
  }

  sing(): string {
    return "Billie Jean";
  }
}

export default MichaelJackson;
