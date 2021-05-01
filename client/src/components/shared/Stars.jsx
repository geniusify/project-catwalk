/* eslint-disable react/no-array-index-key */
/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

/*
Example usage:

// If the user can set a rating:
const [rating, setRating] = useState(initialValue);
return (<Stars rating={rating} setRating={setRating} clickable={true} />)

// If static:
return (<Stars rating={staticValue} clickable={false} />)
*/

const individualValues = (value, totalStars) => {
  const values = [];
  for (let i = 0; i < totalStars; i++) {
    if (value - i >= 1) {
      values.push(1);
    } else if (value - i >= 0.5) {
      values.push(0.5);
    } else {
      values.push(0);
    }
  }
  return values;
};

const Stars = ({ rating, setRating, totalStars = 5 }) => {
  const clickable = setRating !== undefined;
  const [hoverVal, sethoverVal] = useState(-1);
  const handleClick = (idx) => setRating(idx + 1);

  const roundUp = 0.25;
  const value = (clickable && hoverVal >= 0 ? hoverVal + 1 : (rating + roundUp));
  const values = individualValues(value, totalStars);

  return (
    <div className="star-rating">
      {values.map((val, i) => (
        <Star
          index={i}
          key={i}
          value={val}
          sethoverVal={clickable ? sethoverVal : undefined}
          handleClick={clickable ? handleClick : undefined}
          clickable={clickable}
        />
      ))}
    </div>
  );
};

const Star = ({ index, value, sethoverVal, handleClick, clickable }) => {
  const src = { 0: 'icons/star_outline.svg', 1: 'icons/star.svg', 0.5: 'icons/star_half.svg' }[value];
  return (
    <img
      src={src}
      className="star-image"
      onMouseEnter={clickable ? () => sethoverVal(index) : undefined}
      onMouseLeave={clickable ? () => sethoverVal(-1) : undefined}
      onClick={clickable ? () => handleClick(index) : undefined}
    />
  );
};

export default Stars;
