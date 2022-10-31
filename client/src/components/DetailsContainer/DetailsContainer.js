import React, { useEffect } from 'react';
import { getPokemonDetails } from "../../Redux/actions";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import PokeDetails from '../PokeDetails/PokeDetails';
import Spinner from '../Spinner/Spinner';

function DetailsContainer() {
	const dispatch = useDispatch();
	const { id } = useParams();
  	useEffect(() => {
    	dispatch( getPokemonDetails(id));
  	},[dispatch, id]);
  	const pokemon = useSelector(state => state.details);

  	return (
  		<div>
  			{!pokemon ? <Spinner/> : <PokeDetails pokemon={pokemon}/>}
  		</div>
  	);	
}

export default DetailsContainer;