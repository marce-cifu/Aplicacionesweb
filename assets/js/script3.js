var btnAbrirPopup3 = document.getElementById('btn-abrir-popup3'),
	overlay3 = document.getElementById('overlay3'),
	popup3 = document.getElementById('popup3'),
	btnCerrarPopup3 = document.getElementById('btn-cerrar-popup3');

btnAbrirPopup3.addEventListener('click', function(){
	overlay3.classList.add('active');
	popup3.classList.add('active');
});

btnCerrarPopup3.addEventListener('click', function(e){
	e.preventDefault();
	overlay3.classList.remove('active');
	popup3.classList.remove('active');
});

function contarVocales() {
    var frase = document.getElementById('inputFrase').value;
    var vocales = ['a', 'e', 'i', 'o', 'u'];
    var resultado = '';
    var contador = 0;

    for (var i = 0; i < frase.length; i++) {
        var caracter = frase[i].toLowerCase();

        if (vocales.includes(caracter)) {
            resultado += caracter + ' ';
            contador +=1;
        }
    }

    if (resultado === '') {
        resultado = 'No se encontraron vocales en la frase.';
    }

    document.getElementById('resultado3').textContent = 'Vocales encontradas: ' + resultado;
    document.getElementById('resultado3_1').textContent = 'cantidad de vocales: ' + contador;
}
  