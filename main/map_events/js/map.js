 // Datos iniciales
        const mapCiudades = [
            { idCity: 1, cityName: "Juzcar", numPeople: 250 },
            { idCity: 2, cityName: "Wadi-r-rumman", numPeople: 2926 },
            { idCity: 3, cityName: "Villamuerto", numPeople: 39 },
            { idCity: 4, cityName: "Guasa", numPeople: 64 }
        ];

        // Función para mostrar la lista en HTML
        function mostrarLista() {
            const ul = document.getElementById('listaCiudades');
            mapCiudades.forEach(ciudad => {
                const li = document.createElement('li');
                li.textContent = `ID: ${ciudad.idCity} - ${ciudad.cityName} - Habitantes: ${ciudad.numPeople}`;

                

                ul.appendChild(li);
            });
        }

        mostrarLista(); // Mostrar al cargar la página

        // Función para mostrar total de ciudades
        function mostrarTotalCiudades() {
            alert(`Total de ciudades: ${mapCiudades.length}`);
        }

        // Función para buscar ciudad por número
        function pedirCiudad() {
            let id = Number(prompt("Introduce el número de la ciudad:"));
            let ciudad = mapCiudades.find(c => c.idCity === id);
            if(ciudad){
                alert(`Ciudad encontrada: ${ciudad.cityName}, Habitantes: ${ciudad.numPeople}`);
            } else {
                alert("Ciudad no encontrada.");
            }
        }

        // Función para agregar ciudad
        function agregarCiudad() {
            let id = Number(prompt("Introduce el ID de la nueva ciudad:"));
            let name = prompt("Introduce el nombre de la ciudad:");
            let habitantes = Number(prompt("Introduce la cantidad de habitantes:"));

            mapCiudades.push({ idCity: id, cityName: name, numPeople: habitantes });
            mostrarLista();
        }

        // Función para borrar ciudad
        function borrarCiudad() {
            let id = Number(prompt("Introduce el ID de la ciudad a borrar:"));
            const index = mapCiudades.findIndex(c => c.idCity === id);
            if(index !== -1){
                mapCiudades.splice(index, 1);
                mostrarLista();
            } else {
                alert("Ciudad no encontrada.");
            }
        }