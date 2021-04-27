import React from 'react';

import IndividualCharacteristic from './IndividualCharacteristic.jsx';

const Characteristics = () => (
  [...Array(6)].map(() => (
    <IndividualCharacteristic />
  ))
);

export default Characteristics;
