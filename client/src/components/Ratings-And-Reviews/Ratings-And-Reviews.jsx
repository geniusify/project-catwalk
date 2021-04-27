/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import RatingBreakdown from './Rating-Breakdown/Rating-Breakdown.jsx';
import ReviewList from './Review-List/Review-List.jsx';
import Buttons from './Buttons/Buttons.jsx';

// import data from './testReviewData.js';

const RatingsAndReviews = ({ productId }) => {
  productId = '23146';
  // productId = '23718';

  const [reviewData, setReviewData] = useState(undefined);
  const [reviewMetaData, setReviewMetaData] = useState(undefined);
  const [displayReviewCount, setDisplayReviewCount] = useState(2);

  useEffect(() => {
    axios({
      url: `api/reviews?product_id=${productId}`,
      method: 'get',
    })
      .then(({ data }) => setReviewData(data))
      .catch(() => {});
  }, []);

  useEffect(() => {
    axios({
      url: `api/reviews/meta?product_id=${productId}`,
      method: 'get',
    })
      .then(({ data }) => setReviewMetaData(data))
      .catch(() => {});
  }, []);

  const renderComponents = () => (
    <div className="rr-container" key="rr-container">
      <RatingBreakdown
        reviewMetaData={reviewMetaData}
      />
      <ReviewList
        reviewData={reviewData}
        displayReviewCount={displayReviewCount}
      />
      <Buttons
        productId={productId}
        setReviewData={setReviewData}
        setReviewMetaData={setReviewMetaData}
        displayReviewCount={displayReviewCount}
        setDisplayReviewCount={setDisplayReviewCount}
      />
    </div>
  );

  return (
    (reviewData, reviewMetaData) ? renderComponents() : null
  );
};

RatingsAndReviews.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default RatingsAndReviews;
