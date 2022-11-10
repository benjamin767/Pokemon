import React from 'react';
import SearchBar from '../SearchBar/SearchBar.js';
import {getPokemon} from "../../Redux/actions";
import { useDispatch } from "react-redux";

function Nav() {
  const dispatch = useDispatch();
  const onSearch = (pokemon)=>{
    dispatch(getPokemon(pokemon));
  }
  return (
    <nav >
      <SearchBar onSearch={onSearch}/>
    </nav>
  );
}

export default Nav;