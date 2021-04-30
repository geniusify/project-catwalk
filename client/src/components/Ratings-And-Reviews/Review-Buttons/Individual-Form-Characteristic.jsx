/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const IndividualFormCharacteristic = ({ individualCharacteristic }) => (
  individualCharacteristic.map((description) => (
    <option>{description}</option>
  ))
);

IndividualFormCharacteristic.propTypes = {
  individualCharacteristic: PropTypes.array.isRequired,
};

export default IndividualFormCharacteristic;
