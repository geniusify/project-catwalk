/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

// eslint-disable-next-line arrow-body-style
const Features = ({ features }) => {
  return (
    <div className="ov-features">
      {JSON.stringify(features)}
    </div>
  );
};

export default Features;
