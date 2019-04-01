import React from 'react';
import './products.css'
import street from './streetFood.jpeg';

class Market extends React.Component {
	render () {
		return (
			<div className="MarketContainer">
				<div className="foodAssorted" data-aos="fade-down">
					<h1>Food From Where?</h1>
				</div>
			</div>
		)
	}
}

export default Market;