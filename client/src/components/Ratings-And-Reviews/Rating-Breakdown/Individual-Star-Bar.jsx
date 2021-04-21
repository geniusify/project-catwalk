import React from 'react';
import PropTypes from 'prop-types';

const IndividualStarBar = ({ star, count }) => (
  <p>
    star:
    {star}
    <br />
    bar: star bar placeholder
    <br />
    counts:
    {count}
  </p>
);

IndividualStarBar.propTypes = {
  star: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};

export default IndividualStarBar;
