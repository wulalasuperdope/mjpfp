const { STRING } = require('sequelize');
const db = require('../connection.js');

const November2019 = db.define('november2019', {
    date: {
        type: STRING,
        allowNull: false,
        unique: true,
    },
});

module.exports = November2019;