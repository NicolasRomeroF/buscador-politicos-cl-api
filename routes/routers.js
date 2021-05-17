const politicoController = require('../controllers/politicoController');
const partidoController = require('../controllers/partidoController');

let express = require('express');

let router = express.Router();

router.get('/hello', (req,res) => {
    res.send('Hello world')
});
router.get('/politico/search', politicoController.findByName);
router.get('/partido/search', partidoController.findByName);


module.exports = router;
