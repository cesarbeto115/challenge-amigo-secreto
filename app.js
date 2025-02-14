let amigos = [];

const regexAmigo = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/;

function agregarAmigo() {
    if (amigos.length >= 5) {
        alert("¡Ya has añadido 5 nombres! No puedes añadir más.");
        return;
      }

    let amigo = document.getElementById("nombreAmigo").value;

    if (amigo.trim() === "") {
      alert("Por favor, ingresa un nombre.");
      return;
    }

    //Para saber si el dato ingresado solo sea string
    if (!regexAmigo.test(amigo)) {
      alert("Por favor, ingresa un nombre válido");
      return;
    }

    amigos.push(amigo);

    // Mostrar el nombre en la página
    let nuevoAmigo = document.createElement("p");
    nuevoAmigo.textContent = amigo;
    document.getElementById("listaAmigos").appendChild(nuevoAmigo);

    limpiarCaja();

    console.log(amigos);
  }

  function limpiarCaja() {
    document.getElementById("listaAmigos").value = '';
}
