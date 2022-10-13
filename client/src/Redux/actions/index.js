export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const GET_DETAIL_POKEMON = "GET_DETAIL_POKEMON";

export const getPokemons = ()=>{
	return function(dispatch){
		return fetch('https://pokeapi.co/api/v2/pokemon')
			.then(response => response.json())
			.then(data => dispatch({type: GET_ALL_POKEMONS, payload: data.results}));
	}
}

export const getDetailPokemon= (url)=>{
	return function(dispatch){
		return fetch(url)
			.then(response => response.json())
			.then(data => dispatch({type: GET_DETAIL_POKEMON, payload: data}));
	}
}