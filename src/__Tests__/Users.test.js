import React from 'react';
import { render } from '@testing-library/react';
import Users from '../Users/Users';

test('renders Users Header', () => {
 
  const {  getAllByText } = render(<Users />);
  const headerElement = getAllByText(/Users/i)[0];
  expect(headerElement).toBeTruthy();
});
