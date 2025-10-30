function palabra_busqueda(texto, palabra) {
    const regex = new RegExp(palabra, "gi");
    const coincidencias = texto.match(regex);
    const cantidad = coincidencias ? coincidencias.length : 0;
    return `'${palabra}' se encontró ${cantidad} ${cantidad === 1 ? "vez" : "veces"}.`;
}

function probarBusqueda() {
    const texto = document.getElementById("texto").value;
    const palabra = document.getElementById("palabra").value;
    document.getElementById("resultado").innerText =
    palabra_busqueda(texto, palabra);
}
