import IIceCreamService from "../contracts/IIceCreamServive";

class IceCreamParlor implements IIceCreamService {
  private _flavors: string[] = [
    "Vanille",
    "Schokolade",
    "Erdbeere",
    "Pistazie",
    "Cookies and Cream",
    "Mango",
    "Stracciatella",
    "Karamell",
    "Himbeere",
    "Kaffee",
  ];
  private _prices: number[] = [
    1.5, 1.5, 1.75, 2.25, 2.25, 2.25, 1.75, 2.25, 2.25, 2.25,
  ];

  addNewFlavor(flavor: string): void {
    this._flavors.push(flavor);
  }

  getFlavorPrice(flavor: string): number {
    const flavorIndex = this._flavors.indexOf(flavor);
    return this._prices[flavorIndex];
  }

  isFlavorAvailable(flavor: string): boolean {
    return this._flavors.includes(flavor);
  }

  listFlavors(): string[] {
    return this._flavors;
  }

  orderIceCream(flavor: string, scoops: number): string {
    return `${scoops} Kugeln ${flavor}: ${(
      this.getFlavorPrice(flavor) * scoops
    ).toFixed(2)} Euro`;
  }

  removeFlavor(flavor: string): void {
    const flavorIndex = this._flavors.indexOf(flavor);
    this._flavors = this._flavors.splice(flavorIndex);
  }
}

export default IceCreamParlor;
