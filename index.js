const express = require("express")// se importa la libreria de express
const cors = require("cors")// se importa la libreria de cors
//var log4js = require("log4js");
//var logger = log4js.getLogger('app');
//logger.level = "all";
//logger.debug("Some debug messages");

const app = express()
//app.use(log4js.connectLogger(log4js.getLogger("http"), { level: 'auto' }));
app.use(cors())//Deshabilite errores relacionados con cors
app.use(express.json) // Habilitar la capacidad de recibir peticiones post con JSON
const jugadores = []

class Jugador{
    constructor(id){
        this.id = id
    }
}
const port = 8082

app.get("/unirse", (req, res) => {
    const id = `${Math.random()}`
    const jugador =  new Jugador(id)
    jugadores.push(jugador)
    //res.setHeader("Access-Control-Allow-Origin","*")
    res.send(id)
})

/* app.post("/mokepon/:jugadorId", (req, res) =>{
    const jugadorId = req.params.jugadorId || ""
    console.log (jugadores)
    console.log(jugadorId)
    res.end()
}) */

app.listen(port, () => {
    console.log("Servidor funcionando")
})