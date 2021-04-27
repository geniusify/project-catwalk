/* eslint-disable react/forbid-prop-types */
import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const ProductContext = createContext();

const ProductProvider = (props) => {
  const [productId, setProductId] = useState({
    id: '23146',
    reviewsCount: 2,
  });
  const { children } = props;

  return (
    <ProductContext.Provider value={[productId, setProductId]}>
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ProductProvider;
