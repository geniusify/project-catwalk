import React from 'react';
import PropTypes from 'prop-types';

import IndividualStarBar from './Individual-Star-Bar.jsx';

const Breakdown = ({ ratings }) => {
  let mostRatings = 0;

  Object.values(ratings).forEach((rating) => {
    if (parseInt(rating) > mostRatings) {
      mostRatings = parseInt(rating);
    }
  });

  const listOfRatings = Object.entries(ratings).slice().reverse();
  return listOfRatings.map((rating) => {
    const [key, value] = rating;

    return (
      <>
        <IndividualStarBar
          star={parseInt(key)}
          counts={parseInt(value)}
          max={mostRatings}
        />
      </>
    );
  });
};

Breakdown.propTypes = {
  ratings: PropTypes.object.isRequired,
};

export default Breakdown;
