/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

// eslint-disable-next-line arrow-body-style
const ProductInfo = ({ info }) => {
  // default_price is replaced by style price or style sale price
  // description may or may not exist

  return (
    <div className="ov-product-info">
      <div>
        <em>Star Rating </em>
        <a href="#"> Read all reviews </a>
      </div>
      <div>
        <h4 className="ov-category">{info.category}</h4>
      </div>
      <div>
        <h2>{info.name}</h2>
      </div>
      <div>
        {`$${info.default_price}`}
      </div>
      <div>
        <br />
        <em>Share on Social media</em>
      </div>
    </div>
  );
};

export default ProductInfo;
