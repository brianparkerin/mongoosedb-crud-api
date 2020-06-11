//CONSULTAMOS UN MODELO DE DATOS DE USUARIOS, VENDEDORES Y EJEMPLARES AL CUAL CONSULTAR Y LOS RELACIONAMOS


//CONSULTAMOS UN MODELO DE DATOS DE USUARIOS, VENDEDORES Y EJEMPLARES AL CUAL CONSULTAR Y LOS RELACIONAMOS

require('../connection')

const Stallion = require('../models/Stallions')

const createStallions = async () => {
    
    const stallionone = new Stallion({
        reproductor: 'nangonudos',
        microchip: '0003345554',
        servicios: 'semen',
        precio: '1500.00',
        prestaciones: 'primer envio gratis, garantia de cria viva al nacer, seguro basico de compra',
        propietario: 'Brian Parker',
        vendedor: 'Criadero Narinskyz'
    })
    await stallionone.save();

    const stalliontwo = new Stallion({
        reproductor: 'Joyero III',
        microchip: '000334577',
        servicios: 'semen',
        precio: '3500.00',
        prestaciones: 'primer envio gratis, garantia de cria viva al nacer, seguro basico de compra',
        propietario: 'Brian Parker',
        vendedor: 'Criadero Narinskyz'
    })
    await stalliontwo.save();

}

createStallions();