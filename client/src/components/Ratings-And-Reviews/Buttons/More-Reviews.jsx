import React from 'react';
import PropTypes from 'prop-types';

const MoreReviews = ({ displayReviewCount, setDisplayReviewCount }) => (
  <button
    type="button"
    className="review-button"
    onClick={() => setDisplayReviewCount(() => displayReviewCount + 2)}
  >
    More Reviews
  </button>
);

MoreReviews.propTypes = {
  displayReviewCount: PropTypes.number.isRequired,
  setDisplayReviewCount: PropTypes.func.isRequired,
};

export default MoreReviews;
