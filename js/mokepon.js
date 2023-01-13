function iniciarJuego(){
let botonMascotaJugador = document.getElementById("boton-mascota")

botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)
}
function encontrarSeleccion(mascotas,tamano){
    for(i=0;i<tamano;i++){
        if(mascotas[i].checked)
            return mascotas[i].id
    }
 }

function seleccionarMascotaJugador(){
    let listadoMascotas = document.getElementsByName("mascota")
    let tamano = listadoMascotas.length
    let seleccion = encontrarSeleccion(listadoMascotas,tamano)
        
    alert("Elegiste: " + seleccion +" como mascota")
}

window.addEventListener('load',iniciarJuego)