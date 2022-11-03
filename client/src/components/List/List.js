import { useDispatch } from "react-redux";
import { getPokemonsByTypes } from "../../Redux/actions";

function List({options, handler}) {
	const dispatch = useDispatch();

	return (
    <select name="types" className="types" onChange={handler}>
    	<option value='default'>default</option>
    	{options && options.map((option,i) => <option key={i} value={option}>{option}</option>)}
    </select>
  );
}

export default List;