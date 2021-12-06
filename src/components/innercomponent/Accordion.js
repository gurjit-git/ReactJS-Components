import {useState, useRef} from 'react';
import styles from '../../css/accordion.module.css';

const AccordionItem = (props) => {
	
	var content = (props.children) ? props.children : 'Enter your content';
	
	const [active, setActive] = useState(false);
	
	function setActiveFunc(){
		setActive(current => !current);
	}
	var setActiveVar = {
		activeClass : (active === true ? styles.active : '') // add active class for Active Accordion title
	};
	
	const contentEl = useRef();
	const contentStyle = {
		height: (active === true && contentEl.current !== undefined) ? contentEl.current.scrollHeight : "0px" // Set height for Accordion content
	};
		
	return (
		<>
			
			<div className={styles.gsAccordionItem}>
				<div className={styles.gsAccordionTitle + ' '+ setActiveVar.activeClass} onClick={setActiveFunc}>
					<span className={styles.dropTri}></span>
					{props.title}
				</div>
				<div ref={contentEl} className={styles.gsAccordionContent} style={contentStyle}>
					<div className={styles.gsAccordionContentInner}>{content}</div>
				</div>
			</div>
			
		</>
	);
	
}
export default AccordionItem;