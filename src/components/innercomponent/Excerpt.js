const Excerpt = (props) => {
	
	var content = (props.children) ? props.children : 'Use content as children.';
	let elmt;
	
	if(props.tag){
		elmt = <props.tag>{content}</props.tag>
	}
	else{
		elmt= <div>{content}</div>
	}
	
	return (
		<>
			{elmt}
		</>
	);
}

export default Excerpt;
