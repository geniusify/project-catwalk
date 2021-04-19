import React from 'react';

import IndividualProductBreakdown from './Individual-Product-Breakdown.jsx';

class ProductBreakdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      barTypes: {
        Size: ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'],
        Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
        Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
        Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
        Length: ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
        Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'],
      },
    };
  }

  render() {
    const { barTypes } = this.state;

    return (
      <div>
        3. test rendering product breakdown
        {Object.keys(barTypes).map((barDescription) => (
          <p>
            <IndividualProductBreakdown
              barDescription={barDescription}
              barCategories={barTypes[barDescription]}
            />
          </p>
        ))}
      </div>
    );
  }
}

export default ProductBreakdown;
