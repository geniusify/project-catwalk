/* eslint-disable no-case-declarations */
/* eslint-disable no-param-reassign */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const SortReviews = ({ displayReviewCount, reviewData, setReviewData }) => {
  const sortReviewData = (sortType) => {
    const { results } = reviewData;
    let sorted = [];

    switch (sortType) {
      case 'Helpful':
        sorted = results.slice(0, displayReviewCount).sort((a, b) => b.helpfulness - a.helpfulness);
        break;
      case 'Newest':
        sorted = results.slice(0, displayReviewCount).sort((a, b) => (
          new Date(b.date) - new Date(a.date)
        ));
        break;
      case 'Relevant':
        break;
      default:
        break;
    }

    const newReviewData = JSON.parse(JSON.stringify(reviewData));
    newReviewData.results = sorted;
    return newReviewData;
  };

  const handleClick = (event) => {
    setReviewData(sortReviewData(event.target.value));
  };

  return (
    <select
      onChange={handleClick.bind(this)}
    >
      <option>Helpful</option>
      <option>Newest</option>
      <option>Relevant</option>
    </select>
  );
};

SortReviews.propTypes = {
  displayReviewCount: PropTypes.number.isRequired,
  reviewData: PropTypes.object.isRequired,
  setReviewData: PropTypes.func.isRequired,
};

export default SortReviews;
