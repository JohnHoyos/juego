let ataqueJugador = ""
let ataqueEnemigo = ""
let vidaJugador = 3
let vidaEnemigo = 3
window.addEventListener('load',iniciarJuego)
function iniciarJuego(){
let botonSeleccionar = document.getElementById("boton-seleccionar")//Aca se toma la varible que contiene todo el boton
botonSeleccionar.addEventListener('click',actualizarMascotas)//Aca se le asigna un listener para cuando le den click
}
function encontrarSeleccion(listado,opcion){ //funcion generica para grupos4
    var aleatorio = Math.floor(Math.random()*(listado.length))
    if(opcion){return listado[aleatorio].id }
    else{
            for(i=0;i<listado.length;i++){ 
                if(listado[i].checked)
                return listado[i].id
            }
        }
}
function actualizarMascotas(){//muestra en pantalla la seleccion
    let listadoMascotas = document.getElementsByName("mascotas")
    let mascotaJugador = document.getElementById("mascota-jugador")
    let mascotaEnemigo = document.getElementById("mascota-enemigo")
    let botonFuego = document.getElementById("fuego")
    let botonAgua = document.getElementById("agua")
    let botonTierra = document.getElementById("tierra")
    
    mascotaJugador.innerHTML= encontrarSeleccion(listadoMascotas)  
    mascotaEnemigo.innerHTML= encontrarSeleccion(listadoMascotas,true)
    actualizarVidas()
    botonFuego.addEventListener('click',ataqueFuego)
    botonAgua.addEventListener('click',ataqueAgua)
    botonTierra.addEventListener('click',ataqueTierra)
}
function ataqueFuego(){ataqueJugador = "FUEGO";actualizarAtaques()}
function ataqueAgua(){ataqueJugador = "AGUA";actualizarAtaques()}
function ataqueTierra(){ataqueJugador = "TIERRA";actualizarAtaques()}
function actualizarAtaques(){
    let listaAtaques = document.getElementsByName("ataques")
    ataqueEnemigo = encontrarSeleccion(listaAtaques,true).toUpperCase()
    let mensaje = document.createElement("p")
    let seccion_mensajes = document.getElementById("mensajes")
    mensaje.innerHTML = "Tu mascota atacó con " + ataqueJugador + " la mascota del enemigo atacó con " + ataqueEnemigo + " -  " + ganador()
    seccion_mensajes.appendChild(mensaje)
    actualizarVidas(ganador())
}
function ganador(){
    let resultado = ""
    if(ataqueJugador == ataqueEnemigo)
     resultado = "EMPATE✌️"
    else if(ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA")
     resultado = "GANASTE 🎉🎉"
    else if(ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO")
     resultado = "GANASTE 🎉🎉"
    else if(ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA")
     resultado = "GANASTE 🎉🎉"
    else resultado = "PERDISTE 😢"
    return resultado
}
function actualizarVidas(resul){
    let msgJugador = document.getElementById("vida-jugador")
    let msgEnemigo = document.getElementById("vida-enemigo")
    if(vidaJugador == 0)
    alert(document.getElementById("mascota-jugador").innerText + " PERDIÓ")
    else if(vidaEnemigo == 0) alert(document.getElementById("mascota-enemigo").innerText + " PERDIÓ")
    else if(resul == "PERDISTE 😢")vidaJugador--
    else if(resul == "GANASTE 🎉🎉")vidaEnemigo--
    msgJugador.innerHTML = vidaJugador
    msgEnemigo.innerHTML = vidaEnemigo
    
}