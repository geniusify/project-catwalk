import React from 'react';
import PropTypes from 'prop-types';

const IndividualStarBar = ({ star, counts, max }) => (
  <p>
    star:
    {star}
    <br />
    <progress value={counts} max={max} />
    <br />
    counts:
    {counts}
  </p>
);

IndividualStarBar.propTypes = {
  star: PropTypes.number.isRequired,
  counts: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export default IndividualStarBar;
