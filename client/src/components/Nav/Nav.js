import React from 'react';
import SearchBar from '../SearchBar/SearchBar.js';
import { getPokemon } from "../../Redux/actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Nav() {
  const dispatch = useDispatch();
  const onSearch = (pokemon)=>{
    dispatch(getPokemon(pokemon));
  }
  return (
    <nav >
      <SearchBar onSearch={onSearch}/>
      <Link to="/create"> <div>CREATE A POKÉMON</div> </Link>
    </nav>
  );
}

export default Nav;