import React, { useState } from 'react';

const MoreReviews = () => {
  const [reviews, addReviews] = useState(2);

  return (
    <button
      type="button"
      onClick={() => addReviews(() => reviews + 2)}
    >
      More Reviews
    </button>
  );
};

export default MoreReviews;
