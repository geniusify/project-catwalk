/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Description from './Description.jsx';

// eslint-disable-next-line arrow-body-style
const ProductInfo = ({ description }) => {
  return (
    <div className="ov-product-info">
      <h4>ProductInfo</h4>
      <div>Star Rating</div>
      <div>Product Category</div>
      <div>Product Title</div>
      <div>Price</div>
      <Description description={description} />
      <div>Share on Social media</div>
    </div>
  );
};

export default ProductInfo;
