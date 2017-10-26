
//  var numero=prompt("Introduce un numero entre el 1 y el 100");


do {

  var respuesta=prompt("Introduce un numero entre el 1 y el 100");
  var numero=parseInt(respuesta);
  if ((numero > 100) || (numero <1))
  {
    console.log(numero+ " no es un número del 1 al 100");
  }
  else if (isNaN(numero))
  {
    console.log(numero+" no es un número");
  }

} while ((isNaN (numero))||(numero > 100)|| (numero <1));
var i=0;
  do {
    i++;
    console.log((numero+ " X "+ i+ " = "+ numero*i+ "\n"));
    }while (i < 10);
