 class Persona {
    
    static contadorPersona = 0;

    constructor(nombre,apellido,edad){

        this._nombre =  nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersona;

    }

    get idPersona(){
        return this._idPersona = this.idPersona;
    }

    get nombre(){
        return this._nombre = nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido = apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    get edad(){
        return this._edad = edad;
    }

    set edad(edad){
        this._edad = edad;
    }

    nombreCompleto(){
        return 'ID -' + this.idPersona + ': ' + this._nombre + ' ' + this._apellido + ' ' + this._edad;
    }

    toString(){
        return this.nombreCompleto();
    }

 }

 class Empleado extends Persona{

    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad){
        super(nombre,apellido,edad);
        this._sueldo = sueldo;
        this._idEmpleados = ++Empleado.contadorEmpleados;
    }

    get idEmpleado(){
        return this._idEmpleados = this._idEmpleados;
    }

    get sueldo(){
        return this._sueldo = sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    nombreCompleto(){
        return super.nombreCompleto() + '- Sueldo: ' + this._sueldo;
    }

 }

 class Cliente extends Persona{

    static contadorCliente = 0;

    constructor(nombre, apellido, edad){
        super(nombre,apellido,edad);
        this._fechaRegistro = new Date();
        this._idCliente = ++Cliente.contadorCliente;
    }

    get idCliente(){
        return this._idCliente = this.idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro = fechaRegistro;
    }

    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }

    nombreCompleto(){
        return super.nombreCompleto() + '- Fecha de Registro: ' + this._fechaRegistro;
    }
    
}

