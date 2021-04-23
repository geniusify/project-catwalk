import React, { useState, useEffect } from 'react';

const Favorite = ({ styleId }) => {
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    setLiked(localStorage.getItem(styleId) === 'liked');
  }, [styleId]);
  const toggleLiked = () => {
    if (liked) {
      localStorage.removeItem(styleId);
    } else {
      localStorage.setItem(styleId, 'liked');
    }
    setLiked((l) => !l);
  };

  return (
    <button
      className={liked ? 'ov-cart-liked' : 'ov-cart-like'}
      type="button"
      onClick={toggleLiked}
    >
      {styleId}
    </button>
  );
};

export default Favorite;
