import { render, screen, fireEvent } from '@testing-library/react';
import Subscribe from './Subscribe';

test('renders subscribe component', () => {
  render(<Subscribe />);
  
  // Assert that the component renders without errors
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