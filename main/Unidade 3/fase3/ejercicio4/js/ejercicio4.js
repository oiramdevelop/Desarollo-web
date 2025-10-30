function extraerCaracteres(texto, cantidad) {
  return texto.substring(0, cantidad);
}

function probarExtraer() {
  const texto = document.getElementById("cadena").value;
  const cantidad = parseInt(document.getElementById("num").value);
  document.getElementById("resultado").innerText =
    extraerCaracteres(texto, cantidad);
}
