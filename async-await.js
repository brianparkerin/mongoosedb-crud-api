require('./connection')

const Stallion = require('./models/Stallions')

async function main() {
    const stallion = new Stallion({
        reproductor: 'Yucatan de Ramos',
        microchip: '2354355522',
        servicios: 'semen',
        precio: '2500.00',
        prestaciones: 'primer envio gratis, garantia de cria viva al nacer, seguro basico de compra',
        propietario: 'Ganaderia Ramos',
        vendedor: 'Yeguada Sergio Ramos',
    })
    
    const stallionSaved = await stallion.save();
    //console.log(stallion)
    return stallionSaved

}

main()
    .then(stallionSaved => console.log(stallionSaved))
    .catch(err => console.log(err))
