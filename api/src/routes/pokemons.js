const { Router } = require('express');
const { getPokemonsApi,getPokemon,getPokemonsDB,getTypes } = require('./controllers/pokeController.js');
const axios = require('axios');
const { Pokemon, Type } = require('../db');
const router = Router();

router.get("/", async (req,res) => {

	try{
		const {name} = req.query;
		const apiData = await getPokemonsApi();
		const pokemonsDB = await getPokemonsDB();
		const pokemons = [...pokemonsDB, ...apiData];
		if(name){
			let found = getPokemon(pokemons, name);
			return res.status(200).json([found]);
		} 
		res.status(200).json(pokemons);
	}catch(err){
		res.status(404).json({error: err.message});
	}
});

router.post("/", async (req,res) => {
	const {types,name, hp, attack, defense, speed, height, weight} = req.body;
	if(!types || !name || !hp || !attack || !defense || !speed || !height || !weight){ 
		return res.status(400).send('400 Bad Request');
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
		let typesDB = await getTypes(types);
		newPokemon.addTypes(typesDB);
		res.status(201).send("pokemon added successfully");
	} catch(err){
		res.status(404).json({error: err.message});
	}
});

router.get("/:id", async (req,res) => {
	const {id} = req.params;
	try{
		const apiData = await getPokemonsApi();
		const pokemonsDB = await getPokemonsDB();
		const pokemons = [...pokemonsDB, ...apiData];
		let found = getPokemon(pokemons, false, id);
		res.status(200).json(found);
	}catch{
		res.status(404).json({error: err.message});
	}
});

module.exports = router;