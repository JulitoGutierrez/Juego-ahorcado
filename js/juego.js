//BOTON INICIO
var botonInicio = document.querySelector("#inicio");

botonInicio.addEventListener("click", function (event) {
  event.preventDefault();
  palabra = sorteoPalabra();
  lineasVacias();
  base();
  //letrasAdivinadas();
  derrota();
  capturarLetra();
  palabra.value= "";
});
