const password = "L4ultimavezKtelod1go";

/**
 * Calcula el puntaje de un intento basado en coincidencias exactas (posición y carácter).
 * @param {string} intent - El intento del jugador.
 * @param {string} password - La contraseña a adivinar.
 * @returns {{puntos: number, aciertos: string}} Los puntos totales y los caracteres acertados.
 */
function calcularPuntaje(intent, password) {
    let puntos = 0;
    let aciertos = "";
    
    // Recorremos cada letra del intento
    for (let i = 0; i < intent.length; i++) {
        let letra = intent[i];

        // 1. Condición de coincidencia: Debe estar dentro de la longitud de la contraseña
        //    y el carácter debe ser idéntico al de la contraseña en esa posición (i).
        if (i < password.length && letra === password[i]) {
            aciertos += letra;

            // 2. Asignación de Puntos (jerarquía: Número > Vocal > Consonante)
            if (!isNaN(letra) && letra !== ' ') { // Es un número (se suma 3)
                puntos += 3;
            } else if ("aeiouAEIOU".includes(letra)) { // Es una vocal (se suma 1)
                puntos += 1;
            } else { // Es una consonante u otro símbolo (se suma 2)
                puntos += 2; 
            }
        }
    }

    return { puntos, aciertos };
}

function jugar() {
    
    const player1 = document.getElementById("jugador1").value.trim();
    const player2 = document.getElementById("jugador2").value.trim();
    const player3 = document.getElementById("jugador3").value.trim();
    
    // Sugerencia de depuración: Verifica si los valores se están capturando bien
    console.log("Intento J1:", player1); 

    const r1 = calcularPuntaje(player1, password);
    const r2 = calcularPuntaje(player2, password);
    const r3 = calcularPuntaje(player3, password);

    const resultados = [
        { nombre: "Jugador 1", ...r1 },
        { nombre: "Jugador 2", ...r2 },
        { nombre: "Jugador 3", ...r3 },
    ];

    // Buscar la máxima puntuación
    const maxPuntos = Math.max(r1.puntos, r2.puntos, r3.puntos);
    
    // Encontrar al ganador (el primero que tenga esa puntuación máxima)
    const ganador = resultados.find(r => r.puntos === maxPuntos);

    let html = "";
    resultados.forEach(r => {
        // Usa el operador ternario para mostrar "Ninguno" si la cadena de aciertos está vacía
        const aciertosMostrar = r.aciertos.length > 0 ? r.aciertos : "Ninguno";
        html += `<p>${r.nombre}: ${r.puntos} puntos — Aciertos: **${aciertosMostrar}**</p>`;
    });

    // Añadir un mensaje especial si no hay puntos (todos sacaron 0)
    if (maxPuntos === 0) {
        html += `<h3>Nadie acertó en la posición correcta. ¡El ganador es: ${ganador.nombre} con ${ganador.puntos} puntos!</h3>`;
    } else {
        html += `<h3> ¡El Ganador es: ${ganador.nombre} con ${ganador.puntos} puntos!</h3>`;
    }
    
    document.getElementById("resultados").innerHTML = html;
}