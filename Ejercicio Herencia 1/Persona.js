class Persona{

    static contPerson = 0;

    constructor(idPerson, name, lastName, age){
         this._idPerson = idPerson;
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