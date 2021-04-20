import React from 'react';

import RatingBreakdown from './Rating-Breakdown/Rating-Breakdown.jsx';

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
      </div>
    );
  }
}

export default RatingsAndReviews;
