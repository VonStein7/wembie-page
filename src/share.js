import React from 'react';
import './share.css';
import axios from 'axios';

class Share extends React.Component {
	render () {
		return (
			<div className="InstaContainer">
				<div>
					<h1>Share Some Love</h1>
					<p>Follow us on instagram to keep up with our latest creations.</p>
				</div>
          {photoArr.map((photo,idx) => 
          	<a href={wembie}>
           		<div className="Photos" key={idx} data-aos="fade-down">
           			<div className="Insta"style={{backgroundImage:`url(${photoArr[idx]}`}}>
           			</div>
          		</div>
          	</a>
        	)} 
			</div>
		)
	}
}

let photoArr = [
	`https://instagram.com/p/Bo17O2pFYf1/media/?size=l`,
	`https://instagram.com/p/BpXI3N7h4WQ/media/?size=l`,
	`https://instagram.com/p/Bl29CvAh21k/media/?size=l`,
	`https://instagram.com/p/Bk5JLJTHQHz/media/?size=l`,
	`https://instagram.com/p/BjjSVQ7jte4/media/?size=l`,
	`https://instagram.com/p/BpcRdthhCmR/media/?size=l`,
	`https://instagram.com/p/BlJBQgvHdMx/media/?size=l`,
	`https://instagram.com/p/BoKDd8PHkvM/media/?size=l`
]

let wembie = 'https://www.instagram.com/vvembie/';

export default Share;
				// <div className="Insta" style={{backgroundImage:`url(${photoArr[0]}`}}>
				// </div>