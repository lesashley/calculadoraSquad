<<<<<<< HEAD
var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;
var resultado = document.getElementById("resultado");

function potencia(num1,num2) {
  return resultado.innerHTML= Math.pow(num1,num2);
}
=======
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
>>>>>>> a61d8fb1a1f14d8be5300d1a179aee531bc73387
