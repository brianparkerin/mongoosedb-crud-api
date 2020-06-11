require('./connection')

const User = require('./models/User')


async function createUsers() {
    const userOne = new User({
        username: 'margarita',
        password: '25825'
    })
    await userOne.save();
    
    
    const userTwo = new User({
        username: 'michelle',
        password: 'securepass'
    })
    await userTwo.save();

    

}

createUsers();