import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';

// Mock dependencies
jest.mock('../hooks/FetchUsers');
jest.mock('../Components/Navbar', () => () => <div data-testid="navbar">Navbar</div>);
jest.mock('../Components/Sidebar', () => () => <div data-testid="sidebar">Sidebar</div>);

describe('Dashboard', () => {
  test('renders Dashboard component with Navbar and Sidebar', () => {
    render(
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    );

    // Assert that Navbar is rendered
    expect(screen.getByTestId('navbar')).toBeInTheDocument();

    // Assert that Sidebar is rendered
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('passes userData to Navbar', () => {
    render(
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    );

    // Check if the Navbar received the correct userData
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });
});
