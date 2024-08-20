import IEmployee from "../contracts/IEmployee";
import Employee from "./Employee";

class Manager extends Employee {
  private _assignedEmployees: IEmployee[] = [];

  constructor(name: string, age: number, position: string) {
    super(name, age, position);
  }

  addSubordinate(emplyoyee: IEmployee) {
    this._assignedEmployees.push(emplyoyee);
  }
}

export default Manager;
