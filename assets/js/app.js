var uno = document.getElementById('num1');
var dos = document.getElementById('num2');
var operacion = document.getElementById('operación');
var pregunta = document.getElementById('pregunta');

function operar(uno.value,dos.value){
  var respuesta;
    if(operacion.value == suma){ respuesta = suma(uno.value,dos.value);}
    else if(operacion.value == resta){respuesta=resta(uno.value,dos.value);}
    else if(operacion.value == multiplica){respuesta=multiplica(uno.value,dos.value);}
    else if(operacion.value == divide){respuesta = division(uno.value,dos.value);}

  return respuesta;
}

if(pregunta.value == 1){
  var uno = operar(uno.value,dos.value);

}
