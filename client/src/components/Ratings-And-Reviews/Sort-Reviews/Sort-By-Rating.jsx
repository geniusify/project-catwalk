/* eslint-disable radix */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const SortByRating = ({
  productId, reviewData, setReviewData, reviewMetaData,
}) => {
  const handleClick = (event) => {
    const sortType = event.target.value.substr(event.target.value.length - 2);

    axios({
      url: `api/reviews?product_id=${productId}&count=20`,
      method: 'get',
    })
      .then(({ data }) => {
        const { results } = data;
        const newReviewData = JSON.parse(JSON.stringify(reviewData));

        const sorted = results.filter((review) => review.rating === parseInt(sortType));
        newReviewData.results = sorted;

        setReviewData(newReviewData);
      });
  };

  return (
    <select
      className="sort-buttons"
      onChange={handleClick.bind(this)}
    >
      {Object.keys(reviewMetaData.ratings).reverse().map((rating) => (
        <option>
          Rating:&nbsp;
          {rating}
        </option>
      ))}
    </select>
  );
};

SortByRating.propTypes = {
  productId: PropTypes.string.isRequired,
  reviewData: PropTypes.object.isRequired,
  setReviewData: PropTypes.func.isRequired,
  reviewMetaData: PropTypes.object.isRequired,
};

export default SortByRating;
