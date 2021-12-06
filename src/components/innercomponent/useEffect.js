import {useState, useEffect} from 'react';
//import styles from '../../css/accordion.module.css';

const UseEffect = (props) => {
	
	const [count, setCount] = useState(0);
	
	useEffect(() => {
		document.title = `You cliked ${count} times`;
	}, [count]);
	
	return (
		<>
			
			<span>{count}</span>
			<button onClick={ () => setCount(count + 1) }>Click</button>
			
		</>
	);
	
}
export default UseEffect;
