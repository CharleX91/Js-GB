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
        this._idMouse = ++Mouse.countMouses;
    }
    get idMouse(){
        return this._idMouse;
    }
    toString(){
        return `Mouse: [idMouse: ${this._isMouse}, inputType: ${this._inputType}, brand: ${this._brand}]`;
    }
}

class Keyboard extends InputModules{
    static countKeyb = 0;

    constructor(inputType, brand){
        super(inputType,brand);
        this._idKeyboard = ++Keyboard.countKeyb;   
    }
    get idKeyboard(){
        return this._idKeyboard;
    }
    toString(){
        return `Keyboard: [idKeyboard: ${this._idKeyboard}, inputType: ${this._inputType}, brand: ${this._brand}]`;
    }
}

class Monitor{
    static countMonit = 0;

    constructor(brand, size){
        this._idMonitor = ++Monitor.countMonit;
        this._brand = brand;
        this._size = size;
    }
    get idMonitor(){
        return this._brand;
    }
    toString(){
        return `Monitor: [idMonitor ${this._idMonitor}, brand: [idMonitor: ${this._idMonitor}, brand: ${this._brand}, size: ${this._size}]`;
    }

}

let raton1 = new Mouse('USB', 'HP');
console.log(raton1.toString());
let raton2 = new Mouse('Bluetooth', 'DELL');
console.log(raton2.toString());

let teclado1 = new Keyboard('Bluetooth', 'MSI');
let teclado2 = new Keyboard('USB','Acer');
console.log(teclado1.toString());
console.log.toString();

let monitor1 = new Monitor('HP','15');
let monitor2 = new Monitor('DELL','27');
console.log(monitor1.toString())
