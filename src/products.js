import React from 'react';
import './products.css'
import street from './streetFood.jpeg';

class Food extends React.Component {
	render () {
		return (
			<div className="ProductsContainer">
				<div className="foodAssorted" data-aos="fade-down">
					<h1>Treats That Make You Smile</h1>
				</div>
			</div>
		)
	}
}

export default Food;