/* eslint-disable react/require-default-props */
/* eslint-disable radix */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import Stars from '../../shared/Stars.jsx';

const IndividualProductBreakdown = ({ barDescription, barValues }) => {
  const { value } = barValues;

  const barTypes = {
    Size: [
      'A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'
    ],
    Width: [
      'Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide',
    ],
    Comfort: [
      'Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect',
    ],
    Quality: [
      'Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect',
    ],
    Length: [
      'Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long',
    ],
    Fit: [
      'Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long',
    ],
  };

  return (
    <span key={Math.random() * 1000000}>
      {barDescription}
      :&nbsp;
      {barTypes[barDescription][Math.floor((parseFloat(value) * 2) / 2)]}
      <br />
      <Stars
        rating={Math.round(parseFloat(value) * 2) / 2}
        clickable={false}
      />
      <br />
      <br />
    </span>
  );
};

IndividualProductBreakdown.propTypes = {
  barDescription: PropTypes.string.isRequired,
  barValues: PropTypes.object.isRequired,
  value: PropTypes.string,
};

export default IndividualProductBreakdown;
