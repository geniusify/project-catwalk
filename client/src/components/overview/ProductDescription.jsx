import React from 'react';
import PropTypes from 'prop-types';

const ProductDescription = ({ description, slogan }) => {
  return (description || slogan) && (
    <div className="ov-description">
      <h3>{slogan}</h3>
      {description}
    </div>
  );
};

ProductDescription.propTypes = {
  description: PropTypes.string.isRequired,
  slogan: PropTypes.string.isRequired,
};

export default ProductDescription;
