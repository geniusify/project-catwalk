/* eslint-disable object-curly-newline */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from 'react';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import ProductInfo from './ProductInfo.jsx';

const info = {
  category: 'stuff',
  name: 'fake product',
  default_price: '1000000.00',
};

it('renders the product\'s info', async () => {
  render(<ProductInfo info={info} />);

  expect(screen.getByText('stuff')).toBeInTheDocument();
  expect(screen.getByText('fake product')).toBeInTheDocument();
  expect(screen.getByText('$1000000.00')).toBeInTheDocument();
});

it('is unaffected by a click', async () => {
  render(<ProductInfo info={info} />);

  const category = screen.getByText('stuff');
  await userEvent.click(category);
  expect(screen.getByText('stuff')).toBeInTheDocument();
});
