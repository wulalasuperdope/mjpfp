const Sequelize = require('sequelize');

const connection = new Sequelize('postgres://localhost:5432/calendar', {
    logging: false,
})

module.exports = connection;