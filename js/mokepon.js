let ataqueJugador = ""
let ataqueEnemigo = ""
let vidaJugador = 3
let vidaEnemigo = 3
let variable = "a prueba"
let variable2 = "de todo"
window.addEventListener('load',() =>{

    let botonSeleccionar = document.getElementById("boton-seleccionar")//Aca se toma la varible que contiene todo el boton
    botonSeleccionar.addEventListener('click',() => {
        let listadoMascotas = document.getElementsByName("mascotas")
        let mascotaJugador = document.getElementById("mascota-jugador")
        let mascotaEnemigo = document.getElementById("mascota-enemigo")
        let botonFuego = document.getElementById("fuego")
        let botonAgua = document.getElementById("agua")
        let botonTierra = document.getElementById("tierra")
        let mascotaElegidaJugador = encontrarSeleccion(listadoMascotas) 
        let mascotaElegidaEnemigo = encontrarSeleccion(listadoMascotas,true)
        mascotaJugador.innerHTML = mascotaElegidaJugador
        mascotaEnemigo.innerHTML = mascotaElegidaEnemigo
        actualizarVidas()
        botonFuego.addEventListener('click',ataqueFuego)
        botonAgua.addEventListener('click',ataqueAgua)
        botonTierra.addEventListener('click',ataqueTierra)  
})})

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
function ataqueFuego(){ataqueJugador = "FUEGO";actualizarAtaques()}
function ataqueAgua(){ataqueJugador = "AGUA";actualizarAtaques()}
function ataqueTierra(){ataqueJugador = "TIERRA";actualizarAtaques()}
function actualizarAtaques(){
    let listaAtaques = document.getElementsByName("ataques")
    ataqueEnemigo = encontrarSeleccion(listaAtaques,true).toUpperCase()
    let mensaje = document.createElement("p")
    let seccion_mensajes = document.getElementById("mensajes")
    if(vidaEnemigo == 0){
        mensaje.innerHTML = "Enemigo ha perdido"   
    }else if(vidaJugador == 0)mensaje.innerHTML = "Jugador ha perdido"
    else{
    mensaje.innerHTML = "Tu mascota atacó con " + ataqueJugador + " la mascota del enemigo atacó con " + ataqueEnemigo + " -  " + ganador()
    actualizarVidas(ganador())
    }
    seccion_mensajes.appendChild(mensaje)

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
    if(resul == "PERDISTE 😢")vidaJugador--
    else if(resul == "GANASTE 🎉🎉")vidaEnemigo--

    msgJugador.innerHTML = vidaJugador
    msgEnemigo.innerHTML = vidaEnemigo
    
}