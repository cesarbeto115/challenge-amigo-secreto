let amigos = [];
const regexAmigo = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/;

function agregarAmigo() {
    if (amigos.length >= 5) {
        alert("¡Ya has añadido 5 nombres! No puedes añadir más.");
        return;
    }

    let amigo = document.getElementById("nombreAmigo").value.trim();

    if (amigo === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    if (!regexAmigo.test(amigo)) {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (amigos.includes(amigo)) {
        alert("Este amigo ya está en la lista.");
        return;
    }

    amigos.push(amigo);
    mostrarAmigos();
    limpiarCaja();
}

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function limpiarCaja() {
    document.getElementById("nombreAmigo").value = "";
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para el sorteo.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = amigoSorteado;
}