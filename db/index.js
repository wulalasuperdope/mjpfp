const connection = require('./connection.js');
const { November2019, October2019 } = require('./models/index.js');
const { syncAndSeed } = require('./seed.js');

console.log(syncAndSeed, '****')
module.exports = {
    connection,
    syncAndSeed,
    models: {
        November2019,
        October2019
    },
}
