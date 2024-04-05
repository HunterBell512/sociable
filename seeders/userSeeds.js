const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

const SeedUsers = () => connection.once('open', async () => {
    console.log('connected to the database');

    let checkUsers = await connection.db.listCollections({ name: 'users' }).toArray();
    if(checkUsers.length) {
        await connection.db.dropCollection('users');
    }

    const users = [
        {
            username: 'flyguy25',
            email: 'flyguy25@hotmail.com'
        },
        {
            username: 'cooldude24',
            email: 'cooldude24@gmail.com'
        },
        {
            username: 'chillgirl40',
            email: 'chillgirl40@yahoo.com'
        }
    ];

    const userData = await User.insertMany(users);

    console.table(users);
    console.info('User seeding complete! 🌱');
    connection.close();
});

module.exports = SeedUsers;