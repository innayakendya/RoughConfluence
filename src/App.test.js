// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RoughConfluence title', () => {
    render(<App />);
    const titleElement = screen.getByText(/RoughConfluence/i);
    expect(titleElement).toBeInTheDocument();
});
