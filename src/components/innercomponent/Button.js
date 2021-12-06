import { useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

const Button = (props) => {
	
	//const [count, setCount] = useState(0);
	const [popup, setPopup] = useState(false);
	let btn;
	
	if(props.type === 'popup'){
		function popup_show(){ 
			setPopup(current => !current); 
		}
		btn = <button onClick={popup_show}>click ({popup})</button>
	}
	if(props.type === 'link'){
		btn = <BrowserRouter>
			<Link to={props.href}>{props.txt}</Link>
		</BrowserRouter>
	}
	
	return (
		<>
			{btn}
		</>
	);
}

export default Button;
