'use strict'

require('dotenv').config();
var mongoose = require('mongoose');

var app = require('./app');

var port = 3800;

mongoose.Promise = global.Promise;

const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;


mongoose.connect(`mongodb://${DB_USER}:${DB_PASS}@localhost:27017/politicos?authSource=admin`,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("La conexión a la base de datos politicos se ha realizado correctamente")
    
        app.listen(port, () => {
            console.log("servidor corriendo en http://localhost:"+port);
        });
    })

    .catch(err => console.log(err));