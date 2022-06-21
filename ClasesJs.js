class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }

}

let persona1 = new Persona('Austin Osman', 'Spare');
console.log(persona1);
let persona2 = new Persona('Alistair', 'Crowley');
console.log(persona2);

// Get y Set en Clases

class Persona2{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

}

let personaGet = new Persona2('Alistair', 'Crowley');
console.log(personaGet.nombre);

personaGet.nombre = 'Grand';
console.log(personaGet.nombre);

// Herencia

class PersonaHerencia{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }

    toString(){
        return this.nombreCompleto();
    }

}

class EmpleadoHerencia extends PersonaHerencia{
    constructor(nombre, apellido, departamento){
        super(nombre,apellido);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    // Sobreescritura

    nombreCompleto(){
        // return this._nombre + ' ' + this._apellido + ': ' + this._departamento;
        return super.nombreCompleto() + ': ' + this._departamento;
    }

   
}

let empleado1 = new PersonaHerencia('Baph','Omet');
console.log(empleado1.toString());

let empleadoModelo = new EmpleadoHerencia('Buer','Salomon','Exprop');
console.log(empleadoModelo);
console.log(empleadoModelo.nombreCompleto());

// Clase Object

//toString();
// Object.prototype.
console.log(empleadoModelo.toString());
// Polimosfismo segun las rerfeencias de metodos solicitados. (multiples formas en timepo de ejecución).

