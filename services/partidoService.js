let partidoRepository = require('../repositories/partidoRepository');

let findByName = async (searchString) => {
    return partidoRepository.findByName(searchString);
}

exports.findByName = findByName;