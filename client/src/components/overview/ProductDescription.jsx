/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

// eslint-disable-next-line arrow-body-style
const ProductDescription = ({ description, slogan }) => {
  return (
    <div className="ov-description">
      <h3>{slogan}</h3>
      {description}
    </div>
  );
};

export default ProductDescription;
