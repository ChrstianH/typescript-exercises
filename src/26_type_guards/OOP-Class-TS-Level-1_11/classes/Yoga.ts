import Type from "../enums/Type";
import Activity from "./Activity";

class Yoga extends Activity {
  _type: Type;

  constructor(name: string, difficulty: number, type: Type) {
    super(name, difficulty);
    this._type = type;
  }
}

export default Yoga;
