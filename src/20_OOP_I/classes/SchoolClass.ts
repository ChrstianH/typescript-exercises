import Person from "./Person";

class SchoolClass {
  _id: number;
  _name: string;
  _endDate?: Date;
  _people: Person[];

  constructor(id: number, name: string) {
    this._id = id;
    this._name = name;
    this._people = [];
    console.log("School class creation successful");
  }
}

export default SchoolClass;
