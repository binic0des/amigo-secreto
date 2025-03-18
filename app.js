let amigos = [];

function agregarAmigo() {
    let inputNombre = document.getElementById("amigo").value.trim();


    if (!inputNombre) {
        alert("Por favor, inserte un nombre.");
        return; 
    }

  
    amigos.push(inputNombre);
    document.getElementById("amigo").value = " ";

    mostrarListaAmigos();
}

function mostrarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");

    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigos[i];
        listaAmigos.appendChild(nuevoElemento);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista. Agrega algunos nombres primero.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];


    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `¡El amigo secreto es: <strong>${amigoSorteado}</strong>!`;
}
