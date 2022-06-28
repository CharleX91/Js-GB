class Individuo{

    static contadorObjetos = 0; // Atributo de Clase

    email = 'placeholder'; // Atributo de Objeto

    constructor(nomenclatura,atributo){
        this._nomenclatura = nomenclatura;
        this._atributo = atributo;
        Individuo.contadorObjetos++;
    }

    get nomenclatura(){
        return this._nomenclatura;
    }

    set nomenclatura(nomenclatura){
        this._nomenclatura = nomenclatura;
    }

    get atributo(){
        return this._atributo;
    }

    set atributo(atributo){
        this._atributo = atributo;
    }

    static saludar(){
        console.log('greetings!');
    }

    static saludos2(Individuo){
        console.log('greetings! ' + Individuo.nomenclatura);
    }
}

let entidad = new Individuo('Alpha','Omega');
let entidad2 = new Individuo('Alpha2','Omega2');

// entidad.saludar(); no e sposible llmaa run metodo statico

Individuo.saludar();
Individuo.saludos2(entidad);

// Atributos Estaticos

entidad.contadorObjetos;
// empleamos la clase no el objeto
console.log('Cantidad: ' + Individuo.contadorObjetos);

// Diferentes Atrubutos

console.log(entidad2.email);

class Persona{
    static contadorPersona = 0;

    static get MAX_OBJ(){
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;

        if(Persona.contadorPersona < Persona.MAX_OBJ){
            this._idPersona = ++Persona.contadorPersona;
        }else{
            console.log('se ha superado el maximo');
        }
        
        

    }

    nombreCompleto(){
        return this._idPersona + ' ' + this._apellido + ' ' + this._nombre;
    }

    toString(){
        return this.nombreCompleto();
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
};

class Empleado extends Persona{
    constructor(nombre, apellido, depto){
        super(nombre, apellido)
        this._depto = depto;
    }

    

    get depto(){
        return this._depto;
    }

    set depto(depto){
        this._depto = depto;
    }
};

let persona1 = new Persona('Ejemplo','EsteEsUn');
let persona2 = new Empleado('SegundoEjemplo','EsteEsUn');
let persona3 = new Persona('Ejemplo','EsteEsUn');
let persona4 = new Empleado('SegundoEjemplo','EsteEsUn');
let persona5 = new Persona('Ejemplo','EsteEsUn');
let persona6 = new Empleado('SegundoEjemplo','EsteEsUn');

console.log(persona1.toString());
console.log(persona2.toString());
console.log(Persona.contadorPersona);

console.log(Persona.MAX_OBJ);