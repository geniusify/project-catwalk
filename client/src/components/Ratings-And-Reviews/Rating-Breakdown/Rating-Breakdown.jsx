import React from 'react';
import axios from 'axios';

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
    const { reviews } = this.state;
    console.log('state: ', this.state);

    return (
      <div>
        - begin rendering rating breakdown section
        <RatingSummary
          reviews={reviews}
        />
        <Breakdown />
        <ProductBreakdown />
        - end rendering rating breakdown section
      </div>
    );
  }
}

export default RatingBreakdown;
