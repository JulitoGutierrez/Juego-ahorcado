//sorteoPalabra(palabras);
var palabras = ["CAJA", "HELADERA", "TELEVISOR", "CAMINO", "AUTO"];
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
var palabraArray = [];
var teclaPulsada = "";
var arrayTeclaBien = [];
var arrayTeclaErronea = [];

//IMPRESION DE LINEAS VACIAS
function lineasVacias() {
  var contador = 55;
  for (let i = 0; i < palabraArray.length; i++) {
    lineaLetra(lineaX, lineaY);
    contador++;
    lineaX = lineaX + contador;
  }
}

// //DIBUJANDO LETRAS CORRECTAS
var letraBien = "";
var letraCorrectaX = 235;
var letraCorrectaY = 500;
var largoLinea = 55;
function escribirletrasCorrectas(letraBien, i, letraCorrectaY) {
  let posicion = letraCorrectaX + largoLinea * i;
  posicion += 6;
  letraCorrectaY -= 5;
  pincel.fillStyle = "green"; //color de relleno
  pincel.font = "25pt Fixedsys"; //estilo de texto
  pincel.fillText(letraBien, posicion, letraCorrectaY);
}
//DIBUJANDO LETRAS INCORRECTAS
var letraMal = "";
var letraIncorrectaX = 235;
var letraIncorrectaY = 480;
function letrasIncorrectas(letraMal, letraIncorrectaX, letraIncorrectaY) {
  letraIncorrectaY = letraIncorrectaY + 50;
  pincel.fillStyle = "red"; //color de relleno
  pincel.font = "30px Eras ITC"; //estilo de texto
  pincel.fillText(letraMal, letraIncorrectaX, letraIncorrectaY);
}
//IMPRESION DE LETRAS ERRRONEAS
function letrasErroneas(teclaPulsada) {
  var contador = 30;

  letraMal = teclaPulsada;
  letrasIncorrectas(letraMal, letraIncorrectaX, letraIncorrectaY);
  contador++;
  letraIncorrectaX = letraIncorrectaX + contador;
}

//INGRESO DE LETRA
var numeros = "0123456789";
var contadorError = 0;

// CAPTURANDO Y EVALUANDO LETRA
function capturarLetra() {
  document.addEventListener("keydown", (event) => {
    //VERIFICANDO QUE LA LETRA INGRESADA SOLO SEA MAYUSCULA
    if (event.key.match(/[^A-Z\s]/) || event.key.match(numeros)) {
      return alert("Solo puedes usar letras mayúsculas!!");
    } else {
      //COMPROBANDO SI HAY LETRAS REPETIDAS AL INGRESAR POR TECLADO
      if (!letrasRepetidas(event.key)) {
        //si no hay repetidas guarda la letra para procesarla
        teclaPulsada = event.key;
        //si la letra pulsada esta en la palabra, la imprime y guarda en array
        if (palabraArray.includes(teclaPulsada)) {
          if (!arrayTeclaBien.includes(teclaPulsada)) {
            for (var i = 0; i < palabraArray.length; i++) {
              if (teclaPulsada == palabraArray[i]) {
                escribirletrasCorrectas(palabraArray[i], i, letraCorrectaY);
                arrayTeclaBien.push(teclaPulsada);
              }
            }
          }
          console.log(arrayTeclaBien);
        } else {
          //si la letra pulsada no esta en la palabra, la imprime abajo y guarda en array de errores y cuenta la cantidad de los mismos
          if (!arrayTeclaErronea.includes(teclaPulsada)) {
            arrayTeclaErronea.push(teclaPulsada);
            contadorError++;
            errores(contadorError);
            console.log(arrayTeclaErronea);
            console.log(contadorError);
            letrasErroneas(teclaPulsada);
          }
        }
        console.log(teclaPulsada);
      }
    }

    if (arrayTeclaBien.length == palabraArray.length) {
      exito();
      setInterval(reiniciarPantalla, 4000);
    }
    if (arrayTeclaErronea.length >= 9) {
      derrota();
      setInterval(reiniciarPantalla, 4000);
    }
  });
}
//REINICIANDO TODO
function reiniciarPantalla() {
  location.reload();
}

//EVITANDO REPETICION AL INGRESAR LETRAS
function letrasRepetidas(teclaPulsada) {
  if (arrayTeclaBien.includes(teclaPulsada) || arrayTeclaErronea.includes(teclaPulsada)) {
    return true;
    alert("LA LETRA YA FUE INGRESADA");
  }
}
//IMPRESION DE PERSONAJE AHORCADO
function errores(contadorError) {
  if (contadorError <= 9) {
    switch (contadorError) {
      case 1:
        mastil();
        break;
      case 2:
        barra();
        break;
      case 3:
        soga();
        break;
      case 4:
        cabeza();
        break;
      case 5:
        torso();
        break;
      case 6:
        brazo1();
        break;
      case 7:
        brazo2();
        break;
      case 8:
        pierna1();
        break;
      case 9:
        pierna2();
        //derrota();
        break;
    }
  } else {
    alert("DEBE INICIAR EL JUEGO");
  }
}
//MENSAJE DE EXITO
function exito() {
  var textoExito = "GANASTE!!!"; //texto de prueba

  pincel.beginPath(); //iniciar ruta
  pincel.strokeStyle = "white"; //color externo
  pincel.fillStyle = "green"; //color de relleno
  pincel.font = "50px Showcard Gothic"; //estilo de texto

  pincel.strokeText(textoExito, 500, 250); //texto con los dos métodos
  pincel.fillText(textoExito, 500, 250);
}
//MENSAJE DE DERROTA
function derrota() {
  var textoDerrota = "LO SIENTO, PERDISTE!";
  var textoReal = "La palabra era: " + palabra;

  pincel.beginPath(); //iniciar ruta
  pincel.strokeStyle = "white"; //color externo
  pincel.fillStyle = "red"; //color de relleno
  pincel.font = "30px Showcard Gothic"; //estilo de texto

  pincel.strokeText(textoDerrota, 500, 150); //texto con los dos métodos
  pincel.fillText(textoDerrota, 500, 150);
  pincel.fillText(textoReal, 460, 180);
}

function lineaLetra(palabraArray) {
  for (let i = 0; i < palabraArray.length; i++) {
    var posicion = letraCorrectaX + largoLinea * i;
    pincel.moveTo(posicion, letraCorrectaY);
    pincel.lineTo(posicion + 40, letraCorrectaY);
    pincel.strokeStyle = "orange";
    pincel.stroke();
  }
}
