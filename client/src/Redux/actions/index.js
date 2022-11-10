import axios from 'axios';

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_DETAIL_POKEMON = "GET_DETAIL_POKEMON";
export const EMPTY_DETAILS = "EMPTY_DETAILS";
export const SET_LOADING = "SET_LOADING";
export const GET_TYPES = "GET_TYPES";
export const GET_POKEMONS_BY_TYPES = "GET_POKEMONS_BY_TYPES";
export const GET_POKEMONS_BY_SELECTION = "GET_POKEMONS_BY_SELECTION";
export const GET_POKEMONS_BY_SKILL = "GET_POKEMONS_BY_SKILL";
export const GET_POKEMONS_BY_ORDER = "GET_POKEMONS_BY_ORDER";
export const GET_POKEMON = "GET_POKEMON";

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
			if(pokemon.Types[1]) return pokemon.Types[1].name === type;
			return pokemon.Types[0].name === type;
		});
		dispatch({type: GET_POKEMONS_BY_TYPES, payload: pokemons});
	}
	dispatch(setLoading(false));
};

export const getPokemonsBySelection = (selection, pokemons) => (dispatch) =>{
	dispatch(setLoading(true));
	if(selection === 'default') dispatch({type: GET_POKEMONS_BY_SELECTION, payload: pokemons});
	else if(selection === 'existing'){
		pokemons = pokemons.filter(pokemon => pokemon.hasOwnProperty("api"));
		dispatch({type: GET_POKEMONS_BY_SELECTION, payload: pokemons});
	}
	else {
		pokemons = pokemons.filter(pokemon => !pokemon.hasOwnProperty("api"));
		dispatch({type: GET_POKEMONS_BY_SELECTION, payload: pokemons});
	}
	dispatch(setLoading(false));
};

export const getPokemonsBySkill = (skill, pokemons) => (dispatch) =>{
	dispatch(setLoading(true));
	let pokeCopy = [...pokemons];
	if(skill === 'default') dispatch({type: GET_POKEMONS_BY_SKILL, payload: pokeCopy});
	else if(skill === 'max attack'){
		pokeCopy.sort(function(a, b) {
  			return a.attack - b.attack;
		}).reverse();
		dispatch({type: GET_POKEMONS_BY_SKILL, payload: pokeCopy});
	}
	else if(skill === 'min attack'){
		pokeCopy.sort(function(a, b) {
  			return a.attack - b.attack;
		});
		dispatch({type: GET_POKEMONS_BY_SKILL, payload: pokeCopy});
	}
	else if(skill === 'max defense'){
		pokeCopy.sort(function(a, b) {
  			return a.defense - b.defense;
		}).reverse();
		dispatch({type: GET_POKEMONS_BY_SKILL, payload: pokeCopy});
	}
	else {
		pokeCopy.sort(function(a, b) {
  			return a.defense - b.defense;
		})
		dispatch({type: GET_POKEMONS_BY_SKILL, payload: pokeCopy});
	}
	dispatch(setLoading(false));
};

export const orderBy = (order, pokemons) => (dispatch) =>{
	dispatch(setLoading(true));
	let pokeCopy = [...pokemons];
	if(order === 'default'){ dispatch({type: GET_POKEMONS_BY_ORDER, payload: pokeCopy});}
	else if(order === 'upward'){
		pokeCopy.sort(function (a, b) {
  			if (a.name > b.name) return 1;
  			if (a.name < b.name) return -1;
  			return 0;
		});
		dispatch({type: GET_POKEMONS_BY_ORDER, payload: pokeCopy});
	}
	else {
		pokeCopy.sort(function (a, b) {
  			if (a.name > b.name) return 1;
  			if (a.name < b.name) return -1;
  			return 0;
		}).reverse();
		dispatch({type: GET_POKEMONS_BY_ORDER, payload: pokeCopy});
	}
	dispatch(setLoading(false));
};

export const getPokemon = (pokemon)=> async (dispatch) =>{
	dispatch(setLoading(true));
	try{
		let poke = await axios.get(`http://localhost:3001/pokemons?name=${pokemon}`);
		dispatch({type: GET_POKEMON, payload: poke.data});
	}catch(error){
		console.log(error.message);
	}
	dispatch(setLoading(false));

};