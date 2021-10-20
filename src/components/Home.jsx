import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import beersImg from '../assets/beers.png';
import randomImg from '../assets/random-beer.png';
import newBeerImg from '../assets/new-beer.png';

class Home extends Component {
  render() {
    return (
      <div>
        <h1> Home </h1>
        <Link to="/beers">
          <img src={beersImg} alt="beers" />
          <h1> All Beers</h1>
          <p> Lorem Ipsum </p>
        </Link>
        <Link to="/beers/random">
          <img src={randomImg} alt="randombeer" />
          <h1> Random Beer</h1>
          <p> Lorem Ipsum</p>
        </Link>
        <Link to="/new-beer">
          <img src={newBeerImg} alt="newbeer" />
          <h1> New Beer</h1>
          <p> Lorem Ipsum</p>
        </Link>
      </div>
    );
  }
}

export default Home;
