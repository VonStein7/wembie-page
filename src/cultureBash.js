import React from 'react';
import {Image, Tab, Row, Col, Nav} from 'react-bootstrap';
import './culture.css';
import moldovaFlag from './images/Moldova.jpg';
import BashkirsFlag from './images/Bashkiria.jpg';
import AOS from 'aos';
import './dist/aos.css';


class CultureBash extends React.Component {
	render () {
		return (
			<div className="CountryBContainer">
				<div className="BashkirsContainers" data-aos="fade-right">
					<div className="BashkirsHeader">
						<h2>Bashkiria</h2>
					</div>
					
					<div className="Btext">
						<p>{para}</p>
					</div>	
				</div>
				<div className="Bleft">
				</div>
			</div>
		)
	}
}

let para = 'The Republic of Bashkortostan, also historically known as Bashkiria, is a federal subject of Russia. It is located between the Volga River and the Ural Mountains. Its capital is the city of Ufa. With a population of 4,072,292 as of the 2010 Census, Bashkortostan is the most populous republic in Russia.';

export default CultureBash;