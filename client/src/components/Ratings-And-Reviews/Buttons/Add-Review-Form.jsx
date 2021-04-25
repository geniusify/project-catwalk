/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import StarDynamic from '../../shared/StarDynamic.jsx';

const handleSubmit = (event) => {
  event.preventDefault();

  // find a way to get the data from the form when clicking submit button
  // use the data to make a POST request to add to the review list
  // re render the review list to include the new review

  console.log('data: ', Object.keys(event.target));
};

const AddReviewForm = (setShowModal) => (
  <form
    key="form"
    onSubmit={handleSubmit.bind(this)}
  >
    <label htmlFor="star-rating">Star rating:</label>
    <StarDynamic />
    <br />

    <label htmlFor="recommended">Recommended?</label>
    <br />
    <input type="radio" id="yes" name="recommended" value="yes" />
    <label htmlFor="yes">yes</label>
    <br />
    <input type="radio" id="no" name="recommended" value="no" />
    <label htmlFor="no">no</label>
    <br />

    Characteristics:
    <br />
    Review Summary:
    <br />
    <input type="text" name="summary" />
    <br />
    Review Body:
    <br />
    <textarea rows="5" cols="50" />
    <br />
    Nickname:
    <br />
    <input type="text" name="nickname" />
    <br />
    Email:
    <br />
    <input type="text" name="email" />
    <br />
    <input type="submit" value="Submit" />
  </form>
);

export default AddReviewForm;
