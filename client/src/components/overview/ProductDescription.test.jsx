import React from 'react';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import ProductDescription from './ProductDescription.jsx';

xit('renders the product\'s slogan description', async () => {
  render(<ProductDescription
    slogan="Just do it."
    description="We stole this from Nike."
  />);

  expect(screen.getByText('Just do it.')).toBeInTheDocument();
  expect(screen.getByText('We stole this from Nike.')).toBeInTheDocument();
});

xit('doesn\'t crash if no description is provided', async () => {
  render(<ProductDescription
    slogan="Indescribable."
  />);

  expect(screen.getByText('Indescribable.')).toBeInTheDocument();
});
