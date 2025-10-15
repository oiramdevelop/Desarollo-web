const numero_aleatorio = () => {
    const pedir_numero = parseInt(prompt("Introduce un número entero:"), 10);
    const aleatorio = Math.floor(Math.random() * pedir_numero) + 1;
    document.getElementById("aleatory_number").textContent = aleatorio;
};

numero_aleatorio();

