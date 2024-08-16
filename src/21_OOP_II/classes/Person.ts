export enum Gender {
  male = "male",
  female = "female",
  divers = "divers",
}

class Person {
  _name: string;
  _birthday: Date;
  _gender: Gender;

  constructor(name: string, birthday: Date, gender: Gender) {
    this._name = name;
    this._birthday = birthday;
    this._gender = gender;
  }

  set name(value: string) {
    if (value.length === 0) {
      console.log("Invalid name");
    } else {
      this._name = value;
    }
  }

  get name(): string {
    return this._name;
  }

  set gender(value: Gender) {
    this._gender = value;
  }

  get gender(): Gender {
    return this._gender;
  }

  get birthday(): Date {
    return this._birthday;
  }
}

export default Person;
