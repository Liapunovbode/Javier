function pedirClave() {
    var clave = prompt("Por favor ingresa la clave:");

    // Verificar si la clave es correcta
    if (clave === "kostenko") {
        // Abrir enlace de descarga en otra pestaña del navegador
        window.open("https://drive.google.com/file/d/1BI9huV58vqmZeEl6MnSfM5shQVBWfLvG/view?usp=sharing", "_blank");
    } else {
        alert("Clave incorrecta. Inténtalo de nuevo.");
    }
}

// Vincular la función al evento click del botón
document.getElementById("downloadButton").addEventListener("click", pedirClave);
