//alert('todo ok');
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
}; //linea unica
document.addEventListener('keyup',dibujarTeclado);
var cuadrito = document.getElementById('area_de_dibujo');
var papel = cuadrito.getContext('2d');
var x = 150;
var y = 150;

dibujarLinea("red",149,149,151,151,papel);
//console.log(teclas);
function dibujarTeclado(evt) {
  //alert("Oh por Dios !");
  var colorcito = "blue";
  var movimiento = 10;
  if (evt.keyCode == teclas.UP) {
      //console.log('tecla oprimida arriba');
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
  }
  if (evt.keyCode == teclas.DOWN) {
    //console.log('tecla oprimida abajo');
    dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
    y = y + movimiento;
  }
  if (evt.keyCode == teclas.LEFT) {
    //console.log('tecla oprimida izquierda');
    dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
    x = x - movimiento;
  }
  if (evt.keyCode == teclas.RIGHT) {
    //console.log('tecla oprimida derecha');
    dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
    x = x + movimiento;
  }
  //console.log(evt.keyCode);
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath(); //iniciamos el trazo
  lienzo.strokeStyle = color; //color de linea
  lienzo.lineWidth=3;
  lienzo.moveTo(xinicial,yinicial); //movemos la linea a la posicion inicial donde empieza el trazo
  lienzo.lineTo(xfinal,yfinal); //hacemos la linea
  lienzo.stroke();//dibujamos liena con el estilos escogido
  lienzo.closePath();//cerramos el trazo
}
