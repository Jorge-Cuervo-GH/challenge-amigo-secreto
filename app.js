
    let amigos = [];

        function agregarAmigo() {
            let inputNombre = document.getElementById("amigo");
            let nombre = inputNombre.value;
            if (!nombre) {
                alert("Por favor, ingresa un nombre.");
                return;
            }
            amigos.push(nombre);
            actualizarLista();
            document.getElementById("amigo").value = ""; 
        }

        function actualizarLista() {
            let lista = document.getElementById("listaAmigos");
            lista.innerHTML = ""; 
            amigos.forEach(amigo => {
                let elementoLista = document.createElement("li");
                elementoLista.textContent = amigo;
                lista.appendChild(elementoLista);
            });
        }

        function sortearAmigo() {
            if (amigos.length < 2) {
                alert("Necesitas ingresar al menos 2 nombres de amigos para realizar el sorteo.");
                return;
            }
            let indiceAleatorio = Math.floor(Math.random() * amigos.length);
            let amigoSecreto = amigos[indiceAleatorio];
            document.getElementById("resultado").textContent = `¡¡FELICIDADES!!  El amigo secreto elegido es:  ${amigoSecreto}`;

            let limpiarLista = document.getElementById("listaAmigos");
            limpiarLista.innerHTML = "";
        }

            function reiniciarJuego() {
                amigos = []; // Vaciar la lista de amigos
                document.getElementById("listaAmigos").innerHTML = ""; // Limpiar la lista en el HTML
                document.getElementById("resultado").textContent = ""; // Limpiar el resultado
            }
   
        


          