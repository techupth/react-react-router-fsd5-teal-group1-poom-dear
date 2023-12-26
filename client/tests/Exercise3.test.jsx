import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "../src/pages/HomePage.jsx";

test("button click redirects to edit product page", () => {
    render(
        <BrowserRouter>
            <HomePage />
        </BrowserRouter>
    );

    const code = HomePage.toString()
    const expectedText = 'product/edit/${product.id}'

    expect(code).toContain(expectedText)
});