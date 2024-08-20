import IEmployee from "../contracts/IEmployee";

class Employee implements IEmployee {
  _name: string;
  _age: number;
  _position: string;
  _startDate: Date = new Date();

  constructor(name: string, age: number, position: string) {
    this._name = name;
    this._age = age;
    this._position = position;
  }

  getYearsOfService(): number {
    return new Date().getFullYear() - this._startDate.getFullYear();
  }
}

export default Employee;
