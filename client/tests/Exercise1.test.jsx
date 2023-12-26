import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "../src/pages/HomePage.jsx";

test("button click redirects to create post page", () => {
  const { getByText } = render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );

  const createButton = getByText("Create Product");
  fireEvent.click(createButton);

  // Assert the window location
  expect(window.location.href).toBe('http://localhost:3000/product/create');
});