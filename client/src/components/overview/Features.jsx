import React from 'react';
import PropTypes from 'prop-types';

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

Features.propTypes = {
  features: PropTypes.arrayOf(PropTypes.shape({
    feature: PropTypes.string,
  })).isRequired,
};

export default Features;
