/* eslint-disable no-case-declarations */
/* eslint-disable no-param-reassign */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const handleSort = (reviews, sortType) => {
  switch (sortType) {
    case 'Helpful':
      return reviews.sort((a, b) => b.helpfulness - a.helpfulness);
    case 'Newest':
      return reviews.sort((a, b) => new Date(b.date) - new Date(a.date));
    case 'Relevant':
      return reviews.sort((a, b) => new Date(b.date) - new Date(a.date))
        .sort((a, b) => (b.date === a.date
          ? (b.helpfulness - a.helpfulness) : null));
    default:
      return reviews;
  }
};

const SortByType = ({ productId, reviewData, setReviewData }) => {
  const handleClick = (event) => {
    const sortType = event.target.value;

    axios({
      url: `api/reviews?product_id=${productId}&count=20`,
      method: 'get',
    })
      .then(({ data }) => {
        const { results } = data;
        const newReviewData = JSON.parse(JSON.stringify(reviewData));

        newReviewData.results = handleSort(results, sortType);
        setReviewData(newReviewData);
      });
  };

  return (
    <select
      className="sort-buttons"
      onChange={handleClick.bind(this)}
    >
      <option>Helpful</option>
      <option>Newest</option>
      <option>Relevant</option>
    </select>
  );
};

SortByType.propTypes = {
  productId: PropTypes.string.isRequired,
  reviewData: PropTypes.object.isRequired,
  setReviewData: PropTypes.func.isRequired,
};

export default SortByType;
