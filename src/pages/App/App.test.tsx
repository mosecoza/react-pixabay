import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('', () => {
  render(<App />);
  const linkElement = screen.getByText(/image/i);
  expect(linkElement).toBeInTheDocument();
});
