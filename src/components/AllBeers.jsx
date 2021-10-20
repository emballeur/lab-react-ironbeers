import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

class AllBeers extends Component {
  state = {
    listOfBeers: null,
    isLoading: true,
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        console.log(response.data);
        this.setState({ listOfBeers: response.data, isLoading: false });
      })
      .catch((err) => {});
  }

  render() {
    return (
      <div>
        <Link to="/">
          <h1> Home </h1>
        </Link>
        <h1> All Beers </h1>

        {this.state.isLoading && <h1>...Loading</h1>}

        {!this.state.isLoading &&
          this.state.listOfBeers.map((eachBeer) => {
            return (
              <div>
                <Card border="secondary" style={{ width: '18rem' }}>
                  <Link to={`beers/${eachBeer._id}`}>
                    <Card.Img variant="top" src={eachBeer.image_url} alt="" />
                  </Link>
                  <Card.Body>
                    <Card.Title>{eachBeer.name}</Card.Title>
                    <Card.Text>
                      <p>{eachBeer.tagline}</p>
                      <p>
                        {' '}
                        <b>Created By: </b> {eachBeer.contributed_by}
                      </p>
                    </Card.Text>
                    <Card.Link href={`beers/${eachBeer._id}`}>
                      See Details
                    </Card.Link>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
      </div>
    );
  }
}
export default AllBeers;

{
  /* <Link to={`beers/${eachBeer._id}`}>
                  <img src={eachBeer.image_url} alt="" height="200px" />
                  <h3>{eachBeer.name}</h3>
                </Link>
                <p>{eachBeer.tagline}</p>
                <p>
                  {' '}
                  <b>Created By: </b> {eachBeer.contributed_by}
                </p> */
}

/* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> */
