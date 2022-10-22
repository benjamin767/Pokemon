const { Router } = require('express');
const pokemonsRoutes = require('./pokemons.js');
// Importar todos los routers;


const router = Router();

// Configurar los routers

router.use('/pokemons', pokemonsRoutes);

module.exports = router;
