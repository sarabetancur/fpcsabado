//Importo las utilizades model y schema de mongoose
const {model,Schema}=require('mongoose');

//Programas mi modelo de datos
const JugadorModelo=Schema({
    nombre:{
        type:String,
        require:true
    },
    edad:{
        type:String,
        require:true
    },
    posicion:{
        type:String,
        require:true
    },
    equipo:{
        type:String,
        require:true
    },
    camiseta:{
        type:Number,
        require:true
    },
    foto:{
        type:String,
        require:true
    }
})

module.exports=model('jugadores',JugadorModelo)