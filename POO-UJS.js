
/* en programacion orientada a objetos (POO) los objetos son representados mediante clases.
Lo objetos constan de atributos que establecen sus caracteristicas y metodos que definen su comportamiento
utilizamos constructores 
*/
class Empleado{
    constructor(nombre, sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this.departamento = departamento;
    }
    
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} depto: ${this.departamento}`;
    }
}

let empleado1 = new Empleado('Juan', 3000);
console.log( empleado1.obtenerDetalles() );

let gerente1 = new Gerente('Carlos', 5000, 'Sistemas');
console.log( gerente1.obtenerDetalles() );


function imprimir(tipo){
    console.log( tipo.obtenerDetalles() );
}

imprimir( empleado1 );
imprimir( gerente1 );


function determinarTipo(tipo){
    console.log( tipo.obtenerDetalles() );
    if(tipo instanceof Gerente){
        console.log('Es un objeto de tipo Gerente');
        console.log(tipo.departamento);
    }
    else if(tipo instanceof Empleado){
        console.log('Es un tipo Empleado');
        console.log(tipo.departamento);
    }
    else if(tipo instanceof Object){
        console.log('Es un tipo Object');
    }
}

determinarTipo( empleado1 );
determinarTipo( gerente1 );
