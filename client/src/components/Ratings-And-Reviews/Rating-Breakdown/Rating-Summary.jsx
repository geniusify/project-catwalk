/* eslint-disable react/forbid-prop-types */
<<<<<<< HEAD
/* eslint-disable no-console */
=======
>>>>>>> 085671a038dd4f15b79291c698af8691fd43a65f
import React from 'react';
import PropTypes from 'prop-types';

class RatingSummary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
<<<<<<< HEAD
      rating: 0,
      ratingCount: 0,
=======

>>>>>>> 085671a038dd4f15b79291c698af8691fd43a65f
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
<<<<<<< HEAD
    const { rating, ratingCount } = this.state;
=======
    const { data } = this.props;
>>>>>>> 085671a038dd4f15b79291c698af8691fd43a65f

    return (
      <div className="rr-rating-summary">
        <p>
<<<<<<< HEAD
          placeholder rating summmary:
          {rating}
          <br />
          placeholder star rating:
          {rating}
=======
          rating summmary:
          {this.calculateAverage()}
          <br />
          star rating:
          {this.calculateAverage()}
>>>>>>> 085671a038dd4f15b79291c698af8691fd43a65f
          <br />
          reviews count:
          {data.count}
        </p>
      </div>
    );
  }
}

RatingSummary.propTypes = {
<<<<<<< HEAD
  reviews: PropTypes.array.isRequired,
=======
  data: PropTypes.array.isRequired,
>>>>>>> 085671a038dd4f15b79291c698af8691fd43a65f
};

export default RatingSummary;
