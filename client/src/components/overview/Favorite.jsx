/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';

const Favorite = ({ styleId }) => {
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    setLiked(localStorage.getItem(styleId) === 'liked');
  }, [styleId]);
  const toggleLiked = (e) => {
    e.preventDefault();
    if (liked) {
      localStorage.removeItem(styleId);
    } else {
      localStorage.setItem(styleId, 'liked');
    }
    setLiked((l) => !l);
  };

  return (
    <div
      className="ov-cart-like"
      onClick={toggleLiked}
    >
      <input
        className="ov-cart-like-input"
        type="image"
        alt="like"
        title="like"
        src={liked ? 'icons/heart.svg' : 'icons/heart_border.svg'}
      />
    </div>
  );
};

export default Favorite;
