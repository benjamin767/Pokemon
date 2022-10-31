import axios from 'axios';

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const GET_DETAIL_POKEMON = "GET_DETAIL_POKEMON";
export const EMPTY_DETAILS = "EMPTY_DETAILS";
export const SET_LOADING = "SET_LOADING";

export const getPokemons = ()=>{
	return async function(dispatch){
		dispatch(setLoading(true));
		try{
			let pokemons = await axios.get('http://localhost:3001/pokemons');
			dispatch({type: GET_ALL_POKEMONS, payload: pokemons.data})
		}catch(error){
			console.log(error.message)
		}
		dispatch(setLoading(false));
	}

}

export const getPokemonDetails = (id) => async (dispatch) => {
	dispatch(setLoading(true));
	dispatch(emptyDetails());
	console.log("EStoy en GETDetails");
	try{
		let pokeDetails = await axios.get(`http://localhost:3001/pokemons/${id}`);
		dispatch({type: GET_DETAIL_POKEMON, payload: pokeDetails.data});
	}catch(error){
		console.log(error.message);
	}
	dispatch(setLoading(false));
}

export const emptyDetails = () => (dispatch) => {
	dispatch({
		type: EMPTY_DETAILS,
	});
}

export const setLoading = boolLoading => dispatch => {
	dispatch({
		type: SET_LOADING,
		payload: boolLoading,
	});
};