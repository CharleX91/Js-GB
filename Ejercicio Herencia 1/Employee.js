class Employee extends Person{
    static contEmployee = 0;

    constructor(salary){
        this._idEmployee = ++Employee.contEmployee;
        this._salary = salary;
    }

    get idEmployee(){
        return this._idEmployee;1
    }

    get salary(){
        return this._salary;
    }

    set salary( salary ){
        this._salary = salary;
    }
    //super hace referencia a la clase padre
    toString(){
        return `${super.toString()}
                ${this.idEmployee}
                ${this._salary}`
    }
}    