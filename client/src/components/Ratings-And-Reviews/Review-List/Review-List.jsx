import React from 'react';

import IndividualReview from './Individual-Review.jsx';
import { results } from '../testReviewData.js';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: results,
      numberToDisplay: 4,
    };
  }

  render() {
    const { reviews, numberToDisplay } = this.state;
    const displayList = reviews.slice(0, numberToDisplay);

    return (
      <div className="rr-review-list">
        {displayList.map((review) => (
          <IndividualReview
            review={review}
          />
        ))}
      </div>
    );
  }
}

export default ReviewList;
