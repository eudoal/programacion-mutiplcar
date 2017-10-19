//do {
// pide un numero

  var numero=prompt("Introduce un numero entre el 1 y el 100");
  var i=0;
    if ((numero > 100) || (numero <1))
    {
//        alert(numero+ " no es un número del 1 al 100");
          console.log(numero+ " no es un número del 1 al 100");
      }

     else if (isNaN(numero))
      {
//              alert(numero+" no es un número");
                console.log(numero+" no es un número");
        }

      else if ((numero < 100) || (numero >1))
      {
        do {
          i++;
//          alert ((numero+ " X "+ i+ " = "+ numero*i+ "\n"));
          console.log((numero+ " X "+ i+ " = "+ numero*i+ "\n"));
          }
           while (i < 10);
          }

  //        } while ((numero < 100) || (numero >1));
