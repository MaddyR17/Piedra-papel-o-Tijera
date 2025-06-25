let compu;
let usuario;
start = function() {
   titulo.innerText= 'Elige Uno'
   document.getElementById("comienzo").style.visibility = "hidden";
   document.getElementById("piedra").style.visibility = "visible";
   document.getElementById("papel").style.visibility = "visible";
   document.getElementById("tijera").style.visibility = "visible";
}

function elegir(opcion) {

  document.getElementById("piedra").style.visibility = "hidden";
   document.getElementById("papel").style.visibility = "hidden";
   document.getElementById("tijera").style.visibility = "hidden";
   document.getElementById("again").style.visibility = "visible";

  usuario = opcion;
  compu = Math.floor(Math.random() * 3) + 1; // 1 = piedra, 2 = papel, 3 = tijera

  obtener();

}


obtener = function() {
  titulo.innerText= 'Veamos el resultado'
  let resultado = '';

  if (usuario === compu) {
    resultado = "Es un Empate";
  } else if (
    (usuario === 1 && compu === 3) ||
    (usuario === 2 && compu === 1) ||
    (usuario === 3 && compu === 2)
  ) {
    resultado = "Felicidades Ganaste ";
  } else {
    resultado = "Has Perdido";
  }

  mostrar(resultado);
}
  
   
mostrar = function(resultado) {
  
  let result = resultado;
  titulo.innerText= result
  document.getElementById("computer").style.visibility = "visible";
  document.getElementById("user").style.visibility = "visible";

  document.getElementById("computerimg").style.visibility = "visible";
  document.getElementById("userimg").style.visibility = "visible";

  const computerImage = document.getElementById("imgcomputer");
  const userImage = document.getElementById("imguser");

  let imagenes = {
    1: "piedra.png",
    2: "papel.png",
    3: "tijera.png"
  };

  computerImage.src = imagenes[compu];
  userImage.src = imagenes[usuario];
  
}
restart = function() {
   titulo.innerText= 'Piedra Papel o Tijera';
   document.getElementById("again").style.visibility = "hidden";
   document.getElementById("comienzo").style.visibility = "visible";

  document.getElementById("computer").style.visibility = "hidden";
  document.getElementById("user").style.visibility = "hidden";

  document.getElementById("computerimg").style.visibility = "hidden";
  document.getElementById("userimg").style.visibility = "hidden";
}


// piera = 1 
// papel= 2 
// tijera= 3

// visibility: hidden;



