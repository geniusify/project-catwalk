import React from 'react';
import PropTypes from 'prop-types';

import StarDynamic from '../../shared/StarDynamic.jsx';

const AddReview = ({ product }) => (
  <div className="rr-buttons">
    <h1>
      Write Your Review:
      About the
      {product}
    </h1>
    <StarDynamic />
    <p>
      Recommended:
      <br />
      Characteristics:
      <br />
      Review Summary:
      <br />
      Review Body:
      <br />
      Upload photo:
      <br />
      Nickname:
      <br />
      Email:
      <br />
      Submit:
    </p>
  </div>
);

AddReview.propTypes = {
  product: PropTypes.number.isRequired,
};

export default AddReview;
