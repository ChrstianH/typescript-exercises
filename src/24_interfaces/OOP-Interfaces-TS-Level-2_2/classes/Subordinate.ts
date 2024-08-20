import Employee from "./Employee";

class Subordinate extends Employee {
  constructor(name: string, age: number, position: string) {
    super(name, age, position);
  }
}

export default Subordinate;
