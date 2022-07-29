class Person{

    static contPerson = 0;

    //el id no se recive por parametro siuno que se va a inciar de manera interna al constructor
    constructor( name, lastName, age){
         this._idPerson = ++Person.contPerson;
         this._name = name;
         this._lastName = lastName;
         this._age = age;
    }

    get idPerson(){
        return this._idPerson;
    }
    
    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }

    get lastName(){
        return this._lastName;
    }

    set lastName( lastName ){
        this._lastName = lastName;
    }

    get age(){
        return this._age;
    }
    
    set age ( age ){
        this._age= age      ;
    }
/*
    toString(){
        return this._idPerson + " " + this._name + " " + this._lastName + " " + this._age ;
    }
*/  // orta forma de rescribir el toString, que ademas acepta saltos de linea
    toString(){
        return `${this._idPerson} 
                ${this._name} 
                ${this._lastName}
                ${this._age}` ;
    } 
}

class Employee extends Person{
    static contEmployee = 0;

    constructor(name, lastName, age, salary){
        super(name, lastName, age);
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

class Client extends Person{
    static contClients =  0;
    
    //fecha de registro = regDate
    constructor(name, lastName, age,regDate){
        super(name, lastName, age); 
        this._idClient = ++Client.contClients;
        this._regDate = regDate;
    }

    get idClient(){
        return this._idClient;
    }

    get regDate(){
        return this._regDate;
    }

    set regDate( regDate ){
        this._regDate = regDate;
    }

    toString(){
        return `${super.toString()} 
        ${this._idClient} 
        ${this._regDate}`;
    }
}

//test
let persona1 = new Person( 'Pablo', 'Ponce', '32');
console.log(persona1.toString());

let persona2 = new Person ('Carlos', 'Carmon', '30' );
console.log(persona2.toString());

let empleado1 = new Employee( 'Rita', 'Fox', '28', 50000);
console.log(empleado1.toString());

let empleado2 = new Employee( 'Rick', 'Ocean', '26', 48000);
console.log(empleado1.toString());

let cliente1 = new Client( 'Matias', 'Bear', '26', new Date());
console.log(cliente1.toString());

let cliente2 = new Client( 'Mato', 'BearMan', '26', new Date());
console.log(cliente2.toString());