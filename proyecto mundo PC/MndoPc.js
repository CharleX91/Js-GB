class InputModules{
    constructor(inputType, brand){
        this._inputType = inputType;
        this._brand = brand;
    }
    get inputType(){
        return this._inputType;
    }
    set inputType(inputType){
        this._inputType = inputType;
    }

    get brand(){
        return this._brand;
    }
    set brand(brand){
        this._brand = brand;
    }
}

class Mouse extends InputModules{
    static countMouses = 0;
   
    constructor(inputType, brand){
        super(inputType, brand);
        this._isMouse = ++Mouse.countMouses;
    }
    get idMouse(){
        return this._idMouse;
    }
    toString(){
        return `Mouse: [idMouse: ${this._isMouse}, inputType: ${this._inputType}, brand: ${this._brand}]`;
    }
}
let raton1 = new Mouse('USB', 'HP');
console.log(raton1);

