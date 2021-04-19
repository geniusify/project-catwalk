import React from 'react';

class RatingSummary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ratingSummary: 5,
      starRating: 5,
      ratingCount: 5,
    };
  }

  render() {
    const { ratingSummary, starRating, ratingCount } = this.state;

    return (
      <div>
        <p>
          1. test rendering rating summary
          <br />
          placeholder rating summmary:
          {ratingSummary}
          <br />
          placeholder star rating:
          {starRating}
          <br />
          placeholder count:
          {ratingCount}
        </p>
      </div>
    );
  }
}

export default RatingSummary;