/* eslint-disable radix */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-param-reassign */
/* eslint-disable react/no-typos */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import StarDynamic from '../../shared/StarDynamic.jsx';

const AddReviewForm = ({
  productId, setReviewData, setReviewMetaData,
}) => {
  const [recommended, setRecommended] = useState(undefined);
  const [reviewSummary, setReviewSummary] = useState(undefined);
  const [reviewBody, setReviewBody] = useState(undefined);
  const [nickname, setNickname] = useState(undefined);
  const [email, setEmail] = useState(undefined);

  const handleRadioButton = (event) => {
    if (event.target.id === 'yes') {
      setRecommended(true);
    } else {
      setRecommended(false);
    }
  };

  const handleUpdateTextBox = (event) => {
    switch (event.target.name) {
      case 'summary':
        setReviewSummary(event.target.value);
        break;
      case 'review-body':
        setReviewBody(event.target.value);
        break;
      case 'nickname':
        setNickname(event.target.value);
        break;
      case 'email':
        setEmail(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      product_id: parseInt(productId),
      rating: 5,
      summary: reviewSummary,
      body: reviewBody,
      recommend: true,
      name: nickname,
      email,
      photos: [],
      characteristics: {
        77680: 5,
      },
    };

    axios({
      url: 'api/reviews',
      method: 'post',
      data: formData,
    })
      .then(() => console.log('added'))
      .catch((error) => console.log(error));

    axios({
      url: `api/reviews?product_id=${productId}`,
      method: 'get',
    })
      .then(({ data }) => {
        console.log('review data: ', data);
        setReviewData(data);
      })
      .catch((error) => console.log(error));

    axios({
      url: `api/reviews/meta?product_id=${productId}`,
      method: 'get',
    })
      .then(({ data }) => {
        console.log('review meta data: ', data);
        setReviewMetaData(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <form
      key="form"
      onSubmit={handleSubmit.bind(this)}
    >
      <label htmlFor="star-rating">Star rating:</label>
      <StarDynamic />
      <br />

      <label htmlFor="recommended">Recommended?</label>
      <br />
      <input type="radio" id="yes" name="recommended" value="yes" onClick={handleRadioButton.bind(this)} />
      <label htmlFor="yes">yes</label>
      <br />
      <input type="radio" id="no" name="recommended" value="no" onClick={handleRadioButton.bind(this)} />
      <label htmlFor="no">no</label>
      <br />

      Characteristics:
      <br />
      Review Summary:
      <br />
      <input type="text" name="summary" onChange={handleUpdateTextBox.bind(this)} />
      <br />
      Review Body:
      <br />
      <textarea rows="5" cols="50" name="review-body" onChange={handleUpdateTextBox.bind(this)} />
      <br />
      Nickname:
      <br />
      <input type="text" name="nickname" onChange={handleUpdateTextBox.bind(this)} />
      <br />
      Email:
      <br />
      <input type="email" name="email" onChange={handleUpdateTextBox.bind(this)} />
      <br />
      <input type="submit" value="Submit" onSubmit={handleSubmit.bind()} />
    </form>
  );
};

AddReviewForm.propTypes = {
  productId: PropTypes.string.isRequired,
  setReviewData: PropTypes.func.isRequired,
  setReviewMetaData: PropTypes.func.isRequired,
};

export default AddReviewForm;
