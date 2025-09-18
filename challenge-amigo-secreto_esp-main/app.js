// Array global para almacenar los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    input.value = "";

    mostrarLista();
    console.log(amigos); // debug
}

// Función para mostrar la lista en el HTML
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función para sortear
function sortearAmigo() {
    // 1. Validar que haya amigos en el array
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear.");
        return;
    }

    // 2. Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // 3. Obtener el nombre sorteado
    let amigoSecreto = amigos[indiceAleatorio];

    // 4. Mostrar el resultado en el HTML
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "🎉 El amigo secreto es: <strong>" + amigoSecreto + "</strong>";
}
