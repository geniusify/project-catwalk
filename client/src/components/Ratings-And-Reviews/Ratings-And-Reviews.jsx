import React from 'react';

import RatingBreakdown from './Rating-Breakdown/Rating-Breakdown.jsx';
import ReviewList from './Review-List/Review-List.jsx';

import data from './testReviewData.js';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewData: data,
    };
  }

  render() {
    const { reviewData } = this.state;

    return (
      <div className="rr-container">
        <RatingBreakdown data={reviewData} />
        <ReviewList data={reviewData} />
      </div>
    );
  }
}

export default RatingsAndReviews;
