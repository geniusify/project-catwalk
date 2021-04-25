/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-named-as-default */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// import ProductContext from '../Context/ProductContext.jsx';
import IndividualReview from './Individual-Review.jsx';

const ReviewList = ({ reviewData }) => {
  // use context to get state of displayReviews
  if (reviewData) {
    const { results } = reviewData;
    const displayReviews = results.slice(0, 4);

    return (
      <div className="rr-review-list">
        {displayReviews.map((review) => (
          <IndividualReview review={review} />
        ))}
      </div>
    );
  }

  return null;
};

ReviewList.propTypes = {
  reviewData: PropTypes.object.isRequired,
};

export default ReviewList;
