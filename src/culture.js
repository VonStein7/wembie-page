import React from 'react';
import {Image, Tab, Row, Col, Nav} from 'react-bootstrap';
import './culture.css';
import moldovaFlag from './images/Moldova.jpg';
import BashkirsFlag from './images/Bashkiria.jpg';


class Culture extends React.Component {
	render () {
		return (
			<div id="CountryContainer">
				<div id="MoldovaContainer">
				</div>

				<div className="Mleft" data-aos="fade-left">
					<div className="MoldovaHeader">
						<h2>Moldova</h2>
					</div>

					<div className="Mtext">
						<p>{para}</p>
					</div>	
				</div>
			</div>
		)
	}
}

let para = 'Moldova, an Eastern European country and former Soviet republic, has varied terrain including forests, rocky hills and vineyards. Its wine regions include Nistreana, known for reds, and Codru, home to some of the world’s largest cellars. Capital Chișinău has Soviet-style architecture and the National Museum of History, exhibiting art and ethnographic collections that reflect cultural links with neighboring Romania.';
				/*<a href='https://en.wikipedia.org/wiki/Moldova'>Moldova</a><br/>
				<a href='https://en.wikipedia.org/wiki/Bashkirs'>Bashkir</a>*/
export default Culture;
				// <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  		// 		<Row>
				//     <Col sm={3}>
				//       <Nav variant="pills" className="flex-column">
				//         <Nav.Item>
				//           <Nav.Link eventKey="first">Moldova</Nav.Link>
				//         </Nav.Item>
				//         <Nav.Item>
				//           <Nav.Link eventKey="second">Bashkirs</Nav.Link>
				//         </Nav.Item>
				//       </Nav>
				//     </Col>
				//     <Col sm={9}>
				//       <Tab.Content>
				//         <Tab.Pane eventKey="first">
				//           <p>{para}</p>
				//         </Tab.Pane>
				//         <Tab.Pane eventKey="second" style={{color:'red'}}>
				//           <p>Hello world 2</p>
				//         </Tab.Pane>
				//       </Tab.Content>
				//     </Col>
  		// 		</Row>
				// </Tab.Container>

				/*
					<div className="Bashkirs">
						<p>Bashkirs</p>
					</div>
				*/