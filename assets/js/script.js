// script.js
window.onload = function() {
    document.getElementById("urlTextbox").value = window.location.href;
};
function mostrarContenido() {
    var url = document.getElementById("urlTextbox").value;
    var xhr = new XMLHttpRequest();

    var estadoElement = document.getElementById("estado");
    var cabecerasElement = document.getElementById("cabeceras");
    var codigoEstadoElement = document.getElementById("codigoEstado");

    xhr.onreadystatechange = function() {
        estadoElement.innerHTML = "Estado: " + getEstado(xhr.readyState);

        if (xhr.readyState === 4) {
            cabecerasElement.innerHTML = xhr.getAllResponseHeaders();
            codigoEstadoElement.innerHTML = "Código de estado: " + xhr.status;

            if (xhr.status === 200) {
                var response = xhr.responseText;
                document.getElementById("contenidos").innerHTML = response;
            } else {
                document.getElementById("contenidos").innerHTML = "Error en la petición";
            }
        }
    };

    xhr.open("GET", url, true);
    xhr.send();
}

function getEstado(readyState) {
    switch (readyState) {
        case 0:
            return "No iniciada";
        case 1:
            return "Conexión establecida";
        case 2:
            return "Petición recibida";
        case 3:
            return "Procesando petición";
        case 4:
            return "Petición completada";
        default:
            return "Desconocido";
    }
}
