import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import FetchUsers from '../hooks/FetchUsers';

// Mock dependencies
jest.mock('../hooks/FetchUsers', () => ({
  __esModule: true,
  ...(jest.requireActual('../hooks/FetchUsers') as object),
  default: jest.fn(),
}));
jest.mock('../Components/Navbar', () => () => <div data-testid="navbar">Navbar</div>);
jest.mock('../Components/Sidebar', () => () => <div data-testid="sidebar">Sidebar</div>);



describe('Dashboard', () => {
  beforeEach(() => {
    (FetchUsers as jest.Mock).mockReturnValue({
      userData: [
        {
          _id: "1",
          name: "John Doe",
          index: 0,
          guid: "guid-1",
          isActive: true,
          balance: "1000",
          picture: "picture-url",
          age: 30,
          username: "johndoe",
          gender: "male",
          organization: "Organization",
          email: "john@example.com",
          phone: "1234567890",
          marital: "single",
          residence: "Address",
          children: "none",
          status: "active",
          address: "Address",
          joined: "2020-01-01",
          guarantor: [
            {
              id: 1,
              name: "Guarantor 1",
              email: "guarantor1@example.com",
              phone: "0987654321",
              relationship: "friend",
            },
            {
              id: 2,
              name: "Guarantor 2",
              email: "guarantor2@example.com",
              phone: "1234509876",
              relationship: "colleague",
            },
          ],
        },
      ],
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('check if FetchUsers is called', () => {
    render(
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    );

    expect(FetchUsers).toHaveBeenCalled();
  });

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
});
