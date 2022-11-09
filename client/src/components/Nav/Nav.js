import React from 'react';
import SearchBar from '../SearchBar/SearchBar.js';
import {getPokemon} from "../../Redux/actions";

function Nav() {
  const onSearch = (pokemon)=>{
      getPokemon(pokemon);
  }
  return (
    <nav >
      <SearchBar/>
    </nav>
  );
}

export default Nav;