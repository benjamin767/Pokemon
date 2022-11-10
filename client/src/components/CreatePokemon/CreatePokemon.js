import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getTypes } from "../../Redux/actions";
import List from '../List/List';

function CreatePokemon() {
	const dispatch = useDispatch();
	useEffect(() => {
    	dispatch(getTypes());
  	}, [dispatch]);
	const typesArr = useSelector(state => state.types);

	let [input, setInput] = useState({
		name: "",
		hp: 0,
		attack: 0,
		defense: 0,
		speed: 0,
		height: 0,
		weight: 0,
	});
	let [types, setTypes] = useState([]);

	const handlerType = (event)=>{
		let type = event.target.value;
		if(type === "default") type = "normal"; 
		if(types.length >= 2) alert("only two types can be selected");
		else {
			setTypes(types => types.push(type));
		}
	};

	return (
	<form>
		<label>Name:</label> <input/>
		<label>HP:</label> <input/>
		<label>Attack:</label> <input/>
		<label>Defense:</label> <input/>
		<label>Speed:</label> <input/>
		<label>Height:</label> <input/>
		<label>Weight:</label> <input/>
		<label>Types:</label> <List options={typesArr} handler={handlerType}/>
		<input type="submit" value="CREATE"/>
	</form>
	);
}

export default CreatePokemon;