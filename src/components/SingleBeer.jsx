import axios from 'axios';
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class SingleBeer extends Component {
  state = {
    singleBeer: null,
    isLoading: true,
  };
  componentDidMount() {
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`
      )
      .then((response) => {
        console.log(response.data);
        this.setState({ singleBeer: response.data, isLoading: false });
      })
      .catch((err) => {});
  }

  render() {
    return (
      <div>
        {this.state.isLoading && <h1>...is Loading</h1>}

        {!this.state.isLoading && (
          <Card border="secondary" style={{ width: '18rem' }}>
            {/* <h2>{this.state.singleBeer.name}</h2> */}

            <Card.Img
              variant="top"
              src={this.state.singleBeer.image_url}
              alt=""
            />

            <Card.Body>
              <Card.Title>{this.state.singleBeer.name}</Card.Title>
              <Card.Text>
                <p>{this.state.singleBeer.tagline}</p>
                <p>
                  {' '}
                  <b>Created By: </b> {this.state.singleBeer.contributed_by}
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        )}
      </div>
    );
  }
}
export default SingleBeer;
