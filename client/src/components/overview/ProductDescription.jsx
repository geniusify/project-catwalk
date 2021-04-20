/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

// eslint-disable-next-line arrow-body-style
const ProductDescription = ({ description, slogan }) => {
  return (description || slogan)
    ? (
      <div className="ov-description">
        <h3>{slogan}</h3>
        {description}
      </div>
    )
    : null;
};

export default ProductDescription;
