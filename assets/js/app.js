document.getElementById('enviar').onclick = function operacion(){
  var uno = document.getElementById('num1').value;
  var dos = document.getElementById('num2').value;
  var operacion = document.getElementById('operacion').value;

  function suma(a,b){
    return parseInt(a)+parseInt(b);
  }
  function resta(a,b){
    return parseInt(a)-parseInt(b);
  }

  function division(a,b){
    if(b!=0){
      return parseInt(a)/parseInt(b);
    }else{
      return "Valor indefinido";
    }
  }

  function multiplicacion(a,b){
    return parseInt(a)*parseInt(b);
  }

  function potencia(a,b) {
    return Math.pow(a,b);
  }

  var respuesta;
    if(operacion == 1){ respuesta = suma(uno,dos);}
    else if(operacion == 2){respuesta=resta(uno,dos);}
    else if(operacion == 3){respuesta= multiplicacion(uno,dos);}
    else if(operacion == 4){respuesta = division(uno,dos);}
    else if(operacion == 5){respuesta = potencia(uno,dos);}

  document.getElementById('resultado').innerHTML = respuesta;
}
document.getElementById('form').onsubmit=function(e){
  e.preventDefault();
}
