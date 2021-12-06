import { useState } from 'react';
const Count = (props) => {
	
	const [count, setCount] = useState(0);
	
	const increament = () => {
		setCount(count + props.increamentBy);
	}
	
	return (
		<div>
			<div>{count}</div>
			<button onClick={increament}>Click</button>
		</div>
	);
}

export default Count;
