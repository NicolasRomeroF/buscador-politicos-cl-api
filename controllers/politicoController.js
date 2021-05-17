let politicoService = require('../services/politicoService');

let findByName = async (req, res, next) => {
    try{
        let name = req.query.name;
        let queryResult = await politicoService.findByName(name)
        let bodyRes = {
            queryResult
        }
        return res.send(bodyRes).status(400);
    } 
    catch(e){
        console.error(e.message);
        res.sendStatus(500) && next(e);
    }
};

exports.findByName = findByName;