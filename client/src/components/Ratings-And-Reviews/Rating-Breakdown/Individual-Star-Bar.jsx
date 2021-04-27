import React from 'react';
import PropTypes from 'prop-types';

const IndividualStarBar = ({ star, counts }) => (
  <p>
    star:
    {star}
    <br />
    bar: star bar placeholder
    <br />
    counts:
    {counts}
  </p>
);

IndividualStarBar.propTypes = {
  star: PropTypes.number.isRequired,
  counts: PropTypes.number.isRequired,
};

export default IndividualStarBar;
