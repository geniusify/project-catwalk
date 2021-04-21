/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

// eslint-disable-next-line arrow-body-style
const Features = ({ features }) => {
  return (
    <div className="ov-features">
      {features.map((feature) => (
        <div>{feature.feature}
        {feature.value ? ` - ${feature.value}` : null}
        </div>
      ))}
    </div>
  );
};

export default Features;
