let ataqueJugador = ""
let ataqueEnemigo = ""
window.addEventListener('load',iniciarJuego)
function iniciarJuego(){
let botonMascotaJugador = document.getElementById("boton-mascota")//Aca se toma la varible que contiene todo el boton
botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)//Aca se le asigna un listener para cuando le den click
}
function encontrarSeleccion(listado,opcion){ //funcion generica para grupos4
    var aleatorio = Math.floor(Math.random()*(listado.length))
    if(opcion) return listado[aleatorio].id 
    else{
        listado.forEach(element => {
            if(element.checked) return element
        });
    }
 }
function seleccionarMascotaJugador(){//muestra en pantalla la seleccion
    let listadoMascotas = document.getElementsByName("mascota")
    
    let mascotaJugador = document.getElementById("mascota-jugador")
    let mascotaEnemigo = document.getElementById("mascota-enemigo")
    
    let botonFuego = document.getElementById("fuego")
    let botonAgua = document.getElementById("agua")
    let botonTierra = document.getElementById("tierra")
    
    mascotaJugador.innerHTML= encontrarSeleccion(listadoMascotas)
    mascotaEnemigo.innerHTML= encontrarSeleccion(listadoMascotas,true)
  
    botonFuego.addEventListener('click',ataqueFuego)
    botonAgua.addEventListener('click',ataqueAgua)
    botonTierra.addEventListener('click',ataqueTierra)
}
function ataqueFuego(){
    ataqueJugador = "FUEGO"
    mostrarAtaques()
}
function ataqueAgua(){
    ataqueJugador = "AGUA"
    mostrarAtaques()
}
function ataqueTierra(){
    ataqueJugador = "TIERRA"
    mostrarAtaques()
}
function mostrarAtaques(){
    let listaAtaques = document.getElementsByName("ataques")
    ataqueEnemigo = encontrarSeleccion(listaAtaques,true)
    document.getElementById("ataque-jugador").innerHTML = ataqueJugador
    document.getElementById("ataque-enemigo").innerHTML = ataqueEnemigo
}
