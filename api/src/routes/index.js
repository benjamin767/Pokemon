const { Router } = require('express');
const pokemonsRoutes = require('./pokemons.js');
const typesRoutes = require('./types.js');
// Importar todos los routers;


const router = Router();

// Configurar los routers

router.use('/pokemons', pokemonsRoutes);

router.use('/types', typesRoutes);

module.exports = router;
