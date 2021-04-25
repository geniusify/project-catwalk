/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import AddReviewForm from './Add-Review-Form.jsx';
// import StarDynamic from '../../shared/StarDynamic.jsx';

const AddReview = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setShowModal(!showModal)}
      >
        Add Review
      </button>

      {(showModal) ? <AddReviewForm /> : null}
    </div>
  );
};

export default AddReview;
