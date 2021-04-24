/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import StarDynamic from '../../shared/StarDynamic.jsx';

const AddReview = ({ product }) => (
  <form>
    <label for="review">
      Write Your Review:
      About the
      {product}
    </label>
    <br />
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
  </form>
);

AddReview.propTypes = {
  product: PropTypes.number.isRequired,
};

export default AddReview;
