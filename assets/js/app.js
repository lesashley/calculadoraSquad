document.getElementById('enviar').onclick = function operacion(){
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

  function potencia(a,b) {
    return Math.pow(a,b);
  }

  var respuesta;
    if(operacion == 1){ respuesta = suma(uno,dos);}
    else if(operacion == 2){respuesta=resta(uno,dos);}
    else if(operacion == 3){respuesta=multiplica(unos,dos);}
    else if(operacion == 4){respuesta = division(unos,dos);}
    else if(operacion == 5){respuesta = potencia(unos,dos);}

  document.getElementById('resultado').innerHTML = respuesta;
}
document.getElementById('form').onsubmit=function(e){
  e.preventDefault();
}
