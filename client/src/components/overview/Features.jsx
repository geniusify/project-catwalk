/* eslint-disable react/prop-types */

import React from 'react';

// eslint-disable-next-line arrow-body-style
const Features = ({ features }) => {
  return (
    <div className="ov-features">
      {features.map((feature) => (
        <div key={feature.feature}>
          <span className="ov-feature-check">✓</span>
          {feature.feature}
          {feature.value && `: ${feature.value}`}
        </div>
      ))}
    </div>
  );
};

export default Features;
