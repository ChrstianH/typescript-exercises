class Activity {
  _name: string;
  _difficulty: number;

  constructor(name: string, difficulty: number) {
    this._name = name;
    this._difficulty = difficulty;
  }

  get difficulty() {
    return this._difficulty;
  }

  set difficulty(rate: number) {
    if (rate < 1 || rate > 6) {
      console.error("Difficulty Level out of range.");
    } else {
      this._difficulty = rate;
    }
  }

  execute() {
    console.log(`Executing ${this._name}...`);
  }
}

export default Activity;
