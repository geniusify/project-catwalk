import React from 'react';
import PropTypes from 'prop-types';

import IndividualReview from './Individual-Review.jsx';

const ReviewList = ({ reviewData, displayReviewCount }) => {
  const { results } = reviewData;
  const displayReviews = results.slice(0, displayReviewCount);

  return reviewData.results.length > 0
    ? (
      <div>
        {displayReviews.map((review) => (
          <IndividualReview review={review} />
        ))}
      </div>
    )
    : (
      <span>
        no reviews!
      </span>
    );
};

ReviewList.propTypes = {
  reviewData: PropTypes.object.isRequired,
  displayReviewCount: PropTypes.number.isRequired,
};

export default ReviewList;
