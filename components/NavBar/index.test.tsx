import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from './';

it('renders Navbar with Home text', () => {
  const { getByText } = render(<NavBar clearToken={() => {}} />);
  const homeText = getByText(/Home/i);
  expect(homeText).toBeInTheDocument();
});
