require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const bodyParser = require('body-parser');

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());
app.use(bodyParser.json());

//routes
const gameRoutes = require('./routes/games');
app.use('/games',gameRoutes);

const consoleRoutes = require('./routes/consoles');
app.use('/consoles',consoleRoutes);

const genreRoutes = require('./routes/genres');
app.use('/genres',genreRoutes);

//start
app.listen(4000, () => {
    console.log(`Server Started at ${4000}`)
})