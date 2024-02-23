import { render, screen, fireEvent } from '@testing-library/react';
import Contact from './Contact';

test('renders contact form', () => {
  render(<Contact />);
  
  // Assert that the form inputs are rendered
  const nameInput = screen.getByPlaceholderText(/Name/i);
  const emailInput = screen.getByPlaceholderText(/Email/i);
  const messageInput = screen.getByPlaceholderText(/Message/i);
  const submitButton = screen.getByText(/Send/i);

  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(messageInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test('updates form state on input change', () => {
  render(<Contact />);
  
  // Simulate user input
  const nameInput = screen.getByPlaceholderText(/Name/i);
  const emailInput = screen.getByPlaceholderText(/Email/i);
  const messageInput = screen.getByPlaceholderText(/Message/i);

  fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
  fireEvent.change(messageInput, { target: { value: 'Hello, World!' } });

  // Assert that form state is updated
  expect(nameInput.value).toBe('John Doe');
  expect(emailInput.value).toBe('john@example.com');
  expect(messageInput.value).toBe('Hello, World!');
});

test('submits form successfully', () => {
  render(<Contact />);
  
  // Simulate user input
  const nameInput = screen.getByPlaceholderText(/Name/i);
  const emailInput = screen.getByPlaceholderText(/Email/i);
  const messageInput = screen.getByPlaceholderText(/Message/i);
  const submitButton = screen.getByText(/Send/i);

  fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
  fireEvent.change(messageInput, { target: { value: 'Hello, World!' } });

  // Submit the form
  fireEvent.click(submitButton);

  // Assert that success message is displayed
  const successMessage = screen.getByText(/Success!/i);
  expect(successMessage).toBeInTheDocument();
});