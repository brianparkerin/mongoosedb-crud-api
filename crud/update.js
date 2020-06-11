require('../connection')

const User = require('../models/User')

//
//Modificar Nosotros mismos sin la funcion espefcifica de MongoDB & Mongoose

/*
const someFunction = async () => {
    const user = await User.findOne({username: 'joe'});
    console.log(user)
    user.password = 'mynewpasswordthat';
    user.save();
}
*/

// CON ESTA FUNCION AÑADIMOS UN DATO NUEVO A NUESTRA BASE DE DATOS QUE NO TENIAMOS MODIFICANDOLA
//otro tercer metodo mas para encontraar algo usuario, stallions y datos y modificarlos
const otherFunction = async () => {
    const user = await User.findOneAndUpdate({username: 'mike'}, {
        name: 'Gordon Mike'
    }, {new: true})
    console.log(user)
}


//Modificarlo a traves de Mongoose
//Modificar un Dato en la DB

/*

async function updateUsers() {
    const user = await User.update({username: 'Brian'}, {
        password: 'contrasenasegura'

    });

    console.log(user)
}

*/


// updateUsers();

//someFunction();


otherFunction();

