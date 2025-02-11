import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders Q&A System title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Q&A System/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders search input', () => {
  render(<App />);
  const searchInput = screen.getByPlaceholderText(/ask your question/i);
  expect(searchInput).toBeInTheDocument();
}); 