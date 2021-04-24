import React from 'react';

import RatingBreakdown from './Rating-Breakdown/Rating-Breakdown.jsx';
import ReviewList from './Review-List/Review-List.jsx';
import AddReview from './Add-Review/Add-Review.jsx';
import MoreReviews from './More-Reviews/More-Reviews.jsx';

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
        <RatingBreakdown data={reviewData} key={Math.random() * 1000000} />
        <ReviewList data={reviewData} key={Math.random() * 1000000} />
        <MoreReviews />
        <AddReview data={reviewData} key={Math.random() * 1000000} />
      </div>
    );
  }
}

export default RatingsAndReviews;
