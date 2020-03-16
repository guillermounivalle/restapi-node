//{Roter} Método de express que permite crear rutas


const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => res.json({message: 'Hello wolrd'}));

module.exports = router;
