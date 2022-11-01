const axios = require('axios');
const { Type } = require('../../db');

module.exports = {
	getAllTypes: async () => {
		let typesApi = await axios.get('https://pokeapi.co/api/v2/type');
		typesApi = typesApi.data.results.map(type => {
			return {
				name: type.name
			}
		})
		let allTypes = [];
		for(let type of typesApi){
			[type] = await Type.findOrCreate({
				where: {name: type.name}
			});
			allTypes.push(type.name);
		}
		// let typesDB = await Type.findAll();
		// allTypes = [...new Set([...typesDB,...allTypes])]
  		return allTypes;
	}
};