/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import RatingSummary from './Rating-Summary.jsx';
import Breakdown from './Breakdown.jsx';
import ProductBreakdown from './Product-Breakdown.jsx';

class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // key: '',
      // count: 0,
      // page: 0,
      // reviews: [],
    };
  }

  // componentDidMount() {
  //   axios({
  //     url: 'api/reviews?product_id=23146',
  //     method: 'get',
  //   })
  //     .then(({ data }) => this.setState({
  //       key: data.product,
  //       count: data.count,
  //       page: data.page,
  //       reviews: data.results,
  //     }))
  //     .catch((error) => console.log(error));
  // }

  render() {
    const { data } = this.props;

    return (
      <div className="rr-rating-breakdown">
        <RatingSummary data={data} />
        <Breakdown data={data} />
        <ProductBreakdown />
      </div>
    );
  }
}

RatingBreakdown.propTypes = {
  data: PropTypes.array.isRequired,
};

export default RatingBreakdown;
