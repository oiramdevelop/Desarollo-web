
//función de JavaScript para ocultar direcciones de correo
//electrónico y protegerlas de usuarios no autorizados.
function ocultar_correo(email) {
    email = email.trim();
    const arrobaEncontrado = email.indexOf('@');

    if (arrobaEncontrado === -1) {
        return "Correo inválido";
    }

    const part1 = email.substring(0, 3);
    const part2 = email.substring(arrobaEncontrado);

    return part1 + '...' + part2;
}

function ocultarYMostrar() {
    const emailIngresado = document.getElementById("email").value;
    
    if (!emailIngresado.trim()) {
        document.getElementById("correo_encriptado").textContent = "Por favor, escribe un correo.";
        return;
    }

    const resultado = ocultar_correo(emailIngresado);
    document.getElementById("correo_encriptado").textContent = resultado;
}


document.getElementById("email").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        ocultarYMostrar();
    }
});
