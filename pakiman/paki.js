//alert('funciona');
var imagenes = [];
imagenes["Cauchin"] = "img/vaca.png";
imagenes["Pokacho"] = "img/pollo.png";
imagenes["Tocinauro"] = "img/cerdo.png";

/*var cauchin = new Pakiman("Cauchin", 100, 30);
var pokacho = new Pakiman("Pokacho", 80, 50);
var tocinauro = new Pakiman("Tocinauro", 120, 40);*/

//console.log(cauchin, pokacho, tocinauro);
/*pokacho.mostrar();
cauchin.mostrar();
tocinauro.mostrar();*/
//coleccion.push(tocinauro);

//crear coleccion de pakimanes sin crear variable que lo indique
var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

//console.log(coleccion);
//for (var cricri in coleccion)
for (var cricri of coleccion){
  console.log(cricri);
  // con in console.log(coleccion[cricri]);
  cricri.mostrar();
}
//IN ITERA EN EL INDICE
//OF ITERA EN EL OBJETO
//for (var x in imagenes) {
for (var x in coleccion[0]) {
  //console.log(x);
}
