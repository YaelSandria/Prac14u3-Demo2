function limpiarFormulario() {
document.getElementById("miForm").reset();
}

var Menorde3 = function(n1,n2,n3){

var num1  = parseFloat(document.getElementById("numero1").value);

var num2  = parseFloat(document.getElementById("numero2").value);

var num3  = parseFloat(document.getElementById("numero3").value);

var resultado= Math.min (num1, num2, num3) 

    return "El numero menor es "+resultado;
}


var cmapul = function(p){

var con  = parseFloat(document.getElementById("convertir").value);

var resultado = con/2.54;

return  con+" centimetros, es igual a "+resultado+" Pulgadas";
}


var Yardas = function(y){

var m  = parseFloat(document.getElementById("mts").value);

var resultado = m*1.094;

return m+" Metros son igua al "+resultado+" Yardas";
}