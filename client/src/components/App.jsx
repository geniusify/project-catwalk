/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */

import React from 'react';
import { Element } from 'react-scroll';
import LogClicks from '../clicklogger.jsx';
import Header from './Header.jsx';
import Overview from './overview/Overview.jsx';
import RatingsAndReviews from './Ratings-And-Reviews/Ratings-And-Reviews.jsx';
import CarouselContainer from './RelatedItems/CarouselContainer.jsx';

window.clicks = [];

const handleClicks = (clickInfo) => {
  console.log(clickInfo);
  window.clicks.push(clickInfo);
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: undefined,
    };
  }

  componentDidMount() {
    const defaultId = '23149'; // A random default product
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
      <div className="app-container">

        <LogClicks callback={handleClicks}>

          <Header className="header-c" />

          <Overview className="ov-c" productId={this.state.productId} />

          <CarouselContainer className="cc-c" productId={this.state.productId} />

          <Element name="reviewsContainer" className="rr-c">
            <RatingsAndReviews productId={this.state.productId} />
          </Element>

        </LogClicks>

      </div>
    )
      : (<div>loading...</div>);
  }
}

export default App;
