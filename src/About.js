import React from 'react';
import {Card, Jumbotron} from 'react-bootstrap';
import './About.css';
import cat from './catFive.jpg';

class AboutSection extends React.Component {

	render () {
		return (
			<div id="About">
				<div className="logo">
					<p style={{float:'left'}}><img src={cat} alt='logo'/></p>
				</div>
				<div className="Hero">
					<h1>We are Wembie!</h1>
		       	<p>
		          {para}<span className="Highlight">{span}</span>{ending}
		        </p>
		        <p className='Salutation'>
		        	{para2}
		        </p>
		    </div>     
			</div>
		)
	}
}

let max = {
	float:'right',
	background:'transparent',
	height:250
};
let para = 'A project created by a young couple, originating from Moldova and Bashkiria, who are eager to share our kind memories, happiness, smile and love related with the food from our childhood.'
let span = ' Wembie is not just about the food, it is a reminder that we will always stay kids in our souls';
let ending = ', and it encourages us to keep loving and smiling for the lives we have.'
let para2 = '#keepsmiling'

export default AboutSection; 
