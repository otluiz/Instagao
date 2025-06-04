import { render, screen } from '@testing-library/react';
import App from './App';

test('renders login form', () => {
  render(<App />);
  const heading = screen.getByText(/Instagrão/i);
  expect(heading).toBeInTheDocument();
});
