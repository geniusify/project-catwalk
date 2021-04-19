/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

// eslint-disable-next-line arrow-body-style
const ProductDescription = ({ description }) => {
  return (
    <div className="ov-description">
      DESCRIPTION:
      {description}
    </div>
  );
};

export default ProductDescription;
