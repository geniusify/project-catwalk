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

const Stars = ({ rating, setRating, clickable, totalStars = 5 }) => {
  const [hover, setHover] = useState(-1);
  const onClick = (idx) => setRating(idx + 1);

  const roundUp = 0.25;
  const value = (clickable && hover >= 0 ? hover + 1 : (rating + roundUp));
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

  return (
    <div className="star-rating">
      {values.map((s, i) => (
        <Star
          index={i}
          key={i}
          value={s}
          setHover={clickable ? setHover : undefined}
          onClick={clickable ? onClick : undefined}
          clickable={clickable}
        />
      ))}
    </div>
  );
};

const Star = ({
  index, value, setHover, onClick, clickable,
}) => {
  const src = { 0: 'icons/star_outline.svg', 1: 'icons/star.svg', 0.5: 'icons/star_half.svg' }[value];
  return (
    <img
      src={src}
      onMouseEnter={clickable ? () => setHover(index) : undefined}
      onMouseLeave={clickable ? () => setHover(-1) : undefined}
      onClick={clickable ? () => onClick(index) : undefined}
    />
  );
};

export default Stars;
