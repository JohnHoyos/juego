function iniciarJuego(){
//Aca se toma la varible que contiene todo el boton
let botonMascotaJugador = document.getElementById("boton-mascota")
//Aca se le asigna un listener para cuando le den click
botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)
}
function encontrarSeleccion(listado,opcion){ //funcion generica para grupos4
    var aleatorio = Math.floor(Math.random()*(listado.length))
    if(opcion) return listado[aleatorio].id 
    else{
        for(i=0;i<listado.length;i++){
            if(listado[i].checked)
                return listado[i].id
        }
    }
 }
function seleccionarMascotaJugador(){//muestra en pantalla la seleccion
    let listadoMascotas = document.getElementsByName("mascota")
    let mascotaJugador = document.getElementById("mascota-jugador")
    let mascotaEnemigo = document.getElementById("mascota-enemigo")
    mascotaJugador.innerHTML= encontrarSeleccion(listadoMascotas)
    mascotaEnemigo.innerHTML= encontrarSeleccion(listadoMascotas,true)
    //alert("Elejiste " + seleccion + " como mascota")
}
window.addEventListener('load',iniciarJuego)