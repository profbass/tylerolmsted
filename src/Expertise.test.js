import { render, screen } from '@testing-library/react';
import Expertise from './Expertise';

test('renders expertise data correctly', () => {
  render(<Expertise />);

  // Check if the expertise titles are rendered correctly
  const expertiseTitles = screen.getAllByText(/Technical Direction|Leadership & Management|Process Management|Product Direction|Mobile Development|Web Development/i);
  expect(expertiseTitles).toHaveLength(6);

  // Check if the expertise descriptions are rendered correctly
  const expertiseDescriptions = screen.getAllByText(/Leading the development of web and mobile applications|Leading teams to build great products|Empowering teams to build great products|Creating high value product roadmaps|Building cutting-edge mobile applications|Building cutting-edge web and SaaS applications/i);
  expect(expertiseDescriptions).toHaveLength(6);
});