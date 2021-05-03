import React from 'react';
import PropTypes from 'prop-types';

import IndividualFormCharacteristic from './Individual-Form-Characteristic.jsx';

const productCharacteristics = {
  Size: [
    'A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'
  ],
  Width: [
    'Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide',
  ],
  Comfort: [
    'Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect',
  ],
  Quality: [
    'Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect',
  ],
  Length: [
    'Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long',
  ],
  Fit: [
    'Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long',
  ],
};

const FormCharacteristics = ({
  individualCharacteristic, characteristics, reviewCharacteristics, setReviewCharacteristics,
}) => {
  const handleClick = (event) => {
    const newReviewCharacteristics = JSON.parse(JSON.stringify(reviewCharacteristics));
    const selectedCharacteristic = productCharacteristics[event.target.id];

    const characteristicId = characteristics[event.target.id].id;
    const characteristicRating = selectedCharacteristic.indexOf(event.target.value) + 1;

    newReviewCharacteristics[characteristicId] = characteristicRating;
    setReviewCharacteristics(newReviewCharacteristics);
  };

  return (
    <>
      {individualCharacteristic}
      :&nbsp;
      <select
        className="characteristic-selector"
        id={individualCharacteristic}
        onChange={handleClick.bind(this)}
      >
        <IndividualFormCharacteristic
          individualCharacteristic={productCharacteristics[individualCharacteristic]}
        />
      </select>
    </>
  );
};

FormCharacteristics.propTypes = {
  individualCharacteristic: PropTypes.string.isRequired,
  characteristics: PropTypes.object.isRequired,
  reviewCharacteristics: PropTypes.object.isRequired,
  setReviewCharacteristics: PropTypes.func.isRequired,
};

export default FormCharacteristics;
