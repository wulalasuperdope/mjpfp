const express = require('express');
const app = express();
const chalk = require('chalk');

const path = require('path');
const PORT = 3000;

const { models, syncAndSeed } = require('../db/index.js');
const { November2019, October2019 } = models;

app.use(express.json());

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/api/november2019', (req, res, next) => {
    November2019.findAll()
        .then(dates => {
            res.send(dates);
        })
        .catch(e => {
            console.log(chalk.red('Error getting all November 2019 dates'), e);
            next(e);
        })
})

app.get('/api/october2019', (req, res, next) => {
    October2019.findAll()
        .then(dates => {
            res.send(dates);
        })
        .catch(e => {
            console.log(chalk.red('Error getting all October 2019 dates'), e);
            next(e);
        })
})


syncAndSeed()
    .then(() => {
        app.listen(PORT, () => {
            console.log(chalk.green(`Application started on http://localhost:${PORT}`));
        });
    })
