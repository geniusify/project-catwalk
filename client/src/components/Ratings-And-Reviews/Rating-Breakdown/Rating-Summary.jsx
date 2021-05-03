/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable radix */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

// import StarRating from '../../shared/StarDynamic.jsx';
import Stars from '../../shared/Stars.jsx';

const calculateCounts = (ratings) => {
  let count = 0;

  for (const rating in ratings) {
    count += parseInt(ratings[rating]);
  }

  return count;
};

const calculateAverage = (ratings) => {
  let average = 0;
  const count = calculateCounts(ratings);

  for (const rating in ratings) {
    average += parseInt(rating) * parseInt(ratings[rating]);
  }

  return (average / count).toFixed(2);
};

const calculateRecommended = (recommended) => {
  let totalCount = 0;

  for (const count in recommended) {
    totalCount += parseInt(recommended[count]);
  }

  return (recommended.true / totalCount).toFixed(2);
};

const RatingSummary = ({ ratings, recommended }) => (
  <>
    rating summmary:
    {calculateAverage(ratings)}
    <br />
    <Stars
      rating={Math.round(calculateAverage(ratings) * 2) / 2}
      clickable={false}
    />
    <br />
    reviews count:
    {calculateCounts(ratings)}
    <br />
    recommended:
    {calculateRecommended(recommended) * 100}
    %
  </>
);

RatingSummary.propTypes = {
  ratings: PropTypes.object.isRequired,
  recommended: PropTypes.object.isRequired,
};

export default RatingSummary;
