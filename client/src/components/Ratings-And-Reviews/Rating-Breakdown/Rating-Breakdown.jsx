/* eslint-disable react/forbid-prop-types */
import React from 'react';
<<<<<<< HEAD
import axios from 'axios';
=======
import PropTypes from 'prop-types';
>>>>>>> 085671a038dd4f15b79291c698af8691fd43a65f

import RatingSummary from './Rating-Summary.jsx';
import Breakdown from './Breakdown.jsx';
import ProductBreakdown from './Product-Breakdown.jsx';

class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      key: '',
      count: 0,
      page: 0,
      reviews: [],
    };
  }

  componentDidMount() {
    axios({
      url: 'api/reviews?product_id=23146',
      method: 'get',
    })
      .then(({ data }) => this.setState({
        key: data.product,
        count: data.count,
        page: data.page,
        reviews: data.results,
      }))
      .catch((error) => console.log(error));
  }

  render() {
<<<<<<< HEAD
    const { reviews } = this.state;
    console.log('state: ', this.state);

    return (
      <div>
        - begin rendering rating breakdown section
        <RatingSummary
          reviews={reviews}
        />
        <Breakdown />
=======
    const { data } = this.props;

    return (
      <div className="rr-rating-breakdown">
        <RatingSummary data={data} />
        <Breakdown data={data} />
>>>>>>> 085671a038dd4f15b79291c698af8691fd43a65f
        <ProductBreakdown />
      </div>
    );
  }
}

RatingBreakdown.propTypes = {
  data: PropTypes.array.isRequired,
};

export default RatingBreakdown;
