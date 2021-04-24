/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */

import React from 'react';
import { Element } from 'react-scroll';
import logClicks from '../clicklogger.jsx';
import Overview from './overview/Overview.jsx';
import RatingsAndReviews from './Ratings-And-Reviews/Ratings-And-Reviews.jsx';
import CarouselContainer from './RelatedItems/CarouselContainer.jsx';

window.clicks = [];

const handleClicks = (clickInfo) => {
  console.log(clickInfo);
  window.clicks.push(clickInfo);
};

const LoggedOverview = logClicks({ Overview }, handleClicks);
const LoggedCarouselContainer = logClicks({ CarouselContainer }, handleClicks);
const LoggedRatingsAndReviews = logClicks({ RatingsAndReviews }, handleClicks);

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
      <div className="app-container">
        <div className="header">GENIUSIFY</div>
        <div className="ov-c">
          <LoggedOverview className="ov-c" productId={this.state.productId} />
        </div>
        <div className="cc-c">
          <LoggedCarouselContainer productId={this.state.productId} />
        </div>
        <div className="rr-c">
          <Element name="reviewsContainer">
            <LoggedRatingsAndReviews productId={this.state.productId} />
          </Element>
        </div>

      </div>
    ) : (<div>loading...</div>);
  }
}

export default App;
