const axios = require('axios');
const { Pokemon, Type } = require('../../db');

function capitalize(s){
    return s[0].toUpperCase() + s.slice(1).toLowerCase();
}

module.exports = {
	getPokemonsApi: async ()=>{
		let apiData = await axios.get('https://pokeapi.co/api/v2/pokemon');
		apiData = apiData.data.results;
		let pokemonsData = [];

		for(let i = 0; i < apiData.length; i++){
			pokemon = await axios.get(apiData[i].url);
			pokemonsData.push(pokemon);
		}
		
		pokemonsData = pokemonsData.map(pokemon => {
			return {
				api: true,
				id: pokemon.data.id,
				name: capitalize(pokemon.data.name),
				types: pokemon.data.types,
				hp: pokemon.data.stats[0].base_stat,
				attack: pokemon.data.stats[1].base_stat,
				defense: pokemon.data.stats[2].base_stat,
				speed: pokemon.data.stats[5].base_stat,
				height: pokemon.data.height,
				weight: pokemon.data.weight,
				image: pokemon.data.sprites.front_default,
			}
		});
		
		return pokemonsData;
	},

	getPokemonsDB: async ()=>{
		let pokemonsDB = await Pokemon.findAll({
			include:{
				model: Type,
				attributes: ['name'],
				through: {
					attributes: []
				}
			}
		});
		return pokemonsDB;
	},

	getPokemon: (pokemons, name, id)=> {
		let found;
		if(!name){
			if(id.length < 6) id = parseInt(id);
			found = pokemons.find(pokemon => pokemon.id === id);
			if(!found) throw new Error("Pokemon not found");
			return found;
		}
		found = pokemons.find(pokemon => pokemon.name.toUpperCase() === name.toUpperCase());
		if(!found) throw new Error("Pokemon not found");
		else found.name = capitalize(found.name);
		return found;
	},

	getTypes: async (types)=>{
		let typesDB = [];
		for(let type of types){
			[type] = await Type.findOrCreate({
				where: {name: type}
			});
			typesDB.push(type);
		}
		return typesDB;
	},
};