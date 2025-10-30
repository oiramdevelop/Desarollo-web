function contarSubcadena(texto, subcadena) {
  const regex = new RegExp(subcadena, "gi");
  const coincidencias = texto.match(regex);
  return coincidencias ? coincidencias.length : 0;
}

function probarContar() {
  const texto = document.getElementById("texto").value;
  const sub = document.getElementById("subcadena").value;
  const cantidad = contarSubcadena(texto, sub);
  document.getElementById("resultado").innerText =
    `La subcadena "${sub}" aparece ${cantidad} veces.`;
}
