let mongoose = require('mongoose');

let Partido = require('../models/partido');

let findByName = async (searchString) => {
    return Partido.find({ $text: {$search: searchString}})
    .select({ "score": {"$meta": "textScore"}})
    .sort({"score": {"$meta": "textScore"}})
    .limit(30)
    .exec();
}

exports.findByName = findByName;