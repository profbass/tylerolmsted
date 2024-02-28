import { render, screen } from '@testing-library/react';
import Experience from '../components/Experience';

test('renders work experience section', () => {
  render(<Experience />);
  
  // Assert that the section title is rendered
  const sectionTitle = screen.getByText(/My work experience/i);
  expect(sectionTitle).toBeInTheDocument();

  // Assert that the company names are rendered
  const companyNames = screen.getAllByText(/booj|RE\/MAX|Backflip/i);

  // Assert that the position titles are rendered
  const positionTitles = screen.getAllByText(/Director of Production|Executive Director of Engineering|Vice President of Engineering/i);

  // Assert that the company logos are rendered
  const companyLogos = screen.getAllByAltText(/company logo/i);

  // Assert that the company descriptions are rendered
  const companyDescriptions = screen.getAllByText(/Joining the company as the second employee/i);
});