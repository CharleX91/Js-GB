// ciclos o bucles
// estuctura bucle while

let contador = 0;

while(contador < 3){
console.log(contador);
contador++;
}

/*estructura bucle DO WHILE 
(el bucle do while siempre se va a ejecutar por lo menos una vez
ya que la condicion se revisa al final)
*/

let cont = 0;

do{
    console.log("🚀 ~ file: Ciclos-UJS.js ~ line 17 ~ cont", cont) 
    cont ++;   
}while (cont<3);
console.log("Fin bucle do while")


 // estructura FOR  

for(let conta = 0; conta < 3; conta++){
console.log(conta);    
}
console.log("Fin de ciclo for");

// ejercicio practico aplicando break para cortar el bucle

for ( let i = 0; i <= 10; i++){
    if( i % 2 == 0){
        console.log(i);
        break;
    }
}

for ( let j = 0; j <= 10; j++){
    if (j % 2 !== 0){
        continue;
    }
    console.log(j);
}
