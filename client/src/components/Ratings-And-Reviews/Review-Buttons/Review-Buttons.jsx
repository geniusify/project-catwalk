/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-typos */
import React from 'react';
import PropTypes from 'prop-types';

import AddReview from './Add-Review.jsx';
import MoreReviews from './More-Reviews.jsx';

const ReviewButtons = ({
  productId, setReviewData, reviewMetaData, setReviewMetaData, displayReviewCount, setDisplayReviewCount,
}) => (
  <>
    <MoreReviews
      displayReviewCount={displayReviewCount}
      setDisplayReviewCount={setDisplayReviewCount}
    />
    <AddReview
      productId={productId}
      setReviewData={setReviewData}
      reviewMetaData={reviewMetaData}
      setReviewMetaData={setReviewMetaData}
    />
  </>
);

ReviewButtons.propTypes = {
  productId: PropTypes.string.isRequired,
  displayReviewCount: PropTypes.number.isRequired,
  setReviewData: PropTypes.func.isRequired,
  reviewMetaData: PropTypes.object.isRequired,
  setReviewMetaData: PropTypes.func.isRequired,
  setDisplayReviewCount: PropTypes.func.isRequired,
};

export default ReviewButtons;
