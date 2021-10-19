import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewBeer extends Component {
  state = {
    name: '',
    description: '',
    contributedBy: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', {
        name: this.state.name,
        description: this.state.description,
        contributed_by: this.state.contributedBy,
      })
      .then(() => {
        this.props.history.push('/beers');
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Link to="/">
          <h1> Home </h1>
        </Link>
        <h1> Add Beer Form</h1>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">name</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            value={this.state.name}
          />

          <label htmlFor="description">name</label>

          <input
            onChange={this.handleChange}
            type="text"
            name="description"
            value={this.state.description}
          />
          <label htmlFor="contributedBy">description</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="contributedBy"
            value={this.state.contributedBy}
          />

          <button type="submit">Add New Beer</button>
        </form>
      </div>
    );
  }
}

export default NewBeer;
