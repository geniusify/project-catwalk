import React from 'react';
import PropTypes from 'prop-types';

const IndividualStarBar = ({ star, counts, max }) => (
  <p>
    {star}
    &nbsp;stars:
    <progress className="star-bar" value={counts} max={max} />
    <br />
    across&nbsp;
    {counts}
    &nbsp;reviews
  </p>
);

IndividualStarBar.propTypes = {
  star: PropTypes.number.isRequired,
  counts: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export default IndividualStarBar;
