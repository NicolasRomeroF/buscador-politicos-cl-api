'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
const path = require('path');


var app = express();

app.use(express.static("../buscador-politicos/build"));


var routers = require('./routes/routers'); 

app.use(cors())

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/api', routers);
app.get('/', function(req, res) {
    res.sendFile('index.html');
  });
  

module.exports = app;
