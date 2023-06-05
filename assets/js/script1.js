var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});

function verificarPalindromo() {
	var ingresar_palabra = document.getElementById('inputText').value.toLowerCase().replace(/[^a-z0-9]/g, '');
	if (ingresar_palabra === '') {
		document.getElementById('resultado').textContent = "Por favor, ingresa una palabra.";
	} else {
	var palabra = ingresar_palabra.split('').reverse().join('');
	
	if (ingresar_palabra === palabra) {
	  document.getElementById('resultado').textContent = 'Es un palíndromo.';
	} else {
	  document.getElementById('resultado').textContent = 'No es un palíndromo.';
	}
  }
}

