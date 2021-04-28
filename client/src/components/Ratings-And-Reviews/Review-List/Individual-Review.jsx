/* eslint-disable react/forbid-prop-types */
/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const IndividualReview = ({ review }) => {
  const {
    review_id, rating, reviewer_name, date, summary, body, photos, recommend, helpfulness,
  } = review;

  let { response } = review;

  if (!response) {
    response = '';
  }

  const handleHelpfulClick = () => {
    axios({
      url: `api/reviews/${review_id}/helpful`,
      method: 'put',
    })
      .then(() => console.log('success'))
      .catch(() => console.log('fail'));
  };

  return (
    <div className="rr-review-tile">
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
      {photos.length > 0
        ? (
          photos.map((photo) => (
            <img className="review-photo" src={photo.url} alt={photo.id} />
          ))
        )
        : null}
      <p>
        Recommended:
        {recommend.toString()}
      </p>
      {response.length > 0
        ? (
          <span>
            Response:
            {response}
          </span>
        )
        : null}
      <p>
        Helpful?
        <text onClick={handleHelpfulClick}>
          Yes
        </text>
        {helpfulness}
      </p>
      <hr />
    </div>
  );
};

IndividualReview.propTypes = {
  review: PropTypes.object.isRequired,
};

export default IndividualReview;
