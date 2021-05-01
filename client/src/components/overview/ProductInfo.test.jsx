import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import ProductInfo from './ProductInfo.jsx';
import mock from './mockdata.js';

/*
const info = {
    name: mock.styles.results[0].name,
    category: mock.styles.results[0].category,
  };
  const { ratings } = mock.meta;
  const price = mock.styles.results[0].original_price;
  const salePrice = mock.styles.results[0].sale_price;
*/

xit('renders the product\'s info', async () => {
  const info = {
    name: mock.styles.results[0].name,
    category: mock.info.category,
  };
  const { ratings } = mock.meta;
  const price = mock.styles.results[0].original_price;
  const salePrice = mock.styles.results[0].sale_price;

  render(<ProductInfo
    info={info}
    ratings={ratings}
    price={price}
    salePrice={salePrice}
  />);

  expect(screen.getByText('Orange')).toBeInTheDocument();
  expect(screen.getByText('Shirt')).toBeInTheDocument();
  expect(screen.getByText('$42.00')).toBeInTheDocument();
});

xit('is unaffected by a click', async () => {
  const info = {
    name: mock.styles.results[0].name,
    category: mock.info.category,
  };
  const { ratings } = mock.meta;
  const price = mock.styles.results[0].original_price;
  const salePrice = mock.styles.results[0].sale_price;

  render(<ProductInfo
    info={info}
    ratings={ratings}
    price={price}
    salePrice={salePrice}
  />);

  const category = screen.getByText('stuff');
  await userEvent.click(category);
  expect(screen.getByText('stuff')).toBeInTheDocument();
});

// it('calculates average rating correctly', async () => {
//   const ratings = { 1: '5', 2: '10', 3: '9', 4: '6', 5: '7' };
//   expect(getRatingCount(ratings)).toEqual(37);
//   expect(getAverageRating(ratings)).toEqual(3);
// });

// test if no reviews, stars * link to reviews is hidden

// test price and salePrice

// test when 'default?' isn't first style

// test when there's no slogan and/or no description
