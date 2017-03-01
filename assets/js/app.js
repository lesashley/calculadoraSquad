function operar(){
  var uno = document.getElementById('num1').value;
  var dos = document.getElementById('num2').value;
  var operacion = document.getElementById('operacion').value;

  function suma(a,b){
    var a = parseInt(a);
    var b = parseInt(b);
    return a+b;
  }

  function resta(a,b){
    var a = parseInt(a);
    var b = parseInt(b);
    return a-b;
  }

  function division(a,b){
    var a = parseInt(a);
    var b = parseInt(b);
    return a/b;
  }

  function multiplicacion(a,b){
    var a = parseInt(a);
    var b = parseInt(b);
    return a*b;
  }

  var respuesta;
    if(operacion == 1){ respuesta = suma(uno,dos);}
    else if(operacion == 2){respuesta=resta(uno,dos);}
    else if(operacion == 3){respuesta=multiplica(unos,dos);}
    else if(operacion == 4){respuesta = division(unos,dos);}

  document.getElementById('resultado').innerHTML = respuesta;
}



/*
if(pregunta.value == 1){
  var uno = operar(uno.value,dos.value);

}
*/
