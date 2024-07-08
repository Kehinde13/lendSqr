import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import LoginPage from '../Pages/LoginPage';

describe('LoginPage', () => {
  test('renders LoginPage component', () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    // Check if logo is displayed
    expect(screen.getByAltText('logo')).toBeInTheDocument();

    // Check if sign in image is displayed
    expect(screen.getByAltText('Sign in image')).toBeInTheDocument();

    // Check if welcome message is displayed
    expect(screen.getByText('Welcome!')).toBeInTheDocument();

    // Check if email and password input fields are displayed
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();

    // Check if "FORGOT PASSWORD?" link is displayed
    expect(screen.getByText('FORGOT PASSWORD?')).toBeInTheDocument();

    // Check if "LOG IN" button is displayed
    expect(screen.getByText('LOG IN')).toBeInTheDocument();
  });


  test('renders a link to the dashboard', () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    // Check if the Link component points to the dashboard
    const link = screen.getByText('LOG IN');
    expect(link.closest('a')).toHaveAttribute('href', '/dashboard');
  });
});
