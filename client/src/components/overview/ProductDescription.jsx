/* eslint-disable react/prop-types */
import React from 'react';

// eslint-disable-next-line arrow-body-style
const ProductDescription = ({ description, slogan }) => {
  return (description || slogan) && (
    <div className="ov-description">
      <h3>{slogan}</h3>
      {description}
    </div>
  );
};

export default ProductDescription;
