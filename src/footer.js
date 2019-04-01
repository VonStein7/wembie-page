import React from 'react';
import {Jumbotron,Button} from 'react-bootstrap';
import './footer.css'

class Footer extends React.Component {
	render () {
		return (
			<div className="FooterContainer">
				<div className="Contact">
					<h1>Contact Us</h1>
					<h3>Email: info@wembie.com</h3>
				</div>
				<div className="CopyRight">
					<p>Copyright 2019 Wembie - All Rights Reserved</p>
				</div>
			</div>
		)
	}
}

export default Footer;