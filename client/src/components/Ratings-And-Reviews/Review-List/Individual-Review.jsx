/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const IndividualReview = ({ review }) => {
  const {
    rating, reviewer_name, date, summary, body, recommend, response, helpfulness,
  } = review;

  return (
    <div>
      <span>
        Star rating:
        {rating}
        Username:
        {reviewer_name}
        Date:
        {date}
      </span>
      <p>
        Review Summary:
        {summary}
      </p>
      <p>
        Review body:
        {body}
      </p>
      <span>
        Recommended:
        {recommend.toString()}
      </span>
      <p>
        Response to Review:
        {response}
      </p>
      <span>
        Helpful:
        {helpfulness}
      </span>
    </div>
  );
};

IndividualReview.propTypes = {
  rating: PropTypes.number.isRequired,
  reviewer_name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  recommend: PropTypes.bool.isRequired,
  response: PropTypes.string.isRequired,
  helpfulness: PropTypes.number.isRequired,
};

export default IndividualReview;
