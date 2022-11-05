import axios from 'axios';

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_DETAIL_POKEMON = "GET_DETAIL_POKEMON";
export const EMPTY_DETAILS = "EMPTY_DETAILS";
export const SET_LOADING = "SET_LOADING";
export const GET_TYPES = "GET_TYPES";
export const GET_POKEMONS_BY_TYPES = "GET_POKEMONS_BY_TYPES";
export const GET_POKEMONS_BY_SELECTION = "GET_POKEMONS_BY_SELECTION";


export const getPokemons = ()=>{
	return async function(dispatch){
		dispatch(setLoading(true));
		try{
			let pokemons = await axios.get('http://localhost:3001/pokemons');
			dispatch({type: GET_ALL_POKEMONS, payload: pokemons.data});
			dispatch({type: GET_POKEMONS, payload: pokemons.data});
		}catch(error){
			console.log(error.message)
		}
		dispatch(setLoading(false));
	}

};

export const getPokemonDetails = (id) => async (dispatch) => {
	dispatch(emptyDetails());
	try{
		let pokeDetails = await axios.get(`http://localhost:3001/pokemons/${id}`);
		dispatch({type: GET_DETAIL_POKEMON, payload: pokeDetails.data});
	}catch(error){
		console.log(error.message);
	}
	
};

export const emptyDetails = () => (dispatch) => {
	dispatch({
		type: EMPTY_DETAILS,
	});
};

export const setLoading = boolLoading => dispatch => {
	dispatch({
		type: SET_LOADING,
		payload: boolLoading,
	});
};

export const getTypes = () => async (dispatch) => {
	try{
		const types = await axios.get('http://localhost:3001/types');
		dispatch({type: GET_TYPES, payload: types.data})
	}catch(error){
		console.log(error.message);
	}
};

export const getPokemonsByTypes = (type,pokemons) => (dispatch) => {
	dispatch(setLoading(true));
	if(type === 'default') dispatch({type: GET_POKEMONS_BY_TYPES, payload: pokemons});
	else{
		pokemons = pokemons.filter(pokemon => { 
			if(pokemon.Types[0].name === type) return pokemon;
			if(pokemon.Types[1]) return pokemon.Types[1].name === type;
		});
		dispatch({type: GET_POKEMONS_BY_TYPES, payload: pokemons});
	}
	dispatch(setLoading(false));
};

export const getPokemonsBySelection = (selection, pokemons) => {
	dispatch(setLoading(true));
	if(selection === 'existing'){
		pokemons = pokemons.filter(pokemon => pokemon.hasOwnProperty("api"));
		return {type: GET_POKEMONS_BY_SELECTION, payload: pokemons}
	}
	else {
		pokemons = pokemons.filter(pokemon => !pokemon.hasOwnProperty("api"));
		return {type: GET_POKEMONS_BY_SELECTION, payload: pokemons}
	}
	dispatch(setLoading(false));
};