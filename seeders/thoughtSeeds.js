const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

const SeedThoughts = () => connection.once('open', async () => {
    console.log('connected to the database');

    let checkThoughts = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if(checkThoughts.length) {
        await connection.db.dropCollection('thoughts');
    }

    const thoughts = [
        {
            thoughtText: 'Hey, I did a think!',
            username: 'flyguy25'
        },
        {
            thoughtText: 'I thunked really hard at work today.',
            username: 'cooldude24'
        },
        {
            thoughtText: 'My brainbox is working today!',
            username: 'chillgirl40'
        }
    ];

    const thoughtData = await Thought.insertMany(thoughts);

    console.table(thoughts);
    console.info('Thought seeding complete! 🌱');
    connection.close();
});

module.exports = SeedThoughts;