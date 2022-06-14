// sentencia if / else
 let condicion = true;

 if (condicion){
    console.log("Condicion veradera");
 }
 else{
    console.log("Condicion falsa");
 }
 // NOTA: el operaor ternario es un if/else desarrollado en una sola linea

 //ejercicio estaciones d el año
 let mes = 4;
 let estacion;
 if (mes == 1 || mes == 2 || mes == 12){
    estacion = "Invierno";
 } 
 else if (mes == 3 || mes == 4 || mes == 5){
    estacion = "Primavera";
 }
 else if (mes == 6 || mes == 7 || mes == 8){
    estacion = "Verano";
 }
 else if (mes == 9 || mes == 10 || mes == 11){
    estacion = "Otoño";
 }
 else {
    estacion = "Valor incorrecto";
 }

 // estructura SWITCH

 let num =3;

 let numText = "Valor desconocido";

 switch(num){
   case 1:
      numText = "Número uno";
      break;
   case 2:
      numText = "Número dos";
      break;
   case 3:
      numText = "Número tres";   
      break;
   default:
      numText = "Caso no encontrado"   
   }

   numText;

   /*
   es importante recordar usar la palabra reservada break 
   despues de la sentencia de cada caso para romper el bucle;
   el bucle switch utiliza comparacion estrica!!
   */
  