/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
import React from 'react';

import Overview from './overview/Overview.jsx';
import RatingsAndReviews from './Ratings-And-Reviews/Ratings-And-Reviews.jsx';
import CarouselContainer from './RelatedItems/CarouselContainer.jsx';

window.clicks = [];

const logClicks = (WrappedComponent) => (props) => {
  const startTime = new Date();
  const [name, Component] = Object.entries(WrappedComponent)[0];
  return (
    <div onClick={(event) => {
      const clickInfo = {
        module: name,
        element: event.target,
        time: (new Date() - startTime) / 1000,
      };
      console.log(clickInfo);
      window.clicks.push(clickInfo);
    }}
    >
      <Component {...props} />
    </div>
  );
};

const LoggedOverview = logClicks({ Overview });
const LoggedCarouselContainer = logClicks({ CarouselContainer });
const LoggedRatingsAndReviews = logClicks({ RatingsAndReviews });

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
        <LoggedOverview productId={this.state.productId} />
        <LoggedCarouselContainer productId={this.state.productId} />
        <LoggedRatingsAndReviews productId={this.state.productId} />
      </div>
    ) : (<div>loading...</div>);
  }
}

export default App;
