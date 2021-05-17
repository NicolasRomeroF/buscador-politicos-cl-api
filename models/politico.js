
var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var PoliticoSchema = new Schema({
    region: String,
    provincia: String,
    comuna: String,
    candidato: String,
    pacto: String,
    partido: String,
    subpacto: String,
    nivel: String,
}, {collection: 'politicos'});

PoliticoSchema.index({candidato: 'text'});




module.exports = mongoose.model('Politico', PoliticoSchema );