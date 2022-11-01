function List({options}) {
	const handleValue = (value)=>{
		console.log(value)
	}
	return (
    <select name="types" >
    	<option value='all'>all</option>
    	{options && options.map((option,i) => <option id={i} value={option}>{option}</option>)}
    </select>
  );
}

export default List;