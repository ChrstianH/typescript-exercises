import IShape from "../contracts/IShape";

class Circle implements IShape {
  _color: string;
  _name: string;
  _radius: number;
  _isRound: boolean = true;

  constructor(name: string, color: string, radius: number) {
    this._name = name;
    this._color = color;
    this._radius = radius;
  }

  draw = () => console.log("Drawing circle");
}

export default Circle;
