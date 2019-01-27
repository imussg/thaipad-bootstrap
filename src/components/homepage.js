import React from 'react';
import { Grid, Row, Col, Breadcrumb, Image, Label, Glyphicon } from 'react-bootstrap';

const thaipadLogo = require('../images/thaipad_logo1.png');
const togoIcon = require('../images/togo-icon.png');

export default class Homepage extends React.Component {
	render() {
		return ( <Grid>
			<Row className="navbar-row">
				<Breadcrumb>
					<Col xs={2}>
						<Breadcrumb.Item bsSize="large" href="#">
							<Image className="" src={thaipadLogo} circle />
						</Breadcrumb.Item>
					</Col>
					<Col xs={2}>
						<Breadcrumb.Item bsSize="large" href="#">
							<h2>{'   Order to go   '}</h2>
						</Breadcrumb.Item>
					</Col>
				</Breadcrumb>
			</Row>
		</Grid> );
	}
}