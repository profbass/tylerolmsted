import { render, screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect'; // Import the necessary function
import App from '../App'; // Move the import statement to the top

test('render the main component', () => {
    render(<App />);
    const main = screen.getByTestId('main');
    expect(main).toBeInTheDocument();
});
