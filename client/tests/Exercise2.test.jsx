import { render } from '@testing-library/react';
import HomePage from '../src/pages/HomePage.jsx';
import { BrowserRouter } from "react-router-dom";

test('button click redirects to view product page', () => {
    render(
        <BrowserRouter>
            <HomePage />
        </BrowserRouter>
    );

    const code = HomePage.toString()
    const expectedText = 'product/view/${product.id}'

    expect(code).toContain(expectedText)
});
