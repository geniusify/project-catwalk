/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-typos */
import React from 'react';
import PropTypes from 'prop-types';

import AddReview from './Add-Review.jsx';
import MoreReviews from './More-Reviews.jsx';

const Buttons = ({
  productId, setReviewData, setReviewMetaData, displayReviewCount, setDisplayReviewCount,
}) => (
  <div className="rr-buttons">
    <MoreReviews
      displayReviewCount={displayReviewCount}
      setDisplayReviewCount={setDisplayReviewCount}
    />
    <AddReview
      productId={productId}
      setReviewData={setReviewData}
      setReviewMetaData={setReviewMetaData}
    />
  </div>
);

Buttons.propTypes = {
  productId: PropTypes.string.isRequired,
  displayReviewCount: PropTypes.number.isRequired,
  setReviewData: PropTypes.func.isRequired,
  setReviewMetaData: PropTypes.func.isRequired,
  setDisplayReviewCount: PropTypes.func.isRequired,
};

export default Buttons;
