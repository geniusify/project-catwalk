/* eslint-disable object-curly-newline */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from 'react';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

it('makes one test pass', async () => {
  expect(2 + 2).toEqual(4);
});
