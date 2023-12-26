import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CreateProductForm from "../src/components/CreateProductForm";

test("click create button redirects to HomePage", () => {
    const { getByText } = render(
        <BrowserRouter>
            <CreateProductForm />
        </BrowserRouter>
    );

    const createButton = getByText('Create');
    const code = CreateProductForm.toString()
    const expectedText = 'navigate("/")'
    expect(createButton).toHaveAttribute('type', 'submit');
    expect(code).toContain(expectedText)

    if (fireEvent.click(createButton)) {
        expect(window.location.href).toBe('http://localhost:3000/');
    }
});
