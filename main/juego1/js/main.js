const password = "L4ultimavezKtelod1go";

function calcularPuntaje(intent, password) {
let puntos = 0;
let aciertos = "";

  // Recorremos cada letra del intento
for (let i = 0; i < intent.length; i++) {
    let letra = intent[i];

    // Coincidencia exacta en posición y forma
    if (i < password.length && letra === password[i]) {
    aciertos += letra;

    if ("aeiouAEIOU".includes(letra)) {
        puntos += 1; // Vocal
    } else if (!isNaN(letra)) {
        puntos += 3; // Número
    } else {
        puntos += 2; // Consonante
    }
    }
}

return { puntos, aciertos };
}

function jugar() {
const player1 = document.getElementById("jugador1").value;
const player2 = document.getElementById("jugador2").value;
const player3 = document.getElementById("jugador3").value;


const r1 = calcularPuntaje(player1, password);
const r2 = calcularPuntaje(player2, password);
const r3 = calcularPuntaje(player3, password);

const resultados = [
    { nombre: "Jugador 1", ...r1 },
    { nombre: "Jugador 2", ...r2 },
    { nombre: "Jugador 3", ...r3 },
];


const maxPuntos = Math.max(r1.puntos, r2.puntos, r3.puntos);
const ganador = resultados.find(r => r.puntos === maxPuntos);


let html = "";
resultados.forEach(r => {
    html += `<p>${r.nombre}: ${r.puntos} puntos — Aciertos: ${r.aciertos || "Ninguno"}</p>`;
});

html += `<h3> El Ganador es: ${ganador.nombre} con ${ganador.puntos} puntos!</h3>`;
document.getElementById("resultados").innerHTML = html;
}