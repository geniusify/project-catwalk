/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

class RatingSummary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  calculateAverage() {
    const { data } = this.props;
    let average = 0;

    data.results.forEach((review) => {
      average += review.rating;
    });

    return average / data.count;
  }

  render() {
    const { data } = this.props;

    return (
      <div className="rr-rating-summary">
        <p>
          rating summmary:
          {this.calculateAverage()}
          <br />
          star rating:
          {this.calculateAverage()}
          <br />
          reviews count:
          {data.count}
        </p>
      </div>
    );
  }
}

RatingSummary.propTypes = {
  data: PropTypes.array.isRequired,
};

export default RatingSummary;
