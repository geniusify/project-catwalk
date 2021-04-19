import React from 'react';

import RatingSummary from './Rating-Summary.jsx';
import Breakdown from './Breakdown.jsx';
import ProductBreakdown from './Product-Breakdown.jsx';

class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
        - begin rendering rating breakdown section
        <RatingSummary />
        <Breakdown />
        <ProductBreakdown />
        - end rendering rating breakdown section
      </div>
    );
  }
}

export default RatingBreakdown;
