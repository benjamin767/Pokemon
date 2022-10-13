import {GET_ALL_POKEMONS, GET_DETAIL_POKEMON} from '../actions/index.js';

const initialState = {
  allPokemons: [],
  details: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {...state, allPokemons: action.payload};
    default: return state;
  }
}

export default rootReducer;