
document.getElementById('enviar').onclick = function operacion(){
  var opcion=document.getElementById('operacion').value;
  var resultado=document.getElementById('resultado');
  var respuesta;

  function division(){
    var num1=document.getElementById('num1').value;
    var num2=document.getElementById('num2').value;
    if(num2!=0){
      return num1/num2;
    }else{
      return "Valor indefinido";
   }
  }

  switch (opcion) {
    case 1: respuesta=suma();break;
    case 2: respuesta=resta();break;
    case 3: respuesta=multiplicacion();break;
    case 4: respuesta=division(); break;
    case 5: respuesta=potencia();break;
    case 6: respuesta=raiz();break;
  }
    resultado.innerHTML=respuesta;
}
document.getElementById('form').onsubmit=function(e){
  e.preventDefault();
};
