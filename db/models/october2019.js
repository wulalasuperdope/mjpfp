const { STRING } = require('sequelize');
const db = require('../connection.js');

const October2019 = db.define('october2019', {
    date: {
        type: STRING,
        allowNull: false,
        unique: true,
    },
});

module.exports = October2019;