import Type from "../OOP-Class-TS-Level-1_10/types/type";
import Beverage from "./Beverage";

class Coffee extends Beverage {

    _type:Type | undefined = undefined;

    constructor(name:string, price:number, type:Type){
        super(name, price)
        this._type=type
    }
}

export default Coffee;
