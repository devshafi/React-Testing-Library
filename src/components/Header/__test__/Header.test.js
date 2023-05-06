import { render, screen } from "@testing-library/react";
import Header from "../Header.js";

// regular test
test("header props renders properly", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

// test by role
it("matches the header value of the header to be Test", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByRole("heading", { name: "Test" });
  expect(headingElement).toBeInTheDocument();
});

//test by id
it("matches the header by test id", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByTestId("header-1");
  expect(headingElement).toBeInTheDocument();
});

//get all by
it("matches the header by test id", () => {
  render(<Header title="My Header" />);
  const headingElements = screen.getAllByRole("heading");
  expect(headingElements.length).toBe(2);
});

// FIND BY

// regular test note: findBy requires async await
test("header props renders properly", async () => {
  render(<Header title="My Header" />);
  const headingElement = await screen.findByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

//Query By

// query by allow not to throw an error when it doesn't find a match
// this helps negative assertion logics
test("header props renders properly", async () => {
  render(<Header title="My Header" />);
  const headingElement = await screen.queryByText(/dogs/i);
  expect(headingElement).not.toBeInTheDocument();
});
