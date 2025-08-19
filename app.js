let listaAmigos = [];
let nombreAmigo;
let mostrarAmigos;
let amigoAleatorio;
let amigoSorteado;
let mostrarAmigoSorteado;

function asignarTextoElemento(id, texto){
    let idHTML = document.getElementById(id);
    idHTML.innerHTML = texto;
    return;
}

function agregarAmigo(){
let nombreAmigo = document.getElementById("amigo").value;
console.log(nombreAmigo);
if (nombreAmigo == ""){
    alert("Por favor inserte un nombre");
} else if (listaAmigos.includes(nombreAmigo)) {
    alert("Ingrese otro nombre, ese ya ha sido ingresado");
} else {
    listaAmigos.push(nombreAmigo);
    mostrarAmigo();
    console.log(listaAmigos);
}
limpiarCaja();
return;
}

function mostrarAmigo(){

    mostrarAmigos = document.getElementById("listaAmigos");
    mostrarAmigos.innerHTML = "";

    for ( let i of listaAmigos){
        let li = document.createElement("li");
        li.textContent = i;
        mostrarAmigos.appendChild(li);
    }
    return;
}

function sortearAmigo(){
     if (listaAmigos.length != 0) {
        amigoAleatorio = Math.floor(Math.random()*listaAmigos.length);
        amigoSorteado = listaAmigos[amigoAleatorio];
        
        mostrarAmigoSorteado = document.getElementById("resultado");
        mostrarAmigoSorteado.innerHTML = "";
        mostrarAmigoSorteado.innerHTML = `<li>${amigoSorteado}</li>`
        listaAmigos.splice(amigoAleatorio, 1);

     }else{
        alert("No hay amigos para sortear");
        condicionesIniciales();
     }
} 

function condicionesIniciales(){
    mostrarAmigos = document.getElementById("listaAmigos").innerHTML = "";
    mostrarAmigoSorteado = document.getElementById("resultado").innerHTML = "";
}

function limpiarCaja(){
    document.querySelector("#amigo").value = "";
    return;
}