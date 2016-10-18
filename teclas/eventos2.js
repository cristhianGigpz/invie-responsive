/*Inicia el trazo con un click desplazar el mouse dibujar y finalizar con cllik*/
var cuadrito = document.getElementById('area_de_dibujo');
cuadrito.addEventListener('mousedown',dibujarMouse);
cuadrito.addEventListener('mousemove',seguirMouse);

var papel = cuadrito.getContext('2d');
var posx;
var posy;
var conteo=0;
var colorcito = "blue";

function dibujarMouse(evt) {
  console.log(evt);
      if (conteo==0) {
        dibujarLinea(colorcito, evt.clientX, evt.clientY, evt.clientX, evt.clientY+1, papel);
        posx=evt.clientX;
        posy=evt.clientY+1;
        conteo++;
      }else if (conteo>0) {
        conteo=0;
      }
}

function seguirMouse(evento){
  if (conteo>0) {
      console.log(evento);
      dibujarLinea(colorcito, posx, posy, evento.clientX, evento.clientY, papel);
      posx=evento.clientX;
      posy=evento.clientY;

  }
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
  lienzo.beginPath(); //iniciamos el trazo
  lienzo.strokeStyle = color; //color de linea
  lienzo.lineWidth=3;
  lienzo.moveTo(xinicial,yinicial); //movemos la linea a la posicion inicial donde empieza el trazo
  lienzo.lineTo(xfinal,yfinal); //hacemos la linea
  lienzo.stroke();//dibujamos liena con el estilos escogido
  lienzo.closePath();//cerramos el trazo
}
