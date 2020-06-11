//Aqui vamos a definir el esquema de todos los datos que vamos a estar guardando en nuestra DB (Base de Datos) MongoDB. Es decir la estructura en comun que tienen o tendran esos datos como: imagenes, nombres, urls, telefonos, etc, etc.

const { Schema, model } = require('mongoose')

const horseSchema = new Schema({
    //MONGOOSE CREATE AN ID BY DEFAULT//id: '', MONGOOSE CREATE AN ID BY DEFAULT
    //id: {
    //   type: Number,
    //   default: + 1
    //},

    reproductor: {
        type: String,
    },

    microchip: {
        type: Number
    },

    servicios: {
        type: String
    },

    precio: {
        type: Number,
        default: 0
    },

    cantidad: {
        type: Number,
        default: 1
    },

    prestaciones: {
        type: String
    },

    propietario: {
        type: String
    },

    vendedor: {
        type: String
    },

    createdAt: {
        type: Date
    }
})


module.exports = model('Horse', horseSchema)



