/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

class RatingSummary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
      ratingCount: 0,
    };
  }

  render() {
    const { rating, ratingCount } = this.state;

    return (
      <div>
        1. test rendering rating summary
        <p>
          placeholder rating summmary:
          {rating}
          <br />
          placeholder star rating:
          {rating}
          <br />
          placeholder count:
          {ratingCount}
        </p>
      </div>
    );
  }
}

RatingSummary.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default RatingSummary;
