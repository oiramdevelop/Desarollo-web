function insertarCadena(base, cadena, posicion = 1) {
  return base.slice(0, posicion) + cadena + " " + base.slice(posicion);
}

function probarInsertar() {
  const base = document.getElementById("texto").value;
  const cadena = document.getElementById("insertar").value;
  const posicion = parseInt(document.getElementById("posicion").value) || 1;

  document.getElementById("resultado").innerText =
    insertarCadena(base, cadena, posicion);
}
