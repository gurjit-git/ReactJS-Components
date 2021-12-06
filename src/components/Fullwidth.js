import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';
import '../css/scss/style.scss';

import Heading from '../components/innercomponent/Heading';
import Excerpt from '../components/innercomponent/Excerpt';
//import Button from '../components/innercomponent/Button';
import Popup from '../components/innercomponent/Popup';
import AccordionItem from '../components/innercomponent/Accordion';
import Tabgroup from './innercomponent/Tabs/Tabgroup';
import Tabitem from './innercomponent/Tabs/Tabitem';
//import Moving from '../components/innercomponent/Moving';
import UseEffect from '../components/innercomponent/useEffect';
import Typical from 'react-typical';
//import GsTypical from '../components/innercomponent/GsTypical';

const Fullwidth = (props) => {
	
	const [ bgColor, setBgColor] = useState('#ffe086');
	const [ colorClass, setColorClass] = useState('color1');

	const changeBackgroundColor = () => { 
		const heightOfWindow = window.innerHeight,
		contentScrolled = window.pageYOffset,
		bodyHeight = document.body.offsetHeight;
		//percentage = document.querySelector("[data-scrollPercentage] .percentage")
		//percentageVal = document.querySelector("#percentage-value")
		
		// if(bodyHeight - contentScrolled <= heightOfWindow) {
		// 	setBgColor('#ffe086');
		// }
		// else {
			const total = bodyHeight - heightOfWindow,
			got = contentScrolled,
			percent = parseInt((got/total) * 100)
			if(percent >= 25 && percent <= 50){
				setBgColor('#edecb9');
				setColorClass('color2');
			}
			else if(percent >= 51 && percent <= 67){
				setBgColor('#7fb5ad');
				setColorClass('color3');
			}
			else if(percent >= 68 && percent <= 85 ){
				setBgColor('#ef8594');
				setColorClass('color4');
			}
			else if(percent >= 86 && percent <= 100 ){
				setBgColor('#73d1cd');
				setColorClass('color4');
			}
			else{
				setBgColor('#ffe086');
				setColorClass('color1');
			}
		//}
	}
	useEffect(() => {
		changeBackgroundColor()
		// adding the event when scroll change background
		window.addEventListener('scroll', changeBackgroundColor);
		//document.getElementsByClassName('contentContainer')[0].classList.add(colorClass);
	}, [])

	var fluidBreakPoint = props.fluidBreak;

	var content_ar = [
		[
			'Title 1',
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo, dui ut lobortis pretium, sapien ligula varius velit, et sollicitudin lorem justo sed ligula. Pellentesque ultrices velit quis turpis lacinia lobortis.',
			'/about'
		],
		[
			'Title 2',
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo, dui ut lobortis pretium, sapien ligula varius velit, et sollicitudin lorem justo sed ligula. Pellentesque ultrices velit quis turpis lacinia lobortis.',
			'/contact'
		],
		[
			'Title 3',
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo, dui ut lobortis pretium, sapien ligula varius velit, et sollicitudin lorem justo sed ligula. Pellentesque ultrices velit quis turpis lacinia lobortis.',
			'/service'
		],
		[
			'Title 4',
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo, dui ut lobortis pretium, sapien ligula varius velit, et sollicitudin lorem justo sed ligula. Pellentesque ultrices velit quis turpis lacinia lobortis.',
			'/testimonials'
		],
		[
			'Title 5',
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo, dui ut lobortis pretium, sapien ligula varius velit, et sollicitudin lorem justo sed ligula. Pellentesque ultrices velit quis turpis lacinia lobortis.',
			'/'
		],
		[
			'Title 6',
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo, dui ut lobortis pretium, sapien ligula varius velit, et sollicitudin lorem justo sed ligula. Pellentesque ultrices velit quis turpis lacinia lobortis.',
			'blog'
		],
	];
	
	//const [count, setCount] = useState(0);
	
	const colStyle = {
		position: 'relative'
	};
	const pageBackground = {
		backgroundColor: bgColor 
	};

	return (
	<>
		<div className={ (colorClass) ? 'contentContainer '+colorClass : 'contentContainer'} >
		<div className='pageBackground' style={pageBackground}></div>
		<section className='gp-t-15'>
			<Container>
				{/* xs: <576, sm: ≥576 to <767, md: ≥768px to <992, lg: ≥992 to <1200, xl: ≥1200 to <1400, xxl: ≥1400 */}
				<Row className="justify-content-md-center vertical-center">
					<Col md="auto" >	
						{/* <Typical
							steps={['Web Developer 🔥🔥🔥', 2000, 'and Designer 🔥🔥🔥', 1000]}
							loop={Infinity}
							wrapper="h1"
						/> */}
						<h1>It’s different here</h1>
						<h3>We’re building a better place to make, create and buy. Join us – and find your best audience yet.</h3>
					</Col>
				</Row>
			</Container>
		</section>
		<section className='gp-t-15'>
			<Container fluid={fluidBreakPoint}>
				{/* xs: <576, sm: ≥576 to <767, md: ≥768px to <992, lg: ≥992 to <1200, xl: ≥1200 to <1400, xxl: ≥1400 */}
				<Row xs={1} sm={2} md={3} lg={3} xl={3} xxl={3}>
					{ content_ar.map(( item, index ) => {
						return (
							<Col key={index} style={colStyle} className='p-4'>
								<Heading htag='h4' title={item[0]}/>
								<Excerpt tag='p'>{item[1]}</Excerpt>
								
								{/*<Button type='popup' href={item[2]} txt={'Learn More...'}/>*/}
								<Popup id={'model_'+index} title={item[0]}>{item[1]}</Popup>
							</Col>
						);
					}) }
				</Row>
			</Container>
		</section>
		
		<section className='gp-t-15'>
			<Container fluid={fluidBreakPoint}>
				{/* xs: <576, sm: ≥576 to <767, md: ≥768px to <992, lg: ≥992 to <1200, xl: ≥1200 to <1400, xxl: ≥1400 */}
				<Row xs={1} sm={1} md={1} lg={2} xl={2} xxl={2}>
					<Col>	
						<AccordionItem title='Title 1'>
							<p>1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo, dui ut lobortis pretium, sapien ligula varius velit, et sollicitudin lorem justo sed ligula. Pellentesque ultrices velit quis turpis lacinia lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo, dui ut lobortis pretium, sapien ligula varius velit, et sollicitudin lorem justo sed ligula. Pellentesque ultrices velit quis turpis lacinia lobortis.</p>
							<p>2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo, dui ut lobortis pretium, sapien ligula varius velit, et sollicitudin lorem justo sed ligula. Pellentesque ultrices velit quis turpis lacinia lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo, dui ut lobortis pretium, sapien ligula varius velit, et sollicitudin lorem justo sed ligula. Pellentesque ultrices velit quis turpis lacinia lobortis.</p>	
						</AccordionItem>
						
						<AccordionItem title='Title 2'>2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo, dui ut lobortis pretium, sapien ligula varius velit, et sollicitudin lorem justo sed ligula. Pellentesque ultrices velit quis turpis lacinia lobortis.'</AccordionItem>
						<AccordionItem title='Title 3'>3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo, dui ut lobortis pretium, sapien ligula varius velit, et sollicitudin lorem justo sed ligula. Pellentesque ultrices velit quis turpis lacinia lobortis.'</AccordionItem>
						<AccordionItem title='Title 4'>4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo, dui ut lobortis pretium, sapien ligula varius velit, et sollicitudin lorem justo sed ligula. Pellentesque ultrices velit quis turpis lacinia lobortis.'</AccordionItem>
						<AccordionItem title='Title 5'>5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo, dui ut lobortis pretium, sapien ligula varius velit, et sollicitudin lorem justo sed ligula. Pellentesque ultrices velit quis turpis lacinia lobortis.'</AccordionItem>
					</Col>
					<Col>	
						<AccordionItem title='Title 1'>1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo, dui ut lobortis pretium, sapien ligula varius velit, et sollicitudin lorem justo sed ligula. Pellentesque ultrices velit quis turpis lacinia lobortis.'</AccordionItem>
						<AccordionItem title='Title 2'>2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo, dui ut lobortis pretium, sapien ligula varius velit, et sollicitudin lorem justo sed ligula. Pellentesque ultrices velit quis turpis lacinia lobortis.'</AccordionItem>
						<AccordionItem title='Title 3'>3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo, dui ut lobortis pretium, sapien ligula varius velit, et sollicitudin lorem justo sed ligula. Pellentesque ultrices velit quis turpis lacinia lobortis.'</AccordionItem>
						<AccordionItem title='Title 4'>4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo, dui ut lobortis pretium, sapien ligula varius velit, et sollicitudin lorem justo sed ligula. Pellentesque ultrices velit quis turpis lacinia lobortis.'</AccordionItem>
						<AccordionItem title='Title 5'>5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo, dui ut lobortis pretium, sapien ligula varius velit, et sollicitudin lorem justo sed ligula. Pellentesque ultrices velit quis turpis lacinia lobortis.'</AccordionItem>
					</Col>
				</Row>
			</Container>
		</section>
		<section className='gp-t-15'>
			<Container fluid={fluidBreakPoint}>
				{/* xs: <576, sm: ≥576 to <767, md: ≥768px to <992, lg: ≥992 to <1200, xl: ≥1200 to <1400, xxl: ≥1400 */}
				<Row xs={1} sm={1} md={1} lg={2} xl={2} xxl={2} className="align-items-center">
					<Col>	
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo, dui ut lobortis pretium, sapien ligula varius velit, et sollicitudin lorem justo sed ligula. Pellentesque ultrices velit quis turpis lacinia lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo, dui ut lobortis pretium, sapien ligula varius velit, et sollicitudin lorem justo sed ligula. Pellentesque ultrices velit quis turpis lacinia lobortis.
					</Col>
					<Col className="m-auto">	
						<Image src="logo192.png" className="d-block mx-auto"/>
					</Col>
				</Row>
			</Container>
		</section>

		<section className='gp-t-15 gp-b-15'>
			<Container fluid={fluidBreakPoint}>
				{/* xs: <576, sm: ≥576 to <767, md: ≥768px to <992, lg: ≥992 to <1200, xl: ≥1200 to <1400, xxl: ≥1400 */}
				<Row xs={1} sm={1} md={1} lg={1} xl={1} xxl={1} className="align-items-center">
					<Col>
						<Tabgroup>
							<Tabitem name="Tab 1" image='img-1.jpg' buttonTxt='Learn More' btnLink='#'>
							   1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo, dui ut lobortis pretium, sapien ligula varius velit, et sollicitudin lorem justo sed ligula. Pellentesque ultrices velit quis turpis lacinia lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo, dui ut lobortis pretium, sapien ligula varius velit, et sollicitudin lorem justo sed ligula. Pellentesque ultrices velit quis turpis lacinia lobortis.
							</Tabitem>
							<Tabitem name="Tab 2" image='img-2.jpg'>
							   2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo, dui ut lobortis pretium, sapien ligula varius velit, et sollicitudin lorem justo sed ligula. Pellentesque ultrices velit quis turpis lacinia lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo, dui ut lobortis pretium, sapien ligula varius velit, et sollicitudin lorem justo sed ligula. Pellentesque ultrices velit quis turpis lacinia lobortis.
							</Tabitem>
							<Tabitem name="Tab 3" image='img-1.jpg'>
							   3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo, dui ut lobortis pretium, sapien ligula varius velit, et sollicitudin lorem justo sed ligula. Pellentesque ultrices velit quis turpis lacinia lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo, dui ut lobortis pretium, sapien ligula varius velit, et sollicitudin lorem justo sed ligula. Pellentesque ultrices velit quis turpis lacinia lobortis.
							</Tabitem>
							<Tabitem name="Tab 4" image='img-3.jpg'>
							   4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo, dui ut lobortis pretium, sapien ligula varius velit, et sollicitudin lorem justo sed ligula. Pellentesque ultrices velit quis turpis lacinia lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo, dui ut lobortis pretium, sapien ligula varius velit, et sollicitudin lorem justo sed ligula. Pellentesque ultrices velit quis turpis lacinia lobortis.
							</Tabitem>
						</Tabgroup>
					</Col>
				</Row>
			</Container>
		</section>
		</div>
	</>	
	);
}

export default Fullwidth;
