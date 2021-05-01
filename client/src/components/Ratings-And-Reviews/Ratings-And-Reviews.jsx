/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import RatingBreakdown from './Rating-Breakdown/Rating-Breakdown.jsx';
import SortReviews from './Sort-Reviews/Sort-Reviews.jsx';
import ReviewList from './Review-List/Review-List.jsx';
import ReviewButtons from './Review-Buttons/Review-Buttons.jsx';
import AddReviewForm from './Review-Buttons/Add-Review-Form.jsx';

const RatingsAndReviews = ({ productId }) => {
  // productId = '23718';
  productId = '23146';
  // productId = '23152';

  const [reviewData, setReviewData] = useState(undefined);
  const [reviewMetaData, setReviewMetaData] = useState(undefined);
  const [displayReviewCount, setDisplayReviewCount] = useState(2);
  const [showAddReview, setShowAddReview] = useState(false);

  useEffect(() => {
    axios({
      url: `api/reviews?product_id=${productId}&count=20`,
      method: 'get',
    })
      .then(({ data }) => setReviewData(data));
  }, []);

  useEffect(() => {
    axios({
      url: `api/reviews/meta?product_id=${productId}`,
      method: 'get',
    })
      .then(({ data }) => setReviewMetaData(data));
  }, []);

  const renderComponents = () => (
    <div className="rr-container" key="rr-container">
      <div className="rr-product-breakdown">
        <RatingBreakdown
          reviewMetaData={reviewMetaData}
        />
      </div>
      <div className="rr-sort-buttons">
        <SortReviews
          productId={productId}
          reviewData={reviewData}
          setReviewData={setReviewData}
          reviewMetaData={reviewMetaData}
        />
      </div>
      <div className="rr-review-list">
        <ReviewList
          reviewData={reviewData}
          displayReviewCount={displayReviewCount}
        />
      </div>
      <div className="rr-review-buttons">
        <ReviewButtons
          productId={productId}
          setReviewData={setReviewData}
          reviewMetaData={reviewMetaData}
          setReviewMetaData={setReviewMetaData}
          displayReviewCount={displayReviewCount}
          setDisplayReviewCount={setDisplayReviewCount}
          showAddReview={showAddReview}
          setShowAddReview={setShowAddReview}
        />
      </div>
      <div className="rr-review-form">
        {(showAddReview)
          ? (
            <AddReviewForm
              productId={productId}
              setReviewData={setReviewData}
              reviewMetaData={reviewMetaData}
              setReviewMetaData={setReviewMetaData}
              setShowAddReview={setShowAddReview}
            />
          ) : null}
      </div>
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
