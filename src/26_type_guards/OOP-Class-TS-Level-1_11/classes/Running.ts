import Activity from "./Activity";

class Running extends Activity {
  _distance: number;

  constructor(name: string, difficulty: number, distance: number) {
    super(name, difficulty);
    this._distance = distance;
  }

  warmUp(distance: number) {
    const warmUpTime = this.calcTime(distance);
    console.log(`Warming up for ${warmUpTime} minutes`);
  }

  coolDown(distance: number) {
    const coolDownTime = this.calcTime(distance);
    console.log(`cooling down for ${coolDownTime} minutes`);
  }

  private calcTime(distance: number): number {
    if (distance > 10) {
      return 5;
    } else if (distance > 7) {
      return 4;
    } else if (distance > 4.5) {
      return 3;
    } else if (distance > 3) {
      return 2;
    } else {
      return 0;
    }
  }
}

export default Running;
