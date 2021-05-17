
var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var PartidoSchema = new Schema({
    nombre: String,

}, {collection: 'partidos'});

PartidoSchema.index({nombre: 'text'});




module.exports = mongoose.model('Partido', PartidoSchema );