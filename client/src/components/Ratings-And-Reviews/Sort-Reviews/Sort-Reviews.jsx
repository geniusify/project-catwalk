import React from 'react';
import PropTypes from 'prop-types';

import SortByType from './Sort-By-Type.jsx';
import SortByRating from './Sort-By-Rating.jsx';

const SortReviews = ({
  productId, reviewData, setReviewData, reviewMetaData,
}) => (
  <>
    <SortByType
      productId={productId}
      reviewData={reviewData}
      setReviewData={setReviewData}
    />
    <SortByRating
      productId={productId}
      reviewData={reviewData}
      setReviewData={setReviewData}
      reviewMetaData={reviewMetaData}
    />
  </>
);

SortReviews.propTypes = {
  productId: PropTypes.string.isRequired,
  reviewData: PropTypes.object.isRequired,
  setReviewData: PropTypes.func.isRequired,
  reviewMetaData: PropTypes.object.isRequired,
};

export default SortReviews;
