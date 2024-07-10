import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, useOutletContext } from "react-router-dom";
import Table from "../Components/Table";
import { userDataType } from "../Pages/Dashboard";

// Mock necessary components and hooks
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useOutletContext: jest.fn(),
}));
jest.mock("../Components/Options", () => () => (
  <div data-testid="options">Options</div>
));
jest.mock("../Components/Filter", () => () => (
  <div data-testid="filter">Filter</div>
));

// Mock data
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

(useOutletContext as jest.Mock).mockReturnValue([mockUserData]);

describe("Table Component", () => {
  test("renders table headers and data", () => {
    render(
      <MemoryRouter>
        <Table />
      </MemoryRouter>
    );

    
    expect(screen.getByText("Organization")).toBeInTheDocument()
    

    // Check headers
    const headers = [
      "ORGANIZATION",
      "USERNAME",
      "EMAIL",
      "PHONE NUMBER",
      "DATE JOINED",
      "STATUS",
    ];
    headers.forEach((header) => {
      expect(screen.getAllByText(header)[0]).toBeInTheDocument();
    });

    // Check data
    expect(screen.getAllByText("Organization")[0]).toBeInTheDocument();
    expect(screen.getAllByText("johndoe")[0]).toBeInTheDocument();
    expect(screen.getAllByText("john@example.com")[0]).toBeInTheDocument();
    expect(screen.getAllByText("1234567890")[0]).toBeInTheDocument();
    expect(screen.getAllByText("2020-01-01")[0]).toBeInTheDocument();
    expect(screen.getAllByText("active")[0]).toBeInTheDocument();
  });

  test("toggles filter visibility", () => {
    render(
      <MemoryRouter>
        <Table />
      </MemoryRouter>
    );


   
    expect(screen.getByText("Organization")).toBeInTheDocument()
    

    // Click filter button
    fireEvent.click(screen.getAllByAltText("filter")[0]);

    // Check if filter is displayed
    expect(screen.getAllByTestId("filter")[0]).toBeInTheDocument();
  });

  test("toggles options dropdown", async () => {
    render(
      <MemoryRouter>
        <Table />
      </MemoryRouter>
    );

    
    expect(screen.getByText("Organization")).toBeInTheDocument()
    

    // Click options button
    fireEvent.click(screen.getAllByAltText("options")[0]);

    // Check if options are displayed
    expect(screen.getByTestId("options")).toBeInTheDocument();
  });

  test("paginates data", async () => {
    render(
      <MemoryRouter>
        <Table />
      </MemoryRouter>
    );

    
    expect(screen.getByText("Organization")).toBeInTheDocument()
    

    // Simulate clicking next page button
    fireEvent.click(screen.getAllByRole("button")[1]);

    // Check if the data is paginated
    expect(screen.getAllByText("johndoe")[0]).toBeInTheDocument();
  });
});
