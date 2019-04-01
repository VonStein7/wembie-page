import React from 'react';
//import './culture.css';
import AOS from 'aos';
import './dist/aos.css';
import './desserts.css';


class Desserts extends React.Component {
	render () {
		return (
			<div className="FoodContainer">
				<div className="Item1">
					<div className="Descriptions1">
						<div className="info3" data-aos="fade-right">
							<p>Whipped cheese cake filled waffles in chocolate and vanilla flavors.</p>
						</div>
					</div>

					<div className="Descriptions3">
						<div className="info1" data-aos="fade-right">
							<h1>Moldovan Waffles</h1>
						</div>
					</div>	

					<div className="Child">
					</div>
				</div>

				<div className="ProductCard">
					<div className="Item2">
						<div className="Child2">
						</div>
					</div>
					<div className="Descriptions2">
						<div className="info2" data-aos="fade-left">
							<h2>Bashkir Farm Donuts</h2>
							<p>Warm farm cheese donuts topped with powder sugar and drizzled with condensed milk.</p>
						</div>
					</div>	
				</div>
			</div>
		)
	}
}

let para = 'The Republic of Bashkortostan, also historically known as Bashkiria, is a federal subject of Russia. It is located between the Volga River and the Ural Mountains. Its capital is the city of Ufa. With a population of 4,072,292 as of the 2010 Census, Bashkortostan is the most populous republic in Russia.';

export default Desserts;