//Imposto el modelo de datos
const JugadorModelo = require('../models/JugadorModelo.js')

//Servicio para agregar un documento a la BD
async function insertarJugador(datosJugador){
    let jugadorAInsertar=new JugadorModelo(datosJugador)
    return await jugadorAInsertar.save()
}

//Servicio para buscar un documento de la BD
async function leerJugador(id){
    let jugador=await JugadorModelo.findById(id)
    return jugador
}

//Servicio para buscar todos los documentos
async function leerJugadores(){
    let jugadores=await JugadorModelo.find()
    return jugadores
}

//Servicio para editar un documento
async function modificarJugador(id,datos){
    return await JugadorModelo.findByIdAndUpdate(id,datos)
}

//Servicio para eliminar un documento
async function borrarJugador(id){
    return await JugadorModelo.findByIdAndDelete(id)
}

module.exports={insertarJugador,leerJugador,leerJugadores,modificarJugador,borrarJugador}