/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
import React from 'react';

import Overview from './Overview/Overview.jsx';
import RatingsAndReviews from './Ratings-And-Reviews/Ratings-And-Reviews.jsx';
import CarouselContainer from './RelatedItems/CarouselContainer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: undefined,
    };
  }

  componentDidMount() {
    const defaultId = '23718'; // A random default product
    const productId = this.getProductIdFromUrl() ?? defaultId;
    this.setState({ productId });
  }

  getProductIdFromUrl() {
    const { search } = window.location;
    const productIdRegex = /p_id=([0-9]+)/; // E.g.: "?p_id=12345"
    return productIdRegex.exec(search)?.[1];
  }

  render() {
    return this.state.productId ? (
      <div>
        <Overview productId={this.state.productId} />
        <CarouselContainer productId={this.state.productId} />
        <RatingsAndReviews productId={this.state.productId} />
      </div>
    ) : (<div>loading...</div>);
  }
}

export default App;
