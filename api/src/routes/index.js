const { Router } = require('express');  
const pokemonsRoutes = require('./pokemons.js');
const typesRoutes = require('./types.js');
const router = Router();
const { Type } = require('../db.js');


// Configurar los routers
router.use('/pokemons', pokemonsRoutes);
router.use('/types', typesRoutes);

// aca va landing page que redirige a home
router.get('/', async function(req, res) {
    
    res.send("Wwelcome! ");
});

module.exports = router;
