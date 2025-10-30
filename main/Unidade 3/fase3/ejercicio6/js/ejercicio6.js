function protege_email(email) {
  const [nombre, dominio] = email.split("@");
  const parteVisible = nombre.slice(0, 3);
  return `${parteVisible}...@${dominio}`;
}

function probarProteccion() {
  const correo = document.getElementById("email").value;
  document.getElementById("resultado").innerText = protege_email(correo);
}
