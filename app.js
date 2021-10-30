//Se trae el modelo del servidor (importar)
const ServidorModelo=require('./models/ServidorModelo.js')

//se trae el dotenv (variables de entorno)
require('dotenv').config()

//Puedo personalizar mi servidor(Instanciando la clase, usando la clase, crear un objeto, sacando fotocopia)
const servidorJugadores=new ServidorModelo()

//Encender el servidor
servidorJugadores.encenderServidor()
