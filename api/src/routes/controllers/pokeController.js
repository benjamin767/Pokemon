const axios = require('axios');
function capitalize(s){
    return s[0].toUpperCase() + s.slice(1);
}

module.exports = {
	getPokemonsMap: async (pokemons)=>{
		
		let pokemonsData = [];

		for(let i = 0; i < pokemons.length; i++){
			pokemon = await axios.get(pokemons[i].url);
			pokemonsData.push(pokemon);
		}
		
		pokemonsData = pokemonsData.map(pokemon => {
			return {
				origin: "API",
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
	}
};