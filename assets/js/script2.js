var btnAbrirPopup2 = document.getElementById('btn-abrir-popup2'),
	overlay2 = document.getElementById('overlay2'),
	popup2 = document.getElementById('popup2'),
	btnCerrarPopup2 = document.getElementById('btn-cerrar-popup2');

btnAbrirPopup2.addEventListener('click', function(){
	overlay2.classList.add('active');
	popup2.classList.add('active');
});

btnCerrarPopup2.addEventListener('click', function(e){
	e.preventDefault();
	overlay2.classList.remove('active');
	popup2.classList.remove('active');
});

function compararNumeros() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    if (isNaN(num1) || isNaN(num2)){
		document.getElementById('resultado2').textContent = "Debes ingresar los numeros.";
	    } else {
      if (num1 > num2) {
        document.getElementById('resultado2').textContent = "El número " + num1 + " es mayor.";
      } else if (num2 > num1) {
        document.getElementById('resultado2').textContent = "El número " + num2 + " es mayor.";
      } else {
        document.getElementById('resultado2').textContent = "Ambos números son iguales.";
      }
  }
}

  