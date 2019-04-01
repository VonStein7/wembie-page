import React, { Component } from 'react';
import './App.css';

import Nav from './navBar.js';
import About from './About.js';
import Food from './products.js';
import FindUs from './findUs.js';
import Share from './share.js';
import Culture from './culture.js';
import CultureBash from './cultureBash.js';
import Desserts from './desserts.js';
import Location from './location.js';
import Market from './market.js';
import Footer from './footer.js';

import AOS from 'aos';
import './dist/aos.css';
import Axios from 'axios';


class App extends Component {
  componentDidMount(){
    AOS.init({
      duration:1500
    })
  }
  render() {
    return (
      <div className="App">
        <header>
          <Nav className="nav"/>
        </header>
          <div>
            <About />
          </div>
          <Market />
          <Culture/> 
          <CultureBash />
          <Food />
          <Desserts />
        <Location />
        <Share />
        <Footer />
      </div>
    );
  }
}

export default App;

