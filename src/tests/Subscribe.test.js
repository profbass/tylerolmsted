import { render, screen, fireEvent } from '@testing-library/react';
import Subscribe from '../components/Subscribe';
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';

expect.extend({ toBeInTheDocument });

test('render the subscribe component', () => {
  render(<Subscribe />);
  const subscribeComponent = screen.getByTestId('subscribe-component');
  expect(subscribeComponent).toBeInTheDocument();
});

test('handles form submission', () => {
  render(<Subscribe />);
  
  // Simulate form submission
  const emailInput = screen.getByPlaceholderText('Give me your Email');
  const submitButton = screen.getByText('Join the club');
  
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.click(submitButton);
  
  // Assert that form submission logic is called
  // Add your own assertions here based on your form submission logic
});