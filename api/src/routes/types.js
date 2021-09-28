var express = require('express');
var router = express.Router();
module.exports = router;
const { Type } = require('../db.js');

router.get('', async function (req, res) {
// obtener todos los tipos de pokemon
// traer de api y guardar en bbdd
const types = await Type.findAll();
res.send(types);
});