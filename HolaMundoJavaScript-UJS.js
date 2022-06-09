//tipo de dato String
/*
comentario largo
*/
//tipos de datos 
//las variables son dinamicas (por accion basada en el estado)
var nombre = "carlos";
console.log(nombre);

var num = 1234;
console.log(typeof num);

//tipo de dato objeto
var objeto ={
    nombre : "juan",
    apellido : "jebus",
    telefono : 1234,
}
console.log (typeof objeto);

//tipo de dato boolean(true or false)
var bandera = true;
console.log(typeof bandera);

//tipo de dato funsion
function miFunsion(){
    //blabla
}
var simbolo = Symbol("mi simbolo");
console.log(simbolo);

class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

//variable indefinida
var x;
console.log(typeof x);
x = undefined;
console.log(x)

//variable null
var y = null;
console.log(typeof y);

//array list
var autos = ['bmw','vw'];
console.log(typeof autos);

var z = '';
console.log(typeof z);

//concatenar cadenas
var nombre = "juan";
var apellido = "perez";
var nombCompleto = nombre + ' ' + apellido;
console.log(nombCompleto)
