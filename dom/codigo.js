/*var ruta = window.location;
document.write("Hola estudiante "+ruta);
console.log(ruta);*/
d = document.getElementById('dibujito');//canvas
var lienzo = d.getContext('2d'); //contexto

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath(); //iniciamos el trazo
  lienzo.strokeStyle = color; //color de linea
  lienzo.moveTo(xinicial,yinicial); //movemos la linea a la posicion inicial donde empieza el trazo
  lienzo.lineTo(xfinal,yfinal); //hacemos la linea
  lienzo.stroke();//dibujamos liena con el estilos escogido
  lienzo.closePath();//cerramos el trazo
}

dibujarLinea("red", 10, 300, 220, 10);// /
dibujarLinea("yellow", 300, 10, 10, 220);
