/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';

import IndividualReview from './Individual-Review.jsx';

const ReviewList = ({ reviewData, displayReviewCount }) => {
  if (reviewData) {
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
  }

  return null;
};

ReviewList.propTypes = {
  reviewData: PropTypes.object.isRequired,
  displayReviewCount: PropTypes.number.isRequired,
};

export default ReviewList;
