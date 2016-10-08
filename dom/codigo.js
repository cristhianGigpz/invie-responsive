/*var ruta = window.location;
document.write("Hola estudiante "+ruta);
console.log(ruta);*/
var texto = document.getElementById('txt_lineas');
var boton = document.getElementById('botoncito');
//NO SE EJECUTA LA FUNCION SOLO LA ASIGNA//
boton.addEventListener('click',dibujoPorClick);
///////////////////////////////////////////////
d = document.getElementById('dibujito');//canvas
var ancho = d.width;
//alert(ancho);
var lienzo = d.getContext('2d'); //contexto
//var lineas = 30;
//var lineas;
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath(); //iniciamos el trazo
  lienzo.strokeStyle = color; //color de linea
  lienzo.moveTo(xinicial,yinicial); //movemos la linea a la posicion inicial donde empieza el trazo
  lienzo.lineTo(xfinal,yfinal); //hacemos la linea
  lienzo.stroke();//dibujamos liena con el estilos escogido
  lienzo.closePath();//cerramos el trazo
}

function dibujoPorClick(){
  //alert('funciona');
  var lineas = parseInt(texto.value);
  //alert(lineas);
  var l = 0;
  var yi=0, xf=10;
  var colorcito="#FAA";
  var espacio = ancho / lineas;
  while (l < lineas){
    yi = espacio * l;
    //xf=yi+10;
    xf = espacio * (l+1);
    dibujarLinea(colorcito, 0, yi, xf, 300);
    //console.log('linea: '+l);
    l = l + 1;
  }
  dibujarLinea(colorcito, 1, 1, 1, 299);
  dibujarLinea(colorcito, 1, 299, 299, 299);
}
