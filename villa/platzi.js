/*var z;
for (var i = 0; i < 10; i++) {
  z = aleatorio(10,20);
  document.write(z + " , ");
}
*/
//var imgp = document.getElementById("imgprueba");
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
  url: 'img/tile.png',
  cargarOk : false
}
var vaca = {
  url : 'img/vaca.png',
  cargarOk: false
}
var cantidad = aleatorio(1, 10);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load",cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load",cargarVaca);

//imgp.src="img/pollo.png";

function cargarFondo()
{
  fondo.cargarOk = true;
  dibujar();
}
function cargarVaca()
{
  vaca.cargarOk = true;
  dibujar();
}

function dibujar()
{
    if (fondo.cargarOk == true)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (vaca.cargarOk == true)
    {
      for (var i = 0; i < cantidad; i++) {
        var x = aleatorio(0,5);
        var y = aleatorio(0,5);
        x = x * 80;
        y = y * 80;
        papel.drawImage(vaca.imagen, x, y);
      }
    }
}
/*****************************************************************************/
function aleatorio(min, max)
{
  var resultado;
  resultado = Math.floor(Math.random() * (max - min +1)) + min;
  return resultado;
}
