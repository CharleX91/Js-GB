// Hoisting miFuncion(5,3);

function miFuncion(a, b){
    console.log("Suma: " + (a+b));
}

miFuncion(2,3);

// Siguiente

function miFuncionReturn(a, b){
    console.log(arguments.length)
    console.log(arguments)

    return a + b;
}
let resultado = miFuncionReturn(3,3);

console.log(resultado);

// Funciones de tipo exresion o anonimas

let x = function(a, b){return a+ b};

resultadoExp = x(1, 2);

console.log(resultadoExp);

// Funciones de self-invoking

(function (a, b){
    console.log('Ejecutando ' + (a + b));
})(4, 5);

console.log(typeof miFuncionReturn);

var miFuncionTexto = miFuncion.toString();

console.log(miFuncionTexto);

// Funcion Flecha

const sumaFuncionFlecha = (a, b) => a + b;

resultado = sumaFuncionFlecha(3 ,9);
console.log(resultado);

// Parametros y Argumentos

let sumarArgumentosYParametros = function(a, b){
    arguments[0];
    arguments[1];

    console.log(arguments[0]);
    console.log(arguments[1]);

    return a + b

    // se sobre escriben los argumentos luego, prioridad de asignación
};

let resultadoAYP = sumarArgumentosYParametros(1, 2);
console.log(resultadoAYP);

// Sumar todo

let resultadoTotal = sumarTodo(5, 4, 5, 9);
console.log(resultadoTotal);

function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i];
    }
    return suma
};

// Pasar a Valor

let z = 10;

function cambiarValor(a){
    a = 20;
}

cambiarValor(z);
console.log(z);

// Metodos y Objetos: Paso por referencia

const persona = {
    nombre: 'juan',
    apellido: 'perez'
}

function cambiarValorObjeto(p1){
    p1.nombre = 'Carlos';
    p1.apellido = 'Lara';
}

cambiarValorObjeto(persona);
console.log(persona)