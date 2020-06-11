require('./connection')
const Stallion = require('./models/Stallions')

//Create  a Object into the DB by model
const addstallion = new Stallion({
    //id: '', MONGOOSE CREATE AN ID BY DEFAULT
    reproductor: 'Tobias',
    microchip: '0003',
    servicios: 'semen',
    precio: '2500.00',
    prestaciones: 'primer envio gratis, garantia de cria viva al nacer, seguro basico de compra',
    propietario: 'Brian Parker',
    vendedor: 'Criadero Narinskyz',

})

// save into de MongoDB
addstallion.save((err, document) => {
    if (err) console.log(err);
    console.log(document)
})

console.log(addstallion)


