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
import Attributes from './Attributes.jsx';

const Overview = (props) => {
  const [productId, setProductId] = useState(23600);
  return (
    <div className="ov-container">
      <ImageGallery />
      <ProductInfo info={mock.info} />
      <ProductDescription description={mock.info.description} />
      <StyleSelector styles={mock.styles.results} />
      <AddToCart />
      <Attributes />
    </div>
  );
};

export default Overview;
