//BOTON INICIO
var botonInicio = document.querySelector("#inicio");
var botonIngresoPalabra = document.querySelector("#nueva-palabra");
var nuevaPalabra = document.querySelector("#texto-nuevo");

botonInicio.addEventListener("click", function (event) {
  event.preventDefault();
  palabra = sorteoPalabra();
  palabraArray = palabra.split("");
  console.log(palabraArray);
  lineaLetra(palabraArray);
  base();

  capturarLetra();
});

botonIngresoPalabra.addEventListener("click", function (event) {
  event.preventDefault();
  var textoNuevo = nuevaPalabra.value;
  if (textoNuevo.match(/[^A-Z\s]/)) {
    return alert("Solo puedes usar letras mayúsculas!!");
  } else {
    if (palabras.includes(textoNuevo)) {
      alert("La palabra ya fue ingresada...");
    } else {
      palabras.push(textoNuevo);
      console.log(palabras);
      nuevaPalabra.value = "";
    }
  }
});
