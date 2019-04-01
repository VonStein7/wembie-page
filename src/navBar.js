import React from 'react';
import {Navbar} from 'react-bootstrap';
import logo from './catFive.jpg';

class Nav extends React.Component {
  render() {
    return (
      <div className="Nav">
      	<Navbar variant="dark" style={{background:'navy',height:50}}>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={logo}
                width="30"
                height="auto"
                className="d-inline-block align-top"
              />
              {' Wembie'}
           </Navbar.Brand>
          </Navbar>
      </div>
    );
  }
}

export default Nav;