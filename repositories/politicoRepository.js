let mongoose = require('mongoose');

let Politico = require('../models/politico');

let findByName = async (searchString) => {
    return Politico.find({ $text: {$search: searchString}})
    .select({ "score": {"$meta": "textScore"}})
    .sort({"score": {"$meta": "textScore"}})
    .limit(30)
    .exec();
}

exports.findByName = findByName;
