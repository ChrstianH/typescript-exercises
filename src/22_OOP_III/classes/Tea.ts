import Flavour from "../OOP-Class-TS-Level-1_10/types/flavour";
import Beverage from "./Beverage";

class Tea extends Beverage {

    _flavour:Flavour | undefined = undefined;

    constructor(name:string, price:number, flavour:Flavour) {
        super(name, price)
        this._flavour=flavour
    }
}

export default Tea;
