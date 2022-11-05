import {GET_ALL_POKEMONS, 
  GET_POKEMONS,
  GET_DETAIL_POKEMON, 
  EMPTY_DETAILS, 
  GET_POKEMONS_BY_TYPES, 
  GET_POKEMONS_BY_SELECTION,
  GET_POKEMONS_BY_SKILL, 
  GET_POKEMONS_BY_ORDER,
  SET_LOADING, 
  GET_TYPES} from '../actions/index.js';

const initialState = {
  allPokemons: [],
  pokemons: [],
  details: undefined,
  loading: false,
  types: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {...state, allPokemons: action.payload};
    case GET_POKEMONS:
      return {...state, pokemons: action.payload};
    case GET_DETAIL_POKEMON: 
      return {...state, details: action.payload};
    case EMPTY_DETAILS: 
      return {...state, details: undefined};
    case SET_LOADING: 
      return {...state, loading: action.payload};
    case GET_TYPES: 
      return {...state, types: action.payload};
    case GET_POKEMONS_BY_TYPES: 
      return {...state, pokemons: action.payload};
    case GET_POKEMONS_BY_SELECTION: 
      return {...state, pokemons: action.payload};
    case GET_POKEMONS_BY_SKILL: 
      return {...state, pokemons: action.payload};
    case GET_POKEMONS_BY_ORDER: 
      return {...state, pokemons: action.payload};
    default: return state;
  }
}

export default rootReducer;