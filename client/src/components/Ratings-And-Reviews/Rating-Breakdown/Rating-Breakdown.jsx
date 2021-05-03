import React from 'react';
import PropTypes from 'prop-types';

import RatingSummary from './Rating-Summary.jsx';
import Breakdown from './Breakdown.jsx';
import ProductBreakdown from './Product-Breakdown.jsx';

const RatingBreakdown = ({ reviewMetaData }) => {
  const { ratings, recommended, characteristics } = reviewMetaData;

  return (
    <>
      <RatingSummary
        ratings={ratings}
        recommended={recommended}
      />
      <Breakdown ratings={ratings} />
      <br />
      <ProductBreakdown characteristics={characteristics} />
    </>
  );
};

RatingBreakdown.propTypes = {
  reviewMetaData: PropTypes.object.isRequired,
};

export default RatingBreakdown;
