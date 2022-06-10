/*
esto es un comentario largo
*/

//tipos de datos 
//las variables son dinamicas (por accion basada en el estado)
var hw = "Hola Mundo desde JavaScript";
console.log(hw);

//tipo de dato String
var nombre = "carlos";
console.log(nombre);

//tipo de dato int, typeof sirve para mostrar el tipo de dato
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
console.log(x);

//variable null
var y = null;
console.log(typeof y);

//array list
var autos = ['bmw','vw'];
console.log(typeof autos);

//caracter vacio es una string
var z = '';
console.log(typeof z);

//concatenar cadenas
var nombre = "juan";
var apellido = "perez";
var nombCompleto = nombre + ' ' + apellido;
console.log(nombCompleto)


/*
buenas practicas:
en vez de usar var vamos a usar let para definir una variable
o tambien const en caso de constantes
que podran ser modificadas a futuro.
*/

let name;
name = "Pato asado";
console.log(name);

const lastName = "Noli";
//lastName = "pepo" error no se puede modificar una constante
console.log(lastName);

//las variables con nombres de dos o mas palabras se escriben en camel

let newVarLong = "Muy muy lejano";
console.log(newVarLong);

// se puede definir variables del mismo tipo en la misma linea
let u, r, s;
u = 20, r = 40;
s = r - u;
console.log(s);
//Js es sensible a mayus y minus
let nombreCompleto = "pepe juan";
let nombrecompleto = "maria laura";

console.log(nombreCompleto);
console.log(nombrecompleto);

/*no esta permitido iniciar nombres de variablers con numeros 
o palabras reservadas pero si con _ o $
*/

