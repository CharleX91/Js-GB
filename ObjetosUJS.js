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
