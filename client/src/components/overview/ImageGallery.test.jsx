/* eslint-disable object-curly-newline */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from 'react';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
import { render, fireEvent, waitFor, screen, debug, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import ImageGallery from './ImageGallery.jsx';
import mock from './mockdata2.js';

it('Focuses a thumbnail when that thumbnail is clicked', async () => {
  const { photos } = mock.styles.results[0];
  const alt = 'alt';
  const extendedView = false;
  const setExtendedView = () => null;

  // render(<ImageGallery
  //   photos={photos}
  //   alt={alt}
  //   extendedView={extendedView}
  //   setExtendedView={setExtendedView}
  // />);

  console.log('asdfasdfasdf');
  // expect(1).toEqual(1);
});
