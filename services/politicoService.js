let politicoRepository = require('../repositories/politicoRepository');

let findByName = async (searchString) => {
    return politicoRepository.findByName(searchString);
}

exports.findByName = findByName;