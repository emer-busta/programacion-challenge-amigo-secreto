// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


const amigos = []; // Array para almacenar los nombres

// La función agregarAmigo() nos permitira agregar un amigo a la lista (array) .
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Eliminar espacios en blanco

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Validar si el nombre ya existe en el array
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido añadido. Por favor, ingresa un nombre diferente.");
        return;
    }

    amigos.push(nombre); // Agregar al array
    input.value = ""; // Limpiar el campo de entrada
    actualizarLista();


}



// La función actualizarLista() nos permitira actualizar la lista de amigos.
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}


// La función sortearAmigo() nos permitira elegir un amigo aleatorio que se encuentra dentro de la lista de amigos.
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista está vacía. Agregue nombres antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}








