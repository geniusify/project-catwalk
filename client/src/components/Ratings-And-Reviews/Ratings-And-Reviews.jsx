import React from 'react';

import RatingBreakdown from './Rating-Breakdown/Rating-Breakdown.jsx';
import ReviewList from './Review-List/Review-List.jsx';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="rr-container">
        <RatingBreakdown />
        <ReviewList />
      </div>
    );
  }
}

export default RatingsAndReviews;
