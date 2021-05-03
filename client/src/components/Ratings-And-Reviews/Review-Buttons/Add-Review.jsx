import React from 'react';
import PropTypes from 'prop-types';

const AddReview = ({ showAddReview, setShowAddReview }) => (
  <>
    <button
      type="button"
      className="review-button"
      onClick={() => setShowAddReview(!showAddReview)}
    >
      Add Review
    </button>
  </>
);

AddReview.propTypes = {
  showAddReview: PropTypes.bool.isRequired,
  setShowAddReview: PropTypes.func.isRequired,
};

export default AddReview;
