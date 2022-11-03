import { useDispatch } from "react-redux";
import { getPokemonsByTypes } from "../../Redux/actions";

function List({options}) {
	const dispatch = useDispatch();
	
	const handlerType = (event)=>{
    	let type = event.target.value;
    	dispatch(getPokemonsByTypes(type));
  	}

	return (
    <select name="types" className="types" onChange={handlerType}>
    	<option value='default'>default</option>
    	{options && options.map((option,i) => <option key={i} value={option}>{option}</option>)}
    </select>
  );
}

export default List;