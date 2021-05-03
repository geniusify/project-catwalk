import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import FormCharacteristics from './Form-Characteristics.jsx';
import Stars from '../../shared/Stars.jsx';

const AddReviewForm = ({
  productId, setReviewData, reviewMetaData, setReviewMetaData, setShowAddReview,
}) => {
  const [recommended, setRecommended] = useState(false);
  const [reviewSummary, setReviewSummary] = useState('summary placeholder');
  const [reviewBody, setReviewBody] = useState('body placeholder');
  const [nickname, setNickname] = useState('nickname placeholder');
  const [email, setEmail] = useState('placeholder@email.com');
  const [rating, setRating] = useState(3);

  const { characteristics } = reviewMetaData;
  const [reviewCharacteristics, setReviewCharacteristics] = useState({});

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
      rating,
      summary: reviewSummary,
      body: reviewBody,
      recommend: recommended,
      name: nickname,
      email,
      photos: [],
      characteristics: reviewCharacteristics,
    };

    axios({
      url: 'api/reviews',
      method: 'post',
      data: formData,
    });

    axios({
      url: `api/reviews?product_id=${productId}`,
      method: 'get',
    })
      .then(({ data }) => {
        setReviewData(data);
      });

    axios({
      url: `api/reviews/meta?product_id=${productId}`,
      method: 'get',
    })
      .then(({ data }) => {
        setReviewMetaData(data);
      });

    setShowAddReview(false);
  };

  return (
    <form
      key="form"
      onSubmit={handleSubmit.bind(this)}
    >
      <label htmlFor="star-rating">Star rating:</label>
      <Stars
        rating={rating}
        setRating={setRating}
        clickable={true}
      />
      <br />
      <br />

      <label htmlFor="recommended">Recommended?</label>
      <br />
      <input type="radio" id="yes" name="recommended" value="yes" onClick={handleRadioButton.bind(this)} />
      <label htmlFor="yes">yes</label>
      <br />
      <input type="radio" id="no" name="recommended" value="no" onClick={handleRadioButton.bind(this)} />
      <label htmlFor="no">no</label>
      <br />
      <br />

      Characteristics:
      <br />
      <br />
      {Object.keys(characteristics).map((individualCharacteristic) => (
        <>
          <FormCharacteristics
            individualCharacteristic={individualCharacteristic}
            characteristics={characteristics}
            reviewCharacteristics={reviewCharacteristics}
            setReviewCharacteristics={setReviewCharacteristics}
          />
          <br />
          <br />
        </>
      ))}
      <br />
      Review Summary:
      <br />
      <input type="text" name="summary" onChange={handleUpdateTextBox.bind(this)} />
      <br />
      <br />
      Review Body:
      <br />
      <textarea rows="5" cols="30" name="review-body" onChange={handleUpdateTextBox.bind(this)} />
      <br />
      <br />
      Nickname:
      <br />
      <input type="text" name="nickname" onChange={handleUpdateTextBox.bind(this)} />
      <br />
      <br />
      Email:
      <br />
      <input type="email" name="email" onChange={handleUpdateTextBox.bind(this)} />
      <br />
      <br />
      <input className="review-button" type="submit" value="Submit" />
    </form>
  );
};

AddReviewForm.propTypes = {
  productId: PropTypes.string.isRequired,
  setReviewData: PropTypes.func.isRequired,
  reviewMetaData: PropTypes.object.isRequired,
  setReviewMetaData: PropTypes.func.isRequired,
  setShowAddReview: PropTypes.func.isRequired,
};

export default AddReviewForm;
