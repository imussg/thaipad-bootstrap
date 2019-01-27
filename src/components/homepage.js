import React from 'react';
import { Grid, Row, Col, Breadcrumb, Image } from 'react-bootstrap';

const thaipadLogo = require('../images/thaipad_logo1.png');

export default class Homepage extends React.Component {
	render() {
		return ( <Grid>
			<Row>
				<Col>
					<Breadcrumb>
						<Breadcrumb.Item bsSize="large" href="#">
							<Image className="" src={thaipadLogo} circle />
						</Breadcrumb.Item>
					</Breadcrumb>
				</Col>
			</Row>
		</Grid> );
	}
}