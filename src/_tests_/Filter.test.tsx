import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Filter from '../Components/Filter';
import { userDataType } from '../Pages/Dashboard';

const mockUserData: userDataType[] = [
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
];

describe('Filter Component', () => {
  let setShowFilter: jest.Mock;
  let setDataToDisplay: jest.Mock;

  beforeEach(() => {
    setShowFilter = jest.fn();
    setDataToDisplay = jest.fn();
  });

  test('renders filter form', () => {
    render(
      <Filter
        userData={mockUserData}
        setShowFilter={setShowFilter}
        setDataToDisplay={setDataToDisplay}
      />
    );

    expect(screen.getByLabelText(/Organization/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Status/i)).toBeInTheDocument();
    expect(screen.getByText(/Reset/i)).toBeInTheDocument();
    expect(screen.getByText(/Filter/i)).toBeInTheDocument();
  });

  test('handles input changes', () => {
    render(
      <Filter
        userData={mockUserData}
        setShowFilter={setShowFilter}
        setDataToDisplay={setDataToDisplay}
      />
    );

    const usernameInput = screen.getByPlaceholderText(/User/i);
    fireEvent.change(usernameInput, { target: { value: 'johndoe' } });
    expect(usernameInput).toHaveValue('johndoe');

    const emailInput = screen.getByPlaceholderText(/Email/i);
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    expect(emailInput).toHaveValue('john@example.com');

    const orgInput = screen.getByPlaceholderText(/Org/i);
    fireEvent.change(orgInput, { target: { value: 'Organization' } });
    expect(orgInput).toHaveValue('Organization');

    const statusInput = screen.getByPlaceholderText(/Status/i);
    fireEvent.change(statusInput, { target: { value: 'active' } });
    expect(statusInput).toHaveValue('active');
  });

  test('filters data and sets display data', async () => {
    render(
      <Filter
        userData={mockUserData}
        setShowFilter={setShowFilter}
        setDataToDisplay={setDataToDisplay}
      />
    );

    const usernameInput = screen.getByPlaceholderText(/User/i);
    fireEvent.change(usernameInput, { target: { value: 'johndoe' } });

    const filterButton = screen.getByText(/Filter/i);
    fireEvent.click(filterButton);

    await waitFor(() => {
      expect(setDataToDisplay).toHaveBeenCalledWith([mockUserData[0]]);
      expect(setShowFilter).toHaveBeenCalledWith(false);
    });
  });

  test('shows alert and hides filter if no user found', async () => {
    window.alert = jest.fn();
    
    render(
      <Filter
        userData={mockUserData}
        setShowFilter={setShowFilter}
        setDataToDisplay={setDataToDisplay}
      />
    );

    const usernameInput = screen.getByPlaceholderText(/User/i);
    fireEvent.change(usernameInput, { target: { value: 'nonexistentuser' } });

    const filterButton = screen.getByText(/Filter/i);
    fireEvent.click(filterButton);

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith('No user found');
      expect(setShowFilter).toHaveBeenCalledWith(false);
    });
  });
});
