"use strict"// modo strict especifica con no se admiten variables sin inicializar

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

class Computer{
    static counterComputer = 0;

    constructor(name, monitor, mouse, keyboard){
        this._idComputer = ++Computer.counterComputer;
        this._name = name;
        this._monitor = monitor;
        this._mouse = mouse;
        this._keyboard = keyboard; // aqui estamos aplicando relacion de agregacion y no de herencia
    }
    toString(){
        return `Computer ${this._idComputer}: ${this._name} \n ${this._monitor} \n ${this._keyboard} \n ${this._mouse}`
    }
}

class Order{
    static counterOrder = 0;

    constructor(){
        this._idOrder = ++Order.counterOrder;
        this._computers = [];
    }
    get idOrder(){
        return this._idOrder;
    }
    addComputer(computer){
        this._computers.push(computer);
    }
    showComputer(){
        let computersOrder = '';
        for ( let computer of this._computers){
            computersOrder += `\n${computer}`;
        }
        console.log(`Order: ${this._idOrder}, Computers: ${computersOrder}`);
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

let computadora1 = new Computer ( 'HP', monitor1, raton1, teclado1);
console.log(computadora1.toString());
let computadora2 = new Computer ('SAMPLE', monitor2, raton2, teclado2);
console.log(`${computadora2}`)//imprimir con sintaxis template string llama automaticamente al método toString

let orden1 = new Order();
orden1.addComputer(computadora1);
orden1.addComputer(computadora2);
orden1.addComputer(computadora1);
orden1.showComputer();

let orden2 = new Order();
orden1.addComputer(computadora1);
orden1.addComputer(computadora2);
orden1.addComputer(computadora1);
orden1.showComputer();

