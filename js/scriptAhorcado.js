//sorteoPalabra(palabras);
var palabras = ["CAJA", "HELADERA", "TELEVISOR", "CAMINO", "COMPUTADORA"];
function sorteoPalabra() {
  var aleatorio = Math.round(Math.random() * (palabras.length - 0)) + 0;
  var sorteo;
  for (let i = 0; i < palabras.length; i++) {
    if (i == aleatorio) {
      sorteo = palabras[i];
    }
  }
  return sorteo;
}
var palabra = "";
var teclaPulsada="";
 //IMPRESION DE LINEAS VACIAS
 function lineasVacias() {
  var contador = 50;
  for (let i = 0; i < palabra.length; i++) {
    lineaLetra(lineaX, lineaY);
    contador++;
    lineaX = lineaX + contador;
  }
}

//DIBUJANDO LETRAS
var letra = "";
var letraCorrectaX = 235;
var letraCorrectaY = 480;
function letrasCorrectas(letra, letraCorrectaX, letraCorrectaY) {
  pincel.fillStyle = "red"; //color de relleno
  pincel.font = "30px ravie"; //estilo de texto
  pincel.fillText(letra, letraCorrectaX, letraCorrectaY);
}

//INGRESO DE LETRA
function capturarLetra(){
  document.addEventListener("keydown" ,(event)=>{
      teclaPulsada=event.key;
      if (!teclaPulsada.match(/[^a-z\s]/)  ) {
        return alert("No puedes ingresar letras mayúsculas, ni letras con acentos!!");
      }
      //letrasCorrectas(teclaPulsada, letraCorrectaX, letraCorrectaY)
      letrasAdivinadas();
      console.log(teclaPulsada);
    }); 
}

//IMPRESION DE LETRAS ADIVINADAS
function letrasAdivinadas() {
  var contador = 50;
  
  for (let i = 0; i < palabra.length; i++) {
    letra = palabra[i];
    //letra= teclaPulsada;
    
    letrasCorrectas(letra, letraCorrectaX, letraCorrectaY);     

    contador++;
    letraCorrectaX = letraCorrectaX + contador;
  }
}

//MENSAJE DE EXITO
function exito() {
  var textoExito = "GANASTE!!!"; //texto de prueba

  pincel.beginPath(); //iniciar ruta
  pincel.strokeStyle = "white"; //color externo
  pincel.fillStyle = "orange"; //color de relleno
  pincel.font = "30px Showcard Gothic"; //estilo de texto

  pincel.strokeText(textoExito, 500, 150); //texto con los dos métodos
  pincel.fillText(textoExito, 500, 150);
}
//MENSAJE DE DERROTA
function derrota() {
  var textoDerrota = "LO SIENTO, PERDISTE!";
  var textoReal = "La palabra era: " + palabra;

  pincel.beginPath(); //iniciar ruta
  pincel.strokeStyle = "white"; //color externo
  pincel.fillStyle = "orange"; //color de relleno
  pincel.font = "30px Showcard Gothic"; //estilo de texto

  pincel.strokeText(textoDerrota, 500, 150); //texto con los dos métodos
  pincel.fillText(textoDerrota, 500, 150);
  pincel.fillText(textoReal, 460, 180);
}

//DIBUJANDO LINEAS VACIAS
var lineaX = 0;
var lineaY = 0;
function lineaLetra(lineaX, lineaY) {
  pincel.moveTo(230 + lineaX, 500 + lineaY);
  pincel.lineTo(270 + lineaX, 500 + lineaY);
  pincel.strokeStyle = "orange";
  pincel.stroke();
}
//-------------------------------------------

  


// mastil();
// barra();
// soga();
// cabeza();
// torso();
// brazo1();
// brazo2();
// pierna1();
// pierna2();
// //exito();
// derrota();
