import React from 'react';
import { Grid, Row, Col, Breadcrumb, Image, Label, Glyphicon } from 'react-bootstrap';

import Topnav from './topnav';

const thaipadLogo = require('../images/thaipad_logo.png');
const togoIcon = require('../images/togo-icon.png');
const brusselSprout = require('../images/brussel-sprout.jpg');

export default class Homepage extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			hover: false
		}
	}

	render() {
		return (<Grid>
			<Row className="justify-content-md-center">
				{this.hoverState()}
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