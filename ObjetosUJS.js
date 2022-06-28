// objetos en js
// creacion de un objeto en memoria let nombreObject = {parametros separados por comas}
let person = {
    name: 'Juan',
    lastName: 'Perez',
    email: 'juan@gmail.com',
    age: 23,
    fullName: function(){
        return this.name + ' ' + this.lastName;
    }
}
//this. es para hacer referencia a los atributos definidos dentro del mismo objeto
// para tener acceso a los valores y metodos de un object usamos nameObjet.
console.log(person.name);
console.log(person.age);
console.log(person.fullName());

//sintaxis para crear un object de manera explicita
let person2 = new Object();
person2.name ='Charles';
person2.adress ='Saturno 15';
person2.tel= 1234545667;

//acceder a propiedades de object como  si fuera una arreglo
console.log(person2['name']);

//for in
for( propiedad in person2){
    console.log(propiedad);
    console.log(person2[propiedad]);
}

//agregar un nuevo atributo a un Object
//nombreObjet.nombreNewAtributo = valor
person2.lastName = 'Lovecraft';
person2.secondName = 'Luis';
console.log(person2);
// eliminar una propíedad existente
delete person2.secondName;
console.log(person2);

//otras formas de Imprimir objetos
//concatenar cada valor de cada prpiedad
console.log(person2.name +' '+person2.lastName +' '+ person2.age);

// for in
for(propiedad in person2){
    console.log( person2[propiedad]);
}

//Utilizando Objcet.values que deviuelve un array list
let person2Array = Object.values(person2);
console.log("🚀 ~ file: ObjetosUJS.js ~ line 53 ~ person2Array", person2Array)

//utilizando el metodo JSON que pasa el objeto a string
let person2String = JSON.stringify( person2);
console.log("🚀 ~ file: ObjetosUJS.js ~ line 57 ~ person2String", person2String)

//********************************************** */
//métodos get and set
let person3 = {
    name: 'Juan',
    lastName: 'Perez',
    email: 'juan@gmail.com',
    age: 23,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    }
    /*set lang ( lang ){
        this.idioma = lang.toUpperCase();
    }*/
    
}
console.log(person3.lang);

//Funcion constructor de onjeto tipo persona
function Person4(nombre,apellido,email){
    this.nombre=nombre;
    this.apellido=apellido;
    this.email=email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let padre = new Person4('Juan', 'Perez', 'juanP@gmail.com');
console.log("🚀 ~ file: ObjetosUJS.js ~ line 88 ~ padre", padre);

let madre = new Person4('Ana','Juarez','anaJ@gmail.com');
console.log(madre.nombreCompleto());

//inicializacion e objeto formal
let myObject = Object();
//inicializacion e objeto conveniente
let myObject2 = {};

//otra posible incializacion para un objeto de tipo string formal
let myString = new String('hola');
//opcion resumida
let myString2 = 'Hello';
//llas inicializacions formales y las resumidas existen de igualmente para todos los tipos de variables y funciones.

//agregar una nmueva propiedad que afecte a todos los objetos del mismo tipo
//sin necesidad de modificar el constructor
//para ello utilizamos Prototype
Person4.prototype.nacionaliad = 'ARG';
console.log(padre.nacionaliad);

//Uso de método call para accder a un metodo establecido en el constructro de otro objeto
//tambien es posible pasar parametros como por ejemplo titulo y tel 
let persona1 = {
    nombre: 'Carlos',
    apellido: 'Carmo',
    nombreCompleto: function(titulo, tel){
        return titulo + ' ' + this.nombre +' '+ this.apellido + ' ' + tel;
    }
 }
  let persona2 = {
     nombre: 'Mario',
     apellido: 'Cars'
  }
  
  console.log(persona1.nombreCompleto);
  console.log(persona1.nombreCompleto.call(persona2,'Ing','3416235645'));


