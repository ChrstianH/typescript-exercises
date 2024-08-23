import Unicorn from "./Unicorn";

class InstanceChecker {
  static isUnicorn(objectToCheck: any): boolean {
    return objectToCheck instanceof Unicorn;
  }
}

export default InstanceChecker;
