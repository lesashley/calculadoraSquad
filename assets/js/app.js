function calcSuma(){
  var num1=document.getElementById('num1').value;
  var num2=document.getElementById('num2').value;
  var resultado=document.getElementById("resultado");

  var suma = parseInt(num1) + parseInt(num2);
  resultado.innerHTML=suma;
}
