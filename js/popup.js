var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlayform = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
	overlayform.classList.add('active');
	popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlayform.classList.remove('active');
	popup.classList.remove('active');
});