import { render, screen } from '@testing-library/react';
import Navigation from '../components/Navigation';

test('renders navigation menu items', () => {
  // Mock menu items
  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  // Render the Navigation component with mock menu items
  render(<Navigation menuItems={menuItems} />);

  // Assert that the menu items are rendered
  const renderedMenuItems = screen.getAllByRole('listitem');
  expect(renderedMenuItems.length).toBe(menuItems.length);

  // Assert that the menu item names and hrefs are correct
  menuItems.forEach((item) => {
    const menuItem = screen.getByText(item.name);
    expect(menuItem).toBeInTheDocument();
    expect(menuItem.getAttribute('href')).toBe(item.href);
  });
});