let weeksDays = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
console.log(weeksDays.map(days => days.length));


// Nuevo: renderizar en DOM
const container = document.getElementById('days');
const summary = document.getElementById('summary');

if (container) {
    const lengths = weeksDays.map(d => d.length);
    weeksDays.forEach((day, i) => {
        const card = document.createElement('article');
        card.className = 'day-card';
        card.innerHTML = `
            <div class="day-name">${day}</div>
            <p class="day-count">${lengths[i]} letras</p>
        `;
        container.appendChild(card);
    });

    const total = lengths.reduce((a,b) => a + b, 0);
    if (summary) {
        summary.textContent = `Total de letras entre todos los días: ${total}`;
    }
}
console.log('Días renderizados en el DOM');

