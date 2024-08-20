import Employee from "./Employee";

class Trainee extends Employee {
  constructor(name: string, age: number) {
    super(name, age, "Trainee");
  }
}

export default Trainee;
