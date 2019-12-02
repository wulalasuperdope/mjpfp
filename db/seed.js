const { November2019, October2019 } = require('./models/index.js');
const connection = require('./connection.js');

const seed = async () => {
    const november2019 = [
        { date: '11/1/2019' },
        { date: '11/2/2019' },
        { date: '11/3/2019' },
    ];

    const october2019 = [
        { date: '10/1/2019' },
        { date: '10/2/2019' },
        { date: '10/3/2019' },
    ];

    await Promise.all(november2019.map(date => {
        return November2019.create(date);
    }));

    await Promise.all(october2019.map(date => {
        return October2019.create(date);
    }));
}

const syncAndSeed = () => {
    return connection.sync({ force: true })
        .then(() => seed())
        .catch(e => console.log(e));
};

module.exports = { syncAndSeed }