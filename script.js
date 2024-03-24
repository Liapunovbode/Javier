function pedirClave() {
    var clave = prompt("Por favor ingresa la clave:");

    // Verificar si la clave es correcta
    if (clave === "kostenko") {
        // Abrir enlace de descarga en otra pestaña del navegador
        window.open("https://github.com/Liapunovbode/Javier/blob/Probando1/CuRi.pdf", "_blank");
    } else {
        alert("Clave incorrecta. Inténtalo de nuevo.");
    }
}

// Vincular la función al evento click del botón
document.getElementById("downloadButton").addEventListener("click", pedirClave);
