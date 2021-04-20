/* eslint-disable arrow-body-style */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import mock from './mockdata.js';

import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import ProductDescription from './ProductDescription.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import Features from './Features.jsx';

const Overview = (props) => {
  const [productId, setProductId] = useState(23600);
  // XXX: initial style is actually found in styles data
  const [styleIndex, setStyleIndex] = useState(0);
  const style = mock.styles.results[styleIndex];
  const price = style.original_price;
  const salePrice = style.sale_price;
  return (
    <div className="ov-container">
      <ImageGallery photos={mock.styles.results[0].photos} alt={mock.info.name} />
      <ProductInfo
        info={mock.info}
        ratings={mock.meta.ratings}
        price={price}
        salePrice={salePrice}
      />
      <ProductDescription
        description={mock.info.description}
        slogan={mock.info.slogan}
      />
      <StyleSelector
        styles={mock.styles.results}
        index={styleIndex}
      />
      <AddToCart />
      <Features features={mock.info.features} />
    </div>
  );
};

export default Overview;
