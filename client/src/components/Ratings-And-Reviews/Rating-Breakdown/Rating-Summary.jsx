import React from 'react';
import PropTypes from 'prop-types';

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

  return ((recommended.true / totalCount) * 100).toFixed(2);
};

const RatingSummary = ({ ratings, recommended }) => {
  const averageRating = calculateAverage(ratings);
  const reviewCounts = calculateCounts(ratings);
  const averageRecommended = calculateRecommended(recommended);

  return (
    <>
      rating summmary:
      <br />
      {isNaN(averageRating)
        ? (
          <span>
            no ratings!
          </span>
        )
        : averageRating}
      <br />
      <Stars
        rating={Math.round(averageRating * 2) / 2}
        clickable={false}
      />
      <br />
      review count:&nbsp;
      {reviewCounts}
      <br />
      recommended:&nbsp;
      {isNaN(averageRecommended)
        ? (
          <span>
            none yet!
          </span>
        )
        : (
          <span>
            {averageRecommended}
            %
          </span>
        )}
    </>
  );
};

RatingSummary.propTypes = {
  ratings: PropTypes.object.isRequired,
  recommended: PropTypes.object.isRequired,
};

export default RatingSummary;
