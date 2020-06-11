require('../connection')

const Stallions = require('../models/Stallions')


//function para encontrar uno y elimnarlo
/*
const someFunction = async () => {
    Stallion.findOneAndDelete({name: ''})
}
*/

// function para encontrar  varios y elimnarlos, y mostrar por consola el resultado

const someFunction = async () => {
    const result = await Stallions.deleteMany({reproductor: 'joyero III'})
    console.log(result)
}

someFunction();