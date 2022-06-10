//Operaores aritmeticos
// + - * ** / % ++ --

 let a = 3, b =2;
 let z = a + b;
 console.log("resultado de la suma :" + z);

 z = a - b;
 console.log("resultado de la resta :" + z);

 z = a * b;
 console.log("resultado del producto :" + z);

 z = a / b;
 console.log("resultado de la div. :" + z);

 z = a % b;//residuo de la division
 console.log("resultado de la operación modulo (residuo)" + z);

 z = a ** b;
 console.log("resultado de la operación exponente" + z);

 // operadores e incremento y decremento
 // (++var) pre-incremento 
 z = ++a;
 console.log(a);
 console.log(z);

 //(var++) post- incremento 
 z = b++;
 console.log(b);
 console.log(z);

 // (--var)pre-decremento
 z = --a;
 console.log(a);
 console.log(z);

 // (var--)post-decremento
 z = a--;
 console.log(a);
 console.log(z);

 /*
 presedencia de operadores
    las operaciones matemáticas se resuelven de izquierda a deracha
    teniendo prioridad las multiplicacion y la division
    sobre la suma y resta
    la prioriad e operaciones puede ser manipulada 
    con el uso de asteriscos ()
*/    

 // operadores de asignacion
 let w = 1;

 w += 3; //  w = w + 3
console.log(w);
 a -= 2; // a = a - 2
 console.log(w);
 // *=  /= %= 
