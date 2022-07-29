/*
forma antigua de declarar un Array
let autos = new Array['BMW','Mercedes Benz','Volvo'];
*/

const autos = ['BMW','Mercedes Benz','Volvo'];
console.log(autos);

//acceer a los lemntos e un array
console.log(autos[0]);
console.log(autos[2]);

//recorrer un array list  con bucle for
for (let i=0; i<autos.length; i++){
    console.log(autos[i]);
}

//modificar el contenio de un indice
autos[1] = 'MercedesBenz';
console.log(autos[1]);

