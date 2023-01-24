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
// CLASE MOKEPON 
class Mokepon{
    constructor(nombre,foto,vida){
        this.nombre = nombre;
        this.foto =foto;
        this.vida = vida;
        this.ataques =[]
    }
}
// INFORMACION DE CADA JUGADOR
let hipodoge = new Mokepon('Hipodoge','./images/mokepons_mokepon_hipodoge_attack.png',5)
let capipepo = new Mokepon('Capipepo','./images/mokepons_mokepon_capipepo_attack.png',5)
let ratigueya = new Mokepon('Ratigueya','./images/mokepons_mokepon_ratigueya_attack.png',5)
let langostelvis = new Mokepon('Langontelvis','./images/mokepons_mokepon_hipodoge_attack.png',5)
let tucapalma = new Mokepon('Tucapalma','./images/mokepons_mokepon_capipepo_attack.png',5)
let pydos = new Mokepon('Pydos','./images/mokepons_mokepon_ratigueya_attack.png',5)
let Albertino = new Mokepon('Albertino','./images/mokepons_mokepon_hipodoge_attack.png',4)
let Bubusela = new Mokepon('Bubusela','./images/mokepons_mokepon_capipepo_attack.png',4)
let Cascarroto = new Mokepon('Cascarroto','./images/mokepons_mokepon_ratigueya_attack.png',4)
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
    {nombre: '💧', id:'agua'},
    {nombre: '🌱', id:'tierra'}
    
)
Albertino.ataques.push(
   
    {nombre: '🔥', id:'fuego'},
    {nombre: '🔥', id:'fuego'},
    {nombre: '💧', id:'agua'}
    
)
Bubusela.ataques.push(
   
    {nombre: '🔥', id:'fuego'},
    {nombre: '💧', id:'agua'},
    {nombre: '💧', id:'agua'}
    
)
Cascarroto.ataques.push(
   
    {nombre: '🔥', id:'fuego'},
    {nombre: '🔥', id:'fuego'},
    {nombre: '🔥', id:'fuego'},
    {nombre: '💧', id:'agua'},
    {nombre: '🌱', id:'tierra'}
    
)
mokepones.push(hipodoge,capipepo,ratigueya,langostelvis,tucapalma,pydos,Albertino,Bubusela,Cascarroto);//INYECTA TODOS LOS ATAQUES

window.addEventListener('load',() =>{
    //DESAPARECE LA SECCION DE ATAQUES Y LA SECCION DE REINICIAR
    sectionSeleccionarAtaque.style.display = "none"
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
        sectionSeleccionarAtaque.style.display = "flex"   // HACE APARECER LA SECCION DE ATAQUE QUE ESTABA OCULTA
        mascotaElegidaJugador = encontrarSeleccion(inputsMascotas) 
        mascotaElegidaEnemigo = encontrarSeleccion(inputsMascotas,true)
        mascotaJugador.innerHTML = mascotaElegidaJugador
        mascotaEnemigo.innerHTML = mascotaElegidaEnemigo
        totalAtaquesJugador=extraer_ataques(mascotaElegidaJugador)
        totalAtaquesEnemigo=extraer_ataques(mascotaElegidaEnemigo)
        renderizar_ataques(totalAtaquesJugador)//RENDERIZA O CREA LOS BOTONES DE ATAQUES DEL JUEGADOR  
        secuenciaAtaque()

})})

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
            if(elementos == mokepones[i].nombre){
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