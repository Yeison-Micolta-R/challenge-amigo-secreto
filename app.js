// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];

function agregarAmigo() {
    if (document.getElementById("amigo").value === "") {
        alert("Debe ingresar un nombre");
        return;
    }else{
        nombres.push(document.getElementById("amigo").value);
        limpiarCaja();
        mostrarAmigos();
        return nombres;
    }
}

function mostrarAmigos() {
    let lista= document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < nombres.length; i++) {
        let li = document.createElement("li");
        li.textContent = nombres[i];
        lista.appendChild(li);
      }
  return;
}

//Limpiar caja de texto
function limpiarCaja() {
    document.getElementById("amigo").value = "";
    return;
}

//Limpiar lista
function limpiarLista() {
    nombres = [];
    let lista= document.getElementById("listaAmigos");
    lista.innerHTML = "";
    return;
}

//Sortear amigo secreto
function sortearAmigo() {
    if (nombres.length < 2) {
        alert("Debe ingresar al menos dos amigos");
    }else{
        let amigoSecreto = nombres.sort(function() {return Math.random() - 0.5});
        limpiarLista();
        document.getElementById('resultado').innerHTML = `El amigo secreto sorteado es ${amigoSecreto[0]} `;
        return;
    }
    
}
