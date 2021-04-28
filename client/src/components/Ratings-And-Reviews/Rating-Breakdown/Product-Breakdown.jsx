/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import IndividualProductBreakdown from './Individual-Product-Breakdown.jsx';

const ProductBreakdown = ({ characteristics }) => (
  Object.entries(characteristics).map((characteristic) => {
    const [key, value] = characteristic;

    return (
      <IndividualProductBreakdown
        barDescription={key}
        barValues={value}
      />
    );
  })
);

ProductBreakdown.propTypes = {
  characteristics: PropTypes.object.isRequired,
};

export default ProductBreakdown;
