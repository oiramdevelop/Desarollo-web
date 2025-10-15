const calculator = (operacion) => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let resultado;

    switch (operacion) {
    case "suma":
        resultado = num1 + num2;
    break;
    case "resta":
        resultado = num1 - num2;
    break;
    case "multiplica":
        resultado = num1 * num2;
    break;
    case "divide":
        resultado = num2 !== 0 ? num1 / num2 : "Error (división por 0)";
    break;
    default:
        resultado = "Operación no válida";
    } 

    document.getElementById("resultado").textContent = resultado;
};

// Asignamos las funciones a los botones
document.getElementById("suma").onclick = () => calculator("suma");
document.getElementById("resta").onclick = () => calculator("resta");
document.getElementById("multiplica").onclick = () => calculator("multiplica");
document.getElementById("divide").onclick = () => calculator("divide");
