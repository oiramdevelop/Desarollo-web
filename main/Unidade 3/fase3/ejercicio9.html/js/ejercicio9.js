function capitalizar(texto) {
  return texto
    .split(" ")
    .map(p => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");
}

function probarMayusculas() {
  const texto = document.getElementById("texto").value;
  document.getElementById("resultado").innerText = capitalizar(texto);
}
