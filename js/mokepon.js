const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonSeleccionar = document.getElementById("boton-seleccionar")//Aca se toma la varible que contiene todo el boton
const botonReiniciar = document.getElementById("boton-reiniciar")
const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")

const mascotaJugador = document.getElementById("mascota-jugador")
const mascotaEnemigo = document.getElementById("mascota-enemigo")

const listaAtaques = document.getElementsByName("ataques")
const mensaje = document.createElement("p")
const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")
const seccion_mensajes = document.getElementById("resultado")
const notificacion = document.createElement("p")

const sectionSeleccionarReiniciar = document.getElementById("reiniciar")

const vidaJugador = document.getElementById("vida-jugador")
const vidaEnemigo = document.getElementById("vida-enemigo")
const contenedorTarjetas = document.getElementById("contenedor-tarjetas")
const renderAtaques=document.getElementById("renderAtaques")

const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")

const moverDerecha = document.getElementById("moverDerecha")
const moverIzquierda = document.getElementById("moverIzquierda")
const moverAbajo = document.getElementById("moverAbajo")
const moverArriba = document.getElementById("moverArriba")
let movimientos = document.getElementById("movimientos")

let resultado = ""
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokepones 
let mokepones = []
let inputsMascotas
let mascotaElegidaJugador
let mascotaElegidaEnemigo
let botonFuego 
let botonAgua
let botonTierra 
let totalAtaquesJugadorJ
let totalAtaquesJugadorE
let totalAtaquesJugador
let totalAtaquesEnemigo
let botones = []
let indexAtaqueJugador 
let indexAtaqueEnemigo
let victoriasEnemigo = 0
let victoriasJugador = 0
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = "./images/mokemap.png"
let anchoDelMapa =  window.innerWidth - 20
const anchoMaximoDelMapa = 500
if(anchoDelMapa > anchoMaximoDelMapa){
    anchoDelMapa = anchoMaximoDelMapa - 20
}
let alturaDelMapa = anchoDelMapa * 500 / 400
mapa.width = anchoDelMapa
mapa.height = alturaDelMapa

let jugadorId = null
// CLASE MOKEPON 
class Mokepon{
    constructor(nombre,foto,vida,fotomapa,x = 20,y = 10){
        this.nombre = nombre;
        this.foto =foto;
        this.vida = vida;
        this.ataques =[]
        this.x = x
        this.y = y
        this.ancho = 80
        this.alto = 80
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotomapa
        this.velocidadX = 0
        this.velocidadY = 0
    }

    pintar(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,//posicion en x
            this.y,//posicion de y
            this.ancho,// de ancho
            this.alto// de alto
        )
    }
}
// INFORMACION DE CADA JUGADOR
let hipodoge = new Mokepon('Hipodoge','./images/mokepons_mokepon_hipodoge_attack.png',5,'./images/hipodoge.png',330,330)
let capipepo = new Mokepon('Capipepo','./images/mokepons_mokepon_capipepo_attack.png',5,'./images/capipepo.png',60,60)
let ratigueya = new Mokepon('Ratigueya','./images/mokepons_mokepon_ratigueya_attack.png',5,'./images/ratigueya.png',50,178)
let langostelvis = new Mokepon('Langostelvis','./images/mokepons_mokepon_hipodoge_attack.png',5,'./images/hipodoge1.png',10,300)
let tucapalma = new Mokepon('Tucapalma','./images/mokepons_mokepon_capipepo_attack.png',5,'./images/capipepo2.png',250,250)
let pydos = new Mokepon('Pydos','./images/mokepons_mokepon_ratigueya_attack.png',5,'./images/ratigueya3.png',100,50)
/*
let albertino = new Mokepon('Albertino','./images/mokepons_mokepon_hipodoge_attack.png',5,'./images/hipodoge4.png',200,200)
let bubusela = new Mokepon('Bubusela','./images/mokepons_mokepon_capipepo_attack.png',5,'./images/capipepo5.png',300,220)
let cascarroto = new Mokepon('Cascarroto','./images/mokepons_mokepon_ratigueya_attack.png',5,'./images/ratigueya6.png',400,230) */

