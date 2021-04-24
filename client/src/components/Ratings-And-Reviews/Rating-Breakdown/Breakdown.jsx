/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import IndividualStarBar from './Individual-Star-Bar.jsx';

class Breakdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  countStars() {
    const { data } = this.props;

    const stars = {
      5: 0, 4: 0, 3: 0, 2: 0, 1: 0,
    };

    data.results.forEach((review) => {
      stars[review.rating] += 1;
    });

    return stars;
  }

  render() {
    const stars = this.countStars();

    return (
      <div className="rr-breakdown">
        {Object.keys(stars).map((star) => (
          <IndividualStarBar
            star={star}
            count={stars[star]}
            key={Math.random() * 1000000}
          />
        ))}
      </div>
    );
  }
}

Breakdown.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Breakdown;
