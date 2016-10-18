//alert('dinero');
class Billete
{
  constructor(v, c)
  {
      this.valor= v;
      this.cantidad=c;
  }
}

function entregarDinero()
{
  var t = document.getElementById('dinero');
  dinero = parseInt(t.value);
  for (var bi of caja) {
    //console.log(bi);
    if (dinero > 0)
    {
        div = Math.floor(dinero / bi.valor)
        //console.log(div);
        if (div > bi.cantidad) {
          papeles = bi.cantidad;
        }
        else
        {
          papeles = div;
        }
        entregado.push(new Billete(bi.valor, papeles));
        dinero = dinero - (bi.valor * papeles);
    }
  }

  if (dinero > 0) {
    //console.log("cajero sin fondos !");
    resultado.innerHTML="cajero sin fondos ! :( ";
  }
  else{
      //console.log(entregado);
      for (e of entregado) {
        if (e.cantidad > 0)
        {
            resultado.innerHTML=resultado.innerHTML + e.cantidad + " billetes de $ "+ e.valor + "<br />";
        }
      }
  }

}

var caja = [];
var entregado = [];
caja.push( new Billete(100, 5));
caja.push( new Billete(50, 10));
caja.push( new Billete(20, 30));
caja.push( new Billete(10, 10));
caja.push( new Billete(5, 5));
var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById('resultado');
var b = document.getElementById('extraer');
b.addEventListener('click',entregarDinero);
