import { render, screen } from '@testing-library/react';
import Button from '../components/Button';
import '@testing-library/jest-dom/extend-expect';

test('renders button with text', () => {
    render(<Button text="" />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveTextContent('');
});

test('renders button with correct link', () => {
    render(<Button link="" />);
    const buttonElement = screen.getByRole('link');
    expect(buttonElement).toBeInTheDocument();
});

test('renders button with correct type', () => {
    render(<Button type="submit" />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement.getAttribute('type')).toMatch(/^(submit|button)$/);
});
