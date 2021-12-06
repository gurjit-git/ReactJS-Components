import { useState } from 'react';
import styles from '../../css/popup.module.css';

const Popup = (props) => {
	
	var content = (props.children) ? props.children : 'Use content as children.';
	
	const [popup, setPopup] = useState(false);
	
	function showPopup(){
		setPopup(current => !current);
	}
	/* function hidePopup(){
		setPopup(false);
	}
	 */
	let isShow = (popup === true) ? 'block' : 'none';
	
	const mystyle = {
		
		display: isShow
		
	};
	///console.log(isShow);
	
	return (
		<>
			<button onClick={showPopup} className="btn btn-primary">Read More</button>
			<div id={props.id} className={styles.gmodal} style={mystyle}>
			  <div className={styles.gmodalContent}>
				<div className={styles.gmodalHeader}>
				  <span className={styles.gclose} onClick={showPopup}>&times;</span>
				  <h3>{props.title}</h3>
				</div>
				<div className={styles.gmodalBody}>
				  <p>{content}</p>
				</div>
				{/*<div className={styles.gmodalFooter}>
				  <h3>Modal Footer</h3>
				</div>*/}
			  </div>

			</div>
		</>
	);
}

export default Popup;
