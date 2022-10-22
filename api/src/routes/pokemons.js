const { Router } = require('express');
const {getPokemonsMap} = require('./controllers/pokeController.js');
const axios = require('axios');
const { Pokemon } = require('../db');
const router = Router();

router.get("/", async (req,res) => {
	try{
		let apiData = await axios.get('https://pokeapi.co/api/v2/pokemon');
		apiData = apiData.data.results;
		apiData = await getPokemonsMap(apiData);
		let pokemonsDB = await Pokemon.findAll();
		const pokemons = [...pokemonsDB, ...apiData]
		res.status(200).json(pokemons);
	}catch(err){
		res.status(404).json({error: err.message});
	}
});

router.post("/", async (req,res) => {
	const {types,name, hp, attack, defense, speed, height, weight} = req.body;
	if(!name || !hp || !attack || !defense || !speed || !height || !weight){ 
		res.status(400).send('400 Bad Request');
	}
	try{
		let newPokemon = await Pokemon.create({
			name, 
			hp, 
			attack, 
			defense, 
			speed, 
			height, 
			weight,
		});
		
		res.status(201).json(newPokemon);
	} catch(err){
		res.status(404).json({error: err.message});
	}
});

module.exports = router;