//AQUI CONSULTAMOS TODOS LOS CEJEMPLARES QUE EXISTEN EN LA DB...

require('../connection')

const Stallion = require('../models/Stallions')

async function main() {
    const stallion = await Stallion.find()
    console.log(stallion)
}

main();

