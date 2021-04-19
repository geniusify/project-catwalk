import React from 'react';
import PropTypes from 'prop-types';

const IndividualStarBar = ({ star }) => (
  <p>
    star count:
    {star}
    <br />
    bar: star bar placeholder
    <br />
    counts: star counts placeholder
  </p>
);

IndividualStarBar.propTypes = {
  star: PropTypes.number.isRequired,
};

export default IndividualStarBar;
