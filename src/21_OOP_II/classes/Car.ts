import CarType from "../types/CarType";

class Car {
  _brand: string;
  private _constructionYear: number;
  _currentSpeed: number;
  _carType: CarType;

  constructor(
    brand: string,
    constructionYear: number,
    currentSpeed: number,
    carType: CarType
  ) {
    this._brand = brand;
    this._constructionYear = constructionYear;
    this._currentSpeed = currentSpeed;
    this._carType = carType;
  }

  get constructionYear(): number {
    return this._constructionYear;
  }

  getSpeedInfo(): void {
    if (this._currentSpeed <= 40) {
      console.log("Driving slowly");
    } else if (this._currentSpeed > 40 && this._currentSpeed <= 70) {
      console.log("Driving normally");
    } else if (this._currentSpeed > 70 && this._currentSpeed <= 120) {
      console.log("Driving fast");
    } else if (this._currentSpeed > 120 && this._currentSpeed <= 190) {
      console.log("Driving really fast");
    } else if (this._currentSpeed > 190) {
      console.log("WTF");
    }
  }
}

export default Car;
