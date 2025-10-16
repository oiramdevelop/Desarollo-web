    // Datos iniciales
        const mapCiudades = [
            { idCity: 1, cityName: "Juzcar", numPeople: 250 },
            { idCity: 2, cityName: "Wadi-r-rumman", numPeople: 2926 },
            { idCity: 3, cityName: "Villamuerto", numPeople: 39 },
            { idCity: 4, cityName: "Guasa", numPeople: 64 }
        ];

        // Mostrar lista
        function mostrarLista() {
            const ul = document.getElementById('listaCiudades');
            ul.innerHTML = ''; // Limpiar lista
            mapCiudades.forEach(ciudad => {
                const li = document.createElement('li');
                li.textContent = `ID: ${ciudad.idCity} - ${ciudad.cityName} - Habitantes: ${ciudad.numPeople}`;
                li.setAttribute('data-id', ciudad.idCity);
                ul.appendChild(li);
            });
        }

        mostrarLista(); // Mostrar al cargar

        // Total de ciudades
        function mostrarTotalCiudades() {
            alert(`Total de ciudades: ${mapCiudades.length}`);
        }

        // Buscar ciudad por ID
        function pedirCiudad() {
            let id = Number(prompt("Introduce el número de la ciudad:"));
            let ciudad = mapCiudades.find(c => c.idCity === id);
            if(ciudad){
                alert(`Ciudad encontrada: ${ciudad.cityName}, Habitantes: ${ciudad.numPeople}`);
            } else {
                alert("Ciudad no encontrada.");
            }
        }

        // Agregar ciudad
        function agregarCiudad() {
            let id = Number(prompt("Introduce el ID de la nueva ciudad:"));
            let name = prompt("Introduce el nombre de la ciudad:");
            let habitantes = Number(prompt("Introduce la cantidad de habitantes:"));

            mapCiudades.push({ idCity: id, cityName: name, numPeople: habitantes });
            mostrarLista();
        }

        // Borrar ciudad
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

        // Encontrar ciudad más poblada
        function ciudadMasHabitada() {
            let maxHabitantes = 0;
            let ciudadMax = null;
            mapCiudades.forEach(ciudad => {
                if(ciudad.numPeople > maxHabitantes){
                    maxHabitantes = ciudad.numPeople;
                    ciudadMax = ciudad;
                }
            });
            return ciudadMax;
        }

        // Encontrar ciudad menos poblada
        function ciudadMenosHabitada() {
            let minHabitantes = Infinity;
            let ciudadMin = null;
            mapCiudades.forEach(ciudad => {
                if(ciudad.numPeople < minHabitantes){
                    minHabitantes = ciudad.numPeople;
                    ciudadMin = ciudad;
                }
            });
            return ciudadMin;
        }

        // Resaltar ciudad más poblada
        function CiudadMasPoblada() {
            const ciudadMax = ciudadMasHabitada();
            if(!ciudadMax) return;

            const lis = document.querySelectorAll('#listaCiudades li');
            lis.forEach(li => {
                li.style.color = '';
                li.style.textDecoration = '';
                if(Number(li.getAttribute('data-id')) === ciudadMax.idCity){
                    li.style.color = 'green';
                    li.style.textDecoration = 'underline';
                }
            });
        }

        // Resaltar ciudad menos poblada
        function MenosPoblada() {
            const ciudadMin = ciudadMenosHabitada();
            if(!ciudadMin) return;

            const lis = document.querySelectorAll('#listaCiudades li');
            lis.forEach(li => {
                li.style.color = '';
                li.style.textDecoration = '';
                if(Number(li.getAttribute('data-id')) === ciudadMin.idCity){
                    li.style.color = 'green';
                    li.style.textDecoration = 'underline';
                }
            });
        }