//import {useState} from 'react';
import styles from '../../css/moving.module.css';

const Moving = (props) => {
	
	var content = (props.children) ? props.children : 'Enter your content';
	
	return (
		<>
			<div className={styles.gsMoving}>
				<div className={styles.gsgsMovingInner}>{content}</div>
			</div>
		</>
	);
	
}
export default Moving;