// INYECTANDO ATAQUES AL JUGADOR
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
    {nombre: '🔥', id:'fuego'},
    {nombre: '🔥', id:'fuego'}
    
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
    {nombre: '💧', id:'agua'},
    {nombre: '🌱', id:'tierra'}
    
)
/* albertino.ataques.push(
   
    {nombre: '🔥', id:'fuego'},
    {nombre: '🔥', id:'fuego'},
    {nombre: '💧', id:'agua'}
    
)
bubusela.ataques.push(
   
    {nombre: '🔥', id:'fuego'},
    {nombre: '💧', id:'agua'},
    {nombre: '💧', id:'agua'}
    
)
cascarroto.ataques.push(
   
    {nombre: '🔥', id:'fuego'},
    {nombre: '🔥', id:'fuego'},
    {nombre: '🔥', id:'fuego'},
    {nombre: '💧', id:'agua'},
    {nombre: '🌱', id:'tierra'}
    
) */
mokepones.push(hipodoge,capipepo,ratigueya,langostelvis,tucapalma,pydos);//INYECTA TODOS LOS ATAQUES
//console.log(mokepones)
window.addEventListener('load',() =>{
    //UNIRSE AL JUEGO
    unirseAlJuego()
    //DESAPARECE LA SECCION DE ATAQUES Y LA SECCION DE REINICIAR
    sectionSeleccionarAtaque.style.display = "none"
    sectionVerMapa.style.display = "none"
    sectionReiniciar.style.display = "none"
    //INYECTA EL HTML DINAMICAMENTE DE INPUTS Y LABELS DE LOS MOKEPONES
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
    inputsMascotas = document.getElementsByName("mascotas")
    //LISTENER PARA CUANDO PRESIONEN REINICIAR
    botonReiniciar.addEventListener('click',() => {
           location.reload()
    })
    botonSeleccionar.addEventListener('click',() => {
        sectionSeleccionarMascota.style.display = "none" // HACE DESAPARECER LA SECCION DE ELEGIR MASCOTAS
        //sectionSeleccionarAtaque.style.display = "flex"   // HACE APARECER LA SECCION DE ATAQUE QUE ESTABA OCULTA
        mascotaElegidaJugador = encontrarSeleccion(inputsMascotas) 
        seleccionarMokepon(mascotaElegidaJugador)
        //mascotaElegidaEnemigo = encontrarSeleccion(inputsMascotas,true)
        sectionVerMapa.style.display = "flex"
        iniciarMapa()        
    })
})
function seleccionarMokepon(mascota){//envia informacion al backend sobre que mascota se eligió
fetch(`http://localhost:3000/mokepon/${jugadorId}`,{
    method: "post",
    headers:{
        "content-Type": "application/json"
    },
    body:JSON.stringify({
        mokepon: mascota
    })
})
}
function unirseAlJuego(){//RECIBE EL ID DESDE EL SERVIDOR Y LO ASIGNA A JUGADOID
    fetch(`http://localhost:3000/unirse`)
        .then(function (res){
            if(res.ok){
                res.text()
                 .then(function (respuesta){
                    console.log(respuesta)
                    jugadorId = respuesta
                 })
            }
        })
}
function iniciarMapa(){
   
    intervalo = setInterval(pintarCanva,50,eval(mascotaElegidaJugador.toLowerCase()))
    movimientos.addEventListener("mousedown", (e) => {
        if(e.target.textContent == "Derecha"){
            moverDerechaPersonaje(mascotaElegidaJugador.toLowerCase())
        }else if(e.target.textContent == "Izquierda"){
            moverIzquierdaPersonaje(mascotaElegidaJugador.toLowerCase())
        }else if(e.target.textContent == "Arriba"){
            moverArribaPersonaje(mascotaElegidaJugador.toLowerCase())
        }else{
            moverAbajoPersonaje(mascotaElegidaJugador.toLowerCase())
        }
    })
    movimientos.addEventListener('pointerup', (e) => {
        detenerMovimiento(eval(mascotaElegidaJugador.toLowerCase()))
    })
    window.addEventListener("keydown", (e) => {
        if(e.key == "ArrowRight"){
            moverDerechaPersonaje(mascotaElegidaJugador.toLowerCase())
        }else if(e.key == "ArrowLeft"){
            moverIzquierdaPersonaje(mascotaElegidaJugador.toLowerCase())
        }else if(e.key == "ArrowUp"){
            moverArribaPersonaje(mascotaElegidaJugador.toLowerCase())
        }else if(e.key == "ArrowDown"){
            moverAbajoPersonaje(mascotaElegidaJugador.toLowerCase())
        }
    })
    window.addEventListener("keyup", (e) => {
        detenerMovimiento(eval(mascotaElegidaJugador.toLowerCase()))
    })
}
function pintarCanva(personajeJugador){
    personajeJugador.x = personajeJugador.x + personajeJugador.velocidadX
    personajeJugador.y = personajeJugador.y + personajeJugador.velocidadY
    lienzo.clearRect(0, 0, mapa.clientWidth, mapa.clientHeight)
    
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    pintarMokepones()
    enviarPosicion(personajeJugador.x,personajeJugador.y)
    personajeJugador.pintar()
    if(personajeJugador.velocidadX > 0 || personajeJugador.velocidadY > 0){
        
        mokepones.forEach((mokepon) => {
            if(personajeJugador != mokepon)
            validaColision(personajeJugador,mokepon)
        })
    }
 
}
function enviarPosicion(x,y){// envia al server la posicion del jugador
    fetch(`http://localhost:3000/mokepon/${jugadorId}/posicion`,{
    method: "post",
    headers:{
        "content-Type": "application/json"
    },
    body:JSON.stringify({
        x,// se esta abreviando x:x
        y
    })
})
}
function validaColision(jugador,enemigo){
    const abajoMascota = jugador.y + jugador.alto
    const abajoEnemigo = enemigo.y + enemigo.alto
    const arribaEnemigo = enemigo.y
    const arribaMascota = jugador. y
    const derechaMascota = jugador.x + jugador.ancho
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x
    const izquierdaMascota = jugador.x
    
   if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo 
    ) return
    
    clearInterval(intervalo)
    detenerMovimiento(jugador)
    sectionSeleccionarAtaque.style.display = "flex"
    sectionVerMapa.style.display = "none"
    mascotaJugador.innerHTML = jugador.nombre
    mascotaEnemigo.innerHTML = enemigo.nombre
    totalAtaquesJugador=extraer_ataques(jugador)
    totalAtaquesEnemigo=extraer_ataques(enemigo)
    renderizar_ataques(totalAtaquesJugador)//RENDERIZA O CREA LOS BOTONES DE ATAQUES DEL JUEGADOR  
    secuenciaAtaque()             

}  
function pintarMokepones(){
    mokepones.forEach((item) =>{
        item.pintar()
    })
}
function moverDerechaPersonaje(personaje){
    var mascota = {}
    mascota = eval(personaje)
    mascota.velocidadX = 5
}
function moverIzquierdaPersonaje(personaje){
    var mascota = {}
    mascota = eval(personaje)
    mascota.velocidadX = -5
}
function moverAbajoPersonaje(personaje){
    var mascota = {}
    mascota = eval(personaje)
    mascota.velocidadY = 5
}
function moverArribaPersonaje(personaje){
    var mascota = {}
    mascota = eval(personaje)
    mascota.velocidadY = -5
}
function detenerMovimiento(personaje){
    personaje.velocidadX = 0
    personaje.velocidadY = 0   
}
function msgResultado(){// DESPUES DE ELEGIR LOS 5 ATAQUES Y SER COMPARADOS, SE DETERMINA EL MENSAJE FINAL
    
    if(victoriasEnemigo == victoriasJugador){
        sectionSeleccionarReiniciar.style.display = "flex"
        seccion_mensajes.innerHTML = "Hubo un empate"   
    }else if(victoriasEnemigo > victoriasJugador){
        sectionSeleccionarReiniciar.style.display = "flex"
        seccion_mensajes.innerHTML = "Jugador ha perdido"}
    else {
        sectionSeleccionarReiniciar.style.display = "flex"
        seccion_mensajes.innerHTML = "Jugador ha ganado"}
    seccion_mensajes.appendChild(mensaje)

}
function ganador(){
let nuevoAtaqueDelEnemigo = document.createElement("p")// SERCREA INTERNAMENTE PARA QUE SE CREE Y MUESTRE UN PARRAFO NUEVO
let nuevoAtaqueDelJugador = document.createElement("p")
    if( ataqueEnemigo.length === 5){// SOLO CUANDO SE ELIGEN LOS 5 ATAQUES SE COMPARARA EL LOS ARREGLOS DE ATAQUES PARA DETERMINAR GANADOR Y VICTORIAS
        for (let index = 0; index < ataqueEnemigo.length; index++) {
            if(ataqueJugador[index] == ataqueEnemigo[index]){
                resultado = "EMPATE✌️"
            }else if(ataqueJugador[index] == "FUEGO" && ataqueEnemigo[index] == "TIERRA"){
                resultado = "GANASTE 🎉🎉"
                victoriasJugador++
                
            }else if(ataqueJugador[index] == "AGUA" && ataqueEnemigo[index] == "FUEGO"){
                resultado = "GANASTE 🎉🎉"
                victoriasJugador++
                
            }else if(ataqueJugador[index] == "TIERRA" && ataqueEnemigo[index] == "AGUA"){
               resultado = "GANASTE 🎉🎉"
               victoriasJugador++
               
            }else {
              resultado = "PERDISTE 😢"
              victoriasEnemigo++
            }
             
        nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo[ataqueEnemigo.length - 1]
        nuevoAtaqueDelJugador.innerHTML = ataqueJugador[ataqueJugador.length - 1]
        
        ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
        ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo) 
        vidaJugador.innerHTML =victoriasJugador
        vidaEnemigo.innerHTML =victoriasEnemigo
        
        }
        msgResultado()
       
    }else{
        nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo[ataqueEnemigo.length - 1]
        nuevoAtaqueDelJugador.innerHTML = ataqueJugador[ataqueJugador.length - 1]
        
        ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
        ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
               
    }   
}
function secuenciaAtaque(){
    botones.forEach((boton) =>{
        boton.addEventListener('click',(e) =>{
         if(e.target.textContent == '🔥'){
            ataqueJugador.push("FUEGO")
            boton.style.background = '#112F58'
            boton.disabled = true
         }else if(e.target.textContent == '💧'){
            ataqueJugador.push("AGUA")
            boton.style.background = '#112F58'
            boton.disabled = true
         }else {
            ataqueJugador.push("TIERRA")
            boton.style.background = '#112F58'
            boton.disabled = true
         }
         ataqueEnemigo.push(encontrarSeleccion(totalAtaquesEnemigo,true).toUpperCase())// POR CADA CLICK QUE HAGA EL USUARIO,GENERA UN ENEMIGO ALEATORIO Y LO CARGA A UN ARREGLO
         ganador()
        })
    })
}
function renderizar_ataques(elemento){
    
    elemento.forEach((item) => {
        opcionDeMokepones = `
        <button id=${item.id} class="botonataque btataques" name="ataques">${item.nombre}</button>
        `
        renderAtaques.innerHTML+= opcionDeMokepones
    })
    botonFuego =document.getElementById("fuego")
    botonAgua =document.getElementById("agua")
    botonTierra =document.getElementById("tierra")
    botones =  document.querySelectorAll(".btataques")
    
}
function extraer_ataques(elementos){
    let ataques_jugador;
        for(i=0;i<mokepones.length;i++){
            if(elementos.nombre == mokepones[i].nombre){
               ataques_jugador=mokepones[i].ataques
            }        
        }
        return ataques_jugador
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