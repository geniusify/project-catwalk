import React from 'react';

import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';

const Overview = props => (
  <div style={{border: "1px solid grey", backgroundColor: '#eee'}}>OVERVIEW
    <ImageGallery />
    <ProductInfo />
    <StyleSelector />
    <AddToCart />
  </div>

);

export default Overview;

