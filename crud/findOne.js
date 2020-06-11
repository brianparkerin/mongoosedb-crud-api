//CONSULTAMOS UN MODELO DE DATOS DE USUARIOS, VENDEDORES Y EJEMPLARES AL CUAL CONSULTAR Y LOS RELACIONAMOS

require('../connection')

const Stallions = require('../models/Stallions')

async function getUser() {
    const user = await Stallions.find({reproductor: 'Chandrill'});
    console.log(user)
}

getUser();



//find a any user into thee DB
/*
async function getUser() {
    const user = await User.findOne({username: 'joe'});
    console.log(user)
}

getUser();

*/



//find any stallion into the horses catalog froom DB
/*

require('../connection')

const Stallions = require('../models/Stallions')

async function getUser() {
    const user = await Stallions.find({reproductor: 'Chandrill'});
    console.log(user)
}

getUser();

*/