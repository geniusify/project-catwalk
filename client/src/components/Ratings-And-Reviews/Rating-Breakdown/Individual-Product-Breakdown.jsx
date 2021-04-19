/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const IndividualProductBreakdown = ({ barDescription, barCategories }) => (
  <span>
    bar description:
    {barDescription}
    <br />
    bar: product breakdown bar placeholder
    <br />
    bar categories:
    {barCategories}
  </span>
);

IndividualProductBreakdown.propTypes = {
  barDescription: PropTypes.string.isRequired,
  barCategories: PropTypes.array.isRequired,
};

export default IndividualProductBreakdown;
