import React from 'react';
import { Grid, Row, Col, Breadcrumb, Image, Label, Glyphicon } from 'react-bootstrap';

import Topnav from './topnav';

const thaipadLogo = require('../images/thaipad_logo.png');
const bar = require('../images/bar.jpg');
const sukhothai = require('../images/sukhothai.jpg');

export default class Homepage extends React.Component {
	
	constructor(props) {
		super(props);
		// changes the background on an interval combined with some jQuery
		// setInterval(function() {
		// 	const backgrounds = [
		const barImg = <Image className="background-image" src={bar} fluid />;
		const sukImg = <Image className="background-image" src={sukhothai} fluid />;
		// 		<Image className="background-image" src={bar} fluid />
		// 	];

		// }, 10000);
		this.state = {
			hover: false
		}
		// $('body').html(`<body style="background-image: url(${bar});">`);
	}

	render() {
		return (<Grid>
			<Topnav />
			<Row className="justify-content-center">
				<Col md="auto" >
					<Image className="homepage-icon" src={thaipadLogo} circle />
				</Col>
			</Row>
		</Grid> );
	}

	hoverState() {
		// if(!this.state.hover) {
			return (
				<Col md={{ span: 2, offset: 5}} >
					<Image className="homepage-icon" src={thaipadLogo} circle />
				</Col>
			);
		// } else {
		// 	return (
		// 		<Col md={{ span: 3, offset: 4}} >
		// 			<Image className="homepage-icon" src={thaipadLogo} circle />
		// 		</Col>
		// 	)
		// }
	}
}

/*
your local skeleton bone heap

<h1>
	<Label bsStyle="primary">Something will soon go here</Label>
</h1>


*/