import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

test('render the main component', () => {
    render(<App />);
    const main = screen.getByTestId('main');
    expect(main).toBeInTheDocument();
});
