var uno = document.getElementById('num1');
var dos = document.getElementById('num2');
var operacion = document.getElementById('operacion');
var pregunta = document.getElementById('pregunta');

function suma(a,b){
  return a+b;
}

function operar(ant,pos){
  var respuesta;
    if(operacion.value == 1){ respuesta = suma(ant,pos);}
    else if(operacion.value == 2){respuesta=resta(ant,pos);}
    else if(operacion.value == 3){respuesta=multiplica(ant,pos);}
    else if(operacion.value == 4){respuesta = division(ant,pos);}

  return respuesta;
}

console.log(operar(uno.value,dos.value));

/*
if(pregunta.value == 1){
  var uno = operar(uno.value,dos.value);

}
*/
