import React from 'react';
//import './culture.css';
import AOS from 'aos';
import './dist/aos.css';
import './desserts.css';


class Location extends React.Component {
	render () {
		return (
			<div className="LocationContainer">
				<div className="box">
					<div className="BoxInfo">
						<h2>Location</h2>
						<p>Come visit us for the 2019 Queens night market season.</p>
						<h3>Time and Date</h3>
						<p>April 20th from 5pm - 12am</p>
					</div>
				</div>
				<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12090.591229336931!2d-73.8508249!3d40.7477746!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x77560c780fbedd10!2sQueens+Night+Market!5e0!3m2!1sen!2sus!4v1550640873496" 
					marginRight="0"
					width="40%" 
					height="450" 
					position="relative"
					frameBorder="0" 
					display="inlineFlex"
					allowFullScreen>
				</iframe>
			</div>
		)
	}
}

export default Location;