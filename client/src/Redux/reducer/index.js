import {GET_ALL_POKEMONS, GET_DETAIL_POKEMON, EMPTY_DETAILS, SET_LOADING} from '../actions/index.js';

const initialState = {
  allPokemons: [],
  details: undefined,
  loading: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {...state, allPokemons: action.payload};
    case GET_DETAIL_POKEMON: 
      return {...state, details: action.payload};
    case EMPTY_DETAILS: 
      return {...state, details: undefined}
    case SET_LOADING: 
      return {...state, loading: action.payload}
    default: return state;
  }
}

export default rootReducer;