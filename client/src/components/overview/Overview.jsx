/* eslint-disable arrow-body-style */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import mock from './mockdata.js';

import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';

const Overview = (props) => {
  const [productId, setProductId] = useState(23600);
  return (
    <div className="ov-overview">
      OVERVIEW
      <ImageGallery />
      <ProductInfo description={mock.info.description} />
      <StyleSelector />
      <AddToCart />
    </div>
  );
};

export default Overview;
