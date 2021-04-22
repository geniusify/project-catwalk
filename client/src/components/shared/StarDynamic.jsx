/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    [...Array(5)].map((star, index) => {
      const ratingValue = index + 1;

      return (
        <label>
          <input
            type="radio"
            name="rating"
            value={ratingValue}
            onClick={() => setRating(ratingValue)}
          />
          <FaStar
            className="star"
            color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
            size={10}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(null)}
          />
        </label>
      );
    })
  );
};

export default StarRating;
