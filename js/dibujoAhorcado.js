var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");


pincel.fillStyle = "transparent";
pincel.fillRect(0, 0, 1200 , 800);
pincel.lineWidth = 3;


//BASE
function base() {
  pincel.fillStyle = "red"; //propiedad
  pincel.beginPath();
  pincel.moveTo(150, 450);
  pincel.lineTo(100, 500);
  pincel.lineTo(200, 500);
  pincel.fill();
}

//MASTIL
function mastil() {
  pincel.strokeStyle = "orange";
  pincel.beginPath();
  pincel.moveTo(150, 450);
  pincel.lineTo(150, 100);
  pincel.stroke();
}

//BARRA
function barra() {
  pincel.strokeStyle = "orange";
  pincel.moveTo(150, 100);
  pincel.lineTo(300, 100);
  pincel.stroke();
}

//SOGA
function soga() {
  pincel.moveTo(300, 100);
  pincel.lineTo(300, 150);
  pincel.strokeStyle = "orange";
  pincel.stroke();
}
// var img = new Image();
// img.src = "imagen/emoji.png";
//CABEZA
// function cabeza() {
//   img.onload = function () {
//     pincel.drawImage(img, 275, 150, 50, 50);
//   };
// }
// OTRA CABEZA (comentar anterior y descomentar esta)
function cabeza() {
pincel.fillStyle = "transparent";
pincel.beginPath();
pincel.arc(300,175,25,0,2*3.14);
pincel.fill();
}

//TORSO
function torso() {
  pincel.moveTo(300, 200);
  pincel.lineTo(300, 280);
  pincel.strokeStyle = "orange";
  pincel.stroke();
}

//BRAZO1
function brazo1() {
  pincel.moveTo(300, 205);
  pincel.lineTo(350, 250);
  pincel.strokeStyle = "orange";
  pincel.stroke();
}

//BRAZO2
function brazo2() {
  pincel.moveTo(300, 205);
  pincel.lineTo(250, 250);
  pincel.strokeStyle = "orange";
  pincel.stroke();
}

//PIERNA1
function pierna1() {
  pincel.moveTo(300, 280);
  pincel.lineTo(320, 340);
  pincel.strokeStyle = "orange";
  pincel.stroke();
}

//PIERNA2
function pierna2() {
  pincel.moveTo(300, 280);
  pincel.lineTo(280, 340);
  pincel.strokeStyle = "orange";
  pincel.stroke();
}

