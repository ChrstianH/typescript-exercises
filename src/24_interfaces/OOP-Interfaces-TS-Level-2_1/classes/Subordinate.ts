import IEmployee from "../contracts/IEmployee";

class Subordinate implements IEmployee {
  _name: string;
  _age: number;
  _position: string;

  constructor(name: string, age: number, position: string) {
    this._name = name;
    this._age = age;
    this._position = position;
  }
}

export default Subordinate;
