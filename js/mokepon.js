const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonSeleccionar = document.getElementById("boton-seleccionar")//Aca se toma la varible que contiene todo el boton
const botonReiniciar = document.getElementById("boton-reiniciar")
const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")

const mascotaJugador = document.getElementById("mascota-jugador")
const mascotaEnemigo = document.getElementById("mascota-enemigo")
const botonFuego = document.getElementById("fuego")
const botonAgua = document.getElementById("agua")
const botonTierra = document.getElementById("tierra")

const listaAtaques = document.getElementsByName("ataques")
const mensaje = document.createElement("p")
const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")
const seccion_mensajes = document.getElementById("resultado")
const notificacion = document.createElement("p")
const nuevoAtaqueDelEnemigo = document.createElement("p")
const nuevoAtaqueDelJugador = document.createElement("p")
const sectionSeleccionarReiniciar = document.getElementById("reiniciar")

const msgJugador = document.getElementById("vida-jugador")
const msgEnemigo = document.getElementById("vida-enemigo")
const contenedorTarjetas = document.getElementById("contenedor-tarjetas")

let ataqueJugador = ""
let ataqueEnemigo = ""
let opcionDeMokepones 
let vidaJugador = 3
let vidaEnemigo = 3
let mokepones = []
let listadoMascotas 
let mascotaElegidaJugador
let mascotaElegidaEnemigo

class Mokepon{
    constructor(nombre,foto,vida){
        this.nombre = nombre;
        this.foto =foto;
        this.vida = vida;
        this.ataques =[]
    }
}

let hipodoge = new Mokepon('Hipodoge','./images/mokepons_mokepon_hipodoge_attack.png',5)
let capipepo = new Mokepon('Capipepo','./images/mokepons_mokepon_capipepo_attack.png',5)
let ratigueya = new Mokepon('Ratigueya','./images/mokepons_mokepon_ratigueya_attack.png',5)
let langostelvis = new Mokepon('Langontelvis','./images/mokepons_mokepon_hipodoge_attack.png',5)
let tucapalma = new Mokepon('Tucapalma','./images/mokepons_mokepon_capipepo_attack.png',5)
let pydos = new Mokepon('Pydos','./images/mokepons_mokepon_ratigueya_attack.png',5)

hipodoge.ataques.push(
    {nombre: '💧', id:'agua'},
    {nombre: '💧', id:'agua'},
    {nombre: '💧', id:'agua'},
    {nombre: '🔥', id:'fuego'},
    {nombre: '🌱', id:'tierra'}
)
capipepo.ataques.push(
    {nombre: '🌱', id:'tierra'},
    {nombre: '🌱', id:'tierra'},
    {nombre: '🌱', id:'tierra'},
    {nombre: '💧', id:'agua'},
    {nombre: '🔥', id:'fuego'}
    
)
ratigueya.ataques.push(
   
    {nombre: '🔥', id:'fuego'},
    {nombre: '🔥', id:'fuego'},
    {nombre: '🔥', id:'fuego'},
    {nombre: '💧', id:'agua'},
    {nombre: '🌱', id:'tierra'}
    
)
langostelvis.ataques.push(
    {nombre: '💧', id:'agua'},
    {nombre: '💧', id:'agua'},
    {nombre: '💧', id:'agua'},
    {nombre: '🔥', id:'fuego'},
    {nombre: '🌱', id:'tierra'}
)
tucapalma.ataques.push(
    {nombre: '🌱', id:'tierra'},
    {nombre: '🌱', id:'tierra'},
    {nombre: '🌱', id:'tierra'},
    {nombre: '💧', id:'agua'},
    {nombre: '🔥', id:'fuego'}
    
)
pydos.ataques.push(
   
    {nombre: '🔥', id:'fuego'},
    {nombre: '🔥', id:'fuego'},
    {nombre: '🔥', id:'fuego'},
    {nombre: '💧', id:'agua'},
    {nombre: '🌱', id:'tierra'}
    
)
mokepones.push(hipodoge,capipepo,ratigueya,langostelvis,tucapalma,pydos);

window.addEventListener('load',() =>{
    
    sectionSeleccionarAtaque.style.display = "none"
    sectionReiniciar.style.display = "none"
    
    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascotas" id=${mokepon.nombre}>
            <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
                <p>${mokepon.nombre}</p>
                <img src=${mokepon.foto} alt=${mokepon.nombre}>
            </label>
        `
        contenedorTarjetas.innerHTML+= opcionDeMokepones            
    })
    
    listadoMascotas = document.getElementsByName("mascotas")

    botonReiniciar.addEventListener('click',() => {
           location.reload()
    })
    botonSeleccionar.addEventListener('click',() => {
        mascotaElegidaJugador = encontrarSeleccion(listadoMascotas) 
        mascotaElegidaEnemigo = encontrarSeleccion(listadoMascotas,true)
        sectionSeleccionarMascota.style.display = "none"
        sectionSeleccionarAtaque.style.display = "flex"        
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
    
    ataqueEnemigo = encontrarSeleccion(listaAtaques,true).toUpperCase()
    seccion_mensajes.innerHTML = ganador()
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)  
    
    if(vidaEnemigo == 0){
        sectionSeleccionarReiniciar.style.display = "flex"
        seccion_mensajes.innerHTML = "Enemigo ha perdido"   
    }else if(vidaJugador == 0){
        sectionSeleccionarReiniciar.style.display = "flex"
        seccion_mensajes.innerHTML = "Jugador ha perdido"}
    else{
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
    
    if(resul == "PERDISTE 😢")vidaJugador--
    else if(resul == "GANASTE 🎉🎉")vidaEnemigo--

    msgJugador.innerHTML = vidaJugador
    msgEnemigo.innerHTML = vidaEnemigo
}