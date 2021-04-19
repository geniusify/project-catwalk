/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

// eslint-disable-next-line arrow-body-style
const ProductInfo = ({ info }) => {
  // default_price is replaced by style price or style sale price
  // description may or may not exist

  return (
    <div className="ov-product-info">
      <h4>ProductInfo</h4>
      <div><em>Star Rating</em></div>
      <div>
        <b>Product Category: </b>
        {info.category}
      </div>
      <div>
        <b>Product Name: </b>
        {info.name}
      </div>
      <div>
        <b>Price: </b>
        {info.default_price}
      </div>
      <div><em>Share on Social media</em></div>
    </div>
  );
};

export default ProductInfo;
