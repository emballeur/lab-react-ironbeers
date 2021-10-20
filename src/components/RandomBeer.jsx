import axios from 'axios';
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

class RandomBeer extends Component {
  state = {
    randomBeer: null,
    isLoading: true,
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        console.log(response.data);
        this.setState({ randomBeer: response.data, isLoading: false });
      })
      .catch((err) => err);
  }

  render() {
    return (
      <div>
        {this.state.isLoading && <h1>...is Loading</h1>}

        {!this.state.isLoading && (
          <Card border="secondary" style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src={this.state.randomBeer.image_url}
              className="rounded mx-auto d-block"
              alt=""
            />

            <Card.Body>
              <Card.Title>
                {this.state.randomBeer.name}{' '}
                {this.state.randomBeer.attenuation_level}
              </Card.Title>
              <Card.Text>
                <p>
                  {this.state.randomBeer.tagline}{' '}
                  <b> {this.state.randomBeer.first_brewed}</b>
                </p>

                <p>{this.state.randomBeer.description}</p>

                <p>
                  {' '}
                  <b>Created By: </b> {this.state.randomBeer.contributed_by}
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        )}
      </div>
    );
  }
}
export default RandomBeer;
