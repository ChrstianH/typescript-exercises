class Animal {
  _species: string;
  _age: number;
  _color: string;

  constructor(species: string, age: number, color: string) {
    this._species = species;
    this._age = age;
    this._color = color;
  }

  set species(value: string) {
    if (value.length === 0) {
      console.log("Invalid species name");
    } else {
      this._species = value;
    }
  }

  get species(): string {
    return this._species;
  }

  set age(value: number) {
    if (value <= 0) {
      console.log("Invalid age for animal");
    } else {
      this._age = value;
    }
  }

  get age(): number {
    return this._age;
  }

  set color(value: string) {
    if (value.length === 0) {
      console.log("Invalid color for animal");
    } else {
      this._color = value;
    }
  }

  get color(): string {
    return this._color;
  }
}
