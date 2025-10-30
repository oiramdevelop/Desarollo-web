const password = "L4ultimavezKtelod1go";

/**
 * Calcula el puntaje de un intento basado en coincidencias de carácter (sin importar la posición).
 * Cada carácter de la contraseña solo puede ser acertado y puntuado una vez.
 * @param {string} intent - El intento del jugador.
 * @param {string} password - La contraseña a adivinar.
 * @returns {{puntos: number, aciertos: string}} Los puntos totales y los caracteres acertados.
 */
function calcularPuntaje(intent, password) {
    let puntos = 0;
    let aciertos = "";
    
    // Crear una copia de la contraseña como un array para "eliminar" caracteres ya puntuados
    let passwordArray = password.split('');

    // Recorremos cada letra del intento del jugador
    for (let i = 0; i < intent.length; i++) {
        let letra = intent[i];

        // 1. Buscamos si el carácter del intento (letra) existe en cualquier posición de la contraseña restante
        const indiceCoincidencia = passwordArray.indexOf(letra);

        if (indiceCoincidencia !== -1) {
            // El carácter existe en la contraseña

            // 2. Registramos el acierto
            aciertos += letra;
            
            // 3. Eliminamos ese carácter de la copia de la contraseña (para evitar que se puntúe dos veces)
            passwordArray.splice(indiceCoincidencia, 1);

            // 4. Asignación de Puntos (jerarquía: Número > Vocal > Consonante)
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
    
    // Captura los valores de los inputs
    const player1 = document.getElementById("jugador1").value.trim();
    const player2 = document.getElementById("jugador2").value.trim();
    const player3 = document.getElementById("jugador3").value.trim();
    
    console.log("Intento J1:", player1); 

    // Los cálculos ahora usan la nueva lógica
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
        html += `<p>${r.nombre}: **${r.puntos} puntos** — Aciertos: ${aciertosMostrar}</p>`;
    });

    // Añadir un mensaje
    if (maxPuntos === 0) {
        html += `<h3 style="color: gray;">Nadie acertó un carácter. ¡El ganador es: ${ganador.nombre} con ${ganador.puntos} puntos!</h3>`;
    } else {
        html += `<h3 style="color: green;"> ¡El Ganador es: ${ganador.nombre} con ${ganador.puntos} puntos!</h3>`;
    }
    
    document.getElementById("resultados").innerHTML = html;
}