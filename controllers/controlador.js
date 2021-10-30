//El controlador se encargar de administrar las peticiones y respuestas
const {request,response}=require('express')

//Improtar el servicio
const{insertarJugador}=require('../services/servicios.js')
const {leerJugador}=require('../services/servicios.js')
const {leerJugadores}=require('../services/servicios.js')
const {modificarJugador}=require('../services/servicios.js')
const {borrarJugador}=require('../services/servicios.js')

//cuales son las operaciones que debe realizar mi servidor
async function registrarJugador(peticion=request,respuesta=response){

    //Capturo los datos que llegan en el cuerpo de la petición
    let datosCliente=peticion.body;

    //Intentar grabar los datos en BD usando el servicio
    try{
        await insertarJugador(datosCliente)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Éxito registrando el jugador"
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"Uppss... "+error
        })
    }


}


async function buscarJugador(peticion=request,respuesta=response){

    //Capturar el id  del jugador a buscar
    let id=peticion.params.id

    try{
        let jugador= await leerJugador(id)
        respuesta.status(200).json({
            estado:true,
            medatos:jugador
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"Uppss... "+error
        })
    }

    
}


async function buscarJugadores(peticion=request,respuesta=response){

    try{
        let jugadores= await leerJugadores()
        respuesta.status(200).json({
            estado:true,
            medatos:jugadores
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"Uppss... "+error
        })
    }

}


async function editarJugador(peticion=request,respuesta=response){

    //Recibir datos del body y el id de los parametros
    let datos=peticion.body
    let id=peticion.params.id

    try{
        await modificarJugador(id,datos)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Éxito editando el jugador"
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"Uppss... "+error
        })
    }
 

}

async function eliminarJugador(peticion=request,respuesta=response){

    let id=peticion.params.id

    try{
        await borrarJugador(id)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Éxito eliminando el jugador"
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"Uppss... "+error
        })
    }

}

module.exports={
    registrarJugador,
    buscarJugador,
    buscarJugadores,
    editarJugador,
    eliminarJugador
}