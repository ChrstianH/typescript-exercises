class IceCreamFlavour {
  _name: string = "";
  _price: number = 0;
  _isPopular: boolean = false;
  _description?: string = undefined;

  constructor() {}

  getTotalPrice(numberOfScoops: number): number {
    return this._price * numberOfScoops;
  }

  printInfo(): void {
    let outputText: string = `Flavor ${this._name} is`;
    if (this._isPopular) {
      outputText += " ";
    } else {
      outputText += " not ";
    }
    outputText += `popular and costs ${this._price.toFixed(2)} Euro.`;
    console.log(outputText);
  }

  getLengthOfDescription(): number {
    if (this._description) {
      return this._description.length;
    } else {
      return 0;
    }
  }
}
export default IceCreamFlavour;
