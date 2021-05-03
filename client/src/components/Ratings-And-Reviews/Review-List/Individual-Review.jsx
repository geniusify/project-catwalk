import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import moment from 'moment';

import Stars from '../../shared/Stars.jsx';

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
      .then(() => {});
  };

  const handleReportClick = () => {
    axios({
      url: `api/reviews/${review_id}/report`,
      method: 'put',
    })
      .then(() => {});
  };

  return (
    <div className="rr-review-tile">
      <span>
        <Stars
          rating={rating}
          clickable={false}
        />
        <br />
        {reviewer_name}
        <br />
        {moment(date).fromNow()}
      </span>
      <p>
        {summary}
      </p>
      <p>
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
        {recommend
          ? (
            (
              <span>
                I recommend this product!
              </span>
            )
          )
          : null}
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
        <span onClick={handleHelpfulClick}>
        &nbsp;Yes&nbsp;
        </span>
        (
        {helpfulness}
        )
        &nbsp;|&nbsp;
        <span onClick={handleReportClick}>
          Report
        </span>
      </p>
      <hr />
    </div>
  );
};

IndividualReview.propTypes = {
  review: PropTypes.object.isRequired,
};

export default IndividualReview;
