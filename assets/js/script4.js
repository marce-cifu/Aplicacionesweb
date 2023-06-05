var btnAbrirPopup4 = document.getElementById('btn-abrir-popup4'),
	overlay4 = document.getElementById('overlay4'),
	popup4 = document.getElementById('popup4'),
	btnCerrarPopup4 = document.getElementById('btn-cerrar-popup4');

btnAbrirPopup4.addEventListener('click', function(){
	overlay4.classList.add('active');
	popup4.classList.add('active');
});

btnCerrarPopup4.addEventListener('click', function(e){
	e.preventDefault();
	overlay4.classList.remove('active');
	popup4.classList.remove('active');
});

function contarCadaVocal() {
    var frase = document.getElementById("frase").value.toLowerCase();
    var contadorA = 0;
    var contadorE = 0;
    var contadorI = 0;
    var contadorO = 0;
    var contadorU = 0;
  
    for (var i = 0; i < frase.length; i++) {
      var letra = frase.charAt(i);
  
      switch (letra) {
        case "a" || "A":
          contadorA++;
          break;
        case "e" || "E":
          contadorE++;
          break;
        case "i" || "I":
          contadorI++;
          break;
        case "o" || "O":
          contadorO++;
          break;
        case "u" || "U":
          contadorU++;
          break;
      }
    }
  
    var resultado = "La cantidad de veces que aparece la vocal"+ "<br>" +
                    "A: " + contadorA + "<br>" +
                    "E: " + contadorE + "<br>" +
                    "I: " + contadorI + "<br>" +
                    "O: " + contadorO + "<br>" +
                    "U: " + contadorU;
  
    document.getElementById("resultado4").innerHTML = resultado;
  }
  